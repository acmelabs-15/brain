---
package: rjm
path: .claude/skills/cynefin-classifier/references/domain-transitions.md
type: reference
bytes: 4702
unit: inv-rjm-113
in_scope_via: .claude/skills/cynefin-classifier/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cynefin-classifier/references/domain-transitions.md

## Purpose — required, verbatim
> "Understanding how problems move between domains helps predict when to shift approaches." — .claude/skills/cynefin-classifier/references/domain-transitions.md:3

## Design intent — required
Operational guidance detailing temporal dynamics and domain transition mechanics within the Cynefin Framework for software systems. It models both the natural clockwise lifecycle progression (stabilizing Chaotic incidents into Complex exploration, formalizing Complex patterns into Complicated expert analysis, and codifying Complicated procedures into Clear automated best practices) and counter-clockwise disruption paths (context invalidation, emerging complexities, and sudden catastrophic shocks). It provides early warning indicators, transition diagnostic questions, a full project and team lifecycle ASCII flow, and actionable checklists to execute when crossing domain thresholds. Without it, development teams would treat Cynefin classifications as rigid, static attributes rather than mutable states requiring continuous monitoring and methodological pivots.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cynefin-classifier — .claude/skills/cynefin-classifier/SKILL.md:366

## Concepts named — required, verbatim
- `Cynefin` — .claude/skills/cynefin-classifier/references/domain-transitions.md:1 — used here
- `Domain Transitions` — .claude/skills/cynefin-classifier/references/domain-transitions.md:1 — defined here
- `Natural Evolution` — .claude/skills/cynefin-classifier/references/domain-transitions.md:5 — defined here
- `Clockwise` — .claude/skills/cynefin-classifier/references/domain-transitions.md:5 — defined here
- `Chaotic to Complex` — .claude/skills/cynefin-classifier/references/domain-transitions.md:7 — defined here
- `Complex to Complicated` — .claude/skills/cynefin-classifier/references/domain-transitions.md:21 — defined here
- `Complicated to Clear` — .claude/skills/cynefin-classifier/references/domain-transitions.md:35 — defined here
- `Disruption` — .claude/skills/cynefin-classifier/references/domain-transitions.md:49 — defined here
- `Counter-Clockwise` — .claude/skills/cynefin-classifier/references/domain-transitions.md:49 — defined here
- `Clear to Complicated` — .claude/skills/cynefin-classifier/references/domain-transitions.md:51 — defined here
- `Complicated to Complex` — .claude/skills/cynefin-classifier/references/domain-transitions.md:65 — defined here
- `Any Domain to Chaotic` — .claude/skills/cynefin-classifier/references/domain-transitions.md:79 — defined here
- `The Cliff Edge` — .claude/skills/cynefin-classifier/references/domain-transitions.md:93 — defined here
- `Detecting Transitions` — .claude/skills/cynefin-classifier/references/domain-transitions.md:118 — defined here
- `chaos engineering` — .claude/skills/cynefin-classifier/references/domain-transitions.md:114 — used here
- `safe-to-fail probes` — .claude/skills/cynefin-classifier/references/domain-transitions.md:175 — used here

## Structure
- `## Natural Evolution (Clockwise)` — .claude/skills/cynefin-classifier/references/domain-transitions.md:5
- `### Chaotic to Complex` — .claude/skills/cynefin-classifier/references/domain-transitions.md:7
- `### Complex to Complicated` — .claude/skills/cynefin-classifier/references/domain-transitions.md:21
- `### Complicated to Clear` — .claude/skills/cynefin-classifier/references/domain-transitions.md:35
- `## Disruption (Counter-Clockwise)` — .claude/skills/cynefin-classifier/references/domain-transitions.md:49
- `### Clear to Complicated` — .claude/skills/cynefin-classifier/references/domain-transitions.md:51
- `### Complicated to Complex` — .claude/skills/cynefin-classifier/references/domain-transitions.md:65
- `### Any Domain to Chaotic` — .claude/skills/cynefin-classifier/references/domain-transitions.md:79
- `## The Cliff Edge` — .claude/skills/cynefin-classifier/references/domain-transitions.md:93
- `### How It Happens` — .claude/skills/cynefin-classifier/references/domain-transitions.md:97
- `### Symptoms Before the Fall` — .claude/skills/cynefin-classifier/references/domain-transitions.md:104
- `### Prevention` — .claude/skills/cynefin-classifier/references/domain-transitions.md:111
- `## Detecting Transitions` — .claude/skills/cynefin-classifier/references/domain-transitions.md:118
- `### Early Warning Signs` — .claude/skills/cynefin-classifier/references/domain-transitions.md:120
- `### Questions to Ask` — .claude/skills/cynefin-classifier/references/domain-transitions.md:130
- `## Software Engineering Transitions` — .claude/skills/cynefin-classifier/references/domain-transitions.md:137
- `### Typical Project Lifecycle` — .claude/skills/cynefin-classifier/references/domain-transitions.md:139
- `### Team Lifecycle` — .claude/skills/cynefin-classifier/references/domain-transitions.md:157
- `## Action Checklists` — .claude/skills/cynefin-classifier/references/domain-transitions.md:169
- `### When Entering Complex from Chaotic` — .claude/skills/cynefin-classifier/references/domain-transitions.md:171
- `### When Entering Complicated from Complex` — .claude/skills/cynefin-classifier/references/domain-transitions.md:178
- `### When Entering Clear from Complicated` — .claude/skills/cynefin-classifier/references/domain-transitions.md:185

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides concrete transition signals and actions for software engineering situations, e.g. "We stopped the bleeding, now what?" signaling a shift from Chaotic crisis response to Complex safe-to-fail probing.
- Identifies the organizational hazard of "The Cliff Edge" (Clear to Chaotic drop) where dogmatic adherence to legacy best practices blinds teams to shifting context, prescribing planned chaos engineering and regular audits of core assumptions.
- Connects software lifecycle stages to expected transitions: Project Start (Complex) -> Architecture Phase (Complicated) -> Implementation (Clear) -> Debugging (Complicated) -> Incident Response (Chaotic) -> Post-Mortem (Complex to Complicated) -> Operations (Clear).

## Context cost
4702 bytes (~1175 tokens). Self-contained reference; invokes no other files.
