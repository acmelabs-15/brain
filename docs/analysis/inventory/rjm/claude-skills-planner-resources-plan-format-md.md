---
package: rjm
path: .claude/skills/planner/resources/plan-format.md
type: skill
bytes: 6246
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/resources/plan-format.md, sha256: af8bd8d515dc5c98ef1ba14a6853d58f4f1f3ba81dc923de3689c1eaa296fe43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/resources/plan-format.md

## Purpose — required, verbatim
> "Write your plan using this structure:" — .claude/skills/planner/resources/plan-format.md:3

## Design intent — required
Defines the canonical template, section schema, and validation rules for implementation plans generated during the planning workflow. It enforces explicit sections for Planning Context (capturing multi-step decision chains, rejected alternatives, constraints, and verifiable code anchors for known risks), Invisible Knowledge (architectural diagrams, data flows, invariants, and structural rationale intended for README documentation), and sequential Milestones with unified diff code changes.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill resources/diff-format.md — .claude/skills/planner/resources/plan-format.md:143

## Invoked by — required
- skill resources/plan-format.md — .claude/skills/planner/SKILL.md:274

## Concepts named — required, verbatim
- `Plan Format` — .claude/skills/planner/resources/plan-format.md:1 — defined here
- `Planning Context` — .claude/skills/planner/resources/plan-format.md:12 — defined here
- `Decision Log` — .claude/skills/planner/resources/plan-format.md:17 — defined here
- `Reasoning Chain` — .claude/skills/planner/resources/plan-format.md:19 — defined here
- `Rejected Alternatives` — .claude/skills/planner/resources/plan-format.md:38 — defined here
- `Constraints & Assumptions` — .claude/skills/planner/resources/plan-format.md:46 — defined here
- `Known Risks` — .claude/skills/planner/resources/plan-format.md:53 — defined here
- `Anchor requirement` — .claude/skills/planner/resources/plan-format.md:59 — defined here
- `Invisible Knowledge` — .claude/skills/planner/resources/plan-format.md:63 — defined here
- `Milestones` — .claude/skills/planner/resources/plan-format.md:124 — defined here
- `Milestone Dependencies` — .claude/skills/planner/resources/plan-format.md:185 — defined here

## Structure
# Plan Format — .claude/skills/planner/resources/plan-format.md:1
## Overview — .claude/skills/planner/resources/plan-format.md:8
## Planning Context — .claude/skills/planner/resources/plan-format.md:12
### Decision Log — .claude/skills/planner/resources/plan-format.md:17
### Rejected Alternatives — .claude/skills/planner/resources/plan-format.md:38
### Constraints & Assumptions — .claude/skills/planner/resources/plan-format.md:46
### Known Risks — .claude/skills/planner/resources/plan-format.md:53
## Invisible Knowledge — .claude/skills/planner/resources/plan-format.md:63
### Architecture — .claude/skills/planner/resources/plan-format.md:67
### Data Flow — .claude/skills/planner/resources/plan-format.md:87
### Why This Structure — .claude/skills/planner/resources/plan-format.md:101
### Invariants — .claude/skills/planner/resources/plan-format.md:108
### Tradeoffs — .claude/skills/planner/resources/plan-format.md:116
## Milestones — .claude/skills/planner/resources/plan-format.md:124
### Milestone 1: [Name] — .claude/skills/planner/resources/plan-format.md:126
### Milestone [Last]: Documentation — .claude/skills/planner/resources/plan-format.md:161
## Milestone Dependencies (if applicable) — .claude/skills/planner/resources/plan-format.md:185

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates that Decision Log entries contain at least two reasoning steps (`premise -> implication -> conclusion`) so downstream agents can transcribe rationale rather than bare conclusions. Requires behavioral claims in Known Risks mitigations to provide concrete code anchors (`file:L###-L###` plus excerpt).

## Context cost
6246 bytes, approximately 1550 tokens.
