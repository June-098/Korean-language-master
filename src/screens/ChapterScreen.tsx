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
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>

        {/* Chapter Header */}
        <View style={[styles.headerBanner, { borderColor: badgeColor }]}>
          <Text style={styles.emoji}>{chapter.emoji}</Text>
          <Text style={[styles.chapterLabel, { color: badgeColor }]}>{chapter.title}</Text>
          <Text style={styles.chapterTitle}>{chapter.subtitle}</Text>
          <Text style={styles.description}>{chapter.description}</Text>
        </View>

        {/* Lesson Sections */}
        <Text style={styles.sectionHeader}>📖 Study Material</Text>
        {chapter.sections.map((section, i) => (
          <LessonBlock key={i} section={section} index={i} />
        ))}

        {/* Quiz Buttons */}
        <Text style={styles.sectionHeader}>📝 Quizzes</Text>
        <View style={styles.quizRow}>
          <TouchableOpacity
            style={[styles.quizButton, { borderColor: colors.secondary }]}
            onPress={() => navigation.navigate('Quiz', { chapterId })}
            activeOpacity={0.8}
          >
            <Text style={styles.quizIcon}>🔤</Text>
            <Text style={styles.quizButtonTitle}>Word Quiz</Text>
            <Text style={styles.quizButtonSub}>10 questions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quizButton, { borderColor: colors.primary }]}
            onPress={() => navigation.navigate('Sentence', { chapterId })}
            activeOpacity={0.8}
          >
            <Text style={styles.quizIcon}>✏️</Text>
            <Text style={styles.quizButtonTitle}>Fill in the Blank</Text>
            <Text style={styles.quizButtonSub}>10 questions</Text>
          </TouchableOpacity>
        </View>

        {/* Nav */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back to Chapters</Text>
        </TouchableOpacity>

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
  headerBanner: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
    marginBottom: 8,
  },
  chapterLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  chapterTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  sectionHeader: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 4,
  },
  quizRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  quizButton: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
  },
  quizIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  quizButtonTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  quizButtonSub: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  backButtonText: {
    color: colors.textMuted,
    fontSize: 14,
  },
});
