import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import { LessonSection } from '../data/chapter1';

interface Props {
  section: LessonSection;
  index: number;
}

export default function LessonBlock({ section, index }: Props) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.sectionNumber}>0{index + 1}</Text>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.chevron}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.body}>
          <Text style={styles.content}>{section.content}</Text>

          {section.examples && section.examples.length > 0 && (
            <View style={styles.examplesContainer}>
              {section.examples.map((ex, i) => (
                <View key={i} style={styles.exampleRow}>
                  <Text style={styles.hangul}>{ex.korean}</Text>
                  <Text style={styles.romanization}>[{ex.romanization}]</Text>
                  <Text style={styles.english}>{ex.english}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  sectionNumber: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
    marginRight: 10,
    width: 24,
  },
  title: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  chevron: {
    color: colors.textMuted,
    fontSize: 12,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  content: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  examplesContainer: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 8,
    padding: 12,
    gap: 10,
  },
  exampleRow: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingBottom: 10,
    gap: 2,
  },
  hangul: {
    color: colors.hangul,
    fontSize: 20,
    fontWeight: '700',
  },
  romanization: {
    color: colors.romanization,
    fontSize: 13,
    fontStyle: 'italic',
  },
  english: {
    color: colors.english,
    fontSize: 14,
  },
});
