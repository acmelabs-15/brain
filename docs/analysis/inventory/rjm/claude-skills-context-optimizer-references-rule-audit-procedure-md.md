---
package: rjm
path: .claude/skills/context-optimizer/references/rule-audit-procedure.md
type: reference
bytes: 36568
unit: inv-rjm-107
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/rule-audit-procedure.md

## Purpose — required, verbatim
> "How to decide whether an always-on rule earns its slot, with evidence rather than taste. Companion to `model-context-doctrine.md`, which holds the argument this procedure tests." — .claude/skills/context-optimizer/references/rule-audit-procedure.md:15-17

## Design intent — required
Defines a rigorous, empirical, and reproducible 9-step audit procedure (Step 0a pre-registration through Step 5 adversarial review, encompassing deterministic baselines, manual conflict audits, multi-model eval runs, and registered decision rules) to determine whether an always-on rule earns its permanent slot in context or belongs in progressive disclosure. The procedure documents extensive instrument limitations and noise floors (showing a run-to-run spread of ~1.0 on a 0-5 scale for single generations), establishes sign-counting across fixed replicates (4 runs per model on Opus 5 and Sol 5.6) rather than unreliable mean deltas, and details historical parser vulnerabilities and sample loss recovery. Without this procedure, context budgeting decisions would degenerate into subjective taste arguments, conflicting always-on directives, and premature rule cut or keep decisions driven by stochastic eval noise.

## Phase — required
cross-phase

## Inputs — required
- Proposed or existing always-on rules in `.claude/rules/` and generated mirrors in `.github/instructions/` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:64-65
- Byte budgets and ceilings via `instruction_budget.py` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:56 and `instruction_budget_constants.py` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:68
- Eval scenario JSON files under `tests/evals/rule-scenarios/<rule>.json` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:132 and `tests/evals/rule-scenarios/` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:623
- Pre-registered decision rules committed before eval runs — .claude/skills/context-optimizer/references/rule-audit-procedure.md:37-43
- Evaluated models (`claude-opus-5` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:133, `gpt-5.6-sol` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:137) accessed via `EVAL_PROVIDER=copilot-cli` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:131
- Session event logs in `~/.copilot/session-state/<uuid>/events.jsonl` for actual token usage and attribution — .claude/skills/context-optimizer/references/rule-audit-procedure.md:180, 593

## Outputs — required
- Deterministic byte counts and headroom reports (JSON/table formats) — .claude/skills/context-optimizer/references/rule-audit-procedure.md:56, 486
- Generated instruction mirror files refreshed via `build/scripts/generate_rules.py` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:66, 498
- Scored eval result artifacts in `/tmp/audit/*.json` and committed run archives — .claude/skills/context-optimizer/references/rule-audit-procedure.md:134, 409
- Three-mechanism comparison tables (`baseline`, `description`, `full`) with positive/negative averages and deltas — .claude/skills/context-optimizer/references/rule-audit-procedure.md:197-202
- Falsifiable verdicts (`FAIL_OVER_ACTIVATION` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:433, `FAIL_JUDGE_ERRORS` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:208, `FAIL_NEGATIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:434, `FAIL_POSITIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:434)
- Registered decision outcomes (retaining in always-on vs moving body to progressive disclosure) — .claude/skills/context-optimizer/references/rule-audit-procedure.md:444-447
- Adversarial review findings with file:line citations from cross-model validation — .claude/skills/context-optimizer/references/rule-audit-procedure.md:514-527

## Invokes — required
- reference model-context-doctrine.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:16
- reference memory-router.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:12
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:375
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:378
- script instruction_budget.py — .claude/skills/context-optimizer/references/rule-audit-procedure.md:56
- script generate_rules.py — .claude/skills/context-optimizer/references/rule-audit-procedure.md:66
- script eval-rule-activation.py — .claude/skills/context-optimizer/references/rule-audit-procedure.md:131
- script check_rule_activation_coverage.py — .claude/skills/context-optimizer/references/rule-audit-procedure.md:463
- skill software-engineering-library — .claude/skills/context-optimizer/references/rule-audit-procedure.md:510

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:23
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:119
- reference model-context-doctrine.md — .claude/skills/context-optimizer/references/model-context-doctrine.md:107
- reference model-context-doctrine.md — .claude/skills/context-optimizer/references/model-context-doctrine.md:275
- reference model-context-doctrine.md — .claude/skills/context-optimizer/references/model-context-doctrine.md:310
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/references/rule-audit-evidence.md:3
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/references/rule-audit-evidence.md:92
- reference rule-audit-instrument.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:4

## Concepts named — required, verbatim
- `Rule Audit Procedure` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:1 — defined here
- `Pre-register the decision rule` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:28 — defined here
- `Deterministic baseline` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:51 — defined here
- `Conflict audit` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:72 — defined here
- `complementary altitude` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:110 — defined here
- `scope graduation` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:115 — defined here
- `Behavioral baseline` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:125 — defined here
- `baseline` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:144 — used here
- `description` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:145 — used here
- `full` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:146 — used here
- `progressive disclosure` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:157 — used here
- `FAIL_JUDGE_ERRORS` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:208 — defined here
- `noise floor` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:221 — defined here
- `sign test` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:274 — used here
- `Registered decision rule` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:282 — defined here
- `activation_score` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:325 — used here
- `citation_score` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:326 — used here
- `behavior_score` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:326 — used here
- `cell_score` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:345 — defined here
- `FAIL_OVER_ACTIVATION` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:433 — defined here
- `MIN_RESTRAINT_SCORE` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:433 — used here
- `FAIL_NEGATIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:434 — defined here
- `FAIL_POSITIVE_INCOMPLETE` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:434 — defined here
- `Prove the delta` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:494 — defined here
- `Adversarial review` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:512 — defined here
- `Known instrument gotchas` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:534 — defined here
- `Scenario files` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:621 — defined here
- `skip-rule-not-applicable` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:627 — used here

## Structure
- `Rule Audit Procedure` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:1
- `Read this first` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:22
- `Step 0a. Pre-register the decision rule before any scored eval run` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:28
- `Step 0. Deterministic baseline` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:51
- `Step 0b. Conflict audit` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:72
- `Step 1. Behavioral baseline` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:125
- `Ambient instructions contaminated runs archived before 2026-07-29` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:162
- `Step 2. Read the table honestly` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:194
- `What the instrument can and cannot resolve` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:223
- `Read direction, not magnitude` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:250
- `Registered decision rule, 2026-08-03` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:282
- `The eight runs, for comparison` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:316
- `The judge discarded Opus samples unevenly, and it was recoverable` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:365
- `Step 3. Decide` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:440
- `Step 4. Prove the delta` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:494
- `Step 5. Adversarial review` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:512
- `Known instrument gotchas` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:534
- `Scenario files` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:621

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Automated conflict detection failure: highlights that automated opposite-polarity bag-of-words scanners over directive lines completely fail due to vocabulary inversion; real conflicts turn on differing verbs and scopes rather than shared topic nouns (`"The one known-true conflict in the corpus shares exactly **1** content word between its two sides, while pure agreement shares up to **7**." — .claude/skills/context-optimizer/references/rule-audit-procedure.md:84-86`).
- Instrument noise floor and statistical discipline: demonstrates that single eval generations produce an effect spread of ~1.0 on a 0-5 scale, requiring an eight-run sign test across two model families (Opus 5 and Sol 5.6) rather than mean deltas (`"Practical rule: at 2 to 3 positive scenarios and one generation per cell, a single run cannot resolve an effect smaller than about 1.0 on a 0-5 scale." — .claude/skills/context-optimizer/references/rule-audit-procedure.md:243-244`).
- Forensics on eval reduction defect: documents that an earlier coordinate-wise median reduction across judge score fields produced synthetic scores never awarded by any judge, necessitating a fix to median per-sample scalar means instead (`"Step 2 was a defect, not a choice, and the numbers below carry it." — .claude/skills/context-optimizer/references/rule-audit-procedure.md:335`).
- Declared vendor-portability boundary: explicitly labels the procedure as repository-contributor facing because it depends on internal tooling scripts (`scripts/validation/instruction_budget.py`, `scripts/eval/eval-rule-activation.py`, `build/scripts/generate_rules.py`) that do not ship in external plugin installs (`"vendor-portability: contributor-facing reference for the rjmurillo/ai-agents repository itself" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:3-4`).

## Context cost
36,568 bytes, approximately 8,500 tokens. When following invokes to companion reference docs (model-context-doctrine.md, rule-audit-evidence.md, rule-audit-parser-forensics.md), cumulative reference context exceeds 93,000 bytes (~22,500 tokens).
