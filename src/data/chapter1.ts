// ─────────────────────────────────────────────────────────────────────────────
// Chapter 1 — The Korean Alphabet (한글)
// ─────────────────────────────────────────────────────────────────────────────

export type SectionType =
  | 'default'
  | 'consonants'
  | 'vowels'
  | 'syllableBlocks'
  | 'specialChars'
  | 'grouped'
  | 'sentences';

export interface ConsonantItem {
  char: string;
  koreanName: string;
  romanizedName: string;
  sound: string;
}

export interface VowelItem {
  char: string;
  sound: string;
  hint: string;
}

export interface SyllableBlock {
  syllable: string;
  pronunciation: string;
}

export interface SyllableGroup {
  vowel: string;
  vowelSound: string;
  explanation: string;
  blocks: SyllableBlock[];
}

export interface SpecialCharItem {
  char: string;
  koreanName: string;
  description: string;
}

export interface SubSectionItem {
  korean: string;
  romanization: string;
  english: string;
  emoji?: string;
}

export interface SubSection {
  title: string;
  badge: string;
  description: string;
  usageLabel: string;
  items: SubSectionItem[];
}

export interface SentenceItem {
  korean: string;
  romanization: string;
  english: string;
  source?: string;
}

export interface LessonSection {
  title: string;
  content: string;
  sectionType?: SectionType;
  examples?: { korean: string; romanization: string; english: string; emoji?: string }[];
  consonants?: ConsonantItem[];
  vowels?: VowelItem[];
  syllableGroups?: SyllableGroup[];
  specialChars?: SpecialCharItem[];
  subsections?: SubSection[];
  sentences?: SentenceItem[];
}

export interface WordQuiz {
  id: number;
  question: string;
  korean: string;
  options: string[];
  answer: string;
}

export interface SentenceQuiz {
  id: number;
  instruction: string;
  sentence: string;
  korean: string;
  options: string[];
  answer: string;
  translation: string;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  sections: LessonSection[];
  wordQuiz: WordQuiz[];
  sentenceQuiz: SentenceQuiz[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1.2 — Consonant data
// ─────────────────────────────────────────────────────────────────────────────
const consonantItems: ConsonantItem[] = [
  { char: 'ㄱ', koreanName: '기역', romanizedName: 'gi-yeok', sound: '"G" sound — like "go"' },
  { char: 'ㄴ', koreanName: '니은', romanizedName: 'ni-eun',  sound: '"N" sound — like "no"' },
  { char: 'ㄷ', koreanName: '디귿', romanizedName: 'di-geuk', sound: '"D" sound — like "dog"' },
  { char: 'ㄹ', koreanName: '리을', romanizedName: 'ri-eul',  sound: '"L" or "R" sound — light tongue flap' },
  { char: 'ㅁ', koreanName: '미음', romanizedName: 'mi-eum',  sound: '"M" sound — like "mom"' },
  { char: 'ㅂ', koreanName: '비읍', romanizedName: 'bi-eup',  sound: '"B" sound — like "boy"' },
  { char: 'ㅅ', koreanName: '시옷', romanizedName: 'si-ot',   sound: '"S" sound — like "sun"' },
  { char: 'ㅇ', koreanName: '이응', romanizedName: 'i-eung',  sound: 'Silent at start of syllable · "NG" at end — like "sing"' },
  { char: 'ㅈ', koreanName: '지읒', romanizedName: 'ji-eut',  sound: '"J" sound — like "juice"' },
  { char: 'ㅊ', koreanName: '치읓', romanizedName: 'chi-eut', sound: '"CH" sound — like "church"' },
  { char: 'ㅋ', koreanName: '키읔', romanizedName: 'ki-euk',  sound: 'Strong "K" — like "Korea"' },
  { char: 'ㅌ', koreanName: '티읕', romanizedName: 'ti-eut',  sound: 'Strong "T" — like "top"' },
  { char: 'ㅍ', koreanName: '피읖', romanizedName: 'pi-eup',  sound: 'Strong "P" — like "pop"' },
  { char: 'ㅎ', koreanName: '히읗', romanizedName: 'hi-eut',  sound: '"H" sound — like "hello"' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Section 1.3 — Vowel data
// ─────────────────────────────────────────────────────────────────────────────
const vowelItems: VowelItem[] = [
  { char: 'ㅏ', sound: '"Ah" sound', hint: 'like "spa"' },
  { char: 'ㅑ', sound: '"Ya" sound', hint: 'like "yard"' },
  { char: 'ㅓ', sound: '"Uh" sound', hint: 'like "fun" (British)' },
  { char: 'ㅕ', sound: '"Yuh" sound', hint: 'like "young"' },
  { char: 'ㅗ', sound: '"Oh" sound', hint: 'like "go"' },
  { char: 'ㅛ', sound: '"Yoh" sound', hint: 'like "yoga"' },
  { char: 'ㅜ', sound: '"Oo" sound', hint: 'like "moon"' },
  { char: 'ㅠ', sound: '"Yu" sound', hint: 'like "you"' },
  { char: 'ㅡ', sound: '"Eu" sound', hint: 'no English equivalent — flat, back-of-throat' },
  { char: 'ㅣ', sound: '"Ee" sound', hint: 'like "see"' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Section 1.4 — All 140 syllable block combinations (14 consonants × 10 vowels)
// ─────────────────────────────────────────────────────────────────────────────
const syllableGroups: SyllableGroup[] = [
  {
    vowel: 'ㅏ', vowelSound: 'Ah',
    explanation: 'ㅏ always makes the "Ah" sound. Adding a consonant in front changes how the syllable starts — but the ending is always "Ah".',
    blocks: [
      { syllable: '가', pronunciation: 'Ga' },
      { syllable: '나', pronunciation: 'Na' },
      { syllable: '다', pronunciation: 'Da' },
      { syllable: '라', pronunciation: 'La' },
      { syllable: '마', pronunciation: 'Ma' },
      { syllable: '바', pronunciation: 'Ba' },
      { syllable: '사', pronunciation: 'Sa' },
      { syllable: '아', pronunciation: 'Ah' },
      { syllable: '자', pronunciation: 'Ja' },
      { syllable: '차', pronunciation: 'Cha' },
      { syllable: '카', pronunciation: 'Ka' },
      { syllable: '타', pronunciation: 'Ta' },
      { syllable: '파', pronunciation: 'Pa' },
      { syllable: '하', pronunciation: 'Ha' },
    ],
  },
  {
    vowel: 'ㅑ', vowelSound: 'Ya',
    explanation: 'ㅑ always makes the "Ya" sound. It\'s like ㅏ ("Ah") but with a "Y" in front.',
    blocks: [
      { syllable: '갸', pronunciation: 'Gyah' },
      { syllable: '냐', pronunciation: 'Nyah' },
      { syllable: '댜', pronunciation: 'Dyah' },
      { syllable: '랴', pronunciation: 'Lyah' },
      { syllable: '먀', pronunciation: 'Myah' },
      { syllable: '뱌', pronunciation: 'Byah' },
      { syllable: '샤', pronunciation: 'Syah' },
      { syllable: '야', pronunciation: 'Yah' },
      { syllable: '쟈', pronunciation: 'Jyah' },
      { syllable: '챠', pronunciation: 'Chyah' },
      { syllable: '캬', pronunciation: 'Kyah' },
      { syllable: '탸', pronunciation: 'Tyah' },
      { syllable: '퍄', pronunciation: 'Pyah' },
      { syllable: '햐', pronunciation: 'Hyah' },
    ],
  },
  {
    vowel: 'ㅓ', vowelSound: 'Uh',
    explanation: 'ㅓ always makes the "Uh" sound — like the "u" in "fun". Think of it as an open, relaxed sound.',
    blocks: [
      { syllable: '거', pronunciation: 'Geo' },
      { syllable: '너', pronunciation: 'Neo' },
      { syllable: '더', pronunciation: 'Deo' },
      { syllable: '러', pronunciation: 'Leo' },
      { syllable: '머', pronunciation: 'Meo' },
      { syllable: '버', pronunciation: 'Beo' },
      { syllable: '서', pronunciation: 'Seo' },
      { syllable: '어', pronunciation: 'Eo' },
      { syllable: '저', pronunciation: 'Jeo' },
      { syllable: '처', pronunciation: 'Cheo' },
      { syllable: '커', pronunciation: 'Keo' },
      { syllable: '터', pronunciation: 'Teo' },
      { syllable: '퍼', pronunciation: 'Peo' },
      { syllable: '허', pronunciation: 'Heo' },
    ],
  },
  {
    vowel: 'ㅕ', vowelSound: 'Yuh',
    explanation: 'ㅕ always makes the "Yuh" sound. It\'s like ㅓ ("Uh") but with a "Y" in front — like "young".',
    blocks: [
      { syllable: '겨', pronunciation: 'Gyeo' },
      { syllable: '녀', pronunciation: 'Nyeo' },
      { syllable: '뎌', pronunciation: 'Dyeo' },
      { syllable: '려', pronunciation: 'Lyeo' },
      { syllable: '며', pronunciation: 'Myeo' },
      { syllable: '벼', pronunciation: 'Byeo' },
      { syllable: '셔', pronunciation: 'Syeo' },
      { syllable: '여', pronunciation: 'Yeo' },
      { syllable: '져', pronunciation: 'Jyeo' },
      { syllable: '쳐', pronunciation: 'Chyeo' },
      { syllable: '켜', pronunciation: 'Kyeo' },
      { syllable: '텨', pronunciation: 'Tyeo' },
      { syllable: '펴', pronunciation: 'Pyeo' },
      { syllable: '혀', pronunciation: 'Hyeo' },
    ],
  },
  {
    vowel: 'ㅗ', vowelSound: 'Oh',
    explanation: 'ㅗ always makes the "Oh" sound — round your lips like you\'re saying "oh!".',
    blocks: [
      { syllable: '고', pronunciation: 'Go' },
      { syllable: '노', pronunciation: 'No' },
      { syllable: '도', pronunciation: 'Do' },
      { syllable: '로', pronunciation: 'Lo' },
      { syllable: '모', pronunciation: 'Mo' },
      { syllable: '보', pronunciation: 'Bo' },
      { syllable: '소', pronunciation: 'So' },
      { syllable: '오', pronunciation: 'Oh' },
      { syllable: '조', pronunciation: 'Jo' },
      { syllable: '초', pronunciation: 'Cho' },
      { syllable: '코', pronunciation: 'Ko' },
      { syllable: '토', pronunciation: 'To' },
      { syllable: '포', pronunciation: 'Po' },
      { syllable: '호', pronunciation: 'Ho' },
    ],
  },
  {
    vowel: 'ㅛ', vowelSound: 'Yoh',
    explanation: 'ㅛ always makes the "Yoh" sound. It\'s like ㅗ ("Oh") but with a "Y" in front — like "yoga".',
    blocks: [
      { syllable: '교', pronunciation: 'Gyo' },
      { syllable: '뇨', pronunciation: 'Nyo' },
      { syllable: '됴', pronunciation: 'Dyo' },
      { syllable: '료', pronunciation: 'Lyo' },
      { syllable: '묘', pronunciation: 'Myo' },
      { syllable: '뵤', pronunciation: 'Byo' },
      { syllable: '쇼', pronunciation: 'Syo' },
      { syllable: '요', pronunciation: 'Yo' },
      { syllable: '죠', pronunciation: 'Jyo' },
      { syllable: '쵸', pronunciation: 'Chyo' },
      { syllable: '쿄', pronunciation: 'Kyo' },
      { syllable: '툐', pronunciation: 'Tyo' },
      { syllable: '표', pronunciation: 'Pyo' },
      { syllable: '효', pronunciation: 'Hyo' },
    ],
  },
  {
    vowel: 'ㅜ', vowelSound: 'Oo',
    explanation: 'ㅜ always makes the "Oo" sound — pucker your lips like you\'re saying "oo!" or "boo!".',
    blocks: [
      { syllable: '구', pronunciation: 'Gu' },
      { syllable: '누', pronunciation: 'Nu' },
      { syllable: '두', pronunciation: 'Du' },
      { syllable: '루', pronunciation: 'Lu' },
      { syllable: '무', pronunciation: 'Mu' },
      { syllable: '부', pronunciation: 'Bu' },
      { syllable: '수', pronunciation: 'Su' },
      { syllable: '우', pronunciation: 'Wu' },
      { syllable: '주', pronunciation: 'Ju' },
      { syllable: '추', pronunciation: 'Chu' },
      { syllable: '쿠', pronunciation: 'Ku' },
      { syllable: '투', pronunciation: 'Tu' },
      { syllable: '푸', pronunciation: 'Pu' },
      { syllable: '후', pronunciation: 'Hu' },
    ],
  },
  {
    vowel: 'ㅠ', vowelSound: 'Yu',
    explanation: 'ㅠ always makes the "Yu" sound. It\'s like ㅜ ("Oo") but with a "Y" in front — like "you".',
    blocks: [
      { syllable: '규', pronunciation: 'Gyu' },
      { syllable: '뉴', pronunciation: 'Nyu' },
      { syllable: '듀', pronunciation: 'Dyu' },
      { syllable: '류', pronunciation: 'Lyu' },
      { syllable: '뮤', pronunciation: 'Myu' },
      { syllable: '뷰', pronunciation: 'Byu' },
      { syllable: '슈', pronunciation: 'Syu' },
      { syllable: '유', pronunciation: 'Yu' },
      { syllable: '쥬', pronunciation: 'Jyu' },
      { syllable: '츄', pronunciation: 'Chyu' },
      { syllable: '큐', pronunciation: 'Kyu' },
      { syllable: '튜', pronunciation: 'Tyu' },
      { syllable: '퓨', pronunciation: 'Pyu' },
      { syllable: '휴', pronunciation: 'Hyu' },
    ],
  },
  {
    vowel: 'ㅡ', vowelSound: 'Eu',
    explanation: 'ㅡ makes the "Eu" sound — there\'s no English equivalent! Spread your lips flat (don\'t round them) and let the sound come from the back of your throat.',
    blocks: [
      { syllable: '그', pronunciation: 'Geu' },
      { syllable: '느', pronunciation: 'Neu' },
      { syllable: '드', pronunciation: 'Deu' },
      { syllable: '르', pronunciation: 'Leu' },
      { syllable: '므', pronunciation: 'Meu' },
      { syllable: '브', pronunciation: 'Beu' },
      { syllable: '스', pronunciation: 'Seu' },
      { syllable: '으', pronunciation: 'Eu' },
      { syllable: '즈', pronunciation: 'Jeu' },
      { syllable: '츠', pronunciation: 'Cheu' },
      { syllable: '크', pronunciation: 'Keu' },
      { syllable: '트', pronunciation: 'Teu' },
      { syllable: '프', pronunciation: 'Peu' },
      { syllable: '흐', pronunciation: 'Heu' },
    ],
  },
  {
    vowel: 'ㅣ', vowelSound: 'Ee',
    explanation: 'ㅣ always makes the "Ee" sound — like the "ee" in "see" or "free". Spread your lips into a smile!',
    blocks: [
      { syllable: '기', pronunciation: 'Gi' },
      { syllable: '니', pronunciation: 'Ni' },
      { syllable: '디', pronunciation: 'Di' },
      { syllable: '리', pronunciation: 'Li' },
      { syllable: '미', pronunciation: 'Mi' },
      { syllable: '비', pronunciation: 'Bi' },
      { syllable: '시', pronunciation: 'Si' },
      { syllable: '이', pronunciation: 'Ee' },
      { syllable: '지', pronunciation: 'Ji' },
      { syllable: '치', pronunciation: 'Chi' },
      { syllable: '키', pronunciation: 'Ki' },
      { syllable: '티', pronunciation: 'Ti' },
      { syllable: '피', pronunciation: 'Pi' },
      { syllable: '히', pronunciation: 'Hi' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Section 1.5 — Special characters (쌍자음 / 된소리)
// ─────────────────────────────────────────────────────────────────────────────
const specialCharItems: SpecialCharItem[] = [
  {
    char: 'ㄲ',
    koreanName: '쌍기역',
    description:
      'A very sharp, tight "K" sound with zero breath. Imagine holding your breath and then releasing a crisp "K" — no air puff allowed!',
  },
  {
    char: 'ㄸ',
    koreanName: '쌍디귿',
    description:
      'A sharp, hard "T" sound made by pressing your tongue tightly against the roof of your mouth. Think of a drum hit — precise and punchy.',
  },
  {
    char: 'ㅃ',
    koreanName: '쌍비읍',
    description:
      'A popping, tight "P" sound made by pressing your lips firmly together before releasing. Like a small explosion at your lips!',
  },
  {
    char: 'ㅆ',
    koreanName: '쌍시옷',
    description:
      'A hissing, strong "S" sound. Push the air out forcefully through your teeth while tensing your tongue — like an aggressive "sss".',
  },
  {
    char: 'ㅉ',
    koreanName: '쌍지읒',
    description:
      'A sharp, crisp "CH" or "J" sound with no air escaping. Tense your jaw and let it pop forward.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Chapter 1 data
// ─────────────────────────────────────────────────────────────────────────────
const chapter1: Chapter = {
  id: 1,
  title: 'Chapter 1',
  subtitle: 'The Korean Alphabet — Hangul (한글)',
  emoji: '🔤',
  description:
    'Before BTS can sing to you or BLACKPINK can spell their name, every sound starts here — with Hangul. Created in 1443, Hangul is one of the most scientifically designed writing systems in the world. It\'s phonetic, logical, and you can start reading it in just a few hours!',

  sections: [

    // ── 1.1 What is Hangul? ──────────────────────────────────────────────────
    {
      title: 'What is Hangul?',
      sectionType: 'default',
      content:
        'Hangul (한글) is the official writing system of Korea, made up of 14 basic consonants and 10 basic vowels. Unlike Chinese characters, Hangul is phonetic — each symbol represents a specific sound, and every character is built logically from those sounds.\n\n'
        + '📜 A Brief History\n'
        + 'Before 1443, Koreans used Classical Chinese characters (한자) to write. The problem? Chinese characters are complex, take years to master, and didn\'t match Korean sounds well. Ordinary people — farmers, merchants, women — were essentially locked out of literacy.\n\n'
        + 'King Sejong the Great (세종대왕), one of Korea\'s most beloved rulers, found this deeply unjust. In 1443, he and a team of royal scholars created a brand-new writing system called 훈민정음 (Hunminjeongeum), meaning "The Proper Sounds for the Instruction of the People." His goal was simple: give everyone the ability to read and write.\n\n'
        + 'Today, Hangul is celebrated every October 9th as Hangul Day (한글날) in South Korea — a national holiday honoring the alphabet itself. UNESCO has also recognized it as one of the most logical writing systems ever created.\n\n'
        + '🔗 How Hangul Relates to English\n'
        + 'If you know the English alphabet, you already understand the core concept: Hangul is phonetic, just like English. Each letter represents a sound. The key difference is that Korean letters are grouped into syllable blocks — instead of writing letters in a line, you stack them into little squares.\n\n'
        + 'English has 26 letters. Hangul has 24 basic letters (14 consonants + 10 vowels). You\'re basically learning a new set of symbols for sounds you already make! Most learners can recognize all the basic letters within a few hours. This tool will guide you through every single one — with audio, examples, and quizzes to make it stick. Let\'s go!',
      examples: [
        { korean: '한글', romanization: 'Han-geul', english: 'The Korean alphabet' },
        { korean: '훈민정음', romanization: 'Hun-min-jeong-eum', english: '"Proper Sounds for the Instruction of the People" — Hangul\'s original name' },
        { korean: '세종대왕', romanization: 'Se-jong Dae-wang', english: 'King Sejong the Great — creator of Hangul' },
        { korean: '한글날', romanization: 'Han-geul-nal', english: 'Hangul Day — celebrated October 9th' },
      ],
    },

    // ── 1.2 The 14 Basic Consonants ─────────────────────────────────────────
    {
      title: 'The 14 Basic Consonants',
      sectionType: 'consonants',
      content:
        'Consonants are the backbone of every Korean syllable. Here\'s a cool design fact: each consonant was shaped to look like the part of your mouth or tongue that produces the sound. ㄴ looks like a tongue touching the roof of your mouth. ㅁ looks like lips pressed together. Built-in pronunciation hints!\n\nBelow, each consonant is shown with its Korean name, romanized name, and the sound it makes.',
      consonants: consonantItems,
    },

    // ── 1.3 The 10 Basic Vowels ──────────────────────────────────────────────
    {
      title: 'The 10 Basic Vowels',
      sectionType: 'vowels',
      content:
        'Vowels in Korean are written as lines — either vertical or horizontal — and are always paired with a consonant inside a syllable block. When a vowel starts a syllable on its own, the silent consonant ㅇ acts as a placeholder (think of it as a zero).\n\nThink of vowels like the melody in a K-pop song — they carry the tone of every syllable!',
      vowels: vowelItems,
    },

    // ── 1.4 How Syllable Blocks Work ─────────────────────────────────────────
    {
      title: 'How Syllable Blocks Work',
      sectionType: 'syllableBlocks',
      content:
        'This is the key insight that makes Hangul click! Every syllable is written in a compact square block. The most common structure is:\n\n  [Consonant + Vowel] → 가 = ㄱ + ㅏ = "ga"\n  [Consonant + Vowel + Consonant] → 한 = ㅎ + ㅏ + ㄴ = "han"\n\nBelow you\'ll find all 140 combinations — every consonant paired with every vowel. Each group is organized by vowel so you can hear how the vowel sound stays constant while the consonant changes the beginning. Tap 🔊 to hear each syllable!',
      syllableGroups,
    },

    // ── 1.5 Special Characters (쌍자음) ──────────────────────────────────────
    {
      title: 'Special Characters in Korean (쌍자음)',
      sectionType: 'specialChars',
      content:
        'Korean has 5 special consonants called 쌍자음 (Ssang-ja-eum), which literally means "paired consonants" — because they\'re just the basic consonant written twice! They are also called 된소리 (Doen-so-ri), meaning "tensed sounds," because of how they are pronounced: tight, sharp, and with no puff of breath.\n\nThink of them as the "intense mode" versions of regular consonants. Tap 🔊 to hear the difference!',
      specialChars: specialCharItems,
    },

    // ── 1.6 Pronunciation Tips ───────────────────────────────────────────────
    {
      title: 'Pronunciation Tips',
      sectionType: 'default',
      content:
        'A few rules that will save you from confusion:\n\n1. ㄹ is neither "r" nor "l" — it\'s a light tap of the tongue, like the "tt" in American English "butter". Practice: 라면 (ra-myeon) = ramen!\n\n2. ㅇ at the start of a syllable is completely silent — 아이유 starts with the "a" sound, not any consonant.\n\n3. Double consonants (ㄲ ㄸ ㅃ ㅆ ㅉ) are tense and forceful — like saying the sound with extra intensity and zero breath.\n\n4. Vowel ㅡ has no English equivalent — try saying "ee" but with your lips spread wide and flat instead of rounded.',
      examples: [
        { korean: '라면', romanization: 'Ra-myeon', english: 'Ramen — the ㄹ sounds like a light "r"' },
        { korean: '아이돌', romanization: 'A-i-dol', english: 'Idol — 아 starts the vowel directly (ㅇ is silent)' },
        { korean: '음악', romanization: 'Eu-mak', english: 'Music — ㅡ is that flat back-of-throat vowel' },
        { korean: '아이유', romanization: 'A-i-yu', english: 'IU (singer) — each ㅇ is silent; pure vowel sounds' },
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // Word Quiz — consonant names + vowel sounds
  // ─────────────────────────────────────────────────────────────────────────
  wordQuiz: [
    {
      id: 1,
      question: 'What is the name of this consonant?',
      korean: 'ㄱ',
      options: ['gi-yeok', 'ni-eun', 'ri-eul', 'hi-eut'],
      answer: 'gi-yeok',
    },
    {
      id: 2,
      question: 'What sound does this vowel make?',
      korean: 'ㅏ',
      options: ['Ah', 'Oh', 'Ee', 'Ya'],
      answer: 'Ah',
    },
    {
      id: 3,
      question: 'What is the name of this consonant?',
      korean: 'ㄴ',
      options: ['di-geuk', 'ni-eun', 'mi-eum', 'bi-eup'],
      answer: 'ni-eun',
    },
    {
      id: 4,
      question: 'What sound does this vowel make?',
      korean: 'ㅣ',
      options: ['Uh', 'Oo', 'Ee', 'Oh'],
      answer: 'Ee',
    },
    {
      id: 5,
      question: 'What is the name of this consonant?',
      korean: 'ㄹ',
      options: ['gi-yeok', 'ni-eun', 'ri-eul', 'si-ot'],
      answer: 'ri-eul',
    },
    {
      id: 6,
      question: 'What sound does this vowel make?',
      korean: 'ㅗ',
      options: ['Ah', 'Yoh', 'Oh', 'Oo'],
      answer: 'Oh',
    },
    {
      id: 7,
      question: 'What is the name of this consonant?',
      korean: 'ㅎ',
      options: ['ki-euk', 'ti-eut', 'pi-eup', 'hi-eut'],
      answer: 'hi-eut',
    },
    {
      id: 8,
      question: 'What sound does this vowel make?',
      korean: 'ㅜ',
      options: ['Eu', 'Yu', 'Oh', 'Oo'],
      answer: 'Oo',
    },
    {
      id: 9,
      question: 'What is the name of this consonant?',
      korean: 'ㅁ',
      options: ['ni-eun', 'bi-eup', 'mi-eum', 'pi-eup'],
      answer: 'mi-eum',
    },
    {
      id: 10,
      question: 'What sound does this vowel make?',
      korean: 'ㅓ',
      options: ['Ah', 'Oh', 'Uh', 'Ee'],
      answer: 'Uh',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // Sentence Quiz — syllable block fill-in-the-blank
  // ─────────────────────────────────────────────────────────────────────────
  sentenceQuiz: [
    {
      id: 1,
      instruction: 'Choose the correct vowel to make this syllable.',
      sentence: 'To make the "Ga" sound, combine ㄱ with ___.',
      korean: 'ㄱ + ㅏ = 가',
      options: ['ㅏ', 'ㅓ', 'ㅛ', 'ㅣ'],
      answer: 'ㅏ',
      translation: 'ㄱ + ㅏ = 가 (Ga)',
    },
    {
      id: 2,
      instruction: 'Which letters make up this syllable block?',
      sentence: '나 is made of ___.',
      korean: 'ㄴ + ㅏ = 나',
      options: ['ㄴ + ㅏ', 'ㄴ + ㅗ', 'ㄷ + ㅏ', 'ㄹ + ㅏ'],
      answer: 'ㄴ + ㅏ',
      translation: '나 = ㄴ + ㅏ, which sounds like "Na".',
    },
    {
      id: 3,
      instruction: 'Choose the correct vowel to make this syllable.',
      sentence: 'To make the "Go" sound, combine ㄱ with ___.',
      korean: 'ㄱ + ㅗ = 고',
      options: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'],
      answer: 'ㅗ',
      translation: 'ㄱ + ㅗ = 고 (Go)',
    },
    {
      id: 4,
      instruction: 'Which vowel makes this sound?',
      sentence: 'Which vowel always makes the "Ya" sound?',
      korean: 'ㅑ = Ya',
      options: ['ㅑ', 'ㅕ', 'ㅛ', 'ㅠ'],
      answer: 'ㅑ',
      translation: 'ㅑ always makes the "Ya" sound.',
    },
    {
      id: 5,
      instruction: 'Which letters make up this syllable block?',
      sentence: '하 is made of ___.',
      korean: 'ㅎ + ㅏ = 하',
      options: ['ㅎ + ㅏ', 'ㅎ + ㅗ', 'ㅎ + ㅜ', 'ㅎ + ㅣ'],
      answer: 'ㅎ + ㅏ',
      translation: '하 = ㅎ + ㅏ, which sounds like "Ha".',
    },
    {
      id: 6,
      instruction: 'Choose the correct vowel to make this syllable.',
      sentence: 'To make the "Mi" sound, combine ㅁ with ___.',
      korean: 'ㅁ + ㅣ = 미',
      options: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'],
      answer: 'ㅣ',
      translation: 'ㅁ + ㅣ = 미 (Mi)',
    },
    {
      id: 7,
      instruction: 'Which vowel makes this sound?',
      sentence: 'Which vowel always makes the "Oh" sound?',
      korean: 'ㅗ = Oh',
      options: ['ㅗ', 'ㅛ', 'ㅓ', 'ㅡ'],
      answer: 'ㅗ',
      translation: 'ㅗ always makes the "Oh" sound.',
    },
    {
      id: 8,
      instruction: 'Which letters make up this syllable block?',
      sentence: '서 is made of ___.',
      korean: 'ㅅ + ㅓ = 서',
      options: ['ㅅ + ㅓ', 'ㅅ + ㅏ', 'ㅅ + ㅗ', 'ㅈ + ㅓ'],
      answer: 'ㅅ + ㅓ',
      translation: '서 = ㅅ + ㅓ, which sounds like "Seo". You\'ll see this in 서울 (Seoul)!',
    },
    {
      id: 9,
      instruction: 'Choose the correct vowel to make this syllable.',
      sentence: 'To make the "Yu" sound, combine ㅇ with ___.',
      korean: 'ㅇ + ㅠ = 유',
      options: ['ㅜ', 'ㅠ', 'ㅛ', 'ㅡ'],
      answer: 'ㅠ',
      translation: 'ㅇ + ㅠ = 유 (Yu) — ㅠ makes the "Yu" sound.',
    },
    {
      id: 10,
      instruction: 'What is this consonant called?',
      sentence: 'The consonant ㄹ is named ___.',
      korean: 'ㄹ = 리을',
      options: ['gi-yeok', 'ni-eun', 'ri-eul', 'mi-eum'],
      answer: 'ri-eul',
      translation: 'ㄹ is called 리을 (ri-eul) — it makes an "L" or "R" sound.',
    },
  ],
};

export default chapter1;
