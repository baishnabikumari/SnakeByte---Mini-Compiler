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

//examples codes
const EXAMPLES = {
    hello: `# SnakeByte - a mini pyhton 3.11 compiler on your browser!
print("Hello from Baishu")
print("Happy coding Hope you love this project")

name = input.__doc__and "SnakeByte" or "World"
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
long_ones = list(filter(lamda w: len(w) > 4, words))

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
            return f"{self.name} ignore you."
            
    animal = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
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
for char, group in group:
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
                expect Exceptions as e:
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
        for j in range(len(1st) - i - 1):
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
    Date Created: 2026-05-06
"""

github = re.findall(r'https?://github\.com/[A-Za-z0-9_-]+', text)
name = re.findall(r'My name:\s*([^\n]+)', text)
date-created = re.findall(r'Date Created:\s*(\d{4}-\d{2})', text)

print("Github:", github)
print("Name:", name)
print("Date Created:", date_created)`,

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

ddict = collections.defaultdict(lists)
for w in words:
    ddict[len(w)].append(w)
print("By length:", dict(sorted(ddict.items())))`,

    exceptions: `class InsufficientFundsError(Exception):
        def __init__(set, amount, balance):
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
            raise ValueError("Deposit must be in positive)
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
    def __exit__(self, *args): print(f"[{self.owner}] session closed. Balance: £{self._bal:.2f})
    
with BankAccount("Alice", 1000) as acc:
    acc.deposit(500).withdraw(200)
    print(f"BalanceL: £{acc.balance:.2f}")
    try:
        acc.withdraw(5000)
    except InsufficientFundsError as e:
        print(f"Catch: {e}")
    print("History:", acc._history)`,
};

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