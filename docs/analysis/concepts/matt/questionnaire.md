---
package: matt
name: questionnaire
slug: questionnaire
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

# questionnaire

## Definition — verbatim
> "`to-questionnaire` turns a decision you can't settle on your own into a **questionnaire**: a Markdown document you hand to the one person who holds what you're missing, for them to fill in async or for the two of you to work through in a meeting." — docs/productivity/to-questionnaire.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 3 | defined here | Defines a questionnaire as a Markdown document handed to the person holding missing knowledge. |
| external/to-questionnaire.md | 25 | defined here | Defines a questionnaire as a document handed to someone else for async completion or meeting review. |
| skills/productivity/to-questionnaire/SKILL.md | 7 | defined here | Defines questionnaire as a markdown document to hand to one person to pull out knowledge the user lacks. |

## Consumes
A blocked decision, recipient context (role, expertise), and a concrete list of required answers.

## Produces
A standalone markdown questionnaire file (`to-questionnaire-<slug>.md`).

## When applied
When a decision is blocked on knowledge that resides in another person's head.

## Sub-concepts
discovery-questionnaire, most-important-first

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
An asynchronous elicitation artifact designed to extract required decisions or facts from external stakeholders. It bridges the gap between an agent-driven session and human domain knowledge without stalling the project.
