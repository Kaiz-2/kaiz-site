const strings = {
  en: {
    title: 'Kaiz — Information Technology & Cybersecurity',
    meta_desc: 'Kaiz is a computer science student passionate about cybersecurity. Discord bot developer, IT support and future Rust developer.',
    og_title: 'Kaiz — Information Technology & Cybersecurity',
    og_desc: 'Computer science student, Discord bot developer and future cybersecurity professional.',
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_eyebrow: 'Kaiz · IT & Cybersecurity',
    hero_desc: "I'm a computer science student who fell into IT by fixing people's computers. These days I build Discord bots, write Python and spend most of my free time trying to get better at cybersecurity.",
    link_projects: 'See projects <span class="arrow">↓</span>',
    link_contact: 'Email me <span class="arrow">→</span>',
    about_label: 'About',
    row_profile_t: 'Profile',
    row_profile_b: 'I study computer science and work across IT, hardware and software both. What really hooked me was cybersecurity: how systems break, how they get fixed, and how much of it comes down to patience and paying attention to details nobody else wants to check.',
    row_exp_t: 'Experience',
    row_exp_b: 'Before studying I worked in IT support, handling a ticketing system and fixing users’ PCs. Dead laptops, printers that hated everyone, the usual. It taught me to diagnose problems fast, explain things without jargon and stay calm when the user is running out of patience.',
    row_goals_t: 'Goals',
    row_goals_b: 'Right now I’m getting serious with Python and just starting Rust, alongside online courses on networks and security. The plan is simple: keep learning every day and end up working in cybersecurity for real.',
    skills_label: 'Skills',
    skill_python_nm: 'Python',
    skill_python_n: 'my main language — bots, scripts, small tools',
    skill_discord_nm: 'Discord Bots',
    skill_discord_n: 'built and published open templates',
    skill_itsupport_nm: 'IT Support',
    skill_itsupport_n: 'tickets, hardware, day-to-day troubleshooting',
    skill_web_nm: 'Web Development',
    skill_web_n: 'HTML, CSS and JavaScript basics',
    learning_label: 'currently learning',
    learning_cyber: 'Cybersecurity',
    learning_rust: 'Rust',
    learning_net: 'Networks',
    learning_courses: 'Online Courses',
    projects_label: 'Projects',
    projects_sub: 'Open-source templates I built and published for the community.',
    proj_status: 'Open Source',
    proj1_t: 'Discord Music Bot Template <span class="project-arrow" aria-hidden="true">↗</span>',
    proj1_b: 'A music bot you can clone, configure and run on your own servers. Python and the Discord API, with playback from Spotify and YouTube search plus queue control. I made it so people on my servers could stop pasting links and just press play.',
    proj1_tags: '<li>Python</li><li>Discord API</li><li>Spotify</li><li>YouTube</li>',
    proj1_btn: 'View Repository <span class="btn-arrow" aria-hidden="true">↗</span>',
    proj2_t: 'Security & Mod Bot Template <span class="project-arrow" aria-hidden="true">↗</span>',
    proj2_b: 'A moderation bot with the boring stuff already handled: captcha verification, word filter, warns, bans and a modlog. I wrote it so anyone can extend it without rewriting the whole thing from scratch.',
    proj2_tags: '<li>Python</li><li>Moderation</li><li>Captcha</li><li>Logs</li>',
    proj2_btn: 'Use Template <span class="btn-arrow" aria-hidden="true">↗</span>',
    contact_label: 'Contact',
    contact_title: 'Let\'s <span class="underline-link">talk</span>.',
    contact_sub: "Got an idea for a bot, a project or a security problem? I'm usually around.",
    skip_link: 'Skip to content',
    copy_label: 'Copy',
    copy_done: 'Email copied to clipboard',
    copy_fail: 'Could not copy — select it manually',
    cmdk_title: 'Command palette',
    cmdk_placeholder: 'Type a command or search…',
    cmdk_empty: 'No results',
    cmdk_nav: 'navigate',
    cmdk_run: 'run',
    cmdk_close: 'close',
    cmdk_g_nav: 'Go to',
    cmdk_g_actions: 'Actions',
    cmdk_g_links: 'Links',
    cmd_theme_dark: 'Switch to dark theme',
    cmd_theme_light: 'Switch to light theme',
    cmd_lang_es: 'Switch language to Spanish',
    cmd_lang_en: 'Switch language to English',
    cmd_copy: 'Copy email address',
    cmd_play: 'Play music',
    cmd_pause: 'Pause music',
    cmd_gh: 'GitHub profile',
    cmd_dc: 'Discord',
    cmd_ig: 'Instagram',
    cmd_repo_music: 'Repo — Music bot template',
    cmd_repo_sec: 'Repo — Security bot template',
    aria_theme: 'Toggle theme',
    aria_cmdk: 'Open command palette',
    aria_copy: 'Copy email address',
    aria_player: 'Music player',
    aria_prev: 'Previous track',
    aria_next: 'Next track'
  },
  es: {
    title: 'Kaiz — Informática y Ciberseguridad',
    meta_desc: 'Kaiz es estudiante de informática apasionado por la ciberseguridad. Creador de bots para Discord, soporte IT y futuro desarrollador en Rust.',
    og_title: 'Kaiz — Informática y Ciberseguridad',
    og_desc: 'Estudiante de informática, creador de bots para Discord y futuro profesional de ciberseguridad.',
    nav_home: 'Inicio',
    nav_about: 'Sobre mí',
    nav_skills: 'Habilidades',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    hero_eyebrow: 'Kaiz · Informática y Ciberseguridad',
    hero_desc: 'Soy estudiante de informática y me metí en IT arreglando los ordenadores de la gente. Ahora mismo hago bots de Discord, escribo Python y casi todo mi tiempo libre lo paso intentando mejorar en ciberseguridad.',
    link_projects: 'Ver proyectos <span class="arrow">↓</span>',
    link_contact: 'Escríbeme <span class="arrow">→</span>',
    about_label: 'Sobre mí',
    row_profile_t: 'Perfil',
    row_profile_b: 'Estudio informática y trabajo en IT, tanto hardware como software. Lo que de verdad me enganchó fue la ciberseguridad: cómo se rompen los sistemas, cómo se arreglan y cuánto depende de tener paciencia y fijarse en detalles que a nadie más le apetece revisar.',
    row_exp_t: 'Experiencia',
    row_exp_b: 'Antes de estudiar trabajé en soporte IT, gestionando un sistema de tickets y arreglando los PCs de los usuarios. Portátiles muertos, impresoras que odiaban a todo el mundo, lo típico. Aprendí a diagnosticar rápido, explicar las cosas sin tecnicismos y mantener la calma cuando el usuario pierde la paciencia.',
    row_goals_t: 'Objetivos',
    row_goals_b: 'Ahora me estoy poniendo en serio con Python y empiezo con Rust, además de cursos online de redes y seguridad. El plan es sencillo: seguir aprendiendo cada día y acabar trabajando en ciberseguridad de verdad.',
    skills_label: 'Habilidades',
    skill_python_nm: 'Python',
    skill_python_n: 'mi lenguaje principal — bots, scripts, herramientas pequeñas',
    skill_discord_nm: 'Bots de Discord',
    skill_discord_n: 'plantillas abiertas que creé y publiqué',
    skill_itsupport_nm: 'Soporte IT',
    skill_itsupport_n: 'tickets, hardware, incidencias del día a día',
    skill_web_nm: 'Desarrollo web',
    skill_web_n: 'HTML, CSS y JavaScript básico',
    learning_label: 'aprendiendo ahora',
    learning_cyber: 'Ciberseguridad',
    learning_rust: 'Rust',
    learning_net: 'Redes',
    learning_courses: 'Cursos online',
    projects_label: 'Proyectos',
    projects_sub: 'Plantillas de código abierto que creé y publiqué para la comunidad.',
    proj_status: 'Código abierto',
    proj1_t: 'Plantilla de Bot de Música para Discord <span class="project-arrow" aria-hidden="true">↗</span>',
    proj1_b: 'Un bot de música que puedes clonar, configurar y ejecutar en tus propios servidores. Python y la Discord API, con reproducción desde Spotify y YouTube y control de cola. Lo hice para que la gente en mis servidores dejara de pegar enlaces y solo pulsara play.',
    proj1_tags: '<li>Python</li><li>Discord API</li><li>Spotify</li><li>YouTube</li>',
    proj1_btn: 'Ver repositorio <span class="btn-arrow" aria-hidden="true">↗</span>',
    proj2_t: 'Plantilla de Bot de Seguridad y Moderación <span class="project-arrow" aria-hidden="true">↗</span>',
    proj2_b: 'Un bot de moderación con lo pesado ya resuelto: verificación con captcha, filtro de palabras, avisos, baneos y un registro de mod. Lo escribí para que cualquiera pueda ampliarlo sin reescribirlo todo desde cero.',
    proj2_tags: '<li>Python</li><li>Moderación</li><li>Captcha</li><li>Logs</li>',
    proj2_btn: 'Usar plantilla <span class="btn-arrow" aria-hidden="true">↗</span>',
    contact_label: 'Contacto',
    contact_title: 'Hablemos<span class="underline-link">.</span>',
    contact_sub: '¿Se te ocurre un bot, un proyecto o un problema de seguridad? Suelo estar por aquí.',
    skip_link: 'Saltar al contenido',
    copy_label: 'Copiar',
    copy_done: 'Email copiado al portapapeles',
    copy_fail: 'No se pudo copiar — selecciónalo a mano',
    cmdk_title: 'Paleta de comandos',
    cmdk_placeholder: 'Escribe un comando o busca…',
    cmdk_empty: 'Sin resultados',
    cmdk_nav: 'moverse',
    cmdk_run: 'ejecutar',
    cmdk_close: 'cerrar',
    cmdk_g_nav: 'Ir a',
    cmdk_g_actions: 'Acciones',
    cmdk_g_links: 'Enlaces',
    cmd_theme_dark: 'Cambiar a tema oscuro',
    cmd_theme_light: 'Cambiar a tema claro',
    cmd_lang_es: 'Cambiar idioma a español',
    cmd_lang_en: 'Cambiar idioma a inglés',
    cmd_copy: 'Copiar dirección de email',
    cmd_play: 'Reproducir música',
    cmd_pause: 'Pausar música',
    cmd_gh: 'Perfil de GitHub',
    cmd_dc: 'Discord',
    cmd_ig: 'Instagram',
    cmd_repo_music: 'Repo — Plantilla bot de música',
    cmd_repo_sec: 'Repo — Plantilla bot de seguridad',
    aria_theme: 'Cambiar tema',
    aria_cmdk: 'Abrir paleta de comandos',
    aria_copy: 'Copiar dirección de email',
    aria_player: 'Reproductor de música',
    aria_prev: 'Pista anterior',
    aria_next: 'Pista siguiente'
  }
};

const playlists = {
  en: [
    { src: 'music/en/track1.mp3', title: 'Track 1' },
    { src: 'music/en/track2.mp3', title: 'Track 2' },
    { src: 'music/en/track3.mp3', title: 'Track 3' }
  ],
  es: [
    { src: 'music/es/track1.mp3', title: 'Pista 1' },
    { src: 'music/es/track2.mp3', title: 'Pista 2' },
    { src: 'music/es/track3.mp3', title: 'Pista 3' }
  ]
};

let tracks = playlists.en;
let currentLang = 'en';

function t(key) {
  return strings[currentLang][key] || strings.en[key] || key;
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = strings[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val === undefined) return;
    if (el.tagName === 'META') {
      el.setAttribute('content', val);
    } else if (el.tagName === 'TITLE') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const val = dict[el.getAttribute('data-i18n-aria')];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const val = dict[el.getAttribute('data-i18n-ph')];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  tracks = playlists[lang];
  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}
}

const savedLang = (function () {
  try {
    return localStorage.getItem('lang');
  } catch (e) {
    return null;
  }
})();
applyLang(savedLang === 'es' ? 'es' : 'en');

const introStrings = {
  en: { q1: 'Which language do you want?', q2: 'Do you want to listen to music?', yes: 'Yes', no: 'No', enter: 'Enter →' },
  es: { q1: '¿Qué idioma quieres?', q2: '¿Quieres escuchar música?', yes: 'Sí', no: 'No', enter: 'Entrar →' }
};

function applyIntroLang(lang) {
  document.getElementById('intro-q1').textContent = introStrings[lang].q1;
  document.getElementById('intro-q2').textContent = introStrings[lang].q2;
  document.getElementById('intro-yes').textContent = introStrings[lang].yes;
  document.getElementById('intro-no').textContent = introStrings[lang].no;
  document.getElementById('intro-enter').textContent = introStrings[lang].enter;
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    if (playerEl) loadTrack(0, false);
  });
});

const themeBtn = document.querySelector('[data-theme-btn]');

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  if (themeBtn) themeBtn.textContent = t === 'light' ? '☾' : '☀';
  try {
    localStorage.setItem('theme', t);
  } catch (e) {}
}

const savedTheme = (function () {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    return null;
  }
})();
applyTheme(savedTheme === 'light' ? 'light' : 'dark');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const scrollProgress = document.getElementById('scroll-progress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((section) => navObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const toTop = document.getElementById('to-top');
if (toTop) {
  window.addEventListener(
    'scroll',
    () => {
      toTop.classList.toggle('show', window.scrollY > 480);
    },
    { passive: true }
  );
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.querySelectorAll('.project-row').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const playerEl = document.getElementById('player');
const audio = document.getElementById('player-audio');
const titleEl = document.getElementById('player-title');
const progressEl = document.getElementById('player-progress');
const curEl = document.getElementById('player-cur');
const durEl = document.getElementById('player-dur');
const bar = document.getElementById('player-bar');
const volEl = document.getElementById('player-vol');
const volVal = document.getElementById('player-vol-val');
const volWrap = document.querySelector('.player-vol');
let trackIndex = 0;

function fmtTime(t) {
  if (!isFinite(t) || t < 0) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function loadTrack(i, autoplay) {
  trackIndex = (i + tracks.length) % tracks.length;
  audio.src = tracks[trackIndex].src;
  titleEl.textContent = tracks[trackIndex].title;
  progressEl.style.width = '0%';
  curEl.textContent = '0:00';
  if (autoplay) audio.play().catch(() => {});
}

audio.addEventListener('loadedmetadata', () => {
  if (durEl) durEl.textContent = fmtTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  const p = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  progressEl.style.width = p + '%';
  curEl.textContent = fmtTime(audio.currentTime);
});

audio.addEventListener('ended', () => loadTrack(trackIndex + 1, true));
audio.addEventListener('play', () => playerEl.classList.add('playing'));
audio.addEventListener('pause', () => playerEl.classList.remove('playing'));

document.querySelector('[data-player-play]').addEventListener('click', () => {
  if (!audio.src) loadTrack(0, false);
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
});

document.querySelector('[data-player-prev]').addEventListener('click', () => loadTrack(trackIndex - 1, true));
document.querySelector('[data-player-next]').addEventListener('click', () => loadTrack(trackIndex + 1, true));

document.querySelector('[data-player-vol]').addEventListener('click', () => volWrap.classList.toggle('open'));

volEl.addEventListener('input', () => {
  audio.volume = parseFloat(volEl.value);
  playerEl.classList.toggle('muted', audio.volume === 0);
  volVal.textContent = Math.round(audio.volume * 100) + '%';
});

audio.volume = parseFloat(volEl.value);
volVal.textContent = Math.round(audio.volume * 100) + '%';

bar.addEventListener('click', (e) => {
  const r = bar.getBoundingClientRect();
  const ratio = (e.clientX - r.left) / r.width;
  if (audio.duration) audio.currentTime = ratio * audio.duration;
});

loadTrack(0, false);

const introEl = document.getElementById('intro');
if (introEl) {
  const catEl = document.getElementById('intro-cat');
  const enterBtn = document.getElementById('intro-enter');
  let introLang = savedLang === 'es' ? 'es' : 'en';
  let introMusic = null;

  catEl.textContent = Math.random() < 0.5 ? '😸' : '😼';
  applyIntroLang(introLang);
  document.querySelectorAll('#intro-lang .intro-btn').forEach((b) => b.classList.toggle('sel', b.dataset.lang === introLang));

  document.querySelectorAll('#intro-lang .intro-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      introLang = btn.dataset.lang;
      applyIntroLang(introLang);
      document.querySelectorAll('#intro-lang .intro-btn').forEach((b) => b.classList.toggle('sel', b === btn));
      enterBtn.disabled = !(introLang && introMusic);
    });
  });

  document.querySelectorAll('#intro-music .intro-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      introMusic = btn.dataset.music;
      document.querySelectorAll('#intro-music .intro-btn').forEach((b) => b.classList.toggle('sel', b === btn));
      enterBtn.disabled = !(introLang && introMusic);
    });
  });

  enterBtn.addEventListener('click', () => {
    if (!introLang || !introMusic) return;
    applyLang(introLang);
    if (introMusic === 'yes') audio.play().catch(() => {});
    else playerEl.style.display = 'none';
    introEl.classList.add('hide');
    setTimeout(() => { introEl.style.display = 'none'; }, 400);
  });
}
/* ---------- toast ---------- */

const toastEl = document.getElementById('toast');
let toastTimer;

function toast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

/* ---------- copy to clipboard ---------- */

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // The Clipboard API needs a secure context; fall back to a temporary selection.
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e2) {
      return false;
    }
  }
}

document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const ok = await copyText(btn.dataset.copy);
    toast(t(ok ? 'copy_done' : 'copy_fail'));
    if (!ok) return;
    btn.classList.add('done');
    setTimeout(() => btn.classList.remove('done'), 1600);
  });
});

/* ---------- command palette ---------- */

const cmdk = document.getElementById('cmdk');
const cmdkInput = document.getElementById('cmdk-input');
const cmdkList = document.getElementById('cmdk-list');
const cmdkEmpty = document.getElementById('cmdk-empty');

if (cmdk && cmdkInput && cmdkList) {
  let items = [];
  let active = 0;
  let lastFocus = null;

  const go = (hash) => () => {
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', hash);
  };

  const openUrl = (url) => () => window.open(url, '_blank', 'noopener');

  function commands() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const playing = audio && !audio.paused;
    return [
      { group: 'cmdk_g_nav', icon: '→', key: 'nav_home', run: go('#home') },
      { group: 'cmdk_g_nav', icon: '→', key: 'nav_about', run: go('#about') },
      { group: 'cmdk_g_nav', icon: '→', key: 'nav_skills', run: go('#skills') },
      { group: 'cmdk_g_nav', icon: '→', key: 'nav_projects', run: go('#projects') },
      { group: 'cmdk_g_nav', icon: '→', key: 'nav_contact', run: go('#contact') },
      {
        group: 'cmdk_g_actions',
        icon: isLight ? '☾' : '☀',
        key: isLight ? 'cmd_theme_dark' : 'cmd_theme_light',
        run: () => applyTheme(isLight ? 'dark' : 'light')
      },
      {
        group: 'cmdk_g_actions',
        icon: '文',
        key: currentLang === 'en' ? 'cmd_lang_es' : 'cmd_lang_en',
        run: () => {
          applyLang(currentLang === 'en' ? 'es' : 'en');
          if (playerEl) loadTrack(0, false);
        }
      },
      {
        group: 'cmdk_g_actions',
        icon: '⧉',
        key: 'cmd_copy',
        hint: 'kizzyrnam@gmail.com',
        run: async () => {
          const ok = await copyText('kizzyrnam@gmail.com');
          toast(t(ok ? 'copy_done' : 'copy_fail'));
        }
      },
      {
        group: 'cmdk_g_actions',
        icon: playing ? '❚❚' : '▶',
        key: playing ? 'cmd_pause' : 'cmd_play',
        run: () => {
          if (!audio) return;
          if (!audio.src) loadTrack(0, false);
          if (audio.paused) audio.play().catch(() => {});
          else audio.pause();
        }
      },
      { group: 'cmdk_g_links', icon: '↗', key: 'cmd_gh', hint: '@Kaiz-2', run: openUrl('https://github.com/Kaiz-2') },
      { group: 'cmdk_g_links', icon: '↗', key: 'cmd_dc', hint: '@kaiz', run: openUrl('https://discord.com/users/614478789241470986') },
      { group: 'cmdk_g_links', icon: '↗', key: 'cmd_ig', hint: '@rxlxx2', run: openUrl('https://instagram.com/rxlxx2') },
      { group: 'cmdk_g_links', icon: '↗', key: 'cmd_repo_music', run: openUrl('https://github.com/Kaiz-2/discord-music-template') },
      { group: 'cmdk_g_links', icon: '↗', key: 'cmd_repo_sec', run: openUrl('https://github.com/Kaiz-2/discord-security-template') }
    ];
  }

  // Case- and accent-insensitive so "musica" still matches "música".
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function render() {
    const q = norm(cmdkInput.value.trim());
    items = commands()
      .map((c) => ({ ...c, label: t(c.key) }))
      .filter((c) => !q || norm(c.label).includes(q) || norm(t(c.group)).includes(q));

    if (active >= items.length) active = Math.max(0, items.length - 1);

    cmdkList.innerHTML = '';
    let lastGroup = null;
    items.forEach((c, i) => {
      if (c.group !== lastGroup) {
        lastGroup = c.group;
        const h = document.createElement('li');
        h.className = 'cmdk-group';
        h.setAttribute('role', 'presentation');
        h.textContent = t(c.group);
        cmdkList.appendChild(h);
      }
      const li = document.createElement('li');
      li.className = 'cmdk-item';
      li.id = 'cmdk-item-' + i;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === active));
      const icon = document.createElement('span');
      icon.className = 'cmdk-item-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = c.icon;
      const label = document.createElement('span');
      label.className = 'cmdk-item-label';
      label.textContent = c.label;
      li.append(icon, label);
      if (c.hint) {
        const hint = document.createElement('span');
        hint.className = 'cmdk-item-hint';
        hint.textContent = c.hint;
        li.appendChild(hint);
      }
      li.addEventListener('click', () => runItem(i));
      li.addEventListener('mousemove', () => setActive(i));
      cmdkList.appendChild(li);
    });

    cmdkEmpty.hidden = items.length > 0;
    syncActive();
  }

  function syncActive() {
    const nodes = cmdkList.querySelectorAll('.cmdk-item');
    nodes.forEach((el, i) => el.setAttribute('aria-selected', String(i === active)));
    const el = nodes[active];
    // On the first item, pin the list to the top so its group heading stays visible.
    if (active === 0) cmdkList.scrollTop = 0;
    else if (el) el.scrollIntoView({ block: 'nearest' });
    cmdkInput.setAttribute('aria-activedescendant', el ? el.id : '');
  }

  function setActive(i) {
    if (i === active) return;
    active = i;
    syncActive();
  }

  function runItem(i) {
    const c = items[i];
    if (!c) return;
    closePalette();
    c.run();
  }

  function openPalette() {
    if (!cmdk.hidden) return;
    lastFocus = document.activeElement;
    cmdk.hidden = false;
    cmdkInput.value = '';
    active = 0;
    render();
    cmdkInput.focus();
  }

  function closePalette() {
    if (cmdk.hidden) return;
    cmdk.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  cmdkInput.addEventListener('input', () => {
    active = 0;
    render();
  });

  cmdk.querySelectorAll('[data-cmdk-close]').forEach((el) => {
    el.addEventListener('click', closePalette);
  });

  document.querySelectorAll('[data-cmdk-open]').forEach((el) => {
    el.addEventListener('click', openPalette);
  });

  cmdk.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length) setActive((active + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length) setActive((active - 1 + items.length) % items.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(Math.max(0, items.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runItem(active);
    } else if (e.key === 'Tab') {
      // Trap focus: the dialog only has one focusable control.
      e.preventDefault();
    }
  });

  const isTyping = (el) =>
    !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdk.hidden) openPalette();
      else closePalette();
      return;
    }
    if (cmdk.hidden && e.key === '/' && !isTyping(document.activeElement)) {
      e.preventDefault();
      openPalette();
    }
  });
}
