---
package: rjm
path: .claude/skills/pre-mortem/references/mental-models-galls-law.md
type: reference
bytes: 2114
unit: inv-rjm-137
in_scope_via: .claude/skills/pre-mortem/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pre-mortem/references/mental-models-galls-law.md

## Purpose — required, verbatim
> "Use Gall's Law during **Phase 3 (Independent Analysis)** and **Phase 5 (Review and Mitigate)** to surface complexity-driven risks." — .claude/skills/pre-mortem/references/mental-models-galls-law.md:21

## Design intent — required
Applies John Gall's systems principle to prospective hindsight analysis, alerting teams to risks caused by building complex architectures from scratch or orchestrating big-bang deployments. By challenging projects against red flags like complete rewrites, multi-team simultaneous cutovers, and unproven speculative features, it forces teams to define early simplest-working-version milestones and decompose systems into independently deliverable increments before catastrophic failure occurs.

## Phase — required
cross-phase

## Inputs — required
Project design proposals, architecture specifications, failure brainstorming prompts, and questions examining whether components are built from scratch without existing working prototypes.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill pre-mortem — .claude/skills/pre-mortem/SKILL.md:326

## Concepts named — required, verbatim
- `Gall's Law` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:7 — defined here
- `Phase 3 (Independent Analysis)` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:21 — used here
- `Phase 5 (Review and Mitigate)` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:21 — used here
- `simplest working version` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:47 — defined here
- `Chesterton's Fence` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:52 — used here
- `YAGNI` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:53 — used here
- `Strangler Fig` — .claude/skills/pre-mortem/references/mental-models-galls-law.md:54 — used here

## Structure
- # Gall's Law
- ## Principle
- ## Corollary
- ## Pre-Mortem Application
- ### Risk Generation Prompts
- ### Red Flags That Predict Failure
- ### Mitigation Patterns
- ## Related Models

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/pre-mortem/references/mental-models-galls-law.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Mental Models/Galls Law.md.

## Observations
Concise, actionable reference that provides explicit risk scoring heuristics (e.g. "Build it all at once" scores Likelihood 4, Impact 5) and maps Gall's Law directly into the Prevention/Detection/Response triad used by the pre-mortem skill.

## Context cost
2114 bytes, ~520 tokens.
