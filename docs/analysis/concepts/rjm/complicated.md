---
package: rjm
name: Complicated
slug: complicated
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Complicated

## Definition — verbatim
> "  - complicated: Requires expert analysis. Expected: produce with trade-offs and assumptions." — scripts/eval/eval-agents.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 37 | used here | Decision heuristic checking if a problem is analyzable through expert analysis rather than experimentation. |
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 14 | defined here | Mapped in Cynefin response table as demanding expert analysis over guesswork. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 26 | defined here | Domain enumeration member representing the Complicated domain in Cynefin classification. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Primary Cynefin domain listed in skill frontmatter description. |
| scripts/eval/eval-agents.py | 23 | defined here | Evaluator complexity classification defining tasks requiring expert analysis with explicit trade-offs. |

## Consumes
Problems characterized by known unknowns and discoverable cause-and-effect relationships.

## Produces
Structured analytical assessments, trade-off comparisons, and expert recommendations.

## When applied
Applied when confronting problems that yield to systematic expert investigation rather than emergent experimentation.

## Sub-concepts
none

## Part of
cynefin-framework

## Implementation status
defects: doc-drift, missing-path, unimplemented-feature

## Design notes
In rjm's problem taxonomy, Complicated denotes the Cynefin domain where relationships between cause and effect are discoverable through expert analysis. Classifying a task as Complicated directs agents to apply analytical rigor, structured evaluation matrices, and explicit trade-off reasoning.
