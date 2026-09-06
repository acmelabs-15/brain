---
package: rjm
path: scripts/eval/_scoring_engine.py
type: script
bytes: 3187
unit: inv-rjm-223
in_scope_via: scripts/eval/eval-agent-vs-baseline.py
aliases: []
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_scoring_engine.py

## Purpose — required, verbatim
> "Scoring engine and concrete scorers for eval-agent-vs-baseline." — scripts/eval/_scoring_engine.py:1

## Design intent — required
Implements a polymorphic assertion scoring engine based on the Strategy pattern specified in DESIGN-004 §5.3 for evaluation harnesses comparing agent responses against baselines. It decouples the evaluation runner and fixture representation from specific assertion evaluation algorithms, allowing registration of new scorers (e.g., AST checkers or test suite executors) via `engine.register(kind, scorer)` without modifying `ScoringEngine` or `Fixture`. Provides concrete implementations for regex pattern matching (`REGEX`) and categorical triage verdict token extraction (`VERDICT`).

## Phase — required
rjm:eval

## Inputs — required
- Assertion objects from `_eval_agent_types`: `Assertion` — scripts/eval/_scoring_engine.py:13
- Model response text strings passed to scorer functions: `response` — scripts/eval/_scoring_engine.py:20

## Outputs — required
- Result objects from `_eval_agent_types`: `AssertionResult` — scripts/eval/_scoring_engine.py:13

## Invokes — required
- script _eval_agent_types — scripts/eval/_scoring_engine.py:13

## Invoked by — required
- script _scoring_engine — scripts/eval/eval-agent-vs-baseline.py:66
- script _scoring_engine — scripts/eval/variance-control.py:40

## Concepts named — required, verbatim
- `eval-agent-vs-baseline` — scripts/eval/_scoring_engine.py:1 — used here
- `DESIGN-004 §5.3` — scripts/eval/_scoring_engine.py:3 — used here
- `AssertionKind` — scripts/eval/_scoring_engine.py:3 — used here
- `AstScorer` — scripts/eval/_scoring_engine.py:3 — used here
- `TestPassScorer` — scripts/eval/_scoring_engine.py:4 — used here
- `ScoringEngine` — scripts/eval/_scoring_engine.py:5 — defined here
- `Fixture` — scripts/eval/_scoring_engine.py:5 — used here
- `_eval_agent_types` — scripts/eval/_scoring_engine.py:13 — used here
- `Assertion` — scripts/eval/_scoring_engine.py:13 — used here
- `AssertionResult` — scripts/eval/_scoring_engine.py:13 — used here
- `Scorer` — scripts/eval/_scoring_engine.py:15 — defined here
- `_VERDICT_RE` — scripts/eval/_scoring_engine.py:17 — defined here
- `regex_scorer` — scripts/eval/_scoring_engine.py:20 — defined here
- `verdict_scorer` — scripts/eval/_scoring_engine.py:36 — defined here
- `RegexScorer` — scripts/eval/_scoring_engine.py:56 — defined here
- `VerdictScorer` — scripts/eval/_scoring_engine.py:57 — defined here
- `build_default_engine` — scripts/eval/_scoring_engine.py:84 — defined here

## Structure
none (python module defining type aliases, regular expressions, scorer functions, engine class, and factory builder: `Scorer`, `_VERDICT_RE`, `regex_scorer`, `verdict_scorer`, `RegexScorer`, `VerdictScorer`, `ScoringEngine`, `build_default_engine`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_scoring_engine.py`, language: Python 3, lines: 90
- documented invocation:
  - "from _scoring_engine import ScoringEngine, build_default_engine" — scripts/eval/eval-agent-vs-baseline.py:66
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_scoring_engine.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (library module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls; raises `ValueError` on invalid assertion parameters or unregistered assertion kinds at lines 24, 40, 72; exits 0 when loaded as a module.
- for validators/gates: can it exit non-zero? no (scoring library). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, successfully provides pluggable scoring engine registering REGEX and VERDICT strategies.

## Defects — required
none

## Observations
- Preserves uppercase class-like alias identifiers (`RegexScorer = regex_scorer`, `VerdictScorer = verdict_scorer` at lines 56-57) to maintain verbatim consistency with names in architectural specification `DESIGN-004 §5.3`.
- `_VERDICT_RE` (line 17) uses regex pattern `^\s*\*{0,2}(IDENTIFY|OK|ESCALATE)\*{0,2}\b` with case-insensitivity, accommodating markdown bolding (`**OK**`) or leading whitespace in agent responses.

## Context cost
3187 bytes (~796 tokens). Loads `_eval_agent_types.py` (7902 bytes, ~1975 tokens). Total context cost: ~11089 bytes (~2771 tokens).
