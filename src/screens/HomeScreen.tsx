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

  const getStatus = (ch: Chapter): 'locked' | 'available' | 'done' => {
    const score = scores[ch.id];
    if (score?.wordScore !== undefined && score?.sentenceScore !== undefined) return 'done';
    return 'available';
  };

  const getScoreLabel = (ch: Chapter): string => {
    const score = scores[ch.id];
    if (!score) return '';
    const parts = [];
    if (score.wordScore !== undefined) parts.push(`Words: ${score.wordScore}/10`);
    if (score.sentenceScore !== undefined) parts.push(`Sentences: ${score.sentenceScore}/10`);
    return parts.join('  •  ');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>🇰🇷</Text>
          <Text style={styles.appTitle}>Korean Master</Text>
          <Text style={styles.subtitle}>Your K-pop guide to learning Korean</Text>
        </View>

        {/* Chapter Cards */}
        <Text style={styles.sectionLabel}>CHAPTERS</Text>
        {chapters.map((ch) => {
          const status = getStatus(ch);
          const scoreLabel = getScoreLabel(ch);
          const badgeColor = colors.chapter[ch.id - 1];

          return (
            <TouchableOpacity
              key={ch.id}
              style={styles.card}
              onPress={() => navigation.navigate('Chapter', { chapterId: ch.id })}
              activeOpacity={0.8}
            >
              <View style={[styles.badge, { backgroundColor: badgeColor }]}>
                <Text style={styles.badgeEmoji}>{ch.emoji}</Text>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.chapterLabel}>{ch.title}</Text>
                <Text style={styles.chapterTitle}>{ch.subtitle}</Text>
                {scoreLabel ? (
                  <Text style={styles.scoreLabel}>{scoreLabel}</Text>
                ) : null}
              </View>

              <View style={styles.statusContainer}>
                {status === 'done' ? (
                  <Text style={styles.statusDone}>✓</Text>
                ) : (
                  <Text style={styles.statusArrow}>›</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.footer}>
          <Text style={styles.footerText}>화이팅! (Hwa-i-ting!) — You've got this! 💪</Text>
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
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  logo: {
    fontSize: 52,
    marginBottom: 8,
  },
  appTitle: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  badgeEmoji: {
    fontSize: 24,
  },
  cardBody: {
    flex: 1,
  },
  chapterLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  chapterTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  scoreLabel: {
    color: colors.correct,
    fontSize: 11,
    marginTop: 4,
  },
  statusContainer: {
    marginLeft: 8,
  },
  statusDone: {
    color: colors.correct,
    fontSize: 20,
    fontWeight: '700',
  },
  statusArrow: {
    color: colors.textMuted,
    fontSize: 24,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 13,
    fontStyle: 'italic',
  },
});
