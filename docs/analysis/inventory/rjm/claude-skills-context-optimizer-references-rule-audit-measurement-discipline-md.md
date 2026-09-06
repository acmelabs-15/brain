---
package: rjm
path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md
type: reference
bytes: 8691
unit: inv-rjm-106
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md

## Purpose — required, verbatim
> "This file records what broke in the *checking* of it, and those are different failures with different fixes. A parser defect publishes a wrong number. A measurement defect publishes a wrong number and a clean report saying it was verified." — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:4-7

> "Read this before quoting a figure you produced with a one-off command." — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:9

## Design intent — required
Documents failure modes and empirical verification discipline for auditing evaluation measurements and rule benchmarks. In complex automated evaluations, measurement commands and verification checks frequently fail silently: negative controls that cannot fail due to missing interpreters or wrong target patterns, metrics computed over the wrong denominator or an unclosed population, find-and-replace edits that silently delete structural openers and markers, and helper functions probed in isolation answering different questions than the entry point. Without this discipline, evaluators and automated agents produce false reassurance, citing clean-looking figures from flawed one-off verification commands that mask regressions and corrupt benchmark conclusions.

## Phase — required
cross-phase

## Inputs — required
- Command-line tools, shell environments, and interpreters: `uv run --frozen python`, `python`, `diff`, `git diff`, `git cat-file`, `grep`, `pytest`.
- Evaluation payloads, test fixtures, and artifacts: the 24 archived judge failure payloads, 264 nested reasoning values across 288 archived payloads, commit revisions (`81fd0eb4`, `ed4c4061`, `origin/main`).
- Parser and verification code: parser round 20 negative controls, `_recover_verdict`, `_judge_parse_failure`, structural and textual duplicate-name guards.
- Issue reports: issue #4031 (`_judge_parse_failure` name asserts an outcome it does not produce).

## Outputs — required
none

## Invokes — required
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:3

## Invoked by — required
- skill .claude/skills/context-optimizer/SKILL.md — .claude/skills/context-optimizer/SKILL.md:123
- reference .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:484

## Concepts named — required, verbatim
- `Rule Audit Measurement Discipline` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:1 — defined here
- `A check that cannot fail has not been run` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:11 — defined here
- `negative controls` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:13 — used here
- `A number needs the population it was read off` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:25 — defined here
- `moving ref` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:51 — used here
- `An unintended deletion does not announce itself` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:65 — defined here
- `portability gate` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:73 — used here
- `parity gate` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:97 — used here
- `A helper probed alone can answer a different question than the entry point` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:100 — defined here
- `recovery helper` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:103 — used here
- `strict parser` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:104 — used here
- `_recover_verdict` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:108 — used here
- `_judge_parse_failure` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:110 — used here
- `duplicate-name guards` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:126-127 — used here
- `structural guard` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:131 — used here
- `An over-eager refusal is not symmetric with an over-eager accept` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:136 — defined here
- `judge-failure count` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:141 — used here
- `clean-parse branch` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:144 — used here

## Structure
- `# Rule Audit Measurement Discipline: how the checks themselves went wrong` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:1
- `## A check that cannot fail has not been run` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:11
- `## A number needs the population it was read off` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:25
- `## An unintended deletion does not announce itself` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:65
- `## A helper probed alone can answer a different question than the entry point` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:100
- `## An over-eager refusal is not symmetric with an over-eager accept` — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:136

## Scripts
none

## Defects — required
none

## Observations
- Preserves five concrete failure modes in automated evaluation verification:
  1. Negative controls that pass because the test script mutated a comment or invoked a missing interpreter (`uv run --frozen python` required).
  2. Figures quoted against mismatched denominators or moving bases (`origin/main` vs immutable commit SHAs; counting across the entire archive envelope vs the 264 nested reasoning values).
  3. Find-and-replace edits silently deleting structural openers (like `def` lines or vendor-portability HTML comments) where simple git diff grep checks falsely pass for brand-new files.
  4. Probing helper functions in isolation (`_recover_verdict` returning `None` despite `judge_salvaged=True` produced by entry point).
  5. The asymmetry of error costs: over-eager refusals are visible (recorded in `judge_failed`), whereas over-eager acceptances represent silent, untracked fabrications.
- Recommends stating denominators explicitly and writing upper bounds (e.g. "more than twenty rounds") instead of maintaining unstable running totals that go stale across review iterations.

## Context cost
8691 bytes, ~2,200 tokens.
