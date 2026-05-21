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
        <line x1="5" y1="5" x2="11" y2="5"/>
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

    decorators: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="8.5" cy="8" r="2.5"/>
        <path d="M11 8 C11 4.5 6 4.5 6 8 C6 11 4 12 4 12 L8.5 12"/>
    </svg>`,

    regex: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="1.5" x2="3" y2="14.5"/>
        <line x1="13" y1="1.5" x2="11" y2="14.5"/>
        <line x1="4.5" y1="8" x2="11.5" y2="8"/>
        <circle cx="8" cy="4" r="1" fill="currentColor" stroke="none"/>
        <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"/>
    </svg>`,

    json: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 2 C3.5 2 3 3 3 4.5 C3 6 2 6.5 2 8 C2 9.5 3 10 3 11.5 C3 13 3.5 14 5 14"/>
        <path d="M11 2 C12.5 2 13 3 13 4.5 C13 6 14 6.5 14 8 C14 9.5 13 10 13 11.5 C13 13 12.5 14 11 14"/>
        <line x1="6.5" y1="8" x2="9.5" y2="8"/>
    </svg>`,

    exceptions: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5 L14.5 13 L1.5 13 Z"/>
        <line x1="8" y1="6" x2="8" y2="9.5"/>
        <circle cx="8" cy="11.2" r="0.6" fill="currentColor" stroke="none"/>
    </svg>`,

    fibonacci: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
        <path d="M14 14 Q14 2 2 2"/>
        <path d="M14 14 Q14 8 8 8"/>
        <path d="M14 14 Q14 11 11 11"/>
        <line x1="2" y1="2" x2="2" y2="14"/>
        <line x1="2" y1="14" x2="14" y2="14"/>
    </svg>`,

    numpy: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
const varsBox = document.getElementById('varsBox');
const plotBox = document.getElementById('plotBox');
const execTimeEl = document.getElementById('execTime');
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
const statusDot = document.getElementById('statusDot');
const brandMarkEl = document.querySelector('.brand-mark')

const tabs = Array.from(document.querySelectorAll('.tab'));
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
let triggerEl = null;
let dropdownEl = null;

//examples codes
const EXAMPLES = {
    hello: `# SnakeByte - a mini pyhton 3.11 compiler on your browser!
print("Hello from Baishu")
print("Happy coding Hope you love this project")

name = input.__doc__ and "SnakeByte" or "World"
print(f"Welcome to Snake{'Byte'}!")`,

    math: `import math, random, statistics

nums = [random.randint(1, 100) for _ in range(10)]
print("Random Numbers:", nums)
print("Mean:  ", round(statistics.mean(nums), 2))
print("Median:", statistics.median(nums))
print("Stdev: ", round(statistics.stdev(nums), 2))

print(f"\\nπ = {math.pi:.10f}")
print(f"e = {math.e:.10f}")
print(f"√2 = {math.sqrt(2):.10f}")
print(f"sin(π/6) = {math.sin(math.pi/6):.6f}")`,

    listcomp: `# List comprehensions & functional Python
squares = [x**2 for x in range(1, 11)]
evens = [x for x in range(20) if x % 2 == 0]
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
words = ["snake", "byte", "pyhton", "wasm"]
upper = list(map(str.upper, words))
long_ones = list(filter(lambda w: len(w) > 4, words))

print("Square: ", squares)
print("Events: ", evens)
print("Matrix:")
for row in matrix:
    print(" ", row)
print("upper: ", upper)
print("Long: ", long_ones)`,

    classes: `class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

    def __repr__(self):
        return f"<Animal name={self.name!r}>"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "Woof")

    def fetch(self, item):
        return f"{self.name} fetches the {item}!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def ignore(self):
        return f"{self.name} ignores you."

animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for a in animals:
    print(a.speak())

print()
print(animals[0].fetch("ball"))
print(animals[1].ignore())
print(repr(animals[2]))`,

    generators: `import itertools, time
        
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
        
def prime_sieve(limit):
    sieve = list(range(2, limit + 1))
    for i in sieve:
        sieve = [x for x in sieve if x == i or x % i != 0]
    return sieve

gen = fibonacci()
fibs = [next(gen) for _ in range(15)]
print("Fibonacci:", fibs)

primes = prime_sieve(80)
print("Primes:  ", primes)

groups = [(k, list(v)) for k, v in itertools.groupby("AABBCCDDAAEE")]
print("\\nRLE groups:")
for char, group in groups:
    print(f"  {char!r} x {len(group)}")`,

    decorators: `import time, functools
    
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"  ⏱ {func.__name__} took {(end-start)*1000:.3f} ms")
        return result
    return wrapper
    
def retry(times=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, times + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"  Attempt {attempt} failed: {e}")
            raise RuntimeError("All retries exhausted")
        return wrapper
    return decorator

@timer
def slow_sum(n):
    return sum(range(n))

@timer
def bubble_sort(lst):
    lst = lst[:]
    for i in range(len(lst)):
        for j in range(len(lst) - i - 1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst

print("Results:")
print(" ", slow_sum(1_000_000))
print(" ", bubble_sort([64, 34, 25, 12, 22, 11, 90]))`,

    regex: `import re

text = """
    My github: https://github.com/baishnabikumari
    My name: Baishnabi Kumari
    Date Created: 2026-05
"""

github = re.findall(r'https?://github\.com/[A-Za-z0-9_-]+', text)
name = re.findall(r'My name:\\s*([^\\n]+)', text)
date_created = re.findall(r'Date Created:\\s*(\\d{4}-\\d{2})', text)

print("Github:", ', '.join(github))
print("Name:", ', '.join(name))
print("Date Created:", ', '.join(date_created))`,

    json: `import json, collections
raw = '''
{
    "language": "Python",
    "version": 3.11,
    "features": ["type hints", "match-case", "dataclasses", "walrus"],
    "author": {"name": "Guido van Rossum", "year": 1991},
    "runs_in_browser": true
}
'''

data = json.loads(raw)
print("Language:", data["language"])
print("Version: ", data["version"])
print("Features:", ", ".join(data["features"]))
print("Author:  ", data["author"]["name"], "(since", str(data["author"]["year"]) + ")")
print("Browser: ", data["runs_in_browser"])

words = "i dont know what to write here umm ya my bad".split()
counter = collections.Counter(words)
print("\\nWords counts:", dict(counter.most_common(4)))

ddict = collections.defaultdict(list)
for w in words:
    ddict[len(w)].append(w)
print("By length:", dict(sorted(ddict.items())))`,

    exceptions: `class InsufficientFundsError(Exception):
        def __init__(self, amount, balance):
            self.amount = amount
            self.balance = balance
            super().__init__(f"Cannot withdraw £{amount:.2f} — balance is £{balance:.2f}")

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._bal = balance
        self._history = []
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be in positive")
        self._bal += amount
        self._history.append(f"+£{amount:.2f}")
        return self
        
    def withdraw(self, amount):
        if amount > self._bal:
            raise InsufficientFundsError(amount, self._bal)
        self._bal -= amount
        self._history.append(f"-£{amount:.2f}")
        return self
    
    @property
    def balance(self):
        return self._bal
    
    def __enter__(self): return self
    def __exit__(self, *args): print(f"[{self.owner}] session closed. Balance: £{self._bal:.2f}")
    
with BankAccount("Alice", 1000) as acc:
    acc.deposit(500).withdraw(200)
    print(f"BalanceL: £{acc.balance:.2f}")
    try:
        acc.withdraw(5000)
    except InsufficientFundsError as e:
        print(f"Catch: {e}")
    print("History:", acc._history)`,

    fibonacci: `import time

def fib_recursive(n):
    if n <= 1: return n
    return fib_recursive(n-1) + fib_recursive(n-2)

def fib_iterative(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b

def fib_memoized(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memoized(n-1) + fib_memoized(n-2)
    return memo[n]

def fib_matrix(n):
    def mat_mul(A, B):
        return [
            [A[0][0]*B[0][0]+A[0][1]*B[1][0], A[0][0]*B[0][1]+A[0][1]*B[1][1]],
            [A[1][0]*B[0][0]+A[1][1]*B[1][0], A[1][0]*B[0][1]+A[1][1]*B[1][1]],
        ]
    def mat_pow(M, n):
        if n == 1: return M
        if n % 2 == 0:
            half = mat_pow(M, n // 2)
            return mat_mul(half, half)
        return mat_mul(M, mat_pow(M, n-1))
    if n == 0: return 0
    return mat_pow([[1,1],[1,0]], n)[0][1]

N = 30
for name, fn in [("recursive", fib_recursive), ("iterative", fib_iterative),
                 ("memoized", fib_memoized), ("matrix", fib_matrix)]:
    t = time.perf_counter()
    result = fn(N)
    elapsed = (time.perf_counter() - t) * 1000
    print(f"{name:12s} fib({N}) = {result:8d} {elapsed:8.3f} ms")`,

    numpy: `import numpy as np

a = np.array([1, 2, 3, 4, 5], dtype=float)
b = np.linspace(0, 2*np.pi, 5)

print("Array a:", a)
print("Array b:", np.round(b, 3))

print("\\na + 10:", a + 10)
print("a ** 2: ", a ** 2)
print("sin(b): ", np.round(np.sin(b), 3))

M = np.array([[1,2,3],[4,5,6],[7,8,9]])
print("\\nMatrix M:\\n", M)
print("Tranpose:\\n", M.T)
print("Row sums:", M.sum(axis=1))
print("Col means:", M.mean(axis=0))

A = np.array([[2,1],[5,3]], dtype=float)
b_vec = np.array([8, 13], dtype=float)
x = np.linalg.solve(A, b_vec)
print(f"\\nSolving 2x+y=8, 5x+3y=13 → x={x[0]:.1f}, y={x[1]:.1f}")
print("Eigenvalues:", np.round(np.linalg.eigvals(A), 4))`,

    matplotlib: `import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 2, figsize=(10, 8))
fig.patch.set_facecolor('#051F20')

for ax in axes.flat:
    ax.set_facecolor('#0B2B26')
    ax.tick_params(colors='#8EB69B')
    for spine in ax.spines.values():
        spine.set_edgecolor('#163832')

x = np.linspace(0, 4*np.pi, 300)
axes[0,0].plot(x, np.sin(x), color='#8EB69B', lw=2, label='sin')
axes[0,0].plot(x, np.cos(x), color='#DAF1DE', lw=2, label='cos')
axes[0,0].plot(x, np.sin(2*x), color='#235347', lw=1.5, ls='--', label='sin(2x)')
axes[0,0].legend(facecolor='#0B2B26', edgecolor='#163832', labelcolor='#DAF1DE')
axes[0,0].set_title('Trig Function', color='#DAF1DE')

data = np.random.normal(0, 1, 1000)
axes[0,1].hist(data, bins=30, color='#235347', edgecolor='#051F20', alpha=0.85)
axes[0,1].set_title('Normal Distribution', color='#DAF1DE')

x2 = np.random.randn(120)
y2 = x2 * 1.5 + np.random.randn(120) * 0.6
axes[1,0].scatter(x2, y2, c=np.abs(x2+y2), cmap='Greens', alpha=0.75, s=40)
axes[1,0].set_title('Scatter Plot', color='#DAF1DE')

langs = ['Pyhton', 'JS', 'Rust', 'Go', 'C++']
pops = [85, 78, 55, 60, 65]
axes[1,1].bar(langs, pops, color=['#8EB69B', '#DAF1DE', '#235347', '#163832', '#0B2B26'])
axes[1,1].set_title('Language Popularity', color='#DAF1DE')
axes[1,1].set_ylim(0, 100)

fig.suptitle('SnakeByte - Matplotlib Demo', color='#DAF1DE', fontsize=14, fontweight='bold')
plt.tight_layout()

import io, base64
buf = io.BytesIO()
plt.savefig(buf, format='png', dpi=110, facecolor=fig.get_facecolor(), bbox_inches='tight')
buf.seek(0)
img_b64 = base64.b64encode(buf.read()).decode()
print(f"SNAKEBYTE_PLOT:{img_b64}")
plt.close()`
};

//tab swtching
function switchTab(name) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    Object.entries(panels).forEach(([k, p]) => p.classList.toggle('active', k === name));
}
tabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));

//status helpers
function setStatus(msg, kind = 'ok') {
    statusText.textContent = msg;
    const dot = statusDot;
    if (kind === 'error') {
        dot.style.background = 'var(--red)';
        dot.style.boxShadow = '0 0 8px rgba(244,63,94,0.7)';
    } else if (kind === 'warn') {
        dot.style.background = 'var(--yellow)';
        dot.style.boxShadow = '0 0 8px rgba(251,191,36,0.6)';
    } else if (kind === 'run') {
        dot.style.background = '#DAF1DE';
        dot.style.boxShadow = '0 0 8px rgba(218,241,222,0.7)';
    } else {
        dot.style.background = 'var(--green)';
        dot.style.boxShadow = '0 0 8px rgba(142,182,155,0.6)';
    }
}

//Line numbers
function renderLineNumbers() {
    const n = editor.value.split('\n').length;
    lineNumbers.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n') + '\n';
}

function syncScroll() { lineNumbers.scrollTop = editor.scrollTop; }

function setBootProgress(pct, stage) {
    bootBar.style.width = pct + '%';
    bootStage.textContent = stage;
}

function injectLogo() {
    if (!brandMarkEl) return;
    Array.from(brandMarkEl.childNodes).forEach(n => {
        const isGlow = n.nodeType === Node.ELEMENT_NODE && n.classList.contains('brand-glow');
        if (!isGlow) n.remove();
    });
    const img = document.createElement('img');
    img.src = 'logo.png';
    img.alt = 'Logo';
    img.style.cssText = [
        'width:30px', 'height:30px', 'object-fit:contain',
        'position:relative', 'z-index:1', 'border-radius:4px',
        'display:block',
    ].join(';');
    //fall back if the file is not there
    img.onerror = () => img.remove();
    const glow = brandMarkEl.querySelector('.brand-glow');
    brandMarkEl.insertBefore(img, glow || null);
}

//custom example dropdown
function buildCustomDropdown() {
    const selectBox = document.querySelector('.custom-select-box');
    const wrap = document.querySelector('.pill-select-wrap');
    if (!wrap) return;

    //build trigger button
    triggerEl = document.createElement('div');
    triggerEl.className = 'examples-trigger-wrap';

    const btn = document.createElement('button');
    btn.className = 'examples-trigger';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');

    const meta = EXAMPLE_META[currentExample] || EXAMPLE_META.hello;
    btn.innerHTML = `
    <span class="trigger-content">
        <span class="trigger-icon">${meta.icon}</span>
        <span class="trigger-label">${meta.label}</span>
    </span>
    <span class="trigger-chevron">
        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:10px;height:6px">
            <polyline points="1,1 5,5 9,1"/>
        </svg>
    </span>`;

    dropdownEl = document.createElement('div');
    dropdownEl.className = 'examples-dropdown';
    dropdownEl.setAttribute('role', 'listbox');

    const header = document.createElement('div');
    header.className = 'dropdown-header';
    header.textContent = '⬡ EXAMPLES';
    dropdownEl.appendChild(header);

    const list = document.createElement('div');
    list.className = 'dropdown-list';

    Object.keys(EXAMPLE_META).forEach(key => {
        if (key === 'numpy') {
            const div = document.createElement('div');
            div.className = 'dropdown-divider';
            list.appendChild(div);
        }
        const m = EXAMPLE_META[key];
        const item = document.createElement('div');
        item.className = 'dropdown-item' + (key === currentExample ? ' active' : '');
        item.setAttribute('role', 'option');
        item.setAttribute('data-key', key);
        item.setAttribute('aria-selected', key === currentExample ? 'true' : 'false');
        item.innerHTML = `
            <span class="dropdown-item-icon">${m.icon}</span>
            <span class="dropdown-item-label">${m.label}</span>
            ${m.badge ? `<span class="dropdown-item-badge">${m.badge}</span>` : ''}`;
        item.addEventListener('click', () => { selectExample(key); closeDropdown(); });
        list.appendChild(item);
    });

    dropdownEl.appendChild(list);
    triggerEl.appendChild(btn);
    document.body.appendChild(dropdownEl);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownOpen ? closeDropdown() : openDropdown(btn);
    });
    window.addEventListener('scroll', repositionDropdown, { passive: true });
    window.addEventListener('resize', repositionDropdown, { passive: true });

    wrap.innerHTML = '';
    wrap.appendChild(triggerEl);

}

function repositionDropdown() {
    if (!dropdownOpen || !triggerEl) return;
    const btn = triggerEl.querySelector('.examples-trigger');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - 120;
    left = Math.max(8, Math.min(left, window.innerWidth - 248));
    dropdownEl.style.top = (rect.bottom + 10) + 'px';
    dropdownEl.style.left = left + 'px';
}

function openDropdown(btn) {
    dropdownOpen = true;
    repositionDropdown();
    dropdownEl.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
    dropdownOpen = false;
    dropdownEl.classList.remove('open');
    const btn = triggerEl && triggerEl.querySelector('.examples-trigger');
    if (btn) {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }
}
document.addEventListener('click', () => {
    if (dropdownOpen) closeDropdown();
});

function loadExample(name) {
    editor.value = EXAMPLES[name] || EXAMPLES.hello;
    renderLineNumbers();
    outputBox.textContent = '';
    errorBox.textContent = '';
    setStatus(`Loaded: ${EXAMPLE_META[name]?.label || name}`);
}

function selectExample(key) {
    currentExample = key;
    if (exampleSelect) exampleSelect.value = key;

    const btn = triggerEl && triggerEl.querySelector('.examples-trigger');
    const meta = EXAMPLE_META[key] || EXAMPLE_META.hello;
    if (btn) {
        btn.querySelector('.trigger-icon').innerHTML = meta.icon;
        btn.querySelector('.trigger-label').textContent = meta.label;
    }
    if (dropdownEl) {
        dropdownEl.querySelectorAll('.dropdown-item').forEach(el => {
            const active = el.dataset.key === key;
            el.classList.toggle('active', active);
            el.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }
    loadExample(key);
}

function applyTheme(light) {
    const newBg = light ? '#DAF1DE' : '#051F20';
    const left = document.createElement('div');
    const right = document.createElement('div');
    left.className = 'split-curtain split-curtain-left';
    right.className = 'split-curtain split-curtain-right';
    left.style.background = newBg;
    right.style.background = newBg;
    document.body.appendChild(left);
    document.body.appendChild(right);

    requestAnimationFrame(() => {
        left.classList.add('covering');
        right.classList.add('covering');
    });

    setTimeout(() => {
        document.body.classList.toggle('light-theme', light);
        themeCheck.checked = light;
        localStorage.setItem('sb-theme', light ? 'light' : 'dark');
        left.offsetHeight;
        left.classList.remove('covering');
        right.classList.remove('covering');
        left.classList.add('splitting');
        right.classList.add('splitting');
        setTimeout(() => { left.remove(); right.remove(); }, 500);
    }, 340);
}
themeCheck.addEventListener('change', () => applyTheme(themeCheck.checked));

if (localStorage.getItem('sb-theme') === 'light') {
    document.body.classList.add('light-theme');
    themeCheck.checked = true;
}
// function setBootProgress(pct, stage) {
//     bootBar.style.width = pct + '%';
//     bootStage.textContent = stage;
// }

//variable inspector
async function updateVarsPanel() {
    try {
        const raw = await pyodide.runPythonAsync(`
import json, types
_skip = {'__name__','__doc__','__package__','__loader__','__spec__','__builtins__','_SnakeByteCapture','_sb_stdout','_sb_stderr','sys','io'}
_vars = {}
for _k, _v in list(globals().items()):
    if _k.startswith('_') or _k in _skip:
        continue
    if isinstance(_v, types.ModuleType):
        _vars[_k] = {'type': 'module', 'val': f'<module {_v.__name__!r}>'}
    elif isinstance(_v, types.FunctionType):
        _vars[_k] = {'type': 'function', 'val': f'<function {_v.__name__}>'}
    else:
        try:
            _val = json.dumps(_v)[:120]
        except Exception:
            _val = repr(_v)[:120]
        _vars[_k] = {'type': type(_v).__name__, 'val': _val}
json.dumps(_vars)
`);
        const obj = JSON.parse(raw);
        const keys = Object.keys(obj);
        if (keys.length === 0) {
            varsBox.innerHTML = '<div class="vars-empty">No user variables yet.<br>Run some code first!</div>';
            return;
        }
        varsBox.innerHTML = keys.map(k => `
            <div class="var-row">
                <span class="var-name">${escHtml(k)}</span>
                <span class="var-type">${escHtml(obj[k].type)}</span>
                <span class="var-val">${escHtml(obj[k].val)}</span>
            </div>`).join('');
    } catch (_) { }
}

function escHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

//matplotlib preamble
const MATPLOTLIB_PREAMBLE = `
import sys as _sys, io as _io, base64 as _b64

def _sb_capture_figures():
    try:
        import matplotlib.pyplot as _plt
        for _n in _plt.get_fignums():
            _fig = _plt.figure(_n)
            _buf = _io.BytesIO()
            _fig.savefig(_buf, format='png', dpi=110, bbox_inches='tight', facecolor=_fig.get_facecolor())
            _buf.seek(0)
            print(f"SNAKEBYTE_PLOT:{_b64.b64encode(_buf.read()).decode()}")
            _buf.close()
        _plt.close('all')
    except Exception:
        pass
try:
    import matplotlib as _mpl
    _mpl.use('Agg')
    import matplotlib.pyplot as _plt
    _plt.show = _sb_capture_figures
except Exception:
    pass
`;

//Run code
async function runCode() {
    if (!pyodide || isRunning) return;
    isRunning = true;
    runBtn.classList.add('running');
    setStatus('Running...', 'run');
    outputBox.textContent = '';
    errorBox.textContent = '';
    plotBox.innerHTML = '<div class="plot-empty"> Run Matplotlib code to see the plots here</div>';

    const code = editor.value;
    const t0 = performance.now();
    let stdout_lines = [], stderr_lines = [], allPlots = [];

    try {
        await pyodide.loadPackagesFromImports(code);

        pyodide.setStdout({
            batched: (line) => {
                if (line.startsWith('SNAKEBYTE_PLOT:')) {
                    allPlots.push(line.slice('SNAKEBYTE_PLOT:'.length));
                } else {
                    stdout_lines.push(line);
                }
            }
        });
        pyodide.setStderr({ batched: (line) => stderr_lines.push(line) });

        await pyodide.runPythonAsync(MATPLOTLIB_PREAMBLE);
        await pyodide.runPythonAsync(code);
        await pyodide.runPythonAsync(`_sb_capture_figures()`);

        const elapsed = ((performance.now() - t0) / 1000).toFixed(3);
        execTimeEl.textContent = `${elapsed}s`;
        execTimeEl.style.display = 'inline';

        outputBox.textContent = stdout_lines.join('\n').trimEnd() || '(no output)';
        if (stderr_lines.length > 0) errorBox.textContent = stderr_lines.join('\n').trimEnd();

        if (allPlots.length > 0) {
            plotBox.innerHTML = allPlots.map((b64, i) => `
                <div class="plot-figure">
                    ${allPlots.length > 1 ? `<div class="plot-label">Figure ${i + 1}</div>` : ''}
                    <img src="data:image/png;base64,${b64}" alt="Figure ${i + 1}"/>
                </div>`).join('');
            switchTab('plot');
        } else {
            switchTab('output');
        }

        setStatus(`Done in ${elapsed}s ✓`);
        await updateVarsPanel();
    } catch (err) {
        const elapsed = ((performance.now() - t0) / 1000).toFixed(3);
        let msg = err.message || String(err);
        if (msg.includes('Traceback')) {
            const lines = msg.split('\n');
            const start = lines.findIndex(l => l.startsWith('Traceback'));
            if (start !== -1) msg = lines.slice(start).join('\n');
        }
        errorBox.textContent = msg;
        if (stdout_lines.length > 0) outputBox.textContent = stdout_lines.join('\n');
        switchTab('errors');
        setStatus('Error - ' + msg.split('\n').pop().trim(), 'error');
    } finally {
        isRunning = false;
        runBtn.classList.remove('running');
        pyodide.setStdout({ batched: () => { } });
        pyodide.setStderr({ batched: () => { } });
    }
}

//package installer
async function installPackage() {
    if (!micropip) return;
    const raw = pkgInput.value.trim();
    if (!raw) return;
    const pkgs = raw.split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
    pkgBtn.disabled = true;
    pkgStatus.textContent = 'Installing...';
    pkgStatus.style.color = 'var(--yellow)';
    const failed = [];
    for (const pkg of pkgs) {
        try {
            pkgStatus.textContent = `Installing ${pkg}...`;
            await micropip.install(pkg);
            if (!installedPkgs.has(pkg)) {
                installedPkgs.add(pkg);
                const chip = document.createElement('span');
                chip.className = 'pkg-chip';
                chip.textContent = ` ${pkg}`;
                pkgChips.appendChild(chip);
            }
        } catch (e) {
            failed.push(pkg);
        }
    }
    pkgBtn.disabled = false;
    pkgInput.value = '';
    if (failed.length === 0) {
        pkgStatus.textContent = `Installed ${pkgs.join(', ')}`;
        pkgStatus.style.color = 'var(--green)';
    } else {
        pkgStatus.textContent = `Failed: ${failed.join(', ')}`;
        pkgStatus.style.color = 'var(--red)';
    }
    setTimeout(() => { pkgStatus.textContent = ''; }, 4000);
}

async function resetEvn() {
    if (!pyodide || isRunning) return;
    setStatus('Resetting...', 'warn');
    await pyodide.runPythonAsync(`
_keep = {'__name__', '__doc__','__loader__','__spec__','__builtins__','_SnakeByteCapture','_sb_stdout','_sb_stderr','sys','io','micropip'}
for _k in [k for k in list(globals().keys()) if k not in _keep]:
    del globals()[_k]
`);
    outputBox.textContent = '';
    errorBox.textContent = '';
    varsBox.innerHTML = '<div class="vars-empty">Environment reset. Variables cleared.</div>';
    installedPkgs.clear();
    pkgChips.innerHTML = '';
    execTimeEl.style.display = 'none';
    setStatus('Environment reset');
}

//editor event listner
editor.addEventListener('input', () => { renderLineNumbers(); syncScroll(); });
editor.addEventListener('scroll', syncScroll);

editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const s = editor.selectionStart;
        editor.value = editor.value.slice(0, s) + '    ' + editor.value.slice(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = s + 4;
        renderLineNumbers();
        return;
    }
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        runCode();
        return;
    }
    if (e.key === 'Enter') {
        e.preventDefault();
        const text = editor.value;
        const pos = editor.selectionStart;
        const lstart = text.lastIndexOf('\n', pos - 1) + 1;
        const line = text.slice(lstart, pos).trimEnd();
        const base = text.slice(lstart, pos).match(/^ +/)?.[0] || '';
        let newLine = '\n' + base;
        if (line.endsWith(':')) newLine += '     ';
        editor.value = text.slice(0, pos) + newLine + text.slice(pos);
        editor.selectionStart = editor.selectionEnd = pos + newLine.length;
        renderLineNumbers();
    }
});

//button listner
runBtn.addEventListener('click', runCode);
clearBtn.addEventListener('click', () => {
    outputBox.textContent = '';
    errorBox.textContent = '';
    plotBox.innerHTML = '<div class="plot-empty">Run matplotlib code to see the plots here</div>';
    execTimeEl.style.display = 'none';
    setStatus('Cleared.');
});
resetBtn.addEventListener('click', resetEvn);
pkgBtn.addEventListener('click', installPackage);
pkgInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') installPackage(); });

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
            _sb_stderr = _SnakeByteCapture()
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
        bootStage.textContent = 'Failed to load: ' + err.message;
        bootBar.style.background = 'var(--red)';
    }
}

initPyodide();