// Voice setup
let voices = [];
function setVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = setVoices;

// Play Voice
function speak(text, buttonElement) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    msg.rate = 0.75;
    msg.pitch = 1;

    if (buttonElement && buttonElement.querySelector) {
        const icon = buttonElement.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-volume-high');
            icon.classList.add('fa-volume-up', 'fa-beat-fade');
            msg.onend = function() {
                icon.classList.remove('fa-volume-up', 'fa-beat-fade');
                icon.classList.add('fa-volume-high');
                if (Math.random() > 0.8) showCelebration();
            };
        }
    }
    window.speechSynthesis.speak(msg);
}

// Navigation
function openLesson(lessonId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    const section = document.getElementById(lessonId);
    if (section) section.classList.add('active');
    window.scrollTo(0, 0);
}

function openLessonDynamic(categoryKey, titleEs) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    
    // Update Title
    document.getElementById('dynamic-title').innerText = "Vocabulario: " + titleEs;
    
    // Render List
    const container = document.getElementById('dynamic-list');
    container.innerHTML = ''; // Limpiar
    
    const items = vocabularyData[categoryKey];
    if (items) {
        let htmlContent = '';
        items.forEach(item => {
            const enWord = item[0];
            const esWord = item[1];
            const pron = item[2] || '';
            const safeEn = enWord.replace(/'/g, "\\'"); // escape single quotes
            htmlContent += `
                <div class="word-card">
                    <div class="word-content">
                        <span class="spanish">${esWord}</span>
                        <span class="english">${enWord}</span>
                        <span class="pronunciation">${pron}</span>
                    </div>
                    <button class="play-btn" onclick="speak('${safeEn}', this)"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            `;
        });
        container.innerHTML = htmlContent;
    }
    
    document.getElementById('lesson-dynamic').classList.add('active');
    window.scrollTo(0, 0);
}

function goHome() {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById('view-home').classList.add('active');
    window.scrollTo(0, 0);
}

function showCelebration() {
    const el = document.getElementById('celebration');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2000);
}

// Initialization of Static Lists (Levels 3 & 4)
document.addEventListener("DOMContentLoaded", () => {
    
    // Render Verbs
    if (typeof verbsData !== 'undefined') {
        const verbsContainer = document.getElementById('verbs-container');
        if (verbsContainer) {
            let htmlVerbs = '<h3 class="section-title">Irregulares (Pasado cambia completo)</h3><div class="vocab-list mb-4">';
            let count = 0;
            verbsData.forEach(item => {
                if(count === 30) {
                    htmlVerbs += '</div><h3 class="section-title">Regulares (Pasado termina en -ed)</h3><div class="vocab-list mb-4">';
                }
                const [esWord, enVerb, pastVerb, rootPron, pron] = item;
                const speakTxt = `${enVerb}. Past tense: ${pastVerb}`;
                htmlVerbs += `
                    <div class="word-card phrase-card">
                        <div class="word-content">
                            <span class="spanish">${esWord}</span>
                            <span class="english" style="font-size:1.3rem;">Presente: ${enVerb} <span class="pronunciation text-primary" style="font-size:1rem; margin-left:10px;">${pron.split(' ')[0]}</span></span>
                            <span class="english" style="font-size:1.3rem; margin-top:5px; color:#f59e0b;">Pasado: ${pastVerb} <span class="pronunciation text-primary" style="font-size:1rem; margin-left:10px;">${pron.split(' ')[1] || ''}</span></span>
                        </div>
                        <button class="play-btn" onclick="speak('${speakTxt}', this)"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                `;
                count++;
            });
            htmlVerbs += '</div>';
            verbsContainer.innerHTML = htmlVerbs;
        }
    }

    // Render Modals
    if (typeof modalsData !== 'undefined') {
        const modContainer = document.getElementById('list-modals');
        if (modContainer) {
            let htmlMod = '';
            modalsData.forEach(item => {
                htmlMod += `
                    <div class="word-card">
                        <div class="word-content">
                            <span class="spanish">${item[0]}</span>
                            <span class="english">${item[1]}</span>
                            <span class="pronunciation">${item[2] || ''}</span>
                        </div>
                        <button class="play-btn" onclick="speak('${item[1]}', this)"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                `;
            });
            modContainer.innerHTML = htmlMod;
        }
    }

    // Render Sentences
    if (typeof sentencesData !== 'undefined') {
        const sentContainer = document.getElementById('list-sentences');
        if (sentContainer) {
            let htmlSent = '';
            sentencesData.forEach(item => {
                // If it's a rule
                if (!item[2]) {
                    htmlSent += `<div class="info-box mb-4"><h4>💡 ${item[0]}</h4><p>${item[1]}</p></div>`;
                } else {
                    const safeEn = item[1].replace(/'/g, "\\'");
                    htmlSent += `
                        <div class="word-card phrase-card">
                            <div class="word-content">
                                <span class="spanish">${item[0]}</span>
                                <span class="english">${item[1]}</span>
                                <span class="pronunciation">${item[2]}</span>
                            </div>
                            <button class="play-btn" onclick="speak('${safeEn}', this)"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    `;
                }
            });
            sentContainer.innerHTML = htmlSent;
        }
    }
});
