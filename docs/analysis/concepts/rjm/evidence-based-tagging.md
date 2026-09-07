---
package: rjm
name: Evidence-Based Tagging
slug: evidence-based-tagging
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence-Based Tagging

## Definition — verbatim
> "### Evidence-Based Tagging" — .claude/agents/retrospective.md:711

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 711 | defined here | Protocol defining evidentiary standards (helpful, harmful, neutral) for learning extraction. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 235 | defined here | Reference guide specifying tag meanings and required empirical evidence. |
| templates/agents/retrospective.shared.md | 707 | defined here | Shared template defining evidence-based tagging criteria for retrospective artifacts. |

## Consumes
Identified agent behaviors, tools, and execution strategies observed during a session.

## Produces
Empirical tags (`helpful`, `harmful`, `neutral`) tied to verified positive or negative execution traces.

## When applied
Applied during Phase 4 (Learning Extraction) before promoting observations into persistent memory.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Evidence-Based Tagging prevents speculative opinions from polluting institutional memory. By demanding that every claimed learning carry concrete execution evidence demonstrating whether it helped or harmed execution, it safeguards Serena memories and skillbooks against unverified hearsay.
