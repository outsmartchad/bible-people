import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';
import { t, tName, getLang } from '../i18n/i18n.js';


const TOTAL_ROUNDS = 10;

function pickRandom(arr, n) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < n && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

function extractClues(person) {
  const clues = [];
  const name = person.name;
  const nameRegex = new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const stripName = (s) => s.replace(nameRegex, '______');

  // From journeyCards
  if (person.journeyCards) {
    for (const card of person.journeyCards) {
      const desc = stripName(card.description || card.text || '');
      if (desc.length > 20 && desc.length < 200) clues.push(desc);
    }
  }
  // From bio paragraphs
  if (person.bio) {
    const sentences = person.bio.split(/[.!?]\s+/).filter(s => s.length > 30 && s.length < 180);
    for (const s of sentences) {
      const stripped = stripName(s.trim());
      if (stripped !== s.trim() || !s.toLowerCase().includes(name.toLowerCase())) {
        clues.push(stripped + '.');
      }
    }
  }
  // From lessons
  if (person.lessons) {
    for (const l of person.lessons) {
      const text = typeof l === 'string' ? l : l.text;
      clues.push(stripName(text));
    }
  }
  // Shuffle and return unique clues
  return pickRandom([...new Set(clues)], 6);
}

function generateRounds() {
  const pool = PEOPLE.filter(p => p.category !== 'Antagonist' && p.journeyCards?.length >= 2);
  const selected = pickRandom(pool, TOTAL_ROUNDS);
  return selected.map(person => {
    const clues = extractClues(person);
    const others = pickRandom(
      pool.filter(p => p.id !== person.id && p.testament === person.testament),
      3
    );
    // If not enough from same testament, fill from any
    while (others.length < 3) {
      const filler = pickRandom(pool.filter(p => p.id !== person.id && !others.includes(p)), 1);
      if (!filler.length) break;
      others.push(filler[0]);
    }
    const options = pickRandom([person, ...others], 4);
    return { person, clues: clues.slice(0, 3), options };
  });
}

export function renderQuiz(container) {
  const lang = getLang();
  const isZh = lang === 'zh-TW';
  const rounds = generateRounds();
  let currentRound = 0;
  let score = 0;
  let answered = false;

  function renderRound() {
    const round = rounds[currentRound];
    const clueLabel = isZh ? '線索' : 'Clue';
    const roundLabel = isZh ? `第 ${currentRound + 1} / ${TOTAL_ROUNDS} 題` : `Round ${currentRound + 1} of ${TOTAL_ROUNDS}`;
    const scoreLabel = isZh ? `得分：${score}` : `Score: ${score}`;
    const titleText = isZh ? '我是誰？' : 'Who Am I?';

    container.innerHTML = `
      <div class="quiz-page">
        <div class="quiz-header">
          <h1><i class="ri-question-line"></i> ${titleText}</h1>
          <div class="quiz-meta">
            <span class="quiz-round">${roundLabel}</span>
            <span class="quiz-score"><i class="ri-star-line"></i> ${scoreLabel}</span>
          </div>
          <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${(currentRound / TOTAL_ROUNDS) * 100}%"></div></div>
        </div>
        <div class="quiz-clues">
          ${round.clues.map((c, i) => `
            <div class="quiz-clue hidden" data-idx="${i}">
              <span class="clue-num">${clueLabel} ${i + 1}</span>
              <p>${c}</p>
            </div>
          `).join('')}
        </div>
        <div class="quiz-options">
          ${round.options.map(p => `
            <button class="quiz-option" data-id="${p.id}">
              <img src="${getPersonImage(p)}" alt="${tName(p.id) || p.name}">
              <span>${tName(p.id) || p.name}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-reveal" style="display:none">
          <div class="quiz-reveal-content"></div>
          <button class="btn-gold quiz-next">${isZh ? '下一題' : 'Next'} <i class="ri-arrow-right-line"></i></button>
        </div>
      </div>`;

    // Reveal clues progressively
    answered = false;
    const clueEls = container.querySelectorAll('.quiz-clue');
    clueEls.forEach((el, i) => {
      setTimeout(() => el.classList.remove('hidden'), i * 800);
    });

    // Option click
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const chosenId = btn.dataset.id;
        const correct = chosenId === round.person.id;
        if (correct) score++;

        // Highlight correct/wrong
        container.querySelectorAll('.quiz-option').forEach(b => {
          if (b.dataset.id === round.person.id) b.classList.add('correct');
          else if (b.dataset.id === chosenId && !correct) b.classList.add('wrong');
          b.disabled = true;
        });

        // Show reveal
        const reveal = container.querySelector('.quiz-reveal');
        const content = container.querySelector('.quiz-reveal-content');
        const displayName = tName(round.person.id) || round.person.name;
        content.innerHTML = correct
          ? `<i class="ri-check-line" style="color:#22c55e;font-size:24px"></i> <strong>${isZh ? '正確！' : 'Correct!'}</strong> ${isZh ? '答案是' : 'It was'} ${displayName}`
          : `<i class="ri-close-line" style="color:#ef4444;font-size:24px"></i> <strong>${isZh ? '答錯了！' : 'Wrong!'}</strong> ${isZh ? '答案是' : 'The answer was'} ${displayName}`;
        reveal.style.display = 'flex';
      });
    });

    // Next button
    container.querySelector('.quiz-next')?.addEventListener('click', () => {
      currentRound++;
      if (currentRound < TOTAL_ROUNDS) renderRound();
      else renderEnd();
    });
  }

  function renderEnd() {
    const pct = Math.round((score / TOTAL_ROUNDS) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📖';
    const msg = isZh
      ? (pct >= 80 ? '聖經學者！' : pct >= 50 ? '繼續加油！' : '多讀聖經吧！')
      : (pct >= 80 ? 'Bible Scholar!' : pct >= 50 ? 'Keep studying!' : 'Time to read more!');

    container.innerHTML = `
      <div class="quiz-page quiz-end">
        <div class="quiz-end-card">
          <div class="quiz-end-emoji">${emoji}</div>
          <h2>${isZh ? '測驗完成！' : 'Quiz Complete!'}</h2>
          <div class="quiz-end-score">${score} / ${TOTAL_ROUNDS}</div>
          <p class="quiz-end-pct">${pct}% — ${msg}</p>
          <div class="quiz-end-actions">
            <button class="btn-gold quiz-share"><i class="ri-share-line"></i> ${isZh ? '分享結果' : 'Share Result'}</button>
            <button class="btn-ghost quiz-retry"><i class="ri-refresh-line"></i> ${isZh ? '再玩一次' : 'Play Again'}</button>
            <a href="#/gallery" class="btn-ghost">${isZh ? '回到人物總覽' : 'Back to Gallery'}</a>
          </div>
          <canvas id="quiz-share-canvas" style="display:none" width="1080" height="1080"></canvas>
        </div>
      </div>`;

    container.querySelector('.quiz-retry')?.addEventListener('click', () => renderQuiz(container));
    container.querySelector('.quiz-share')?.addEventListener('click', async () => {
      const canvas = document.getElementById('quiz-share-canvas');
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#6b1f3d';
      ctx.fillRect(0, 0, 1080, 1080);

      // Gold border
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 8;
      ctx.strokeRect(40, 40, 1000, 1000);

      // Title
      ctx.fillStyle = '#f0d080';
      ctx.font = 'bold 48px "Crimson Text", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText(isZh ? '聖經人物測驗' : 'Bible People Quiz', 540, 200);

      // Score
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 160px "Crimson Text", Georgia, serif';
      ctx.fillText(`${score}/${TOTAL_ROUNDS}`, 540, 480);

      // Percentage
      ctx.font = '48px "Lato", sans-serif';
      ctx.fillStyle = '#f0d080';
      ctx.fillText(`${pct}% — ${msg}`, 540, 580);

      // Emoji
      ctx.font = '80px serif';
      ctx.fillText(emoji, 540, 720);

      // URL
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '28px "Lato", sans-serif';
      ctx.fillText('outsmartchad.github.io/bible-people', 540, 940);

      // Footer
      ctx.fillStyle = '#f0d080';
      ctx.font = 'bold 24px "Lato", sans-serif';
      ctx.fillText('Bible People', 540, 1000);

      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'bible-quiz-result.png', { type: 'image/png' });
        if (navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({
              title: isZh ? '聖經人物測驗結果' : 'Bible People Quiz Result',
              text: `${isZh ? '我在聖經人物測驗得了' : 'I scored'} ${score}/${TOTAL_ROUNDS} (${pct}%)!`,
              files: [file]
            });
          } catch (e) { /* user cancelled */ }
        } else {
          // Fallback: download
          const a = document.createElement('a');
          a.href = canvas.toDataURL('image/png');
          a.download = 'bible-quiz-result.png';
          a.click();
        }
      }, 'image/png');
    });
  }

  renderRound();
}
