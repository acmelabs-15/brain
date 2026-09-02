---
package: addy
path: evals/fixtures/code-simplification/config-parser.test.js
type: file
bytes: 452
unit: inv-addy-2
---

# evals/fixtures/code-simplification/config-parser.test.js

## Purpose — required, verbatim
> "test('parses sections, values, comments, and defaults', () => {\n  assert.deepEqual(parseConfig([\n    'owner = \"Ada\"', '# ignored', '[server]', 'port = 8080',\n    'enabled = true', 'note = hello',\n  ]), {\n    default: { owner: 'Ada' },\n    server: { port: 8080, enabled: true, note: 'hello' },\n  });\n});" — evals/fixtures/code-simplification/config-parser.test.js:7-15 (no explicit purpose statement)

## Design intent — required
Provides the automated regression test suite for `config-parser.js` using Node's built-in `node:test` and `node:assert/strict`. It tests section extraction, default section assignment, comment ignoring (`#`), and value parsing (numbers, booleans, quoted strings, raw strings), ensuring that code simplification refactorings preserve parser behavior without regressions.

## Phase — required
`addy:TEST`

## Inputs — required
- Imports `parseConfig` from `./config-parser` — evals/fixtures/code-simplification/config-parser.test.js:5
- Sample config lines array: `['owner = "Ada"', '# ignored', '[server]', 'port = 8080', 'enabled = true', 'note = hello']` — evals/fixtures/code-simplification/config-parser.test.js:8-10

## Outputs — required
- Test assertion verdicts (asserts deep equality of parsed config against `{ default: { owner: 'Ada' }, server: { port: 8080, enabled: true, note: 'hello' } }`) — evals/fixtures/code-simplification/config-parser.test.js:8-14

## Invokes — required
- file `evals/fixtures/code-simplification/config-parser.js` — evals/fixtures/code-simplification/config-parser.test.js:5

## Invoked by — required
- config `evals/cases/code-simplification.json` — evals/cases/code-simplification.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/code-simplification/config-parser.test.js:3 — used here
- `node:test` — evals/fixtures/code-simplification/config-parser.test.js:4 — used here
- `parseConfig` — evals/fixtures/code-simplification/config-parser.test.js:5 — used here

## Structure
- `test('parses sections, values, comments, and defaults')` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/code-simplification/config-parser.test.js`, language: JavaScript (`node:test`), lines: 16
- documented invocation: none in file (invoked via `node --test` or `bun test`)
- **executed:** yes
- actual command run: `bun test config-parser.test.js`, actual exit code: `0`
- stdout:
  ```
  bun test v1.4.0 (34cbb9a40)

  config-parser.test.js:
  (pass) parses sections, values, comments, and defaults [1.00ms]

   1 pass
   0 fail
  Ran 1 test across 1 file. [19.00ms]
  ```
- documented exit codes vs. actual exit paths: `node:test` exits 0 on passing assertions, exits non-zero on assertion failures.
- for validators/gates: N/A
- does output match documentation: Yes, 1 test suite runs and passes cleanly against `config-parser.js`.

## Defects — required
none

## Observations
Uses built-in `node:test` runner, requiring no external package dependencies.

## Context cost
452 bytes (~113 tokens). Total context cost with `config-parser.js` is 2,044 bytes (~511 tokens).
