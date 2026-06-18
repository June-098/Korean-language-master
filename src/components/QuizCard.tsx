import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';

interface Props {
  options: string[];
  selected: string | null;
  correct: string;
  revealed: boolean;
  onSelect: (option: string) => void;
}

export default function QuizCard({ options, selected, correct, revealed, onSelect }: Props) {
  const getOptionStyle = (option: string) => {
    if (!revealed) {
      return option === selected ? styles.optionSelected : styles.option;
    }
    if (option === correct) return styles.optionCorrect;
    if (option === selected && option !== correct) return styles.optionIncorrect;
    return styles.option;
  };

  const getOptionTextStyle = (option: string) => {
    if (!revealed) {
      return option === selected ? styles.optionTextSelected : styles.optionText;
    }
    if (option === correct) return styles.optionTextCorrect;
    if (option === selected && option !== correct) return styles.optionTextIncorrect;
    return styles.optionText;
  };

  const getBadge = (option: string) => {
    if (!revealed) return option === selected ? '●' : '○';
    if (option === correct) return '✓';
    if (option === selected && option !== correct) return '✗';
    return '○';
  };

  return (
    <View style={styles.container}>
      {options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={getOptionStyle(option)}
          onPress={() => !revealed && onSelect(option)}
          activeOpacity={revealed ? 1 : 0.7}
        >
          <Text style={[getOptionTextStyle(option), styles.badge]}>{getBadge(option)}</Text>
          <Text style={getOptionTextStyle(option)}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  optionSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.selected,
    gap: 12,
  },
  optionCorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(6,214,160,0.15)',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.correct,
    gap: 12,
  },
  optionIncorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239,71,111,0.15)',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.incorrect,
    gap: 12,
  },
  optionText: {
    color: colors.textSecondary,
    fontSize: 15,
    flex: 1,
  },
  optionTextSelected: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  optionTextCorrect: {
    color: colors.correct,
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  optionTextIncorrect: {
    color: colors.incorrect,
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },
  badge: {
    flex: 0,
    width: 20,
    fontSize: 16,
  },
});
