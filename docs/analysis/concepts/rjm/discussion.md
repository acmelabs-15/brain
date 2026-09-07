---
package: rjm
name: Discussion
slug: discussion
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Discussion

## Definition — verbatim
(used, not defined)

> "## Discussion (Context)" — .claude/skills/adr-generator/references/adr-templates-catalog.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 165 | defines | Section heading in the Alexandrian Pattern template explaining the technical, political, social, and project forces. |

## Consumes
Problem statement, organizational background, stakeholder perspectives, and project constraints.

## Produces
Narrative explaining the background forces and problem context motivating the architectural choice.

## When applied
Contextual analysis section within an Alexandrian Pattern ADR.

## Sub-concepts
none

## Part of
alexandrian

## Implementation status
clean

## Design notes
The narrative context section of the Alexandrian Pattern ADR template that articulates the multifaceted forces at play—including technical, political, social, and project constraints. It frames the architectural decision as a human and organizational story rather than an isolated technical choice.
