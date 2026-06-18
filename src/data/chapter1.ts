export interface LessonSection {
  title: string;
  content: string;
  examples?: { korean: string; romanization: string; english: string }[];
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
  sentence: string;        // uses ___ for blank
  korean: string;          // full Korean sentence for reference
  options: string[];       // 5 choices
  answer: string;
  translation: string;     // full English translation
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

const chapter1: Chapter = {
  id: 1,
  title: 'Chapter 1',
  subtitle: 'The Korean Alphabet — Hangul (한글)',
  emoji: '🔤',
  description:
    'Before BTS can sing to you or BLACKPINK can spell their name, every sound starts here — with Hangul. Created in 1443 by King Sejong the Great, Hangul is one of the most scientifically designed writing systems in the world. Unlike Chinese characters, Hangul is phonetic — each symbol represents a sound, and you can learn it in a few days!',

  sections: [
    {
      title: 'What is Hangul?',
      content:
        'Hangul (한글) is the official alphabet of Korea. It has 14 basic consonants and 10 basic vowels. Unlike English letters that stand alone, Korean letters are grouped into syllable blocks. Each block represents one syllable and always contains at least one consonant and one vowel.\n\nFun fact: The word "Gangnam Style" — yes, that Gangnam Style — is written 강남스타일 in Hangul. Once you learn the alphabet, you can read that!',
      examples: [
        { korean: '한글', romanization: 'Han-geul', english: 'The Korean alphabet' },
        { korean: '강남스타일', romanization: 'Gang-nam Seu-ta-il', english: 'Gangnam Style (PSY)' },
        { korean: '방탄소년단', romanization: 'Bang-tan So-nyeon-dan', english: 'BTS (Bulletproof Boy Scouts)' },
      ],
    },
    {
      title: 'The 14 Basic Consonants',
      content:
        'Consonants are the backbone of Korean syllables. Each consonant was designed to look like the shape your mouth and tongue make when producing that sound. Think of it as built-in pronunciation help!\n\nHere are all 14 basic consonants with their approximate English sounds:',
      examples: [
        { korean: 'ㄱ', romanization: 'g / k', english: '"g" as in "go" (start of word) or "k" at the end' },
        { korean: 'ㄴ', romanization: 'n', english: '"n" as in "no"' },
        { korean: 'ㄷ', romanization: 'd / t', english: '"d" as in "dog" or "t" at the end' },
        { korean: 'ㄹ', romanization: 'r / l', english: 'between "r" and "l" — like a light flap' },
        { korean: 'ㅁ', romanization: 'm', english: '"m" as in "mom"' },
        { korean: 'ㅂ', romanization: 'b / p', english: '"b" as in "boy" or "p" at the end' },
        { korean: 'ㅅ', romanization: 's', english: '"s" as in "sun"' },
        { korean: 'ㅇ', romanization: 'silent / ng', english: 'silent at start, "ng" sound at end (like "sing")' },
        { korean: 'ㅈ', romanization: 'j', english: '"j" as in "juice"' },
        { korean: 'ㅊ', romanization: 'ch', english: '"ch" as in "church"' },
        { korean: 'ㅋ', romanization: 'k', english: 'strong "k" — like "Korea"' },
        { korean: 'ㅌ', romanization: 't', english: 'strong "t" — like "top"' },
        { korean: 'ㅍ', romanization: 'p', english: 'strong "p" — like "pop"' },
        { korean: 'ㅎ', romanization: 'h', english: '"h" as in "hello"' },
      ],
    },
    {
      title: 'The 10 Basic Vowels',
      content:
        'Vowels in Korean are written as lines — vertical or horizontal — and are always attached to a consonant inside a syllable block. When a vowel starts a syllable on its own, the silent consonant ㅇ is used as a placeholder.\n\nThink of vowels like the melody in a K-pop song — without them, the consonants are just noise!',
      examples: [
        { korean: 'ㅏ', romanization: 'a', english: '"ah" — like "spa"' },
        { korean: 'ㅑ', romanization: 'ya', english: '"yah" — like "yard"' },
        { korean: 'ㅓ', romanization: 'eo', english: '"uh" — like "fun" (British)' },
        { korean: 'ㅕ', romanization: 'yeo', english: '"yuh" — like "young"' },
        { korean: 'ㅗ', romanization: 'o', english: '"oh" — like "go"' },
        { korean: 'ㅛ', romanization: 'yo', english: '"yoh" — like "yoga"' },
        { korean: 'ㅜ', romanization: 'u', english: '"oo" — like "moon"' },
        { korean: 'ㅠ', romanization: 'yu', english: '"you" — like "cute"' },
        { korean: 'ㅡ', romanization: 'eu', english: '"eu" — no English equivalent; lips spread, sound from back of throat' },
        { korean: 'ㅣ', romanization: 'i', english: '"ee" — like "see"' },
      ],
    },
    {
      title: 'How Syllable Blocks Work',
      content:
        'This is the key insight that makes Hangul click. Every syllable is written in a square block. The most common structure is:\n\n  [Consonant + Vowel]  →  e.g., 가 = ㄱ + ㅏ = "ga"\n  [Consonant + Vowel + Consonant]  →  e.g., 한 = ㅎ + ㅏ + ㄴ = "han"\n\nThe vowel can be to the right of the consonant (vertical vowels: ㅏ ㅓ ㅣ) or below it (horizontal vowels: ㅗ ㅜ ㅡ).',
      examples: [
        { korean: '가', romanization: 'ga', english: 'ㄱ + ㅏ — used in 가다 (to go)' },
        { korean: '나', romanization: 'na', english: 'ㄴ + ㅏ — used in 나 (I / me)' },
        { korean: '한', romanization: 'han', english: 'ㅎ + ㅏ + ㄴ — first syllable of 한국 (Korea)' },
        { korean: '국', romanization: 'guk', english: 'ㄱ + ㅜ + ㄱ — second syllable of 한국 (Korea)' },
        { korean: '한국', romanization: 'Han-guk', english: 'Korea — now you can read it!' },
      ],
    },
    {
      title: 'Reading K-Pop in Hangul',
      content:
        'Let\'s put it all together with names and words you already know! Reading these will feel magical once you recognize the letters.',
      examples: [
        { korean: '블랙핑크', romanization: 'Beul-laek-ping-keu', english: 'BLACKPINK' },
        { korean: '아이유', romanization: 'A-i-yu', english: 'IU (singer — literally "I, You")' },
        { korean: '서울', romanization: 'Seo-ul', english: 'Seoul — the capital of Korea' },
        { korean: '김치', romanization: 'Kim-chi', english: 'Kimchi — Korea\'s iconic fermented cabbage' },
        { korean: '사랑', romanization: 'Sa-rang', english: 'Love — used constantly in K-dramas!' },
        { korean: '오빠', romanization: 'Op-pa', english: 'Older brother (girls use this for guys they admire — yes, like in K-pop fan culture)' },
      ],
    },
    {
      title: 'Pronunciation Tips',
      content:
        'A few rules that will save you from confusion:\n\n1. ㄹ is neither "r" nor "l" — it\'s a light tap of the tongue, like the "tt" in American English "butter". Practice: 라면 (ra-myeon) = ramen!\n\n2. ㅇ at the start of a syllable is completely silent — 아이유 starts with the "a" sound, not any consonant.\n\n3. Double consonants (ㄲ ㄸ ㅃ ㅆ ㅉ) exist and sound tense/strong — like saying the sound with extra force. You\'ll encounter these in Chapter 2.\n\n4. Vowel ㅡ has no English equivalent — try saying "ee" but with your lips spread wide and flat instead of forward.',
      examples: [
        { korean: '라면', romanization: 'Ra-myeon', english: 'Ramen — the ㄹ sounds like a light "r"' },
        { korean: '아이돌', romanization: 'A-i-dol', english: 'Idol — 아 starts the vowel directly (ㅇ is silent)' },
        { korean: '음악', romanization: 'Eu-mak', english: 'Music — ㅡ is that flat back-of-throat vowel' },
      ],
    },
  ],

  wordQuiz: [
    {
      id: 1,
      question: 'What does 한글 (Han-geul) mean?',
      korean: '한글',
      options: ['Korea', 'The Korean alphabet', 'Love', 'Music'],
      answer: 'The Korean alphabet',
    },
    {
      id: 2,
      question: 'Which consonant makes the "m" sound?',
      korean: 'ㅁ',
      options: ['ㄴ', 'ㅂ', 'ㅁ', 'ㅎ'],
      answer: 'ㅁ',
    },
    {
      id: 3,
      question: 'What vowel makes the "ah" sound (like in "spa")?',
      korean: 'ㅏ',
      options: ['ㅓ', 'ㅏ', 'ㅣ', 'ㅡ'],
      answer: 'ㅏ',
    },
    {
      id: 4,
      question: 'How do you write "Korea" in Hangul?',
      korean: '한국',
      options: ['한글', '서울', '한국', '음악'],
      answer: '한국',
    },
    {
      id: 5,
      question: 'What does 사랑 (sa-rang) mean?',
      korean: '사랑',
      options: ['Music', 'Food', 'Love', 'Friend'],
      answer: 'Love',
    },
    {
      id: 6,
      question: 'Which consonant is SILENT at the beginning of a syllable?',
      korean: 'ㅇ',
      options: ['ㄱ', 'ㅎ', 'ㅇ', 'ㄴ'],
      answer: 'ㅇ',
    },
    {
      id: 7,
      question: 'What does 서울 (Seo-ul) mean?',
      korean: '서울',
      options: ['Kimchi', 'Seoul', 'Music', 'Korea'],
      answer: 'Seoul',
    },
    {
      id: 8,
      question: 'Which syllable block is 가 made of?',
      korean: '가',
      options: ['ㄴ + ㅏ', 'ㄱ + ㅜ', 'ㄱ + ㅏ', 'ㅎ + ㅣ'],
      answer: 'ㄱ + ㅏ',
    },
    {
      id: 9,
      question: 'What does 오빠 (op-pa) mean in K-pop culture?',
      korean: '오빠',
      options: [
        'Younger brother',
        'Older brother / admired older guy',
        'Best friend',
        'Teacher',
      ],
      answer: 'Older brother / admired older guy',
    },
    {
      id: 10,
      question: 'What does 김치 (kim-chi) mean?',
      korean: '김치',
      options: ['Ramen', 'Rice', 'Kimchi', 'Soup'],
      answer: 'Kimchi',
    },
  ],

  sentenceQuiz: [
    {
      id: 1,
      instruction: 'Fill in the blank: Choose the correct Hangul for "Korea".',
      sentence: '___ is written in Hangul as ___.',
      korean: '한국은 한글로 씁니다.',
      options: ['한글', '한국', '서울', '사랑', '음악'],
      answer: '한국',
      translation: 'Korea is written in Hangul as 한국.',
    },
    {
      id: 2,
      instruction: 'Fill in the blank with the correct vowel sound.',
      sentence: 'The vowel ㅏ makes an "___ " sound, like in "spa".',
      korean: 'ㅏ는 "아" 소리입니다.',
      options: ['ee', 'oo', 'ah', 'uh', 'oh'],
      answer: 'ah',
      translation: 'The vowel ㅏ makes an "ah" sound.',
    },
    {
      id: 3,
      instruction: 'Choose the correct meaning of this word.',
      sentence: '사랑 means "___ " in English.',
      korean: '사랑은 영어로 "love"입니다.',
      options: ['Music', 'Food', 'Ramen', 'Love', 'Friend'],
      answer: 'Love',
      translation: '사랑 means "Love" in English.',
    },
    {
      id: 4,
      instruction: 'Fill in the blank: Which consonant is used as a silent placeholder?',
      sentence: 'When a syllable starts with a vowel, we use ___ as a silent consonant.',
      korean: '모음으로 시작하는 음절에는 ㅇ을 씁니다.',
      options: ['ㄱ', 'ㅎ', 'ㄴ', 'ㅇ', 'ㄹ'],
      answer: 'ㅇ',
      translation: 'When a syllable starts with a vowel, we use ㅇ as a silent consonant.',
    },
    {
      id: 5,
      instruction: 'Choose the romanization for 블랙핑크.',
      sentence: 'BLACKPINK is written 블랙핑크, romanized as "___".',
      korean: '블랙핑크 (BLACKPINK)',
      options: [
        'Beu-laek-ping-keu',
        'Ba-rak-ping-ku',
        'Bul-lek-pang-ke',
        'Bo-lek-ping-ko',
        'Bi-lek-peng-ki',
      ],
      answer: 'Beu-laek-ping-keu',
      translation: 'BLACKPINK is romanized as "Beu-laek-ping-keu".',
    },
    {
      id: 6,
      instruction: 'Fill in the blank with the correct syllable block.',
      sentence: 'ㄱ + ㅏ = ___ (sounds like "ga")',
      korean: 'ㄱ + ㅏ = 가',
      options: ['나', '다', '가', '바', '하'],
      answer: '가',
      translation: 'ㄱ + ㅏ = 가, which sounds like "ga".',
    },
    {
      id: 7,
      instruction: 'Choose the correct meaning.',
      sentence: '서울 is the ___ of Korea.',
      korean: '서울은 한국의 수도입니다.',
      options: ['island', 'capital', 'river', 'mountain', 'village'],
      answer: 'capital',
      translation: '서울 is the capital of Korea.',
    },
    {
      id: 8,
      instruction: 'Fill in the blank with the correct consonant.',
      sentence: 'The consonant ___ makes an "n" sound, like in "no".',
      korean: 'ㄴ은 "n" 소리입니다.',
      options: ['ㄱ', 'ㄷ', 'ㄴ', 'ㄹ', 'ㅁ'],
      answer: 'ㄴ',
      translation: 'The consonant ㄴ makes an "n" sound.',
    },
    {
      id: 9,
      instruction: 'Choose the correct Hangul for "love".',
      sentence: '"Love" in Korean is ___.',
      korean: '"사랑"은 영어로 "love"입니다.',
      options: ['음악', '오빠', '사랑', '한글', '김치'],
      answer: '사랑',
      translation: '"Love" in Korean is 사랑.',
    },
    {
      id: 10,
      instruction: 'Fill in the blank about Hangul history.',
      sentence: 'Hangul was created in ___ by King Sejong the Great.',
      korean: '한글은 세종대왕이 1443년에 만들었습니다.',
      options: ['1234', '1776', '1443', '1919', '1592'],
      answer: '1443',
      translation: 'Hangul was created in 1443 by King Sejong the Great.',
    },
  ],
};

export default chapter1;
