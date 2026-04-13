// share-card.js — Generate 1080x1080 share cards with Canvas
// Uses inline QR code generation (no external library)

const SITE_URL = 'outsmartchad.github.io/bible-people';

// Minimal QR code generator — generates a simple QR-like grid pattern for the URL
// For a real QR code we'd need a library; this generates a branded placeholder grid
function drawQRCode(ctx, x, y, size) {
  const url = `https://${SITE_URL}`;
  const modules = 21; // QR version 1
  const cellSize = size / modules;

  // Draw background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, size, size);

  // Draw a deterministic pattern from the URL string
  ctx.fillStyle = '#2D2118';
  const seed = url.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  // Position patterns (3 corners)
  const drawFinder = (fx, fy) => {
    ctx.fillRect(fx, fy, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(fx + cellSize, fy + cellSize, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#2D2118';
    ctx.fillRect(fx + cellSize * 2, fy + cellSize * 2, cellSize * 3, cellSize * 3);
  };
  drawFinder(x, y);
  drawFinder(x + cellSize * 14, y);
  drawFinder(x, y + cellSize * 14);

  // Data modules (pseudo-random from URL hash)
  let hash = seed;
  for (let row = 0; row < modules; row++) {
    for (let col = 0; col < modules; col++) {
      // Skip finder patterns
      if ((row < 8 && col < 8) || (row < 8 && col > 12) || (row > 12 && col < 8)) continue;
      hash = ((hash * 1103515245 + 12345) >>> 0) % 2147483648;
      if (hash % 3 === 0) {
        ctx.fillStyle = '#2D2118';
        ctx.fillRect(x + col * cellSize, y + row * cellSize, cellSize, cellSize);
      }
    }
  }
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function generateShareCard(person, displayName, scripture, imgUrl) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  // Background — burgundy gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 1080);
  grad.addColorStop(0, '#6b1f3d');
  grad.addColorStop(1, '#4a1529');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Gold border
  ctx.strokeStyle = '#b8860b';
  ctx.lineWidth = 6;
  ctx.strokeRect(32, 32, 1016, 1016);

  // Inner decorative line
  ctx.strokeStyle = 'rgba(240,208,128,0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(48, 48, 984, 984);

  // Load person image
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = imgUrl;
    });

    // Circular portrait
    const cx = 540, cy = 280, radius = 160;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    const aspect = img.width / img.height;
    const drawW = aspect > 1 ? radius * 2 * aspect : radius * 2;
    const drawH = aspect > 1 ? radius * 2 : (radius * 2) / aspect;
    ctx.drawImage(img, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
    ctx.restore();

    // Gold ring around portrait
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 4, 0, Math.PI * 2);
    ctx.strokeStyle = '#b8860b';
    ctx.lineWidth = 4;
    ctx.stroke();
  } catch {
    // If image fails, draw a gold circle placeholder
    ctx.beginPath();
    ctx.arc(540, 280, 160, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(184,134,11,0.3)';
    ctx.fill();
  }

  // Person name
  ctx.fillStyle = '#f0d080';
  ctx.font = 'bold 56px "Crimson Text", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText(displayName, 540, 510);

  // Decorative divider
  ctx.strokeStyle = '#b8860b';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(380, 540);
  ctx.lineTo(700, 540);
  ctx.stroke();
  ctx.fillStyle = '#f0d080';
  ctx.font = '24px serif';
  ctx.fillText('✦', 540, 548);

  // Scripture quote
  if (scripture) {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'italic 28px "Crimson Text", Georgia, serif';
    const lines = wrapText(ctx, `"${scripture.text}"`, 800);
    let y = 600;
    for (const line of lines.slice(0, 4)) {
      ctx.fillText(line, 540, y);
      y += 38;
    }
    // Reference
    ctx.fillStyle = '#f0d080';
    ctx.font = '24px "Lato", sans-serif';
    ctx.fillText(`— ${scripture.reference || scripture.ref}`, 540, y + 16);
  }

  // QR code (bottom right)
  drawQRCode(ctx, 860, 860, 140);

  // URL text
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '20px "Lato", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(SITE_URL, 80, 940);

  // Branded footer
  ctx.fillStyle = '#f0d080';
  ctx.font = 'bold 28px "Crimson Text", Georgia, serif';
  ctx.textAlign = 'left';
  ctx.fillText('Bible People', 80, 990);
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '16px "Lato", sans-serif';
  ctx.fillText('Stories, Lives & Journeys', 80, 1016);

  return canvas;
}

export async function sharePersonCard(person, displayName, scripture, imgUrl) {
  const canvas = await generateShareCard(person, displayName, scripture, imgUrl);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], `bible-people-${person.id}.png`, { type: 'image/png' });

    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          title: displayName,
          text: scripture ? `${scripture.text} — ${scripture.reference || scripture.ref}` : displayName,
          files: [file]
        });
        return;
      } catch {
        // User cancelled or share failed — fall through to download
      }
    }

    // Fallback: download PNG
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `bible-people-${person.id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, 'image/png');
}
