---
package: matt
path: external/diagnosing-bugs.md
type: doc
bytes: 358695
unit: inv-matt-13
deprecated: false
aliases: []
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/diagnosing-bugs.md

## Purpose — required, verbatim
> "Diagnose a hard bug, starting from a repro that fails." — external/diagnosing-bugs.md:24

## Design intent — required
Enforces a rigorous six-phase empirical diagnostic protocol on hard defects, flakes, and performance regressions. Stops the agent's default instinct to guess causes from code reading by inserting an absolute gate at Phase 1: the agent cannot form theories or inspect code until a tight, automated feedback loop command exists that currently fails on the bug. Guides subsequent bisection, ranked hypothesis testing, tagged probe instrumentation, and regression test verification.

## Phase — required
matt:Upkeep

## Inputs — required
Observed defect symptom, reproduction script or test case, failure logs, before-and-after performance metrics, or user environment access.

## Outputs — required
Automated tight reproduction command, ranked falsifiable hypotheses with predictions, temporary tagged probe logs (`[DEBUG-a4f2]`), passing regression test at a valid architectural seam, minimal bugfix commit, and cleanup confirmation.

## Invokes — required
- skill triage — external/diagnosing-bugs.md:30
- skill prototype — external/diagnosing-bugs.md:30
- skill tdd — external/diagnosing-bugs.md:30
- skill improve-codebase-architecture — external/diagnosing-bugs.md:30
- skill ask-matt — external/diagnosing-bugs.md:77

## Invoked by — required
- skill ask-matt — external/diagnosing-bugs.md:77
- skill code-review — external/code-review.md:29

## Concepts named — required, verbatim
- `six-phase diagnosis` — external/diagnosing-bugs.md:25 — defined here
- `tight` — external/diagnosing-bugs.md:26 — defined here
- `human-in-the-loop` — external/diagnosing-bugs.md:43 — used here
- `scripts/hitl-loop.template.sh` — external/diagnosing-bugs.md:43 — used here
- `higher reproduction rate` — external/diagnosing-bugs.md:45 — defined here
- `[DEBUG-a4f2]` — external/diagnosing-bugs.md:49 — used here
- `correct seam` — external/diagnosing-bugs.md:50 — defined here
- `git bisect run` — external/diagnosing-bugs.md:41 — used here

## Structure
- # The /diagnosing-bugs Skill — external/diagnosing-bugs.md:24
- ## What it does — external/diagnosing-bugs.md:24
- ## When to reach for it — external/diagnosing-bugs.md:27
- ## The tight loop is the skill — external/diagnosing-bugs.md:31
- ## The gates between phases — external/diagnosing-bugs.md:47
- ## Common questions — external/diagnosing-bugs.md:51
- ## It's working if — external/diagnosing-bugs.md:66
- ## Where it fits — external/diagnosing-bugs.md:76
- ## Related reading — external/diagnosing-bugs.md:79
- ## Skill actions — external/diagnosing-bugs.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/diagnosing-bugs.md:52: Over-triggers on casual trouble questions in models with low activation thresholds (such as GPT-5.6-Sol), running heavy repro workflows instead of direct answers.
- `script-bug` · external/diagnosing-bugs.md:56: Missing human authorization checkpoint between probe instrumentation and fix generation, allowing agents to modify code without explicit confirmation.
- `doc-drift` · external/diagnosing-bugs.md:60: Repro paste requests and artifact gathering instructions lack sanitization guards, risking secret and token leakage in chat and public issues.
- `doc-drift` · external/diagnosing-bugs.md:64: Renamed from `/diagnose` to `/diagnosing-bugs` without backwards-compatible alias handling.

## Observations
Treats Phase 1 (constructing the tight loop) as the primary burden of debugging. Instructs agents to tag all temporary debug output with unique random hex identifiers like `[DEBUG-a4f2]` to guarantee reliable, single-grep cleanup before declaring completion.

## Context cost
358695 bytes, ~72500 tokens (HTML snapshot including full inline hydration payload).
