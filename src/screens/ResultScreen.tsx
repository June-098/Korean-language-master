import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import colors from '../theme/colors';

export default function ResultScreen({ navigation, route }: any) {
  const { chapterId, sentenceScore } = route.params;
  const score: number = sentenceScore ?? 0;

  const emoji = score >= 8 ? '🎉' : score >= 5 ? '👍' : '💪';
  const message =
    score >= 8
      ? '훌륭해요! You nailed it!'
      : score >= 5
      ? '잘했어요! Good effort!'
      : '괜찮아요! Practice makes perfect!';

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>Chapter Complete!</Text>
        <Text style={styles.subtitle}>Fill-in-the-Blank Quiz</Text>

        <View style={styles.scoreBox}>
          <Text style={styles.scoreNumber}>{score}</Text>
          <Text style={styles.scoreDenom}>/10</Text>
        </View>

        <Text style={styles.message}>{message}</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.primaryButtonText}>🏠 Back to Chapters</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Chapter', { chapterId })}
          >
            <Text style={styles.secondaryButtonText}>📖 Review Chapter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Sentence', { chapterId })}
          >
            <Text style={styles.secondaryButtonText}>🔄 Retry Quiz</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.encouragement}>
          {chapterId < 6
            ? `Next up: Chapter ${chapterId + 1} →`
            : '🎊 You finished all chapters! 대박!'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emoji: { fontSize: 72, marginBottom: 16 },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    marginBottom: 24,
  },
  scoreBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  scoreNumber: {
    color: colors.secondary,
    fontSize: 72,
    fontWeight: '900',
    lineHeight: 80,
  },
  scoreDenom: {
    color: colors.textMuted,
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 4,
  },
  message: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 36,
  },
  buttonGroup: {
    width: '100%',
    gap: 10,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
  },
  encouragement: {
    color: colors.textMuted,
    fontSize: 13,
    fontStyle: 'italic',
  },
});
