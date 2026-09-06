---
package: addy
name: spec-driven-development
slug: spec-driven-development
kind: technique
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: docs/codex-setup.md, sha256: ca30bfcc17ae3b2253573cd21c5f0768ae7eb99e7972b2935aa8c2ba68d65147}
  - {path: docs/commandcode-setup.md, sha256: 6305e672cd15c1dd709d7a2b307dca4bbf2704328654f8b3a5f37c495d3cf31c}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# spec-driven-development

## Definition — verbatim
> "Write a structured specification before writing any code. The spec is the shared source of truth between you and the human engineer — it defines what we're building, why, and how we'll know it's done. Code without a spec is guessing." — skills/spec-driven-development/SKILL.md:10

## Also called — verbatim
`Spec-Driven Development` — skills/spec-driven-development/SKILL.md:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/spec.toml | 4 | applies | Invoked by the Gemini CLI /spec command to initiate specification workflow. |
| commands/spec.toml | 1 | applies | Defined as primary skill invoked by the Claude Code /spec command. |
| docs/codex-setup.md | 25 | references | Listed as core lifecycle skill in Codex setup instructions. |
| docs/commandcode-setup.md | 20 | references | Listed under standard lifecycle skills in CommandCode guide. |
| evals/cases/spec-driven-development.json | 2 | applies | Target skill in evaluation test cases measuring specification generation. |
| external/idea-refine.md | 12 | references | Cited in external documentation sidebar for ideation workflows. |
| external/interview-me.md | 12 | references | Linked in external documentation sidebar as subsequent step after interviews. |
| external/spec-driven-development.md | 5 | defines | External documentation page summarizing the methodology. |
| README.md | 184 | references | Cataloged under core skill library in root README. |
| skills/constraint-driven-development/SKILL.md | 16 | references | Referenced for establishing technical boundaries and constraints. |
| skills/interview-me/SKILL.md | 14 | references | Prescribed as the required subsequent workflow after requirements extraction. |
| skills/spec-driven-development/SKILL.md | 6 | defines | Primary skill file defining the gated specification lifecycle. |

## Consumes
User requests, product requirements, technical constraints, and capability maps

## Produces
SPEC.md document detailing objective, commands, project structure, code style, testing strategy, and boundaries

## When applied
When starting a new project, feature, or significant change, or when requirements are ambiguous or incomplete.

## Sub-concepts
boundaries, phase-0, capability-map

## Part of
none

## Implementation status
defects: doc-drift (skills/spec-driven-development/SKILL.md:3 frontmatter description includes Phase 0 capability mapping while README.md:236 omits Phase 0; default tasks/plan.md and tasks/todo.md paths vs external tracker; external/spec-driven-development.md exhibits doc-drift and orphan status)

## Design notes
Spec-driven development is addy's core technique for early lifecycle alignment. By mandating a structured specification before implementation, it prevents premature coding, surfaces assumptions before they compound into errors, and provides a clear contract for subsequent planning and implementation phases.
