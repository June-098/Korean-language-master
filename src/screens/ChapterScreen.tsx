import React from 'react';
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
import colors from '../theme/colors';
import LessonBlock from '../components/LessonBlock';
import chapter1 from '../data/chapter1';
import chapter2 from '../data/chapter2';
import chapter3 from '../data/chapter3';
import chapter4 from '../data/chapter4';
import chapter5 from '../data/chapter5';
import chapter6 from '../data/chapter6';
import { Chapter } from '../data/chapter1';

const chaptersMap: Record<number, Chapter> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
};

export default function ChapterScreen({ navigation, route }: any) {
  const { chapterId } = route.params;
  const chapter = chaptersMap[chapterId];
  const badgeColor = colors.chapter[chapterId - 1];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* ── Gradient Chapter Header ── */}
        <LinearGradient
          colors={[badgeColor + 'cc', colors.background]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <Text style={styles.emoji}>{chapter.emoji}</Text>
          <Text style={styles.chapterLabel}>{chapter.title}</Text>
          <Text style={styles.chapterTitle}>{chapter.subtitle}</Text>
          <Text style={styles.description}>{chapter.description}</Text>

          {/* Section count badge */}
          <View style={styles.metaRow}>
            <View style={styles.metaBadge}>
              <Text style={styles.metaText}>📖 {chapter.sections.length} sections</Text>
            </View>
            <View style={styles.metaBadge}>
              <Text style={styles.metaText}>🔤 10 quiz questions</Text>
            </View>
          </View>
        </LinearGradient>

        {/* ── Study Material ── */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeader}>📖  Study Material</Text>
          <Text style={styles.sectionCount}>{chapter.sections.length} sections</Text>
        </View>

        {chapter.sections.map((section, i) => (
          <LessonBlock key={i} section={section} index={i} />
        ))}

        {/* ── Quizzes ── */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeader}>📝  Test Yourself</Text>
        </View>

        <View style={styles.quizRow}>
          <TouchableOpacity
            style={[styles.quizButton, { borderColor: badgeColor }]}
            onPress={() => navigation.navigate('Quiz', { chapterId })}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[badgeColor + '33', colors.surface]}
              style={styles.quizGradient}
            >
              <Text style={styles.quizIcon}>🔤</Text>
              <Text style={styles.quizButtonTitle}>Word Quiz</Text>
              <Text style={styles.quizButtonSub}>10 questions</Text>
              <View style={[styles.quizArrow, { backgroundColor: badgeColor }]}>
                <Text style={styles.quizArrowText}>›</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quizButton, { borderColor: colors.primary }]}
            onPress={() => navigation.navigate('Sentence', { chapterId })}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[colors.primary + '33', colors.surface]}
              style={styles.quizGradient}
            >
              <Text style={styles.quizIcon}>✏️</Text>
              <Text style={styles.quizButtonTitle}>Fill in the Blank</Text>
              <Text style={styles.quizButtonSub}>10 questions</Text>
              <View style={[styles.quizArrow, { backgroundColor: colors.primary }]}>
                <Text style={styles.quizArrowText}>›</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* ── Back ── */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back to Chapters</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },

  // ── Gradient header
  headerGradient: {
    padding: 24,
    paddingTop: 28,
    alignItems: 'center',
    marginBottom: 8,
  },
  emoji: { fontSize: 52, marginBottom: 10 },
  chapterLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  chapterTitle: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 16,
  },
  metaRow: { flexDirection: 'row', gap: 10, flexWrap: 'wrap', justifyContent: 'center' },
  metaBadge: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  metaText: { color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: '600' },

  // ── Section headers
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 8,
  },
  sectionHeader: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '800',
  },
  sectionCount: {
    color: colors.textMuted,
    fontSize: 12,
  },

  // ── Lesson blocks container
  // (LessonBlock renders its own cards, so just add horizontal padding)
  // Wrap in a padded view in the map below

  // ── Quiz buttons
  quizRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  quizButton: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  quizGradient: {
    alignItems: 'center',
    padding: 18,
  },
  quizIcon: { fontSize: 30, marginBottom: 8 },
  quizButtonTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 2,
  },
  quizButtonSub: { color: colors.textMuted, fontSize: 12, marginBottom: 12 },
  quizArrow: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizArrowText: { color: '#fff', fontSize: 18, fontWeight: '900', lineHeight: 22 },

  // ── Back button
  backButton: { alignItems: 'center', paddingVertical: 12 },
  backButtonText: { color: colors.textMuted, fontSize: 14 },
});
