// Initialize Voices
let voices = [];
function setVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = setVoices;

// Function to speak English words using Web Speech API
function speak(text, buttonElement) {
    if (!window.speechSynthesis) {
        alert("Tu navegador no soporta la función de voz.");
        return;
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US'; // English US
    msg.rate = 0.75;    // Slower speed for easier understanding
    msg.pitch = 1;

    // Optional: add visual feedback to the button
    if (buttonElement) {
        const icon = buttonElement.querySelector('i');
        icon.classList.remove('fa-volume-high');
        icon.classList.add('fa-volume-up', 'fa-beat-fade');
        
        msg.onend = function() {
            icon.classList.remove('fa-volume-up', 'fa-beat-fade');
            icon.classList.add('fa-volume-high');
            
            // Randomly show celebration sometimes just to be encouraging
            if (Math.random() > 0.7) {
                showCelebration();
            }
        };
    }

    window.speechSynthesis.speak(msg);
}

// Simple SPA Navigation
function openLesson(lessonId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected lesson
    const target = document.getElementById(lessonId);
    if (target) {
        target.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function goHome() {
    // Hide all views
    document.querySelectorAll('.view').forEach(el => {
        el.classList.remove('active');
    });

    // Show home
    document.getElementById('view-home').classList.add('active');
    window.scrollTo(0, 0);
}

// Celebration Overlay logic
function showCelebration() {
    const el = document.getElementById('celebration');
    el.classList.add('show');
    
    // Auto hide after 2 seconds
    setTimeout(() => {
        el.classList.remove('show');
    }, 2000);
}
