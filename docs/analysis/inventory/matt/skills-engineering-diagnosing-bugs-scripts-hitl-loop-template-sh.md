---
package: matt
path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh
type: script
bytes: 1316
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh, sha256: 35103539fc36873eea36074769ad454f9379d6fc8b2dc0e26ce987fd3bfe5503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh

## Purpose — required, verbatim
> "Human-in-the-loop reproduction loop." — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2

## Design intent — required
Bash script template for creating interactive human-in-the-loop (HITL) reproduction loops when programmatic reproduction (automated tests, curl, browser automation) is not possible. Provides two shell helper functions (`step` and `capture`) to guide the human user through reproduction steps in their terminal, capture diagnostic feedback into variables, and print structured `KEY=VALUE` output for the supervising agent to parse.

## Phase — required
cross-phase

## Inputs — required
Interactive terminal input from the user (pressing Enter for `step`, answering text questions for `capture`).

## Outputs — required
Human prompts on stdout, followed by structured key-value output under `--- Captured ---` on stdout (`ERRORED` and `ERROR_MSG`).

## Invokes — required
none

## Invoked by — required
- skill diagnosing-bugs — skills/engineering/diagnosing-bugs/SKILL.md:35

## Concepts named — required, verbatim
- `Human-in-the-loop` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2 — defined here
- `step` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10 — defined here
- `capture` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11 — defined here
- `Captured` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:42 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, bash, 45 lines
- documented invocation: "bash hitl-loop.template.sh" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:7
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `printf '\ny\nTypeError: cannot read properties of undefined\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`
  Stdout:
  ```
  >>> Open the app at http://localhost:3000 and sign in.

  >>> Click the 'Export' button. Did it throw an error? (y/n)

  >>> Paste the error message (or 'none'):

  --- Captured ---
  ERRORED=y
  ERROR_MSG=TypeError: cannot read properties of undefined
  ```
  Actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented exit codes: none documented in script comments or header.
  Actual exit paths: exits 0 at EOF after line 44; exits non-zero if bash encounters an error under `set -euo pipefail` (skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:18).
- for validators/gates: not a validator or gate (interactive HITL reproduction script template).
- does the output match what the documentation claims? Yes, captured values are printed as `KEY=VALUE` for the agent to parse (skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:13).

## Defects — required
none

## Observations
Provides a structured bridge between automated agent execution and required manual user intervention, preventing conversational ambiguity.

## Context cost
1316 bytes, 45 lines, ~320 tokens.
