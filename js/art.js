/* =====================================================================
   THE STRAYS — Bibliothèque d'illustrations (SVG vectoriels)
   Chaque ornement accepte une couleur : 'gold', 'ink', 'red' ou #hex.
   ===================================================================== */
(function () {
  const C = (c) => c === 'gold' ? 'url(#gold)' : c === 'red' ? '#7d2418' : c === 'ink' || !c ? '#2b1d12' : c;
  const svg = (vb, body, extra = '') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" ${extra}>${body}</svg>`;

  /* ---- Cavalier vu de dos (gravure) ---- */
  function rider(x, y, s, v) {
    const t = `translate(${x} ${y}) scale(${s})`;
    let p = '';
    p += `<rect x="-9" y="-26" width="4" height="26" rx="1.5"/><rect x="5" y="-26" width="4" height="26" rx="1.5"/>`;
    p += `<rect x="-4.5" y="-22" width="3" height="21" rx="1" opacity=".7"/><rect x="1.5" y="-22" width="3" height="21" rx="1" opacity=".7"/>`;
    p += `<path d="M-13,-25 C-16,-41 -10,-51 0,-51 C10,-51 16,-41 13,-25 C8,-21 -8,-21 -13,-25Z"/>`;
    p += `<path d="M-2,-47 C-5,-36 -6,-24 -3,-12 L2,-12 C4,-24 3,-36 2,-47Z" opacity=".55"/>`;
    p += `<path d="M-6,-55 L-9,-62 L-6,-60Z M6,-55 L9,-62 L6,-60Z"/>`;
    p += `<path d="M-13,-41 L-16,-28 L-12.5,-27 L-10,-38Z M13,-41 L16,-28 L12.5,-27 L10,-38Z"/>`;
    if (v.duster) p += `<path d="M-10,-70 C-15,-58 -17,-46 -16,-40 L16,-40 C17,-46 15,-58 10,-70Z" opacity=".9"/>`;
    p += `<path d="M-9,-47 C-11,-60 -10,-70 -7,-74 L7,-74 C10,-70 11,-60 9,-47Z"/>`;
    p += `<path d="M-8,-71 L-14,-57 L-11,-55 L-6,-65Z M8,-71 L14,-57 L11,-55 L6,-65Z"/>`;
    p += `<circle cx="0" cy="-78.5" r="4.6"/>`;
    if (v.hair) p += `<path d="M-4,-80 C-6,-74 -6,-68 -3,-63 L3,-63 C6,-68 6,-74 4,-80Z" opacity=".95"/>`;
    p += `<ellipse cx="0" cy="-81.5" rx="${v.wide ? 12 : 10}" ry="2.2"/>`;
    p += `<path d="M-5,-82 L-4.6,-88.5 C-2,-90.5 2,-90.5 4.6,-88.5 L5,-82Z"/>`;
    return `<g transform="${t}">${p}</g>`;
  }

  function riders(c) {
    const f = C(c);
    let rays = '';
    for (let i = 0; i < 23; i++) {
      const a = Math.PI + (i / 22) * Math.PI;
      rays += `<line x1="${200 + Math.cos(a) * 46}" y1="${118 + Math.sin(a) * 46}" x2="${200 + Math.cos(a) * 120}" y2="${118 + Math.sin(a) * 120}"/>`;
    }
    let hatch = '';
    for (let i = 0; i < 9; i++) hatch += `<path d="M${10 + i * 2},${126 + i * 4} L${390 - i * 2},${126 + i * 4}" opacity="${0.75 - i * 0.07}"/>`;
    return svg('0 0 400 170', `
      <g stroke="${f}" stroke-width=".7" fill="none" opacity=".75">${rays}</g>
      <circle cx="200" cy="118" r="40" fill="none" stroke="${f}" stroke-width="1.4"/>
      <path d="M14,118 L70,118 L84,100 L120,100 L132,118 L268,118 L278,106 L296,104 L306,92 L340,92 L350,118 L386,118" fill="none" stroke="${f}" stroke-width="1.6"/>
      
      <g stroke="${f}" stroke-width=".9">${hatch}</g>
      <g fill="${f}">
        ${rider(118, 152, .62, { duster: 1 })}
        ${rider(160, 156, .7, { hair: 1 })}
        ${rider(200, 160, .78, { duster: 1, wide: 1 })}
        ${rider(240, 156, .7, { hair: 1, wide: 1 })}
        ${rider(282, 152, .62, {})}
      </g>`);
  }

  /* ---- Emblème : chien errant & cinq étoiles ---- */
  function star(cx, cy, r) {
    let d = '';
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r;
      d += (i ? 'L' : 'M') + (cx + Math.cos(a) * rr).toFixed(2) + ',' + (cy + Math.sin(a) * rr).toFixed(2);
    }
    return `<path d="${d}Z"/>`;
  }
  function emblem(c) {
    const f = C(c);
    let stars = '';
    for (let i = 0; i < 5; i++) { const a = Math.PI * (1.18 + i * 0.16); stars += star(100 + Math.cos(a) * 70, 104 + Math.sin(a) * 70, 7); }
    return svg('0 0 200 200', `
      <defs><path id="emArc" d="M38,108 A62,62 0 0 0 162,108"/></defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="${f}" stroke-width="2.4"/>
      <circle cx="100" cy="100" r="88" fill="none" stroke="${f}" stroke-width=".8"/>
      <g fill="${f}">${stars}</g>
      <g transform="translate(46 48) scale(1.08)" fill="${f}">
        <path d="M30,62 L19,59 C14,58 9,56 8,52 L11,48 C18,46 26,43 31,39 L35,28 L37,13 L45,28 C48,26 52,25 56,26 L64,12 L65,31 C72,37 75,48 72,58 L68,74 C62,82 52,84 45,81 L40,72 C36,68 33,65 30,62Z"/>
        <circle cx="42" cy="40" r="2.6" fill="var(--bgfill,#1d120b)"/>
        <path d="M48,30 L56,32 L58,40" stroke="var(--bgfill,#1d120b)" stroke-width="1.2" fill="none"/>
        <path d="M45,81 L40,90 L74,90 L68,74Z" opacity=".85"/>
        <path d="M62,48 C64,58 63,66 60,72" stroke="var(--bgfill,#1d120b)" stroke-width="1" fill="none"/>
      </g>
      <text font-family="Cinzel, serif" font-size="13" letter-spacing="4" fill="${f}"><textPath href="#emArc" startOffset="50%" text-anchor="middle">MDCCCXC</textPath></text>`);
  }

  /* ---- Ornement d'angle victorien ---- */
  function cornerOrn(c) {
    const f = C(c);
    return svg('0 0 120 120', `<g fill="none" stroke="${f}" stroke-width="1.6" stroke-linecap="round">
      <path d="M6,114 L6,6 L114,6"/><path d="M12,108 L12,12 L108,12" stroke-width=".7"/>
      <path d="M12,40 C30,40 40,30 40,12"/><path d="M12,66 C44,66 66,44 66,12" stroke-width=".9"/>
      <path d="M22,22 C34,18 44,24 40,36 C36,46 24,40 28,32 C31,27 36,30 34,33"/>
      <path d="M40,12 C46,22 58,20 62,12" /><path d="M12,40 C22,46 20,58 12,62"/>
      <path d="M66,12 C72,6 82,8 86,12 C90,16 96,16 100,12"/><path d="M12,66 C6,72 8,82 12,86 C16,90 16,96 12,100"/>
      </g><g fill="${f}"><circle cx="22" cy="22" r="3"/><path d="M48,48 l5,-9 l4,9 l-4,9z" transform="rotate(-45 52 48)"/><circle cx="100" cy="12" r="2"/><circle cx="12" cy="100" r="2"/></g>`);
  }

  function divider(c) {
    const f = C(c);
    return svg('0 0 400 30', `<g fill="none" stroke="${f}" stroke-width="1.1" stroke-linecap="round">
      <path d="M20,15 L160,15"/><path d="M240,15 L380,15"/><path d="M60,19 L160,19" stroke-width=".5"/><path d="M240,19 L340,19" stroke-width=".5"/>
      <path d="M160,15 C170,4 182,4 186,12 C189,18 180,21 178,15"/><path d="M240,15 C230,4 218,4 214,12 C211,18 220,21 222,15"/>
      <path d="M160,15 C170,26 182,26 186,18"/><path d="M240,15 C230,26 218,26 214,18"/></g>
      <g fill="${f}"><path d="M200,5 L208,15 L200,25 L192,15Z"/><circle cx="20" cy="15" r="2.2"/><circle cx="380" cy="15" r="2.2"/></g>`);
  }

  function stitch(c) {
    const f = C(c);
    return svg('0 0 560 800', `<g fill="none">
      <rect x="22" y="22" width="516" height="756" rx="6" stroke="rgba(0,0,0,.55)" stroke-width="3" stroke-dasharray="9 7" transform="translate(1 1.5)"/>
      <rect x="22" y="22" width="516" height="756" rx="6" stroke="#a5865a" stroke-width="2" stroke-dasharray="9 7" opacity=".8"/>
      <rect x="40" y="40" width="480" height="720" stroke="${f}" stroke-width="1.6"/>
      <rect x="46" y="46" width="468" height="708" stroke="${f}" stroke-width=".6"/></g>`, 'preserveAspectRatio="none"');
  }

  function clasp(c) {
    return svg('0 0 90 130', `
      <path d="M0,22 L58,22 C64,22 66,26 66,32 L66,98 C66,104 64,108 58,108 L0,108Z" fill="#2a1a10" stroke="#0b0603" stroke-width="1.5"/>
      <path d="M0,28 L56,28 M0,102 L56,102" stroke="#8c6b45" stroke-width="1" stroke-dasharray="4 3"/>
      <rect x="34" y="40" width="44" height="50" rx="5" fill="url(#gold)" stroke="#3b2a12" stroke-width="2"/>
      <rect x="40" y="46" width="32" height="38" rx="3" fill="none" stroke="#5a3f16" stroke-width="1.5"/>
      <circle cx="56" cy="65" r="7" fill="#7a5a22" stroke="#3b2a12" stroke-width="1.5"/>
      <circle cx="56" cy="65" r="2.5" fill="#1d120b"/>
      <circle cx="40" cy="46" r="2" fill="#3b2a12"/><circle cx="72" cy="46" r="2" fill="#3b2a12"/><circle cx="40" cy="84" r="2" fill="#3b2a12"/><circle cx="72" cy="84" r="2" fill="#3b2a12"/>
      <path d="M36,42 L76,42" stroke="rgba(255,240,200,.6)" stroke-width="1"/>`);
  }

  /* ---- Carte dessinée à la main ---- */
  function map(c) {
    const f = C(c || '#3a2716');
    let trees = '', mts = '', dots = '';
    [[90,70],[110,60],[130,78],[100,95],[70,88],[125,105],[85,118],[150,92],[60,110],[140,120],[110,130]].forEach(([x, y]) => trees += `<path d="M${x},${y} l-5,9 h10z M${x},${y + 9} v4"/>`);
    [[300,60],[320,48],[342,62],[366,50],[388,64],[410,52]].forEach(([x, y]) => mts += `<path d="M${x - 14},${y + 12} L${x},${y - 6} L${x + 14},${y + 12} M${x},${y - 6} L${x - 4},${y + 12}"/>`);
    for (let i = 0; i < 70; i++) { const x = 40 + ((i * 53) % 190), y = 290 + ((i * 37) % 95); dots += `<circle cx="${x}" cy="${y}" r=".9"/>`; }
    return svg('0 0 500 420', `<g fill="none" stroke="${f}" stroke-linecap="round" stroke-linejoin="round" filter="url(#roughInk)">
      <rect x="6" y="6" width="488" height="408" stroke-width="2"/><rect x="12" y="12" width="476" height="396" stroke-width=".6"/>
      <path d="M260,120 C290,98 350,96 400,110 C440,122 470,150 462,180 C452,212 400,220 352,206 C318,196 300,178 280,170 C262,162 248,140 260,120Z" stroke-width="1.5"/>
      <path d="M268,128 C296,108 350,106 396,118 C434,130 458,152 452,178" stroke-width=".5" stroke-dasharray="2 3"/>
      <path d="M462,180 C480,230 470,290 430,330 C400,360 380,380 340,410" stroke-width="2"/>
      <path d="M280,170 C250,200 236,250 250,300 C262,345 240,380 200,410" stroke-width="1.6"/>
      <path d="M14,250 C80,262 150,256 236,252" stroke-width="1.2" stroke-dasharray="7 4"/>
      <g stroke-width="1">${trees}</g><g stroke-width="1.1">${mts}</g>
      
      <g transform="translate(430 360)" stroke-width="1"><circle r="22"/><path d="M0,-30 L5,0 L0,30 L-5,0Z M-30,0 L0,-5 L30,0 L0,5Z" fill="${f}" fill-opacity=".15"/></g>
      <path d="M30,392 h80 M30,388 v8 M70,388 v8 M110,388 v8" stroke-width="1"/>
      </g>
      <g fill="${f}" font-family="IM Fell English, serif">${dots}
      <text x="430" y="324" font-size="11" text-anchor="middle">N</text>
      <circle cx="268" cy="172" r="5" fill="#7d2418"/>
      <text x="282" y="190" font-size="17" font-style="italic">Blackwater</text>
      <text x="80" y="160" font-size="13" letter-spacing="2">TALL TREES</text>
      <text x="320" y="96" font-size="11" letter-spacing="2">LES COLLINES</text>
      <text x="330" y="156" font-size="14" font-style="italic" opacity=".8">le lac</text>
      <text x="150" y="226" font-size="15" letter-spacing="3" font-family="IM Fell English SC, serif">WEST ELIZABETH</text>
      <text x="300" y="250" font-size="12" letter-spacing="2">GREAT PLAINS</text>
      <text x="60" y="300" font-size="18" letter-spacing="4" font-family="IM Fell English SC, serif">NEW AUSTIN</text>
      
      
      <text x="30" y="384" font-size="10">Milles (approx.)</text>
      <text x="350" y="300" font-size="10" font-style="italic" transform="rotate(-62 350 300)">la rivière</text>
      <text x="22" y="244" font-size="9" font-style="italic" opacity=".8">limite approximative</text></g>`);
  }

  /* ---- Objets ---- */
  function card(kind) {
    const red = kind === 'queen';
    const col = red ? '#8d1f17' : '#1a120b';
    const suit = red ? '<path d="M0,6 C-10,-2 -12,-10 -6,-13 C-3,-14 -1,-12 0,-9 C1,-12 3,-14 6,-13 C12,-10 10,-2 0,6Z"/>'
      : '<path d="M0,-13 C-6,-6 -12,-2 -11,4 C-10,9 -4,9 -1,5 L-3,12 L3,12 L1,5 C4,9 10,9 11,4 C12,-2 6,-6 0,-13Z"/>';
    const lab = red ? 'Q' : 'A';
    return svg('0 0 100 140', `<rect x="2" y="2" width="96" height="136" rx="7" fill="#f2ead8" stroke="#6e5a40" stroke-width="1.2"/>
      <rect x="9" y="9" width="82" height="122" rx="3" fill="none" stroke="${col}" stroke-width=".5" opacity=".5"/>
      <g fill="${col}" font-family="IM Fell English, serif"><text x="12" y="27" font-size="18">${lab}</text><g transform="translate(17 38) scale(.55)">${suit}</g>
      <g transform="rotate(180 50 70)"><text x="12" y="27" font-size="18">${lab}</text><g transform="translate(17 38) scale(.55)">${suit}</g></g>
      <g transform="translate(50 72) scale(${red ? 1.9 : 2.4})">${suit}</g>${red ? '<text x="50" y="112" font-size="11" text-anchor="middle" font-style="italic">Regina</text>' : ''}</g>`);
  }
  function chip(c) {
    const col = c === 'gold' || !c ? '#7d2418' : C(c);
    let seg = '';
    for (let i = 0; i < 8; i++) seg += `<rect x="-6" y="-48" width="12" height="14" fill="#efe4cc" transform="rotate(${i * 45})"/>`;
    return svg('-52 -52 104 104', `<circle r="48" fill="${col}" stroke="#2a1208" stroke-width="2"/>${seg}<circle r="32" fill="none" stroke="#efe4cc" stroke-width="1.5" stroke-dasharray="3 3"/><circle r="26" fill="${col}" stroke="#2a1208"/><text y="7" font-family="Cinzel, serif" font-size="20" fill="#efe4cc" text-anchor="middle">$5</text>`);
  }
  function ticket() {
    return svg('0 0 220 100', `<path d="M4,4 H216 V36 A14,14 0 0 0 216,64 V96 H4 V64 A14,14 0 0 0 4,36Z" fill="#d9c08f" stroke="#5a4128" stroke-width="1.4"/>
      <path d="M160,8 V92" stroke="#5a4128" stroke-dasharray="3 3"/>
      <g fill="#3a2716" text-anchor="middle"><text x="82" y="30" font-family="IM Fell English SC, serif" font-size="12" letter-spacing="2">SALOON DE BLACKWATER</text>
      <text x="82" y="58" font-family="Rye, serif" font-size="22">POKER</text><text x="82" y="80" font-family="IM Fell English, serif" font-style="italic" font-size="11">Table n° 3 — mise minimale 1 $</text>
      <text x="188" y="56" font-family="Cinzel, serif" font-size="14" transform="rotate(-90 188 52)">N° 0147</text></g>`);
  }
  function seal(c) {
    return svg('0 0 100 100', `<path d="M50,6 C62,4 70,12 80,14 C92,20 94,32 95,44 C98,58 92,66 88,76 C80,90 66,94 54,95 C40,97 28,92 18,84 C8,74 4,62 6,48 C6,34 12,22 24,14 C32,8 40,7 50,6Z" fill="url(#waxGrad)"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#4a0d0b" stroke-width="2.5" opacity=".7"/><circle cx="50" cy="50" r="30" fill="none" stroke="#c4473b" stroke-width="1" opacity=".5" transform="translate(-1 -1)"/>
      <text x="50" y="62" text-anchor="middle" font-family="Cinzel, serif" font-size="34" fill="#4a0d0b" opacity=".85">S</text>
      <text x="49" y="61" text-anchor="middle" font-family="Cinzel, serif" font-size="34" fill="#c4473b" opacity=".35">S</text>`);
  }
  function envelope() {
    return svg('0 0 240 160', `<rect x="4" y="4" width="232" height="152" fill="#e2d1aa" stroke="#7a6142" stroke-width="1.2"/>
      <path d="M4,4 L120,92 L236,4" fill="#d6c296" stroke="#7a6142" stroke-width="1.2"/>
      <path d="M4,156 L96,76 M236,156 L144,76" stroke="#7a6142" stroke-width=".8" fill="none"/>
      <g transform="translate(96 66) scale(.48)">${seal().replace(/<\/?svg[^>]*>/g, '')}</g>
      <text x="150" y="132" font-family="La Belle Aurore, cursive" font-size="16" fill="#2e2a44">à B. M.</text>`);
  }
  function compass(c) {
    const f = C(c);
    return svg('-60 -60 120 120', `<g fill="none" stroke="${f}" stroke-width="1"><circle r="40"/><circle r="44" stroke-width=".5"/><circle r="12"/></g>
      <g fill="${f}"><path d="M0,-56 L7,0 L0,56 L-7,0Z" opacity=".85"/><path d="M-56,0 L0,-7 L56,0 L0,7Z" opacity=".55"/><path d="M-30,-30 L4,-4 L30,30 L-4,4Z" opacity=".3"/><path d="M30,-30 L4,4 L-30,30 L-4,-4Z" opacity=".3"/>
      <text y="-46" text-anchor="middle" font-family="IM Fell English, serif" font-size="11" dy="-1">N</text></g>`);
  }
  function horseshoe(c) {
    const f = C(c);
    return svg('0 0 100 110', `<path d="M22,100 C8,70 8,30 28,14 C40,4 60,4 72,14 C92,30 92,70 78,100 L64,100 C74,72 74,40 62,28 C56,22 44,22 38,28 C26,40 26,72 36,100Z" fill="${f}"/>
      <g fill="#efe4cc">${[[24,80],[20,58],[26,36],[76,80],[80,58],[74,36]].map(([x, y]) => `<rect x="${x - 2}" y="${y - 3}" width="4" height="6" rx="1"/>`).join('')}</g>`);
  }
  function stain() {
    return svg('0 0 200 200', `<g fill="none" stroke="#7a5228" opacity=".28"><circle cx="100" cy="100" r="74" stroke-width="5"/><circle cx="100" cy="100" r="70" stroke-width="1.5" opacity=".6"/><path d="M30,120 C20,140 34,150 40,136" stroke-width="3"/></g>
      <circle cx="100" cy="100" r="72" fill="#8a5a28" opacity=".05"/>`);
  }
  function thumb() {
    let r = '';
    for (let i = 0; i < 11; i++) r += `<ellipse cx="50" cy="${58 - i * 1.4}" rx="${6 + i * 3.4}" ry="${8 + i * 4.2}" fill="none" stroke="#3b2a1a" stroke-width="1.3" stroke-dasharray="${8 + i} ${2 + (i % 3)}"/>`;
    return svg('0 0 100 120', `<g opacity=".16" filter="url(#roughInk)">${r}</g>`);
  }
  function pencilRing() {
    return svg('0 0 200 90', `<path d="M14,52 C10,22 70,6 116,8 C164,10 196,28 188,50 C180,74 120,86 76,82 C36,78 8,66 18,42 C26,24 60,14 90,12" fill="none" stroke="#4a4a4a" stroke-width="1.6" opacity=".55" stroke-linecap="round"/>`);
  }
  function pencilX() {
    return svg('0 0 100 100', `<path d="M14,16 C40,40 62,66 88,86 M86,12 C62,40 38,64 12,88" fill="none" stroke="#4a4a4a" stroke-width="2.2" opacity=".5" stroke-linecap="round"/>`);
  }
  function diamond(c) {
    const f = C(c);
    return svg('0 0 120 100', `<g fill="none" stroke="${f}" stroke-width="1.4" stroke-linejoin="round"><path d="M20,30 L40,8 H80 L100,30 L60,94Z"/><path d="M20,30 H100 M40,8 L50,30 L60,94 L70,30 L80,8 M50,30 L60,8 L70,30"/></g>`);
  }
  function dice() {
    const pip = (x, y) => `<circle cx="${x}" cy="${y}" r="4"/>`;
    return svg('0 0 150 100', `<g transform="rotate(-12 45 55)"><rect x="12" y="20" width="62" height="62" rx="9" fill="#efe7d6" stroke="#5a4128" stroke-width="1.5"/><g fill="#1d120b">${pip(28, 36)}${pip(58, 66)}${pip(43, 51)}</g></g>
      <g transform="rotate(14 105 55)"><rect x="76" y="22" width="58" height="58" rx="9" fill="#efe7d6" stroke="#5a4128" stroke-width="1.5"/><g fill="#1d120b">${pip(91, 37)}${pip(119, 37)}${pip(91, 65)}${pip(119, 65)}${pip(91, 51)}${pip(119, 51)}</g></g>`);
  }
  function apples(c) {
    const f = C(c);
    const ap = (x) => `<path d="M${x},30 C${x - 26},18 ${x - 34},52 ${x - 22},70 C${x - 14},82 ${x - 6},80 ${x},76 C${x + 6},80 ${x + 14},82 ${x + 22},70 C${x + 34},52 ${x + 26},18 ${x},30Z"/><path d="M${x},30 C${x + 1},22 ${x + 4},16 ${x + 8},12" fill="none"/><path d="M${x + 3},20 C${x + 12},10 ${x + 22},14 ${x + 20},18 C${x + 14},22 ${x + 8},22 ${x + 3},20Z"/>`;
    return svg('0 0 170 90', `<g fill="none" stroke="${f}" stroke-width="1.5">${ap(55)}${ap(118)}</g><g stroke="${f}" stroke-width=".6" opacity=".6">${[0, 1, 2, 3, 4].map(i => `<path d="M${40 + i * 3},${44 + i * 6} l12,-4"/><path d="M${103 + i * 3},${44 + i * 6} l12,-4"/>`).join('')}</g>`);
  }
  function revolver(c) {
    const f = C(c);
    return svg('0 0 260 120', `<g fill="none" stroke="${f}" stroke-width="1.5" stroke-linejoin="round">
      <path d="M8,30 H150 L156,24 H176 L182,30 L186,48 H120 L112,54 H80 L60,52 L58,40 H8Z"/>
      <path d="M8,36 H58 M8,42 H58" stroke-width=".6"/>
      <rect x="84" y="34" width="34" height="18" rx="4"/><path d="M90,34 V52 M98,34 V52 M106,34 V52 M112,34 V52" stroke-width=".6"/>
      <path d="M120,48 C122,64 116,74 106,76 C98,72 100,62 108,56" />
      <path d="M150,48 C164,60 176,88 172,112 L200,112 C206,90 200,62 186,48"/>
      <path d="M176,24 L186,12 L192,16 L184,30"/><path d="M166,58 C172,72 178,92 178,106" stroke-width=".6"/></g>`);
  }
  function stars(c) {
    const f = C(c);
    return svg('0 0 200 40', `<g fill="${f}">${[20, 60, 100, 140, 180].map(x => star(x, 20, 13)).join('')}</g>`);
  }
  function pentagon(c) {
    const f = C(c);
    const pts = [0, 1, 2, 3, 4].map(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [200 + Math.cos(a) * 150, 175 + Math.sin(a) * 150]; });
    let l = '';
    for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) l += `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" ${j - i === 1 || j - i === 4 ? '' : 'stroke-dasharray="4 5"'}/>`;
    return svg('0 0 400 350', `<g stroke="${f}" stroke-width="1.2" opacity=".75" filter="url(#roughInk)">${l}</g>
      <g fill="#efe4cc" stroke="${f}" stroke-width="1.5">${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="14"/>`).join('')}</g>
      <g fill="${f}">${pts.map(([x, y]) => star(x, y, 7)).join('')}</g>`);
  }
  function bar(c) {
    return svg('0 0 400 8', `<rect x="0" y="2" width="400" height="1.4" fill="${C(c)}"/><rect x="0" y="5" width="400" height=".6" fill="${C(c)}"/>`, 'preserveAspectRatio="none"');
  }
  function frame(c) {
    const f = C(c);
    return svg('0 0 300 400', `<g fill="none" stroke="${f}"><rect x="4" y="4" width="292" height="392" stroke-width="1.6"/><rect x="10" y="10" width="280" height="380" stroke-width=".6"/></g>
      <g fill="${f}">${[[10, 10], [290, 10], [10, 390], [290, 390]].map(([x, y]) => `<path d="M${x},${y - 6} L${x + 6},${y} L${x},${y + 6} L${x - 6},${y}Z"/>`).join('')}</g>`, 'preserveAspectRatio="none"');
  }

  /* ---- Portraits sépia (substituts remplaçables) ---- */
  function portrait(who) {
    const sil = '#2e2015';
    let hat = '', hair = '', extra = '';
    switch (who) {
      case 'billy':
        hat = `<ellipse cx="150" cy="104" rx="88" ry="15"/><path d="M98,104 C98,64 112,48 150,48 C188,48 202,64 202,104Z"/><path d="M106,100 C120,94 180,94 194,100" stroke="#5a4129" stroke-width="5" fill="none"/>`;
        extra = `<path d="M128,276 L150,330 L172,276" fill="#e9dcc0" opacity=".25"/><path d="M144,290 L150,330 L156,290Z" fill="#120a05"/>`; break;
      case 'nell':
        hair = `<ellipse cx="150" cy="96" rx="58" ry="46"/><circle cx="150" cy="58" r="26"/><path d="M96,130 C92,170 104,196 112,206 L118,150Z M204,130 C208,170 196,196 188,206 L182,150Z"/>`;
        extra = `<path d="M124,266 C130,284 170,284 176,266 L176,296 C164,304 136,304 124,296Z" fill="#e9dcc0" opacity=".22"/><circle cx="150" cy="300" r="5" fill="#b89c6a" opacity=".6"/>`; break;
      case 'ruby':
        hat = `<ellipse cx="150" cy="106" rx="80" ry="13"/><path d="M104,106 C102,70 116,54 150,54 C184,54 198,70 196,106Z"/>`;
        hair = `<path d="M96,118 C88,170 90,226 104,262 L122,250 C112,214 112,170 116,132Z M204,118 C214,170 212,230 192,270 L178,252 C188,214 188,170 184,132Z"/>`; break;
      case 'scarlett':
        hat = `<ellipse cx="150" cy="96" rx="104" ry="20" transform="rotate(-6 150 96)"/><path d="M96,92 C100,56 124,44 156,44 C188,46 200,62 202,88Z"/><path d="M190,60 C230,30 262,40 270,52 C244,48 222,58 200,74Z" opacity=".85"/>`;
        hair = `<path d="M100,112 C94,150 98,176 110,194 L120,150Z M200,112 C206,150 202,176 190,194 L180,150Z"/>`;
        extra = `<circle cx="104" cy="172" r="4" fill="#e7d3a0" opacity=".8"/><circle cx="196" cy="172" r="4" fill="#e7d3a0" opacity=".8"/><path d="M120,284 C134,296 166,296 180,284" stroke="#e7d3a0" stroke-width="3" fill="none" opacity=".55" stroke-dasharray="1 5" stroke-linecap="round"/>`; break;
      case 'silas':
        hat = `<path d="M84,108 C96,98 204,98 216,108 C210,114 90,114 84,108Z"/><path d="M106,104 C104,66 120,48 150,48 C180,48 196,66 194,104Z"/>`;
        extra = `<path d="M114,272 L150,340 L186,272 L176,268 L150,316 L124,268Z" fill="#e9dcc0" opacity=".18"/><path d="M140,282 L150,276 L160,282 L150,290Z" fill="#120a05"/>`; break;
      default:
        hat = '';
    }
    return svg('0 0 300 400', `
      <rect width="300" height="400" fill="url(#sepiaVig)"/>
      <path d="M0,300 C80,280 220,286 300,270 V400 H0Z" fill="#8a6a44" opacity=".35"/>
      <g fill="${sil}">
        ${hair}
        <path d="M30,400 C36,316 86,276 150,272 C214,276 264,316 270,400Z"/>
        <path d="M128,212 L128,276 L172,276 L172,212Z"/>
        <ellipse cx="150" cy="160" rx="46" ry="60"/>
        ${hat}
      </g>
      <ellipse cx="136" cy="150" rx="18" ry="34" fill="#c9ab7c" opacity=".12"/>
      ${extra}
      <rect width="300" height="400" filter="url(#grain)" fill="#000" opacity=".9"/>
      <rect width="300" height="400" fill="none" stroke="#2a1a0c" stroke-width="18" opacity=".25"/>`, 'preserveAspectRatio="xMidYMid slice"');
  }

  window.ART = {
    lib: {
      emblem:   { label: 'Emblème des Strays', fn: emblem, w: 160, h: 160 },
      riders:   { label: 'Cinq cavaliers', fn: riders, w: 400, h: 170 },
      corner:   { label: 'Angle victorien', fn: cornerOrn, w: 90, h: 90 },
      divider:  { label: 'Filet orné', fn: divider, w: 300, h: 24 },
      bar:      { label: 'Double filet', fn: bar, w: 400, h: 8 },
      frame:    { label: 'Encadrement', fn: frame, w: 300, h: 400 },
      stitch:   { label: 'Couture de reliure', fn: stitch, w: 560, h: 800 },
      clasp:    { label: 'Fermoir', fn: clasp, w: 90, h: 130 },
      map:      { label: 'Carte de la région', fn: map, w: 480, h: 403 },
      compass:  { label: 'Rose des vents', fn: compass, w: 90, h: 90 },
      stars:    { label: 'Cinq étoiles', fn: stars, w: 150, h: 30 },
      ace:      { label: 'As de pique', fn: () => card('ace'), w: 80, h: 112 },
      queen:    { label: 'Dame de cœur', fn: () => card('queen'), w: 80, h: 112 },
      chip:     { label: 'Jeton de poker', fn: chip, w: 64, h: 64 },
      ticket:   { label: 'Ticket de poker', fn: ticket, w: 190, h: 86 },
      dice:     { label: 'Dés', fn: dice, w: 110, h: 74 },
      seal:     { label: 'Cachet de cire', fn: seal, w: 70, h: 70 },
      envelope: { label: 'Enveloppe', fn: envelope, w: 220, h: 147 },
      horseshoe:{ label: 'Fer à cheval', fn: horseshoe, w: 70, h: 77 },
      diamond:  { label: 'Diamant', fn: diamond, w: 80, h: 67 },
      revolver: { label: 'Revolver (croquis)', fn: revolver, w: 200, h: 92 },
      apples:   { label: 'Deux pommes', fn: apples, w: 120, h: 64 },
      pentagon: { label: 'Toile des liens', fn: pentagon, w: 400, h: 350 },
      stain:    { label: 'Trace de tasse', fn: stain, w: 140, h: 140 },
      thumb:    { label: 'Empreinte de doigt', fn: thumb, w: 50, h: 60 },
      ring:     { label: 'Entourage au crayon', fn: pencilRing, w: 200, h: 90 },
      cross:    { label: 'Croix au crayon', fn: pencilX, w: 60, h: 60 }
    },
    render(key, color) { const a = this.lib[key]; return a ? a.fn(color) : ''; },
    portrait
  };
})();
