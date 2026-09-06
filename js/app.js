// ============================================================
// CUSTOM MODAL SYSTEM
// ============================================================
async function showAlert(message, title = 'Notice') { ... }
async function showConfirm(message, title = 'Confirm') { ... }
async function showPrompt(message, title = 'Enter Value', defaultValue = '') { ... }
document.addEventListener('keydown', function(e) { ... });
document.getElementById('customModal')?.addEventListener('click', function(e) { ... });
document.getElementById('ai-model-modal')?.addEventListener('click', function(e) { ... });
document.getElementById('stats-modal')?.addEventListener('click', function(e) { ... });

// ============================================================
// TOAST & UTILITIES
// ============================================================
function showToast(message, icon = '✅') { ... }
async function copyText(text) { ... }
function generateFullPrompt(question) { ... }
function generatePerplexityQuery(question) { return generateFullPrompt(question); }

// ============================================================
// GLOBAL DATA
// ============================================================
window.presetBank = [];

// ============================================================
// ANALYZER MODAL LOGIC (GLOBAL)
// ============================================================
let analyzerData = { GS1: {}, GS2: {}, GS3: {}, GS4: {} };
let currentAnalyzerPaper = 'GS1';
let currentAnalyzerSubject = null;
let currentAnalyzerTheme = null;
const analyzerOverlay = document.getElementById('analyzer-modal-overlay');
const analyzerContainer = document.getElementById('analyzer-container');

function openAnalyzerModal() {
    analyzerOverlay.classList.add('active');
    document.body.classList.add('modal-open');
    currentAnalyzerPaper = 'GS1';
    currentAnalyzerSubject = null;
    currentAnalyzerTheme = null;
    selectAnalyzerPaper('GS1');
}

function closeAnalyzerModal() {
    analyzerOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function selectAnalyzerPaper(paper) {
    currentAnalyzerPaper = paper;
    currentAnalyzerSubject = null;
    currentAnalyzerTheme = null;
    document.querySelectorAll('.analyzer-paper-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === paper);
    });
    renderAnalyzer();
}

function selectAnalyzerSubject(subject) {
    currentAnalyzerSubject = subject;
    currentAnalyzerTheme = null;
    renderAnalyzer();
}

function selectAnalyzerTheme(theme) {
    currentAnalyzerTheme = theme;
    renderAnalyzer();
}

async function loadAnalyzerData() {
    const files = { 'GS1': './gs1_themes.json', 'GS2': './gs2_themes.json', 'GS3': './gs3_themes.json', 'GS4': './gs4_themes.json' };
    for (const paper in files) {
        try {
            const res = await fetch(files[paper] + '?t=' + Date.now());
            if (!res.ok) continue;
            const data = await res.json();
            const grouped = {};
            // Iterate through the array structure by subtopic
            for (const subtopicGroup of data) {
                grouped[subtopicGroup.subtopic] = subtopicGroup.themes;
            }
            analyzerData[paper] = grouped;
        } catch (err) { console.error('Error loading themes for ' + paper, err); }
    }
    if (analyzerOverlay.classList.contains('active')) renderAnalyzer();
}

function renderAnalyzer() {
    if (!analyzerContainer) return;
    const paperData = analyzerData[currentAnalyzerPaper] || {};
    let html = '';

    // 1. Show Subjects if none selected
    if (!currentAnalyzerSubject) {
        html += `<div style="margin-bottom:20px;"><h3>Choose a Subject</h3></div><div style="display:flex; flex-wrap:wrap; gap:10px;">`;
        let index = 0;
        for (const subject in paperData) {
            const count = paperData[subject].reduce((sum, t) => sum + (t.question_tags ? t.question_tags.length : 0), 0);
            html += `<button class="analyzer-capsule grad-${(index%8)+1}" onclick="selectAnalyzerSubject('${subject}')">
                <span>${subject}</span> <span class="analyzer-count">${count}</span>
            </button>`;
            index++;
        }
        html += `</div>`;
    } else {
        // 2. Show Themes
        html += `<div class="analyzer-view-header">
            <button class="btn btn-secondary-sm" onclick="currentAnalyzerSubject=null; currentAnalyzerTheme=null; renderAnalyzer();">← Back to Subjects</button>
            <h3 style="margin:0;">${currentAnalyzerSubject}</h3>
        </div><div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:15px;">`;

        const themes = paperData[currentAnalyzerSubject] || [];
        themes.forEach((theme, index) => {
            const count = theme.question_tags ? theme.question_tags.length : 0;
            html += `<button class="analyzer-capsule grad-${(index%8)+1} ${currentAnalyzerTheme === theme.theme ? 'active' : ''}" onclick="selectAnalyzerTheme('${theme.theme.replace(/'/g, "\\'")}')">
                <span>${theme.theme}</span> <span class="analyzer-count">${count}</span>
            </button>`;
        });
        html += `</div>`;

        // 3. Show Questions if theme selected
        if (currentAnalyzerTheme) {
            const selectedTheme = themes.find(t => t.theme === currentAnalyzerTheme);
            if (selectedTheme && selectedTheme.question_tags) {
                const tags = selectedTheme.question_tags;
                if (window.presetBank.length === 0) {
                    html += `<div style="margin-top:30px; text-align:center; color:var(--muted);">Loading questions...</div>`;
                } else {
                    const questions = window.presetBank.filter(q => tags.includes(q.id));
                    html += `<div style="margin-top:30px; border-top:2px solid var(--border); padding-top:20px;">
                        <h3>${currentAnalyzerTheme} (${questions.length} Questions)</h3>`;

                    questions.forEach((q, idx) => {
                        let paperName = q.paper;
                        if (typeof formatPaperName === 'function') paperName = formatPaperName(q.paper);
                        html += `
                            <div class="bank-item" style="margin-top:15px;">
                                <div class="tags">
                                    <span class="tag tag-year">${q.year}</span>
                                    <span class="tag tag-marks">${q.marks} M</span>
                                    <span class="tag tag-subject">${paperName}</span>
                                </div>
                                <div class="bank-question">${idx + 1}. ${escapeHtml(q.question)}</div>
                                <div class="bank-actions">
                                    <button class="btn btn-secondary-sm" onclick="window.fetchAIAnswer(this)">✨ Generate Answer</button>
                                </div>
                            </div>`;
                    });
                    html += `</div>`;
                }
            }
        }
    }
    analyzerContainer.innerHTML = html;
}

// ============================================================
// MAIN APP
// ============================================================
console.log('✅ Custom modal + toast system loaded');
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 App.js loaded');
  
  // 1. NAVIGATION
  document.querySelectorAll('[data-scroll]').forEach(btn => { ... });
  
  // 2. THEME
  function applyTheme(theme) { ... }
  const savedTheme = localStorage.getItem('qcab_theme') || 'light';
  applyTheme(savedTheme);
  ['theme-toggle', 'mobile-theme-toggle', 'sidebar-theme'].forEach(id => { ... });

  // 3. MOBILE MENU
  (function() { ... })();

  // 4. BANK COLLAPSE
  const toggleBankBtn = document.getElementById('toggle-bank-btn');
  const toggleBankIcon = document.getElementById('toggle-bank-icon');
  const toggleBankText = document.getElementById('toggle-bank-text');
  const bankBody = document.getElementById('pyq-bank-body');
  if (bankBody) bankBody.style.display = 'block';
  if (toggleBankIcon) toggleBankIcon.textContent = '▾';
  if (toggleBankText) toggleBankText.textContent = 'Hide Bank';
  if (toggleBankBtn && bankBody) { ... }

  // 5. CREATE FORM COLLAPSE
  const toggleCreateBtn = document.getElementById('toggle-create-section-btn');
  const createFormBody = document.getElementById('create-form-body');
  if (toggleCreateBtn && createFormBody) { ... }

  // 6. POPULATE FORM SUBTOPICS
  function populateFormSubtopics() { ... }
  document.getElementById('q-paper')?.addEventListener('change', populateFormSubtopics);
  populateFormSubtopics();

  // 7. DASHBOARD SYNC
  function syncDashboard() { ... }

  // 8. SCROLL TO TOP
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => { ... });
  backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 9. HELPER FUNCTIONS
  function normalizePaperCode(paperVal) { ... }
  window.formatPaperName = function(paper) {
    const norm = normalizePaperCode(paper);
    if (norm === 'anthropology_paper1') return 'Anthro Paper 1';
    if (norm === 'anthropology_paper2') return 'Anthro Paper 2';
    return norm;
  };
  window.escapeHtml = function(str) { ... };
  function generateUniqueId(prefix = 'id') { ... }
  function getYearGroup(q) { ... }

  // 10. STORAGE & STATE
  const PRESET_STORAGE_KEY = 'qcab_preset_bank';
  const VERSION_KEY = 'qcab_data_version';
  const CURRENT_VERSION = '5';

  window.presetBank = [];
  if (localStorage.getItem(VERSION_KEY) !== CURRENT_VERSION) {
    localStorage.removeItem(PRESET_STORAGE_KEY);
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    window.presetBank = [];
  } else {
    window.presetBank = JSON.parse(localStorage.getItem(PRESET_STORAGE_KEY)) || [];
  }
  let studyData = {};
  let editingIndex = null;

  // 11. FOLDER & BOOKLET STATE
  const defaultRoot = { id: 'root', name: 'General Booklet', parentId: null, subfolders: [], questions: [] };
  let folderMap = JSON.parse(localStorage.getItem('qcab_nested_folders')) || { root: defaultRoot };
  let activeFolderId = localStorage.getItem('qcab_active_nested_folder') || 'root';
  if (!folderMap[activeFolderId]) activeFolderId = 'root';
  function saveState() { ... }
  function getActiveFolder() { return folderMap[activeFolderId] || folderMap['root']; }

  // 12. DOM REFERENCES
  // ... (Your existing DOM references remain)

  // 13. STUDY DATA FUNCTIONS
  // ... (Your existing Study functions remain)

  // 14. POPULATE FILTERS
  // ... (Your existing filter functions remain)

  // 15. LOAD QUESTIONS FROM JSON
  async function fetchJSONFile(url) { ... }
  async function loadRepositoryJSON() {
      // ...
      // Update presetBank to window.presetBank
      window.presetBank = [...newQuestions, ...existingCustom];
      savePresets();
      // ...
  }
  function savePresets() { localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(window.presetBank)); updateBankStatus(); }
  function updateBankStatus() { if (bankStatusText) bankStatusText.textContent = `Current Bank Size: ${window.presetBank.length} question(s) loaded.`; syncDashboard(); }

  // 16. RENDER BANK RESULTS
  // ... (Your existing render functions remain)

  // 17. NOTE MODAL
  // ... 

  // 18. STUDY SAVE/LOAD
  // ...

  // 19. EXPORT/IMPORT STUDY DATA
  // ...

  // 20. RENDER QUESTIONS
  // ...

  // 21. ADD/EDIT QUESTION
  // ...

  // 22. FOLDER MANAGEMENT
  // ...

  // 23. PDF GENERATOR
  // ...

  // 24. RENDER ALL
  function renderAll() { renderBreadcrumbs(); renderFolders(); renderQuestions(); updateStudyDashboard(); }

  // 25. SEARCH & FILTER LISTENERS
  // ...

  // ========== AI MODAL HANDLING ==========
  // ...
  
  // ========== FETCH AI ANSWER ==========
  window.fetchAIAnswer = function(buttonElement) { ... };

  // ========== ANALYZER INITIALIZATION ==========
  const analyzerCloseBtn = document.getElementById('analyzer-close-btn');
  if (analyzerCloseBtn) analyzerCloseBtn.addEventListener('click', closeAnalyzerModal);

  const analyzerBackBtn = document.getElementById('analyzer-back-btn');
  if (analyzerBackBtn) analyzerBackBtn.addEventListener('click', () => {
    if (currentAnalyzerTheme) {
      currentAnalyzerTheme = null;
    } else {
      currentAnalyzerSubject = null;
    }
    renderAnalyzer();
  });

  // ========== INITIALIZATION ==========
  renderAll();
  loadRepositoryJSON();
  loadCloudStudy();
  loadAnalyzerData(); // Loads the theme files for the modal
  console.log('✅ QCAB Generator loaded successfully!');
});
