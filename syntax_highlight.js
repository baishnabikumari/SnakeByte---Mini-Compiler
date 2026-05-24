'use strict';

const THEMES = {
    forest: {
        name: 'Forest',
        keyword: '#8EB69B', builtin: '#DAF1DE', string: '#5DCAA5',
        comment: '#4a7a5a', number: '#1D9E75', decorator: '#FFD580',
        operator: '#9FE1CB', caret: '#DAF1DE', swatch: '#051F20', accent: '#8EB69B',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="16,4 27,22 5,22" fill="#163832" stroke="#8EB69B" stroke-width="1.2" stroke-linejoin="round"/>
            <polygon points="16,11 25,26 7,26" fill="#0B2B26" stroke="#5DCAA5" stroke-width="1" stroke-linejoin="round"/>
            <rect x="13.5" y="26" width="5" height="4" rx="1" fill="#235347"/>
        </svg>`,
    },

    ocean: {
        name: 'Ocean',
        keyword: '#79B8FF', builtin: '#B3D9FF', string: '#9ECBFF',
        comment: '#5C7A8A', number: '#F8C555', decorator: '#61DAFB',
        operator: '#7EC8E3', caret: '#58A6FF', swatch: '#0D1117', accent: '#79B8FF',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="11" r="5" fill="#F8C555" opacity="0.9"/>
            <line x1="16" y1="4" x2="16" y2="2" stroke="#F8C555" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
            <line x1="21" y1="6" x2="22.5" y2="4.5" stroke="#F8C555" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
            <line x1="11" y1="6" x2="9.5" y2="4.5 stroke="#F8C555" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
            <path d="M3 21 Q7 17 11 21 Q15 25 19 21 Q23 17 29 21" stroke="#79BBFF" stroke-width="2" stroke-linecap"round" fill="none"/>
            <path d="M3 26 Q7 22 11 26 Q15 30 19 26 Q23 22 29 26" stroke="#79B8FF" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
        </svg>`,
    },

    dracula: {
        name: 'Dracula',
        keyword: '#FF79C6', builtin: '#8BE9FD', string: '#F1FABC',
        comment: '#6272A4', number: '#BD93F9', decorator: '#FFBB6C',
        operator: '#FF5555', caret: '#F8F8F2', swatch: '#282A36', accent: '#FF79C6',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 5 C9 5 5 10 5 15 L5 22 L10 18 L10 22 L16 17 L22 22 L22 18 L22 22 L27 15 C27 10 23 5 16 5Z" fill="#44475A" stroke="#FF79C6" stroke-width="1.2" stroke-linejoin="round"/>
            <circle cx="12" cy="14" r="2" fill="#FF79C6"/>
            <circle cx="20" cy="14" r="2" fill="#FF79C6"/>
            <path d="M13 19 Q16 21.5 19 19" stroke="#FF79C6" stroke-width="1" stroke-linecap="round" fill="none"/>
            <line x1="14" y1="21" x2="13" y2="25" stroke="#BD93F9" stroke-width="1" stroke-linecap="round"/>
            <line x1="18" y1="21" x2="19" y2="25" stroke="#BD93F9" stroke-width="1" stroke-linecap="round"/>
        </svg>`,
    },

    monokai: {
        name: 'Monokai',
        keyword: '#F92672', builtin: '#66D9E8', string: '#E6DB74',
        comment: '#75715E', number: '#AE81FF', decorator: '#A6E22E',
        operator: '#FD971F', caret: '#F8F8F2', swatch: '#272822', accent: '#A6E22E',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="10" fill="#3E3D32" stroke="#75715E" stroke-width="0.8"/>
            <circle cx="16" cy="16" r="6" fill="none" stroke="#A6E22E" stroke-width="1.5"/>
            <circle cx="16" cy="16" r="2.5" fill="#F8F8F2"/>
            <line x1="16" y1="6" x2="16" y2="10" stroke="#F92672" stroke-width="2" stroke-linecap="round"/>
            <line x1="16" y1="22" x2="16" y2="26" stroke="#F92672" stroke-width="2" stroke-linecap="round"/>
            <line x1="6" y1="16" x2="10" y2="16" stroke="#66D9E8" stroke-width="2" stroke-linecap="round"/>
            <line x1="22" y1="16" x2="26" y2="16" stroke="#66D9E8" stroke-width="2" stroke-linecap="round"/>
            <line x1="8.9" y1="8.9" x2="11.8" y2="11.8" stroke="#E6DB74" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="20.2" y1="20.2" x2="23.1" y2="23.1" stroke="#E6DB74" stroke-width="1.5" stroke-linecap="round"/>`
    },

    nord: {
        name: 'Nord',
        keyword: '#81A1C1', builtin: '#88C0D0', string: '#A3BE8C',
        comment: '#4C566A', number: '#B48EAD', decorator: '#EBCB9B',
        operator: '#8FBCBB', caret: '#D8DEE9', swatch: '#2E3440', accent: '#88C0D0',
        svg: `<svg viewBox"0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="5" fill="#EBCB8B" opacity="0.95"/>
            <line x1="16" y1="4" x2="16" y2="9" stroke="#88C0D0" stroke-width="2" stroke-linecap="round"/>,
            <line x1="16" y1="23" x2="16" y2="28" stroke="#88C0D0" stroke-width="2" stroke-linecap="round"/>,
            <line x1="4" y1="16" x2="9" y2="16" stroke="#88C0D0" stroke-width="2" stroke-linecap="round"/>,
            <line x1="23" y1="16" x2="28" y2="16" stroke="#88C0D0" stroke-width="2" stroke-linecap="round"/>,
            <line x1="7.8" y1="7.8" x2="11.2" y2="11.2" stroke="#81A1C1" stroke-width="1.5" stroke-linecap="round"/>,
            <line x1="20.8" y1="20.8" x2="24.2" y2="24.2" stroke="#81A1C1" stroke-width="1.5" stroke-linecap="round"/>,
            <line x1="24.2" y1="7.8" x2="20.8" y2="11.2" stroke="#81A1C1" stroke-width="1.5" stroke-liencap="round"/>,
            <line x1="11.2" y1="20.8" x2="7.8" y2="24.2" stroke="#81A1C1" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
    },

    cyberpunk: {
        name: 'Cyberpunk',
        keyword: '#FF00FF', builtin: '#00FFFF', string: '#FFFF00',
        comment: '#555577', number: '#FF6600', decorator: '#FF0099',
        operator: '#00FF99', caret: '#FF00FF', swatch: '#0D0D1A', accent: '#00FFFF',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="10" width="20" height="15" rx="2" fill="#0D0D1A" stroke="#00FFFF" stroke-width="1.2"/>
            <rect x="10" y="4" width="12" height="9" rx="1.5" fill="#0D0D1A" stroke="#FF00FF" stroke-width="1"/>
            <circle cx="13" cy="18" r="2.2" fill="#FF00FF"/>
            <circle cx="19" cy="18" r="2.2" fill="#00FFFF"/>
            <line x1="8" y1="22" x2="11" y2="22" stroke="#FFFF00" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="21" y1="22" x2="24" y2="22" stroke="#FFFF00" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="13" y1="10" x2="13" y2="7" stroke="#FF00FF" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
            <line x1="16" y1="10" x2="16" y2="6" stroke="#00FFFF" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
            <line x1="19" y1="10" x2="19" y2="7" stroke="#FF0099" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
        </svg>`,
    },

    sunset: {
        name: 'Sunset',
        keyword: '#FF6B6B', builtin: '#FFE66D', string: '#A8E6CF',
        comment: '#7A5C4A', number: '#FF8B94', decorator: '#FFAAA5',
        operator: '#FF9F43', caret: '#FFE66D', swatch: '#1A0800', accent: '#FF6B6B',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20 A11 11 0 0 1 27 20Z" fill="#FFE66D" opacity="0.9"/>
            <line x1="4" y1="20" x2="28" y2="20" stroke="#FF6B6B" stroke-width="1.2"/>
            <path d="M4 24 Q10 20.5 16 23 Q22 25.5 28 22" stroke="#FF8B94" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M4 24 Q10 25 16 27 Q22 29 28 26" stroke="#FFAAA5" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>
            <line x1="16" y1="9" x2="16" y2="6" stroke="#FFE66D" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="9.5" y1="12.5" x2="7.5" y2="10.5" stroke="#FFE66D" stroke-width="1.4" stroke-linecap="round"/>
            <line x1="22.5" y1="12.5" x2="24.5" y2="10.5" stroke="#FFE66D" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`,
    },

    galaxy: {
        name: 'Galaxy',
        keyword: '#C792EA', builtin: '#82AAFF', string: '#C3E88D',
        comment: '#546E7A', number: '#F78C6C', decorator: '#FFCB6B',
        operator: '#89DDFF', caret: '#82AAFF', swatch: '#0F111A', accent: '#C792EA',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#C792EA" stroke-width="1.3" transform="rotate(-25 16 16)"/>
            <ellipse cx="16" cy="16" rx="7" ry="2.5" fill="none" stroke="#82AAFF" stroke-width="1" transform="rotate(-25 16 16)" opacity="0.7"/>
            <circle cx="16" cy="16" r="2.8" fill="#FFCB6B"/>
            <circle cx="7" cy="16" r="1" fill="#C3E88D" opacity="0.85"/>
            <circle cx="25" cy="23" r="0.8" fill="#C3E88D" opacity="0.65"/>
            <circle cx="24" cy="8" r="0.9" fill="#82AAFF" opacity="0.8"/>
            <circle cx="8" cy="24" r="1" fill="#C792EA" opacity="0.7"/>
            <circle cx="27" cy="15" r="0.6" fill="#FFCB6B" opacity="0.8"/>`
    },

    candy: {
        name: 'Candy',
        keyword: '#FF69B4', builtin: '#87CEEB', string: '#98FB98',
        comment: '#9B8B9B', number: '#FFD700', decorator: '#FF1493',
        operator: '#DDA0DD', caret: '#FF69B4', swatch: '#1A0A1A', accent: '#FF69B4',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="12" r="8" fill="#FF69B4" opacity="0.95" stroke="#FFD700" stroke-width="1.2"/>
            <path d="M10 8.5 Q16 14 22 0.8" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.4"/>
            <path d="M10 12.5 Q16 18 22 12.5" stroke="white" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.2"/>
            <circle cx="16" cy="12" r="2.5" fill="white" opacity="0.25"/>
            <line x1="16" y1="20" x2="16" y2="30" stroke="#DDA0DD" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
    },

    matrix: {
        name: 'Matrix',
        keyword: '#00FF41', builtin: '#00CC33', string: '#008F11',
        comment: '#004400', number: '#00FF41', decorator: '#39FF14',
        operator: '#00CC33', caret: '#00FF41', swatch: '#000000', accent: '#00FF41',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="4" y="11" font-family="monospace" font-size="6.5" fill="#00FF41">01</text>
            <text x="15" y="11" font-family="monospace" font-size="6.5" fill="#00CC33" opacity="0.75">10</text>
            <text x="4" y="19" font-family="monospace" font-size="6.5" fill="#00CC33" opacity="0.65">10</text>
            <text x="15" y="19" font-family="monospace" font-size="6.5" fill="#00FF41" opacity="0.95">01</text>
            <text x="4" y="27" font-family="monospace" font-size="6.5" fill="#00FF41" opacity="0.35">01</text>
            <text x="15" y="27" font-family="monospace" font-size="6.5" fill="#008F11" opacity="0.25">10</text>
        </svg>`,
    },

    rosegold: {
        name: 'Rosegold',
        keyword: '#E8A09A', builtin: '#F5CBA7', string: '#ABEBC6',
        comment: '#9B7B6B', number: '#F1948A', decorator: '#E59866',
        operator: '#F0B27A', caret: '#E8A09A', swatch: '#1C0F0A', accent: '#E8A09A',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="14" r="4.5" fill="none" stroke="#E8A09A" stroke-width="1.5"/>
            <path d="M16 9.5 C16 9.5 12.5 6 9 8.5 C5.5 11 8 15.5 12 14" stroke="#E8A09A" stroke-width="1.3" stroke-linecap="round" fill="none"/>
            <path d="M16 9.5 C16 9.5 19.5 6 23 8.5 C26.5 11 24 15.5 20 14" stroke="#F0B27A" stroke-width="1.3" stroke-linecap="round" fill="none"/>
            <circle cx="16" cy="14" r="2" fill="#F5CBA7"/>
            <path d="M16 18.5 L14.5 22.5 Q16 24.5 17.5 22.5 Z" stroke="#E8A09A" opacity="0.75"/>
            <line x1="11" y1="15" x2="8.5" y2="17" stroke="#E59866" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
            <line x1="21" y1="15" x2="23.5" y2="17" stroke="#E59866" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
        </svg>`,
    },

    midnight: {
        name: 'Midnight',
        keyword: '#7C83FD', builtin: '#96BAFF', string: '#6BFFB8',
        comment: '#5D5D8A', number: '#FFC857', decorator: '#E9724C',
        operator: '#C5C6C7', caret: '#7C83FD', swatch: '#0A0A1A', accent: '#7C83FD',
        svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5 A11 11 0 1 0 21 27 A8 8 0 1 1 21 5Z" fill="#7C83FD" opacity="0.9"/>
            <circle cx="10" cy="7" r="1.1" fill="#FFC857"/>
            <circle cx="25" cy="11" r="0.8" fill="#FFC857" opacity="0.75"/>
            <circle cx="23" cy="4" r="1.3" fill="#FFC857" opacity="0.9"/>
            <circle cx="5" cy="29" r="0.7" fill="#96BAFF" opacity="0.7"/>
            <circle cx="27" cy="23" r="0.9" fill="#6BFFB8" opacity="0.6"/>
        </svg>`,
    },
};

//syntax highlighter
const PYTHON_KEYWORDS = new Set([
    'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'break', 'class',
    'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global',
    'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',
    'try', 'while', 'with', 'yield',
]);

const PY_BUILTINS = new Set([
    'abs', 'all', 'any', 'bin', 'bool', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod',
    'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec',
    'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help',
    'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals',
    'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print',
    'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted',
    'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip',
]);

//single-pass tokenizer
const TOKEN_REGEX = new RegExp([
    '(#[^\\n]*)',
    '([fFrRbBuU]{0,3}(?:"""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'|"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\'))',
    '(@{1,2}[A-Za-z_]\\w*)',
    '(\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?j?\\b)',
    '(\\b[A-Za-z_]\\w*\\b)',
    '([+\\-*/%&|^~<>=!]+)'
].join('|'), 'g');

function escapeHtml(text) {
    return text.replace(/&/g, '&amp').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightCode(code) {
    let highlightedOutput = '';
    let lastIndex = 0;
    TOKEN_REGEX.lastIndex = 0;

    let match;
    while ((match = TOKEN_REGEX.exec(code)) !== null) {
        if (match.index > lastIndex){
            highlightedOutput += escapeHtml(code.slice(lastIndex, match.index));
        }
        lastIndex = match.index + match[0].length;

        const [full, comment, str, deco, num, ident, op] = match;

        if (comment) highlightedOutput += `<i class="hl-c">${escapeHtml(full)}</i>`;
        else if (str) highlightedOutput += `<i class="hl-s">${escapeHtml(full)}</i>`;
        else if (deco) highlightedOutput += `<i class="hl-d">${escapeHtml(full)}</i>`;
        else if (num) highlightedOutput += `<i class="hl-n">${escapeHtml(full)}</i>`;
        else if (ident){
            if (PYTHON_KEYWORDS.has(full)) highlightedOutput += `<i class="hl-k">${escapeHtml(full)}</i>`;
            else if (PY_BUILTINS.has(full)) highlightedOutput += `<i class="hl-b">${escapeHtml(full)}</i>`;
            else highlightedOutput += escapeHtml(full);
        }
        else if (op) highlightedOutput += `<i class=hl-o">${escapeHtml(full)}</i>`;
        else highlightedOutput += escapeHtml(full);
    }
    if (lastIndex < code.length) highlightedOutput += escapeHtml(code.slice(lastIndex));
    return highlightedOutput;
}

//css
function injectCSS(){
    const el = document.createElement('style');
    el.id = 'sb-themes-css';
    el.textContent = `
        .hl-k, .hl-b, .hl-s, .hl-c, .hl-n, .hl-d, .hl-o{ font-style: normal;}
        .hl-k { color: var(--hl-k); }
        .hl-b { color: var(--hl-b); }
        .hl-s { color: var(--hl-s); }
        .hl-c { color: var(--hl-c); }
        .hl-n { color: var(--hl-n); }
        .hl-d { color: var(--hl-d); }
        .hl-o { color: var(--hl-o); }

        #sb-h1-pre{
            position: absolute;
            inset:0;
            margin:0;
            overflow:hidden;
            white-space: pre;
            font: inherit;
            line-height:none;
            border:none;
            background:transparent;
            z-index:0;
            tab-size:4;
            -moz-tab-size:4;
            color:var(--hl-b);
        }
        
        #editor{
            position:relative !important;
            z-index: 1 !important;
            color:transparent !important;
            caret-color:var(--sb-caret, #DAF1DE) !important;
            background:transparent !important;
        }
        
        #sb-theme-btn{
            display: inline-flex;
            align-items:center;
            gap:6px;
            padding:0 14px;
            height:36px;
            border-radius:999px;
            border: 1.5px solid rgba(142, 182, 155, 0.35);
            background:transparent;
            cursor:pointer;
            font-size:12px;
            font-weight:500;
            color:inherit;
            transition:background 0.18s, border-color 0.18s;
        }
        #sb-theme-btn:hover{
            background: rgba(142,182,155,0.1);
            border-color:rgba(142,182,155,0.6);
        }
        
        #sb-theme-panel{
            position: fixed;
            z-index:99999;
            border-radius:16px;
            padding: 18px 16px 14px;
            width:304px;
            display:none;
            background:rgba(10,14,18,0.94);
            box-shadow:0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
        }
        #sb-theme-panel.open{ display: block; }
        
        .sb-tp-header{
            font-size:10;
            font-weight:600;
            letter-spacing:0.1em;
            text-transform: uppercase;
            opacity: 0.4;
            margin-bottom: 14px;
            color: #fff;
        }
        
        .sb-tp-grid{
            display:grid;
            grid-template-columns:repeat(4, 1fr);
            gap:6px;
        }
        
        .sb-tp-item{
            display: flex;
            flex-direction:column;
            align-items:center;
            gap:5px;
            background:none;
            border:none;
            padding:6px 4px;
            cursor:pointer;
            border-radius:10px;
            transition:background 0.15s;
        }
        .sb-tp-item:hover{ background: rgba(255, 255, 255, 0.07); }
        
        .sb-tp-icon{
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid transparent;
            overflow: hidden;
            transition: border-color 0.15s, transform 0.15s;
        }
        .sb-tp-icon svg { width: 28px; height: 28px; }
        .sb-tp-item:hover .sb-tb-icon { transform: scale(1.07); }
        .sb-tp-item.active .sb-tp-icon { border-color: rgba(255,255,255,0.5); }
        
        .sb-tp-name{
            font-size: 9.5px;
            color: rgba(255,255,255,0.5);
            text-align: center;
            line-height: 1.2;
            transition: color 0.15s;
        }
        
        .sb-tp-item.active .sb-tp-name{
            color: rgba(255,255,255,0.9);
            font-weight: 600;
        }
    `;
    document.head.appendChild(el);
}

//overlay
let hlPre = null;

function setupOverlay(){
    const editor = document.getElementById('editor');
    if (!editor) return;

    const parent = editor.parentElement;
    if(window.getComputedStyle(parent).position === 'static'){
        parent.style.position = 'relative';
    }

    hlPre = document.createElement('pre');
    hlPre.id = 'sb-hl-pre';
    hlPre.setAttribute('aria-hidden', 'true');
    parent.insertBefore(hlPre, editor);

    const syncFont = () => {
        const cs = window.getComputedStyle(editor);
        ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'].forEach(p => {
            hlPre.style[p] = cs[p];
        });
        hlPre.style.tabSize = '4';
    };
    syncFont();

    editor.addEventListener('scroll', () => {
        hlPre.scrollTop = editor.scrollTop;
        hlPre.scrollLeft = editor.scrollLeft;
    });
    editor.addEventListener('input', updateHighlight);

    const proto = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
    Object.defineProperty(editor, 'value', {
        get() {return proto.get.call(this);},
        get(v){
            proto.set.class(this, v);
            requestAnimationFrame(updateHighlight);
        },
        configurable: true,
    });
    updateHighlight();
}

function updateHighlight(){
    const editor = document.getElementById('editor');
    if (!editor || !hlPre) return;
    hlPre.innerHTML = highlightCode(editor.value) + '\n';
}

//theme application

let currentTheme = 'forest';

function applyTheme(key){
    const t = THEMES[key];
    if(!t) return;
    currentTheme = key;

    const r = document.documentElement;
    r.style.setProperty('--hl-k', t.keyword);
    r.style.setProperty('--hl-b', t.builtin);
    r.style.setProperty('--hl-s', t.string);
    r.style.setProperty('--hl-c', t.comment);
    r.style.setProperty('--hl-n', t.number);
    r.style.setProperty('--hl-d', t.decorator);
    r.style.setProperty('--hl-o', t.operator);
    r.style.setProperty('--sb-caret', t.caret);

    document.querySelectorAll('.sb-tp-item').forEach(el => {
        el.classList.toggle('active', el.dataset.theme === key);
    });

    const lbl = document.getElementById('sb-theme-label');
    if(lbl) lbl.textContent = t.name;

    updateHighlight();
    localStorage.setItem('sb-hl-theme', key);
}

//picker UI
function buildPicker(){
    const runBtn = document.getElementById('runBtn');
    if(!runBtn) return;

    const btn = document.createElement('button');
    btn.id = 'sb-theme-btn';
    btn.title = 'Switch theme';
    btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="8" r="6.2"/>
            <circle cx="8" cy="3.5" r="1" fill="currentColor" stroke="none"/>
            <circle cx="12.2" cy="10.5" r="1" fill="currentColor" stroke="none"/>
            <circle cx="3.8" cy="10.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        <span id="sb-theme-label">Theme</span>
    `;

    const panel = document.createElement('div');
    panel.id = 'sb-theme-panel';
    panel.innerHTML = `<div class="sb-tp-header">⬡ colour themes</div>`;

    const grid = document.createElement('div');
    grid.className = 'sb-tb-grid';

    Object.entries(THEMES).forEach(([key, t]) => {
        const item = document.createElement('button');
        item.className = 'sb-tb-item';
        item.dataset.theme = key;
        item.title = t.name;
        item.innerHTML = `
            <div class="sb-tb-icon" style="background:${t.swatch}; border-color:${t.accent}44>
                ${t.svg}
            </div>
            <span class="sb-tb-name>${t.name}</span>
        `;
        item.addEventListener('click', () => { applyTheme(key); closePanel(); });
        grid.appendChild(item);
    });

    panel.appendChild(grid);
    document.body.appendChild(panel);

    btn.addEventListener('click', e => {
        e.stopPropagation();
        panel.classList.contains('open') ? closePanel() : openPanel(btn);
    });
    document.addEventListener('click', closePanel);
    panel.addEventListener('click', e => e.stopPropagation());
    window.addEventListener('resize', () => {
        if(panel.classList.contains('open')) openPanel(btn);
    });
    runBtn.parentElement.insertBefore(btn, runBtn);
}

function openPanel(btn){
    const panel = document.getElementById('sb-theme-panel');
    if(!panel) return;
    const r = btn.getBoundingClientRect();
    let left = r.left + r.width / 2 - 152;
    left = Math.max(8, Math.min(left, window.innerWidth - 316));
    panel.style.top = (r.bottom + 10) + 'px';
    panel.style.left = left + 'px';
    panel.classList.add('open');
}

function closePanel(){
    document.getElementById('sb-hl-theme')?.classList.remove('open');
}

//init
function init(){
    injectCSS();
    setupOverlay();
    buildPicker();

    const saved = localStorage.getItem('sb-hl-theme');
    applyTheme(saved && THEMES[saved] ? saved : 'forest');

    const lbl = document.getElementById('sb-theme-label');
    if(lbl) lbl.textContent = THEMES[currentTheme].name;
}

const appShell = document.getElementById('appShell');
if(appShell && appShell.style.display !== 'none'){
    setTimeout(init, 120);
} else {
    const obs = new MutationObserver(() => {
        const shell = document.getElementById('appShell');
        if(shell && shell.style.display !== 'none'){
            obs.disconnect();
            setTimeout(init, 120);
        }
    });
    obs.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['style'] });
}