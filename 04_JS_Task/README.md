# JavaScript Task

This folder contains three small JavaScript exercises that demonstrate callback usage, Symbols for and simple pattern generation.

## Files
- **01_task.js** — Uses higher-order functions: `firstfn` pulls the first element from an array, passes it with the remaining items to `secondfn`, then resolves/rejects a Promise based on whether the computed sum exceeds 35.
- **02_symbol.js** — Similar sum logic, but stores the result on an object keyed by a `Symbol` to avoid property name clashes; the Promise resolves or rejects using that symbol-backed result.
- **03_pattern.js** — 
1 1 1 1 1 
1 2 2 2 1
1 2 3 2 1 
1 2 2 2 1
1 1 1 1 1
Prints an `n x n` concentric numeric pattern to the console using nested loops and `Math.min` to determine the ring depth.(minimum three variables, where n = 5)
