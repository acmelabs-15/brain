---
package: addy
name: cross-model escalation
slug: cross-model-escalation
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cross-model escalation

## Definition — verbatim
> "A single-model reviewer shares blind spots with the original author — a colder, different-architecture model catches them." — skills/doubt-driven-development/SKILL.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Highlighted as an optional escalation capability in doubt-driven review. |
| skills/doubt-driven-development/SKILL.md | 112 | defined here | Section heading and workflow governing user-authorized review by a different LLM family. |

## Consumes
Unresolved high-stakes claims, single-model review findings, and explicit user permission.

## Produces
Adversarial review findings from an alternative model architecture.

## When applied
> "Interactive sessions: always offer. Never silently skip." — skills/doubt-driven-development/SKILL.md:116

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
An escalation mechanism routing critical decisions to an LLM of a different model family or architecture (e.g. Claude Code calling out to Codex or Gemini). Because models from the same family share reasoning biases, cross-model review catches architectural blind spots.
