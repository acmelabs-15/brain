---
package: rjm
name: External Entities
slug: external-entities
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# External Entities

## Definition — verbatim
> "- **External Entities**: Users, third-party systems (outside your control)" — .claude/skills/threat-modeling/SKILL.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 126 | defined here | Defined as required DFD elements representing users and third-party systems outside developer control. |

## Consumes
System architecture specifications, actor roles, external API integrations, and client definitions.

## Produces
DFD source and destination entities subject to Spoofing analysis.

## When applied
Applied during architecture modeling and DFD creation to identify systems and actors operating outside internal control boundaries.

## Sub-concepts
none

## Part of
data-flow-diagram, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`External Entities` represents parties and systems outside the direct control of the application—such as end users and third-party APIs—serving as the primary originators of untrusted inputs and the subject of Spoofing threats in DFD modeling.
