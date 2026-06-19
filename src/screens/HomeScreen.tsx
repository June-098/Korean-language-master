import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../theme/colors';
import chapter1 from '../data/chapter1';
import chapter2 from '../data/chapter2';
import chapter3 from '../data/chapter3';
import chapter4 from '../data/chapter4';
import chapter5 from '../data/chapter5';
import chapter6 from '../data/chapter6';
import { Chapter } from '../data/chapter1';

const chapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6];

interface ChapterScore {
  wordScore?: number;
  sentenceScore?: number;
}

export default function HomeScreen({ navigation }: any) {
  const [scores, setScores] = useState<Record<number, ChapterScore>>({});

  useEffect(() => {
    loadScores();
    const unsubscribe = navigation.addListener('focus', loadScores);
    return unsubscribe;
  }, [navigation]);

  const loadScores = async () => {
    try {
      const raw = await AsyncStorage.getItem('scores');
      if (raw) setScores(JSON.parse(raw));
    } catch (_) {}
  };

  const completedCount = chapters.filter((ch) => {
    const s = scores[ch.id];
    return s?.wordScore !== undefined && s?.sentenceScore !== undefined;
  }).length;

  const totalPoints = chapters.reduce((acc, ch) => {
    const s = scores[ch.id];
    return acc + (s?.wordScore ?? 0) + (s?.sentenceScore ?? 0);
  }, 0);

  const getProgress = (ch: Chapter): number => {
    const s = scores[ch.id];
    if (!s) return 0;
    const w = s.wordScore ?? 0;
    const q = s.sentenceScore ?? 0;
    const filled = (s.wordScore !== undefined ? 1 : 0) + (s.sentenceScore !== undefined ? 1 : 0);
    if (filled === 0) return 0;
    return Math.round(((w + q) / (filled * 10)) * 100);
  };

  const isDone = (ch: Chapter) => {
    const s = scores[ch.id];
    return s?.wordScore !== undefined && s?.sentenceScore !== undefined;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Hero Banner ── */}
        <LinearGradient
          colors={['#e94560', '#7b1fa2', '#1a1a2e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroFlag}>🇰🇷</Text>
          <Text style={styles.heroTitle}>Korean Master</Text>
          <Text style={styles.heroTagline}>Your K-pop guide to Korean</Text>

          {/* Stats row */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{completedCount}</Text>
              <Text style={styles.statLabel}>Done</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{totalPoints}</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Chapters</Text>
            </View>
          </View>
        </LinearGradient>

        {/* ── Motivational strip ── */}
        {completedCount === 0 && (
          <View style={styles.motivationBanner}>
            <Text style={styles.motivationText}>✨  Start with Chapter 1 — you can read 한글 in hours!</Text>
          </View>
        )}
        {completedCount > 0 && completedCount < 6 && (
          <View style={styles.motivationBanner}>
            <Text style={styles.motivationText}>
              🔥  {completedCount}/6 chapters done — 화이팅! Keep going!
            </Text>
          </View>
        )}
        {completedCount === 6 && (
          <View style={[styles.motivationBanner, { borderColor: colors.correct }]}>
            <Text style={[styles.motivationText, { color: colors.correct }]}>
              🎉  All chapters complete — you're amazing! 대단해요!
            </Text>
          </View>
        )}

        {/* ── Chapter Cards ── */}
        <Text style={styles.sectionLabel}>MY JOURNEY</Text>

        {chapters.map((ch) => {
          const badgeColor = colors.chapter[ch.id - 1];
          const progress = getProgress(ch);
          const done = isDone(ch);
          const s = scores[ch.id];

          return (
            <TouchableOpacity
              key={ch.id}
              style={styles.card}
              onPress={() => navigation.navigate('Chapter', { chapterId: ch.id })}
              activeOpacity={0.82}
            >
              {/* Left color bar */}
              <View style={[styles.accentBar, { backgroundColor: badgeColor }]} />

              {/* Chapter emoji badge */}
              <View style={[styles.badge, { backgroundColor: badgeColor + '22' }]}>
                <Text style={styles.badgeEmoji}>{ch.emoji}</Text>
              </View>

              {/* Text content */}
              <View style={styles.cardBody}>
                <Text style={[styles.chapterNum, { color: badgeColor }]}>
                  {ch.title}
                </Text>
                <Text style={styles.chapterTitle} numberOfLines={1}>
                  {ch.subtitle}
                </Text>

                {/* Progress bar */}
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${progress}%` as any, backgroundColor: badgeColor },
                    ]}
                  />
                </View>

                {/* Score pills */}
                {(s?.wordScore !== undefined || s?.sentenceScore !== undefined) && (
                  <View style={styles.scorePills}>
                    {s?.wordScore !== undefined && (
                      <View style={[styles.pill, { backgroundColor: badgeColor + '22' }]}>
                        <Text style={[styles.pillText, { color: badgeColor }]}>
                          🔤 {s.wordScore}/10
                        </Text>
                      </View>
                    )}
                    {s?.sentenceScore !== undefined && (
                      <View style={[styles.pill, { backgroundColor: badgeColor + '22' }]}>
                        <Text style={[styles.pillText, { color: badgeColor }]}>
                          ✏️ {s.sentenceScore}/10
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </View>

              {/* Status indicator */}
              {done ? (
                <View style={[styles.doneCircle, { backgroundColor: badgeColor }]}>
                  <Text style={styles.doneCheck}>✓</Text>
                </View>
              ) : (
                <View style={styles.arrowContainer}>
                  <Text style={[styles.arrow, { color: badgeColor }]}>›</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* ── Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerEmoji}>🎵</Text>
          <Text style={styles.footerText}>화이팅!  —  You've got this!</Text>
          <Text style={styles.footerSub}>Built for K-pop lovers learning Korean</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },

  // ── Hero
  hero: {
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heroFlag: { fontSize: 56, marginBottom: 10 },
  heroTitle: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  heroTagline: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 24,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 0,
    width: '100%',
  },
  statBox: { flex: 1, alignItems: 'center' },
  statNumber: { color: '#ffffff', fontSize: 26, fontWeight: '900', marginBottom: 2 },
  statLabel: { color: 'rgba(255,255,255,0.65)', fontSize: 11, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 4 },

  // ── Motivation strip
  motivationBanner: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary + '55',
    backgroundColor: colors.primary + '15',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  motivationText: {
    color: colors.primaryLight,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },

  // ── Section label
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 24,
    marginBottom: 12,
    marginHorizontal: 20,
  },

  // ── Chapter card
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  accentBar: {
    width: 4,
    alignSelf: 'stretch',
  },
  badge: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 14,
    flexShrink: 0,
  },
  badgeEmoji: { fontSize: 26 },
  cardBody: { flex: 1, paddingVertical: 14 },
  chapterNum: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  chapterTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },

  // Progress bar
  progressTrack: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
    marginRight: 12,
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },

  // Score pills
  scorePills: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  pill: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  pillText: { fontSize: 11, fontWeight: '700' },

  // Status
  doneCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    flexShrink: 0,
  },
  doneCheck: { color: '#fff', fontSize: 14, fontWeight: '900' },
  arrowContainer: { marginRight: 16, flexShrink: 0 },
  arrow: { fontSize: 28, fontWeight: '700' },

  // ── Footer
  footer: {
    alignItems: 'center',
    marginTop: 28,
    paddingHorizontal: 20,
  },
  footerEmoji: { fontSize: 28, marginBottom: 6 },
  footerText: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  footerSub: {
    color: colors.textMuted,
    fontSize: 12,
    fontStyle: 'italic',
  },
});
