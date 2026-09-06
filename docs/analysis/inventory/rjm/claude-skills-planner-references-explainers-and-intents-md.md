---
package: rjm
path: .claude/skills/planner/references/explainers-and-intents.md
type: reference
bytes: 2815
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/explainers-and-intents.md, sha256: 0a109a5fb448fd0d0a6b5f6f18e6b4dbd2d6c8aa730ff6ae5d6232de7a88b15d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/explainers-and-intents.md

## Purpose — required, verbatim
> "Process for proposing, communicating, and gating changes. Adapted from Chromium's Blink intent process." — .claude/skills/planner/references/explainers-and-intents.md:9

## Design intent — required
Adapts Chromium's Blink intent process to establish a disciplined change proposal and approval mechanism for implementation planning. It divides the change lifecycle into two distinct artifacts: Explainers (gathering feedback on problem, solution, and trade-offs before implementation) and Intents (formal permission requests that serve as gating checkpoints). By categorizing intents into Prototype, Experiment, Ship, Deprecate, and Remove, it prevents surprises for on-call DRIs and preserves backwards compatibility.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/explainers-and-intents.md — .claude/skills/planner/SKILL.md:292

## Concepts named — required, verbatim
- `Explainers and Intents` — .claude/skills/planner/references/explainers-and-intents.md:7 — defined here
- `Explainer` — .claude/skills/planner/references/explainers-and-intents.md:17 — defined here
- `Intent` — .claude/skills/planner/references/explainers-and-intents.md:27 — defined here
- `Intent to Prototype` — .claude/skills/planner/references/explainers-and-intents.md:35 — defined here
- `Intent to Experiment` — .claude/skills/planner/references/explainers-and-intents.md:36 — defined here
- `Intent to Ship` — .claude/skills/planner/references/explainers-and-intents.md:37 — defined here
- `Intent to Deprecate` — .claude/skills/planner/references/explainers-and-intents.md:38 — defined here
- `Intent to Remove` — .claude/skills/planner/references/explainers-and-intents.md:39 — defined here
- `Fast Track` — .claude/skills/planner/references/explainers-and-intents.md:63 — defined here

## Structure
# Explainers and Intents — .claude/skills/planner/references/explainers-and-intents.md:7
## Core Principle — .claude/skills/planner/references/explainers-and-intents.md:11
## Two Artifacts — .claude/skills/planner/references/explainers-and-intents.md:15
### Explainer — .claude/skills/planner/references/explainers-and-intents.md:17
### Intent — .claude/skills/planner/references/explainers-and-intents.md:27
## Intent Types — .claude/skills/planner/references/explainers-and-intents.md:31
## Lifecycle — .claude/skills/planner/references/explainers-and-intents.md:41
## Fast Track — .claude/skills/planner/references/explainers-and-intents.md:63
## Planning Application — .claude/skills/planner/references/explainers-and-intents.md:73
### Before Planning — .claude/skills/planner/references/explainers-and-intents.md:75
### During Planning — .claude/skills/planner/references/explainers-and-intents.md:81
### Communication — .claude/skills/planner/references/explainers-and-intents.md:87
## Why It Matters — .claude/skills/planner/references/explainers-and-intents.md:93

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/explainers-and-intents.md:2 · Frontmatter source `wiki/concepts/Engineering Process/Chromium Explainers and Blink Intents.md` does not exist in the repository.

## Observations
Emphasizes that "Intents are permission gates, not announcements." Outlines a Fast Track option for cases where cross-team consensus or existing standardized implementations already exist, while still requiring tracking entries and Intent to Ship.

## Context cost
2815 bytes, approximately 700 tokens.
