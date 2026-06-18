import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  SafeAreaView, ScrollView, StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../theme/colors';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import chapter1 from '../data/chapter1';
import chapter2 from '../data/chapter2';
import chapter3 from '../data/chapter3';
import chapter4 from '../data/chapter4';
import chapter5 from '../data/chapter5';
import chapter6 from '../data/chapter6';
import { Chapter } from '../data/chapter1';

const chaptersMap: Record<number, Chapter> = {
  1: chapter1, 2: chapter2, 3: chapter3,
  4: chapter4, 5: chapter5, 6: chapter6,
};

export default function SentenceScreen({ navigation, route }: any) {
  const { chapterId } = route.params;
  const chapter = chaptersMap[chapterId];
  const questions = chapter.sentenceQuiz;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (option: string) => {
    if (revealed) return;
    setSelected(option);
  };

  const handleConfirm = async () => {
    if (!selected) return;
    if (!revealed) {
      setRevealed(true);
      if (selected === q.answer) setScore((s) => s + 1);
      return;
    }
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      const finalScore = selected === q.answer ? score + 1 : score;
      await saveScore(finalScore);
      navigation.navigate('Result', {
        chapterId,
        wordScore: undefined,
        sentenceScore: finalScore,
      });
    }
  };

  const saveScore = async (finalScore: number) => {
    try {
      const raw = await AsyncStorage.getItem('scores');
      const all = raw ? JSON.parse(raw) : {};
      all[chapterId] = { ...(all[chapterId] ?? {}), sentenceScore: finalScore };
      await AsyncStorage.setItem('scores', JSON.stringify(all));
    } catch (_) {}
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.quizType}>✏️ Fill in the Blank — {chapter.title}</Text>
        <ProgressBar current={current + 1} total={questions.length} />

        {/* Instruction */}
        <View style={styles.instructionCard}>
          <Text style={styles.instructionText}>{q.instruction}</Text>
        </View>

        {/* Sentence with blank */}
        <View style={styles.sentenceCard}>
          <Text style={styles.sentenceText}>{q.sentence}</Text>
          <Text style={styles.koreanRef}>{q.korean}</Text>
        </View>

        {/* Options */}
        <QuizCard
          options={q.options}
          selected={selected}
          correct={q.answer}
          revealed={revealed}
          onSelect={handleSelect}
        />

        {/* Feedback */}
        {revealed && (
          <View style={[styles.feedback, selected === q.answer ? styles.feedbackCorrect : styles.feedbackWrong]}>
            <Text style={styles.feedbackTitle}>
              {selected === q.answer ? '✓ Correct!' : `✗ Answer: ${q.answer}`}
            </Text>
            <Text style={styles.feedbackTranslation}>{q.translation}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.confirmButton, !selected && styles.confirmDisabled]}
          onPress={handleConfirm}
          disabled={!selected}
        >
          <Text style={styles.confirmText}>
            {!revealed
              ? 'Check Answer'
              : current + 1 < questions.length
              ? 'Next Question →'
              : 'See Results →'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  quizType: { color: colors.textMuted, fontSize: 13, marginBottom: 16 },
  instructionCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  instructionText: { color: colors.textSecondary, fontSize: 14, lineHeight: 20 },
  sentenceCard: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sentenceText: {
    color: colors.textPrimary,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '600',
    marginBottom: 10,
  },
  koreanRef: {
    color: colors.hangul,
    fontSize: 16,
    fontWeight: '700',
  },
  feedback: {
    borderRadius: 10,
    padding: 14,
    marginTop: 16,
    marginBottom: 4,
  },
  feedbackCorrect: {
    backgroundColor: 'rgba(6,214,160,0.15)',
    borderWidth: 1,
    borderColor: colors.correct,
  },
  feedbackWrong: {
    backgroundColor: 'rgba(239,71,111,0.15)',
    borderWidth: 1,
    borderColor: colors.incorrect,
  },
  feedbackTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  feedbackTranslation: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmDisabled: { backgroundColor: colors.surfaceLight },
  confirmText: { color: colors.textPrimary, fontSize: 16, fontWeight: '700' },
});
