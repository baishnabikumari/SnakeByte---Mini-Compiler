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

    generators: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 8 A6 6 0 1 0 8 14"/>
        <polyline points="8,14 11.5,14 11.5,10.5"/>
    </svg>`,

    decorators: `<svg viewBox="0 0 16 16" fill="none" stroke="currentcolor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="8.5" cy="8" r="2.5"/>
        <path d="M14 8 C11 4.5 6 4.5 6 8 C6 11 4 12 4 12 L8.5 12"/>"
    </svg>`,

    regex: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap"round" stroke-linejoin="round">
        <line x1="5" y1="1.5" x2="3" y2="14.5"/>
        <line x1="13" y1="1.5" x2="11" y2="14.5"/>
        <line x1="4.5" y1="8" x2="11.5" y2="8"/>
        <circle cx="8" cy="4" r="1" fill="currentColor" stroke="none"/>
        <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"/>
    </svg>`,

    json: `<svg viewBox"0 0 16 16" fill="none" stroke"currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 2 C3.5 2 3 3 3 4.5 C3 6 2 6.5 2 8 C2 9.5 3 10 3 11.5 C3 13 3.5 14 5 14"/>
        <path d="M11 2 C12.5 2 13 3 13 4.5 C13 6 14 6.5 14 8 C14 9.5 13 10 13 11.5 C13 13 12.5 14 11 14"/>
        <line x1="6.5" y1="8" x2="9.5" y2="8"/>
    </svg>`,

    exceptions: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5 L14.5 13 L1.5 13 Z"/>
        <line x1="8" y1="6" x2="8" y2="9.5"/>
        <circle cx="8" cy="11.2" r="0.6" fill="currentcolor" stroke="none"/>
    </svg>`,

    fibonacci: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <path d="M14 14 Q14 2 2 2"/>
        <path d="M14 14 Q14 8 8 8"/>
        <path d="M14 14 Q14 11 11 11"/>
        <line x1="2" y1="2" x2="2" y2="14"/>
        <line x1="2" y1="14" x2="14" y2="14"/>
    </svg>`,

    numpy: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="round" stroke-linejoin="round">
        <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="0.5"/>
        <rect x="8"   y="1.5" width="4.5" height="4.5" rx="0.5"/>
        <rect x="1.5" y="8"   width="4.5" height="4.5" rx="0.5"/>
        <rect x="8"   y="8"   width="4.5" height="4.5" rx="0.5"/>
        <line x1="6" y1="3.75" x2="8" y2="3.75"/>
        <line x1="6" y1="10.25" x2="8" y2="10.25"/>
        <line x1="3.75" y1="6" x2="3.75" y2="8"/>
        <line x1="10.25" y1="6" x2="10.25" y2="8"/>
    </svg>`,

    matplotlib: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <line x1="1.5" y1="14" x2="14.5" y2="14"/>
        <line x1="2" y1="14" x2="2" y2="1.5"/>
        <rect x="3.5" y="9" width="2.5" height="5" rx="0.4" fill="currentColor" stroke="none" opacity="0.5"/>
        <rect x="7"   y="6" width="2.5" height="8" rx="0.4" fill="currentColor" stroke="none" opacity="0.7"/>
        <rect x="10.5" y="3" width="2.5" height="11" rx="0.4" fill="currentColor" stroke="none"/>
    </svg>`,
};

// examples metadata
const EXAMPLE_META = {
    hello: { label: 'Hello World', icon: ICONS.hello, badge: null },
    math: { label: 'Math & Builtins', icon: ICONS.math, badge: null },
    listcomp: { label: 'List Comprehension', icon: ICONS.listcomp, badge: null },
    classes: { label: 'Classes & OOP', icon: ICONS.classes, badge: null },
    generators: { label: 'Generators', icon: ICONS.generators, badge: null },
    decorators: { label: 'Decorators', icon: ICONS.decorators, badge: null },
    regex: { label: 'Regex', icon: ICONS.regex, badge: null },
    json: { label: 'JSON & Dict', icon: ICONS.json, badge: null },
    exceptions: { label: 'Exceptions', icon: ICONS.exceptions, badge: null },
    fibonacci: { label: 'Fibonacci', icon: ICONS.fibonacci, badge: null },
    numpy: { label: 'NumPy', icon: ICONS.numpy, badge: 'auto-install' },
    matplotlib: { label: 'Matplotlib', icon: ICONS.matplotlib, badge: 'auto-install' },
};

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