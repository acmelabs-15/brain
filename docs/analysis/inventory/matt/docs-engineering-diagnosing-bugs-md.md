---
package: matt
path: docs/engineering/diagnosing-bugs.md
type: doc
bytes: 10701
unit: inv-matt-4
deprecated: false
aliases: []

memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/diagnosing-bugs.md

## Purpose — required, verbatim
> "`diagnosing-bugs` runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — docs/engineering/diagnosing-bugs.md:3

## Design intent — required
Enforces an empirical, gated six-phase debugging discipline for difficult defects and performance regressions by strictly prohibiting agents from forming hypotheses or editing code until a deterministic, automated feedback loop (reproduction command) goes red on the bug. By demanding minimised reproduction and tagged probes, it stops AI models from speculative guessing, hallucinated causes, and leaving residual debug logs.

## Phase — required
cross-phase

## Inputs — required
Defect symptom description, performance regression baseline/delta, environment access, or raw bug reports.

## Outputs — required
Deterministic reproduction script/command, 3–5 ranked falsifiable hypotheses, regression test at an agreed seam, code fix, and post-mortem commit message citing confirmed hypothesis.

## Invokes — required
- skill triage — docs/engineering/diagnosing-bugs.md:18
- skill prototype — docs/engineering/diagnosing-bugs.md:19
- skill tdd — docs/engineering/diagnosing-bugs.md:20
- skill improve-codebase-architecture — docs/engineering/diagnosing-bugs.md:21
- script scripts/hitl-loop.template.sh — docs/engineering/diagnosing-bugs.md:36
- skill ask-matt — docs/engineering/diagnosing-bugs.md:91

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `human-in-the-loop` — docs/engineering/diagnosing-bugs.md:36 — used here
- `reproduction rate` — docs/engineering/diagnosing-bugs.md:38 — defined here
- `environment` — docs/engineering/diagnosing-bugs.md:40 — used here
- `gates` — docs/engineering/diagnosing-bugs.md:44 — defined here
- `correct seam` — docs/engineering/diagnosing-bugs.md:54 — defined here
- `model` — docs/engineering/diagnosing-bugs.md:59 — used here
- `harness` — docs/engineering/diagnosing-bugs.md:59 — used here
- `standalone` — docs/engineering/diagnosing-bugs.md:91 — defined here
- `handoff` — docs/engineering/diagnosing-bugs.md:93 — used here

## Structure
- ## What it does
- ## When to reach for it
- ## The tight loop is the skill
- ## The gates between phases
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/diagnosing-bugs.md:59 Over-triggers on simple questions on models with lower activation thresholds, imposing heavy reproduction machinery for quick queries.
- `unfailable-gate` · docs/engineering/diagnosing-bugs.md:65 Lacks an explicit approval gate between hypothesis validation and writing code fixes, proceeding autonomously without confirmation.
- `other` · docs/engineering/diagnosing-bugs.md:71 Pastes raw repro invocations and log artifacts without automated sanitisation or secret redaction.

## Observations
Establishes a 10-tier ladder of reproduction mechanisms ranging from unit tests to CLI diffs and human-in-the-loop scripts. Mandates tagging all debug log statements with unique markers (`[DEBUG-a4f2]`) to guarantee complete cleanup via grep.

## Context cost
10,701 bytes (~2,675 tokens). Documentation page for `diagnosing-bugs` skill.
