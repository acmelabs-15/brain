---
package: rjm
name: Phase 1: Deep Analysis
slug: phase-1-deep-analysis
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Deep Analysis

## Definition — verbatim
> "## Phase 1: Deep Analysis" — .claude/skills/skillforge/SKILL.md:152

## Also called — verbatim
> "# Phase 1: Deep Analysis - Buy vs Build Framework" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 1 | defined here | Document title of the deep analysis reference detailing explicit, implicit, and thinking model requirements for buy-vs-build. |
| .claude/skills/skillforge/references/synthesis-protocol.md | 404 | used here | Initial phase in the SkillForge skill creation workflow preceding specification generation. |
| .claude/skills/skillforge/SKILL.md | 152 | defined here | First procedural phase of skill creation expanding explicit/implicit requirements, unknown unknowns, and 11 thinking models. |

## Consumes
Initial skill idea, user intent, domain documentation, and requirement prompts.

## Produces
Deep analysis document (`references/PHASE1_ANALYSIS.md`) detailing explicit and implicit requirements, edge cases, and architectural choices.

## When applied
Executed at the start of new skill creation or complex framework analysis before authoring specifications or implementations.

## Sub-concepts
11-thinking-models, explicit-requirements, implicit-requirements

## Part of
skillforge

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
A foundational analysis phase within rjm's SkillForge methodology. It enforces exhaustive exploration of requirements, cognitive models, and failure modes before any code or specifications are generated, ensuring high timelessness and rigorous architectural grounding.
