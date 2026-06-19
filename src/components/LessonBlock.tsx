import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../theme/colors';
import {
  LessonSection,
  ConsonantItem,
  VowelItem,
  SyllableGroup,
  SpecialCharItem,
  SubSection,
  SentenceItem,
} from '../data/chapter1';
import { speakKorean } from '../utils/speech';

interface Props {
  section: LessonSection;
  index: number;
}

// ─── Speaker button ────────────────────────────────────────────────────────────
function SpeakBtn({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.speakerBtn} onPress={() => speakKorean(text)} activeOpacity={0.7}>
      <Text style={styles.speakerIcon}>🔊</Text>
    </TouchableOpacity>
  );
}

// ─── Default example card (with optional emoji icon) ─────────────────────────
function ExampleCard({ ex }: { ex: { korean: string; romanization: string; english: string; emoji?: string } }) {
  return (
    <View style={styles.exampleCard}>
      {ex.emoji ? (
        <View style={styles.emojiCircle}>
          <Text style={styles.emojiText}>{ex.emoji}</Text>
        </View>
      ) : null}
      <View style={styles.exampleContent}>
        <View style={styles.exampleTopRow}>
          <Text style={styles.hangul}>{ex.korean}</Text>
          <SpeakBtn text={ex.korean} />
        </View>
        <Text style={styles.romanization}>[{ex.romanization}]</Text>
        <Text style={styles.english}>{ex.english}</Text>
      </View>
    </View>
  );
}

// ─── Consonant row ─────────────────────────────────────────────────────────────
function ConsonantRow({ item }: { item: ConsonantItem }) {
  return (
    <View style={styles.letterRow}>
      <Text style={styles.bigChar}>{item.char}</Text>
      <View style={styles.verticalDivider} />
      <View style={styles.letterInfo}>
        <View style={styles.letterNameRow}>
          <Text style={styles.koreanName}>{item.koreanName}</Text>
          <Text style={styles.romanizedName}>  ({item.romanizedName})</Text>
        </View>
        <Text style={styles.soundText}>{item.sound}</Text>
      </View>
      <SpeakBtn text={item.char} />
    </View>
  );
}

// ─── Vowel row ──────────────────────────────────────────────────────────────────
function VowelRow({ item }: { item: VowelItem }) {
  return (
    <View style={styles.letterRow}>
      <Text style={styles.bigChar}>{item.char}</Text>
      <View style={styles.verticalDivider} />
      <View style={styles.letterInfo}>
        <Text style={styles.soundTextLarge}>{item.sound}</Text>
        <Text style={styles.hintText}>{item.hint}</Text>
      </View>
      <SpeakBtn text={item.char} />
    </View>
  );
}

// ─── Syllable block card ────────────────────────────────────────────────────────
function SyllableCard({ syllable, pronunciation }: { syllable: string; pronunciation: string }) {
  return (
    <View style={styles.syllableCard}>
      <Text style={styles.syllableChar}>{syllable}</Text>
      <Text style={styles.syllablePron}>{pronunciation}</Text>
      <TouchableOpacity style={styles.syllableSpeakerBtn} onPress={() => speakKorean(syllable)} activeOpacity={0.7}>
        <Text style={styles.syllableSpeakerIcon}>🔊</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Syllable blocks section ────────────────────────────────────────────────────
function SyllableBlocksSection({ groups }: { groups: SyllableGroup[] }) {
  const [openGroup, setOpenGroup] = useState<number | null>(0);
  return (
    <View style={styles.syllableContainer}>
      {groups.map((group, gi) => (
        <View key={gi} style={styles.syllableGroup}>
          <TouchableOpacity
            style={styles.groupHeader}
            onPress={() => setOpenGroup(openGroup === gi ? null : gi)}
            activeOpacity={0.8}
          >
            <Text style={styles.groupVowel}>{group.vowel}</Text>
            <Text style={styles.groupSoundLabel}> — "{group.vowelSound}" Row</Text>
            <Text style={styles.groupChevron}>{openGroup === gi ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {openGroup === gi && (
            <View style={styles.groupBody}>
              <Text style={styles.groupExplanation}>{group.explanation}</Text>
              <View style={styles.syllableGrid}>
                {group.blocks.map((block, bi) => (
                  <SyllableCard key={bi} syllable={block.syllable} pronunciation={block.pronunciation} />
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

// ─── Special character row ──────────────────────────────────────────────────────
function SpecialCharRow({ item }: { item: SpecialCharItem }) {
  return (
    <View style={styles.specialRow}>
      <View style={styles.specialLeft}>
        <Text style={styles.specialChar}>{item.char}</Text>
        <Text style={styles.specialKoreanName}>{item.koreanName}</Text>
      </View>
      <View style={styles.verticalDivider} />
      <Text style={styles.specialDesc}>{item.description}</Text>
      <SpeakBtn text={item.char} />
    </View>
  );
}

// ─── Grouped subsections (e.g. dual number systems) ────────────────────────────
function GroupedSection({ subsections }: { subsections: SubSection[] }) {
  return (
    <View style={styles.groupedContainer}>
      {subsections.map((sub, i) => (
        <View key={i} style={[styles.subsectionCard, i > 0 && { marginTop: 12 }]}>
          {/* Header */}
          <View style={styles.subsectionHeader}>
            <Text style={styles.subsectionBadge}>{sub.badge}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.subsectionTitle}>{sub.title}</Text>
              <Text style={styles.subsectionUsage}>{sub.usageLabel}</Text>
            </View>
          </View>
          <Text style={styles.subsectionDesc}>{sub.description}</Text>
          {/* Items */}
          <View style={styles.subsectionItems}>
            {sub.items.map((item, j) => (
              <View key={j} style={styles.subsectionItemRow}>
                <Text style={styles.subItemKorean}>{item.korean}</Text>
                <Text style={styles.subItemRoman}>[{item.romanization}]</Text>
                <Text style={styles.subItemEnglish}>{item.english}</Text>
                <SpeakBtn text={item.korean.replace(/[（()[\]]/g, '').split(' ')[0]} />
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

// ─── Sentence cards section ─────────────────────────────────────────────────────
function SentencesSection({ sentences }: { sentences: SentenceItem[] }) {
  // Group by source
  const groups: Record<string, SentenceItem[]> = {};
  sentences.forEach((s) => {
    const key = s.source ?? 'General';
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  });

  return (
    <View>
      {Object.entries(groups).map(([source, items]) => (
        <View key={source} style={styles.sentenceGroup}>
          <Text style={styles.sentenceGroupLabel}>{source}</Text>
          {items.map((s, i) => (
            <View key={i} style={styles.sentenceCard}>
              <View style={styles.sentenceTopRow}>
                <Text style={styles.sentenceKorean}>{s.korean}</Text>
                <SpeakBtn text={s.korean} />
              </View>
              <Text style={styles.sentenceRoman}>{s.romanization}</Text>
              <Text style={styles.sentenceEnglish}>{s.english}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

// ─── Main LessonBlock ───────────────────────────────────────────────────────────
export default function LessonBlock({ section, index }: Props) {
  const [expanded, setExpanded] = useState(index === 0);

  const sectionColors = [
    colors.chapter[0], colors.chapter[1], colors.chapter[2],
    colors.chapter[3], colors.chapter[4], colors.chapter[5],
  ];
  const accentColor = sectionColors[index % sectionColors.length];

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        {/* Numbered badge */}
        <View style={[styles.numBadge, { backgroundColor: accentColor + '28' }]}>
          <Text style={[styles.numBadgeText, { color: accentColor }]}>{index + 1}</Text>
        </View>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={[styles.chevron, { color: accentColor }]}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.body}>
          {section.content ? <Text style={styles.content}>{section.content}</Text> : null}

          {/* Consonants */}
          {section.sectionType === 'consonants' && section.consonants && (
            <View style={styles.lettersContainer}>
              {section.consonants.map((item, i) => <ConsonantRow key={i} item={item} />)}
            </View>
          )}

          {/* Vowels */}
          {section.sectionType === 'vowels' && section.vowels && (
            <View style={styles.lettersContainer}>
              {section.vowels.map((item, i) => <VowelRow key={i} item={item} />)}
            </View>
          )}

          {/* Syllable blocks */}
          {section.sectionType === 'syllableBlocks' && section.syllableGroups && (
            <SyllableBlocksSection groups={section.syllableGroups} />
          )}

          {/* Special chars */}
          {section.sectionType === 'specialChars' && section.specialChars && (
            <View style={styles.lettersContainer}>
              {section.specialChars.map((item, i) => <SpecialCharRow key={i} item={item} />)}
            </View>
          )}

          {/* Grouped subsections (e.g. number systems) */}
          {section.sectionType === 'grouped' && section.subsections && (
            <GroupedSection subsections={section.subsections} />
          )}

          {/* Sentence cards */}
          {section.sectionType === 'sentences' && section.sentences && (
            <SentencesSection sentences={section.sentences} />
          )}

          {/* Default examples with optional emoji */}
          {(section.sectionType === 'default' || !section.sectionType) &&
            section.examples && section.examples.length > 0 && (
              <View style={styles.examplesContainer}>
                {section.examples.map((ex, i) => <ExampleCard key={i} ex={ex} />)}
              </View>
            )}
        </View>
      )}
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  // ── Card shell
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  numBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numBadgeText: {
    fontWeight: '800',
    fontSize: 13,
  },
  title: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },
  chevron: {
    fontSize: 11,
    fontWeight: '700',
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

  // ── Speaker button
  speakerBtn: { padding: 4, marginLeft: 6 },
  speakerIcon: { fontSize: 15 },

  // ── Vertical divider
  verticalDivider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.border,
    marginHorizontal: 12,
  },

  // ── Default examples with emoji
  examplesContainer: { gap: 8 },
  exampleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emojiCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  emojiText: { fontSize: 22 },
  exampleContent: { flex: 1 },
  exampleTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  hangul: { color: colors.hangul, fontSize: 20, fontWeight: '700' },
  romanization: { color: colors.romanization, fontSize: 12, fontStyle: 'italic', marginBottom: 2 },
  english: { color: colors.textSecondary, fontSize: 13 },

  // ── Letter rows (consonants + vowels)
  lettersContainer: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  letterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  bigChar: { color: colors.hangul, fontSize: 34, fontWeight: '800', width: 44, textAlign: 'center' },
  letterInfo: { flex: 1 },
  letterNameRow: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 2 },
  koreanName: { color: colors.textPrimary, fontSize: 15, fontWeight: '700' },
  romanizedName: { color: colors.romanization, fontSize: 13, fontStyle: 'italic' },
  soundText: { color: colors.textSecondary, fontSize: 13, lineHeight: 18 },
  soundTextLarge: { color: colors.textPrimary, fontSize: 15, fontWeight: '600', marginBottom: 2 },
  hintText: { color: colors.textMuted, fontSize: 12, fontStyle: 'italic' },

  // ── Syllable blocks
  syllableContainer: { gap: 8 },
  syllableGroup: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.surface,
  },
  groupVowel: { color: colors.hangul, fontSize: 22, fontWeight: '800' },
  groupSoundLabel: { flex: 1, color: colors.textSecondary, fontSize: 14, fontWeight: '600' },
  groupChevron: { color: colors.textMuted, fontSize: 11 },
  groupBody: { padding: 12 },
  groupExplanation: { color: colors.textSecondary, fontSize: 13, lineHeight: 20, marginBottom: 12, fontStyle: 'italic' },
  syllableGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  syllableCard: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    width: '21%',
    minWidth: 68,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  syllableChar: { color: colors.hangul, fontSize: 26, fontWeight: '800', marginBottom: 2 },
  syllablePron: { color: colors.romanization, fontSize: 11, marginBottom: 6 },
  syllableSpeakerBtn: { padding: 2 },
  syllableSpeakerIcon: { fontSize: 13 },

  // ── Special characters
  specialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  specialLeft: { width: 52, alignItems: 'center' },
  specialChar: { color: colors.hangul, fontSize: 32, fontWeight: '800' },
  specialKoreanName: { color: colors.textMuted, fontSize: 10, marginTop: 2, textAlign: 'center' },
  specialDesc: { flex: 1, color: colors.textSecondary, fontSize: 13, lineHeight: 19 },

  // ── Grouped subsections
  groupedContainer: {},
  subsectionCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  subsectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: colors.background,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  subsectionBadge: { fontSize: 28 },
  subsectionTitle: { color: colors.textPrimary, fontSize: 15, fontWeight: '700', marginBottom: 2 },
  subsectionUsage: { color: colors.secondary, fontSize: 12, fontWeight: '600' },
  subsectionDesc: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 8,
  },
  subsectionItems: { paddingHorizontal: 14, paddingBottom: 12, gap: 8 },
  subsectionItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    gap: 8,
  },
  subItemKorean: { color: colors.hangul, fontSize: 17, fontWeight: '700', minWidth: 68 },
  subItemRoman: { color: colors.romanization, fontSize: 12, fontStyle: 'italic', minWidth: 72 },
  subItemEnglish: { flex: 1, color: colors.textSecondary, fontSize: 13 },

  // ── Sentence cards
  sentenceGroup: { marginBottom: 16 },
  sentenceGroupLabel: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
    paddingLeft: 4,
  },
  sentenceCard: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  sentenceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  sentenceKorean: { color: colors.hangul, fontSize: 18, fontWeight: '700', flex: 1 },
  sentenceRoman: { color: colors.romanization, fontSize: 12, fontStyle: 'italic', marginBottom: 4 },
  sentenceEnglish: { color: colors.textSecondary, fontSize: 13 },
});
