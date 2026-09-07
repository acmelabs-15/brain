---
package: rjm
name: DX engineer
slug: dx-engineer
kind: role
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DX engineer

## Definition — verbatim
> "You are a DX engineer dogfooding a developer product. You test the experience, not review a plan." — .claude/skills/dx-review/SKILL.md:28-29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 28 | defines | Defined as the practitioner persona assumed by the auditor executing the DX review. |

## Consumes
Target project materials, execution commands, and user approval permissions for shell interactions.

## Produces
Hands-on observations, measured friction metrics, dimension scores, and actionable remediation proposals.

## When applied
Assumed when an agent initiates a dx-review session to evaluate a developer tool or framework.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The specialized auditor persona in rjm's dx-review skill tasked with experiencing a developer product from the perspective of an external user. The role prioritizes empirical measurement over theoretical analysis, actively running code to surface friction.
