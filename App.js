// =============================================
// FaithFlow - Christian Social Media App
// =============================================

// ======= BIBLE DATA =======
// We embed a rich set of verses from multiple books.
// When you deploy, place your NIV/NIV Books/*.json files 
// in the same folder structure and update BIBLE_BASE_PATH.
const BIBLE_BASE_PATH = './NIV/NIV Books/';

// Old Testament books (for game)
const OT_BOOKS = [
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy',
  'Joshua','Judges','Ruth','1 Samuel','2 Samuel',
  '1 Kings','2 Kings','1 Chronicles','2 Chronicles',
  'Ezra','Nehemiah','Esther','Job','Psalms','Proverbs',
  'Ecclesiastes','Song of Solomon','Isaiah','Jeremiah',
  'Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos',
  'Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah',
  'Haggai','Zechariah','Malachi'
];

// New Testament books
const NT_BOOKS = [
  'Matthew','Mark','Luke','John','Acts',
  'Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians',
  'Philippians','Colossians','1 Thessalonians','2 Thessalonians',
  '1 Timothy','2 Timothy','Titus','Philemon','Hebrews',
  'James','1 Peter','2 Peter','1 John','2 John','3 John',
  'Jude','Revelation'
];

const ALL_BOOKS = [...OT_BOOKS, ...NT_BOOKS];

// Embedded verses (fallback + home page pool)
const EMBEDDED_VERSES = [
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16", book: "John", chapter: 3, verse: 16, testament: "NT" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13", book: "Philippians", chapter: 4, verse: 13, testament: "NT" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalms 23:1", book: "Psalms", chapter: 23, verse: 1, testament: "OT" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5", book: "Proverbs", chapter: 3, verse: 5, testament: "OT" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9", book: "Joshua", chapter: 1, verse: 9, testament: "OT" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", ref: "Romans 8:28", book: "Romans", chapter: 8, verse: 28, testament: "NT" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6", book: "Philippians", chapter: 4, verse: 6, testament: "NT" },
  { text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.", ref: "Zephaniah 3:17", book: "Zephaniah", chapter: 3, verse: 17, testament: "OT" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11", book: "Jeremiah", chapter: 29, verse: 11, testament: "OT" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28", book: "Matthew", chapter: 11, verse: 28, testament: "NT" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4", book: "1 Corinthians", chapter: 13, verse: 4, testament: "NT" },
  { text: "In the beginning God created the heavens and the earth.", ref: "Genesis 1:1", book: "Genesis", chapter: 1, verse: 1, testament: "OT" },
  { text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", ref: "Psalms 27:1", book: "Psalms", chapter: 27, verse: 1, testament: "OT" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31", book: "Isaiah", chapter: 40, verse: 31, testament: "OT" },
  { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalms 118:24", book: "Psalms", chapter: 118, verse: 24, testament: "OT" },
  { text: "Greater love has no one than this: to lay down one's life for one's friends.", ref: "John 15:13", book: "John", chapter: 15, verse: 13, testament: "NT" },
  { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4", book: "Philippians", chapter: 4, verse: 4, testament: "NT" },
  { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10", book: "Proverbs", chapter: 18, verse: 10, testament: "OT" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7", book: "1 Peter", chapter: 5, verse: 7, testament: "NT" },
  { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", ref: "Psalms 23:4", book: "Psalms", chapter: 23, verse: 4, testament: "OT" },
  { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", ref: "2 Timothy 1:7", book: "2 Timothy", chapter: 1, verse: 7, testament: "NT" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23", book: "Lamentations", chapter: 3, verse: 22, testament: "OT" },
  { text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", ref: "Matthew 7:7", book: "Matthew", chapter: 7, verse: 7, testament: "NT" },
  { text: "I have hidden your word in my heart that I might not sin against you.", ref: "Psalms 119:11", book: "Psalms", chapter: 119, verse: 11, testament: "OT" },
  { text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.", ref: "1 Corinthians 10:13", book: "1 Corinthians", chapter: 10, verse: 13, testament: "NT" },
  { text: "Be still, and know that I am God.", ref: "Psalms 46:10", book: "Psalms", chapter: 46, verse: 10, testament: "OT" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31", book: "Romans", chapter: 8, verse: 31, testament: "NT" },
  { text: "He gives strength to the weary and increases the power of the weak.", ref: "Isaiah 40:29", book: "Isaiah", chapter: 40, verse: 29, testament: "OT" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalms 37:4", book: "Psalms", chapter: 37, verse: 4, testament: "OT" },
  { text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", ref: "John 14:6", book: "John", chapter: 14, verse: 6, testament: "NT" },
];

// ======= STATE =======
let state = loadState();

function loadState() {
  try {
    const s = localStorage.getItem('faithflow_state');
    return s ? JSON.parse(s) : defaultState();
  } catch { return defaultState(); }
}

function defaultState() {
  return {
    user: null,
    users: {},
    favourites: [],
    gameScore: 0,
    gameStreak: 0,
    dailyVerseIdx: getDayIndex(),
    reelVerses: [],
    reelBuilt: false,
  };
}

function saveState() {
  try { localStorage.setItem('faithflow_state', JSON.stringify(state)); } catch {}
}

function getDayIndex() {
  const d = new Date();
  return (d.getFullYear() * 1000 + d.getMonth() * 31 + d.getDate()) % EMBEDDED_VERSES.length;
}

// ======= NAVIGATION =======
let currentTab = 'home';

function switchTab(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  currentTab = tab;

  if (tab === 'verses' && !state.reelBuilt) buildReel();
  if (tab === 'favourites') renderFavourites();
  if (tab === 'profile') updateProfile();
}

// ======= HOME PAGE =======
function initHome() {
  const daily = EMBEDDED_VERSES[getDayIndex()];
  document.getElementById('daily-text').textContent = daily.text;
  document.getElementById('daily-ref').textContent = '— ' + daily.ref;
  
  // Check if daily verse is favourited
  updateDailyFavBtn();

  // Render trending verses (random selection of 6)
  const trending = [...EMBEDDED_VERSES].sort(() => Math.random() - 0.5).slice(0, 6);
  const container = document.getElementById('trending-verses');
  container.innerHTML = '';
  trending.forEach(v => {
    container.appendChild(makeVerseCard(v, true));
  });
}

function makeVerseCard(verse, showActions = true) {
  const div = document.createElement('div');
  div.className = 'verse-card';
  const isFav = isFavourited(verse.ref);
  div.innerHTML = `
    <div class="verse-text">${verse.text}</div>
    <div class="verse-ref">${verse.ref}</div>
    ${showActions ? `
    <div class="verse-actions">
      <button class="action-btn ${isFav ? 'fav-active' : ''}" onclick="toggleFavouriteCard(this, '${escapeAttr(verse.ref)}', '${escapeAttr(verse.text)}', '${escapeAttr(verse.book || '')}', ${verse.chapter||0}, ${verse.verse||0}, '${verse.testament||'OT'}')">
        <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
        ${isFav ? 'Saved' : 'Save'}
      </button>
      <button class="action-btn" onclick="shareVerse('${escapeAttr(verse.text)}', '${escapeAttr(verse.ref)}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
        </svg>
        Share
      </button>
    </div>` : ''}
  `;
  return div;
}

function escapeAttr(s) {
  return String(s).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function toggleDailyFav() {
  const daily = EMBEDDED_VERSES[getDayIndex()];
  toggleFavourite(daily.ref, daily.text, daily.book, daily.chapter, daily.verse, daily.testament);
  updateDailyFavBtn();
  renderFavourites();
}

function updateDailyFavBtn() {
  const daily = EMBEDDED_VERSES[getDayIndex()];
  const isFav = isFavourited(daily.ref);
  const icon = document.getElementById('daily-fav-icon');
  const btn = document.getElementById('daily-fav-btn');
  if (icon) icon.setAttribute('fill', isFav ? 'currentColor' : 'none');
  if (btn) btn.style.color = isFav ? '#e84393' : '';
  if (btn) btn.childNodes[btn.childNodes.length - 1].textContent = ' ' + (isFav ? 'Saved' : 'Save');
}

function shareDailyVerse() {
  const daily = EMBEDDED_VERSES[getDayIndex()];
  shareVerse(daily.text, daily.ref);
}

function shareVerse(text, ref) {
  const msg = `"${text}" — ${ref}\n\nShared from FaithFlow`;
  if (navigator.share) {
    navigator.share({ text: msg }).catch(() => {});
  } else {
    navigator.clipboard.writeText(msg).then(() => showToast('Copied to clipboard ✓'));
  }
}

// ======= VERSES (REELS) =======
function buildReel() {
  const container = document.getElementById('verse-reel-container');
  container.innerHTML = '';
  
  // Shuffle verses for reel
  const pool = [...EMBEDDED_VERSES].sort(() => Math.random() - 0.5);
  
  pool.forEach((verse, i) => {
    const slide = document.createElement('div');
    slide.className = 'reel-slide';
    slide.style.minHeight = '100%';
    
    const isFav = isFavourited(verse.ref);
    slide.innerHTML = `
      <div class="reel-bg"></div>
      <div class="reel-book-label">${verse.testament === 'NT' ? 'New Testament' : 'Old Testament'}</div>
      <div class="reel-verse-text">${verse.text}</div>
      <div class="reel-ref">${verse.ref}</div>
      <div class="reel-side-actions">
        <button class="reel-action ${isFav ? 'fav-active' : ''}" 
          onclick="toggleReelFav(this, '${escapeAttr(verse.ref)}', '${escapeAttr(verse.text)}', '${escapeAttr(verse.book||'')}', ${verse.chapter||0}, ${verse.verse||0}, '${verse.testament||'OT'}')">
          <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span>${isFav ? 'Saved' : 'Save'}</span>
        </button>
        <button class="reel-action" onclick="shareVerse('${escapeAttr(verse.text)}', '${escapeAttr(verse.ref)}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
          </svg>
          <span>Share</span>
        </button>
      </div>
      ${i === 0 ? `
      <div class="scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        Scroll
      </div>` : ''}
    `;
    container.appendChild(slide);
  });
  
  state.reelBuilt = true;
}

function toggleReelFav(btn, ref, text, book, chapter, verse, testament) {
  toggleFavourite(ref, text, book, chapter, verse, testament);
  const isFav = isFavourited(ref);
  btn.classList.toggle('fav-active', isFav);
  const svg = btn.querySelector('svg');
  if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
  const span = btn.querySelector('span');
  if (span) span.textContent = isFav ? 'Saved' : 'Save';
}

function toggleFavouriteCard(btn, ref, text, book, chapter, verse, testament) {
  toggleFavourite(ref, text, book, Number(chapter), Number(verse), testament);
  const isFav = isFavourited(ref);
  btn.classList.toggle('fav-active', isFav);
  const svg = btn.querySelector('svg');
  if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
  btn.childNodes[btn.childNodes.length - 1].textContent = ' ' + (isFav ? 'Saved' : 'Save');
}

// ======= FAVOURITES =======
function isFavourited(ref) {
  return state.favourites.some(f => f.ref === ref);
}

function toggleFavourite(ref, text, book, chapter, verse, testament) {
  if (isFavourited(ref)) {
    state.favourites = state.favourites.filter(f => f.ref !== ref);
    showToast('Removed from saved');
  } else {
    state.favourites.unshift({ ref, text, book, chapter, verse, testament, savedAt: Date.now() });
    showToast('Saved ✦');
  }
  saveState();
  updateFavCount();
}

function updateFavCount() {
  const n = state.favourites.length;
  const el = document.getElementById('fav-count-label');
  if (el) el.textContent = n + ' verse' + (n !== 1 ? 's' : '');
  const statEl = document.getElementById('stat-favs');
  if (statEl) statEl.textContent = n;
}

function renderFavourites() {
  const list = document.getElementById('fav-list');
  if (!list) return;
  list.innerHTML = '';

  if (state.favourites.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
      <h3>No saved verses yet</h3>
      <p>Browse the Verses tab and tap the heart to save your favourite Scripture passages here.</p>
    `;
    list.appendChild(empty);
    return;
  }

  const label = document.createElement('div');
  label.className = 'section-label';
  label.style.paddingTop = '12px';

  state.favourites.forEach(v => {
    const card = document.createElement('div');
    card.className = 'verse-card';
    card.innerHTML = `
      <div class="verse-text">${v.text}</div>
      <div class="verse-ref">${v.ref}</div>
      <div class="verse-actions">
        <button class="action-btn fav-active" onclick="removeFavCard(this, '${escapeAttr(v.ref)}')">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          Remove
        </button>
        <button class="action-btn" onclick="shareVerse('${escapeAttr(v.text)}', '${escapeAttr(v.ref)}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
          </svg>
          Share
        </button>
      </div>
    `;
    list.appendChild(card);
  });
}

function removeFavCard(btn, ref) {
  state.favourites = state.favourites.filter(f => f.ref !== ref);
  saveState();
  showToast('Removed from saved');
  updateFavCount();
  renderFavourites();
}

// ======= GAME =======
// Game phases: testament -> book -> chapter -> verse (optional)
// Scoring:
// - Correct testament: +1
// - Correct book: +1 more
// - Correct chapter: +1 more
// - All correct (exact verse): points x2

let gameState = {
  verse: null,
  phase: 0, // 0=idle, 1=testament, 2=book, 3=chapter
  phaseScore: 0,
  totalCorrect: 0,
  done: false,
};

function getRandomGameVerse() {
  return EMBEDDED_VERSES[Math.floor(Math.random() * EMBEDDED_VERSES.length)];
}

function gameNextPhase() {
  const btn = document.getElementById('game-next-btn');

  if (gameState.phase === 0 || gameState.done) {
    // Start new round
    gameState.verse = getRandomGameVerse();
    gameState.phase = 1;
    gameState.phaseScore = 0;
    gameState.totalCorrect = 0;
    gameState.done = false;

    document.getElementById('game-verse-text').textContent = gameState.verse.text;
    hideFeedback();
    renderGamePhase();
    btn.textContent = 'Skip / Next Verse';
    btn.disabled = true;
    return;
  }

  if (gameState.done) return;
}

function renderGamePhase() {
  const container = document.getElementById('game-phase-container');
  container.innerHTML = '';
  const { verse, phase } = gameState;

  let label = '';
  let options = [];

  if (phase === 1) {
    label = 'Old or New Testament?';
    options = ['Old Testament', 'New Testament'];
  } else if (phase === 2) {
    label = 'Which Book?';
    // Create plausible wrong options
    const correct = verse.book;
    const pool = verse.testament === 'NT' ? NT_BOOKS : OT_BOOKS;
    const wrongs = pool.filter(b => b !== correct).sort(() => Math.random() - 0.5).slice(0, 3);
    options = shuffle([correct, ...wrongs]);
  } else if (phase === 3) {
    label = 'Which Chapter?';
    const correct = verse.chapter;
    const wrongs = generateChapterOptions(correct, 3);
    options = shuffle([correct, ...wrongs]);
  }

  const labelEl = document.createElement('div');
  labelEl.className = 'game-phase-label';
  labelEl.textContent = label;
  container.appendChild(labelEl);

  const optContainer = document.createElement('div');
  optContainer.className = 'guess-options';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'guess-btn';
    btn.textContent = opt;
    btn.onclick = () => handleGuess(opt, options);
    optContainer.appendChild(btn);
  });

  container.appendChild(optContainer);
}

function generateChapterOptions(correct, count) {
  const options = new Set();
  while (options.size < count) {
    let v = correct + Math.floor(Math.random() * 10) - 5;
    if (v < 1) v = correct + Math.floor(Math.random() * 5) + 1;
    if (v !== correct) options.add(v);
  }
  return [...options];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function handleGuess(choice, allOptions) {
  const { verse, phase } = gameState;
  let correct = false;
  let correctAnswer = '';

  if (phase === 1) {
    const expected = verse.testament === 'NT' ? 'New Testament' : 'Old Testament';
    correct = choice === expected;
    correctAnswer = expected;
  } else if (phase === 2) {
    correct = choice === verse.book;
    correctAnswer = verse.book;
  } else if (phase === 3) {
    correct = choice == verse.chapter;
    correctAnswer = verse.chapter;
  }

  // Highlight buttons
  const btns = document.querySelectorAll('.guess-btn');
  btns.forEach(btn => {
    btn.disabled = true;
    const val = isNaN(btn.textContent) ? btn.textContent : Number(btn.textContent);
    const ca = isNaN(correctAnswer) ? correctAnswer : Number(correctAnswer);
    if (val == ca) btn.classList.add('correct');
    else if (btn.textContent == choice && !correct) btn.classList.add('wrong');
  });

  if (correct) {
    gameState.phaseScore++;
    gameState.totalCorrect++;

    if (phase === 3) {
      // All phases done - bonus double!
      if (gameState.totalCorrect === 3) {
        const bonus = gameState.phaseScore * 2;
        state.gameScore += bonus;
        state.gameStreak++;
        showPointsPopup('+' + bonus, '🎉 Perfect! Points Doubled!');
        showFeedback('🎉 Perfect! All correct — points doubled!', 'good');
      } else {
        state.gameScore += gameState.phaseScore;
        state.gameStreak++;
        showPointsPopup('+' + gameState.phaseScore, 'Points earned!');
        showFeedback('✓ Correct! Well done.', 'good');
      }
      gameState.done = true;
      saveState();
      updateScoreDisplay();
      document.getElementById('game-next-btn').disabled = false;
      document.getElementById('game-next-btn').textContent = 'Next Verse →';
    } else {
      showFeedback('✓ Correct! Keep going...', 'good');
      setTimeout(() => {
        gameState.phase++;
        hideFeedback();
        renderGamePhase();
      }, 900);
    }
  } else {
    // Wrong answer
    state.gameScore += gameState.phaseScore; // award what we have so far
    state.gameStreak = 0;
    if (gameState.phaseScore > 0) {
      showPointsPopup('+' + gameState.phaseScore, 'Points from this round');
    }
    const msg = phase === 1 
      ? `✗ It's from the ${verse.testament === 'NT' ? 'New' : 'Old'} Testament (${verse.ref})`
      : phase === 2 
      ? `✗ It was ${verse.book} (${verse.ref})`
      : `✗ It was chapter ${verse.chapter} (${verse.ref})`;
    showFeedback(msg, 'bad');
    gameState.done = true;
    saveState();
    updateScoreDisplay();
    document.getElementById('game-next-btn').disabled = false;
    document.getElementById('game-next-btn').textContent = 'Try Again →';
  }
}

function showFeedback(msg, type) {
  const fb = document.getElementById('game-feedback');
  fb.textContent = msg;
  fb.className = 'game-feedback show ' + type;
}

function hideFeedback() {
  const fb = document.getElementById('game-feedback');
  fb.className = 'game-feedback';
}

function updateScoreDisplay() {
  document.getElementById('game-score-display').textContent = state.gameScore;
  document.getElementById('stat-points').textContent = state.gameScore;
  
  const streakEl = document.getElementById('streak-display');
  const streakCount = document.getElementById('streak-count');
  if (state.gameStreak >= 2) {
    streakEl.style.display = 'flex';
    streakCount.textContent = state.gameStreak;
  } else {
    streakEl.style.display = 'none';
  }
  document.getElementById('stat-streak').textContent = state.gameStreak;
}

function showPointsPopup(amount, label) {
  const popup = document.getElementById('points-popup');
  document.getElementById('pts-amount').textContent = amount;
  document.getElementById('pts-label').textContent = label;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 1800);
}

// ======= PROFILE + AUTH =======
let authMode = 'login'; // or 'register'

function updateProfile() {
  if (state.user) {
    document.getElementById('profile-avatar').textContent = state.user.name.charAt(0).toUpperCase();
    document.getElementById('profile-name').textContent = state.user.name;
    document.getElementById('profile-sub').textContent = state.user.email;
    document.getElementById('login-item').style.display = 'none';
    document.getElementById('logout-item').style.display = 'flex';
  } else {
    document.getElementById('profile-avatar').textContent = '?';
    document.getElementById('profile-name').textContent = 'Guest';
    document.getElementById('profile-sub').textContent = 'Join FaithFlow to save your progress';
    document.getElementById('login-item').style.display = 'flex';
    document.getElementById('logout-item').style.display = 'none';
  }
  document.getElementById('stat-points').textContent = state.gameScore;
  document.getElementById('stat-favs').textContent = state.favourites.length;
  document.getElementById('stat-streak').textContent = state.gameStreak;
  updateFavCount();
}

function showAuth(mode) {
  authMode = mode || 'login';
  updateAuthUI();
  document.getElementById('auth-overlay').classList.add('show');
}

function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('show');
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
  document.getElementById('auth-username').value = '';
}

function closeAuthIfOutside(e) {
  if (e.target === document.getElementById('auth-overlay')) closeAuth();
}

function toggleAuthMode() {
  authMode = authMode === 'login' ? 'register' : 'login';
  updateAuthUI();
}

function updateAuthUI() {
  document.getElementById('auth-title').textContent = authMode === 'login' ? 'Welcome Back' : 'Join FaithFlow';
  document.querySelector('.auth-btn').textContent = authMode === 'login' ? 'Sign In' : 'Create Account';
  document.querySelector('.auth-toggle').innerHTML = authMode === 'login'
    ? `Don't have an account? <a onclick="toggleAuthMode()">Register</a>`
    : `Already have an account? <a onclick="toggleAuthMode()">Sign In</a>`;
  document.getElementById('auth-name-group').style.display = authMode === 'register' ? 'block' : 'none';
}

function doAuth() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const name = document.getElementById('auth-username').value.trim();

  if (!email || !password) { showToast('Please fill in all fields'); return; }
  if (authMode === 'register' && !name) { showToast('Please enter your name'); return; }

  if (authMode === 'register') {
    if (state.users[email]) { showToast('Account already exists'); return; }
    state.users[email] = { email, password, name, score: 0 };
    state.user = { email, name };
    showToast('Welcome to FaithFlow! 🎉');
  } else {
    const u = state.users[email];
    if (!u || u.password !== password) { showToast('Invalid email or password'); return; }
    state.user = { email, name: u.name };
    showToast('Welcome back, ' + u.name + '!');
  }

  saveState();
  closeAuth();
  updateProfile();
}

function logOut() {
  state.user = null;
  saveState();
  updateProfile();
  showToast('Signed out. See you soon! ✦');
}

// ======= TOAST =======
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ======= INIT =======
function init() {
  initHome();
  updateScoreDisplay();
  updateFavCount();
  
  // Attempt to load external Bible files (for GitHub Pages deploy)
  // They'll be in NIV/NIV Books/<book>.json
  // This is optional — the app works fully with embedded verses
  tryLoadBibleFiles();
}

async function tryLoadBibleFiles() {
  // Test if Bible files are accessible
  try {
    const testUrl = BIBLE_BASE_PATH + 'Genesis.json';
    const resp = await fetch(testUrl);
    if (resp.ok) {
      console.log('External Bible files detected! Loading...');
      // Could expand the verse pool here
    }
  } catch {
    // Files not available — using embedded verses (works fine)
  }
}

document.addEventListener('DOMContentLoaded', init);