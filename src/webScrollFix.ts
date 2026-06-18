/**
 * Web-only scroll fix for React Native Web + React Navigation.
 *
 * Why this exists:
 *   On web, RNW renders each screen's <ScrollView> as a flex:1 container that
 *   ends up with `overflow-y: visible` instead of `auto`. Content taller than
 *   the viewport then spills out and is clipped, with no way to scroll.
 *   (Verified live: the container IS bounded to the viewport and its child
 *   content is taller — it simply lacks `overflow-y: auto`.)
 *
 * Why it lives in JS (not web/index.html):
 *   Expo SDK 51 uses the Metro web bundler, which generates its own index.html
 *   and ignores a custom web/index.html. Code in the JS bundle, however, is
 *   always included in `expo export`, so this is guaranteed to ship.
 *
 * What it does:
 *   1. Ensures html/body/#root allow scrolling.
 *   2. Finds the bounded screen container whose content overflows and sets
 *      `overflow-y: auto` on it (no reliance on RNW's hashed class names).
 *   3. Re-runs on navigation (interval + clicks + DOM mutations).
 *   4. Forwards wheel/touch to the scroll container as a guarantee for desktop
 *      and iOS Safari.
 */

export function installWebScrollFix(): void {
  if (typeof document === 'undefined') return;

  // 1. Base page styles so the document itself can scroll if needed.
  const baseStyle = document.createElement('style');
  baseStyle.textContent = `
    html { height: 100%; background-color: #1a1a2e; }
    body { height: 100%; margin: 0; padding: 0; background-color: #1a1a2e; }
    #root { display: flex; flex-direction: column; height: 100%; background-color: #1a1a2e; }
  `;
  document.head.appendChild(baseStyle);

  let currentScrollEl: HTMLElement | null = null;

  // 2. Locate the bounded flex container whose child overflows, make it scroll.
  function fixScroll(): void {
    const root = document.getElementById('root');
    if (!root) return;
    const vh = window.innerHeight;
    let el: HTMLElement | null = root;
    let target: HTMLElement | null = null;
    let depth = 0;

    while (el && depth < 40) {
      let next: HTMLElement | null = null;
      let max = -1;
      for (let i = 0; i < el.children.length; i++) {
        const c = el.children[i] as HTMLElement;
        if (c.tagName === 'DIV' && c.scrollHeight > max) {
          max = c.scrollHeight;
          next = c;
        }
      }
      if (
        next &&
        el.clientHeight <= vh + 2 &&
        next.scrollHeight > el.clientHeight + 4 &&
        next.offsetHeight > el.clientHeight
      ) {
        target = el; // keep the innermost qualifying container
      }
      el = next;
      depth++;
    }

    if (target) {
      target.style.setProperty('overflow-y', 'auto', 'important');
      target.style.setProperty('overflow-x', 'hidden', 'important');
      target.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
      currentScrollEl = target;
    }
  }

  // 3. Resolve the element wheel/touch input should scroll.
  function activeScrollEl(): HTMLElement | null {
    if (
      currentScrollEl &&
      document.contains(currentScrollEl) &&
      currentScrollEl.scrollHeight > currentScrollEl.clientHeight + 2
    ) {
      return currentScrollEl;
    }
    const divs = document.querySelectorAll('#root div');
    for (let i = 0; i < divs.length; i++) {
      const d = divs[i] as HTMLElement;
      const s = window.getComputedStyle(d);
      if (
        (s.overflowY === 'auto' || s.overflowY === 'scroll') &&
        d.scrollHeight > d.clientHeight + 2
      ) {
        return d;
      }
    }
    return null;
  }

  // 4. Forward input (guarantee for desktop + iOS).
  document.addEventListener(
    'wheel',
    (e) => {
      const el = activeScrollEl();
      if (el) el.scrollTop += (e as WheelEvent).deltaY;
    },
    { passive: true }
  );

  let lastY = 0;
  document.addEventListener(
    'touchstart',
    (e) => {
      lastY = (e as TouchEvent).touches[0].clientY;
    },
    { passive: true }
  );
  document.addEventListener(
    'touchmove',
    (e) => {
      const y = (e as TouchEvent).touches[0].clientY;
      const el = activeScrollEl();
      if (el) el.scrollTop += lastY - y;
      lastY = y;
    },
    { passive: true }
  );

  // Run repeatedly so navigation between screens stays fixed.
  function schedule(): void {
    fixScroll();
    setTimeout(fixScroll, 150);
    setTimeout(fixScroll, 500);
  }

  schedule();
  window.addEventListener('load', schedule);
  document.addEventListener('click', () => setTimeout(schedule, 50));
  setInterval(fixScroll, 600);

  const root = document.getElementById('root');
  if (root) {
    const mo = new MutationObserver(() => fixScroll());
    mo.observe(root, { childList: true, subtree: true });
  }
}
