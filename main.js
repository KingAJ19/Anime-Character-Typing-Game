window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 15,
  medium: 9,
  hard: 7
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'goku',
  'naruto',
  'itachi',
  'shisui',
  'madara',
  'kisame',
  'jiraiya',
  'sasuke',
  'luffy',
  'zoro',
  'midoriya',
  'bakugo',
  'todoroki',
  'dabi',
  'zoe',
  'escanor',
  'ban',
  'meliodas',
  'sakura',
  'shu',
  'gon',
  'hisoka',
  'killua',
  'meruem',
  'pitou',
  'kakashi',
  'ging',
  'kurapika',
  'light',
  'L',
  'ryuk',
  'natsu',
  'erza',
  'vegeta',
  'broly',
  'beerus',
  'kirito',
  'asuna',
  'hinata',
  'eren',
  'mikasa',
  'levi',
  'aizen',
  'gaara',
  'edward',
  'jotaro',
  'dio',
  'roy',
  'lee',
  'spike',
  'nagato',
  'pein',
  'tanjiro',
  'nezuko',
  'zenitsu',
  'minato',
  'yamcha',
  'bardock',
  'alphonse',
  'gray',
  'kaneki',
  'touka',
  'arima',
  'armin',
  'kuroko',
  'aomine',
  'kaori',
  'rin',
  'alucard',
  'shinichi',
  'jabami',
  'yuuki',
  'norman',
  'rintaro',
  'satoru',
  'tatsumi',
  'esdeath',
  'akame',
  'gohan',
  'whis',
  'jiren',
  'ichigo',
  'yusuke',
  'nagisa',
  'karma',
  'koro',
  'senku',
  'shinra',
  'yuji',
  'saitama',
  'genos',
  'yugi',
  'rize',
  'violet',
  'pilonoreff',
  'sanji',
  'eijirou',
  'shota',
  'kushina',
  'yatogami',
  'shanks',
  'kageyama',
  'ace',
  'osamu',
  'juuzou',
  'denki',
  'riza',
  'leorio',
  'sebastion',
  'kisuke',
  'erwin',
  'lelouch',
  'king',
  'maes',
  'byakuya',
  'merlin',
  'pikachu',
  'scar',
  'gintoki',
  'winry',
  'toga',
  'death',
  'trunks',
  'annie',
  'rukia',
  'ciel',
  'gajeel',
  'asta',
  'sora',
  'saber',
  'shiro',
  'kenpachi',
  'grimmjow',
  'maka',
  'boa',
  'laxus',
  'gin',
  'garp',
  'guts',
  'tamaki',
  'mugen',
  'envy',
  'usopp',
  'rias',
  'izumi',
  'midorima',
  'kagami',
  'nami',
  'ymir',
  'kenshin',
  'makise',
  'kaiba',
  'liz',
  'suzaku',
  'ryuuko',
  'kurama',
  'jushiro',
  'koga',
  'mei',
  'misato',
  'kenpachi',
  'shunsui',
  'hikigaya',
  'yui',
  'taiga',
  'akashi',
  'tsunade',
  'akeno',
  'juvia',
  'happy',
  'kenshiro',
  'baki',
  'vash',
  'akira',
  'netero',
  'mob',
  'tetsuo',
  'zeno',
  'utsuro',
  'zagred',
  'giorno',
  'boros',
  'illumi',
  'alluka',
  'chrollo',
  'kite',
  'inori',
  'makoto',
  'mados',
  'kaido',
  'shigaraki'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!  &#10003;';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!  &#10005;';
    score = -1;
  }
}
