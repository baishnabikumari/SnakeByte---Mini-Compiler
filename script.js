const bootSplash = document.getElementById('bootSplash');
const bootBar = document.getElementById('bootBar');
const bootStage = document.getElementById('bootStage');
const appShell = document.getElementById('appShell');

function setBootProgress(pct, stage){
    bootBar.style.width = pct + '%';
    bootStage.textContent = stage;
}