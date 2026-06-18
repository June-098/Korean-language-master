import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
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

export default function QuizScreen({ navigation, route }: any) {
  const { chapterId } = route.params;
  const chapter = chaptersMap[chapterId];
  const questions = chapter.wordQuiz;

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
      setFinished(true);
    }
  };

  const saveScore = async (finalScore: number) => {
    try {
      const raw = await AsyncStorage.getItem('scores');
      const all = raw ? JSON.parse(raw) : {};
      all[chapterId] = { ...(all[chapterId] ?? {}), wordScore: finalScore };
      await AsyncStorage.setItem('scores', JSON.stringify(all));
    } catch (_) {}
  };

  if (finished) {
    const finalScore = score;
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" />
        <View style={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{finalScore >= 8 ? '🎉' : finalScore >= 5 ? '👍' : '💪'}</Text>
          <Text style={styles.resultTitle}>Word Quiz Complete!</Text>
          <Text style={styles.resultScore}>{finalScore} / 10</Text>
          <Text style={styles.resultMessage}>
            {finalScore >= 8
              ? '훌륭해요! (Excellent!)'
              : finalScore >= 5
              ? '잘했어요! (Good job!)'
              : '괜찮아요! Keep practicing!'}
          </Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('Sentence', { chapterId })}
          >
            <Text style={styles.nextButtonText}>Try Sentence Quiz →</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Back to Chapter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.quizType}>🔤 Word Quiz — {chapter.title}</Text>
        <ProgressBar current={current + 1} total={questions.length} />

        <View style={styles.questionCard}>
          <Text style={styles.hangul}>{q.korean}</Text>
          <Text style={styles.question}>{q.question}</Text>
        </View>

        <QuizCard
          options={q.options}
          selected={selected}
          correct={q.answer}
          revealed={revealed}
          onSelect={handleSelect}
        />

        {revealed && (
          <View style={[styles.feedback, selected === q.answer ? styles.feedbackCorrect : styles.feedbackWrong]}>
            <Text style={styles.feedbackText}>
              {selected === q.answer
                ? '✓ Correct! 잘했어요!'
                : `✗ The answer is: ${q.answer}`}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.confirmButton, !selected && styles.confirmDisabled]}
          onPress={handleConfirm}
          disabled={!selected}
        >
          <Text style={styles.confirmText}>
            {!revealed ? 'Check Answer' : current + 1 < questions.length ? 'Next Question →' : 'See Results →'}
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
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  hangul: { color: colors.hangul, fontSize: 40, fontWeight: '800', marginBottom: 12 },
  question: { color: colors.textPrimary, fontSize: 16, textAlign: 'center', lineHeight: 24 },
  feedback: { borderRadius: 10, padding: 14, marginTop: 16, marginBottom: 4 },
  feedbackCorrect: { backgroundColor: 'rgba(6,214,160,0.15)', borderWidth: 1, borderColor: colors.correct },
  feedbackWrong: { backgroundColor: 'rgba(239,71,111,0.15)', borderWidth: 1, borderColor: colors.incorrect },
  feedbackText: { color: colors.textPrimary, fontSize: 15, fontWeight: '600', textAlign: 'center' },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmDisabled: { backgroundColor: colors.surfaceLight },
  confirmText: { color: colors.textPrimary, fontSize: 16, fontWeight: '700' },
  resultContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  resultEmoji: { fontSize: 64, marginBottom: 16 },
  resultTitle: { color: colors.textPrimary, fontSize: 22, fontWeight: '800', marginBottom: 8 },
  resultScore: { color: colors.secondary, fontSize: 56, fontWeight: '900', marginBottom: 8 },
  resultMessage: { color: colors.textSecondary, fontSize: 16, marginBottom: 32, textAlign: 'center' },
  nextButton: { backgroundColor: colors.primary, borderRadius: 12, padding: 16, width: '100%', alignItems: 'center', marginBottom: 12 },
  nextButtonText: { color: colors.textPrimary, fontSize: 16, fontWeight: '700' },
  backButton: { alignItems: 'center', padding: 12 },
  backButtonText: { color: colors.textMuted, fontSize: 14 },
});
