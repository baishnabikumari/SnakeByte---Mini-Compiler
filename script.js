'use strict';

const ICONS = {
    hello: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="2,5 6,8 2,11"/>
        <line x1="9" y1="11" x2="14" y2="11"/>
    </svg>`,

    math: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 13 L4.5 4 L8 10.5 L11.5 4 L14 13"/>
        <line x1="2" y1="8" x2="5" y2="8"/>
        <line x1="11" y1="8" x2="14" y2="8"/>
    </svg>`,

    listcomp: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3,3 1,5 3,7"/>
        <polyline points="13,3 15,5 13,7"/>
        <line x1="5" y1="5" x2="13" y2="10"/>
        <line x1="3" y1="10" x2="13" y2="10"/>
        <line x1="3" y1="13" x2="9" y2="13"/>
    </svg>`,

    classes: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="1" width="6" height="4" rx="1"/>
        <rect x="1" y="11" width="5" height="4" rx="1"/>
        <rect x="10" y="11" width="5" height="4" rx="1"/>
        <line x1="8" y1="5" x2="8" y2="8"/>
        <line x1="8" y1="8" x2="3.5" y2="11"/>
        <line x1="8" y1="8" x2="12.5" y2="11"/>
    </svg>`,

    generation: ``
}
//Dom ref
const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');
const statusText = document.getElementById('statusText');
const outputBox = document.getElementById('outputBox');
const errorBox = document.getElementById('errorBox');
const varsbox = document.getElementById('varsBox');
const plotBox = document.getElementById('plotBox');
const exectTimeE1 = document.getElementById('execTime');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const resetBtn = document.getElementById('resetBtn');
const themeCheck = document.getElementById('themeCheck');
const exampleSelect = document.getElementById('exampleSelect');
const pkgInput = document.getElementById('pkgInput');
const pkgBtn = document.getElementById('pkgBtn');
const pkgStatus = document.getElementById('pkgStatus');
const pkgChips = document.getElementById('pkgChips');
const bootSplash = document.getElementById('bootSplash');
const bootBar = document.getElementById('bootBar');
const bootStage = document.getElementById('bootStage');
const appShell = document.getElementById('appShell');

const tabe = Array.from(document.querySelectorAll('.tab'));
const panels = {
    output: document.getElementById('outputPanel'),
    errors: document.getElementById('errorsPanel'),
    vars: document.getElementById('varsPanel'),
    plot: document.getElementById('plotPanel'),
};

//state
let pyodide = null;
let micropip = null;
let isRunning = false;
let installedPkgs = new Set();
let currentExample = 'hello';
let dropdownOpen = false;
let triggerE1 = null;
let dropdownE1 = null;

function setBootProgress(pct, stage) {
    bootBar.style.width = pct + '%';
    bootStage.textContent = stage;
}

async function initPyodide() {
    try {
        setBootProgress(10, 'Fetching Pyodide runtime (CPython 3.11)...');
        pyodide = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
        });

        setBootProgress(55, 'Loading standard library...');
        await pyodide.loadPackage(['micropip'])

        setBootProgress(75, 'Setting up micropip...');
        micropip = pyodide.pyimport('micropip');

        setBootProgress(90, 'Configuring environment...');
        await pyodide.runPythonAsync(`
            import sys, io
            class _SnakeByteCapture(io.StringIO):
                pass
            _sb_stdout = _SnakeByteCapture()
            _sb_stdout = _SnakeByteCapture()
            `);

        setBootProgress(100, 'Ready!');

        setTimeout(() => {
            bootSplash.classList.add('hidden');
            appShell.style.display = 'flex';
            runBtn.disabled = false;
            pkgBtn.disabled = false;
            setStatus('CPython 3.11 ready ✓');

            injectLogo();
            buildCustomDropdown();
            selectExample(currentExample);
        }, 400);
    } catch (err) {
        bootSplash.textContent = 'Failed to load: ' + err.message;
        bootBar.style.background = 'var(--red)';
    }
}