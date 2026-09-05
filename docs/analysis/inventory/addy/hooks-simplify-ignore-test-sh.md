---
package: addy
path: hooks/simplify-ignore-test.sh
type: script
bytes: 8709
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/simplify-ignore-test.sh, sha256: 8f93c89e46c5a7478c01fa8531fa45e594fc5105411eaa7bd7c9f3ca8343926e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/simplify-ignore-test.sh

## Purpose — required, verbatim
> "Tests for the simplify-ignore hook" — hooks/simplify-ignore-test.sh:2

## Design intent — required
Provides regression testing for the `simplify-ignore.sh` hook. It extracts the core functions (`filter_file`, `hash_cmd`, `file_id`, `block_hash`, `escape_glob`) directly from the hook script and runs 10 test cases covering single-line blocks, multi-line blocks, multiple blocks, reasons, trailing newlines, absence of blocks, unclosed blocks, HTML comment styles, and malformed JSON input. Without this test script, breaking changes in block-level filtering and placeholder replacement would be hard to identify.

## Phase — required
none

## Inputs — required
- Function definitions extracted from `hooks/simplify-ignore.sh` — hooks/simplify-ignore-test.sh:34

## Outputs — required
- Test results summary formatted as `Results: %d passed, %d failed\n` on stdout — hooks/simplify-ignore-test.sh:252

## Invokes — required
- script simplify-ignore.sh — hooks/simplify-ignore-test.sh:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `simplify-ignore` — hooks/simplify-ignore-test.sh:2 — used here
- `simplify-ignore-test` — hooks/simplify-ignore-test.sh:2 — defined here
- `filter_file` — hooks/simplify-ignore-test.sh:4 — used here
- `assert_eq` — hooks/simplify-ignore-test.sh:36 — defined here

## Structure
Executable bash test suite without markdown headings:
- Test counter and temporary directory setup: `PASS=0 FAIL=0` — hooks/simplify-ignore-test.sh:9, `TMPDIR` — hooks/simplify-ignore-test.sh:10
- Helper function extraction: `hash_cmd` — hooks/simplify-ignore-test.sh:17, `file_id` — hooks/simplify-ignore-test.sh:22, `block_hash` — hooks/simplify-ignore-test.sh:23, `escape_glob` — hooks/simplify-ignore-test.sh:24
- Test assertion helper: `assert_eq` — hooks/simplify-ignore-test.sh:36-47
- Test suites 1 through 10 exercising block filtering edge cases — hooks/simplify-ignore-test.sh:49-249
- Summary report and exit evaluation — hooks/simplify-ignore-test.sh:251-253

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/simplify-ignore-test.sh`, bash, 254 lines
- documented invocation: `bash hooks/simplify-ignore-test.sh` — hooks/simplify-ignore-test.sh:5
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `bash hooks/simplify-ignore-test.sh`; stdout: `Results: 21 passed, 0 failed`; **actual exit code**: 0.
- documented exit codes vs. actual exit paths: Documented: exits 0 if FAIL is 0, 1 if FAIL > 0 (hooks/simplify-ignore-test.sh:253). Actual exit paths: `exit 0` at hooks/simplify-ignore-test.sh:253; `exit 1` at hooks/simplify-ignore-test.sh:20, 253.
- for validators/gates: Acts as a regression gate for `simplify-ignore.sh`. Passes with 0 failures on default repository branch.
- does the output match what the documentation claims? Yes, all 10 tests pass with 21 assertions passing and exit code 0.

## Defects — required
- missing-path · hooks/simplify-ignore-test.sh:34 · Script hardcodes relative path hooks/simplify-ignore.sh without anchoring to dirname of script, requiring invocation specifically from the repository root.

## Observations
- Extracts `filter_file()` directly from `hooks/simplify-ignore.sh` using `sed -n '/^filter_file()/,/^}/p'` to test internal logic without modifying the production script.
- Tests multiple comment syntaxes (`//`, `/* ... */`, `<!-- ... -->`) and validates trailing newline preservation across sed/perl filtering operations.

## Context cost
8709 bytes (~2177 tokens). Standalone test suite.
