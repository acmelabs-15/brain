---
package: matt
name: skill
slug: skill
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill

## Definition — verbatim
> "what changes when the document is a skill (frontmatter, the invocation choice, and router skills)." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 39 | used here | References the triage skill when discussing state role vocabulary expansions. |
| docs/engineering/wizard.md | 30 | used here | Explains that the wizard skill reads repository configuration before scoping interactive stages. |
| docs/productivity/grilling.md | 9 | used here | Highlights grilling as the only model-invoked skill in the grilling family. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 3 | used here | Introduces skill-specific conventions including frontmatter, invocation choices, and router mechanics. |

## Consumes
Instruction markdown files, agent frontmatter metadata, and optional script or template assets.

## Produces
An invocable, autonomous or interactive capability executed by an agent or human.

## When applied
Applied when packaging modular, specialized workflows for AI coding assistants.

## Sub-concepts
skill-invocation, skill-mechanics

## Part of
skills

## Implementation status
clean

## Design notes
A `skill` in Matt's architecture is a self-contained instructional markdown module (with optional supporting scripts and templates) that endows an AI agent with a specific engineering or productivity capability. Skills balance context load against model discovery through explicit frontmatter declarations.
