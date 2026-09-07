---
package: rjm
name: Model Selection
slug: model-selection
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Model Selection

## Definition — verbatim
> "### Model Selection" — .claude/skills/CLAUDE.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 48 | defined here | Section heading establishing model selection rules, harness inheritance defaults, and permitted pins under ADR-080. |
| docs/SKILL-AUTHORING.md | 22 | defined here | Frontmatter parameter documentation linking to model selection governance policies for skill authoring. |

## Consumes
Task complexity requirements, latency targets, and budget constraints.

## Produces
Architectural decision on foundation model binding (omitting `model` for harness inheritance or pinning `haiku` with rationale).

## When applied
Applied during skill design and authoring to govern whether a skill executes with the host harness model or pins a cheaper tier.

## Sub-concepts
harness-inherited-model, haiku, model-pin-check

## Part of
frontmatter-standards

## Implementation status
clean

## Design notes
Model Selection is the governance technique and decision policy codified in ADR-080 that dictates how skills select foundation models. It mandates that skills inherit the active agent harness model by default, restricting explicit pins strictly to lower-cost rolling aliases accompanied by documented rationale.
