---
package: matt
name: bug
slug: bug
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bug

## Definition — verbatim
> "- `bug`: something is broken" — skills/engineering/triage/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 12 | used here | Mentions bug as one example unit of work inside an Issue tracker. |
| docs/engineering/triage.md | 29 | defined here | Defines bug as one of two category roles indicating that something is broken. |
| external/triage.md | 35 | defined here | Explains that triaged items carry category role bug when something is broken. |
| skills/engineering/triage/SKILL.md | 28 | defined here | Defines bug as a category role applied to issues where something is broken. |

## Consumes
User defect reports, reproduction steps, or observed erroneous system behavior.

## Produces
A triaged issue categorized as broken functionality with attached reproduction status and agent brief.

## When applied
Applied during triage when classifying an issue reporting broken or defective system behavior.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
One of two canonical category roles in the triage state machine designating that an issue represents broken functionality, requiring verification against existing code and an actionable reproduction brief.
