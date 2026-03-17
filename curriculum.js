/* ============================================
   CHB Curriculum Engine - Part 1: Data + State
   ============================================ */

const CURRICULUM = {
  tiers: [
    {
      id: "t1", name: "Foundation", grade: "Grades 4–5",
      color: "#0D9E75", colorLight: "#34d399", colorDim: "rgba(13,158,117,0.15)",
      icon: "🌱", cssClass: "tier-t1",
      unlockRequirement: null,
      description: "Build curiosity. Establish basic biological literacy through interactive observation. Metaphor-first, no jargon.",
      modules: [
        {
          id: "m1_1", title: "Power Systems", icon: "❤️",
          description: "The heart as a pump, lungs as bellows, food as fuel. Measure your own pulse and see it change.",
          lessons: [
            { id: "l1_1_1", title: "The Pump", type: "sim", icon: "💓", xp: 10, slides: ["heartRateIntro","heartRateSim","heartRateInfo","heartRateQuiz"] },
            { id: "l1_1_2", title: "The Bellows", type: "explore", icon: "🟫", xp: 10, slides: ["bellowsIntro","bellowsExplore","bellowsInfo","bellowsQuiz"] },
            { id: "l1_1_3", title: "Fast vs. Slow Fuel", type: "drag", icon: "⚡", xp: 10, slides: ["fuelIntro","fuelDrag","fuelInfo","fuelQuiz"] },
            { id: "l1_1_4", title: "Pulse Check Lab", type: "lab", icon: "📊", xp: 20, slides: ["pulseIntro","pulseLab","pulseChart","pulseVocab"] }
          ]
        },
        {
          id: "m1_2", title: "Body Defenders", icon: "🛡️",
          description: "Bacteria vs. viruses, your immune system, and the science of handwashing - proven with glitter.",
          lessons: [
            { id: "l1_2_1", title: "Bacteria vs. Viruses", type: "drag", icon: "🦠", xp: 10, slides: ["germIntro","germDrag","germInfo","germQuiz"] },
            { id: "l1_2_2", title: "The Immune Shield", type: "sim", icon: "🛡️", xp: 10, slides: ["shieldIntro","shieldSim","shieldInfo","shieldQuiz"] },
            { id: "l1_2_3", title: "Glitter Germ Demo", type: "sim", icon: "✨", xp: 20, slides: ["glitterIntro","glitterSim","glitterReveal","glitterVocab"] }
          ]
        },
        {
          id: "m1_3", title: "Fueling the Machine", icon: "🥗",
          description: "Food groups, why sugar crashes, and why water is the most essential nutrient.",
          lessons: [
            { id: "l1_3_1", title: "The Food Wheel", type: "explore", icon: "💿", xp: 10, slides: ["wheelIntro","wheelExplore","wheelInfo","wheelQuiz"] },
            { id: "l1_3_2", title: "Sugar vs. Sustenance", type: "sim", icon: "📊", xp: 10, slides: ["sugarIntro","sugarSim","sugarInfo","sugarQuiz"] },
            { id: "l1_3_3", title: "Hydration Meter", type: "sim", icon: "💧", xp: 10, slides: ["hydroIntro","hydroSim","hydroInfo","hydroVocab"] }
          ]
        }
      ]
    },
    {
      id: "t2", name: "Intermediate", grade: "Grades 6–7",
      color: "#534AB7", colorLight: "#a78bfa", colorDim: "rgba(83,74,183,0.15)",
      icon: "🔬", cssClass: "tier-t2",
      unlockRequirement: { tier: "t1", modulesNeeded: 2 },
      description: "Systems thinking. Understand internal mechanisms. Real vocabulary introduced alongside the metaphors you already know.",
      modules: [
        {
          id: "m2_1", title: "Respiratory System", icon: "🟫",
          description: "Gas exchange, oxygen transport, and what happens inside an alveolus.",
          lessons: [
            { id: "l2_1_1", title: "Gas Exchange", type: "explore", icon: "💨", xp: 15, slides: ["gasIntro","gasExplore","gasInfo","gasQuiz"] },
            { id: "l2_1_2", title: "Blood Transport", type: "drag", icon: "🧪", xp: 15, slides: ["bloodIntro","bloodDrag","bloodInfo","bloodQuiz"] },
            { id: "l2_1_3", title: "Cardiac Recovery", type: "sim", icon: "💓", xp: 20, slides: ["cardiacIntro","cardiacSim","cardiacInfo","cardiacVocab"] }
          ]
        },
        {
          id: "m2_2", title: "Nutrition & Metabolism", icon: "⚡",
          description: "ATP, macronutrients, and how your body converts food into energy at the cellular level.",
          lessons: [
            { id: "l2_2_1", title: "Meal Builder", type: "sim", icon: "🍽️", xp: 15, slides: ["mealIntro","mealSim","mealInfo","mealQuiz"] },
            { id: "l2_2_2", title: "ATP Factory", type: "sim", icon: "🏭", xp: 15, slides: ["atpIntro","atpSim","atpInfo","atpQuiz"] },
            { id: "l2_2_3", title: "Glucose Ride", type: "sim", icon: "📈", xp: 20, slides: ["glucoseIntro","glucoseSim","glucoseInfo","glucoseVocab"] }
          ]
        },
        {
          id: "m2_3", title: "Immune System Deep Dive", icon: "🦬",
          description: "Innate vs. adaptive immunity, how vaccines train your defenses, and herd immunity math.",
          lessons: [
            { id: "l2_3_1", title: "Innate vs. Adaptive", type: "sim", icon: "🏃", xp: 15, slides: ["raceIntro","raceSim","raceInfo","raceQuiz"] },
            { id: "l2_3_2", title: "Vaccine Mechanics", type: "sim", icon: "💉", xp: 15, slides: ["vaccineIntro","vaccineSim","vaccineInfo","vaccineQuiz"] },
            { id: "l2_3_3", title: "Herd Immunity", type: "sim", icon: "👥", xp: 20, slides: ["herdIntro","herdSim","herdInfo","herdVocab"] }
          ]
        }
      ]
    },
    {
      id: "t3", name: "Advanced", grade: "Grade 8",
      color: "#D85A30", colorLight: "#fb923c", colorDim: "rgba(216,90,48,0.15)",
      icon: "🧠", cssClass: "tier-t3",
      unlockRequirement: { tier: "t2", modulesNeeded: 3 },
      description: "Real-world health literacy. Epidemiology, cardiology, stress physiology, and navigating healthcare - adult-level thinking.",
      modules: [
        {
          id: "m3_1", title: "Cardiovascular Health", icon: "❤️",
          description: "Blood pressure, arterial health, and lifestyle risk factors. Real patient data, real decisions.",
          lessons: [
            { id: "l3_1_1", title: "Blood Pressure", type: "sim", icon: "📏", xp: 20, slides: ["bpIntro","bpSim","bpInfo","bpQuiz"] },
            { id: "l3_1_2", title: "Artery Health", type: "sim", icon: "🧬", xp: 20, slides: ["arteryIntro","arterySim","arteryInfo","arteryQuiz"] },
            { id: "l3_1_3", title: "Risk Factor Audit", type: "sim", icon: "📊", xp: 25, slides: ["riskIntro","riskSim","riskInfo","riskVocab"] }
          ]
        },
        {
          id: "m3_2", title: "Brain & Stress", icon: "🧠",
          description: "Cortisol, fight-or-flight, and how chronic stress affects your whole body.",
          lessons: [
            { id: "l3_2_1", title: "Brain Regions", type: "explore", icon: "🧠", xp: 20, slides: ["brainIntro","brainExplore","brainInfo","brainQuiz"] },
            { id: "l3_2_2", title: "Fight or Flight", type: "sim", icon: "⚡", xp: 20, slides: ["fofIntro","fofSim","fofInfo","fofQuiz"] },
            { id: "l3_2_3", title: "Stress Timeline", type: "sim", icon: "📅", xp: 25, slides: ["timelineIntro","timelineSim","timelineInfo","timelineVocab"] }
          ]
        },
        {
          id: "m3_3", title: "Healthcare Navigation", icon: "🏥",
          description: "Urgent care vs. ER, preventive medicine, and how to be your own health advocate.",
          lessons: [
            { id: "l3_3_1", title: "Care Routing", type: "roleplay", icon: "📍", xp: 20, slides: ["routeIntro","routeSim","routeInfo","routeQuiz"] },
            { id: "l3_3_2", title: "Prevention Math", type: "sim", icon: "💰", xp: 20, slides: ["preventIntro","preventSim","preventInfo","preventQuiz"] },
            { id: "l3_3_3", title: "Doctor Dialogue", type: "roleplay", icon: "💬", xp: 25, slides: ["doctorIntro","doctorSim","doctorInfo","doctorComplete"] }
          ]
        }
      ]
    }
  ]
};

/* ============================================
   State Management
   ============================================ */
const STATE = {
  progress: {},
  xp: 0,
  currentLesson: null,
  currentSlideIndex: 0,
  currentTier: null,
  currentModule: null,
  slideInteracted: false,
  pulseResting: 72
};

function saveState() {
  try { localStorage.setItem("chb_progress", JSON.stringify({ progress: STATE.progress, xp: STATE.xp })); } catch(e) {}
}
function loadState() {
  try {
    const d = JSON.parse(localStorage.getItem("chb_progress") || "null");
    if (d) { STATE.progress = d.progress || {}; STATE.xp = d.xp || 0; }
  } catch(e) {}
}
function resetState() {
  STATE.progress = {}; STATE.xp = 0;
  saveState(); updateXPBar(); renderPath();
}
function isLessonComplete(lessonId) { return !!STATE.progress[lessonId]; }
function completeLesson(lessonId, xp) {
  if (!STATE.progress[lessonId]) {
    STATE.progress[lessonId] = true;
    STATE.xp += xp;
    saveState(); updateXPBar();
    showXPToast("+" + xp + " XP!");
    updateModulePill();
  }
}
function getModuleProgress(mod) {
  const done = mod.lessons.filter(l => isLessonComplete(l.id)).length;
  return { done, total: mod.lessons.length, pct: Math.round((done / mod.lessons.length) * 100) };
}
function getTierCompletedModules(tier) {
  return tier.modules.filter(m => getModuleProgress(m).done === m.lessons.length).length;
}
function isTierUnlocked(tier) {
  if (!tier.unlockRequirement) return true;
  var srcTier = CURRICULUM.tiers.find(function(t) { return t.id === tier.unlockRequirement.tier; });
  return srcTier ? getTierCompletedModules(srcTier) >= srcTier.modules.length : false;
}
function isModuleUnlocked(tier, mod) {
  if (!isTierUnlocked(tier)) return false;
  const modIdx = tier.modules.indexOf(mod);
  if (modIdx === 0) return true;
  const prev = tier.modules[modIdx - 1];
  const prevProg = getModuleProgress(prev);
  return prevProg.done === prevProg.total;
}
function isLessonUnlocked(tier, mod, lessonIdx) {
  if (!isTierUnlocked(tier)) return false;
  // Flat list of all lessons in tier order
  var flat = [];
  tier.modules.forEach(function(m) {
    m.lessons.forEach(function(l, li) { flat.push({ id: l.id, modId: m.id, li: li }); });
  });
  var pos = flat.findIndex(function(x) { return x.modId === mod.id && x.li === lessonIdx; });
  if (pos <= 0) return true;
  return isLessonComplete(flat[pos - 1].id);
}
function getTotalLessons() {
  return CURRICULUM.tiers.reduce((a, t) => a + t.modules.reduce((b, m) => b + m.lessons.length, 0), 0);
}
function getTotalCompletedLessons() {
  return CURRICULUM.tiers.reduce((a, t) => a + t.modules.reduce((b, m) => b + m.lessons.filter(l => isLessonComplete(l.id)).length, 0), 0);
}


/* ============================================
   Part 2: Path Renderer + XP Bar
   ============================================ */

function updateXPBar() {
  const xpEl = document.getElementById('xp-count');
  const fillEl = document.getElementById('overall-progress-fill');
  const pctEl = document.getElementById('overall-progress-pct');
  if (xpEl) xpEl.textContent = STATE.xp;
  const total = getTotalLessons();
  const done = getTotalCompletedLessons();
  const pct = total ? Math.round((done / total) * 100) : 0;
  if (fillEl) fillEl.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '% complete';
}

function showXPToast(msg) {
  const t = document.getElementById('xp-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

function getCurrentModule() {
  for (var ti = 0; ti < CURRICULUM.tiers.length; ti++) {
    var tier = CURRICULUM.tiers[ti];
    if (!isTierUnlocked(tier)) continue;
    for (var mi = 0; mi < tier.modules.length; mi++) {
      var mod = tier.modules[mi];
      for (var li = 0; li < mod.lessons.length; li++) {
        if (!isLessonComplete(mod.lessons[li].id) && isLessonUnlocked(tier, mod, li)) {
          return { tier: tier, mod: mod };
        }
      }
    }
  }
  return null;
}

function updateModulePill() {
  var pill = document.getElementById('curr-module-pill');
  if (!pill) return;
  var current = getCurrentModule();
  if (!current) {
    document.getElementById('curr-module-pill-icon').textContent = '\uD83C\uDFC6';
    document.getElementById('curr-module-pill-name').textContent = 'All complete!';
    document.getElementById('curr-module-pill-prog').textContent = '';
    return;
  }
  var prog = getModuleProgress(current.mod);
  document.getElementById('curr-module-pill-icon').textContent = current.mod.icon;
  document.getElementById('curr-module-pill-name').textContent = current.mod.title;
  document.getElementById('curr-module-pill-prog').textContent = prog.done + '/' + prog.total;
}

function renderPath() {
  var container = document.getElementById('curriculum-path');
  if (!container) return;
  container.innerHTML = '';

  // Bottom-to-top: T3 first in DOM, T1 last → T1 L1 sits at very bottom (the start)
  var tiersReversed = CURRICULUM.tiers.slice().reverse();

  tiersReversed.forEach(function(tier) {
    var tierOrigIdx = CURRICULUM.tiers.indexOf(tier);
    var tierUnlocked = isTierUnlocked(tier);
    var section = document.createElement('section');
    section.className = 'tier-section ' + tier.cssClass;

    // Modules reversed so M1 is at bottom; within each module lessons reversed so L1 at bottom
    var nodesHtml = tier.modules.slice().reverse().map(function(mod) {
      var lessonsHtml = mod.lessons.slice().reverse().map(function(lesson) {
        var li = mod.lessons.indexOf(lesson);
        var unlocked = isLessonUnlocked(tier, mod, li);
        var done = isLessonComplete(lesson.id);
        var cls = 'lesson-node' + (!unlocked ? ' locked' : done ? ' completed' : '');
        return '<div class="lesson-node-wrapper">' +
          '<div class="' + cls + '"' +
          ' data-tier-id="' + tier.id + '" data-mod-id="' + mod.id + '" data-lesson-idx="' + li + '"' +
          ' tabindex="' + (unlocked ? 0 : -1) + '" role="button" aria-label="' + lesson.title + '">' +
          '<div class="lesson-node-circle">' +
          (done ? '<span class="lesson-node-check">\u2713</span>' : (!unlocked ? '\uD83D\uDD12' : lesson.icon)) +
          '</div>' +
          '<div class="lesson-node-label">' + lesson.title + '</div>' +
          '</div></div>';
      }).join('');

      return '<div class="mod-group">' + lessonsHtml + '</div>';
    }).join('');

    section.innerHTML =
      '<div class="tier-banner"><div class="tier-banner-inner">' +
      '<div class="tier-badge">' + tier.icon + ' ' + tier.name + '</div>' +
      '<h2 class="tier-title">' + tier.name + '</h2>' +
      '</div></div>' +
      '<div class="tier-nodes-wrapper">' +
      '<div class="path-line"><div class="path-line-fill" id="path-fill-' + tier.id + '"></div></div>' +
      nodesHtml +
      '</div>';

    container.appendChild(section);

    // Tier gate (shown above this tier, below the tier that must be completed first)
    if (tier.unlockRequirement) {
      var srcTier = CURRICULUM.tiers.find(function(t) { return t.id === tier.unlockRequirement.tier; });
      var doneCount = getTierCompletedModules(srcTier);
      var totalNeeded = srcTier.modules.length;
      var pct = Math.min(100, Math.round((doneCount / totalNeeded) * 100));
      var gateDiv = document.createElement('div');
      gateDiv.className = 'tier-gate' + (tierUnlocked ? ' unlocked' : '');
      gateDiv.innerHTML =
        '<div class="tier-gate-line"></div>' +
        '<div class="tier-gate-card">' +
        '<div class="tier-gate-icon">' + (tierUnlocked ? '\u2605' : '\uD83D\uDD12') + '</div>' +
        '<div class="tier-gate-title">' + (tierUnlocked ? tier.name + ' Unlocked!' : tier.name + ' locked') + '</div>' +
        '<div class="tier-gate-desc">' + (tierUnlocked
          ? 'All ' + srcTier.name + ' modules complete. ' + tier.name + ' is now open.'
          : 'Complete all ' + totalNeeded + ' ' + srcTier.name + ' modules to continue.') +
        '</div>' +
        (!tierUnlocked
          ? '<div class="tier-gate-progress"><div class="tier-gate-track"><div class="tier-gate-fill t' + (tierOrigIdx + 1) + '" style="width:' + pct + '%"></div></div>' +
            '<span class="tier-gate-text">' + doneCount + '/' + totalNeeded + ' modules</span></div>'
          : '') +
        '</div>';
      container.appendChild(gateDiv);
    }
  });

  // Animate path fills (based on lesson completion within each tier)
  requestAnimationFrame(function() {
    CURRICULUM.tiers.forEach(function(tier) {
      var fillEl = document.getElementById('path-fill-' + tier.id);
      if (!fillEl) return;
      var totalLessons = tier.modules.reduce(function(a, m) { return a + m.lessons.length; }, 0);
      var doneLessons  = tier.modules.reduce(function(a, m) {
        return a + m.lessons.filter(function(l) { return isLessonComplete(l.id); }).length;
      }, 0);
      var pct = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;
      setTimeout(function() { fillEl.style.height = pct + '%'; }, 300);
    });
  });

  // Lesson bubble click handlers
  container.querySelectorAll('.lesson-node:not(.locked)').forEach(function(node) {
    node.addEventListener('click', function() {
      var tier = CURRICULUM.tiers.find(function(t) { return t.id === node.dataset.tierId; });
      var mod  = tier && tier.modules.find(function(m) { return m.id === node.dataset.modId; });
      var li   = parseInt(node.dataset.lessonIdx, 10);
      if (tier && mod) openLesson(tier, mod, li);
    });
    node.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); node.click(); }
    });
  });

  updateModulePill();

  // Update module pill as user scrolls through the path
  var pillObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var node = entry.target;
      var tier = CURRICULUM.tiers.find(function(t) { return t.id === node.dataset.tierId; });
      var mod  = tier && tier.modules.find(function(m) { return m.id === node.dataset.modId; });
      if (!mod) return;
      var prog = getModuleProgress(mod);
      var iconEl = document.getElementById('curr-module-pill-icon');
      var nameEl = document.getElementById('curr-module-pill-name');
      var progEl = document.getElementById('curr-module-pill-prog');
      if (iconEl) iconEl.textContent = mod.icon;
      if (nameEl) nameEl.textContent = mod.title;
      if (progEl) progEl.textContent = prog.done + '/' + prog.total;
    });
  }, { threshold: 0.5, rootMargin: '-25% 0px -25% 0px' });

  container.querySelectorAll('.lesson-node').forEach(function(node) {
    pillObs.observe(node);
  });
}

/* ============================================
   Part 3: Module Overview + Lesson Engine
   ============================================ */

function openModuleOverview(tierId, modId) {
  const tier = CURRICULUM.tiers.find(t => t.id === tierId);
  const mod = tier && tier.modules.find(m => m.id === modId);
  if (!tier || !mod) return;
  STATE.currentTier = tier;
  STATE.currentModule = mod;
  const overlay = document.getElementById('module-overlay');
  const content = document.getElementById('module-modal-content');
  if (!overlay || !content) return;
  const color = tier.color;
  const prog = getModuleProgress(mod);
  const typeLabels = { sim:'Simulation', drag:'Drag Activity', explore:'Exploration', lab:'Lab', quiz:'Quiz', roleplay:'Role-play' };

  content.innerHTML =
    '<div class="module-modal-header">' +
    '<div class="module-modal-icon">' + mod.icon + '</div>' +
    '<div class="module-modal-tier-badge" style="background:' + tier.colorDim + ';color:' + tier.colorLight + ';border:1px solid ' + color + '40">' +
    tier.icon + ' ' + tier.name + '</div>' +
    '<h2 class="module-modal-title">' + mod.title + '</h2>' +
    '<p class="module-modal-desc">' + mod.description + '</p>' +
    '<p style="margin-top:10px;font-size:0.8rem;color:#64748b">' + prog.done + '/' + prog.total + ' lessons complete</p>' +
    '</div>' +
    '<div class="module-lessons-list">' +
    mod.lessons.map(function(lesson, li) {
      var done = isLessonComplete(lesson.id);
      var prevDone = li === 0 || isLessonComplete(mod.lessons[li - 1].id);
      var locked = !prevDone;
      return '<div class="module-lesson-item' + (done ? ' completed' : '') + (locked ? ' locked' : '') + '" data-lesson-index="' + li + '">' +
        '<div class="lesson-item-icon' + (done ? ' done' : '') + '">' + (done ? '✅' : locked ? '📒' : lesson.icon) + '</div>' +
        '<div class="lesson-item-body"><div class="lesson-item-title">' + lesson.title + '</div>' +
        '<div class="lesson-item-meta">' + (typeLabels[lesson.type] || lesson.type) + ' Â· ' + lesson.xp + ' XP</div></div>' +
        '<div class="lesson-item-status">' + (done ? '✓' : locked ? '' : '‶') + '</div></div>';
    }).join('') +
    '</div>' +
    '<button class="module-start-btn" id="module-start-btn" style="background:linear-gradient(135deg,' + color + ',' + tier.colorLight + ')">' +
    (prog.done === 0 ? 'Start Module' : prog.done === prog.total ? 'Review Module' : 'Continue →') +
    '</button>';

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  content.querySelectorAll('.module-lesson-item:not(.locked)').forEach(function(item) {
    item.addEventListener('click', function() {
      var idx = parseInt(item.dataset.lessonIndex, 10);
      closeModuleOverview();
      openLesson(tier, mod, idx);
    });
  });

  document.getElementById('module-start-btn').addEventListener('click', function() {
    var startIdx = mod.lessons.findIndex(function(l) { return !isLessonComplete(l.id); });
    if (startIdx === -1) startIdx = 0;
    closeModuleOverview();
    openLesson(tier, mod, startIdx);
  });

  document.getElementById('module-close-btn').addEventListener('click', closeModuleOverview);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModuleOverview(); });
}

function closeModuleOverview() {
  var overlay = document.getElementById('module-overlay');
  if (overlay) overlay.hidden = true;
  document.body.style.overflow = '';
}

function openLesson(tier, mod, lessonIndex) {
  var lesson = mod.lessons[lessonIndex];
  if (!lesson) return;
  STATE.currentLesson = lesson;
  STATE.currentSlideIndex = 0;
  STATE.currentTier = tier;
  STATE.currentModule = mod;
  STATE.slideInteracted = false;
  var overlay = document.getElementById('lesson-overlay');
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('lesson-breadcrumb').textContent = mod.title + ' Â· ' + lesson.title;
  document.getElementById('lesson-xp-badge').textContent = '+' + lesson.xp + ' XP';
  var contBtn = document.getElementById('lesson-continue-btn');
  contBtn.className = 'lesson-continue-btn' + (tier.id === 't2' ? ' t2' : tier.id === 't3' ? ' t3' : '');
  renderCurrentSlide();
  document.getElementById('lesson-close-btn').onclick = closeLessonFn;
  document.getElementById('lesson-continue-btn').onclick = nextSlide;
  document.getElementById('lesson-back-btn').onclick = prevSlide;
}

function closeLessonFn() {
  var overlay = document.getElementById('lesson-overlay');
  overlay.hidden = true;
  document.body.style.overflow = '';
  renderPath();
}

function renderCurrentSlide() {
  var lesson = STATE.currentLesson;
  var slideKey = lesson.slides[STATE.currentSlideIndex];
  var totalSlides = lesson.slides.length;
  var dotsEl = document.getElementById('lesson-progress-dots');
  dotsEl.innerHTML = lesson.slides.map(function(_, i) {
    var cls = 'lesson-dot';
    if (i < STATE.currentSlideIndex) cls += ' done';
    else if (i === STATE.currentSlideIndex) cls += ' active';
    return '<div class="' + cls + '"></div>';
  }).join('');
  var contBtn = document.getElementById('lesson-continue-btn');
  var isLast = STATE.currentSlideIndex === totalSlides - 1;
  contBtn.textContent = isLast ? 'Finish Lesson ✓' : 'Continue →';
  contBtn.disabled = false;
  var backBtn = document.getElementById('lesson-back-btn');
  backBtn.style.visibility = STATE.currentSlideIndex === 0 ? 'hidden' : 'visible';
  var contentEl = document.getElementById('lesson-content');
  contentEl.innerHTML = '';
  STATE.slideInteracted = false;
  var renderer = SLIDE_RENDERERS[slideKey];
  if (renderer) renderer(contentEl);
  else renderFallback(contentEl, slideKey);
}

function nextSlide() {
  var lesson = STATE.currentLesson;
  var total = lesson.slides.length;
  if (STATE.currentSlideIndex < total - 1) {
    STATE.currentSlideIndex++;
    renderCurrentSlide();
  } else {
    completeLesson(lesson.id, lesson.xp);
    closeLessonFn();
    setTimeout(function() {
      openModuleOverview(STATE.currentTier.id, STATE.currentModule.id);
    }, 300);
  }
}

function prevSlide() {
  if (STATE.currentSlideIndex > 0) {
    STATE.currentSlideIndex--;
    renderCurrentSlide();
  }
}

function renderFallback(container, key) {
  container.innerHTML = '<div class="info-slide"><h2>Interactive Lesson</h2><p style="color:#64748b">Content for: ' + key + '</p></div>';
}

/* ============================================
   Part 4: Quiz Data + Vocab Data
   ============================================ */

var QUIZZES = {
  heartRate: [
    { q: 'What happens to your heart rate when you exercise?', opts: ['It stays the same','It increases','It decreases','It stops'], correct: 1, exp: 'Your heart beats faster to deliver more oxygen to working muscles.' },
    { q: 'What does BPM stand for?', opts: ['Body Pressure Measurement','Beats Per Minute','Blood Pulse Monitor','Body Pump Mode'], correct: 1, exp: 'BPM = Beats Per Minute. A resting rate of 60-100 BPM is normal for adults.' },
    { q: 'Why does your heart speed up during exercise?', opts: ['To keep you warm','To scare you','To deliver more oxygen to muscles','To digest food faster'], correct: 2, exp: 'Working muscles need more oxygen. Your heart pumps faster to rush fuel through your bloodstream.' }
  ],
  bellows: [
    { q: 'What do the lungs do with oxygen?', opts: ['Store it','Pass it to red blood cells','Burn it for heat','Mix it with food'], correct: 1, exp: 'Oxygen crosses through alveoli into your bloodstream, where red blood cells carry it to every cell.' },
    { q: 'What gas do you breathe out?', opts: ['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'], correct: 2, exp: 'Your cells produce CO2 as waste. Your blood carries it to your lungs to be exhaled.' },
    { q: 'The bellows metaphor describes which organ?', opts: ['Stomach','Lungs','Heart','Kidneys'], correct: 1, exp: 'Like a bellows pumping air, your lungs expand and contract to move air in and out.' }
  ],
  fuel: [
    { q: 'Which food gives the longest-lasting energy?', opts: ['Candy bar','Soda','Oatmeal with fruit','Fruit juice'], correct: 2, exp: 'Oatmeal has complex carbs and fiber that break down slowly for steady energy over hours.' },
    { q: 'What happens after a sugar rush?', opts: ['You get stronger','Blood sugar crashes causing fatigue','You sleep better','Nothing changes'], correct: 1, exp: 'Simple sugars spike blood glucose quickly, then it drops fast, causing the energy crash.' },
    { q: 'Which is in the slow fuel category?', opts: ['Candy','White bread','Brown rice','Soda'], correct: 2, exp: 'Brown rice is a complex carb with fiber. It digests slowly and releases energy gradually.' }
  ],
  germs: [
    { q: 'Main difference between bacteria and viruses?', opts: ['Size only','Bacteria are living cells; viruses need a host cell to replicate','Viruses are bigger','They are the same'], correct: 1, exp: 'Bacteria are single-celled organisms. Viruses hijack your cells to make copies of themselves.' },
    { q: 'Which disease is caused by a virus?', opts: ['Strep throat','Food poisoning','The flu','Urinary tract infection'], correct: 2, exp: 'Influenza is caused by a virus. Strep throat and most food poisoning are bacterial.' },
    { q: 'Why does handwashing reduce infection?', opts: ['Kills all germs instantly','Physically removes pathogens before they enter your body','Strengthens immune system','Only helps with viruses'], correct: 1, exp: 'Soap lifts pathogens off your hands. Scrubbing for 20 seconds removes them before they enter through your mouth or nose.' }
  ],
  shield: [
    { q: 'What are white blood cells?', opts: ['Oxygen carriers','Immune system defenders','Food digesters','Hormone producers'], correct: 1, exp: 'White blood cells are your immune soldiers. They patrol your blood and attack foreign invaders.' },
    { q: 'What does the immune system do?', opts: ['Digest food','Defend your body against harmful invaders','Control heartbeat','Regulate temperature'], correct: 1, exp: 'The immune system is your body\'s defense network of cells, proteins, and organs.' }
  ],
  foodWheel: [
    { q: 'Your body\'s primary energy source?', opts: ['Fat','Protein','Carbohydrates','Water'], correct: 2, exp: 'Carbohydrates break down to glucose, your body\'s preferred fuel. Your brain uses 20% of your daily glucose.' },
    { q: 'Why do you need protein?', opts: ['Quick energy','Build and repair muscles and tissues','Regulate temperature','Absorb vitamins'], correct: 1, exp: 'Proteins are your body\'s building blocks. They repair tissue, build muscle, and create enzymes.' },
    { q: 'Which provides the most vitamins and minerals?', opts: ['Grains','Proteins','Fruits and vegetables','Fats'], correct: 2, exp: 'Fruits and vegetables are packed with vitamins, minerals, and antioxidants.' }
  ],
  sugar: [
    { q: 'What is glycemic index?', opts: ['How sweet food tastes','How quickly food raises blood sugar','A vitamin in fruit','Amount of sugar in food'], correct: 1, exp: 'GI measures how quickly a food raises blood glucose. High-GI = rapid spike; low-GI = gradual rise.' },
    { q: 'Why is steady energy better than spikes?', opts: ['Spikes feel better','Supports focus, mood, and sustained performance','Builds muscle faster','No difference'], correct: 1, exp: 'Blood sugar crashes cause fatigue and difficulty concentrating. Steady energy keeps brain and muscles performing.' }
  ],
  gas: [
    { q: 'Where does gas exchange happen?', opts: ['Bronchi','Trachea','Alveoli','Diaphragm'], correct: 2, exp: 'Alveoli are tiny air sacs in the lungs. Their thin walls allow O2 and CO2 to cross between air and blood.' },
    { q: 'What carries oxygen in red blood cells?', opts: ['Glucose','Insulin','Hemoglobin','ATP'], correct: 2, exp: 'Hemoglobin is the iron-containing protein that binds oxygen. That\'s why blood is red.' },
    { q: 'What does oxygen saturation measure?', opts: ['Oxygen in the air','Percentage of hemoglobin carrying oxygen','Breathing rate','CO2 exhaled'], correct: 1, exp: 'SpO2 measures what percentage of hemoglobin is carrying oxygen. Normal is 95-100%.' }
  ],
  blood: [
    { q: 'What do red blood cells do?', opts: ['Fight infection','Carry oxygen','Stop bleeding','Digest food'], correct: 1, exp: 'Red blood cells transport oxygen from lungs to every cell, and carry CO2 back to be exhaled.' },
    { q: 'What do platelets do?', opts: ['Carry oxygen','Fight bacteria','Help blood clot when injured','Produce hormones'], correct: 2, exp: 'Platelets clump at wound sites to form clots, stopping bleeding and starting healing.' },
    { q: 'What is plasma?', opts: ['A white blood cell type','The liquid portion of blood','Red blood cells without iron','A blood disease'], correct: 1, exp: 'Plasma is the yellowish liquid making up about 55% of blood. It carries cells, nutrients, and hormones.' }
  ],
  cardiac: [
    { q: 'What is cardiac output?', opts: ['Heart sound','Total blood pumped per minute','Heart rate','Heart size'], correct: 1, exp: 'Cardiac output = heart rate x stroke volume. It measures how much blood your heart pumps per minute.' },
    { q: 'Why do athletes have lower resting heart rates?', opts: ['Smaller hearts','Hearts pump more blood per beat','Need less oxygen','Weaker muscles'], correct: 1, exp: 'Training makes the heart pump more per beat (stroke volume), so it beats less frequently at rest.' }
  ],
  meal: [
    { q: 'Most important macronutrient for muscle recovery?', opts: ['Carbohydrates','Fat','Protein','Sugar'], correct: 2, exp: 'Protein provides amino acids to repair and build muscle fibers after exercise.' },
    { q: 'Primary role of dietary fat?', opts: ['Quick energy only','Storing excess calories only','Energy storage, hormone production, vitamin absorption','Nothing useful'], correct: 2, exp: 'Fats are essential for absorbing vitamins A, D, E, K, producing hormones, and protecting organs.' }
  ],
  atp: [
    { q: 'What is ATP?', opts: ['A protein type','The body\'s energy currency molecule','A hormone','A vitamin'], correct: 1, exp: 'ATP (adenosine triphosphate) is what your cells use directly for energy. Every movement runs on ATP.' },
    { q: 'What happens to excess glucose?', opts: ['Exhaled','Stored as fat or glycogen','Turns into protein','Destroyed'], correct: 1, exp: 'Excess glucose is converted to glycogen (short-term) or fat (long-term storage).' }
  ],
  race: [
    { q: 'Which immune response is faster but less specific?', opts: ['Adaptive','Innate','Antibody response','Memory cells'], correct: 1, exp: 'Innate immunity responds within hours using general defenses. It does not target specific pathogens.' },
    { q: 'Why is the second infection cleared faster?', opts: ['Lucky','Memory cells recognize and attack the pathogen quickly','Weaker pathogen','Innate system improved'], correct: 1, exp: 'After first infection, memory cells specific to that pathogen activate rapidly on re-exposure.' }
  ],
  vaccine: [
    { q: 'How do vaccines protect without causing disease?', opts: ['Kill all germs','Train immune system using safe version of pathogen','Strengthen body generally','Only work for viruses'], correct: 1, exp: 'Vaccines introduce a harmless piece of a pathogen. Your immune system builds memory without getting sick.' },
    { q: 'What are antibodies?', opts: ['White blood cells','Proteins that neutralize specific pathogens','Vitamins that fight infection','Red blood cells'], correct: 1, exp: 'Antibodies are Y-shaped proteins that bind to specific antigens, marking pathogens for destruction.' }
  ],
  bp: [
    { q: 'What does systolic pressure measure?', opts: ['Pressure when heart relaxes','Pressure when heart contracts','Pulse rate','Blood oxygen'], correct: 1, exp: 'Systolic (top number) = pressure when heart contracts. Normal: below 120 mmHg.' },
    { q: 'What is healthy blood pressure?', opts: ['160/100','140/90','Below 120/80','200/120'], correct: 2, exp: 'Normal is below 120/80 mmHg. Consistently higher readings require medical attention.' },
    { q: 'Which lifestyle factor most reduces blood pressure?', opts: ['More salt','Regular aerobic exercise','Less sleep','More coffee'], correct: 1, exp: 'Regular aerobic exercise strengthens the heart and makes vessels more flexible, reducing blood pressure.' }
  ],
  artery: [
    { q: 'What is atherosclerosis?', opts: ['Heart rhythm disorder','Plaque buildup inside artery walls','A type of heart attack','Normal aging'], correct: 1, exp: 'Atherosclerosis is fatty plaque buildup inside artery walls. Over decades it narrows arteries and increases heart attack risk.' },
    { q: 'Which factor most speeds up plaque buildup?', opts: ['Exercise','Sleep','Smoking','Drinking water'], correct: 2, exp: 'Smoking damages artery walls and promotes inflammation, dramatically accelerating plaque accumulation.' }
  ],
  brain: [
    { q: 'What does the prefrontal cortex control?', opts: ['Heart rate','Decision-making and impulse control','Balance','Memory storage'], correct: 1, exp: 'The prefrontal cortex is your brain\'s CEO. It handles complex decisions and controls impulsive amygdala reactions.' },
    { q: 'What is the amygdala responsible for?', opts: ['Language','Processing emotions and threat detection','Breathing','Long-term memory'], correct: 1, exp: 'The amygdala is your brain\'s alarm system. It detects threats and triggers fight-or-flight in milliseconds.' }
  ],
  fof: [
    { q: 'First hormone released in fight-or-flight?', opts: ['Insulin','Cortisol','Adrenaline','Dopamine'], correct: 2, exp: 'Adrenaline is released within seconds. It immediately raises heart rate, dilates pupils, and redirects blood to muscles.' },
    { q: 'Why does digestion slow in fight-or-flight?', opts: ['You stop being hungry','Blood redirected to muscles -- digestion not urgent for survival','Food causes fatigue','Stomach shrinks'], correct: 1, exp: 'During a threat, your nervous system prioritizes survival. Digestion uses energy and blood flow better used by muscles.' }
  ],
  route: [
    { q: 'Swollen twisted ankle but you can walk -- where do you go?', opts: ['Emergency Room','Primary Care','Urgent Care','Call 911'], correct: 2, exp: 'Urgent care handles same-day non-life-threatening issues. An ER for a sprain costs ~$1,800 vs ~$150 at urgent care.' },
    { q: 'Which symptom requires an immediate ER visit?', opts: ['Mild fever','Runny nose','Chest pain with difficulty breathing','Sore throat for 2 days'], correct: 2, exp: 'Chest pain with difficulty breathing could indicate a heart attack -- a life-threatening emergency.' },
    { q: 'What is preventive care?', opts: ['Treating diseases after they start','Check-ups and screenings to catch problems early','Emergency treatment','Only for elderly'], correct: 1, exp: 'Preventive care catches problems before they become serious. Treating hypertension early costs far less than treating a stroke.' }
  ]
};

var VOCAB = {
  powerSystems: [
    { term: 'Heart rate', def: 'The number of times your heart beats per minute (BPM).' },
    { term: 'BPM', def: 'Beats Per Minute -- the standard unit for measuring heart rate.' },
    { term: 'Circulation', def: 'The continuous movement of blood through the heart and blood vessels.' },
    { term: 'Oxygen', def: 'A gas your cells need to produce energy. Delivered by red blood cells.' },
    { term: 'Carbon dioxide', def: 'Waste gas produced by cells, carried back to lungs to be exhaled.' },
    { term: 'Alveoli', def: 'Tiny air sacs in the lungs where oxygen enters blood and CO2 exits.' }
  ],
  defenders: [
    { term: 'Bacteria', def: 'Single-celled living organisms. Some cause disease; many are beneficial.' },
    { term: 'Virus', def: 'Non-living particles that hijack cells to replicate. Cause flu, COVID, etc.' },
    { term: 'Immune system', def: 'Your body defense network -- cells and proteins that fight pathogens.' },
    { term: 'White blood cells', def: 'Immune cells that patrol your blood and attack foreign invaders.' },
    { term: 'Pathogen', def: 'Any organism that causes disease (bacteria, virus, fungus, parasite).' },
    { term: 'Contagious', def: 'Able to spread from person to person through contact or air.' }
  ],
  fueling: [
    { term: 'Protein', def: 'Macronutrient used to build and repair cells, muscles, and enzymes.' },
    { term: 'Carbohydrate', def: 'Your body main energy source, broken down to glucose.' },
    { term: 'Glucose', def: 'Simple sugar that is your cells primary fuel source.' },
    { term: 'Fiber', def: 'Indigestible carbohydrate that slows digestion and feeds gut bacteria.' },
    { term: 'Hydration', def: 'Having enough water in your body to function properly.' },
    { term: 'Glycemic index', def: 'A scale measuring how quickly a food raises blood sugar levels.' }
  ],
  metabolism: [
    { term: 'ATP', def: 'Adenosine triphosphate -- the molecule your cells use directly for energy.' },
    { term: 'Metabolism', def: 'All chemical reactions in your body that convert food into energy.' },
    { term: 'Insulin', def: 'Hormone that signals cells to absorb glucose from the bloodstream.' },
    { term: 'Macronutrients', def: 'The three main nutrients: carbohydrates, proteins, and fats.' },
    { term: 'Cellular respiration', def: 'Process where cells convert glucose and oxygen into ATP.' }
  ],
  immunity: [
    { term: 'Innate immunity', def: 'Fast, non-specific first line of defense against all pathogens.' },
    { term: 'Adaptive immunity', def: 'Precise defense that targets specific pathogens and forms memory.' },
    { term: 'Antibody', def: 'Y-shaped protein that binds to and neutralizes specific pathogens.' },
    { term: 'Antigen', def: 'A molecule on a pathogen that triggers an immune response.' },
    { term: 'Memory cells', def: 'Immune cells that remember past infections for faster future responses.' },
    { term: 'Herd immunity', def: 'When enough people are immune that a disease cannot spread easily.' }
  ],
  cardiovascular: [
    { term: 'Systolic', def: 'Top blood pressure number -- pressure when heart contracts.' },
    { term: 'Diastolic', def: 'Bottom blood pressure number -- pressure when heart relaxes.' },
    { term: 'Atherosclerosis', def: 'Buildup of fatty plaque inside artery walls, narrowing blood flow.' },
    { term: 'Hypertension', def: 'Chronically high blood pressure -- a major cardiovascular risk factor.' },
    { term: 'LDL', def: 'Low-density lipoprotein -- "bad" cholesterol that contributes to plaque.' },
    { term: 'HDL', def: 'High-density lipoprotein -- "good" cholesterol that helps remove plaque.' }
  ],
  brainStress: [
    { term: 'Cortisol', def: 'Stress hormone that mobilizes energy and suppresses non-essential functions.' },
    { term: 'Adrenaline', def: 'Epinephrine -- rapid-response stress hormone that prepares body for action.' },
    { term: 'Amygdala', def: 'Brain region that processes emotions and triggers the threat response.' },
    { term: 'Prefrontal cortex', def: 'Brain region for rational thought, decisions, and impulse control.' },
    { term: 'Circadian rhythm', def: 'Your body internal 24-hour clock regulating sleep, hormones, and metabolism.' },
    { term: 'Chronic stress', def: 'Prolonged stress response -- damages immune, cardiovascular, and mental health.' }
  ],
  healthcare: [
    { term: 'Primary care', def: 'Your regular doctor -- routine check-ups, non-urgent issues, referrals.' },
    { term: 'Urgent care', def: 'Same-day clinic for conditions needing quick attention but not emergencies.' },
    { term: 'Emergency Room', def: 'Hospital ER for life-threatening conditions needing immediate treatment.' },
    { term: 'Preventive care', def: 'Screenings, vaccines, and check-ups to catch problems before they start.' },
    { term: 'Triage', def: 'Sorting patients by severity to prioritize treatment order.' },
    { term: 'Self-advocacy', def: 'Asking informed questions and actively participating in your own healthcare.' }
  ]
};

/* ============================================
   Part 5: Generic Slide Renderers
   ============================================ */

function renderInfoSlide(container, opts) {
  var html = '<div class="lesson-slide info-slide">' +
    '<span class="slide-type-label slide-type-info">Learn</span>' +
    '<h2>' + opts.title + '</h2>';
  if (opts.body) html += opts.body;
  if (opts.highlight) html += '<div class="highlight-box">' + opts.highlight + '</div>';
  html += '</div>';
  container.innerHTML = html;
}

function renderVocabSlide(container, vocabArr) {
  var cards = vocabArr.map(function(v) {
    return '<div class="vocab-card" tabindex="0"><div class="vocab-term">' + v.term + '</div><div class="vocab-def">' + v.def + '</div></div>';
  }).join('');
  container.innerHTML = '<div class="lesson-slide vocab-slide">' +
    '<span class="slide-type-label slide-type-vocab">Vocabulary</span>' +
    '<h2>Key Terms</h2>' +
    '<p class="vocab-intro">Tap any card to highlight it.</p>' +
    '<div class="vocab-grid">' + cards + '</div></div>';
  container.querySelectorAll('.vocab-card').forEach(function(c) {
    c.addEventListener('click', function() { c.classList.toggle('flipped'); });
    c.addEventListener('keydown', function(e) { if (e.key === 'Enter') c.click(); });
  });
}

function renderQuizSlide(container, quizArr) {
  var q = quizArr[Math.floor(Math.random() * quizArr.length)];
  var letters = ['A','B','C','D'];
  var opts = q.opts.map(function(o, i) {
    return '<button class="quiz-option" data-idx="' + i + '">' +
      '<span class="quiz-option-letter">' + letters[i] + '</span>' + o + '</button>';
  }).join('');
  container.innerHTML = '<div class="lesson-slide quiz-slide">' +
    '<span class="slide-type-label slide-type-quiz">Quiz</span>' +
    '<div class="quiz-question">' + q.q + '</div>' +
    '<div class="quiz-options">' + opts + '</div>' +
    '<div id="quiz-feedback" style="display:none" class="quiz-feedback"></div></div>';

  var answered = false;
  var contBtn = document.getElementById('lesson-continue-btn');
  contBtn.disabled = true;

  container.querySelectorAll('.quiz-option').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (answered) return;
      answered = true;
      var idx = parseInt(btn.dataset.idx, 10);
      var isCorrect = idx === q.correct;
      container.querySelectorAll('.quiz-option').forEach(function(b) {
        b.disabled = true;
        if (parseInt(b.dataset.idx, 10) === q.correct) b.classList.add('correct');
        else if (b === btn && !isCorrect) b.classList.add('incorrect');
      });
      var fb = document.getElementById('quiz-feedback');
      fb.style.display = 'block';
      fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'incorrect');
      fb.innerHTML = (isCorrect ? '✓ Correct! ' : '✀- Not quite. ') + q.exp;
      contBtn.disabled = false;
    });
  });
}

/* ============================================
   Part 6: Tier 1 Slide Renderers
   ============================================ */

/* --- Module 1.1: Power Systems --- */
function renderHeartRateIntro(container) {
  renderInfoSlide(container, {
    title: 'Your Heart is a Pump',
    body: '<p>Right now, your heart is beating about 70 times a minute – pumping blood to every single cell in your body. It has been doing this since before you were born and will not stop until... well, you know.</p><p>In this lesson, you will <strong>control the pump</strong>. Drag a slider to change how hard the body is working, and watch what happens to your heart rate in real time.</p>',
    highlight: 'Your heart pumps about 5 liters of blood every minute at rest. During intense exercise, that jumps to 25 liters.'
  });
}

function renderHeartRateSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The Pump</h2>' +
    '<p class="sim-instruction">Drag the slider to change exercise intensity. Watch the heart rate respond.</p>' +
    '<div class="sim-widget">' +
      '<div class="heart-sim">' +
        '<div class="heart-visual"><span class="heart-emoji" id="heart-emoji">❤️</span></div>' +
        '<div class="heart-bpm" id="heart-bpm">72</div>' +
        '<div class="heart-bpm-label">BPM</div>' +
        '<div class="heart-slider-row">' +
          '<div class="sim-slider-label"><span>😴 Rest</span><span>🏃 Sprint</span></div>' +
          '<input type="range" class="sim-slider" id="heart-slider" min="0" max="100" value="20">' +
        '</div>' +
        '<div style="font-size:0.8rem;color:#64748b;text-align:center" id="heart-status">Resting – heart pumping slowly and steadily.</div>' +
      '</div>' +
    '</div></div>';

  var slider = document.getElementById('heart-slider');
  var bpmEl = document.getElementById('heart-bpm');
  var emoji = document.getElementById('heart-emoji');
  var status = document.getElementById('heart-status');
  var animInterval;

  function updateHeart(val) {
    var bpm = Math.round(60 + (val / 100) * 140);
    bpmEl.textContent = bpm;
    var speed = 1.2 - (val / 100) * 0.85;
    emoji.style.animationDuration = speed + 's';
    if (val < 20) {
      status.textContent = 'Resting – heart pumping slowly and steadily.';
      emoji.textContent = '❤️';
    } else if (val < 50) {
      status.textContent = 'Light activity – heart picking up the pace.';
      emoji.textContent = '💖';
    } else if (val < 80) {
      status.textContent = 'Moderate exercise – heart working hard!';
      emoji.textContent = '💓';
    } else {
      status.textContent = 'Maximum effort – heart pumping at full speed!';
      emoji.textContent = '❤️‍📥';
    }
  }

  slider.addEventListener('input', function() { updateHeart(parseInt(this.value)); });
  updateHeart(20);
}

function renderHeartRateInfo(container) {
  renderInfoSlide(container, {
    title: 'Why Does Heart Rate Change?',
    body: '<p>When you exercise, your muscles need <strong>more oxygen and glucose</strong> to keep working. Your heart responds by beating faster to deliver those fuels more quickly.</p><p>The faster your heart beats, the more blood circulates per minute – this is called <strong>cardiac output</strong>.</p>',
    highlight: 'A well-trained athlete\'s heart is so efficient that it can pump the same amount of blood with fewer beats. That\'s why athletes often have resting heart rates in the 40s.'
  });
}

/* --- Module 1.1: Bellows --- */
function renderBellowsIntro(container) {
  renderInfoSlide(container, {
    title: 'Your Lungs are Bellows',
    body: '<p>A bellows is a tool that pumps air into a fire – squeeze it and air rushes out, release it and air rushes back in. Your lungs work exactly the same way.</p><p>But lungs do more than just move air. At the very end of each airway sit tiny air sacs called <strong>alveoli</strong> – and that is where the real magic happens.</p>',
    highlight: 'Your lungs contain about 480 million alveoli. If you unfolded them flat, they would cover an area the size of a tennis court.'
  });
}

function renderBellowsExplore(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-explore">Explore</span>' +
    '<h2>Gas Exchange</h2>' +
    '<p class="sim-instruction">Watch oxygen (blue) enter and carbon dioxide (red) exit. Click each molecule to learn more.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px">' +
      '<div style="position:relative;width:260px;height:200px;margin:0 auto">' +
        '<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:120px;height:140px;background:rgba(255,255,255,0.05);border:2px solid rgba(255,255,255,0.15);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;color:#64748b;text-align:center;padding:10px">Alveolus<br>air sac</div>' +
        '<div class="bellows-o2" style="position:absolute;left:15%;top:20%;font-size:1.4rem;cursor:pointer;transition:all 1.5s;animation:floatO2 3s infinite alternate" title="O2">📵</div>' +
        '<div class="bellows-o2" style="position:absolute;right:15%;top:30%;font-size:1.2rem;cursor:pointer;animation:floatO2 3s 1s infinite alternate">📵</div>' +
        '<div class="bellows-co2" style="position:absolute;left:25%;bottom:20%;font-size:1.3rem;cursor:pointer;animation:floatCO2 3s 0.5s infinite alternate">📴</div>' +
        '<div class="bellows-co2" style="position:absolute;right:20%;bottom:25%;font-size:1.2rem;cursor:pointer;animation:floatCO2 3s 1.5s infinite alternate">📴</div>' +
      '</div>' +
      '<div style="display:flex;gap:16px;justify-content:center">' +
        '<div style="background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.3);border-radius:10px;padding:12px 16px;text-align:center">' +
          '<div style="font-size:1.3rem">📵</div>' +
          '<div style="font-size:0.75rem;color:#60a5fa;font-weight:600">Oxygen (O2)</div>' +
          '<div style="font-size:0.7rem;color:#475569">Enters bloodstream</div>' +
        '</div>' +
        '<div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:12px 16px;text-align:center">' +
          '<div style="font-size:1.3rem">📴</div>' +
          '<div style="font-size:0.75rem;color:#f87171;font-weight:600">Carbon Dioxide</div>' +
          '<div style="font-size:0.7rem;color:#475569">Exits to be exhaled</div>' +
        '</div>' +
      '</div>' +
    '</div></div>';
}

function renderBellowsInfo(container) {
  renderInfoSlide(container, {
    title: 'The Swap That Keeps You Alive',
    body: '<p>Every breath you take brings oxygen into your alveoli. Through their thin walls, <strong>oxygen crosses into your red blood cells</strong> – which carry it to every cell in your body.</p><p>At the same time, <strong>carbon dioxide</strong> – a waste gas your cells produce – crosses back into the alveolus to be exhaled.</p>',
    highlight: 'This swap happens 15-20 times per minute at rest, and up to 60 times per minute during hard exercise.'
  });
}

/* --- Module 1.1: Fuel Drag --- */
function renderFuelIntro(container) {
  renderInfoSlide(container, {
    title: 'Not All Fuel is Equal',
    body: '<p>Imagine trying to start a campfire with paper vs. with a thick log. Paper ignites instantly and burns out quickly – a log takes longer to catch but burns for hours.</p><p>Food works the same way. Some foods release energy <strong>fast but briefly</strong>. Others release it <strong>slowly but steadily</strong>.</p>',
    highlight: 'The Glycemic Index (GI) measures how quickly a food raises your blood sugar. High GI = fast fuel. Low GI = slow fuel.'
  });
}

function renderFuelDrag(container) {
  var items = [
    { name: 'Candy Bar', emoji: '🍫', correct: 'fast' },
    { name: 'Oatmeal', emoji: '🥣', correct: 'slow' },
    { name: 'White Rice', emoji: '🍚', correct: 'fast' },
    { name: 'Brown Rice', emoji: '🌾', correct: 'slow' },
    { name: 'Soda', emoji: '🥤', correct: 'fast' },
    { name: 'Apple', emoji: '🍎', correct: 'slow' },
    { name: 'Bread', emoji: '🍞', correct: 'fast' },
    { name: 'Lentils', emoji: '🫘', correct: 'slow' }
  ];

  var cards = items.map(function(item) {
    return '<div class="drag-card" draggable="true" data-name="' + item.name + '" data-correct="' + item.correct + '">' + item.emoji + ' ' + item.name + '</div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-drag">Drag Activity</span>' +
    '<h2>Fast vs. Slow Fuel</h2>' +
    '<p class="sim-instruction">Drag each food into the correct bin. Does it give quick energy or sustained energy?</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:0;padding:20px">' +
      '<div class="drag-cards" id="drag-cards">' + cards + '</div>' +
      '<div class="drag-bins">' +
        '<div class="drag-bin" id="bin-fast"><div class="drag-bin-emoji">⚡</div><div class="drag-bin-label">Fast Fuel</div><div class="drag-bin-items" id="items-fast"></div></div>' +
        '<div class="drag-bin" id="bin-slow"><div class="drag-bin-emoji">📋</div><div class="drag-bin-label">Slow Fuel</div><div class="drag-bin-items" id="items-slow"></div></div>' +
      '</div>' +
      '<div id="drag-feedback" style="margin-top:12px;font-size:0.82rem;color:#64748b;text-align:center"></div>' +
    '</div></div>';

  setupDragDrop(container, 'bin-fast', 'bin-slow', 'fast', 'slow');
}

function setupDragDrop(container, binFastId, binSlowId, fastVal, slowVal) {
  var dragged = null;

  container.querySelectorAll('.drag-card').forEach(function(card) {
    card.addEventListener('dragstart', function() {
      dragged = card;
      setTimeout(function() { card.classList.add('dragging'); }, 0);
    });
    card.addEventListener('dragend', function() { card.classList.remove('dragging'); });
  });

  [binFastId, binSlowId].forEach(function(binId) {
    var bin = document.getElementById(binId);
    if (!bin) return;
    bin.addEventListener('dragover', function(e) { e.preventDefault(); bin.classList.add('drag-over'); });
    bin.addEventListener('dragleave', function() { bin.classList.remove('drag-over'); });
    bin.addEventListener('drop', function(e) {
      e.preventDefault();
      bin.classList.remove('drag-over');
      if (!dragged) return;
      var binType = binId === binFastId ? fastVal : slowVal;
      var correct = dragged.dataset.correct === binType;
      var chip = document.createElement('div');
      chip.className = 'drag-dropped ' + (correct ? 'correct' : 'incorrect');
      chip.textContent = dragged.dataset.name;
      bin.querySelector('.drag-bin-items').appendChild(chip);
      dragged.remove();
      dragged = null;
      var fb = document.getElementById('drag-feedback');
      if (fb) fb.textContent = correct ? '✓ Good call!' : '✀- Think about how fast that food digests.';
    });
  });
}

function renderFuelInfo(container) {
  renderInfoSlide(container, {
    title: 'The Science Behind the Crash',
    body: '<p>When you eat high-glycemic foods (candy, white bread, soda), your blood sugar spikes rapidly. Your body releases <strong>insulin</strong> to bring it back down – often too aggressively, causing the energy crash you feel 30-60 minutes later.</p><p>Low-glycemic foods (oats, legumes, most vegetables) digest slowly, releasing glucose steadily over hours – no spike, no crash.</p>',
    highlight: 'Pro tip: pairing any carbohydrate with protein or fat slows down digestion and lowers the glycemic impact of the meal.'
  });
}

/* --- Module 1.1: Pulse Lab --- */
function renderPulseIntro(container) {
  renderInfoSlide(container, {
    title: 'Measure Your Own Heart',
    body: '<p>In this lab, you are going to measure your actual heart rate – right now, with your fingertip.</p><p>Find your pulse by pressing two fingers gently against the inside of your wrist (below your thumb) or against your neck (beside your windpipe).</p>',
    highlight: 'Count every beat you feel for 15 seconds, then multiply by 4. That gives you your beats per minute (BPM).'
  });
}

function renderPulseLab(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-lab">Lab</span>' +
    '<h2>Pulse Check Lab</h2>' +
    '<p class="sim-instruction">Count your pulse for 15 seconds, then enter it below.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px;padding:28px">' +
      '<div id="pulse-timer" style="font-family:var(--font-display);font-size:3.5rem;font-weight:700;color:#f8fafc;line-height:1;letter-spacing:-0.04em">15</div>' +
      '<div style="font-size:0.8rem;color:#64748b">seconds remaining</div>' +
      '<button id="pulse-start-btn" style="padding:12px 32px;background:linear-gradient(135deg,#0D9E75,#34d399);color:#fff;border:none;border-radius:100px;font-family:var(--font-display);font-size:0.95rem;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(13,158,117,0.3)">‶ Start 15-Second Count</button>' +
      '<div id="pulse-input-area" style="display:none;flex-direction:column;align-items:center;gap:12px">' +
        '<p style="font-size:0.9rem;color:#94a3b8">How many beats did you count?</p>' +
        '<div style="display:flex;align-items:center;gap:12px">' +
          '<input id="pulse-count" type="number" min="0" max="50" placeholder="e.g. 18" style="width:100px;padding:12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:12px;color:#f8fafc;font-size:1.2rem;text-align:center;font-family:var(--font-display)">' +
          '<button id="pulse-calc-btn" style="padding:12px 24px;background:rgba(13,158,117,0.2);border:1px solid rgba(13,158,117,0.4);color:#34d399;border-radius:100px;font-family:var(--font-display);font-size:0.88rem;cursor:pointer">Calculate BPM →</button>' +
        '</div>' +
      '</div>' +
      '<div id="pulse-result" style="display:none;text-align:center">' +
        '<div style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:#34d399" id="pulse-bpm-result">72 BPM</div>' +
        '<div style="font-size:0.8rem;color:#64748b;margin-top:4px" id="pulse-range-msg"></div>' +
      '</div>' +
    '</div></div>';

  var timerEl = document.getElementById('pulse-timer');
  var startBtn = document.getElementById('pulse-start-btn');
  var inputArea = document.getElementById('pulse-input-area');
  var calcBtn = document.getElementById('pulse-calc-btn');
  var resultEl = document.getElementById('pulse-result');
  var contBtn = document.getElementById('lesson-continue-btn');

  startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    startBtn.textContent = 'Counting...';
    var secs = 15;
    var interval = setInterval(function() {
      secs--;
      timerEl.textContent = secs;
      if (secs <= 0) {
        clearInterval(interval);
        timerEl.textContent = '✓';
        inputArea.style.display = 'flex';
      }
    }, 1000);
  });

  calcBtn.addEventListener('click', function() {
    var val = parseInt(document.getElementById('pulse-count').value, 10);
    if (!val || val < 1) return;
    var bpm = val * 4;
    document.getElementById('pulse-bpm-result').textContent = bpm + ' BPM';
    var msg = '';
    if (bpm < 60) msg = 'Below normal – you may be very fit, or count again.';
    else if (bpm <= 100) msg = 'Normal resting range (60-100 BPM). Your heart is healthy!';
    else if (bpm <= 120) msg = 'Slightly elevated – you may have been moving around.';
    else msg = 'High – try resting a few minutes and measuring again.';
    document.getElementById('pulse-range-msg').textContent = msg;
    resultEl.style.display = 'block';
    contBtn.disabled = false;
    STATE.pulseResting = bpm;
  });
}

function renderPulseChart(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-lab">Lab – Part 2</span>' +
    '<h2>The Spike & Recovery</h2>' +
    '<p class="sim-instruction">Do 10 jumping jacks, then press Measure to see how your heart rate changes.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:24px">' +
      '<canvas id="bpm-chart-canvas" width="500" height="160" style="width:100%;border-radius:8px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
        '<button id="chart-rest-btn" style="padding:10px 22px;background:rgba(13,158,117,0.2);border:1px solid rgba(13,158,117,0.4);color:#34d399;border-radius:100px;font-family:var(--font-display);font-size:0.82rem;cursor:pointer">📊 Measure Resting</button>' +
        '<button id="chart-active-btn" style="padding:10px 22px;background:rgba(251,191,36,0.15);border:1px solid rgba(251,191,36,0.25);color:#fbbf24;border-radius:100px;font-family:var(--font-display);font-size:0.82rem;cursor:pointer">🏃 After 10 Jumping Jacks</button>' +
        '<button id="chart-recover-btn" style="padding:10px 22px;background:rgba(96,165,250,0.12);border:1px solid rgba(96,165,250,0.2);color:#60a5fa;border-radius:100px;font-family:var(--font-display);font-size:0.82rem;cursor:pointer">💤 After 1 min rest</button>' +
      '</div>' +
      '<div id="chart-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Press each button in order to build your heart rate chart.</div>' +
    '</div></div>';

  var points = [];
  var labels = [];
  var resting = STATE.pulseResting || 72;

  function drawChart() {
    var canvas = document.getElementById('bpm-chart-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    if (points.length < 2) {
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Measure your BPM to see the chart fill in', w/2, h/2);
      return;
    }
    var minV = Math.min.apply(null, points) - 10;
    var maxV = Math.max.apply(null, points) + 10;
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    for (var i = 0; i < 4; i++) {
      var y = h - (i / 3) * (h - 20) - 10;
      ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(w - 10, y); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(Math.round(minV + (i / 3) * (maxV - minV)), 4, y + 4);
    }
    var gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(13,158,117,0.4)');
    gradient.addColorStop(1, 'rgba(13,158,117,0)');
    ctx.beginPath();
    var step = (w - 40) / (points.length - 1);
    ctx.moveTo(30, h - ((points[0] - minV) / (maxV - minV)) * (h - 20) - 10);
    for (var j = 1; j < points.length; j++) {
      ctx.lineTo(30 + j * step, h - ((points[j] - minV) / (maxV - minV)) * (h - 20) - 10);
    }
    ctx.lineTo(30 + (points.length - 1) * step, h);
    ctx.lineTo(30, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = '#0D9E75';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(30, h - ((points[0] - minV) / (maxV - minV)) * (h - 20) - 10);
    for (var k = 1; k < points.length; k++) {
      ctx.lineTo(30 + k * step, h - ((points[k] - minV) / (maxV - minV)) * (h - 20) - 10);
    }
    ctx.stroke();
    points.forEach(function(p, idx) {
      ctx.beginPath();
      ctx.arc(30 + idx * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#34d399';
      ctx.fill();
    });
  }

  document.getElementById('chart-rest-btn').addEventListener('click', function() {
    points = [resting]; labels = ['Rest'];
    drawChart();
    document.getElementById('chart-msg').textContent = 'Resting BPM recorded. Now do 10 jumping jacks, then press the next button.';
  });
  document.getElementById('chart-active-btn').addEventListener('click', function() {
    var active = resting + Math.round(40 + Math.random() * 40);
    points = [resting, active]; labels = ['Rest', 'After exercise'];
    drawChart();
    document.getElementById('chart-msg').innerHTML = '<strong style="color:#fbbf24">' + active + ' BPM</strong> after exercise – up from ' + resting + '! Now rest for a minute and press the last button.';
  });
  document.getElementById('chart-recover-btn').addEventListener('click', function() {
    var active = points[1] || resting + 50;
    var recovered = resting + Math.round(8 + Math.random() * 10);
    points = [resting, active, active - Math.round((active - resting) * 0.4), recovered];
    drawChart();
    document.getElementById('chart-msg').innerHTML = 'Heart rate recovering back toward ' + resting + ' BPM. Your heart works hard and then recovers – that\'s its superpower.';
  });
  drawChart();
}

/* --- Module 1.2: Defenders --- */
function renderGermIntro(container) {
  renderInfoSlide(container, {
    title: 'The Invisible World',
    body: '<p>Right now, millions of microscopic organisms are living on and around you. Most are harmless – some are essential. But some want to hijack your body\'s machinery.</p><p>The two main villains are <strong>bacteria</strong> and <strong>viruses</strong> – and they are very different creatures. Understanding the difference matters because <em>antibiotics kill bacteria but do nothing against viruses.</em></p>',
    highlight: 'Taking antibiotics for a viral infection (like the flu or a cold) does not help – and over time it makes bacteria resistant to those antibiotics.'
  });
}

function renderGermDrag(container) {
  var pathogens = [
    { name: 'E. coli', emoji: '🦠', correct: 'bacteria', hint: 'Has a cell wall and reproduces on its own' },
    { name: 'Influenza', emoji: '📵', correct: 'virus', hint: 'Needs your cells to replicate' },
    { name: 'Streptococcus', emoji: '🟢', correct: 'bacteria', hint: 'Causes strep throat; treated with antibiotics' },
    { name: 'COVID-19', emoji: '🟠', correct: 'virus', hint: 'Spike proteins help it enter cells' },
    { name: 'Salmonella', emoji: '🟡', correct: 'bacteria', hint: 'Common cause of food poisoning' },
    { name: 'Rhinovirus', emoji: '📴', correct: 'virus', hint: 'Causes the common cold' }
  ];

  var cards = pathogens.map(function(p) {
    return '<div class="drag-card" draggable="true" data-name="' + p.name + '" data-correct="' + p.correct + '" title="' + p.hint + '">' + p.emoji + ' ' + p.name + '</div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-drag">Drag Activity</span>' +
    '<h2>Bacteria or Virus?</h2>' +
    '<p class="sim-instruction">Sort each pathogen into the correct category. Hover for a hint.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:0;padding:20px">' +
      '<div class="drag-cards" id="drag-cards">' + cards + '</div>' +
      '<div class="drag-bins">' +
        '<div class="drag-bin" id="bin-fast"><div class="drag-bin-emoji">🦠</div><div class="drag-bin-label">Bacteria</div><div class="drag-bin-items" id="items-fast"></div></div>' +
        '<div class="drag-bin" id="bin-slow"><div class="drag-bin-emoji">📵</div><div class="drag-bin-label">Virus</div><div class="drag-bin-items" id="items-slow"></div></div>' +
      '</div>' +
      '<div id="drag-feedback" style="margin-top:12px;font-size:0.82rem;color:#64748b;text-align:center"></div>' +
    '</div></div>';

  setupDragDrop(container, 'bin-fast', 'bin-slow', 'bacteria', 'virus');
}

function renderGermInfo(container) {
  renderInfoSlide(container, {
    title: 'Different Enemies, Different Weapons',
    body: '<p><strong>Bacteria</strong> are living cells. They can grow and reproduce on their own. Antibiotics work by destroying bacterial cell walls or blocking their ability to reproduce.</p><p><strong>Viruses</strong> are not living cells – they are genetic instructions wrapped in protein. They cannot reproduce without hijacking one of your cells. Antibiotics have no effect. We fight viruses with vaccines and antiviral medications.</p>',
    highlight: 'Your immune system fights both – but it helps to know the difference so you get the right treatment.'
  });
}

function renderShieldIntro(container) {
  renderInfoSlide(container, {
    title: 'Your Body Has an Army',
    body: '<p>Right now, billions of white blood cells are patrolling your bloodstream. They are your immune system – a sophisticated defense network that has evolved over millions of years.</p><p>When a pathogen enters your body, the immune system mobilizes. The faster it responds, the less sick you get.</p>',
    highlight: 'You produce about 100 billion white blood cells every day. They live for hours to days – a constant rotating defense force.'
  });
}

function renderShieldSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Deploy Your Defenses</h2>' +
    '<p class="sim-instruction">Pathogens are invading. Click them to deploy white blood cells and destroy them before the timer runs out!</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:12px;padding:20px;min-height:300px;position:relative;overflow:hidden" id="shield-arena">' +
      '<div style="display:flex;justify-content:space-between;width:100%;font-family:var(--font-display);font-size:0.8rem;color:#64748b">' +
        '<span>Score: <strong id="shield-score" style="color:#34d399">0</strong></span>' +
        '<span>Time: <strong id="shield-timer" style="color:#fbbf24">20</strong>s</span>' +
        '<span>Health: <strong id="shield-health" style="color:#f87171">100</strong>%</span>' +
      '</div>' +
      '<div id="shield-field" style="position:relative;width:100%;flex:1;min-height:200px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px dashed rgba(255,255,255,0.08)"></div>' +
      '<button id="shield-start-btn" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:12px 28px;background:linear-gradient(135deg,#0D9E75,#34d399);color:#fff;border:none;border-radius:100px;font-family:var(--font-display);font-size:0.9rem;font-weight:700;cursor:pointer;z-index:10">Start Defense!</button>' +
    '</div></div>';

  var score = 0, health = 100, timeLeft = 20, running = false;
  var timerEl = document.getElementById('shield-timer');
  var scoreEl = document.getElementById('shield-score');
  var healthEl = document.getElementById('shield-health');
  var field = document.getElementById('shield-field');
  var startBtn = document.getElementById('shield-start-btn');
  var gameInterval, spawnInterval;
  var contBtn = document.getElementById('lesson-continue-btn');
  contBtn.disabled = true;

  function spawnPathogen() {
    if (!running) return;
    var germ = document.createElement('div');
    var types = ['🦠','📴','🟠','⚠️'];
    germ.style.cssText = 'position:absolute;font-size:1.8rem;cursor:pointer;user-select:none;transition:all 0.1s;animation:germFloat 0.5s infinite alternate;z-index:5;';
    germ.style.left = Math.random() * 80 + '%';
    germ.style.top = Math.random() * 70 + '%';
    germ.textContent = types[Math.floor(Math.random() * types.length)];
    field.appendChild(germ);
    germ.addEventListener('click', function() {
      score++;
      scoreEl.textContent = score;
      germ.textContent = '💥';
      setTimeout(function() { if (germ.parentNode) germ.remove(); }, 300);
    });
    setTimeout(function() {
      if (germ.parentNode) {
        health = Math.max(0, health - 8);
        healthEl.textContent = health;
        healthEl.style.color = health > 50 ? '#f87171' : '#ef4444';
        germ.remove();
        if (health <= 0 && running) endGame(false);
      }
    }, 2500);
  }

  function endGame(won) {
    running = false;
    clearInterval(gameInterval); clearInterval(spawnInterval);
    field.innerHTML = '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">' +
      '<div style="font-size:2.5rem">' + (won ? '🎉' : '😓') + '</div>' +
      '<div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:#f8fafc">' + (won ? 'Infection contained!' : 'Overwhelmed...') + '</div>' +
      '<div style="font-size:0.8rem;color:#64748b">Score: ' + score + ' pathogens destroyed</div>' +
    '</div>';
    contBtn.disabled = false;
  }

  document.getElementById('shield-start-btn').addEventListener('click', function() {
    startBtn.remove();
    running = true;
    gameInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) endGame(health > 0);
    }, 1000);
    spawnInterval = setInterval(spawnPathogen, 800);
  });
}

function renderShieldInfo(container) {
  renderInfoSlide(container, {
    title: 'How Your Immune System Actually Works',
    body: '<p>When a pathogen enters your body, your immune system launches a two-wave response. <strong>First</strong>: general white blood cells (neutrophils) rush to the site and attack anything foreign. <strong>Second</strong>: specialized cells (T-cells and B-cells) learn to target the specific pathogen precisely.</p><p>The second response is slower but far more powerful – and it leaves behind <strong>memory cells</strong> so the next time that same pathogen appears, you destroy it before you even feel sick.</p>',
    highlight: 'This immune memory is exactly what vaccines exploit. They give your immune system a safe preview of the pathogen so it can build memory without getting sick.'
  });
}

function renderGlitterIntro(container) {
  renderInfoSlide(container, {
    title: 'The Glitter Germ Demo',
    body: '<p>Imagine your hands are covered in glitter. Every surface you touch picks up some glitter. Every person who touches those surfaces picks up some too. Germs spread exactly like this – and you cannot see them.</p><p>In this simulation, you are going to watch a germ outbreak happen in real time – and then see exactly how handwashing changes everything.</p>',
    highlight: 'Researchers have traced single flu outbreaks through entire office buildings starting from one unwashed doorknob.'
  });
}

function renderGlitterSim(container) {
  var surfaces = [
    { name: 'Door Handle', emoji: '🚪' }, { name: 'Phone Screen', emoji: '📱' },
    { name: 'Keyboard', emoji: '⌨️' }, { name: 'Water Fountain', emoji: '💧' },
    { name: 'Desk Surface', emoji: '🪑' }, { name: 'Light Switch', emoji: '💡' },
    { name: 'Elevator Button', emoji: '📢' }, { name: 'Shared Pen', emoji: '✏️' }
  ];

  var cells = surfaces.map(function(s, i) {
    return '<div class="glitter-surface" data-idx="' + i + '">' + s.emoji + '<div class="glitter-surface-label">' + s.name + '</div></div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Glitter Germ Demo</h2>' +
    '<p class="sim-instruction">Tap each surface as if you\'re going about your day. Watch germs spread.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="glitter-grid">' + cells + '</div>' +
      '<div style="text-align:center">' +
        '<div style="font-size:0.8rem;color:#64748b;margin-bottom:6px">Surfaces contaminated</div>' +
        '<div class="glitter-spread-count" id="glitter-count">0</div>' +
        '<div class="glitter-spread-msg" id="glitter-msg">Touch some surfaces to start your day...</div>' +
      '</div>' +
    '</div></div>';

  var count = 0;
  container.querySelectorAll('.glitter-surface').forEach(function(surface) {
    surface.addEventListener('click', function() {
      if (!surface.classList.contains('contaminated')) {
        surface.classList.add('contaminated');
        count++;
        document.getElementById('glitter-count').textContent = count;
        var msgs = ['Starting to spread...','Contaminating more surfaces!','Every touch spreads more!','The outbreak is growing fast!','You\'ve touched ' + count + ' surfaces – how many people touched these too?'];
        document.getElementById('glitter-msg').textContent = msgs[Math.min(count - 1, msgs.length - 1)];
        document.getElementById('lesson-continue-btn').disabled = false;
      }
    });
  });
  document.getElementById('lesson-continue-btn').disabled = true;
}

function renderGlitterReveal(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Reveal</span>' +
    '<h2>What Washing Hands Does</h2>' +
    '<p class="sim-instruction">Now see what changes when you wash your hands. Toggle between washed and unwashed.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px;padding:24px">' +
      '<div style="display:flex;gap:12px;justify-content:center">' +
        '<button class="routing-btn" id="show-dirty" style="border-color:rgba(251,191,36,0.4);color:#fbbf24">🤚 Unwashed Hands</button>' +
        '<button class="routing-btn" id="show-clean" style="border-color:rgba(13,158,117,0.4);color:#34d399">🧼 After Washing</button>' +
      '</div>' +
      '<div id="spread-viz" style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;width:100%;max-width:400px;margin:0 auto"></div>' +
      '<div id="spread-msg" style="text-align:center;font-size:0.85rem;color:#94a3b8;max-width:380px;line-height:1.65"></div>' +
    '</div></div>';

  function renderPeople(washed) {
    var viz = document.getElementById('spread-viz');
    var msg = document.getElementById('spread-msg');
    viz.innerHTML = '';
    for (var i = 0; i < 40; i++) {
      var person = document.createElement('div');
      var infected = washed ? (i < 3) : (i < 22);
      person.style.cssText = 'aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;transition:all 0.4s;animation-delay:' + (i * 0.02) + 's';
      person.style.background = infected ? 'rgba(239,68,68,0.3)' : 'rgba(13,158,117,0.15)';
      person.style.border = infected ? '2px solid rgba(239,68,68,0.5)' : '2px solid rgba(13,158,117,0.3)';
      person.textContent = infected ? '🤧' : '😊';
      viz.appendChild(person);
    }
    if (washed) {
      msg.innerHTML = '<strong style="color:#34d399">3 people infected</strong> vs. 22 without handwashing. Washing hands reduced spread by <strong style="color:#34d399">86%</strong>. This is the science behind every "wash your hands" reminder.';
    } else {
      msg.innerHTML = '<strong style="color:#f87171">22 people infected</strong> from one person\'s unwashed hands touching shared surfaces. Tap "After Washing" to see the difference.';
    }
  }

  document.getElementById('show-dirty').addEventListener('click', function() { renderPeople(false); });
  document.getElementById('show-clean').addEventListener('click', function() { renderPeople(true); });
  renderPeople(false);
}

/* --- Module 1.3: Fueling --- */
function renderWheelIntro(container) {
  renderInfoSlide(container, {
    title: 'The Food Wheel',
    body: '<p>You have heard "eat a balanced diet" your whole life. But what does balanced actually mean? Your body needs five major food groups – and each one does something different.</p><p>In this lesson, you will explore each segment of the food wheel to understand <em>why</em> each group exists – not just what it is.</p>',
    highlight: 'No single food provides everything your body needs. Variety is not just a preference – it is a biological requirement.'
  });
}

function renderFoodWheel(container) {
  var segments = [
    { name: 'Proteins', emoji: '🥩', color: '#ef4444', desc: 'Build and repair every cell, muscle, and enzyme in your body. Include fish, eggs, beans, nuts, and meat.' },
    { name: 'Grains', emoji: '🌾', color: '#f59e0b', desc: 'Your primary energy source. Choose whole grains (brown rice, oats, whole wheat) for fiber and sustained energy.' },
    { name: 'Vegetables', emoji: '🥦', color: '#22c55e', desc: 'Vitamins, minerals, fiber, and antioxidants. Dark leafy greens are among the most nutrient-dense foods on Earth.' },
    { name: 'Fruits', emoji: '🍎', color: '#f97316', desc: 'Natural sugars for quick energy plus vitamins C and potassium. The fiber in whole fruit slows sugar absorption.' },
    { name: 'Dairy/Fats', emoji: '🥛', color: '#60a5fa', desc: 'Calcium for bones, vitamin D, and healthy fats. Essential for absorbing fat-soluble vitamins (A, D, E, K).' }
  ];

  var segBtns = segments.map(function(s, i) {
    return '<button class="energy-btn" data-idx="' + i + '" style="border-color:' + s.color + '33;background:' + s.color + '15;color:' + s.color + '">' + s.emoji + ' ' + s.name + '</button>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-explore">Explore</span>' +
    '<h2>The Food Wheel</h2>' +
    '<p class="sim-instruction">Tap each food group to learn what it does for your body.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px;padding:24px">' +
      '<div class="energy-options" style="grid-template-columns:repeat(3,1fr) !important">' + segBtns + '</div>' +
      '<div id="wheel-info" style="min-height:80px;text-align:center;padding:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:14px">' +
        '<p style="color:#475569;font-size:0.85rem">Select a food group above to learn about it.</p>' +
      '</div>' +
    '</div></div>';

  container.querySelectorAll('[data-idx]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('[data-idx]').forEach(function(b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      var seg = segments[parseInt(btn.dataset.idx)];
      document.getElementById('wheel-info').innerHTML =
        '<div style="font-size:2rem;margin-bottom:8px">' + seg.emoji + '</div>' +
        '<div style="font-family:var(--font-display);font-size:1rem;font-weight:600;color:#f8fafc;margin-bottom:6px">' + seg.name + '</div>' +
        '<div style="font-size:0.85rem;color:#94a3b8;line-height:1.6">' + seg.desc + '</div>';
    });
  });
}

function renderWheelInfo(container) {
  renderInfoSlide(container, {
    title: 'Why Balance Matters',
    body: '<p>Each food group provides different <strong>micronutrients</strong> – vitamins and minerals your body cannot make itself. Vitamin C from fruits, iron from proteins, calcium from dairy, magnesium from grains – missing any of these creates deficiencies that show up weeks or months later.</p><p>The goal is not perfection at every meal. It is variety over time – enough of each group that no essential nutrient goes chronically missing.</p>',
    highlight: 'Vitamin D deficiency affects over 1 billion people worldwide – many without knowing it. It comes from sunlight exposure and fortified dairy/fatty fish.'
  });
}

function renderSugarIntro(container) {
  renderInfoSlide(container, {
    title: 'The Energy Curve',
    body: '<p>Different foods create very different energy patterns in your body. Some send blood glucose soaring – then crashing. Others create a smooth, sustained curve that lasts for hours.</p><p>Choose a breakfast below and watch what happens to your energy over the next 4 hours.</p>',
    highlight: 'Your brain is particularly sensitive to blood sugar drops. That foggy, hard-to-concentrate feeling at 10am? Often a glucose crash from a high-sugar breakfast.'
  });
}

function renderSugarSim(container) {
  var options = [
    { name: 'Candy for Breakfast', emoji: '🍬', curve: [30,80,95,85,50,20,10,15,20,18], color: '#ef4444' },
    { name: 'Oats + Eggs', emoji: '🥣', curve: [30,45,55,60,58,55,52,48,45,42], color: '#22c55e' },
    { name: 'Orange Juice + Toast', emoji: '🥤', curve: [30,65,78,70,50,35,25,28,30,25], color: '#f59e0b' },
    { name: 'Nothing (skipping)', emoji: '🚫', curve: [30,25,20,15,10,8,6,10,12,10], color: '#94a3b8' }
  ];

  var btns = options.map(function(o, i) {
    return '<button class="energy-btn" data-idx="' + i + '" style="display:flex;align-items:center;gap:6px;justify-content:center">' + o.emoji + ' ' + o.name + '</button>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Sugar vs. Sustenance</h2>' +
    '<p class="sim-instruction">Choose a breakfast to see its 4-hour energy curve.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="energy-options">' + btns + '</div>' +
      '<canvas id="energy-canvas" width="480" height="160" style="width:100%;border-radius:8px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div id="energy-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Select a breakfast to see the energy curve.</div>' +
    '</div></div>';

  function drawCurve(optIdx) {
    var canvas = document.getElementById('energy-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var opt = options[optIdx];
    var pts = opt.curve;
    var minV = 0, maxV = 100;
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (var i = 0; i < 4; i++) {
      var y = h - (i / 3) * (h - 20) - 10;
      ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(w - 10, y); ctx.stroke();
      var label = ['Low','','','High'][i];
      ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = '9px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(label, 4, y + 4);
    }
    var step = (w - 40) / (pts.length - 1);
    var gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, opt.color + '55'); gradient.addColorStop(1, opt.color + '00');
    ctx.beginPath();
    ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
    pts.forEach(function(p, j) { if (j > 0) ctx.lineTo(30 + j * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
    ctx.lineTo(30 + (pts.length - 1) * step, h); ctx.lineTo(30, h); ctx.closePath();
    ctx.fillStyle = gradient; ctx.fill();
    ctx.strokeStyle = opt.color; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
    pts.forEach(function(p, j) { if (j > 0) ctx.lineTo(30 + j * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
    ctx.stroke();
    var xLabels = ['7am','8am','9am','10am','11am','12pm'];
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = '9px sans-serif'; ctx.textAlign = 'center';
    xLabels.forEach(function(lbl, i) { ctx.fillText(lbl, 30 + (i / 5) * (pts.length - 1) * step, h - 1); });
  }

  var msgs = [
    'Massive spike then crash – focus drops sharply by 9am. You\'ll be hungry again within an hour.',
    'Steady energy all morning – focus remains high, no crash. The ideal breakfast curve.',
    'Moderate spike from the juice, then a gradual decline. Better than candy, not as good as oats.',
    'Energy just drops. Skipping breakfast leaves your brain fuel-deprived – focus suffers from the start.'
  ];

  container.querySelectorAll('[data-idx]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('[data-idx]').forEach(function(b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      var idx = parseInt(btn.dataset.idx);
      drawCurve(idx);
      document.getElementById('energy-msg').textContent = msgs[idx];
    });
  });
}

function renderSugarInfo(container) {
  renderInfoSlide(container, {
    title: 'The Insulin Story',
    body: '<p>When blood glucose rises, your pancreas releases <strong>insulin</strong> – a hormone that tells cells to absorb the glucose. If glucose spikes too high, the insulin response can overshoot, pulling blood sugar below baseline and causing the crash.</p><p>Over time, repeated high spikes can cause cells to become <strong>insulin resistant</strong> – they stop responding properly. This is the early stage of type 2 diabetes.</p>',
    highlight: 'This is not about avoiding all sugar – it\'s about the speed of delivery. The same amount of sugar from an apple hits differently than from soda, because the fiber in the apple slows the rate of absorption.'
  });
}

function renderHydroIntro(container) {
  renderInfoSlide(container, {
    title: 'Water is Your Most Essential Nutrient',
    body: '<p>You can survive weeks without food. You can survive only <strong>3-5 days</strong> without water. Every chemical reaction in your body requires water as a medium. It regulates temperature, transports nutrients, lubricates joints, and removes waste.</p><p>Even mild dehydration – just 2% of body weight – measurably impairs cognitive performance and physical endurance.</p>',
    highlight: 'By the time you feel thirsty, you are already mildly dehydrated. Thirst is a late signal, not a reliable early warning.'
  });
}

function renderHydroSim(container) {
  var activities = [
    { name: 'Sports Practice (90 min)', emoji: '⚽', water: -3 },
    { name: 'Sitting at School (6 hrs)', emoji: '📚', water: -1 },
    { name: 'Hot Day Outside', emoji: '☀️', water: -2 },
    { name: 'Running 5K', emoji: '🏃', water: -3 },
    { name: 'Drinking 1 glass water', emoji: '💧', water: +2 },
    { name: 'Eating a meal', emoji: '🍽️', water: +1 }
  ];

  var btns = activities.map(function(a, i) {
    return '<button class="energy-btn" data-water="' + a.water + '" style="font-size:0.78rem">' + a.emoji + ' ' + a.name + '</button>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Hydration Meter</h2>' +
    '<p class="sim-instruction">Add activities to your day and keep the hydration meter in the green zone.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div style="text-align:center">' +
        '<div id="hydro-emoji" style="font-size:2.5rem;transition:all 0.3s">😊</div>' +
        '<div style="width:200px;margin:10px auto;height:20px;background:rgba(255,255,255,0.08);border-radius:100px;overflow:hidden">' +
          '<div id="hydro-bar" style="height:100%;width:60%;background:linear-gradient(90deg,#0D9E75,#34d399);border-radius:100px;transition:width 0.5s"></div>' +
        '</div>' +
        '<div id="hydro-pct" style="font-family:var(--font-display);font-size:0.85rem;color:#64748b">Hydration: 60%</div>' +
      '</div>' +
      '<div class="energy-options" style="grid-template-columns:1fr 1fr">' + btns + '</div>' +
      '<div id="hydro-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Add activities to your day.</div>' +
    '</div></div>';

  var level = 60;

  container.querySelectorAll('[data-water]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var delta = parseInt(btn.dataset.water);
      level = Math.max(0, Math.min(100, level + delta));
      document.getElementById('hydro-bar').style.width = level + '%';
      document.getElementById('hydro-bar').style.background = level > 50 ? 'linear-gradient(90deg,#0D9E75,#34d399)' : level > 25 ? 'linear-gradient(90deg,#f59e0b,#fbbf24)' : 'linear-gradient(90deg,#ef4444,#f97316)';
      document.getElementById('hydro-pct').textContent = 'Hydration: ' + level + '%';
      document.getElementById('hydro-emoji').textContent = level > 60 ? '😊' : level > 30 ? '😐' : '😫';
      var msgs = { 100: 'Well hydrated! Peak performance.', 75: 'Good hydration level – feeling strong.', 50: 'Starting to get low. Add some water.', 25: 'Significantly dehydrated – focus dropping.', 0: 'Critically dehydrated – this is dangerous.' };
      var nearest = Object.keys(msgs).reduce(function(a, b) { return Math.abs(b - level) < Math.abs(a - level) ? b : a; });
      document.getElementById('hydro-msg').textContent = msgs[nearest];
    });
  });
}

function renderHydroInfo(container) {
  renderInfoSlide(container, {
    title: 'Staying Hydrated',
    body: '<p>Your water needs vary based on activity, climate, and body size. A general guideline is <strong>8 cups (2 liters) per day</strong> – more if you exercise or live in a hot climate.</p><p>The best indicators of hydration: urine color (pale yellow = hydrated, dark yellow = drink more), energy levels, and concentration. If you are tired in the afternoon, try drinking water before assuming you need coffee.</p>',
    highlight: 'Sports drinks are useful after intense exercise lasting over an hour. For everything else, water is almost always the better choice – sports drinks add sugar without necessity.'
  });
}

/* ============================================
   Part 7: Tier 2 Slide Renderers
   ============================================ */

/* --- Module 2.1: Connected Systems --- */
function renderGasIntro(container) {
  renderInfoSlide(container, {
    title: 'Zooming Into the Lungs',
    body: '<p>You already know your lungs bring in oxygen and release CO2. Now let\'s zoom all the way in to where that actually happens: the <strong>alveoli</strong> – 480 million tiny air sacs, each surrounded by capillaries.</p><p>The walls of an alveolus are just one cell thick. That thinness is the entire point – it lets gases cross almost instantly.</p>',
    highlight: 'Alveoli walls are thinner than a sheet of tissue paper. This ultra-thin barrier is what makes gas exchange fast enough to keep you alive.'
  });
}

function renderGasExplore(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-explore">Explore</span>' +
    '<h2>Gas Exchange at the Alveolus</h2>' +
    '<p class="sim-instruction">Click each label to understand what is happening at each step.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:24px">' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:480px;margin:0 auto">' +
        '<div id="step-1" class="routing-btn" style="cursor:pointer;text-align:left;padding:14px;border-radius:12px">1. Air enters alveolus<br><small style="color:#64748b">O2 concentration rises</small></div>' +
        '<div id="step-2" class="routing-btn" style="cursor:pointer;text-align:left;padding:14px;border-radius:12px">2. O2 crosses membrane<br><small style="color:#64748b">Into red blood cells</small></div>' +
        '<div id="step-3" class="routing-btn" style="cursor:pointer;text-align:left;padding:14px;border-radius:12px">3. CO2 crosses back<br><small style="color:#64748b">Waste gas exits blood</small></div>' +
        '<div id="step-4" class="routing-btn" style="cursor:pointer;text-align:left;padding:14px;border-radius:12px">4. Air is exhaled<br><small style="color:#64748b">CO2 leaves the body</small></div>' +
      '</div>' +
      '<div id="gas-detail" style="padding:18px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;min-height:80px;font-size:0.88rem;color:#94a3b8;line-height:1.65">Click any step above to see the detailed explanation.</div>' +
    '</div></div>';

  var details = {
    'step-1': 'When you inhale, air rushes into the alveoli. Fresh air is about 21% oxygen – much higher than the blood arriving at the alveolus, which has just delivered O2 to cells. This concentration difference drives oxygen to cross.',
    'step-2': 'Oxygen diffuses across the one-cell-thick alveolar wall into the surrounding capillaries. There, it binds to hemoglobin inside red blood cells – turning them from dark red (deoxygenated) to bright red (oxygenated).',
    'step-3': 'Blood arriving at the alveolus carries high levels of CO2 – a waste product from cellular respiration. CO2 diffuses from the blood into the alveolus in the opposite direction from O2.',
    'step-4': 'When you exhale, the CO2-rich air is pushed out of your lungs. The exhaled air is about 4% CO2 – far more than the 0.04% in fresh air. This concentration gradient keeps CO2 constantly moving from blood to air.'
  };

  ['step-1','step-2','step-3','step-4'].forEach(function(id) {
    document.getElementById(id).addEventListener('click', function() {
      ['step-1','step-2','step-3','step-4'].forEach(function(sid) {
        document.getElementById(sid).classList.remove('correct');
      });
      document.getElementById(id).classList.add('correct');
      document.getElementById('gas-detail').textContent = details[id];
    });
  });
}

function renderGasInfo(container) {
  renderInfoSlide(container, {
    title: 'Diffusion: Nature\'s Delivery System',
    body: '<p>Gas exchange works through <strong>diffusion</strong> – gases naturally move from areas of high concentration to areas of low concentration. No energy required. No pumps needed.</p><p>Your body maintains this gradient by constantly using O2 (keeping blood O2 low) and producing CO2 (keeping blood CO2 high), so diffusion never stops.</p>',
    highlight: 'Oxygen saturation below 90% is a medical emergency. At that level, your cells begin to struggle to produce ATP – and brain cells begin dying within minutes.'
  });
}

/* --- Module 2.1: Blood Composition Drag --- */
function renderBloodIntro(container) {
  renderInfoSlide(container, {
    title: 'What\'s Actually in Your Blood?',
    body: '<p>Blood looks like a simple red liquid, but it is actually a complex mixture of cells, proteins, and fluid. Each component has a specific job – and losing any of them causes specific problems.</p><p>A blood test can reveal an enormous amount about your health because each component reflects different body systems.</p>',
    highlight: 'If you spun a blood sample in a centrifuge, it would separate into layers: red blood cells (45%), white blood cells and platelets (<1%), and plasma (55%).'
  });
}

function renderBloodDrag(container) {
  var items = [
    { name: 'Red Blood Cells', emoji: '📴', correct: 'rbc', hint: 'Carry oxygen via hemoglobin' },
    { name: 'White Blood Cells', emoji: '⚪', correct: 'wbc', hint: 'Immune defense soldiers' },
    { name: 'Platelets', emoji: '🟡', correct: 'platelets', hint: 'Form blood clots at wounds' },
    { name: 'Plasma', emoji: '🟤', correct: 'plasma', hint: 'Liquid that carries everything' }
  ];

  var bins = [
    { id: 'rbc', label: 'O2 Transport', emoji: '🫁' },
    { id: 'wbc', label: 'Immune Defense', emoji: '🛡️' },
    { id: 'platelets', label: 'Clotting', emoji: '🩹' },
    { id: 'plasma', label: 'Liquid Carrier', emoji: '💛' }
  ];

  var cards = items.map(function(item) {
    return '<div class="drag-card" draggable="true" data-name="' + item.name + '" data-correct="' + item.correct + '" title="' + item.hint + '">' + item.emoji + ' ' + item.name + '</div>';
  }).join('');

  var binHtml = bins.map(function(bin) {
    return '<div class="drag-bin" id="bin-' + bin.id + '" data-type="' + bin.id + '" style="min-height:80px">' +
      '<div class="drag-bin-emoji">' + bin.emoji + '</div>' +
      '<div class="drag-bin-label">' + bin.label + '</div>' +
      '<div class="drag-bin-items" id="items-' + bin.id + '"></div></div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-drag">Drag Activity</span>' +
    '<h2>Blood Composition</h2>' +
    '<p class="sim-instruction">Match each blood component to its function.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:0;padding:20px">' +
      '<div class="drag-cards" id="drag-cards">' + cards + '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px" id="multi-bins">' + binHtml + '</div>' +
      '<div id="drag-feedback" style="margin-top:12px;font-size:0.82rem;color:#64748b;text-align:center"></div>' +
    '</div></div>';

  var dragged = null;
  container.querySelectorAll('.drag-card').forEach(function(card) {
    card.addEventListener('dragstart', function() { dragged = card; setTimeout(function() { card.classList.add('dragging'); }, 0); });
    card.addEventListener('dragend', function() { card.classList.remove('dragging'); });
  });

  document.querySelectorAll('#multi-bins .drag-bin').forEach(function(bin) {
    bin.addEventListener('dragover', function(e) { e.preventDefault(); bin.classList.add('drag-over'); });
    bin.addEventListener('dragleave', function() { bin.classList.remove('drag-over'); });
    bin.addEventListener('drop', function(e) {
      e.preventDefault(); bin.classList.remove('drag-over');
      if (!dragged) return;
      var binType = bin.dataset.type;
      var correct = dragged.dataset.correct === binType;
      var chip = document.createElement('div');
      chip.className = 'drag-dropped ' + (correct ? 'correct' : 'incorrect');
      chip.textContent = dragged.dataset.name;
      bin.querySelector('.drag-bin-items').appendChild(chip);
      dragged.remove(); dragged = null;
      var fb = document.getElementById('drag-feedback');
      if (fb) fb.textContent = correct ? 'Correct! Good match.' : 'Not quite – think about what that component does in the body.';
    });
  });
}

function renderBloodInfo(container) {
  renderInfoSlide(container, {
    title: 'The River of Life',
    body: '<p>Blood is essentially a <strong>specialized transport system</strong>. Red blood cells carry oxygen (and remove CO2). White blood cells patrol for threats. Platelets seal wounds. Plasma carries nutrients, hormones, waste products, and antibodies.</p><p>A single drop of blood contains about 5 million red blood cells, 10,000 white blood cells, and 250,000 platelets – all produced in your bone marrow.</p>',
    highlight: 'Your body produces 2 million red blood cells every second. Each lives about 120 days, then is broken down by your spleen and recycled.'
  });
}

/* --- Module 2.1: Cardiac Response --- */
function renderCardiacIntro(container) {
  renderInfoSlide(container, {
    title: 'Your Heart Responds to Everything',
    body: '<p>Your heart does not just beat at one rate. It constantly adjusts – to your activity level, emotional state, temperature, and even the time of day. This responsiveness is controlled by your autonomic nervous system (the automatic part you do not consciously control).</p><p>In this simulation, you will compare your heart\'s recovery curve to that of a trained athlete – and understand what the difference reveals.</p>',
    highlight: 'Heart Rate Variability (HRV) – the slight variation in time between heartbeats – is actually a sign of a healthy heart. A perfectly regular heartbeat can indicate problems.'
  });
}

function renderCardiacSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Cardiac Response Curve</h2>' +
    '<p class="sim-instruction">Set your exercise intensity, then press Stop to see recovery. Compare to an athlete.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="heart-slider-row" style="width:100%;max-width:400px">' +
        '<div class="sim-slider-label"><span>Light jog</span><span>Full sprint</span></div>' +
        '<input type="range" class="sim-slider t2" id="cardiac-intensity" min="20" max="100" value="60">' +
      '</div>' +
      '<canvas id="cardiac-canvas" width="480" height="160" style="width:100%;border-radius:8px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
        '<button id="cardiac-go-btn" style="padding:10px 24px;background:rgba(83,74,183,0.3);border:1px solid rgba(83,74,183,0.5);color:#a78bfa;border-radius:100px;font-family:var(--font-display);font-size:0.85rem;cursor:pointer">Exercise</button>' +
        '<button id="cardiac-stop-btn" style="padding:10px 24px;background:rgba(13,158,117,0.2);border:1px solid rgba(13,158,117,0.4);color:#34d399;border-radius:100px;font-family:var(--font-display);font-size:0.85rem;cursor:pointer">Stop & Recover</button>' +
      '</div>' +
      '<div style="display:flex;gap:16px;justify-content:center;font-size:0.75rem;color:#64748b">' +
        '<span><span style="color:#a78bfa">–</span> You</span>' +
        '<span><span style="color:#34d399">–</span> Trained Athlete</span>' +
      '</div>' +
      '<div id="cardiac-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Set intensity and press Exercise, then Stop to see recovery curves.</div>' +
    '</div></div>';

  function drawCurves(phase, intensity) {
    var canvas = document.getElementById('cardiac-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var rest = 72, peak = 60 + intensity * 1.2;
    var pts = [], athletePts = [];
    if (phase === 'exercise') {
      for (var i = 0; i <= 10; i++) pts.push(rest + (peak - rest) * (i / 10));
      for (var j = 0; j <= 10; j++) athletePts.push(50 + (peak * 0.9 - 50) * (j / 10));
    } else {
      for (var k = 0; k <= 10; k++) pts.push(peak - (peak - rest) * Math.pow(k / 10, 0.6));
      for (var l = 0; l <= 10; l++) athletePts.push(peak * 0.9 - (peak * 0.9 - 48) * Math.pow(l / 10, 0.4));
    }
    var minV = 40, maxV = Math.max(peak * 1.1, 100);
    var step = (w - 40) / 10;

    function drawLine(pts, color) {
      var gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, color + '44'); gradient.addColorStop(1, color + '00');
      ctx.beginPath();
      ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
      pts.forEach(function(p, i) { if (i > 0) ctx.lineTo(30 + i * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
      ctx.lineTo(30 + 10 * step, h); ctx.lineTo(30, h); ctx.closePath();
      ctx.fillStyle = gradient; ctx.fill();
      ctx.strokeStyle = color; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
      pts.forEach(function(p, i) { if (i > 0) ctx.lineTo(30 + i * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
      ctx.stroke();
    }

    drawLine(pts, '#a78bfa');
    drawLine(athletePts, '#34d399');
    ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    var xLabels = phase === 'exercise' ? ['0s','','','','','30s'] : ['0s','','1min','','','3min'];
    xLabels.forEach(function(lbl, i) { ctx.fillText(lbl, 30 + (i / (xLabels.length - 1)) * 10 * step, h - 1); });
  }

  document.getElementById('cardiac-go-btn').addEventListener('click', function() {
    var intensity = parseInt(document.getElementById('cardiac-intensity').value);
    drawCurves('exercise', intensity);
    document.getElementById('cardiac-msg').textContent = 'Heart rates climbing. Athlete peaks slightly lower – their heart is more efficient. Press Stop to see recovery.';
  });

  document.getElementById('cardiac-stop-btn').addEventListener('click', function() {
    var intensity = parseInt(document.getElementById('cardiac-intensity').value);
    drawCurves('recover', intensity);
    document.getElementById('cardiac-msg').innerHTML = 'Recovery: the athlete\'s heart returns to baseline <strong style="color:#34d399">much faster</strong>. Training improves recovery rate – the heart becomes a more efficient pump.';
  });

  drawCurves('exercise', 60);
}

function renderCardiacInfo(container) {
  renderInfoSlide(container, {
    title: 'What Training Does to Your Heart',
    body: '<p>Regular aerobic exercise literally changes the structure of your heart. The left ventricle (the main pumping chamber) grows larger, allowing it to hold and pump <strong>more blood per beat</strong> – this is called increased stroke volume.</p><p>A trained heart pumps more blood with every beat, so it does not need to beat as fast. That is why athletes often have resting heart rates of 40-50 BPM, while untrained people average 70-80.</p>',
    highlight: 'Every time you do sustained cardiovascular exercise (anything that keeps your heart elevated for 20+ minutes), you are literally strengthening the heart muscle.'
  });
}

/* --- Module 2.2 & 2.3 brief renderers --- */
function renderMealIntro(container) {
  renderInfoSlide(container, {
    title: 'Macronutrients: The Big Three',
    body: '<p>Every food you eat contains some combination of three macronutrients: <strong>carbohydrates, proteins, and fats</strong>. Each gram of carbs and protein provides 4 calories of energy. Each gram of fat provides 9 calories.</p><p>Different activities have different macronutrient needs. A marathon runner needs very different fuel ratios than a powerlifter or a student sitting at a desk.</p>',
    highlight: 'There is no universally "best" macro ratio. The optimal balance depends on your activity level, goals, and health status.'
  });
}

function renderMealSim(container) {
  var foods = [
    { name: 'Chicken Breast', emoji: '🍖', carb: 0, pro: 30, fat: 3 },
    { name: 'Brown Rice', emoji: '🌾', carb: 45, pro: 5, fat: 2 },
    { name: 'Avocado', emoji: '🥑', carb: 8, pro: 2, fat: 21 },
    { name: 'Egg', emoji: '🥚', carb: 1, pro: 6, fat: 5 },
    { name: 'Banana', emoji: '🍌', carb: 27, pro: 1, fat: 0 },
    { name: 'Almonds', emoji: '🥜', carb: 6, pro: 6, fat: 14 }
  ];

  var btns = foods.map(function(f) {
    return '<button class="energy-btn" data-carb="' + f.carb + '" data-pro="' + f.pro + '" data-fat="' + f.fat + '" style="font-size:0.78rem">' + f.emoji + ' ' + f.name + '</button>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Build-a-Meal</h2>' +
    '<p class="sim-instruction">Add foods to build a meal and watch the macronutrient breakdown update live.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="energy-options" style="grid-template-columns:repeat(3,1fr)">' + btns + '</div>' +
      '<div style="width:100%">' +
        '<div style="display:flex;justify-content:space-between;font-size:0.75rem;color:#64748b;margin-bottom:6px">' +
          '<span>Carbs: <strong id="meal-carb" style="color:#f59e0b">0g</strong></span>' +
          '<span>Protein: <strong id="meal-pro" style="color:#ef4444">0g</strong></span>' +
          '<span>Fat: <strong id="meal-fat" style="color:#60a5fa">0g</strong></span>' +
        '</div>' +
        '<div style="display:flex;gap:2px;height:16px;border-radius:8px;overflow:hidden;background:rgba(255,255,255,0.05)" id="macro-bar">' +
          '<div id="carb-bar" style="background:#f59e0b;transition:width 0.4s;width:0%"></div>' +
          '<div id="pro-bar" style="background:#ef4444;transition:width 0.4s;width:0%"></div>' +
          '<div id="fat-bar" style="background:#60a5fa;transition:width 0.4s;width:0%"></div>' +
        '</div>' +
      '</div>' +
      '<div id="meal-msg" style="font-size:0.8rem;color:#64748b;text-align:center">Add foods to your meal to see the macro breakdown.</div>' +
    '</div></div>';

  var totals = { carb: 0, pro: 0, fat: 0 };

  container.querySelectorAll('[data-carb]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      totals.carb += parseInt(btn.dataset.carb);
      totals.pro += parseInt(btn.dataset.pro);
      totals.fat += parseInt(btn.dataset.fat);
      document.getElementById('meal-carb').textContent = totals.carb + 'g';
      document.getElementById('meal-pro').textContent = totals.pro + 'g';
      document.getElementById('meal-fat').textContent = totals.fat + 'g';
      var total = totals.carb + totals.pro + totals.fat || 1;
      document.getElementById('carb-bar').style.width = (totals.carb / total * 100) + '%';
      document.getElementById('pro-bar').style.width = (totals.pro / total * 100) + '%';
      document.getElementById('fat-bar').style.width = (totals.fat / total * 100) + '%';
      var msg = totals.pro > totals.carb ? 'High protein – great for muscle building and recovery.' :
        totals.carb > 60 ? 'High carb – good for endurance athletes before a race.' :
        totals.fat > 30 ? 'High fat, low carb – ketogenic style. Used for some metabolic conditions.' :
        'Balanced meal – solid general nutrition.';
      document.getElementById('meal-msg').textContent = msg;
    });
  });
}

function renderMealInfo(container) {
  renderInfoSlide(container, {
    title: 'Timing and Composition',
    body: '<p>What you eat before and after exercise matters. <strong>Before</strong>: carbohydrates provide readily available glucose for working muscles. <strong>After</strong>: protein is critical to repair micro-tears in muscle fibers (this is how muscles grow).</p><p>Fat is slower to digest and is best consumed at rest. Eating a high-fat meal right before exercise can cause digestive discomfort and sluggishness.</p>',
    highlight: 'The "anabolic window" – the post-workout period when muscles absorb protein most efficiently – is real, though less dramatic than supplement marketing suggests. Getting protein within 2 hours of exercise is a solid target.'
  });
}

function renderATPIntro(container) {
  renderInfoSlide(container, {
    title: 'How Food Becomes Energy',
    body: '<p>Your cells cannot run directly on glucose, fat, or protein. They need to convert those fuels into a universal energy currency: <strong>ATP</strong> (adenosine triphosphate).</p><p>Every time a cell needs to do work – contract a muscle, fire a nerve signal, build a protein – it breaks down ATP. The energy from that break powers the work. Then your cell rebuilds ATP using whatever fuel is available.</p>',
    highlight: 'You use and regenerate your own body weight in ATP every day. A single red blood cell creates and destroys ATP 150 times per second.'
  });
}

function renderATPSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The ATP Factory</h2>' +
    '<p class="sim-instruction">Drag the glucose input slider to control how much fuel enters the cell. Watch ATP output change.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px;padding:24px">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;width:100%;max-width:460px;gap:20px">' +
        '<div style="text-align:center">' +
          '<div style="font-size:2.5rem">🍬</div>' +
          '<div style="font-size:0.7rem;color:#64748b;margin-top:4px">Glucose In</div>' +
          '<div style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:#f59e0b" id="atp-glucose">50%</div>' +
        '</div>' +
        '<div style="flex:1;text-align:center;font-size:2rem">→</div>' +
        '<div style="text-align:center;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px">' +
          '<div style="font-size:1.8rem">⚡</div>' +
          '<div style="font-size:0.7rem;color:#64748b">ATP Factory</div>' +
          '<div style="font-size:0.65rem;color:#475569">Krebs Cycle</div>' +
        '</div>' +
        '<div style="flex:1;text-align:center;font-size:2rem">→</div>' +
        '<div style="text-align:center">' +
          '<div style="font-size:2.5rem">⚡</div>' +
          '<div style="font-size:0.7rem;color:#64748b;margin-top:4px">ATP Out</div>' +
          '<div style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:#34d399" id="atp-output">36</div>' +
        '</div>' +
      '</div>' +
      '<input type="range" class="sim-slider t2" id="atp-slider" min="0" max="100" value="50" style="width:100%;max-width:400px">' +
      '<div id="atp-msg" style="font-size:0.82rem;color:#64748b;text-align:center;max-width:380px">Adjust glucose input and watch ATP output respond.</div>' +
    '</div></div>';

  document.getElementById('atp-slider').addEventListener('input', function() {
    var val = parseInt(this.value);
    document.getElementById('atp-glucose').textContent = val + '%';
    var atp = Math.round(val * 0.36);
    document.getElementById('atp-output').textContent = atp;
    var msg = val < 20 ? 'Low glucose: cells switch to fat burning. Slower but sustainable.' :
      val < 60 ? 'Moderate glucose: efficient ATP production – optimal zone.' :
      val < 90 ? 'High glucose: all ATP needs met, excess stored as glycogen.' :
      'Excess glucose: storage full, now converting to fat. Long-term high intake = fat gain.';
    document.getElementById('atp-msg').textContent = msg;
  });
}

function renderATPInfo(container) {
  renderInfoSlide(container, {
    title: 'Cellular Respiration in Plain English',
    body: '<p>The process your cells use to make ATP from glucose is called <strong>cellular respiration</strong>. In short: glucose + oxygen → ATP + CO2 + water. That CO2 is what you breathe out. That water contributes to your body\'s fluid balance.</p><p>When oxygen is not available fast enough (during very intense exercise), cells can make ATP without oxygen – but this produces lactic acid, which causes the burning sensation in your muscles.</p>',
    highlight: 'Lactic acid is not the villain – it\'s actually recycled back into fuel within minutes. The "burn" you feel is from hydrogen ions, not lactic acid itself. Sports science has revised this significantly in recent decades.'
  });
}

function renderGlucoseIntro(container) {
  renderInfoSlide(container, {
    title: 'The Insulin Circuit',
    body: '<p>After you eat carbohydrates, glucose enters your bloodstream. Your pancreas detects the rise and releases <strong>insulin</strong> – a hormone that acts like a key, unlocking cells so they can absorb the glucose.</p><p>Once absorbed, cells use it for immediate energy (ATP) or store it as glycogen in liver and muscle. If glycogen stores are full, the excess becomes fat.</p>',
    highlight: 'Type 2 diabetes develops when cells stop responding normally to insulin (insulin resistance). The pancreas produces more and more insulin trying to compensate – eventually it burns out.'
  });
}

function renderGlucoseSim(container) {
  var meals = [
    { name: 'Candy Breakfast', emoji: '🍬', glucose: [90,95,65,40,35,38], insulin: [85,90,70,30,20,18], color: '#ef4444' },
    { name: 'Eggs + Oats', emoji: '🥚', glucose: [50,58,62,58,54,50], insulin: [45,52,55,50,45,40], color: '#22c55e' }
  ];

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The Glucose Spike</h2>' +
    '<p class="sim-instruction">Compare the glucose (solid) and insulin (dashed) curves for two different breakfasts.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="energy-options">' +
        '<button class="energy-btn" data-meal="0">🍬 Candy Breakfast</button>' +
        '<button class="energy-btn" data-meal="1">🥚 Eggs + Oats</button>' +
      '</div>' +
      '<canvas id="glucose-canvas" width="480" height="160" style="width:100%;border-radius:8px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div style="display:flex;gap:16px;justify-content:center;font-size:0.75rem;color:#64748b">' +
        '<span>– Glucose</span><span>- - Insulin</span>' +
      '</div>' +
      '<div id="glucose-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Select a meal to compare glucose and insulin responses.</div>' +
    '</div></div>';

  function drawGlucose(mealIdx) {
    var canvas = document.getElementById('glucose-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var meal = meals[mealIdx];
    var pts = meal.glucose, ins = meal.insulin;
    var minV = 0, maxV = 100;
    var step = (w - 40) / (pts.length - 1);

    function drawLine(data, color, dashed) {
      ctx.strokeStyle = color; ctx.lineWidth = 2.5;
      ctx.setLineDash(dashed ? [6, 4] : []);
      ctx.beginPath();
      ctx.moveTo(30, h - ((data[0] - minV) / (maxV - minV)) * (h - 20) - 10);
      data.forEach(function(p, i) { if (i > 0) ctx.lineTo(30 + i * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
      ctx.stroke(); ctx.setLineDash([]);
    }
    drawLine(pts, meal.color, false);
    drawLine(ins, meal.color + '99', true);
    var msgs = ['Sugar spike then crash – notice how insulin shoots up even higher, pulling glucose below baseline. That\'s the energy crash.', 'Steady glucose = steady insulin. No spike, no crash. Both curves stay in the healthy range all morning.'];
    document.getElementById('glucose-msg').textContent = msgs[mealIdx];
  }

  container.querySelectorAll('[data-meal]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('[data-meal]').forEach(function(b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      drawGlucose(parseInt(btn.dataset.meal));
    });
  });
}

function renderGlucoseInfo(container) {
  renderInfoSlide(container, {
    title: 'Why the Insulin Curve Matters',
    body: '<p>When insulin stays chronically elevated – due to a consistently high-sugar diet – cells start to down-regulate their insulin receptors. They become <strong>less sensitive</strong>. The pancreas compensates by producing even more insulin. This is the beginning of insulin resistance.</p><p>Over years, this cycle exhausts the pancreas and eventually leads to type 2 diabetes. The good news: insulin resistance is largely reversible through diet change and exercise.</p>',
    highlight: 'Physical activity dramatically improves insulin sensitivity – muscles actively absorb glucose during and after exercise, without needing insulin. This is why exercise is one of the most powerful interventions for metabolic health.'
  });
}

/* --- Module 2.3: Immunity --- */
function renderRaceIntro(container) {
  renderInfoSlide(container, {
    title: 'Two Immune Systems in One',
    body: '<p>Your immune system actually has two distinct components that work in series. The <strong>innate immune system</strong> is ancient, fast, and non-specific – it attacks anything foreign. The <strong>adaptive immune system</strong> is newer (evolutionarily), slower to start, but incredibly precise.</p><p>Together, they create a defense system that responds immediately while also building long-term, targeted protection.</p>',
    highlight: 'The innate immune system evolved over 500 million years ago. The adaptive system is about 500 million years newer – it only exists in vertebrates.'
  });
}

function renderRaceSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The Two-Lane Race</h2>' +
    '<p class="sim-instruction">Watch both immune systems race to clear an infection. Then trigger a second infection to see the memory effect.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:24px">' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:460px;margin:0 auto">' +
        '<div style="background:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.2);border-radius:14px;padding:16px;text-align:center">' +
          '<div style="font-size:1.5rem">⚡</div>' +
          '<div style="font-family:var(--font-display);font-size:0.82rem;font-weight:600;color:#fb923c;margin:6px 0">Innate Immune</div>' +
          '<div style="font-size:0.75rem;color:#64748b">Fast Â· Non-specific</div>' +
          '<div id="innate-progress" style="height:8px;background:rgba(255,255,255,0.08);border-radius:100px;margin-top:10px;overflow:hidden"><div style="height:100%;width:0%;background:#fb923c;border-radius:100px;transition:width 0.3s" id="innate-bar"></div></div>' +
          '<div id="innate-status" style="font-size:0.72rem;color:#64748b;margin-top:6px">Waiting...</div>' +
        '</div>' +
        '<div style="background:rgba(83,74,183,0.1);border:1px solid rgba(83,74,183,0.2);border-radius:14px;padding:16px;text-align:center">' +
          '<div style="font-size:1.5rem">🎯</div>' +
          '<div style="font-family:var(--font-display);font-size:0.82rem;font-weight:600;color:#a78bfa;margin:6px 0">Adaptive Immune</div>' +
          '<div style="font-size:0.75rem;color:#64748b">Slow Â· Precise Â· Memory</div>' +
          '<div id="adaptive-progress" style="height:8px;background:rgba(255,255,255,0.08);border-radius:100px;margin-top:10px;overflow:hidden"><div style="height:100%;width:0%;background:#a78bfa;border-radius:100px;transition:width 0.3s" id="adaptive-bar"></div></div>' +
          '<div id="adaptive-status" style="font-size:0.72rem;color:#64748b;margin-top:6px">Building response...</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button id="race-start-btn" style="padding:10px 24px;background:rgba(83,74,183,0.25);border:1px solid rgba(83,74,183,0.4);color:#a78bfa;border-radius:100px;font-family:var(--font-display);font-size:0.85rem;cursor:pointer">First Infection</button>' +
        '<button id="race-second-btn" style="padding:10px 24px;background:rgba(13,158,117,0.15);border:1px solid rgba(13,158,117,0.3);color:#34d399;border-radius:100px;font-family:var(--font-display);font-size:0.85rem;cursor:pointer" disabled>Second Infection</button>' +
      '</div>' +
      '<div id="race-msg" style="font-size:0.82rem;color:#64748b;text-align:center;max-width:380px;margin:0 auto">Press First Infection to start the race.</div>' +
    '</div></div>';

  function animateRace(fast) {
    var innateBar = document.getElementById('innate-bar');
    var adaptiveBar = document.getElementById('adaptive-bar');
    var innateStatus = document.getElementById('innate-status');
    var adaptiveStatus = document.getElementById('adaptive-status');
    innateBar.style.width = '0%'; adaptiveBar.style.width = '0%';
    var innate = 0, adaptive = 0;
    var innateSpeed = 8, adaptiveSpeed = fast ? 25 : 3;

    innateStatus.textContent = 'Deploying general defenders...';
    adaptiveStatus.textContent = fast ? 'Memory cells activating!' : 'Identifying pathogen...';

    var interval = setInterval(function() {
      innate = Math.min(100, innate + innateSpeed);
      adaptive = Math.min(100, adaptive + adaptiveSpeed);
      innateBar.style.width = innate + '%';
      adaptiveBar.style.width = adaptive + '%';
      if (innate >= 100) innateStatus.textContent = fast ? 'Infection contained!' : 'Partial containment only.';
      if (adaptive >= 100) {
        adaptiveStatus.textContent = fast ? 'Obliterated instantly!' : 'Pathogen eliminated!';
        clearInterval(interval);
        document.getElementById('race-second-btn').disabled = false;
        if (fast) {
          document.getElementById('race-msg').textContent = 'Memory cells crushed the infection before you even felt sick. That\'s the power of immunological memory.';
        } else {
          document.getElementById('race-msg').textContent = 'First infection: innate responds fast but roughly; adaptive is slow but precise. Together they win. And now you have memory cells for next time.';
        }
      }
    }, 100);
  }

  document.getElementById('race-start-btn').addEventListener('click', function() {
    this.disabled = true;
    animateRace(false);
  });
  document.getElementById('race-second-btn').addEventListener('click', function() {
    this.disabled = true;
    animateRace(true);
  });
}

function renderRaceInfo(container) {
  renderInfoSlide(container, {
    title: 'The Memory That Protects You',
    body: '<p>After the adaptive immune system defeats a pathogen, it does not dismantle everything. It keeps a small population of <strong>memory B cells and T cells</strong> – long-lived cells specifically primed for that pathogen.</p><p>Years later, if that same pathogen reappears, those memory cells recognize it immediately and trigger a response so fast you never develop symptoms. This is why you only get chickenpox once.</p>',
    highlight: 'Some memory cells last a lifetime. Research has found memory B cells for the 1918 Spanish flu virus in survivors who lived to be over 100 – 90 years after the infection.'
  });
}

function renderVaccineIntro(container) {
  renderInfoSlide(container, {
    title: 'Training Without Getting Sick',
    body: '<p>Vaccines are a technological shortcut to immunological memory. Instead of getting sick with the real pathogen, you are introduced to a <strong>safe version</strong> – a weakened pathogen, a protein fragment, or (in the case of mRNA vaccines) instructions for your cells to make one specific viral protein.</p><p>Your immune system cannot tell the difference between a practice drill and the real thing. It builds memory just the same.</p>',
    highlight: 'mRNA vaccines do NOT alter your DNA. mRNA is instructions, not genetic material. It is used by cells to make a protein, then degraded within days – never entering the nucleus where DNA lives.'
  });
}

function renderVaccineSim(container) {
  var stages = [
    { icon: '💉', title: 'Vaccine Administered', desc: 'A weakened or partial version of the pathogen enters your body. Your immune system detects foreign antigens.' },
    { icon: '📍', title: 'Antigen Detected', desc: 'Dendritic cells capture the antigen and carry it to lymph nodes. They present it to naive T-cells and B-cells.' },
    { icon: '⚀-️', title: 'Antibody Production', desc: 'B-cells begin producing antibodies specific to this antigen. Factories spinning up – first response takes 1-2 weeks.' },
    { icon: '🧬', title: 'Memory Cells Formed', desc: 'A subset of activated B and T cells become memory cells. They will patrol your body for years or decades.' },
    { icon: '🛡️', title: 'Protected', desc: 'If the real pathogen now enters, memory cells recognize it instantly. Antibodies flood the bloodstream within hours – infection cleared before you feel sick.' }
  ];

  var stageIdx = 0;

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The Vaccine Lab</h2>' +
    '<p class="sim-instruction">Step through the vaccination process to see what happens inside your body.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:24px">' +
      '<div id="vaccine-stage" class="vaccine-stage">' +
        '<div class="vaccine-stage-icon">' + stages[0].icon + '</div>' +
        '<div class="vaccine-stage-title">' + stages[0].title + '</div>' +
        '<div class="vaccine-stage-desc">' + stages[0].desc + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:6px;justify-content:center">' +
        stages.map(function(_, i) {
          return '<div class="lesson-dot' + (i === 0 ? ' active' : '') + '" id="vaccine-dot-' + i + '"></div>';
        }).join('') +
      '</div>' +
      '<button id="vaccine-next-btn" class="vaccine-btn">' + (stages.length > 1 ? 'Next Step →' : 'Protected!') + '</button>' +
    '</div></div>';

  document.getElementById('vaccine-next-btn').addEventListener('click', function() {
    stageIdx = Math.min(stages.length - 1, stageIdx + 1);
    var stage = stages[stageIdx];
    var stageEl = document.getElementById('vaccine-stage');
    stageEl.style.opacity = '0';
    setTimeout(function() {
      stageEl.innerHTML = '<div class="vaccine-stage-icon">' + stage.icon + '</div><div class="vaccine-stage-title">' + stage.title + '</div><div class="vaccine-stage-desc">' + stage.desc + '</div>';
      stageEl.style.opacity = '1'; stageEl.style.transition = 'opacity 0.3s';
    }, 150);
    stages.forEach(function(_, i) {
      var dot = document.getElementById('vaccine-dot-' + i);
      dot.className = 'lesson-dot' + (i < stageIdx ? ' done' : i === stageIdx ? ' active' : '');
    });
    if (stageIdx === stages.length - 1) {
      document.getElementById('vaccine-next-btn').textContent = 'Complete!';
      document.getElementById('vaccine-next-btn').disabled = true;
    }
  });
}

function renderVaccineInfo(container) {
  renderInfoSlide(container, {
    title: 'Why Some Vaccines Need Boosters',
    body: '<p>Not all vaccine-generated immunity lasts forever. Some vaccines (like MMR for measles) create lifelong immunity. Others (like flu shots) need annual updates because the pathogen mutates rapidly, making last year\'s memory cells less effective.</p><p>Boosters reactivate memory cells and can dramatically strengthen immunity – especially in older adults whose immune systems become less responsive over time.</p>',
    highlight: 'Childhood vaccines have eliminated or nearly eliminated diseases that killed millions annually: smallpox, polio, measles, diphtheria. Vaccination is one of the most impactful public health interventions in human history.'
  });
}

function renderHerdIntro(container) {
  renderInfoSlide(container, {
    title: 'Herd Immunity: Protection Through Math',
    body: '<p>Herd immunity is a fascinating mathematical phenomenon: when a large enough fraction of a population is immune to a disease, the pathogen cannot find enough susceptible hosts to sustain an outbreak – protecting even those who cannot be vaccinated.</p><p>The required immunity threshold depends on how contagious the disease is. For measles (R0 ~ 15), you need about 95% immunity. For flu (R0 ~ 2-3), around 50-67%.</p>',
    highlight: 'People who cannot be vaccinated (newborns, immunocompromised patients, some allergy cases) rely entirely on herd immunity for protection. Community vaccination protects these most vulnerable members.'
  });
}

function renderHerdSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Herd Immunity Network</h2>' +
    '<p class="sim-instruction">Adjust vaccination rate, then introduce the pathogen. Find the threshold where unvaccinated people stay safe.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div class="herd-controls">' +
        '<div class="sim-slider-label"><span>Vaccination rate: <strong id="herd-vax-pct" style="color:#34d399">60%</strong></span></div>' +
        '<input type="range" class="sim-slider" id="herd-slider" min="0" max="100" value="60">' +
      '</div>' +
      '<div class="herd-grid" id="herd-grid"></div>' +
      '<div class="herd-stats">' +
        '<span>Vaccinated: <span class="herd-stat-val" id="herd-vax-count">0</span></span>' +
        '<span>Infected: <span class="herd-stat-val" id="herd-inf-count" style="color:#ef4444">0</span></span>' +
        '<span>Safe: <span class="herd-stat-val" id="herd-safe-count" style="color:#34d399">0</span></span>' +
      '</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button id="herd-btn" style="padding:10px 24px;background:rgba(83,74,183,0.25);border:1px solid rgba(83,74,183,0.4);color:#a78bfa;border-radius:100px;font-family:var(--font-display);font-size:0.85rem;cursor:pointer">Introduce Pathogen</button>' +
        '<button id="herd-reset-btn" style="padding:10px 20px;background:transparent;border:1px solid rgba(255,255,255,0.1);color:#64748b;border-radius:100px;font-family:var(--font-display);font-size:0.82rem;cursor:pointer">Reset</button>' +
      '</div>' +
      '<div id="herd-msg" style="font-size:0.82rem;color:#64748b;text-align:center;max-width:380px;margin:0 auto">Adjust vaccination rate, then introduce the pathogen to see spread.</div>' +
    '</div></div>';

  var people = [];

  function buildGrid() {
    var grid = document.getElementById('herd-grid');
    var vaxPct = parseInt(document.getElementById('herd-slider').value);
    grid.innerHTML = ''; people = [];
    for (var i = 0; i < 50; i++) {
      var vaccinated = i < Math.round(50 * vaxPct / 100);
      var person = document.createElement('div');
      person.className = 'herd-person' + (vaccinated ? ' vaccinated' : '');
      person.textContent = vaccinated ? '😊' : '🙂';
      person.dataset.vaccinated = vaccinated ? '1' : '0';
      person.dataset.status = vaccinated ? 'vaccinated' : 'susceptible';
      grid.appendChild(person);
      people.push(person);
    }
    document.getElementById('herd-vax-count').textContent = Math.round(50 * vaxPct / 100);
    document.getElementById('herd-inf-count').textContent = 0;
    document.getElementById('herd-safe-count').textContent = 50 - Math.round(50 * vaxPct / 100);
  }

  document.getElementById('herd-slider').addEventListener('input', function() {
    document.getElementById('herd-vax-pct').textContent = this.value + '%';
    buildGrid();
  });

  document.getElementById('herd-reset-btn').addEventListener('click', buildGrid);

  document.getElementById('herd-btn').addEventListener('click', function() {
    var susceptible = people.filter(function(p) { return p.dataset.status === 'susceptible'; });
    if (susceptible.length === 0) {
      document.getElementById('herd-msg').textContent = '100% vaccinated – the pathogen cannot find a host. Complete herd immunity.';
      return;
    }
    var start = susceptible[Math.floor(Math.random() * susceptible.length)];
    var infected = [start];
    start.classList.add('infected');
    start.textContent = '🤧';
    start.dataset.status = 'infected';

    var round = 0;
    var interval = setInterval(function() {
      round++;
      var newInfected = [];
      infected.forEach(function(person) {
        var idx = people.indexOf(person);
        [-1, 1, -10, 10].forEach(function(offset) {
          var neighborIdx = idx + offset;
          if (neighborIdx < 0 || neighborIdx >= people.length) return;
          var neighbor = people[neighborIdx];
          if (neighbor.dataset.status === 'susceptible' && Math.random() < 0.55) {
            neighbor.classList.add('infected');
            neighbor.textContent = '🤧';
            neighbor.dataset.status = 'infected';
            newInfected.push(neighbor);
          }
        });
      });
      infected = newInfected;
      var infCount = people.filter(function(p) { return p.dataset.status === 'infected'; }).length;
      document.getElementById('herd-inf-count').textContent = infCount;
      if (newInfected.length === 0 || round > 10) {
        clearInterval(interval);
        var safe = people.filter(function(p) { return p.dataset.status === 'susceptible'; }).length;
        document.getElementById('herd-safe-count').textContent = safe;
        var vaxPct = parseInt(document.getElementById('herd-slider').value);
        if (safe > 0 && vaxPct >= 70) {
          document.getElementById('herd-msg').innerHTML = 'Some unvaccinated people stayed safe because they were surrounded by vaccinated neighbors. <strong style="color:#34d399">That\'s herd immunity.</strong>';
        } else if (vaxPct < 50) {
          document.getElementById('herd-msg').textContent = 'Low vaccination rate – the pathogen spread widely. Unvaccinated people had little protection.';
        } else {
          document.getElementById('herd-msg').textContent = 'Try adjusting the slider to find the threshold where unvaccinated people are consistently protected.';
        }
      }
    }, 600);
  });

  buildGrid();
}

function renderHerdInfo(container) {
  renderInfoSlide(container, {
    title: 'The Threshold Effect',
    body: '<p>Herd immunity is not just about whether individuals are protected – it is about breaking the chain of transmission. Below the threshold, pathogens spread exponentially. Above it, they cannot sustain transmission and die out.</p><p>This threshold is different for every disease and is determined by the basic reproduction number (R0) – how many people one infected person infects on average in a completely susceptible population.</p>',
    highlight: 'Measles has an R0 of 12-18 – one of the most contagious diseases known. COVID-19 original strain had an R0 of ~2.5; Omicron variant was ~8-15, explaining why it required much higher immunity to stop.'
  });
}

/* ============================================
   Part 8: Tier 3 Slide Renderers
   ============================================ */

/* --- Module 3.1: Cardiovascular Health --- */
function renderBPIntro(container) {
  renderInfoSlide(container, {
    title: 'Reading Your Blood Pressure',
    body: '<p>Blood pressure is the force your blood exerts on artery walls as your heart pumps. It is reported as two numbers: <strong>systolic over diastolic</strong> (e.g. 120/80). Both numbers matter and together they tell a story about cardiovascular strain.</p><p>High blood pressure is called the "silent killer" because it usually has no symptoms – but silently damages arteries, the heart, kidneys, and brain over years.</p>',
    highlight: 'Nearly half of American adults have high blood pressure. Only about 1 in 4 of those have it under control. It is the leading risk factor for stroke and a major risk for heart attack.'
  });
}

function renderBPSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-explore">Interactive</span>' +
    '<h2>Blood Pressure Meter</h2>' +
    '<p class="sim-instruction">Adjust the systolic and diastolic values to explore the different risk tiers.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:20px;padding:24px">' +
      '<div class="bp-display">' +
        '<div class="bp-reading" id="bp-reading">120/80</div>' +
        '<div class="bp-label">mmHg</div>' +
        '<div class="bp-risk-badge bp-risk-healthy" id="bp-badge">Normal</div>' +
      '</div>' +
      '<div class="bp-sliders">' +
        '<div>' +
          '<div class="sim-slider-label"><span>Systolic (top)</span><span id="sys-val" style="color:#f8fafc;font-weight:600">120</span></div>' +
          '<input type="range" class="sim-slider t3" id="bp-sys" min="90" max="200" value="120">' +
        '</div>' +
        '<div>' +
          '<div class="sim-slider-label"><span>Diastolic (bottom)</span><span id="dia-val" style="color:#f8fafc;font-weight:600">80</span></div>' +
          '<input type="range" class="sim-slider t3" id="bp-dia" min="50" max="130" value="80">' +
        '</div>' +
      '</div>' +
      '<div id="bp-desc" style="font-size:0.82rem;color:#64748b;text-align:center;max-width:380px;margin:0 auto">Normal blood pressure. Heart and arteries under healthy load.</div>' +
    '</div></div>';

  function updateBP() {
    var sys = parseInt(document.getElementById('bp-sys').value);
    var dia = parseInt(document.getElementById('bp-dia').value);
    document.getElementById('sys-val').textContent = sys;
    document.getElementById('dia-val').textContent = dia;
    document.getElementById('bp-reading').textContent = sys + '/' + dia;
    var badge = document.getElementById('bp-badge');
    var desc = document.getElementById('bp-desc');
    if (sys < 120 && dia < 80) {
      badge.className = 'bp-risk-badge bp-risk-healthy'; badge.textContent = 'Normal';
      desc.textContent = 'Healthy blood pressure. Keep it up with regular exercise, low sodium intake, and stress management.';
    } else if ((sys >= 120 && sys <= 129) && dia < 80) {
      badge.className = 'bp-risk-badge bp-risk-elevated'; badge.textContent = 'Elevated';
      desc.textContent = 'Elevated but not yet high blood pressure. Lifestyle changes (diet, exercise) can bring this back to normal.';
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      badge.className = 'bp-risk-badge bp-risk-high1'; badge.textContent = 'High Stage 1';
      desc.textContent = 'Stage 1 hypertension. Doctor will likely recommend lifestyle changes. Medication may be considered based on other risk factors.';
    } else if (sys >= 140 || dia >= 90) {
      badge.className = 'bp-risk-badge bp-risk-high2'; badge.textContent = 'High Stage 2';
      desc.textContent = 'Stage 2 hypertension. Medication typically required alongside lifestyle changes. Significant cardiovascular risk if untreated.';
    }
    if (sys > 180 || dia > 120) {
      badge.className = 'bp-risk-badge bp-risk-crisis'; badge.textContent = 'Hypertensive Crisis';
      desc.textContent = 'This is a medical emergency. Readings this high require immediate medical attention – risk of stroke, heart attack, or organ damage.';
    }
  }

  ['bp-sys','bp-dia'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', updateBP);
  });
  updateBP();
}

function renderBPInfo(container) {
  renderInfoSlide(container, {
    title: 'Why Blood Pressure Damages Arteries',
    body: '<p>Arteries are designed to handle normal blood pressure. But chronically high pressure is like constantly over-inflating a tire – the walls stretch, develop tiny tears, and inflammation sets in at those tear sites.</p><p>Those inflammatory sites become landing zones for cholesterol deposits, beginning the process of <strong>atherosclerosis</strong> – the slow buildup of plaque that eventually narrows or blocks arteries.</p>',
    highlight: 'The good news: blood pressure responds remarkably quickly to lifestyle changes. Regular exercise, reduced sodium intake, adequate sleep, and stress reduction can lower systolic pressure by 5-15 mmHg – enough to significantly reduce stroke risk.'
  });
}

/* --- Module 3.1: Artery Time-Lapse --- */
function renderArteryIntro(container) {
  renderInfoSlide(container, {
    title: 'Atherosclerosis: A Decades-Long Process',
    body: '<p>Atherosclerosis does not happen overnight. It begins silently in early adulthood – sometimes even childhood – and progresses over decades. By the time a heart attack occurs, the underlying disease has typically been developing for 20-40 years.</p><p>In the next simulation, you will set lifestyle variables and watch plaque accumulate over a compressed lifetime.</p>',
    highlight: 'Autopsies of 20-year-old soldiers killed in the Korean War (1950s) found significant atherosclerosis in many of them – revealing that this is not purely an old-age disease.'
  });
}

function renderArterySim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Artery Time-Lapse</h2>' +
    '<p class="sim-instruction">Set lifestyle variables, then watch decades of arterial changes in seconds.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:460px;margin:0 auto">' +
        '<div><div class="sim-slider-label"><span>Diet Quality</span><span id="artery-diet-val" style="color:#34d399">Good</span></div>' +
        '<input type="range" class="sim-slider t3" id="artery-diet" min="0" max="100" value="70"></div>' +
        '<div><div class="sim-slider-label"><span>Exercise</span><span id="artery-exercise-val" style="color:#34d399">Regular</span></div>' +
        '<input type="range" class="sim-slider t3" id="artery-exercise" min="0" max="100" value="70"></div>' +
        '<div><div class="sim-slider-label"><span>Smoking</span><span id="artery-smoke-val" style="color:#34d399">None</span></div>' +
        '<input type="range" class="sim-slider t3" id="artery-smoke" min="0" max="100" value="0"></div>' +
        '<div><div class="sim-slider-label"><span>Stress Level</span><span id="artery-stress-val" style="color:#34d399">Low</span></div>' +
        '<input type="range" class="sim-slider t3" id="artery-stress" min="0" max="100" value="30"></div>' +
      '</div>' +
      '<canvas id="artery-canvas" width="480" height="100" style="width:100%;border-radius:12px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div id="artery-age-label" style="font-family:var(--font-display);font-size:0.8rem;color:#64748b;text-align:center">Age: 20</div>' +
      '<button id="artery-play-btn" style="padding:10px 28px;background:rgba(216,90,48,0.2);border:1px solid rgba(216,90,48,0.4);color:#fb923c;border-radius:100px;font-family:var(--font-display);font-size:0.88rem;cursor:pointer">Play Time-Lapse (Age 20 → 60)</button>' +
      '<div id="artery-msg" style="font-size:0.82rem;color:#64748b;text-align:center;max-width:380px;margin:0 auto">Set your lifestyle variables, then press play.</div>' +
    '</div></div>';

  function getRiskScore() {
    var diet = 100 - parseInt(document.getElementById('artery-diet').value);
    var exercise = 100 - parseInt(document.getElementById('artery-exercise').value);
    var smoke = parseInt(document.getElementById('artery-smoke').value);
    var stress = parseInt(document.getElementById('artery-stress').value);
    return (diet * 0.25 + exercise * 0.2 + smoke * 0.4 + stress * 0.15) / 100;
  }

  function drawArtery(plaquePct) {
    var canvas = document.getElementById('artery-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var lumenTop = h * 0.2, lumenBot = h * 0.8;
    ctx.fillStyle = '#1e293b'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#334155'; ctx.fillRect(0, lumenTop, w, lumenBot - lumenTop);
    if (plaquePct > 0) {
      var plaqueH = (lumenBot - lumenTop) * plaquePct * 0.7;
      var gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, '#ca8a04'); gradient.addColorStop(1, '#92400e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, lumenTop, w, plaqueH);
      ctx.fillRect(0, lumenBot - plaqueH, w, plaqueH);
    }
    var openH = (lumenBot - lumenTop) * (1 - plaquePct * 0.7);
    var openY = lumenTop + (lumenBot - lumenTop) * plaquePct * 0.35;
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.ellipse(w * 0.3, openY + openH / 2, 12, openH / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(220,38,38,0.3)';
    ctx.fillRect(0, openY, w, openH);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.font = '11px var(--font-display)';
    ctx.textAlign = 'left';
    ctx.fillText('Lumen (blood flow): ' + Math.round((1 - plaquePct * 0.7) * 100) + '%', 8, h - 6);
  }

  var labels = { 'artery-diet': ['Poor','Fair','Good','Excellent'], 'artery-exercise': ['None','Light','Regular','Athlete'], 'artery-smoke': ['None','Light','Heavy','Very Heavy'], 'artery-stress': ['Low','Moderate','High','Severe'] };

  Object.keys(labels).forEach(function(id) {
    document.getElementById(id).addEventListener('input', function() {
      var val = parseInt(this.value);
      var lblArr = labels[id];
      var lblEl = document.getElementById(id + '-val');
      var lbl = lblArr[Math.floor(val / 25)];
      lblEl.textContent = lbl;
      var risk = (id === 'artery-diet' || id === 'artery-exercise') ? val < 40 : val > 60;
      lblEl.style.color = risk ? '#f87171' : '#34d399';
      drawArtery(0);
    });
  });

  document.getElementById('artery-play-btn').addEventListener('click', function() {
    var btn = this;
    btn.disabled = true;
    var risk = getRiskScore();
    var age = 20, maxAge = 60;
    var ageLabel = document.getElementById('artery-age-label');
    var interval = setInterval(function() {
      age += 2;
      var progress = (age - 20) / (maxAge - 20);
      var plaque = progress * risk;
      drawArtery(plaque);
      ageLabel.textContent = 'Age: ' + age;
      if (age >= maxAge) {
        clearInterval(interval);
        btn.disabled = false;
        var msg = plaque > 0.5 ? 'Significant plaque buildup – high heart attack risk. The good news: lifestyle changes can slow and partially reverse this.' :
          plaque > 0.25 ? 'Moderate plaque – cardiovascular risk elevated. Diet and exercise changes now can make a significant difference.' :
          'Minimal plaque – healthy lifestyle choices paying off. Arteries remain open and flexible.';
        document.getElementById('artery-msg').textContent = msg;
      }
    }, 150);
  });

  drawArtery(0);
}

function renderArteryInfo(container) {
  renderInfoSlide(container, {
    title: 'Can You Reverse Atherosclerosis?',
    body: '<p>Partially, yes. While you cannot completely reverse decades of plaque buildup, lifestyle changes can <strong>stabilize plaques</strong> (making them less likely to rupture), reduce inflammation, and in some cases shrink deposits.</p><p>Studies show that intensive lifestyle interventions – plant-based diet, daily exercise, stress management, no smoking – can show measurable artery improvement in months.</p>',
    highlight: 'Statins (cholesterol-lowering drugs) work partly by stabilizing plaques, not just lowering LDL. A stable plaque that does not rupture is far less dangerous than a soft, unstable one – even if it is larger.'
  });
}

/* --- Module 3.1: Risk Audit --- */
function renderRiskIntro(container) {
  renderInfoSlide(container, {
    title: 'Your Lifestyle is Your Biggest Risk Factor',
    body: '<p>Genetics matter for cardiovascular health – but research consistently shows that <strong>lifestyle factors account for 80-90% of cardiovascular disease</strong>. Your daily habits are building or protecting your heart health across decades.</p><p>In this audit, you will assess a set of risk factors and see how they combine to create a composite cardiovascular health score.</p>',
    highlight: 'The Framingham Heart Study – ongoing since 1948 – is the source of much of what we know about cardiovascular risk. It showed that risk factors compound: two risk factors do not double risk, they can quadruple it.'
  });
}

function renderRiskSim(container) {
  var factors = [
    { id: 'rf-diet', label: 'Diet Quality', low: 'Processed/high sugar', high: 'Whole foods/low sodium', weight: 0.2 },
    { id: 'rf-exercise', label: 'Physical Activity', low: 'Sedentary', high: '150+ min/week cardio', weight: 0.2 },
    { id: 'rf-sleep', label: 'Sleep (hours/night)', low: '<5 hrs', high: '7-9 hrs', weight: 0.15 },
    { id: 'rf-smoke', label: 'Smoking', low: 'Heavy smoker', high: 'Non-smoker', weight: 0.25 },
    { id: 'rf-stress', label: 'Chronic Stress', low: 'High/unmanaged', high: 'Low/managed', weight: 0.2 }
  ];

  var sliders = factors.map(function(f) {
    return '<div style="margin-bottom:14px">' +
      '<div class="sim-slider-label" style="margin-bottom:6px"><span>' + f.label + '</span><span id="' + f.id + '-val" style="color:#34d399;font-weight:600">50</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px">' +
      '<span style="font-size:0.65rem;color:#64748b;min-width:70px">' + f.low + '</span>' +
      '<input type="range" class="sim-slider t3" id="' + f.id + '" min="0" max="100" value="50" style="flex:1">' +
      '<span style="font-size:0.65rem;color:#64748b;min-width:70px;text-align:right">' + f.high + '</span></div></div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Lifestyle Risk Audit</h2>' +
    '<p class="sim-instruction">Rate each lifestyle factor. Watch your composite heart health score update.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:4px;padding:20px 24px;align-items:stretch">' +
      sliders +
      '<div style="margin-top:16px;text-align:center">' +
        '<div style="font-size:0.75rem;color:#64748b;margin-bottom:6px">Composite Heart Health Score</div>' +
        '<div style="font-family:var(--font-display);font-size:2.5rem;font-weight:700;color:#f8fafc" id="risk-score">50</div>' +
        '<div style="height:10px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;margin:8px 0;max-width:300px;margin-left:auto;margin-right:auto">' +
          '<div id="risk-bar" style="height:100%;width:50%;background:linear-gradient(90deg,#ef4444,#fbbf24,#22c55e);background-size:200%;background-position:50%;border-radius:100px;transition:width 0.4s"></div>' +
        '</div>' +
        '<div style="font-size:0.8rem;color:#94a3b8" id="risk-msg">Moderate – room for improvement on several factors.</div>' +
      '</div>' +
    '</div></div>';

  function updateScore() {
    var score = factors.reduce(function(acc, f) {
      return acc + (parseInt(document.getElementById(f.id).value) / 100) * f.weight;
    }, 0);
    var pct = Math.round(score * 100);
    document.getElementById('risk-score').textContent = pct;
    document.getElementById('risk-bar').style.width = pct + '%';
    document.getElementById('risk-bar').style.backgroundPosition = (100 - pct) + '%';
    var msg = pct >= 80 ? 'Excellent – lifestyle strongly protective of cardiovascular health.' :
      pct >= 60 ? 'Good – most factors healthy. Focus on your lowest-scoring areas.' :
      pct >= 40 ? 'Moderate – several significant risk factors. Targeted changes can make a real difference.' :
      'High risk profile – multiple major risk factors. Medical consultation recommended.';
    document.getElementById('risk-msg').textContent = msg;
  }

  factors.forEach(function(f) {
    document.getElementById(f.id).addEventListener('input', function() {
      document.getElementById(f.id + '-val').textContent = this.value;
      updateScore();
    });
  });
  updateScore();
}

function renderRiskInfo(container) {
  renderInfoSlide(container, {
    title: 'The Compounding Effect',
    body: '<p>Individual risk factors do not add together – they multiply. A person with high blood pressure, high cholesterol, and who smokes does not have three times the risk of a healthy person. Research suggests the actual multiplier is much higher.</p><p>The reverse is also true: improving even one major risk factor creates outsized benefits. Quitting smoking alone, for example, halves cardiovascular risk within 5 years.</p>',
    highlight: 'This is not meant to create fear – it is meant to reveal leverage. You have more control over your long-term cardiovascular health than your genes do. Every positive habit change compounds over years.'
  });
}

/* --- Module 3.2: Brain & Stress --- */
function renderBrainIntro(container) {
  renderInfoSlide(container, {
    title: 'The Command Center',
    body: '<p>Your brain is approximately 1.4 kg of tissue using 20% of your body\'s energy – despite being only 2% of body weight. It is organized into regions with specialized functions, though in reality these regions work in highly interconnected networks.</p><p>Understanding even a few key regions helps explain why you respond to stress the way you do, why memories can trigger physical reactions, and why willpower is a limited resource.</p>',
    highlight: 'We do NOT use only 10% of our brains. Brain imaging shows activity in virtually all regions, even during sleep. This myth likely originated from misinterpreting early 20th century neuroscience.'
  });
}

function renderBrainExplore(container) {
  var regions = [
    { id: 'pfc', name: 'Prefrontal Cortex', pos: {x:'30%',y:'15%'}, emoji: '🧩', color: '#534AB7', desc: 'Your rational brain. Handles planning, decision-making, impulse control, and social behavior. It is the last part of the brain to fully mature – not complete until age 25-26. Under acute stress, the amygdala can effectively hijack the PFC, explaining emotional decisions under pressure.' },
    { id: 'amygdala', name: 'Amygdala', pos: {x:'45%',y:'50%'}, emoji: '⚠️', color: '#D85A30', desc: 'Your alarm system. Processes emotional significance – especially fear and threat. Responds in milliseconds, before conscious thought. When activated, it triggers fight-or-flight through the hypothalamus. Highly active in anxiety disorders.' },
    { id: 'hippocampus', name: 'Hippocampus', pos: {x:'60%',y:'48%'}, emoji: '🖃️', color: '#0D9E75', desc: 'Your memory indexer. Critical for forming new long-term memories and connecting experiences to their spatial and emotional context. Chronic stress and cortisol literally shrink the hippocampus, impairing memory and learning.' },
    { id: 'hypothalamus', name: 'Hypothalamus', pos: {x:'47%',y:'58%'}, emoji: '⚡', color: '#f59e0b', desc: 'The bridge between brain and body. Controls the autonomic nervous system and the endocrine (hormone) system. When the amygdala signals threat, the hypothalamus triggers the adrenal glands to release adrenaline and cortisol.' },
    { id: 'brainstem', name: 'Brainstem', pos: {x:'50%',y:'75%'}, emoji: '📌', color: '#60a5fa', desc: 'The ancient core. Controls all involuntary functions: breathing, heart rate, blood pressure, sleep-wake cycles. You cannot consciously override the brainstem – it keeps you alive even when you are unconscious.' }
  ];

  var buttons = regions.map(function(r) {
    return '<div id="brain-btn-' + r.id + '" style="position:absolute;left:' + r.pos.x + ';top:' + r.pos.y + ';cursor:pointer;transition:all 0.2s;z-index:2" data-id="' + r.id + '">' +
      '<div style="width:36px;height:36px;border-radius:50%;background:' + r.color + '44;border:2px solid ' + r.color + ';display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 0 12px ' + r.color + '44;transition:all 0.2s">' + r.emoji + '</div>' +
      '<div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:0.6rem;color:' + r.color + ';font-family:var(--font-display);font-weight:600">' + r.name + '</div>' +
    '</div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-explore">Explore</span>' +
    '<h2>The Command Center</h2>' +
    '<p class="sim-instruction">Tap each brain region to learn its function.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div style="position:relative;width:220px;height:200px;margin:0 auto;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:50% 50% 45% 45%;overflow:visible">' +
        '<div style="position:absolute;inset:0;border-radius:50% 50% 45% 45%;background:linear-gradient(180deg,rgba(83,74,183,0.08),rgba(13,158,117,0.05))"></div>' +
        buttons +
      '</div>' +
      '<div id="brain-detail" style="padding:16px 18px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;min-height:90px;font-size:0.85rem;color:#94a3b8;line-height:1.65;max-width:460px;margin:0 auto">Tap a brain region above to explore its function.</div>' +
    '</div></div>';

  regions.forEach(function(r) {
    document.getElementById('brain-btn-' + r.id).addEventListener('click', function() {
      document.getElementById('brain-detail').innerHTML =
        '<strong style="color:#f8fafc">' + r.name + '</strong><br>' + r.desc;
    });
  });
}

function renderBrainInfo(container) {
  renderInfoSlide(container, {
    title: 'The Brain\'s Hierarchy',
    body: '<p>Your brain can be roughly organized by evolutionary age. The brainstem (oldest) handles survival basics. The limbic system (middle) – including the amygdala and hippocampus – handles emotions and memory. The cortex (newest) handles complex thought.</p><p>Under stress, the older parts take over. The PFC\'s influence weakens, the amygdala\'s influence strengthens. This is why rational thought gets harder when you are angry, scared, or exhausted.</p>',
    highlight: 'Sleep is when the brain consolidates memories (hippocampus) and cleans out metabolic waste products via the glymphatic system. One night of poor sleep demonstrably impairs memory, decision-making, and emotional regulation.'
  });
}

function renderFOFIntro(container) {
  renderInfoSlide(container, {
    title: 'Fight-or-Flight: Your Body\'s Emergency Mode',
    body: '<p>When your amygdala perceives a threat – a car swerving toward you, a confrontation, even a frightening thought – it triggers a cascade of physiological changes within milliseconds. Your body mobilizes for either fighting or fleeing.</p><p>This system evolved for physical threats. The problem is that your brain triggers the same response for social stressors (a difficult conversation, public speaking) as for physical ones.</p>',
    highlight: 'The fight-or-flight response is not a malfunction – it is a survival system. The problem in modern life is chronic activation without physical resolution. Your body prepares to run, but you sit at a desk.'
  });
}

function renderFOFSim(container) {
  var stressors = ['Math Test', 'Dog Chasing You', 'Giving a Speech', 'Car Swerves At You', 'Argument'];
  var cascade = [
    { icon: '🧠', text: 'Amygdala detects threat – signals hypothalamus within milliseconds.' },
    { icon: '💉', text: 'Adrenal glands release adrenaline (epinephrine) – entering bloodstream in seconds.' },
    { icon: '❤️', text: 'Heart rate spikes – pushing more blood to muscles and brain.' },
    { icon: '👁️', text: 'Pupils dilate – widening your field of view to spot danger.' },
    { icon: '💪', text: 'Blood redirected to large muscles – legs, arms, ready for action.' },
    { icon: '🫁', text: 'Breathing quickens – more oxygen into bloodstream.' },
    { icon: '🧠', text: 'Cortisol released (slower, 15-20 min) – sustains response and suppresses non-urgent systems.' },
    { icon: '🍽️', text: 'Digestion, immune, and reproductive functions suppressed – not needed for immediate survival.' },
    { icon: '😌', text: 'Parasympathetic recovery begins once threat passes – "rest and digest" mode restores balance.' }
  ];

  var stressorBtns = stressors.map(function(s) {
    return '<button class="fof-stressor-btn">' + s + '</button>';
  }).join('');

  var cascadeItems = cascade.map(function(step, i) {
    return '<div class="fof-step" id="fof-step-' + i + '"><div class="fof-step-icon">' + step.icon + '</div><div>' + step.text + '</div></div>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Fight-or-Flight Cascade</h2>' +
    '<p class="sim-instruction">Select a stressor to trigger the cascade. Watch your body\'s emergency response unfold.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px;align-items:stretch">' +
      '<div class="fof-stressors">' + stressorBtns + '</div>' +
      '<div class="fof-cascade">' + cascadeItems + '</div>' +
    '</div></div>';

  container.querySelectorAll('.fof-stressor-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('.fof-stressor-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      cascade.forEach(function(_, i) {
        document.getElementById('fof-step-' + i).classList.remove('visible');
      });
      cascade.forEach(function(_, i) {
        setTimeout(function() {
          var step = document.getElementById('fof-step-' + i);
          if (step) step.classList.add('visible');
        }, i * 400);
      });
    });
  });
}

function renderFOFInfo(container) {
  renderInfoSlide(container, {
    title: 'The Parasympathetic Recovery',
    body: '<p>After the threat passes, your <strong>parasympathetic nervous system</strong> activates – the "rest and digest" counterpart to fight-or-flight. Heart rate slows, digestion resumes, immune function restores, and cortisol begins to clear.</p><p>This recovery takes time – typically 20-60 minutes for a full return to baseline after a significant stress response. Practices like deep breathing, exercise, and meditation can accelerate recovery by directly activating the parasympathetic system.</p>',
    highlight: 'Slow, deep breathing directly activates the vagus nerve – the main nerve of the parasympathetic system. This is why controlled breathing can physically reduce anxiety within minutes. It is not just psychology; it is neuroscience.'
  });
}

/* --- Module 3.2: 7-Day Timeline --- */
function renderTimelineIntro(container) {
  renderInfoSlide(container, {
    title: 'What Chronic Stress Does Over Time',
    body: '<p>Acute stress is healthy and adaptive. Chronic stress – sustained activation of the stress response day after day – is damaging. The hormones that are helpful in short bursts become destructive when maintained long-term.</p><p>You will compare two people over 7 days: one well-rested and low-stress, one chronically stressed. The divergence is striking – and entirely supported by research.</p>',
    highlight: 'Chronic stress literally shrinks the hippocampus (memory), enlarges the amygdala (threat sensitivity), and reduces prefrontal cortex activity (rational thought) – measurable changes visible on brain scans.'
  });
}

function renderTimelineSim(container) {
  var metrics = [
    { id: 'cortisol', label: 'Cortisol Level', good: [30,28,27,25,24,24,23], bad: [40,50,62,70,75,74,78], goodColor: '#34d399', badColor: '#ef4444' },
    { id: 'focus', label: 'Focus/Cognition', good: [80,82,83,85,84,86,87], bad: [70,62,55,48,42,38,36], goodColor: '#60a5fa', badColor: '#f87171' },
    { id: 'immune', label: 'Immune Function', good: [85,85,87,86,87,88,88], bad: [80,75,68,60,55,50,48], goodColor: '#a78bfa', badColor: '#fb923c' }
  ];

  var tabs = metrics.map(function(m, i) {
    return '<button class="routing-btn" data-metric="' + i + '">' + m.label + '</button>';
  }).join('');

  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>The 7-Day Timeline</h2>' +
    '<p class="sim-instruction">Select a metric to compare a well-rested person vs. chronically stressed over 7 days.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' + tabs + '</div>' +
      '<canvas id="timeline-canvas" width="480" height="160" style="width:100%;border-radius:8px;background:rgba(255,255,255,0.02)"></canvas>' +
      '<div style="display:flex;gap:16px;justify-content:center;font-size:0.75rem;color:#64748b">' +
        '<span><span id="tl-good-legend" style="color:#34d399">–</span> Well-Rested</span>' +
        '<span><span id="tl-bad-legend" style="color:#ef4444">–</span> Chronically Stressed</span>' +
      '</div>' +
      '<div id="timeline-msg" style="font-size:0.82rem;color:#64748b;text-align:center">Select a metric to see the divergence.</div>' +
    '</div></div>';

  function drawTimeline(metricIdx) {
    var m = metrics[metricIdx];
    var canvas = document.getElementById('timeline-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var allPts = m.good.concat(m.bad);
    var minV = Math.min.apply(null, allPts) - 5, maxV = Math.max.apply(null, allPts) + 5;
    var step = (w - 40) / 6;

    function drawCurve(pts, color) {
      ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.setLineDash([]);
      var gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, color + '33'); gradient.addColorStop(1, color + '00');
      ctx.beginPath();
      ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
      pts.forEach(function(p, i) { if (i > 0) ctx.lineTo(30 + i * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
      ctx.lineTo(30 + 6 * step, h); ctx.lineTo(30, h); ctx.closePath();
      ctx.fillStyle = gradient; ctx.fill();
      ctx.beginPath();
      ctx.moveTo(30, h - ((pts[0] - minV) / (maxV - minV)) * (h - 20) - 10);
      pts.forEach(function(p, i) { if (i > 0) ctx.lineTo(30 + i * step, h - ((p - minV) / (maxV - minV)) * (h - 20) - 10); });
      ctx.stroke();
    }

    drawCurve(m.good, m.goodColor);
    drawCurve(m.bad, m.badColor);
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = '9px sans-serif'; ctx.textAlign = 'center';
    ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(function(d, i) {
      ctx.fillText(d, 30 + i * step, h - 1);
    });
    document.getElementById('tl-good-legend').style.color = m.goodColor;
    document.getElementById('tl-bad-legend').style.color = m.badColor;
  }

  container.querySelectorAll('[data-metric]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      container.querySelectorAll('[data-metric]').forEach(function(b) { b.classList.remove('correct'); });
      btn.classList.add('correct');
      var idx = parseInt(btn.dataset.metric);
      drawTimeline(idx);
      var msgs = [
        'Cortisol stays elevated under chronic stress – it never fully clears. By day 5, the stressed person has cortisol levels 3x the well-rested person.',
        'Cognitive performance degrades sharply under chronic stress – cortisol impairs hippocampus function. Focus, memory, and decision-making all suffer.',
        'Chronic cortisol suppresses immune function. By day 5, the stressed person is significantly more susceptible to infection.'
      ];
      document.getElementById('timeline-msg').textContent = msgs[idx];
    });
  });
}

function renderTimelineInfo(container) {
  renderInfoSlide(container, {
    title: 'Breaking the Chronic Stress Cycle',
    body: '<p>Chronic stress is self-reinforcing: stress impairs sleep, impaired sleep reduces cortisol clearance, elevated cortisol increases stress sensitivity. Breaking this cycle requires intervening at multiple points simultaneously.</p><p>Evidence-based interventions: regular aerobic exercise (most powerful), consistent sleep schedule, mindfulness/breathing practices, social connection, and reducing sources of chronic stress where possible.</p>',
    highlight: 'Exercise is the single most powerful intervention for mental health supported by research – equivalent to antidepressants for mild-moderate depression, with no side effects and additional physical benefits.'
  });
}

/* --- Module 3.3: Healthcare Navigation --- */
function renderRouteIntro(container) {
  renderInfoSlide(container, {
    title: 'The Healthcare Map',
    body: '<p>The US healthcare system has three main access points for non-emergency care. Choosing the wrong one costs money and time – sometimes critically so. <strong>Primary care</strong> is for routine and chronic issues. <strong>Urgent care</strong> is for same-day issues that are not life-threatening. <strong>The ER</strong> is for emergencies only.</p><p>An ER visit for a non-emergency issue costs 5-10x more than urgent care and ties up resources needed for genuine emergencies.</p>',
    highlight: 'In 2023, about 27% of ER visits in the US were for conditions treatable in a primary or urgent care setting. This costs the healthcare system an estimated $32 billion annually.'
  });
}

function renderRouteSim(container) {
  var scenarios = [
    { text: 'You twisted your ankle playing soccer. It is swollen and hurts to walk on, but you can put some weight on it.', correct: 1, explanation: 'Urgent Care ($150-300). Not life-threatening but needs same-day attention for X-ray and wrap. ER would cost $1,500-3,000 for the same care.' },
    { text: 'You have had a sore throat and mild fever (101F) for two days. You feel crummy but can eat and drink.', correct: 0, explanation: 'Primary Care or telehealth. Mild fever and sore throat lasting 2 days warrants a strep test but is not an emergency. Schedule a same-day or next-day appointment.' },
    { text: 'You are experiencing crushing chest pain that radiates to your left arm. You feel short of breath.', correct: 2, explanation: 'Emergency Room (call 911). These are classic warning signs of a heart attack. Every minute without treatment causes more heart muscle damage. Do not drive – call 911.' },
    { text: 'You have a 1-inch cut on your arm that will not stop bleeding after 15 minutes of pressure.', correct: 1, explanation: 'Urgent Care. A wound requiring stitches is urgent but not an emergency. Urgent care can suture it for $150-250 vs. $1,200+ at an ER.' },
    { text: 'Your child has had a fever of 104F for 3 days and is unusually lethargic and not drinking fluids.', correct: 2, explanation: 'Emergency Room. High sustained fever with lethargy and poor fluid intake in a child is a medical emergency – signs of potential serious infection or dehydration.' },
    { text: 'You need your annual physical and routine blood work.', correct: 0, explanation: 'Primary Care. Annual physicals and routine screenings are exactly what primary care is for – and are often covered 100% by insurance as preventive care.' }
  ];

  var scenIdx = 0;

  function renderScenario() {
    var sc = scenarios[scenIdx];
    container.innerHTML = '<div class="lesson-slide sim-slide">' +
      '<span class="slide-type-label slide-type-roleplay">Role-Play</span>' +
      '<h2>The Healthcare Map</h2>' +
      '<p class="sim-instruction">Route each scenario to the correct care setting.</p>' +
      '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
        '<div class="routing-sim">' +
          '<div class="routing-scenario">' +
            '<div class="routing-scenario-count">Scenario ' + (scenIdx + 1) + ' of ' + scenarios.length + '</div>' +
            '<div class="routing-scenario-text">' + sc.text + '</div>' +
            '<div class="routing-options">' +
              '<button class="routing-btn" data-choice="0">🏥<br>Primary Care</button>' +
              '<button class="routing-btn" data-choice="1">⚕️<br>Urgent Care</button>' +
              '<button class="routing-btn" data-choice="2">🚨<br>Emergency Room</button>' +
            '</div>' +
          '</div>' +
          '<div id="route-feedback" style="display:none" class="routing-feedback"></div>' +
        '</div>' +
      '</div></div>';

    var answered = false;
    var contBtn = document.getElementById('lesson-continue-btn');
    contBtn.disabled = true;

    container.querySelectorAll('[data-choice]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        var choice = parseInt(btn.dataset.choice);
        container.querySelectorAll('[data-choice]').forEach(function(b) {
          b.disabled = true;
          if (parseInt(b.dataset.choice) === sc.correct) b.classList.add('correct');
          else if (b === btn && choice !== sc.correct) b.classList.add('incorrect');
        });
        var fb = document.getElementById('route-feedback');
        fb.style.display = 'block';
        fb.className = 'routing-feedback ' + (choice === sc.correct ? 'correct' : 'incorrect');
        fb.textContent = (choice === sc.correct ? 'Correct! ' : 'Not quite. ') + sc.explanation;
        if (scenIdx < scenarios.length - 1) {
          contBtn.textContent = 'Next Scenario →';
          contBtn.disabled = false;
          contBtn.onclick = function() {
            scenIdx++;
            renderScenario();
            contBtn.onclick = nextSlide;
            contBtn.textContent = 'Continue →';
          };
        } else {
          contBtn.disabled = false;
          contBtn.textContent = 'Continue →';
          contBtn.onclick = nextSlide;
        }
      });
    });
  }

  renderScenario();
}

function renderRouteInfo(container) {
  renderInfoSlide(container, {
    title: 'How to Think About Care Routing',
    body: '<p>The key question is: <strong>Is this life-threatening or likely to become life-threatening without immediate care?</strong> If yes: ER. If no but needs same-day care: Urgent Care. If it can wait a day or more: Primary Care.</p><p>Red flags for the ER: chest pain, difficulty breathing, signs of stroke (face drooping, arm weakness, speech difficulty), severe allergic reaction, uncontrolled bleeding, loss of consciousness, sudden severe headache.</p>',
    highlight: 'If you are not sure whether something is an emergency, call your primary care doctor or a nurse advice line first. They can help you decide – and this is often available 24/7 through insurance.'
  });
}

function renderPreventIntro(container) {
  renderInfoSlide(container, {
    title: 'Prevention is Dramatically Cheaper',
    body: '<p>Reactive healthcare – treating diseases after they develop – is the most expensive and least effective model. Preventive care – catching conditions early or preventing them altogether – is dramatically more cost-effective.</p><p>Treating hypertension: ~$1,000/year. Treating a stroke caused by untreated hypertension: $100,000+ in initial care plus ongoing rehabilitation and lost productivity.</p>',
    highlight: 'The US spends nearly $4 trillion per year on healthcare and has some of the worst health outcomes among wealthy nations – largely because the system is built around reactive rather than preventive care.'
  });
}

function renderPreventSim(container) {
  container.innerHTML = '<div class="lesson-slide sim-slide">' +
    '<span class="slide-type-label slide-type-sim">Simulation</span>' +
    '<h2>Prevention ROI</h2>' +
    '<p class="sim-instruction">Compare two paths: one with regular check-ups, one without. See the cost and health outcome difference at age 60.</p>' +
    '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px">' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
        '<div style="background:rgba(13,158,117,0.08);border:1px solid rgba(13,158,117,0.2);border-radius:14px;padding:16px;text-align:center">' +
          '<div style="font-size:1.5rem;margin-bottom:6px">✅</div>' +
          '<div style="font-family:var(--font-display);font-size:0.85rem;font-weight:600;color:#34d399;margin-bottom:8px">Annual Check-Ups</div>' +
          '<div id="prev-good" style="font-size:0.75rem;color:#64748b;line-height:1.7">' +
            'Age 35: BP 130/85 caught early<br>Age 40: cholesterol managed<br>Age 45: pre-diabetes caught<br>Age 50: lifestyle adjustments<br>Age 55: all markers controlled<br>' +
            '<strong style="color:#34d399">Age 60: healthy and active</strong><br>' +
            '<strong style="color:#fbbf24">Total cost: ~$12,000</strong>' +
          '</div>' +
        '</div>' +
        '<div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:14px;padding:16px;text-align:center">' +
          '<div style="font-size:1.5rem;margin-bottom:6px">❌</div>' +
          '<div style="font-family:var(--font-display);font-size:0.85rem;font-weight:600;color:#f87171;margin-bottom:8px">No Check-Ups</div>' +
          '<div id="prev-bad" style="font-size:0.75rem;color:#64748b;line-height:1.7">' +
            'Age 35-55: no detection<br>Age 52: silent heart attack<br>Age 53: ER hospitalization<br>Age 54: cardiac surgery<br>Age 55: stroke rehabilitation<br>' +
            '<strong style="color:#f87171">Age 60: limited mobility</strong><br>' +
            '<strong style="color:#fbbf24">Total cost: ~$380,000</strong>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="text-align:center;padding:16px;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.15);border-radius:12px">' +
        '<div style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:#fbbf24">Prevention saved: ~$368,000</div>' +
        '<div style="font-size:0.78rem;color:#64748b;margin-top:4px">Plus years of better quality of life and productivity</div>' +
      '</div>' +
    '</div></div>';
}

function renderPreventInfo(container) {
  renderInfoSlide(container, {
    title: 'What Preventive Care Actually Includes',
    body: '<p>Preventive care includes: annual physical exams, routine blood work (cholesterol, blood sugar, complete blood count), blood pressure checks, age-appropriate cancer screenings (colonoscopy, mammogram, PSA), and vaccinations.</p><p>Most insurance plans – and all ACA-compliant plans – cover preventive screenings at <strong>no cost to you</strong>. These are zero-copay, zero-deductible services because they save the system enormous money long-term.</p>',
    highlight: 'The most important preventive action for a person in their 20s or 30s is establishing a primary care relationship – a doctor who knows your baseline, tracks changes over time, and can catch early signals before they become expensive problems.'
  });
}

function renderDoctorIntro(container) {
  renderInfoSlide(container, {
    title: 'Becoming Your Own Advocate',
    body: '<p>The average doctor visit in the US lasts 18 minutes. In that time, your doctor needs to review history, perform an exam, explain a diagnosis, and plan treatment. You need to leave understanding what is wrong, what to do, and what to watch for.</p><p>The patients who get the most from medical visits are those who come prepared with specific, open-ended questions – and who do not accept vague answers.</p>',
    highlight: 'Studies show that patients who ask more questions get better care outcomes. Self-advocacy is not about being difficult – it is about being a full participant in your own health decisions.'
  });
}

function renderDoctorSim(container) {
  var rounds = [
    {
      scenario: 'The doctor says: "Your cholesterol is a bit high. Let\'s keep an eye on it."',
      options: [
        { text: 'OK, thanks.', quality: 0, feedback: 'This gets you nothing. You leave without knowing your numbers, what "high" means, or what to do about it.' },
        { text: 'What should I do about it?', quality: 1, feedback: 'Better – but open-ended questions get vague answers. You might get "eat better and exercise" without specifics.' },
        { text: 'What are my specific numbers, what is the target range, and what specific changes would bring them into range?', quality: 2, feedback: 'Excellent. You get actionable information: your LDL is 145 (target <100), and a specific dietary intervention (less saturated fat, more fiber) with a 3-month recheck.' }
      ]
    },
    {
      scenario: 'The doctor says: "You should take this medication."',
      options: [
        { text: 'OK, I will fill the prescription.', quality: 0, feedback: 'You leave not knowing what the medication does, its side effects, or how long you will be on it.' },
        { text: 'What does it do?', quality: 1, feedback: 'You learn the mechanism but not the side effects or alternatives.' },
        { text: 'What does it do, what are the main side effects, are there non-medication alternatives, and how will we know it is working?', quality: 2, feedback: 'Perfect. You learn the medication class, its side effects, that lifestyle changes could avoid medication if addressed quickly, and that a 6-week recheck will assess effectiveness.' }
      ]
    }
  ];

  var roundIdx = 0;

  function renderRound() {
    var round = rounds[roundIdx];
    container.innerHTML = '<div class="lesson-slide sim-slide">' +
      '<span class="slide-type-label slide-type-roleplay">Role-Play</span>' +
      '<h2>Doctor Visit Role-Play</h2>' +
      '<div class="sim-widget" style="flex-direction:column;gap:16px;padding:20px;align-items:stretch">' +
        '<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:18px">' +
          '<div style="font-size:0.72rem;color:#64748b;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px">The Doctor Says...</div>' +
          '<div style="font-size:1rem;color:#e2e8f0;line-height:1.65">' + round.scenario + '</div>' +
        '</div>' +
        '<div style="font-size:0.8rem;color:#64748b;font-family:var(--font-display)">Choose your response:</div>' +
        '<div style="display:flex;flex-direction:column;gap:8px">' +
          round.options.map(function(o, i) {
            return '<button class="quiz-option" data-quality="' + o.quality + '" data-idx="' + i + '">' +
              '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>' +
              o.text + '</button>';
          }).join('') +
        '</div>' +
        '<div id="doctor-feedback" style="display:none;padding:14px 16px;border-radius:12px;font-size:0.85rem;line-height:1.65"></div>' +
      '</div></div>';

    var contBtn = document.getElementById('lesson-continue-btn');
    contBtn.disabled = true;
    var answered = false;

    container.querySelectorAll('.quiz-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        var quality = parseInt(btn.dataset.quality);
        var opt = round.options[parseInt(btn.dataset.idx)];
        container.querySelectorAll('.quiz-option').forEach(function(b) {
          b.disabled = true;
          if (parseInt(b.dataset.quality) === 2) b.classList.add('correct');
          else if (b === btn && quality !== 2) b.classList.add('incorrect');
        });
        var fb = document.getElementById('doctor-feedback');
        fb.style.display = 'block';
        fb.className = quality === 2 ? 'quiz-feedback correct' : 'quiz-feedback incorrect';
        fb.textContent = opt.feedback;
        contBtn.disabled = false;
        if (roundIdx < rounds.length - 1) {
          contBtn.textContent = 'Next Round →';
          contBtn.onclick = function() {
            roundIdx++;
            renderRound();
            contBtn.textContent = 'Continue →';
            contBtn.onclick = nextSlide;
          };
        } else {
          contBtn.textContent = 'Continue →';
          contBtn.onclick = nextSlide;
        }
      });
    });
  }

  renderRound();
}

function renderDoctorInfo(container) {
  renderInfoSlide(container, {
    title: 'The Framework for Good Medical Questions',
    body: '<p>Good medical questions share a structure: <strong>What specifically? Why? What are the alternatives? How do we know if it is working?</strong> These four dimensions get you from a vague recommendation to an actionable, informed plan.</p><p>It is also acceptable – and important – to say "I need a moment to think about that" or "I want to look into this before deciding." You have the right to make informed decisions, not just comply with instructions.</p>',
    highlight: 'Write down your questions before the appointment. Patients who bring written questions cover significantly more ground in the same visit time than those who rely on memory.'
  });
}

function renderDoctorComplete(container) {
  container.innerHTML = '<div class="lesson-slide complete-slide">' +
    '<div class="complete-trophy">🏥</div>' +
    '<div class="complete-title">Module Complete!</div>' +
    '<p class="complete-sub">You\'ve mastered healthcare navigation – routing scenarios, prevention ROI, and medical self-advocacy. These are skills most adults never formally learn.</p>' +
    '<div class="complete-xp">Tier 3 Complete</div>' +
  '</div>';
}

/* ============================================
   Part 9: SLIDE_RENDERERS map + Init
   ============================================ */

var SLIDE_RENDERERS = {
  /* T1 M1 */
  heartRateIntro: renderHeartRateIntro,
  heartRateSim: renderHeartRateSim,
  heartRateInfo: renderHeartRateInfo,
  heartRateQuiz: function(c) { renderQuizSlide(c, QUIZZES.heartRate); },
  bellowsIntro: renderBellowsIntro,
  bellowsExplore: renderBellowsExplore,
  bellowsInfo: renderBellowsInfo,
  bellowsQuiz: function(c) { renderQuizSlide(c, QUIZZES.bellows); },
  fuelIntro: renderFuelIntro,
  fuelDrag: renderFuelDrag,
  fuelInfo: renderFuelInfo,
  fuelQuiz: function(c) { renderQuizSlide(c, QUIZZES.fuel); },
  pulseIntro: renderPulseIntro,
  pulseLab: renderPulseLab,
  pulseChart: renderPulseChart,
  pulseVocab: function(c) { renderVocabSlide(c, VOCAB.powerSystems); },
  /* T1 M2 */
  germIntro: renderGermIntro,
  germDrag: renderGermDrag,
  germInfo: renderGermInfo,
  germQuiz: function(c) { renderQuizSlide(c, QUIZZES.germs); },
  shieldIntro: renderShieldIntro,
  shieldSim: renderShieldSim,
  shieldInfo: renderShieldInfo,
  shieldQuiz: function(c) { renderQuizSlide(c, QUIZZES.shield); },
  glitterIntro: renderGlitterIntro,
  glitterSim: renderGlitterSim,
  glitterReveal: renderGlitterReveal,
  glitterVocab: function(c) { renderVocabSlide(c, VOCAB.defenders); },
  /* T1 M3 */
  wheelIntro: renderWheelIntro,
  wheelExplore: renderFoodWheel,
  wheelInfo: renderWheelInfo,
  wheelQuiz: function(c) { renderQuizSlide(c, QUIZZES.foodWheel); },
  sugarIntro: renderSugarIntro,
  sugarSim: renderSugarSim,
  sugarInfo: renderSugarInfo,
  sugarQuiz: function(c) { renderQuizSlide(c, QUIZZES.sugar); },
  hydroIntro: renderHydroIntro,
  hydroSim: renderHydroSim,
  hydroInfo: renderHydroInfo,
  hydroVocab: function(c) { renderVocabSlide(c, VOCAB.fueling); },
  /* T2 M1 */
  gasIntro: renderGasIntro,
  gasExplore: renderGasExplore,
  gasInfo: renderGasInfo,
  gasQuiz: function(c) { renderQuizSlide(c, QUIZZES.gas); },
  bloodIntro: renderBloodIntro,
  bloodDrag: renderBloodDrag,
  bloodInfo: renderBloodInfo,
  bloodQuiz: function(c) { renderQuizSlide(c, QUIZZES.blood); },
  cardiacIntro: renderCardiacIntro,
  cardiacSim: renderCardiacSim,
  cardiacInfo: renderCardiacInfo,
  cardiacQuiz: function(c) { renderQuizSlide(c, QUIZZES.cardiac); },
  /* T2 M2 */
  mealIntro: renderMealIntro,
  mealSim: renderMealSim,
  mealInfo: renderMealInfo,
  mealQuiz: function(c) { renderQuizSlide(c, QUIZZES.meal); },
  atpIntro: renderATPIntro,
  atpSim: renderATPSim,
  atpInfo: renderATPInfo,
  atpQuiz: function(c) { renderQuizSlide(c, QUIZZES.atp); },
  glucoseIntro: renderGlucoseIntro,
  glucoseSim: renderGlucoseSim,
  glucoseInfo: renderGlucoseInfo,
  glucoseVocab: function(c) { renderVocabSlide(c, VOCAB.metabolism); },
  /* T2 M3 */
  raceIntro: renderRaceIntro,
  raceSim: renderRaceSim,
  raceInfo: renderRaceInfo,
  raceQuiz: function(c) { renderQuizSlide(c, QUIZZES.race); },
  vaccineIntro: renderVaccineIntro,
  vaccineSim: renderVaccineSim,
  vaccineInfo: renderVaccineInfo,
  vaccineQuiz: function(c) { renderQuizSlide(c, QUIZZES.vaccine); },
  herdIntro: renderHerdIntro,
  herdSim: renderHerdSim,
  herdInfo: renderHerdInfo,
  herdVocab: function(c) { renderVocabSlide(c, VOCAB.immunity); },
  /* T3 M1 */
  bpIntro: renderBPIntro,
  bpSim: renderBPSim,
  bpInfo: renderBPInfo,
  bpQuiz: function(c) { renderQuizSlide(c, QUIZZES.bp); },
  arteryIntro: renderArteryIntro,
  arterySim: renderArterySim,
  arteryInfo: renderArteryInfo,
  arteryQuiz: function(c) { renderQuizSlide(c, QUIZZES.artery); },
  riskIntro: renderRiskIntro,
  riskSim: renderRiskSim,
  riskInfo: renderRiskInfo,
  riskVocab: function(c) { renderVocabSlide(c, VOCAB.cardiovascular); },
  /* T3 M2 */
  brainIntro: renderBrainIntro,
  brainExplore: renderBrainExplore,
  brainInfo: renderBrainInfo,
  brainQuiz: function(c) { renderQuizSlide(c, QUIZZES.brain); },
  fofIntro: renderFOFIntro,
  fofSim: renderFOFSim,
  fofInfo: renderFOFInfo,
  fofQuiz: function(c) { renderQuizSlide(c, QUIZZES.fof); },
  timelineIntro: renderTimelineIntro,
  timelineSim: renderTimelineSim,
  timelineInfo: renderTimelineInfo,
  timelineVocab: function(c) { renderVocabSlide(c, VOCAB.brainStress); },
  /* T3 M3 */
  routeIntro: renderRouteIntro,
  routeSim: renderRouteSim,
  routeInfo: renderRouteInfo,
  routeQuiz: function(c) { renderQuizSlide(c, QUIZZES.route); },
  preventIntro: renderPreventIntro,
  preventSim: renderPreventSim,
  preventInfo: renderPreventInfo,
  preventVocab: function(c) { renderVocabSlide(c, VOCAB.healthcare); },
  doctorIntro: renderDoctorIntro,
  doctorSim: renderDoctorSim,
  doctorInfo: renderDoctorInfo,
  doctorComplete: renderDoctorComplete
};

/* ============================================
   Init
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  loadState();
  updateXPBar();
  renderPath();

  // Reset with confirmation modal
  var resetBtn     = document.getElementById('reset-progress-btn');
  var resetOverlay = document.getElementById('reset-confirm-overlay');
  var resetInput   = document.getElementById('reset-confirm-input');
  var resetConfirm = document.getElementById('reset-confirm-ok');
  var resetCancel  = document.getElementById('reset-confirm-cancel');
  var RESET_PHRASE = 'i want to reset';

  if (resetBtn && resetOverlay) {
    resetBtn.addEventListener('click', function() {
      resetOverlay.removeAttribute('hidden');
      resetInput.value = '';
      resetConfirm.disabled = true;
      resetInput.focus();
    });
    resetInput.addEventListener('input', function() {
      resetConfirm.disabled = resetInput.value.trim().toLowerCase() !== RESET_PHRASE;
    });
    resetConfirm.addEventListener('click', function() {
      resetOverlay.setAttribute('hidden', '');
      resetState();
    });
    resetCancel.addEventListener('click', function() {
      resetOverlay.setAttribute('hidden', '');
    });
    resetOverlay.addEventListener('click', function(e) {
      if (e.target === resetOverlay) resetOverlay.setAttribute('hidden', '');
    });
  }

  // Start Curriculum button: hide splash, reveal path, scroll to bottom (T1 start)
  var startBtn = document.getElementById('curr-start-btn');
  var splash   = document.getElementById('curr-splash');
  var pathView = document.getElementById('curr-path-view');
  if (startBtn && splash && pathView) {
    startBtn.addEventListener('click', function() {
      splash.style.transition = 'opacity 0.4s ease';
      splash.style.opacity = '0';
      setTimeout(function() {
        splash.hidden = true;
        pathView.removeAttribute('hidden');
        var xpBar = document.getElementById('xp-bar');
        var modPill = document.getElementById('curr-module-pill');
        if (xpBar) xpBar.removeAttribute('hidden');
        if (modPill) modPill.removeAttribute('hidden');
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 380);
    });
  }

  // Scroll to bottom so the user sees the start (T1 Module 1) first
  setTimeout(function() {
    var path = document.getElementById('curriculum-path');
    if (path) path.lastElementChild && path.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 150);

  // Scroll reveal for path nodes
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  setTimeout(function() {
    document.querySelectorAll('.lesson-node').forEach(function(node, i) {
      node.style.opacity = '0';
      node.style.transform = 'translateY(20px)';
      node.style.transition = 'opacity 0.5s ' + (i * 0.08) + 's, transform 0.5s ' + (i * 0.08) + 's';
      obs.observe(node);
    });
  }, 100);
});
