/**
 * Wechselt die sichtbare Seite der Anwendung
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Header-Buttons Logik
    const backBtn = document.getElementById('globalBackBtn');
    const loginBtn = document.getElementById('loginBtn');

    if (pageId === 'phase-1' || pageId === 'phase-success') {
        backBtn.style.display = 'none';
        loginBtn.style.display = 'block';
    } else if (pageId === 'phase-login') {
        backBtn.style.display = 'block';
        loginBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
        loginBtn.style.display = 'block';
    }
}

/**
 * Speichert den Tutor-Namen für die Bestätigung
 */
function selectTutor(name, targetPageId) {
    const confirmText = document.getElementById('confirm-text');
    if (confirmText) {
        confirmText.innerText = "Du möchtest eine Stunde bei " + name + " buchen.";
    }
    showPage(targetPageId);
}

/**
 * Wechselt zwischen Schüler- und Tutor-Formular
 */
function toggleRole(role) {
    const tutorFields = document.getElementById('tutor-fields');
    const btnSchueler = document.getElementById('btn-schueler');
    const btnTutor = document.getElementById('btn-tutor');

    if (role === 'tutor') {
        tutorFields.style.display = 'block';
        btnTutor.classList.add('active');
        btnSchueler.classList.remove('active');
    } else {
        tutorFields.style.display = 'none';
        btnSchueler.classList.add('active');
        btnTutor.classList.remove('active');
    }
}

