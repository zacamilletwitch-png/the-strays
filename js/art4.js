/* =====================================================================
   THE STRAYS — Illustrations, 4e édition
   Carte ancienne « De Blackwater à Rhodes » et double page
   « THE STRAYS — RHODES, 1890 » (crépuscule sur Lemoyne).
   ===================================================================== */
(function () {
  const svg = (vb, body, extra = '') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" ${extra}>${body}</svg>`;

  /* ---- Carte ancienne : de Blackwater à Rhodes ---- */
  function mapEast(c, route = true) {
    const f = (!c || c === 'ink') ? '#3a2716' : c === 'gold' ? 'url(#gold)' : c;
    let trees = '', mts = '', fields = '', marsh = '';
    [[60,70],[80,58],[100,76],[72,96],[120,92],[48,118],[96,120]].forEach(([x, y]) => trees += `<path d="M${x},${y} l-5,9 h10z M${x},${y + 9} v4"/>`);
    [[190,48],[214,38],[238,50],[262,40]].forEach(([x, y]) => mts += `<path d="M${x - 14},${y + 12} L${x},${y - 6} L${x + 14},${y + 12} M${x},${y - 6} L${x - 4},${y + 12}"/>`);
    for (let i = 0; i < 6; i++) fields += `<path d="M${352 + (i % 3) * 30},${236 + Math.floor(i / 3) * 26} l22,-6 M${354 + (i % 3) * 30},${242 + Math.floor(i / 3) * 26} l22,-6" stroke-width=".6"/>`;
    for (let i = 0; i < 12; i++) marsh += `<path d="M${400 + (i * 17) % 80},${320 + (i * 23) % 60} q3,-6 6,0 q3,-6 6,0" stroke-width=".7"/>`;
    return svg('0 0 500 420', `<g fill="none" stroke="${f}" stroke-linecap="round" stroke-linejoin="round" filter="url(#roughInk)">
      <rect x="6" y="6" width="488" height="408" stroke-width="2"/><rect x="12" y="12" width="476" height="396" stroke-width=".6"/>
      <path d="M140,150 C162,128 214,124 246,138 C274,150 280,178 262,196 C240,218 196,220 166,208 C138,196 126,170 140,150Z" stroke-width="1.5"/>
      <path d="M150,156 C170,138 212,134 240,146" stroke-width=".5" stroke-dasharray="2 3"/>
      <path d="M300,20 C306,80 296,140 312,200 C326,252 318,300 330,350 C338,380 334,400 340,412" stroke-width="2"/>
      <path d="M312,200 C340,206 366,198 392,206" stroke-width="1"/>
      <path d="M262,196 C280,200 296,200 312,200" stroke-width="1.2"/>
      <path d="M14,300 C80,296 160,304 240,300 C270,298 290,300 304,302" stroke-width="1" stroke-dasharray="7 4"/>
      <g stroke-width="1">${trees}</g><g stroke-width="1.1">${mts}</g>${fields}${marsh}
      ${route ? `<path d="M182,214 C210,236 250,250 284,250 C300,250 316,244 330,246 C352,250 370,256 386,262" stroke="#7d2418" stroke-width="2" stroke-dasharray="1 6"/>
      <path d="M380,252 l10,10 l-13,4" stroke="#7d2418" stroke-width="1.6"/>` : `<ellipse cx="428" cy="300" rx="76" ry="52" transform="rotate(-12 428 300)" stroke="#7d2418" stroke-width="1.3" stroke-dasharray="5 4"/>`}
      <path d="M302,246 l20,0 M302,252 l20,0" stroke-width="1"/>
      <g transform="translate(440 80)" stroke-width="1"><circle r="22"/><path d="M0,-30 L5,0 L0,30 L-5,0Z M-30,0 L0,-5 L30,0 L0,5Z" fill="${f}" fill-opacity=".15"/></g>
      <path d="M30,392 h80 M30,388 v8 M70,388 v8 M110,388 v8" stroke-width="1"/>
      </g>
      <g fill="${f}" font-family="IM Fell English, serif">
      <text x="440" y="46" font-size="11" text-anchor="middle">N</text>
      <circle cx="178" cy="212" r="5" fill="#7d2418"/><text x="112" y="236" font-size="17" font-style="italic">Blackwater</text>
      <circle cx="392" cy="264" r="${route ? 5 : 4}" fill="${route ? '#7d2418' : f}"/><text x="400" y="288" font-size="17" font-style="italic">Rhodes</text>
      ${route ? '' : '<circle cx="462" cy="322" r="4"/><text x="486" y="346" font-size="16" font-style="italic" text-anchor="end">Saint-Denis</text>'}
      <text x="178" y="176" font-size="12" font-style="italic" opacity=".8">le lac</text>
      <text x="40" y="160" font-size="12" letter-spacing="2">TALL TREES</text>
      <text x="40" y="270" font-size="15" letter-spacing="3" font-family="IM Fell English SC, serif">WEST ELIZABETH</text>
      <text x="350" y="160" font-size="15" letter-spacing="3" font-family="IM Fell English SC, serif">LEMOYNE</text>
      <text x="180" y="100" font-size="11" letter-spacing="2">NEW HANOVER</text>
      <text x="352" y="226" font-size="10" font-style="italic">plantations</text>
      <text x="${route ? 404 : 420}" y="${route ? 390 : 396}" font-size="10" font-style="italic">bayous</text>
      <text x="318" y="128" font-size="10" font-style="italic" transform="rotate(84 318 128)">la rivière</text>
      ${route ? `<text x="214" y="276" font-size="11" font-style="italic" fill="#7d2418">route de 1890</text>
      <text x="390" y="306" font-size="10" font-style="italic" fill="#7d2418">« là où l'on va »</text>` : `<text x="356" y="372" font-size="11" font-style="italic" fill="#7d2418">quelque part par ici ?</text>`}
      <text x="30" y="384" font-size="10">Milles (approx.)</text>
      <text x="22" y="294" font-size="9" font-style="italic" opacity=".8">limite approximative</text></g>`);
  }

  /* ---- Cavalier de profil (vers la droite) ---- */
  function rider(x, y, s, v = {}) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M22,-52 C28,-58 34,-66 38,-74 L36,-81 L40,-79 L44,-74 C48,-68 52,-62 55,-56 L51,-53 C45,-57 39,-57 33,-49 L30,-40 C32,-34 32,-30 31,-28 L32,0 L28,0 L26,-26 L23,-27 L22,0 L18,0 L18,-28 C8,-26 -6,-26 -15,-26 L-18,0 L-22,0 L-22,-26 L-26,-28 L-29,-18 L-32,0 L-36,0 L-33,-22 C-34,-30 -34,-38 -31,-44 C-26,-49 -12,-51 22,-52Z"/>
      <path d="M-31,-44 C-40,-40 -43,-28 -41,-14 L-37,-16 C-38,-24 -36,-34 -30,-38Z"/>
      <path d="M-6,-50 C-8,-62 -6,-72 -2,-78 L8,-78 C11,-70 11,-60 8,-50Z"/><path d="M-4,-52 L-8,-36 L-4,-34 L0,-48Z"/>
      <circle cx="3" cy="-82" r="5"/><ellipse cx="3" cy="-85" rx="${v.wide ? 11 : 9}" ry="2"/><path d="M-2,-85 L-1.5,-92 C1,-94 5,-94 7.5,-92 L8,-85Z"/>
      ${v.hair ? '<path d="M-1,-82 C-4,-76 -4,-70 -2,-66 L3,-66 C1,-72 1,-78 2,-82Z"/>' : ''}</g>`;
  }
  /* Chêne couvert de mousse espagnole */
  function oak(x, y, s) {
    let moss = '';
    for (let i = 0; i < 9; i++) moss += `<path d="M${-60 + i * 15},${-70 + (i % 3) * 6} q2,${18 + (i % 4) * 6} -1,${30 + (i % 3) * 8} l3,0 q3,-${14 + (i % 4) * 4} 0,-${30 + (i % 3) * 8}Z"/>`;
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6,0 L-4,-50 C-20,-58 -50,-60 -70,-70 C-44,-66 -22,-64 -4,-62 L-2,-80 L4,-80 L6,-62 C24,-66 48,-70 72,-74 C52,-62 26,-58 8,-50 L10,0Z"/>
      ${[[-62,-84,24],[-38,-102,28],[-8,-114,30],[24,-108,30],[52,-94,26],[74,-80,20],[-28,-80,24],[8,-86,28],[40,-78,22],[-74,-74,14]].map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`).join('')}${moss}</g>`;
  }
  /* Scène 1120 × 800 : crépuscule sur Lemoyne, Rhodes au loin */
  function rhodesScene() {
    let town = '';
    [[650,0,14,22],[666,0,10,16],[678,0,18,26],[698,0,12,18],[712,0,16,24],[730,0,10,14],[742,0,20,20]].forEach(([x, , w, h]) => town += `<rect x="${x}" y="${528 - h}" width="${w}" height="${h}"/>`);
    town += `<path d="M700,528 L700,486 L704,470 L708,486 L708,528Z"/><rect x="760" y="498" width="4" height="30"/><rect x="772" y="498" width="4" height="30"/><path d="M756,500 L780,500 L776,486 L760,486Z"/>`;
    let stars = '';
    for (let i = 0; i < 50; i++) stars += `<circle cx="${(i * 191) % 1120}" cy="${(i * 29) % 170}" r="${i % 8 ? .6 : 1.2}" opacity="${.15 + (i % 4) * .1}"/>`;
    let fence = '';
    for (let i = 0; i < 14; i++) fence += `<rect x="${560 + i * 26}" y="${600 - i * 3}" width="3" height="${26 - i}"/>`;
    return `
      <defs>
        <linearGradient id="rhSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1016"/><stop offset=".28" stop-color="#2a2430"/><stop offset=".48" stop-color="#7a4430"/><stop offset=".6" stop-color="#d48a46"/><stop offset=".66" stop-color="#f0c27a"/><stop offset=".67" stop-color="#2a2012"/><stop offset="1" stop-color="#0b0906"/></linearGradient>
        <radialGradient id="rhGlow" cx="700" cy="520" r="360" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd08a" stop-opacity=".75"/><stop offset=".3" stop-color="#d07a3a" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1120" height="800" fill="url(#rhSky)"/>
      <g fill="#f3e4c4">${stars}</g>
      <rect width="1120" height="800" fill="url(#rhGlow)"/>
      <g fill="#2a1a10" opacity=".85">${town}</g>
      <path d="M0,560 C120,530 240,520 380,532 C520,544 600,522 760,528 C900,534 1000,516 1120,524 V800 H0Z" fill="#1a130b"/>
      <path d="M0,640 C160,600 320,612 460,600 C620,586 760,610 900,596 C1000,588 1080,600 1120,596 V800 H0Z" fill="#100c07"/>
      <path d="M150,800 C300,700 470,640 600,600 C650,584 690,548 700,530 L712,530 C706,552 682,588 650,612 C540,680 440,740 420,800Z" fill="#2c2014" opacity=".9"/>
      <g fill="#060403">
        ${oak(90, 640, 1.6)}${oak(1000, 610, 1.3)}${oak(880, 650, .9)}
        ${fence}
        ${rider(330, 718, 1.0, { wide: 1 })}${rider(408, 694, .92, { hair: 1 })}${rider(478, 672, .84, {})}${rider(262, 742, 1.08, { hair: 1, wide: 1 })}${rider(196, 766, 1.14, {})}
      </g>
      <rect width="1120" height="800" filter="url(#grain)" opacity=".55"/>
      <rect width="1120" height="800" fill="none" stroke="#000" stroke-width="40" opacity=".35"/>`;
  }
  const scene = rhodesScene();
  const half = (side) => svg(side === 'L' ? '0 0 560 800' : '560 0 560 800', scene, 'preserveAspectRatio="xMidYMid slice"');

  const lib = window.ART.lib;
  lib.mapEast = { label: 'Carte : de Blackwater à Rhodes (route)', fn: (c) => mapEast(c, true), w: 480, h: 403 };
  lib.mapRumor = { label: "Carte : Blackwater et l'Est (sans route)", fn: (c) => mapEast(c, false), w: 480, h: 403 };
  /* Mémé Lune : croissant au visage de vieille dame */
  lib.moon = { label: 'Mémé Lune', w: 110, h: 110, fn: (c) => {
    const f = (!c || c === 'ink') ? '#3a2716' : c === 'gold' ? 'url(#gold)' : c;
    return svg('0 0 110 110', `<g fill="none" stroke="${f}" stroke-linecap="round" filter="url(#roughInk)">
      <path d="M62,12 C34,16 18,38 20,60 C22,84 42,100 66,98 C50,90 40,74 40,56 C40,38 48,22 62,12Z" fill="${f}" fill-opacity=".12" stroke-width="1.6"/>
      <path d="M44,44 q4,-3 8,0" stroke-width="1.2"/><path d="M46,58 q3,4 1,8" stroke-width="1"/><path d="M45,72 q5,3 9,0" stroke-width="1.1"/>
      <path d="M41,34 c4,-6 10,-9 16,-10" stroke-width=".8" stroke-dasharray="2 2"/>
      <circle cx="86" cy="26" r="1.4" fill="${f}"/><circle cx="94" cy="58" r="1" fill="${f}"/><circle cx="80" cy="84" r="1.2" fill="${f}"/></g>`);
  } };
  lib.rhodesL = { label: 'Rhodes, 1890 (page gauche)', fn: () => half('L'), w: 560, h: 800 };
  lib.rhodesR = { label: 'Rhodes, 1890 (page droite)', fn: () => half('R'), w: 560, h: 800 };
})();
