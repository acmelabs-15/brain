---
package: rjm
path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md
type: reference
bytes: 4824
unit: inv-rjm-113
in_scope_via: .claude/skills/cynefin-classifier/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md

## Purpose — required, verbatim
> "Different problem types require fundamentally different cognitive approaches. Applying the wrong approach wastes effort, delays resolution, and can make problems worse." — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:9 (no explicit purpose statement)

## Design intent — required
Foundational theoretical reference for the Cynefin Framework within the agent skills toolkit. It documents the origin (Dave Snowden, 1999 at IBM Global Services), definition of the Welsh term "cynefin", the core insight contrasting right versus wrong approaches across problem domains, the nature of cause-and-effect relationships (Clear, Complicated, Complex, Chaotic, and Confusion/Disorder), clockwise evolutionary dynamics versus counter-clockwise disruptive shocks, the catastrophic "cliff edge" of complacency dropping from Clear to Chaotic, mapping across typical software engineering lifecycle phases and team dynamics, common cognitive misapplication traps, and academic literature citations. Without it, practitioners and agents using the `cynefin-classifier` skill would lack the epistemological rationale explaining why distinct problem domains demand fundamentally different cognitive strategies and response models.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cynefin-classifier — .claude/skills/cynefin-classifier/SKILL.md:365

## Concepts named — required, verbatim
- `Cynefin Framework` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:1 — defined here
- `Cynefin` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:5 — defined here
- `Clear` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:13 — defined here
- `Complicated` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:14 — defined here
- `Complex` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:15 — defined here
- `Chaotic` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:16 — defined here
- `Obvious` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:22 — defined here
- `Confusion` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50 — defined here
- `Disorder` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50 — defined here
- `best practice` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:13 — used here
- `good practices` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:34 — used here
- `emergent practice` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:41 — used here
- `novel practice` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:48 — used here
- `safe-to-fail experiments` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:15 — used here
- `Natural Evolution` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:73 — defined here
- `Disruption` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:79 — defined here
- `The Cliff Edge` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:85 — defined here
- `Complacency` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:85 — defined here

## Structure
- `## Origin` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:3
- `## Core Insight` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:7
- `## Cause-Effect Relationships` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:18
- `### Clear (Obvious)` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:22
- `### Complicated` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:29
- `### Complex` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:36
- `### Chaotic` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:43
- `### Confusion (Disorder)` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50
- `## Dynamics and Transitions` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:57
- `### Clockwise (Natural Evolution)` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:73
- `### Counter-Clockwise (Disruption)` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:79
- `## The Cliff Edge (Complacency)` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:85
- `## Software Engineering Application` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:96
- `### Development Lifecycle` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:98
- `### Team Dynamics` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:109
- `## Common Misapplications` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:116
- `### Treating Complex as Complicated` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:118
- `### Treating Complicated as Clear` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:126
- `### Treating Chaotic as Complex` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:134
- `## References` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:142

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes 5 domain states by accessibility of cause-and-effect relationships: Clear (obvious to everyone), Complicated (discoverable by experts), Complex (only visible in retrospect), Chaotic (no perceivable cause-and-effect), and Confusion/Disorder (domain unknown, risk of applying wrong cognitive model).
- Outlines the catastrophic "cliff edge" failure mode where complacency in the Clear domain leads to brittle assumptions that suddenly plunge an organization into Chaotic disruption.
- Software engineering lifecycle mapping matches requirements to Complex/Confusion, architecture to Complex, implementation to Complicated/Clear, debugging to Complicated, incidents to Chaotic, and user adoption to Complex.

## Context cost
4824 bytes (~1206 tokens). Self-contained conceptual reference; invokes no other files.
