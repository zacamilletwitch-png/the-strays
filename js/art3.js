/* =====================================================================
   THE STRAYS — Illustrations, 3e édition
   Cicatrice de Ruby sur son portrait, double page « New Austin, 1890 »,
   abri de Blackwater (grange abandonnée).
   ===================================================================== */
(function () {
  const svg = (vb, body, extra = '') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" ${extra}>${body}</svg>`;

  /* ---- Cicatrice permanente sur le portrait de Ruby ---- */
  const basePortrait = window.ART.portrait;
  window.ART.portrait = function (who) {
    const s = basePortrait(who);
    if (who !== 'ruby') return s;
    const scar = `<path d="M120,122 C138,142 156,166 178,200" fill="none" stroke="#d8bf92" stroke-width="3" stroke-linecap="round" opacity=".55"/>
      <path d="M126,128 l-4,5 M138,144 l-4,5 M150,160 l-4,5 M162,178 l-4,5" stroke="#d8bf92" stroke-width="1.4" opacity=".45"/>`;
    return s.replace(/<\/svg>$/, scar + '</svg>');
  };

  /* ---- Cavalier vu de profil (vers la droite) ---- */
  function riderSide(x, y, s, v = {}) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M22,-52 C28,-58 34,-66 38,-74 L36,-81 L40,-79 L44,-74 C48,-68 52,-62 55,-56 L51,-53 C45,-57 39,-57 33,-49 L30,-40 C32,-34 32,-30 31,-28 L32,0 L28,0 L26,-26 L23,-27 L22,0 L18,0 L18,-28 C8,-26 -6,-26 -15,-26 L-18,0 L-22,0 L-22,-26 L-26,-28 L-29,-18 L-32,0 L-36,0 L-33,-22 C-34,-30 -34,-38 -31,-44 C-26,-49 -12,-51 22,-52Z"/>
      <path d="M-31,-44 C-40,-40 -43,-28 -41,-14 L-37,-16 C-38,-24 -36,-34 -30,-38Z"/>
      <path d="M-6,-50 C-8,-62 -6,-72 -2,-78 L8,-78 C11,-70 11,-60 8,-50Z"/>
      <path d="M-4,-52 L-8,-36 L-4,-34 L0,-48Z"/>
      ${v.duster ? '<path d="M-6,-60 C-14,-52 -16,-44 -14,-40 L4,-44Z"/>' : ''}
      <circle cx="3" cy="-82" r="5"/>
      <ellipse cx="3" cy="-85" rx="${v.wide ? 11 : 9}" ry="2"/>
      <path d="M-2,-85 L-1.5,-92 C1,-94 5,-94 7.5,-92 L8,-85Z"/>
      ${v.hair ? '<path d="M-1,-82 C-4,-76 -4,-70 -2,-66 L3,-66 C1,-72 1,-78 2,-82Z"/>' : ''}
    </g>`;
  }
  function saguaro(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6,0 L-6,-90 C-6,-100 6,-100 6,-90 L6,0Z"/><path d="M-6,-40 L-20,-40 C-26,-40 -28,-44 -28,-50 L-28,-70 C-28,-76 -20,-76 -20,-70 L-20,-50 L-6,-50Z"/><path d="M6,-55 L18,-55 L18,-78 C18,-84 26,-84 26,-78 L26,-52 C26,-46 22,-45 18,-45 L6,-45Z"/></g>`;
  }
  /* Scène complète 1120 × 800, découpée en deux pages */
  function desertScene() {
    let stars = '';
    for (let i = 0; i < 70; i++) stars += `<circle cx="${(i * 163) % 1120}" cy="${(i * 37) % 200}" r="${i % 9 ? .7 : 1.3}" opacity="${.15 + (i % 4) * .12}"/>`;
    let road = '';
    for (let i = 0; i < 14; i++) { const t = i / 14, y = 800 - t * 290, w = 4 * (1 - t) + .6; road += `<rect x="${420 + t * 370 - w / 2}" y="${y - 14 * (1 - t) - 2}" width="${w}" height="${12 * (1 - t) + 1.5}" fill="#c9a06a" opacity="${.5 - t * .3}"/>`; }
    return `
      <defs>
        <linearGradient id="naSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0e16"/><stop offset=".3" stop-color="#231c26"/><stop offset=".5" stop-color="#6b3a2c"/><stop offset=".6" stop-color="#c46f34"/><stop offset=".64" stop-color="#eab46a"/><stop offset=".66" stop-color="#3a2216"/><stop offset="1" stop-color="#0d0806"/></linearGradient>
        <radialGradient id="naSun" cx="790" cy="506" r="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".95"/><stop offset=".18" stop-color="#f0a050" stop-opacity=".55"/><stop offset=".6" stop-color="#8a3c1c" stop-opacity=".15"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1120" height="800" fill="url(#naSky)"/>
      <g fill="#f3e4c4">${stars}</g>
      <rect width="1120" height="800" fill="url(#naSun)"/>
      <circle cx="790" cy="512" r="46" fill="#ffe3a6"/>
      <path d="M0,520 L60,500 L90,470 L170,470 L190,500 L300,506 L330,480 L420,480 L436,505 L600,512 L640,486 L700,484 L716,510 L900,506 L930,462 L1030,462 L1050,500 L1120,496 V800 H0Z" fill="#3a2016" opacity=".9"/>
      <path d="M0,560 C160,540 300,548 420,530 C560,512 700,526 840,520 C960,515 1060,530 1120,526 V800 H0Z" fill="#1a0f0a"/>
      <path d="M300,800 L780,522 L800,522 L700,800Z" fill="#2a1a10" opacity=".9"/>
      ${road}
      <g fill="#070504">
        ${saguaro(120, 640, 1.5)}${saguaro(980, 600, 1.1)}${saguaro(1060, 690, 1.7)}
        ${riderSide(330, 700, 1.05, { duster: 1, wide: 1 })}
        ${riderSide(415, 676, .95, { hair: 1 })}
        ${riderSide(495, 655, .86, { duster: 1 })}
        ${riderSide(268, 724, 1.12, { hair: 1, wide: 1 })}
        ${riderSide(195, 748, 1.2, {})}
      </g>
      <rect width="1120" height="800" filter="url(#grain)" opacity=".55"/>
      <rect width="1120" height="800" fill="none" stroke="#000" stroke-width="40" opacity=".35"/>`;
  }
  const scene = desertScene();
  const half = (side) => svg(side === 'L' ? '0 0 560 800' : '560 0 560 800', scene, 'preserveAspectRatio="xMidYMid slice"');

  /* ---- Grange abandonnée, la nuit (croquis à l'encre) ---- */
  function barn(c) {
    const f = c === 'gold' ? 'url(#gold)' : (!c || c === 'ink') ? '#2b1d12' : c;
    let planks = '';
    for (let i = 0; i < 12; i++) planks += `<path d="M${96 + i * 14},${118 + (i < 6 ? -i * 5 : -(11 - i) * 5)} L${96 + i * 14},250"/>`;
    return svg('0 0 360 280', `<g fill="none" stroke="${f}" stroke-linecap="round" stroke-linejoin="round" filter="url(#roughInk)">
      <path d="M80,250 L80,118 L180,58 L280,118 L280,250" stroke-width="2"/>
      <path d="M70,124 L180,52 L290,124" stroke-width="2.4"/>
      <g stroke-width=".7" opacity=".7">${planks}</g>
      <path d="M150,250 L150,170 L210,170 L210,250" stroke-width="1.6"/><path d="M150,170 L210,250 M210,170 L150,250" stroke-width=".8"/>
      <path d="M164,104 L196,104 L196,128 L164,128Z" stroke-width="1.2"/>
      <path d="M232,96 L262,78" stroke-width="1"/><path d="M110,92 L100,70 L118,74" stroke-width="1"/>
      <path d="M20,252 C90,246 270,248 340,252" stroke-width="1.4"/>
      <path d="M296,250 C298,236 304,228 306,220 C310,232 318,236 316,250" stroke-width="1"/>
      <path d="M40,40 C44,30 56,28 60,36 C56,32 48,34 46,42Z" stroke-width="1"/>
      </g><g fill="${f}" opacity=".6"><circle cx="300" cy="30" r="1.4"/><circle cx="250" cy="22" r="1"/><circle cx="90" cy="20" r="1.2"/><circle cx="330" cy="60" r=".9"/></g>`);
  }

  const lib = window.ART.lib;
  lib.desertL = { label: 'New Austin, 1890 (page gauche)', fn: () => half('L'), w: 560, h: 800 };
  lib.desertR = { label: 'New Austin, 1890 (page droite)', fn: () => half('R'), w: 560, h: 800 };
  lib.barn = { label: 'Grange abandonnée', fn: barn, w: 300, h: 233 };
})();
