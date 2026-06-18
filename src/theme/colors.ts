// K-pop inspired palette: deep navy background, rose-pink accents, gold highlights
const colors = {
  // Backgrounds
  background: '#1a1a2e',       // deep navy — like a K-drama night scene
  surface: '#16213e',          // slightly lighter navy for cards
  surfaceLight: '#0f3460',     // medium navy for elevated cards

  // Accents
  primary: '#e94560',          // rose-red — BTS / BLACKPINK energy
  primaryLight: '#ff6b8a',     // soft pink for highlights
  secondary: '#f5a623',        // gold — like Hanbok embroidery
  secondaryLight: '#ffd166',   // light gold for correct answer glow

  // Quiz states
  correct: '#06d6a0',          // teal-green for correct answers
  incorrect: '#ef476f',        // vivid red for wrong answers
  selected: '#118ab2',         // blue for selected-but-not-confirmed

  // Text
  textPrimary: '#ffffff',      // white — main readable text
  textSecondary: '#a8b2d8',    // muted lavender — subtitles, hints
  textMuted: '#5c6b8a',        // dim — placeholders, footnotes

  // Korean character display
  hangul: '#ffd166',           // gold text for Korean characters
  romanization: '#a8b2d8',     // muted for romanization (pronunciation guide)
  english: '#ffffff',          // white for English meaning

  // Progress & UI
  progressTrack: '#0f3460',    // track background
  progressFill: '#e94560',     // filled progress bar
  border: '#0f3460',           // card borders
  divider: '#1e2d50',          // section dividers
  overlay: 'rgba(0,0,0,0.6)',  // modal overlays

  // Chapter badge colors (one per chapter)
  chapter: [
    '#e94560', // Ch1 — Alphabet — rose red
    '#f5a623', // Ch2 — Basic Words — gold
    '#06d6a0', // Ch3 — Greetings — teal
    '#118ab2', // Ch4 — Restaurant — blue
    '#9b5de5', // Ch5 — Shopping — purple
    '#f15bb5', // Ch6 — Drinking — hot pink
  ],
};

export default colors;
