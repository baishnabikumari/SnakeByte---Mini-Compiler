'use strict';

const THEMES = {
    forest:{
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

    ocean:{
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

    dracula:{
        name: 'Dracula',
        keyword: '#FF79C6', builtin: '#8BE9FD', string: '#F1FABC',
        comment: '#6272A4', number: '#BD93F9', decorator: '#FFBB6C',
        operator: '#FF5555', caret: '#F8F8F2', swatch: '#282A36', accent: '#FF79C6',
    },

    monokai:{
        name: 'Monokai',
        keyword: '#F92672', builtin: '#66D9E8', string: '#E6DB74',
        comment: '#75715E', number: '#AE81FF', decorator: '#A6E22E',
        operator: '#FD971F', caret: '#F8F8F2', swatch: '#272822', accent: '#A6E22E',
    },

    nord:{
        name: 'Nord',
        keyword: '#81A1C1', builtin: '#88C0D0', string: '#A3BE8C',
        comment: '#4C566A', number: '#B48EAD', decorator: '#EBCB9B',
        operator: '#8FBCBB', caret: '#D8DEE9', swatch: '#2E3440', accent: '#88C0D0',
    },

    cyberpunk:{
        name: 'Cyberpunk',
        keyword: '#FF00FF', builtin: '#00FFFF', string: '#FFFF00',
        comment: '#555577', number: '#FF6600', decorator: '#FF0099',
        operator: '#00FF99', caret: '#FF00FF', swatch: '#0D0D1A', accent: '#00FFFF',
    },

    sunset:{
        name: 'Sunset',
        keyword: '#FF6B6B', builtin: '#FFE66D', string: '#A8E6CF',
        comment: '#7A5C4A', number: '#FF8B94', decorator: '#FFAAA5',
        operator: '#FF9F43', caret: '#FFE66D', swatch: '#1A0800', accent: '#FF6B6B',
    },

    galaxy:{
        name: 'Galaxy',
        keyword: '#C792EA', builtin: '#82AAFF', string: '#C3E88D',
        comment: '#546E7A', number: '#F78C6C', decorator: '#FFCB6B',
        operator: '#89DDFF', caret: '#82AAFF', swatch: '#0F111A', accent: '#C792EA',
    },

    candy:{
        name: 'Candy',
        keyword: '#FF69B4', builtin: '#87CEEB', string: '#98FB98',
        comment: '#9B8B9B', number: '#FFD700', decorator: '#FF1493',
        operator: '#DDA0DD', caret: '#FF69B4', swatch: '#1A0A1A', accent: '#FF69B4',
    },

    matrix:{
        name: 'Matrix',
        keyword: '#00FF41', builtin: '#00CC33', string: '#008F11',
        comment: '#004400', number: '#00FF41', decorator: '#39FF14',
        operator: '#00CC33', caret: '#00FF41', swatch: '#000000', accent: '#00FF41',
    },

    rosegold:{
        name: 'Rosegold',
        keyword: '#E8A09A', builtin: '#F5CBA7', string: '#ABEBC6',
        comment: '#9B7B6B', number: '#F1948A', decorator: '#E59866',
        operator: '#F0B27A', caret: '#E8A09A', swatch: '#1C0F0A', accent: '#E8A09A',
    },

    midnight:{
        name: 'Midnight',
        keyword: '#7C83FD', builtin: '#96BAFF', string: '#6BFFB8',
        comment: '#5D5D8A', number: '#FFC857', decorator: '#E9724C',
        operator: '#C5C6C7', caret: '#7C83FD', swatch: '#0A0A1A', accent: '#7C83FD',
    },
}

//syntax highlighter
const PYTHON_KEYWORDS = new Set([
    
])