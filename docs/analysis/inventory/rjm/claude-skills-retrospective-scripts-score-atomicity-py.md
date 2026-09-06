---
package: rjm
path: .claude/skills/retrospective/scripts/score_atomicity.py
type: script
bytes: 10304
unit: inv-rjm-149
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/scripts/score_atomicity.py

## Purpose — required, verbatim
> "Score a retrospective learning 0-100 for atomicity." — .claude/skills/retrospective/scripts/score_atomicity.py:2

## Design intent — required
Deterministic evaluator quantifying the atomicity of candidate retrospective learnings on a 0–100 scale, enforcing the quality threshold required for persistence to long-term memory. It implements the canonical deduction table defined in `diagnosis-and-actions.md`: penalizing compound statements (-15% each for "and", "also"), vague terms (-20% each), excessive length (>15 words, -5% per word), missing numeric metrics (-25%), and non-actionable copula phrasing or brevity under 4 words (-30%). Learnings scoring >=70% pass with exit code 0; statements scoring below 70% return exit code 1 to block premature persistence of vague generalizations.

## Phase — required
rjm:support

## Inputs — required
- CLI positional argument `learning` (string or stdin) — .claude/skills/retrospective/scripts/score_atomicity.py:252
- CLI flag `--json` (emit structured score breakdown JSON) — .claude/skills/retrospective/scripts/score_atomicity.py:257

## Outputs — required
- stdout: Text summary of score and quality band with itemized deductions, or JSON object when `--json` is specified — .claude/skills/retrospective/scripts/score_atomicity.py:288
- stderr: Error message when learning is missing or whitespace-only — .claude/skills/retrospective/scripts/score_atomicity.py:280
- exit code: 0 (score >= 70% threshold), 1 (score < 70% threshold), 2 (missing/empty learning argument) — .claude/skills/retrospective/scripts/score_atomicity.py:46-48

## Invokes — required
- reference diagnosis-and-actions.md — .claude/skills/retrospective/scripts/score_atomicity.py:8
- agent retrospective.md — .claude/skills/retrospective/scripts/score_atomicity.py:10

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:193

## Concepts named — required, verbatim
- `Atomicity` — .claude/skills/retrospective/scripts/score_atomicity.py:2 — defined here
- `Phase 4` — .claude/skills/retrospective/scripts/score_atomicity.py:4 — used here
- `Atomicity Scoring` — .claude/skills/retrospective/scripts/score_atomicity.py:9 — used here
- `Compound statements` — .claude/skills/retrospective/scripts/score_atomicity.py:14 — used here
- `Vague terms` — .claude/skills/retrospective/scripts/score_atomicity.py:15 — used here
- `Missing metrics/evidence` — .claude/skills/retrospective/scripts/score_atomicity.py:17 — used here
- `No actionable guidance` — .claude/skills/retrospective/scripts/score_atomicity.py:18 — used here
- `Quality Thresholds` — .claude/skills/retrospective/scripts/score_atomicity.py:20 — used here
- `Excellent` — .claude/skills/retrospective/scripts/score_atomicity.py:24 — used here
- `Good` — .claude/skills/retrospective/scripts/score_atomicity.py:25 — used here
- `Needs Work` — .claude/skills/retrospective/scripts/score_atomicity.py:26 — used here
- `Rejected` — .claude/skills/retrospective/scripts/score_atomicity.py:27 — used here
- `ADR-035` — .claude/skills/retrospective/scripts/score_atomicity.py:45 — used here
- `PERSISTENCE_THRESHOLD` — .claude/skills/retrospective/scripts/score_atomicity.py:62 — defined here
- `AtomicityScore` — .claude/skills/retrospective/scripts/score_atomicity.py:97 — defined here
- `score_learning` — .claude/skills/retrospective/scripts/score_atomicity.py:182 — defined here

## Structure
none (python script; functions and classes: `AtomicityScore`, `_count_word_occurrences`, `_has_metrics`, `_is_actionable`, `_quality_band`, `score_learning`, `build_parser`, `_read_learning`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/retrospective/scripts/score_atomicity.py`, language: Python 3, lines: 299
- documented invocation:
  - "scripts/score_atomicity.py" — .claude/skills/retrospective/SKILL.md:193
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py "The caching strategy was effective"`
  abridged stdout:
  ```
  Atomicity: 25% (Rejected)
  Deductions:
    vague: -20%
    missing_evidence: -25%
    no_action: -30%
  ```
  **actual exit code**: 1
  Additional runs:
  `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py "Always run lint before commit to prevent 50% of CI failures"` -> exit code 0
  `python3 sources/rjm/.claude/skills/retrospective/scripts/score_atomicity.py ""` -> exit code 2
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: learning scored at or above the 70% persistence threshold" — .claude/skills/retrospective/scripts/score_atomicity.py:46
  - "1: learning scored below the 70% persistence threshold (refine or reject)" — .claude/skills/retrospective/scripts/score_atomicity.py:47
  - "2: usage or configuration error (missing argument, empty learning)" — .claude/skills/retrospective/scripts/score_atomicity.py:48
  Actual exit paths in code:
  - `return 0` (.claude/skills/retrospective/scripts/score_atomicity.py:294) when `result.score >= PERSISTENCE_THRESHOLD`
  - `return 1` (.claude/skills/retrospective/scripts/score_atomicity.py:294) when `result.score < PERSISTENCE_THRESHOLD`
  - `return 2` (.claude/skills/retrospective/scripts/score_atomicity.py:281) when `not learning or not learning.strip()`
  - `sys.exit(main())` — .claude/skills/retrospective/scripts/score_atomicity.py:298
- for validators/gates: can it exit non-zero? Yes: exits 1 when candidate learning scores below 70%, 2 on empty argument. Does it fail on the source repo's own default branch? Not a repository health validator, but correctly discriminates high vs low atomicity learnings.
- does the output match what the documentation claims? Yes, matches atomicity scoring rubric and quality thresholds from references/diagnosis-and-actions.md.

## Defects — required
none

## Observations
- Clamps score to [0, 100] despite deductions exceeding 100 (e.g. cumulative penalties can sum to >100%).
- Fixes explicit word lists for compound markers (`and`, `also`) and vague markers (`generally`, `sometimes`, `effective`, `effectively`, `good`, `better`, `well`, `careful`, `important`, `matters`).
- Rejects statements shorter than 4 words (`_MIN_ACTIONABLE_WORDS`) as non-actionable (-30% penalty) to prevent single-word or empty phrases passing.
- Whole-token regex matching `(?<![\w-]){re.escape(word)}(?![\w-])` prevents false positives on substrings (e.g., `and` inside `standard`).

## Context cost
10304 bytes (~2576 tokens). Standard library only.
