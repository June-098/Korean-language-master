import { Chapter } from './chapter1';

const chapter2: Chapter = {
  id: 2,
  title: 'Chapter 2',
  subtitle: 'Basic Korean Words',
  emoji: '📝',
  description:
    'Now that you know the alphabet, let\'s build your first vocabulary! This chapter covers essential everyday words — numbers, colors, food, family, and common objects. You\'ll recognize many of these from K-pop lyrics, Korean dramas, and Korean restaurant menus.',

  sections: [

    // ── 2.1 Numbers ──────────────────────────────────────────────────────────
    {
      title: 'Numbers (숫자 — Sut-ja)',
      sectionType: 'grouped',
      content:
        'Korean has TWO number systems! You\'ll use both every day — one for counting things and age, the other for prices and dates. In Korea, prices are often in the thousands, so knowing these numbers is essential the moment you land.',
      subsections: [
        {
          title: 'Native Korean Numbers (순우리말)',
          badge: '🇰🇷',
          description:
            'The original Korean counting system. Use these when counting people or items, giving your age, or telling the hour (e.g., "three o\'clock").',
          usageLabel: '✅ Use for: Counting · Age · Hours',
          items: [
            { korean: '하나', romanization: 'ha-na',     english: '1 — One' },
            { korean: '둘',   romanization: 'dul',       english: '2 — Two' },
            { korean: '셋',   romanization: 'set',       english: '3 — Three' },
            { korean: '넷',   romanization: 'net',       english: '4 — Four' },
            { korean: '다섯', romanization: 'da-seot',   english: '5 — Five' },
            { korean: '여섯', romanization: 'yeo-seot',  english: '6 — Six' },
            { korean: '일곱', romanization: 'il-gop',    english: '7 — Seven' },
            { korean: '여덟', romanization: 'yeo-deol',  english: '8 — Eight' },
            { korean: '아홉', romanization: 'a-hop',     english: '9 — Nine' },
            { korean: '열',   romanization: 'yeol',      english: '10 — Ten' },
            { korean: '스물', romanization: 'seu-mul',   english: '20 — Twenty' },
            { korean: '서른', romanization: 'seo-reun',  english: '30 — Thirty' },
            { korean: '마흔', romanization: 'ma-heun',   english: '40 — Forty' },
            { korean: '쉰',   romanization: 'swin',      english: '50 — Fifty' },
            { korean: '예순', romanization: 'ye-sun',    english: '60 — Sixty' },
            { korean: '일흔', romanization: 'il-heun',   english: '70 — Seventy' },
            { korean: '여든', romanization: 'yeo-deun',  english: '80 — Eighty' },
            { korean: '아흔', romanization: 'a-heun',    english: '90 — Ninety' },
            { korean: '열다섯', romanization: 'yeol-da-seot', english: '15 — Fifteen (열 + 다섯)' },
            { korean: '서른둘', romanization: 'seo-reun-dul', english: '32 — Thirty-two (서른 + 둘)' },
          ],
        },
        {
          title: 'Sino-Korean Numbers (한자어 숫자)',
          badge: '🔢',
          description:
            'Borrowed from Chinese. Use these for prices, dates, phone numbers, floor numbers, and minutes/seconds.',
          usageLabel: '✅ Use for: Prices · Dates · Phone · Minutes',
          items: [
            { korean: '일',   romanization: 'il',       english: '1 — One' },
            { korean: '이',   romanization: 'i',        english: '2 — Two' },
            { korean: '삼',   romanization: 'sam',      english: '3 — Three' },
            { korean: '사',   romanization: 'sa',       english: '4 — Four' },
            { korean: '오',   romanization: 'o',        english: '5 — Five' },
            { korean: '육',   romanization: 'yuk',      english: '6 — Six' },
            { korean: '칠',   romanization: 'chil',     english: '7 — Seven' },
            { korean: '팔',   romanization: 'pal',      english: '8 — Eight' },
            { korean: '구',   romanization: 'gu',       english: '9 — Nine' },
            { korean: '십',   romanization: 'sip',      english: '10 — Ten' },
            { korean: '이십', romanization: 'i-sip',    english: '20 — Twenty' },
            { korean: '삼십', romanization: 'sam-sip',  english: '30 — Thirty' },
            { korean: '사십', romanization: 'sa-sip',   english: '40 — Forty' },
            { korean: '오십', romanization: 'o-sip',    english: '50 — Fifty' },
            { korean: '육십', romanization: 'yuk-sip',  english: '60 — Sixty' },
            { korean: '칠십', romanization: 'chil-sip', english: '70 — Seventy' },
            { korean: '팔십', romanization: 'pal-sip',  english: '80 — Eighty' },
            { korean: '구십', romanization: 'gu-sip',   english: '90 — Ninety' },
            { korean: '백',   romanization: 'baek',     english: '100 — One hundred' },
            { korean: '천',   romanization: 'cheon',    english: '1,000 — One thousand' },
            { korean: '만',   romanization: 'man',      english: '10,000 — Ten thousand (key unit for Korean prices!)' },
          ],
        },
      ],
    },

    // ── 2.2 Colors ───────────────────────────────────────────────────────────
    {
      title: 'Colors (색깔 — Saek-kkal)',
      content:
        'Colors come up everywhere — describing outfits in K-pop music videos, talking about food, shopping in Myeongdong. BLACKPINK\'s signature colors? 검정 (black) + 분홍 (pink). Now you can say that in Korean!',
      examples: [
        { korean: '빨간색', romanization: 'ppal-gan-saek', english: 'Red',    emoji: '🔴' },
        { korean: '파란색', romanization: 'pa-ran-saek',   english: 'Blue',   emoji: '🔵' },
        { korean: '노란색', romanization: 'no-ran-saek',   english: 'Yellow', emoji: '🟡' },
        { korean: '초록색', romanization: 'cho-rok-saek',  english: 'Green',  emoji: '🟢' },
        { korean: '검정색', romanization: 'geom-jeong-saek', english: 'Black', emoji: '⚫' },
        { korean: '하얀색', romanization: 'ha-yan-saek',   english: 'White',  emoji: '⚪' },
        { korean: '분홍색', romanization: 'bun-hong-saek', english: 'Pink',   emoji: '🩷' },
        { korean: '보라색', romanization: 'bo-ra-saek',    english: 'Purple', emoji: '🟣' },
        { korean: '주황색', romanization: 'ju-hwang-saek', english: 'Orange', emoji: '🟠' },
      ],
    },

    // ── 2.3 Food ─────────────────────────────────────────────────────────────
    {
      title: 'Food Words (음식 — Eum-sik)',
      content:
        'Korean food culture is incredibly rich. You already know 김치 from Chapter 1 — let\'s build a full food vocabulary! K-drama tip: characters almost always bond over 삼겹살 (grilled pork belly) and 소주. You\'ll see why in Chapter 6!',
      examples: [
        { korean: '밥',    romanization: 'bap',          english: 'Rice / meal — heart of every Korean meal',     emoji: '🍚' },
        { korean: '물',    romanization: 'mul',           english: 'Water',                                        emoji: '💧' },
        { korean: '고기',  romanization: 'go-gi',         english: 'Meat',                                         emoji: '🥩' },
        { korean: '삼겹살', romanization: 'sam-gyeop-sal', english: 'Grilled pork belly — Korea\'s favourite BBQ', emoji: '🥓' },
        { korean: '불고기', romanization: 'bul-go-gi',    english: 'Bulgogi — marinated beef, sweet & savory',     emoji: '🍖' },
        { korean: '비빔밥', romanization: 'bi-bim-bap',   english: 'Bibimbap — mixed rice bowl with veggies & egg', emoji: '🍱' },
        { korean: '떡볶이', romanization: 'tteok-bo-kki', english: 'Tteokbokki — spicy rice cakes, #1 street food', emoji: '🌶️' },
        { korean: '라면',  romanization: 'ra-myeon',      english: 'Ramen — instant noodles, an art form',         emoji: '🍜' },
        { korean: '치킨',  romanization: 'chi-kin',       english: 'Korean fried chicken — crispier than anything', emoji: '🍗' },
        { korean: '소주',  romanization: 'so-ju',         english: 'Soju — Korean rice liquor, very popular',      emoji: '🍶' },
        { korean: '맥주',  romanization: 'maek-ju',       english: 'Beer',                                         emoji: '🍺' },
        { korean: '커피',  romanization: 'keo-pi',        english: 'Coffee — Korea has incredible café culture',   emoji: '☕' },
      ],
    },

    // ── 2.4 Family & People ──────────────────────────────────────────────────
    {
      title: 'Family & People (가족 — Ga-jok)',
      content:
        'In Korean culture, relationships and titles matter deeply. You don\'t just say "you" — you use a title based on age and relationship. This is why K-pop fans call their favourite male idol "오빠" — it\'s a sign of closeness!',
      examples: [
        { korean: '나 / 저',   romanization: 'na / jeo',         english: 'I / Me (나 = casual, 저 = polite)',           emoji: '🙋' },
        { korean: '엄마',      romanization: 'eom-ma',            english: 'Mom',                                        emoji: '👩' },
        { korean: '아빠',      romanization: 'a-ppa',             english: 'Dad',                                        emoji: '👨' },
        { korean: '오빠',      romanization: 'op-pa',             english: 'Older brother (said by girl) — K-pop term!', emoji: '🧑' },
        { korean: '언니',      romanization: 'eon-ni',            english: 'Older sister (said by a girl)',              emoji: '👧' },
        { korean: '친구',      romanization: 'chin-gu',           english: 'Friend',                                     emoji: '🤝' },
        { korean: '남자친구',  romanization: 'nam-ja-chin-gu',    english: 'Boyfriend (남자 = man)',                     emoji: '👫' },
        { korean: '여자친구',  romanization: 'yeo-ja-chin-gu',    english: 'Girlfriend (여자 = woman)',                  emoji: '💑' },
      ],
    },

    // ── 2.5 Adjectives ───────────────────────────────────────────────────────
    {
      title: 'Common Adjectives (형용사 — Hyeong-yong-sa)',
      content:
        'These words bring descriptions to life. Korean adjectives come after the subject and act like verbs — but don\'t worry about grammar yet. Just learn the meanings and you\'ll start catching them in K-drama dialogue!',
      examples: [
        { korean: '좋다',   romanization: 'jo-ta',       english: 'Good / Nice / I like it',              emoji: '👍' },
        { korean: '나쁘다', romanization: 'na-ppeu-da',  english: 'Bad',                                   emoji: '👎' },
        { korean: '크다',   romanization: 'keu-da',      english: 'Big / Large',                           emoji: '📏' },
        { korean: '작다',   romanization: 'jak-da',      english: 'Small',                                 emoji: '🔬' },
        { korean: '맛있다', romanization: 'ma-sit-da',   english: 'Delicious — the most useful word!',     emoji: '😋' },
        { korean: '맵다',   romanization: 'maep-da',     english: 'Spicy — important for ordering food!',  emoji: '🌶️' },
        { korean: '예쁘다', romanization: 'ye-ppeu-da',  english: 'Pretty / Beautiful',                    emoji: '✨' },
        { korean: '비싸다', romanization: 'bi-ssa-da',   english: 'Expensive',                             emoji: '💰' },
        { korean: '싸다',   romanization: 'ssa-da',      english: 'Cheap / Inexpensive',                   emoji: '🏷️' },
        { korean: '많다',   romanization: 'man-ta',      english: 'A lot / Many',                          emoji: '📦' },
      ],
    },

    // ── 2.6 Useful Everyday Words ─────────────────────────────────────────────
    {
      title: 'Useful Everyday Words',
      content:
        'These are the words that glue everything together — location words, time words, and high-frequency vocabulary you\'ll use constantly, whether you\'re at Gyeongbokgung Palace or a convenience store at 2am.',
      examples: [
        { korean: '네 / 예',  romanization: 'ne / ye',          english: 'Yes (네 = common, 예 = formal)',        emoji: '✅' },
        { korean: '아니요',   romanization: 'a-ni-yo',           english: 'No',                                    emoji: '❌' },
        { korean: '이것',     romanization: 'i-geot',            english: 'This (thing here)',                      emoji: '👉' },
        { korean: '저것',     romanization: 'jeo-geot',          english: 'That (thing over there)',                emoji: '👈' },
        { korean: '어디',     romanization: 'eo-di',             english: 'Where?',                                emoji: '📍' },
        { korean: '얼마',     romanization: 'eol-ma',            english: 'How much? — your #1 shopping phrase',   emoji: '💰' },
        { korean: '화장실',   romanization: 'hwa-jang-sil',      english: 'Bathroom / Restroom',                   emoji: '🚽' },
        { korean: '지하철',   romanization: 'ji-ha-cheol',       english: 'Subway — Seoul\'s is world-class!',     emoji: '🚇' },
        { korean: '편의점',   romanization: 'pyeon-ui-jeom',     english: 'Convenience store — open 24/7!',        emoji: '🏪' },
        { korean: '병원',     romanization: 'byeong-won',        english: 'Hospital',                              emoji: '🏥' },
      ],
    },

    // ── 2.7 Useful Everyday Sentences ─────────────────────────────────────────
    {
      title: 'Useful Everyday Sentences',
      sectionType: 'sentences',
      content:
        '5 real sentences from each section above — the phrases you\'ll actually use on your trip to Korea. Tap 🔊 to hear each one!',
      sentences: [
        // From 2.1 — Numbers
        { korean: '만원이에요',     romanization: 'man-won-i-e-yo',          english: 'It\'s 10,000 won.',              source: '2.1 · Numbers' },
        { korean: '몇 살이에요?',   romanization: 'myeot sal-i-e-yo?',       english: 'How old are you?',               source: '2.1 · Numbers' },
        { korean: '삼십 분이에요',  romanization: 'sam-sip bun-i-e-yo',      english: 'It\'s 30 minutes.',              source: '2.1 · Numbers' },
        { korean: '오천 원이에요',  romanization: 'o-cheon won-i-e-yo',      english: 'It\'s 5,000 won.',               source: '2.1 · Numbers' },
        { korean: '이층이에요',     romanization: 'i-cheung-i-e-yo',         english: 'It\'s the 2nd floor.',           source: '2.1 · Numbers' },
        // From 2.2 — Colors
        { korean: '빨간색이 좋아요',     romanization: 'ppal-gan-saek-i jo-a-yo',          english: 'I like red.',                    source: '2.2 · Colors' },
        { korean: '무슨 색이에요?',       romanization: 'mu-seun saek-i-e-yo?',             english: 'What color is it?',              source: '2.2 · Colors' },
        { korean: '파란색 주세요',        romanization: 'pa-ran-saek ju-se-yo',             english: 'Please give me the blue one.',   source: '2.2 · Colors' },
        { korean: '노란색 꽃이에요',      romanization: 'no-ran-saek kko-chi-e-yo',         english: 'It\'s a yellow flower.',         source: '2.2 · Colors' },
        { korean: '검정색 가방이에요',    romanization: 'geom-jeong-saek ga-bang-i-e-yo',   english: 'It\'s a black bag.',             source: '2.2 · Colors' },
        // From 2.3 — Food
        { korean: '떡볶이가 맛있어요!',  romanization: 'tteok-bo-kki-ga ma-si-sseo-yo!',  english: 'Tteokbokki is delicious!',       source: '2.3 · Food' },
        { korean: '라면 주세요',          romanization: 'ra-myeon ju-se-yo',                english: 'Please give me ramen.',          source: '2.3 · Food' },
        { korean: '치킨 먹고 싶어요',     romanization: 'chi-kin meok-go si-peo-yo',        english: 'I want to eat fried chicken.',   source: '2.3 · Food' },
        { korean: '밥 먹었어요?',         romanization: 'bap meok-eo-sseo-yo?',             english: 'Did you eat? (common greeting!)', source: '2.3 · Food' },
        { korean: '맥주 한 병 주세요',    romanization: 'maek-ju han byeong ju-se-yo',      english: 'One bottle of beer, please.',    source: '2.3 · Food' },
        // From 2.4 — People
        { korean: '친구예요',             romanization: 'chin-gu-ye-yo',                    english: 'He/she is my friend.',           source: '2.4 · People' },
        { korean: '여자친구 있어요?',     romanization: 'yeo-ja-chin-gu i-sseo-yo?',        english: 'Do you have a girlfriend?',      source: '2.4 · People' },
        { korean: '엄마한테 전화해요',    romanization: 'eom-ma-han-te jeon-hwa-hae-yo',    english: 'I\'m calling mom.',              source: '2.4 · People' },
        { korean: '오빠가 잘생겼어요',    romanization: 'op-pa-ga jal-saeng-gyeo-sseo-yo',  english: 'Oppa is handsome.',              source: '2.4 · People' },
        { korean: '우리 친구예요',        romanization: 'u-ri chin-gu-ye-yo',               english: 'We are friends.',                source: '2.4 · People' },
        // From 2.5 — Adjectives
        { korean: '너무 맵지 않아요?',    romanization: 'neo-mu maep-ji a-na-yo?',          english: 'Isn\'t it too spicy?',           source: '2.5 · Adjectives' },
        { korean: '이 가방이 너무 비싸요', romanization: 'i ga-bang-i neo-mu bi-ssa-yo',    english: 'This bag is too expensive.',     source: '2.5 · Adjectives' },
        { korean: '정말 예쁘다!',          romanization: 'jeong-mal ye-ppeu-da!',            english: 'Really beautiful!',              source: '2.5 · Adjectives' },
        { korean: '이 식당이 너무 좋아요', romanization: 'i sik-dang-i neo-mu jo-a-yo',     english: 'I really like this restaurant.',  source: '2.5 · Adjectives' },
        { korean: '한국 음식이 맛있어요!', romanization: 'han-guk eum-sik-i ma-si-sseo-yo!', english: 'Korean food is delicious!',      source: '2.5 · Adjectives' },
        // From 2.6 — Useful Words
        { korean: '화장실이 어디예요?',   romanization: 'hwa-jang-sil-i eo-di-ye-yo?',     english: 'Where is the bathroom?',         source: '2.6 · Useful Words' },
        { korean: '얼마예요?',            romanization: 'eol-ma-ye-yo?',                   english: 'How much is it?',                source: '2.6 · Useful Words' },
        { korean: '이것 주세요',           romanization: 'i-geot ju-se-yo',                 english: 'Please give me this.',           source: '2.6 · Useful Words' },
        { korean: '지하철역이 어디예요?', romanization: 'ji-ha-cheol-yeok-i eo-di-ye-yo?', english: 'Where is the subway station?',   source: '2.6 · Useful Words' },
        { korean: '편의점이 있어요?',     romanization: 'pyeon-ui-jeom-i i-sseo-yo?',      english: 'Is there a convenience store?',  source: '2.6 · Useful Words' },
      ],
    },
  ],

  // ── Word Quiz ──────────────────────────────────────────────────────────────
  wordQuiz: [
    {
      id: 1,
      question: 'What does 맛있다 mean?',
      korean: '맛있다 😋',
      options: ['Spicy', 'Delicious', 'Expensive', 'Beautiful'],
      answer: 'Delicious',
    },
    {
      id: 2,
      question: 'What color is 분홍색?',
      korean: '분홍색 🩷',
      options: ['Blue', 'Green', 'Black', 'Pink'],
      answer: 'Pink',
    },
    {
      id: 3,
      question: 'Which is the Native Korean word for "Two"?',
      korean: '둘 vs 이',
      options: ['이 (Sino-Korean)', '둘 (Native Korean)', '이십', '둘십'],
      answer: '둘 (Native Korean)',
    },
    {
      id: 4,
      question: 'What does 치킨 (chi-kin) mean?',
      korean: '치킨 🍗',
      options: ['Ramen', 'Pork belly', 'Korean fried chicken', 'Beef'],
      answer: 'Korean fried chicken',
    },
    {
      id: 5,
      question: 'Which number system do you use for prices?',
      korean: '₩10,000 = 만 원',
      options: ['Native Korean (순우리말)', 'Sino-Korean (한자어)', 'Either one', 'Neither'],
      answer: 'Sino-Korean (한자어)',
    },
    {
      id: 6,
      question: 'What does 화장실 mean?',
      korean: '화장실 🚽',
      options: ['Restaurant', 'Subway', 'Bathroom', 'Hospital'],
      answer: 'Bathroom',
    },
    {
      id: 7,
      question: 'What does 여자친구 mean?',
      korean: '여자친구 💑',
      options: ['Sister', 'Girlfriend', 'Female friend', 'Wife'],
      answer: 'Girlfriend',
    },
    {
      id: 8,
      question: 'What does 얼마 (eol-ma) mean?',
      korean: '얼마 💰',
      options: ['Where?', 'How much?', 'What?', 'When?'],
      answer: 'How much?',
    },
    {
      id: 9,
      question: 'What does 맵다 (maep-da) mean?',
      korean: '맵다 🌶️',
      options: ['Sweet', 'Salty', 'Spicy', 'Sour'],
      answer: 'Spicy',
    },
    {
      id: 10,
      question: 'What is 만 (man) in Korean numbers?',
      korean: '만',
      options: ['One hundred', 'One thousand', 'Ten thousand', 'One million'],
      answer: 'Ten thousand',
    },
  ],

  // ── Sentence Quiz (fill-in-blank with useful sentences) ────────────────────
  sentenceQuiz: [
    {
      id: 1,
      instruction: 'Fill in the blank to complete the sentence.',
      sentence: '떡볶이가 ___!',
      korean: '떡볶이가 맛있어요!',
      options: ['맛있어요', '멋있어요', '예뻐요', '비싸요'],
      answer: '맛있어요',
      translation: '떡볶이가 맛있어요! — Tteokbokki is delicious!',
    },
    {
      id: 2,
      instruction: 'Fill in the blank.',
      sentence: '화장실이 ___예요?',
      korean: '화장실이 어디예요?',
      options: ['어디', '얼마', '이것', '아니요'],
      answer: '어디',
      translation: '화장실이 어디예요? — Where is the bathroom?',
    },
    {
      id: 3,
      instruction: 'Fill in the blank.',
      sentence: '이 가방이 너무 ___요',
      korean: '이 가방이 너무 비싸요',
      options: ['비싸', '예뻐', '좋아', '맛있어'],
      answer: '비싸',
      translation: '이 가방이 너무 비싸요 — This bag is too expensive.',
    },
    {
      id: 4,
      instruction: 'Fill in the blank.',
      sentence: '___ 주세요  (Please give me ___)',
      korean: '라면 주세요',
      options: ['라면', '지하철', '친구', '스물'],
      answer: '라면',
      translation: '라면 주세요 — Please give me ramen.',
    },
    {
      id: 5,
      instruction: 'Fill in the blank.',
      sentence: '빨간색이 ___요',
      korean: '빨간색이 좋아요',
      options: ['좋아', '비싸', '맵지', '맛있어'],
      answer: '좋아',
      translation: '빨간색이 좋아요 — I like red.',
    },
    {
      id: 6,
      instruction: 'Fill in the blank.',
      sentence: '___예요?  (How much is it?)',
      korean: '얼마예요?',
      options: ['얼마', '어디', '이것', '저것'],
      answer: '얼마',
      translation: '얼마예요? — How much is it?',
    },
    {
      id: 7,
      instruction: 'Fill in the blank.',
      sentence: '___이 있어요?  (Is there a convenience store?)',
      korean: '편의점이 있어요?',
      options: ['편의점', '병원', '화장실', '지하철'],
      answer: '편의점',
      translation: '편의점이 있어요? — Is there a convenience store?',
    },
    {
      id: 8,
      instruction: 'Fill in the blank.',
      sentence: '여자___ 있어요?  (Do you have a girlfriend?)',
      korean: '여자친구 있어요?',
      options: ['친구', '오빠', '엄마', '언니'],
      answer: '친구',
      translation: '여자친구 있어요? — Do you have a girlfriend?',
    },
    {
      id: 9,
      instruction: 'Fill in the blank.',
      sentence: '정말 ___다!  (Really beautiful!)',
      korean: '정말 예쁘다!',
      options: ['예쁘', '맛있', '비싸', '좋'],
      answer: '예쁘',
      translation: '정말 예쁘다! — Really beautiful!',
    },
    {
      id: 10,
      instruction: 'Fill in the blank.',
      sentence: '만원이에요 — It\'s ___.',
      korean: '만원이에요',
      options: ['10,000 won', '1,000 won', '100 won', '100,000 won'],
      answer: '10,000 won',
      translation: '만원이에요 — It\'s 10,000 won.',
    },
  ],
};

export default chapter2;
