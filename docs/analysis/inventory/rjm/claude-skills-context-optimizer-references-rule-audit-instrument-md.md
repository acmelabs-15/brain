---
package: rjm
path: .claude/skills/context-optimizer/references/rule-audit-instrument.md
type: reference
bytes: 20235
unit: inv-rjm-105
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/rule-audit-instrument.md

## Purpose — required, verbatim
> "Read this before believing any number the eval prints." — .claude/skills/context-optimizer/references/rule-audit-instrument.md:10

## Design intent — required
Defines the measurement capabilities, variance boundaries, statistical methodology, and instrument failure modes of the rule-audit evaluation harness. It proves that single eval runs cannot resolve behavioral effects smaller than ~1.0 on a 0-5 scale due to run-to-run noise (spread of 1.00 on Opus 5 and 1.11 on Sol 5.6 across identical inputs), establishing a mandatory protocol of reading sign direction rather than magnitude across 8 fixed runs (4 Opus, 4 Sol). It establishes a registered decision rule dated 2026-08-03 with two-tailed significance thresholds evaluated against a fair-coin null hypothesis (8 of 8 p=0.008, 7 of 8 p=0.070), corrects a mathematical aggregation defect where coordinate-wise medians across rubric dimensions produced synthetic scores no judge awarded, and catalogs eleven operational traps in LLM judge parsing and CLI test execution. Without this reference, engineering decisions to add or prune always-on rules would be driven by single-run noise and flawed parser outputs.

## Phase — required
cross-phase

## Inputs — required
- Rule evaluation scenario files (`unified-software-engineering.json`) — .claude/skills/context-optimizer/references/rule-audit-instrument.md:18
- Companion procedure document (`rule-audit-procedure.md`) — .claude/skills/context-optimizer/references/rule-audit-instrument.md:4
- Raw eval run artifacts in `.agents/analysis/eval-artifacts/2026-07-29-unified-software-engineering/` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:193-194
- CLI event logs (`~/.copilot/session-state/<uuid>/events.jsonl`) — .claude/skills/context-optimizer/references/rule-audit-instrument.md:276, 297-298

## Outputs — required
none

## Invokes — required
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:4
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:160
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:163

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:120

## Concepts named — required, verbatim
- `ADR-087` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:14 — used here
- `noise floor` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:47 — defined here
- `Read direction, not magnitude` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:35 — defined here
- `two-tailed` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:51 — defined here
- `sign test` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:59 — used here
- `Registered decision rule` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:67 — defined here
- `fair-coin null` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:87 — used here
- `activation_score` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:110 — defined here
- `citation_score` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:111 — defined here
- `behavior_score` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:111 — defined here
- `coordinate-wise median` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:121 — defined here
- `cell_score` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:130 — defined here
- `EVAL_PROVIDER=copilot-cli` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:178 — used here
- `_CopilotCLIProvider` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:213 — used here
- `FAIL_OVER_ACTIVATION` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:218 — defined here
- `MIN_RESTRAINT_SCORE` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:218 — defined here
- `FAIL_NEGATIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:219 — defined here
- `FAIL_POSITIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:219 — defined here
- `four-backtick fence` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:235 — defined here
- `duplicate-name guard` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:270 — used here
- `EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:283 — used here
- `totalNanoAiu` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:297 — used here
- `session.usage_checkpoint` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:299 — used here
- `_salvage_scores` — .claude/skills/context-optimizer/references/rule-audit-instrument.md:321 — used here

## Structure
- # Rule Audit Instrument
- ## What the instrument can and cannot resolve
- ### Read direction, not magnitude
- #### Registered decision rule, 2026-08-03
- ### The eight runs, for comparison
- ### The judge discarded Opus samples unevenly, and it was recoverable
- ## Known instrument gotchas

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Discovers that single-run evaluations on 2-3 scenarios cannot resolve effects smaller than 1.0 on a 0-5 rubric scale, establishing that individual run magnitudes are noise-dominated.
- Formulates a registered decision rule based on sign counting across 8 fixed runs (4 Opus, 4 Sol): evaluating direction two-tailed against a fair-coin null requires at least 7 of 8 (p=0.070) or 8 of 8 (p=0.008) to decide a keep or addition.
- Documents a significant statistical bug in legacy score reduction: taking coordinate-wise medians of separate rubric dimensions (`activation_score`, `citation_score`, `behavior_score`) created synthetic composite scores that no individual judge awarded. Fixed by averaging each judge's triple into a scalar first, then medianing scalars across judges into `cell_score`.
- Provides an exhaustive forensic taxonomy of 11 eval harness gotchas, including zero-scoring on judge parse failures, 4-backtick Markdown fence mismatches, lone fenced rubric exemplars selected over unfenced verdicts, duplicate-name attacks in nested JSON, and non-monotonic token counters.

## Context cost
20235 bytes (327 lines), approximately 5000 tokens. Transitive context when loading companion files (`rule-audit-procedure.md`, `rule-audit-evidence.md`, `rule-audit-parser-forensics.md`) reaches ~96KB (~24000 tokens).
