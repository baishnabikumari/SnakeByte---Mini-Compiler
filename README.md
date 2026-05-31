# SnakeByte - full CPyhton 3.11 Compiler in the Browser.

<div align="center">


A full-featured Python 3.11 IDE that will run all in the browser - no installation, no server.
</div>

---

## Preview
> A dark and light theme Python IDE featuring real Syntax Highlighting, also with a variable inspector,
> Matplotlib plots rendering, IntelliSense(Suggestions), a livee pip installer.
> 12 builtin examples - all running into the browser, powered by WebAssembly.

## What is the SnakeByte?
Basically, it is a **non-dependent, serverless Python IDE**, Entirely Built with Pure HTML, CSS and JavaScript. It boots at real time with **Python 3.11** interpreter inside your browser using [Pyodide](https://pyodide.org) + WebAssembly - it gives you a high grade production Python environment without touching your terminal.

## Project Structure

```text
SNAKEBYTE - MINI COMPILER/
|
|── index.html
|── script.js
|── syntax_highlight.js
|── style.css
└── logo.png
```

## Features

### Real CPyhton 3.11 Runtime

SnakeByte loads **Python v0.35.1** a genuine CPython 3.11 build compiled to WebAssembly.
This is **not** a Python emulator or just a toy subset. Cuz here you get a real interpreter with:
- Complete standard library(`math`, `re`, `json`, `statistics`, `itertools`, `collections`, `io`, `base64`, `time`, `functools`, and more)
- Full OOP, generators, decorators, context managers, exceptions.
- f-strings, walrus operator `:=`, match-cases, dataclasses, type hints
- `Input.__doc__` and all builtin introspection.

---

### Code Execution Engine

Defined in `script.js` -> `runCode()`, the execution works as follows:

1. **Auto-imports** - `pyodide.loadPackagesFromImports(code)` scans your code and pre-loads any bundled packages it detects.
2. **Matplotlib preamble**
3. **Async execution** - `pyodide.runPythonAsync()` runs the code without blocking the UI.
4. **Stream capture** - `stdout` and the `stderr` these two are intercepted seprately using `pyodide.setStdout` and `setStderr` with line handlers.
5. **Plot detection** - lines prefixed with the `SNAKEBYTE_LOT:` as base64 - PNG strings and rendered in the plot tab.
6. **Timing** - it is measured with `performance.now()` to millisecond precision.
7. **Variable inspector** - `updateVarsPanel()` it runs a python introspection snippet after every successful run.

---

### pip Install Bar
The package bar at the top of the UI lets you install any PyPI package at runtime...
- Powered by **Micropip**
- Supports comma or space-seperated pacakage lists.
- Installed packages will shown in the bar only.
- Failed installations will be indicated by red status text.
- Status messages auto cleared after 4 secs.

---

### Syntax Highlighting Engine

It is the `syntax_highlight.js`, which is the single-pass tokenizer powered by a unified `TOKEN_REGEX` that matches tokens in priority order:-

| Priority | Token Type | class | Example |
|---|---|---|---|
| 1 | Comments | `.hl-c` | `# this is a comment` |
| 2 | String literals | `.hl-s` | `"hello"`, `f"""block"""` |
| 3 | Decorators | `.hl-d` | `@staticmethod` |
| 4 | Numbers | `.hl-n` | `42`, `3.14`, `1e10`, `2j` |
| 5 | Keywords | `.hl-k` | `def`, `class`, `yield`, `with` |
| 6 | Builtins | `.hl-b` | `print()`, `len()`, `range()` |
| 7 | Operators | `.hl-o` | `+`, `==`, `**`, `//` |

The Highlighter overlays a `<pre>` element sitting **behind** the transparent `<textarea>`.
Also, the colors are driven by the CSS custom properties (`--hl-k`, `--hl-s`, etc.), this means that the theme will switch instantly and with zero re-tokenization.

There are 12 themes (including the `Default Theme`)

| Themes |
|---|
| `Forest` |
| `Default` |
| `Dracula` |
|  `Monokai` |
| `Nord` |
| `Galaxy` |
| `Cyberpunk` |
| `Sunset` |
| `Candy` |
| `Matrix` |
| `Rosegold` |
| `Midnight` |

---

### Variable Inspector
After every successful code run, the **Variable** tab auto-populates with a live snapshot of the python namespace.

Working - `updateVarsPanel()`

---

### Matplotlib Plot Rendering
SnakeByte injects a `MATPLOTLIB_PREAMBLE` before your code runs that:
1. Switches Matplotlib to the non-interactive `Agg` backend
2. Patches `plt.show()` to call the `_sb_capture_figures()` instead of opening a window.
3. Code finished? => `_sb_capture_figures()` iterates all open figure numbers, which saves each in-memory `BytesIO` as a PNG at **110 DPI**, based on the base64-encodes and it print `SNAKEBYTE_PLOT:<base64data>`

The JS runner strips these lines from the stdout, build `<img>` tags, and renders them in the **Plot** tab- which is automatically detect the plots.

Figure are labelled as `Figure 1`, `Figure 2`, etc.

---

### IntelliSense

A fully custom autocomplete system driven by the animated **IntelliSense** button in the bottom-right corner fo the output panel.

**Active** - click it and you will see a toast (`IntelliSense is Active`) with a status dot which glows as per the activation(Glow red) and dis-active(back to normal).
**Off IntelliSense** - Tab it again and you will get a toast again (`IntelliSense is Not Active`)


---

### Smart Code Editor
The `<textarea>` editor implements a full set of IDE-quality keyboard behaviours:

there are many Shortcuts see below -
`Shift + Enter` → Run the code Immediately
`Tab` → Insert 4 spaces
`Ctrl or Cmd + /` → Comment
`Shift + Alt + ↓` → Duplicate line
`Alt + ↑` → Move the current line Up
`Alt + ↓` → Move the current line Down
`Ctrl or Cmd + D` → Select next occurence of the current word
`Ctrl or Cmd + l` → Select the entire current line

- Smart enter (`Auto indents to match the line; adds extra indent after : `)
- Bracket Expand (`Enter` inside `()` or `{}` creates a properly indented inner block)

---

### Dark and Light Theme toggle and its Switching Animation

- Dark Mode → Deep forest green bg.
- Light Mode → mine white background.

> The transition uses a custom **Split-curtain wipe anim**; two panels slides in from both edges -- try it by your self...

**Note** → This whole website colors is designed using the color combination from figma.

---

### Boot Splash(my fav...)

[████████████████████   ] 80%
 Setting up the SnakeByte...


There are levels in each percentage's so it is like -
| Progress | Status |
|----------|--------|
| 10% | `Fetching the pyodide runtime (Cpython 3.11).` |
| 55% | `Loading the standard library.` |
| 75% | `Setting up miropip.` |
| 90% | `Configuring environment.` |
| 100% | `Ready !!!` |

On completion the boot splash fades out with a scale-up exit animation, and The RUN botton is get enabled.

---

### 12 Built-in code Examples


---

### Want to make you own? Follow the steps below-

`Option 1 → #Clone the repo`
```bash
git clone https://github.com/baishnabikumari/SnakeByte---Mini-Compiler

cd SnakeByte---Mini-Compiler

open index.html → You must download the Live Server Extension.
```

`Option 2 → #Serve Locally`
```bash
#Using python's built-in server
python -m https.server 8080

#then visit 
http://localhost:8080
```