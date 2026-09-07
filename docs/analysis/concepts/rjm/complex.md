---
package: rjm
name: Complex
slug: complex
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complex

## Definition — verbatim
> "| **Complex** | WHEN [trigger] AND [condition] ... UNLESS [exception] | Combined conditions |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 54 | defined here | Defined in EARS patterns table as combined conditions requirement pattern. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 37 | used here | Recommends cynefin-classifier when unsure if a problem is analyzable (Complicated) or requires experimentation (Complex). |
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 15 | defined here | Lists Complex domain right approach as safe-to-fail experiments rather than detailed planning. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 27 | defined here | Enumerates COMPLEX as a core Domain enum member in the Cynefin classification engine. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Documents the Complex problem domain in skill frontmatter and decision guides. |
| scripts/eval/eval-agents.py | 24 | defined here | Defines complex problems as having multiple unknowns with no clear right answer, requiring clarifying questions. |

## Consumes
Compound requirements with multiple preconditions, or problem domains with high uncertainty and emergent causal relationships.

## Produces
A multi-clause EARS requirement or a Cynefin classification recommending safe-to-fail experimentation.

## When applied
> "| **Complex** | WHEN [trigger] AND [condition] ... UNLESS [exception] | Combined conditions |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:54

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
In rjm, "Complex" serves two distinct structural roles: within EARS requirement syntax (ADR-032), it denotes the compound requirement pattern combining triggers, conditions, and exceptions; within the Cynefin decision framework, it denotes domains of emergent practice characterized by unknown unknowns where exploration and safe-to-fail experimentation supersede rigid planning.
