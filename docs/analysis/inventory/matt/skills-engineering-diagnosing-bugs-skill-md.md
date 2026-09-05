---
package: matt
path: skills/engineering/diagnosing-bugs/SKILL.md
type: skill
bytes: 8529
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/SKILL.md

## Purpose — required, verbatim
> "Diagnosis loop for hard bugs and performance regressions. Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow." — skills/engineering/diagnosing-bugs/SKILL.md:3

## Design intent — required
Rigorous, disciplined 6-phase debugging workflow designed to eliminate speculative code-reading and hypothesis-anchoring. Mandates constructing an automated, tight, deterministic feedback loop that can go red on the specific symptom before any hypothesizing is allowed. Outlines 10 feedback loop construction methods, systematic minimization to isolate load-bearing elements, 3–5 falsifiable hypotheses with stated predictions, targeted tagged instrumentation (`[DEBUG-...]`), regression tests at the correct architectural seam, and mandatory cleanup.

## Phase — required
cross-phase

## Inputs — required
User bug report, symptom descriptions, error messages, failing test outputs, logs, environment variables, codebase context (`CONTEXT.md`), ADRs.

## Outputs — required
Tight feedback loop command/script, minimised reproduction, ranked hypotheses, targeted instrumentation, bug fix, regression test, commit/PR explanation.

## Invokes — required
- script hitl-loop.template.sh — skills/engineering/diagnosing-bugs/SKILL.md:35
- doc CONTEXT.md — skills/engineering/diagnosing-bugs/SKILL.md:10

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `diagnosing-bugs` — skills/engineering/diagnosing-bugs/SKILL.md:2 — defined here
- `feedback loop` — skills/engineering/diagnosing-bugs/SKILL.md:18 — defined here
- `Redact` — skills/engineering/diagnosing-bugs/SKILL.md:12 — defined here
- `Failing test` — skills/engineering/diagnosing-bugs/SKILL.md:26 — defined here
- `Throwaway harness` — skills/engineering/diagnosing-bugs/SKILL.md:31 — defined here
- `Property / fuzz loop` — skills/engineering/diagnosing-bugs/SKILL.md:32 — defined here
- `Bisection harness` — skills/engineering/diagnosing-bugs/SKILL.md:33 — defined here
- `Differential loop` — skills/engineering/diagnosing-bugs/SKILL.md:34 — defined here
- `HITL bash script` — skills/engineering/diagnosing-bugs/SKILL.md:35 — defined here
- `Tighten the loop` — skills/engineering/diagnosing-bugs/SKILL.md:39 — defined here
- `Red-capable` — skills/engineering/diagnosing-bugs/SKILL.md:61 — defined here
- `Deterministic` — skills/engineering/diagnosing-bugs/SKILL.md:62 — defined here
- `Minimise` — skills/engineering/diagnosing-bugs/SKILL.md:78 — defined here
- `Hypothesise` — skills/engineering/diagnosing-bugs/SKILL.md:88 — defined here
- `falsifiable` — skills/engineering/diagnosing-bugs/SKILL.md:92 — defined here
- `Instrument` — skills/engineering/diagnosing-bugs/SKILL.md:100 — defined here
- `Tag every debug log` — skills/engineering/diagnosing-bugs/SKILL.md:110 — defined here
- `regression test` — skills/engineering/diagnosing-bugs/SKILL.md:114 — defined here
- `correct seam` — skills/engineering/diagnosing-bugs/SKILL.md:116 — defined here
- `Cleanup` — skills/engineering/diagnosing-bugs/SKILL.md:130 — defined here

## Structure
- # Diagnosing Bugs — skills/engineering/diagnosing-bugs/SKILL.md:6
- ## Redact — skills/engineering/diagnosing-bugs/SKILL.md:12
- ## Phase 1: Build a feedback loop — skills/engineering/diagnosing-bugs/SKILL.md:18
- ### Ways to construct one, in roughly this order — skills/engineering/diagnosing-bugs/SKILL.md:24
- ### Tighten the loop — skills/engineering/diagnosing-bugs/SKILL.md:39
- ### Non-deterministic bugs — skills/engineering/diagnosing-bugs/SKILL.md:49
- ### When you genuinely cannot build a loop — skills/engineering/diagnosing-bugs/SKILL.md:53
- ### Completion criterion: a tight loop that goes red — skills/engineering/diagnosing-bugs/SKILL.md:57
- ## Phase 2: Reproduce + minimise — skills/engineering/diagnosing-bugs/SKILL.md:68
- ### Minimise — skills/engineering/diagnosing-bugs/SKILL.md:79
- ## Phase 3: Hypothesise — skills/engineering/diagnosing-bugs/SKILL.md:88
- ## Phase 4: Instrument — skills/engineering/diagnosing-bugs/SKILL.md:100
- ## Phase 5: Fix + regression test — skills/engineering/diagnosing-bugs/SKILL.md:114
- ## Phase 6: Cleanup — skills/engineering/diagnosing-bugs/SKILL.md:130

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, bash, 45 lines
- documented invocation: "scripts/hitl-loop.template.sh" — skills/engineering/diagnosing-bugs/SKILL.md:35
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
  Documented exit codes: none documented in `SKILL.md` or script comments.
  Actual exit paths: exits 0 at EOF after line 44; exits non-zero if bash encounters an error under `set -euo pipefail` (skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:18).
- for validators/gates: not a validator or gate (HITL interactive script helper).
- does the output match what the documentation claims? Yes, captured output feeds back formatted as key-value pairs to the agent.

## Defects — required
none

## Observations
Core philosophical stance: "If you have a tight pass/fail signal for the bug (one that goes red on this bug), you will find the cause; bisection, hypothesis-testing, and instrumentation all just consume it. If you don't have one, no amount of staring at code will save you." (lines 20–21).
Recognizes that missing architectural seams in codebases prevent regression tests from being written, and treats the absence of a seam as a notable finding in itself (line 120).

## Context cost
8529 bytes, 139 lines, ~2100 tokens. Ships helper script `scripts/hitl-loop.template.sh` (1316 bytes, ~320 tokens). Total: 9845 bytes (~2420 tokens).
