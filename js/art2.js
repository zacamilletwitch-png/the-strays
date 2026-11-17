/* =====================================================================
   THE STRAYS — Illustrations, 2e édition
   Chien noir au collier de fer brisé, emblème sans nombre de symboles,
   scène du feu de camp (rituel d'intégration).
   ===================================================================== */
(function () {
  const C = (c) => c === 'gold' ? 'url(#gold)' : c === 'red' ? '#7d2418' : c === 'ink' || !c ? '#2b1d12' : c;
  const svg = (vb, body, extra = '') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" ${extra}>${body}</svg>`;

  /* ---- Le chien noir au collier brisé (gravure) ---- */
  function dogBody(c) {
    const line = C(c);
    const fill = c === 'gold' ? '#080504' : '#17100b';
    const hl = c === 'gold' ? 'url(#gold)' : '#efe4cc';
    let hackles = '';
    for (let i = 0; i < 14; i++) {
      const t = i / 13, x = 214 - 4 * Math.sin(t * 3) - t * 24, y = 132 + t * 90;
      hackles += `<path d="M${(x + 2).toFixed(1)},${y.toFixed(1)} l${(10 - t * 3).toFixed(1)},${(-6 + t * 2).toFixed(1)}"/>`;
    }
    let fur = '';
    for (let i = 0; i < 18; i++) {
      const x = 120 + (i % 6) * 15, y = 112 + Math.floor(i / 6) * 22 + (i % 2) * 5;
      fur += `<path d="M${x},${y} q6,4 12,2"/>`;
    }
    let up = '', lo = '';
    for (let i = 0; i < 7; i++) { const x = 62 + i * 8; up += `<path d="M${x},${146 + i * 1.3} l3,${i === 1 || i === 5 ? 13 : 7} l3,-${i === 1 || i === 5 ? 12 : 6}Z"/>`; }
    for (let i = 0; i < 6; i++) { const x = 64 + i * 8; lo += `<path d="M${x},${170} l3,-${i === 1 ? 12 : 6} l3,${i === 1 ? 12 : 6}Z"/>`; }
    const link = (y, rot) => `<ellipse cx="186" cy="${y}" rx="${rot ? 4.5 : 6.5}" ry="${rot ? 8.5 : 9}" fill="none" stroke="${line}" stroke-width="${rot ? 3.4 : 3}"/>`;
    return `
      <path d="M214,250 C222,210 226,170 214,136 C206,112 196,96 190,84 L200,42 L176,72 L170,36 L156,70 C140,72 124,78 110,90 C96,100 80,106 62,112 C50,115 40,118 36,124 C34,130 38,134 44,136 L60,140 L58,146 C80,150 100,152 116,156 L92,166 C76,170 66,172 60,170 C64,180 84,186 110,184 C124,190 130,206 128,226 C126,240 124,250 120,262 Z"
        fill="${fill}" stroke="${line}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M58,146 C80,150 100,152 116,156 L92,166 C76,170 66,172 60,170Z" fill="#3a0d08" opacity=".85"/>
      <g fill="${hl}" opacity=".7">${up}${lo}</g>
      <g fill="none" stroke="${line}" stroke-width="1" opacity=".55" stroke-linecap="round">${hackles}${fur}
        <path d="M150,74 C160,64 170,60 178,66"/><path d="M66,120 C80,116 96,112 108,104"/><path d="M110,90 C116,96 124,98 132,96"/></g>
      <path d="M126,100 C132,94 142,94 148,99 C142,104 132,105 126,100Z" fill="${hl}"/>
      <circle cx="139" cy="99.5" r="2.6" fill="#7d2418"/>
      <path d="M36,124 C40,121 46,121 49,126" fill="none" stroke="${hl}" stroke-width="1.2" opacity=".7"/>
      <!-- collier de fer brisé -->
      <path d="M118,212 C134,216 148,215 160,212 L157,230 C146,233 132,234 117,231Z" fill="#2a2522" stroke="${line}" stroke-width="2"/>
      <path d="M160,212 l4,4 l-3,4 l4,5 l-4,5" fill="none" stroke="${line}" stroke-width="1.6"/>
      <path d="M170,209 l-3,5 l4,4 l-3,5 l3,4 C190,222 210,214 228,204 L224,188 C206,198 188,205 170,209Z" fill="#2a2522" stroke="${line}" stroke-width="2"/>
      <g fill="${hl}">${[126, 140, 150].map(x => `<circle cx="${x}" cy="222" r="2.2"/>`).join('')}${[[200, 208], [214, 201]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2"/>`).join('')}</g>
      <circle cx="186" cy="222" r="8" fill="none" stroke="${line}" stroke-width="3"/>
      ${link(238, 1)}${link(254, 0)}${link(270, 1)}
      <path d="M180,286 C178,278 182,280 186,280 C192,280 194,286 192,292" fill="none" stroke="${line}" stroke-width="3" stroke-linecap="round"/>
      <path d="M192,292 l4,3 M180,286 l-4,2" stroke="${line}" stroke-width="1.2"/>`;
  }
  function dog(c) { return svg('20 26 230 276', dogBody(c)); }

  /* ---- Emblème : chien au collier brisé, sans nombre de symboles ---- */
  function emblem(c) {
    const f = C(c);
    return svg('0 0 200 200', `
      <defs><path id="emArc2" d="M30,104 A70,70 0 0 0 170,104"/><clipPath id="emClip"><circle cx="100" cy="100" r="82"/></clipPath></defs>
      <circle cx="100" cy="100" r="95" fill="none" stroke="${f}" stroke-width="2.4"/>
      <circle cx="100" cy="100" r="89" fill="none" stroke="${f}" stroke-width=".7" stroke-dasharray="1 3"/>
      <circle cx="100" cy="100" r="83" fill="none" stroke="${f}" stroke-width="1"/>
      <g clip-path="url(#emClip)"><g transform="translate(26 22) scale(.56)">${dogBody(c)}</g></g>
      <text font-family="Cinzel, serif" font-size="11" letter-spacing="3" fill="${f}"><textPath href="#emArc2" startOffset="50%" text-anchor="middle">NO HOME · NO MASTERS</textPath></text>
      <path d="M92,8 l8,-5 l8,5 M92,192 l8,5 l8,-5" fill="none" stroke="${f}" stroke-width="1.2"/>`);
  }

  /* ---- Feu de camp nocturne : le rituel ---- */
  function person(x, y, s, v = {}) {
    const hat = v.nohat ? '' : `<ellipse cx="0" cy="-58" rx="${v.wide ? 11 : 9}" ry="2"/><path d="M-5,-58 L-4.5,-65 C-2,-67 2,-67 4.5,-65 L5,-58Z"/>`;
    const hair = v.hair ? `<path d="M-4.5,-56 C-7,-48 -7,-42 -5,-36 L5,-36 C7,-42 7,-48 4.5,-56Z"/>` : '';
    let body;
    if (v.sit) body = `<path d="M-8,-46 C-11,-40 -12,-30 -10,-22 L10,-22 C12,-30 11,-40 8,-46Z"/><path d="M-10,-22 L-16,-21 L-18,0 L-13,0 L-12,-16 L10,-16 L14,0 L19,0 L16,-22Z"/>`;
    else if (v.kneel) body = `<path d="M-8,-46 C-11,-40 -12,-30 -10,-22 L10,-22 C12,-30 11,-40 8,-46Z"/><path d="M-10,-22 L-10,-12 L-14,0 L-2,0 L-4,-12 L10,-12 L16,0 L20,0 L12,-22Z"/>`;
    else body = `<path d="M-8,-48 C-12,-38 ${v.coat ? '-15,-14 -16,-12' : '-11,-26 -9,-24'} L${v.coat ? 16 : 9},${v.coat ? -12 : -24} C${v.coat ? 15 : 11},-30 12,-40 8,-48Z"/><path d="M-8,-24 L-7,0 L-2,0 L0,-18 L2,0 L7,0 L8,-24Z"/>`;
    const arm = v.arm ? `<path d="M7,-44 L22,-50 L23,-47 L9,-40Z"/>` : '';
    const lit = (y - 280) < 0;
    return `<g transform="translate(${x} ${y}) scale(${s})">${hair}<circle cx="0" cy="-53" r="5"/>${hat}${body}${arm}</g>`;
  }
  function horse(x, y, s, flip) {
    return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><path d="M-22,-52 C-28,-58 -34,-66 -38,-74 L-36,-81 L-40,-79 L-44,-74 C-48,-68 -52,-62 -55,-56 L-51,-53 C-45,-57 -39,-57 -33,-49 L-30,-40 C-32,-34 -32,-30 -31,-28 L-32,0 L-28,0 L-26,-26 L-23,-27 L-22,0 L-18,0 L-18,-28 C-8,-26 6,-26 15,-26 L18,0 L22,0 L22,-26 L26,-28 L29,-18 L32,0 L36,0 L33,-22 C34,-30 34,-38 31,-44 C26,-49 12,-51 -22,-52Z"/><path d="M31,-44 C40,-40 43,-28 41,-14 L37,-16 C38,-24 36,-34 30,-38Z"/></g>`;
  }
  function campfire() {
    let stars = '';
    for (let i = 0; i < 90; i++) { const x = (i * 97) % 600, y = (i * 53) % 150, r = (i % 7 === 0) ? 1.3 : .6; stars += `<circle cx="${x}" cy="${y}" r="${r}" opacity="${.3 + (i % 5) * .14}"/>`; }
    let sparks = '';
    for (let i = 0; i < 16; i++) { const x = 300 + Math.sin(i * 2.1) * (8 + i * 2), y = 230 - i * 9; sparks += `<circle cx="${x.toFixed(1)}" cy="${y}" r="${(1.6 - i * .07).toFixed(2)}" opacity="${(1 - i / 17).toFixed(2)}"/>`; }
    return svg('0 0 600 340', `
      <defs>
        <linearGradient id="cfSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07090d"/><stop offset=".6" stop-color="#151416"/><stop offset="1" stop-color="#2a1a10"/></linearGradient>
        <radialGradient id="cfGlow" cx=".5" cy=".78" r=".5"><stop offset="0" stop-color="#f0a24a" stop-opacity=".95"/><stop offset=".25" stop-color="#b8561e" stop-opacity=".55"/><stop offset=".6" stop-color="#4a1e0c" stop-opacity=".18"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
        <radialGradient id="cfFlame" cx=".5" cy=".9" r=".9"><stop offset="0" stop-color="#fff2c4"/><stop offset=".35" stop-color="#f6b44c"/><stop offset=".75" stop-color="#c2461a"/><stop offset="1" stop-color="#6b1a0a" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="600" height="340" fill="url(#cfSky)"/>
      <g fill="#e9dcc0">${stars}</g>
      <circle cx="488" cy="56" r="17" fill="#e8dcbc" opacity=".88"/><circle cx="496" cy="51" r="16" fill="#0b0c10"/>
      <path d="M0,190 L40,168 L70,176 L120,140 L150,150 L190,126 L230,150 L262,144 L300,160 L350,138 L400,150 L440,124 L480,142 L520,132 L560,150 L600,140 V340 H0Z" fill="#141112"/>
      <path d="M0,230 C80,214 160,222 240,216 C320,210 420,222 600,206 V340 H0Z" fill="#0d0a08"/>
      <rect width="600" height="340" fill="url(#cfGlow)"/>
      <g fill="#050403">
        ${horse(510, 262, .82, false)}${horse(560, 266, .74, true)}
        <path d="M476,262 L560,262" stroke="#050403" stroke-width="1"/>
        ${person(170, 292, 1.25, { coat: 1, wide: 1 })}
        ${person(222, 300, 1.15, { sit: 1, hair: 1 })}
        ${person(392, 300, 1.15, { sit: 1 })}
        ${person(440, 292, 1.2, { coat: 1, hair: 1 })}
        ${person(124, 296, 1.15, { hair: 1, wide: 1 })}
        ${person(318, 314, 1.3, { kneel: 1, nohat: 1 })}
        ${person(262, 302, 1.35, { coat: 1, wide: 1, arm: 1 })}
      </g>
      <ellipse cx="300" cy="300" rx="70" ry="10" fill="#f0a24a" opacity=".18"/>
      <g stroke="#1a0f08" stroke-width="7" stroke-linecap="round"><path d="M270,302 L330,290"/><path d="M272,290 L332,302"/></g>
      <path d="M300,300 C282,290 284,270 292,256 C292,268 298,270 300,250 C304,264 312,262 310,246 C322,262 320,290 300,300Z" fill="url(#cfFlame)"/>
      <path d="M300,300 C292,294 292,282 298,272 C300,282 306,282 306,276 C310,286 308,296 300,300Z" fill="#fff6d6" opacity=".9"/>
      <g fill="#f6c46a">${sparks}</g>
      <rect width="600" height="340" filter="url(#grain)" opacity=".7"/>
      <rect x="1" y="1" width="598" height="338" fill="none" stroke="#000" stroke-width="10" opacity=".45"/>`, 'preserveAspectRatio="xMidYMid slice"');
  }

  /* ---- Maillons de chaîne (ornement) ---- */
  function chain(c) {
    const f = C(c);
    let l = '';
    for (let i = 0; i < 9; i++) l += i % 2 ? `<ellipse cx="${22 + i * 22}" cy="15" rx="13" ry="5" fill="none" stroke="${f}" stroke-width="3"/>` : `<ellipse cx="${22 + i * 22}" cy="15" rx="13" ry="8" fill="none" stroke="${f}" stroke-width="3"/>`;
    return svg('0 0 220 30', l + `<path d="M210,10 l8,-4 M210,20 l8,4" stroke="${f}" stroke-width="2"/>`);
  }

  const lib = window.ART.lib;
  delete lib.stars;
  lib.emblem = { label: 'Emblème (chien au collier brisé)', fn: emblem, w: 160, h: 160 };
  lib.dog = { label: 'Chien noir, collier brisé', fn: dog, w: 230, h: 276 };
  lib.campfire = { label: 'Feu de camp nocturne', fn: campfire, w: 456, h: 258 };
  lib.chain = { label: 'Chaîne brisée', fn: chain, w: 200, h: 27 };
})();
