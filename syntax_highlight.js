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
    },

    cyberpunk: {
        name: 'Cyberpunk',
        keyword: '#FF00FF', builtin: '#00FFFF', string: '#FFFF00',
        comment: '#555577', number: '#FF6600', decorator: '#FF0099',
        operator: '#00FF99', caret: '#FF00FF', swatch: '#0D0D1A', accent: '#00FFFF',
    },

    sunset: {
        name: 'Sunset',
        keyword: '#FF6B6B', builtin: '#FFE66D', string: '#A8E6CF',
        comment: '#7A5C4A', number: '#FF8B94', decorator: '#FFAAA5',
        operator: '#FF9F43', caret: '#FFE66D', swatch: '#1A0800', accent: '#FF6B6B',
    },

    galaxy: {
        name: 'Galaxy',
        keyword: '#C792EA', builtin: '#82AAFF', string: '#C3E88D',
        comment: '#546E7A', number: '#F78C6C', decorator: '#FFCB6B',
        operator: '#89DDFF', caret: '#82AAFF', swatch: '#0F111A', accent: '#C792EA',
    },

    candy: {
        name: 'Candy',
        keyword: '#FF69B4', builtin: '#87CEEB', string: '#98FB98',
        comment: '#9B8B9B', number: '#FFD700', decorator: '#FF1493',
        operator: '#DDA0DD', caret: '#FF69B4', swatch: '#1A0A1A', accent: '#FF69B4',
    },

    matrix: {
        name: 'Matrix',
        keyword: '#00FF41', builtin: '#00CC33', string: '#008F11',
        comment: '#004400', number: '#00FF41', decorator: '#39FF14',
        operator: '#00CC33', caret: '#00FF41', swatch: '#000000', accent: '#00FF41',
    },

    rosegold: {
        name: 'Rosegold',
        keyword: '#E8A09A', builtin: '#F5CBA7', string: '#ABEBC6',
        comment: '#9B7B6B', number: '#F1948A', decorator: '#E59866',
        operator: '#F0B27A', caret: '#E8A09A', swatch: '#1C0F0A', accent: '#E8A09A',
    },

    midnight: {
        name: 'Midnight',
        keyword: '#7C83FD', builtin: '#96BAFF', string: '#6BFFB8',
        comment: '#5D5D8A', number: '#FFC857', decorator: '#E9724C',
        operator: '#C5C6C7', caret: '#7C83FD', swatch: '#0A0A1A', accent: '#7C83FD',
    },
}

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