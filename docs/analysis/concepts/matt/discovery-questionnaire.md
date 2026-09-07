---
package: matt
name: discovery questionnaire
slug: discovery-questionnaire
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# discovery questionnaire

## Definition — verbatim
> "Frame the document as a **discovery questionnaire**: the user lacks context, the recipient holds it." — skills/productivity/to-questionnaire/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 33 | defined here | Defines the document framing where the user lacks context and the recipient holds it, governing structural choices. |
| external/to-questionnaire.md | 40 | defined here | Establishes the discovery questionnaire framing that drives document formatting and question ordering. |
| skills/productivity/to-questionnaire/SKILL.md | 20 | defined here | Directs the agent to frame the generated questionnaire as a discovery questionnaire. |

## Consumes
A user's knowledge deficit and external recipient context.

## Produces
A structured async elicitation markdown document (`to-questionnaire-<slug>.md`).

## When applied
When drafting the questionnaire document structure in `to-questionnaire`.

## Sub-concepts
most-important-first

## Part of
to-questionnaire, questionnaire

## Implementation status
clean

## Design notes
The structural archetype for documents produced by `to-questionnaire`. Inverting the typical assessment dynamic, the author admits ignorance while treating the recipient as the domain authority, using purpose statements, brief orientation context, and structured answer stubs to minimize recipient cognitive friction.
