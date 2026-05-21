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
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    monokai:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    nord:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    cyberpunk:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    sunset:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    galaxy:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    candy:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    matrix:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    rosegold:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },

    midnight:{
        name: 'Dracula',
        keyword: '', builtin: '', string: '',
        comment: '', number: '', decorator: '',
        operator: '', caret: '', swatch: '', accent: '',
    },
}