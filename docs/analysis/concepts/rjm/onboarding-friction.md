---
package: rjm
name: onboarding friction
slug: onboarding-friction
kind: technique
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

# onboarding friction

## Definition — verbatim
> "| `measure onboarding friction` | Full audit, emphasis on TTHW |" — .claude/skills/dx-review/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 12 | defines | Defined as an audit trigger and evaluation focus emphasizing Time-to-Hello-World and setup obstacles. |

## Consumes
Getting-started documentation, installation commands, dependency prerequisites, and onboarding step execution timings.

## Produces
Step-by-step friction ratings (low, med, high), aggregate onboarding duration records, and TTHW metric values.

## When applied
Evaluated during Step 1 of dx-review when testing the initial setup experience of a developer product.

## Sub-concepts
time-to-hello-world

## Part of
onboarding-audit, dx-review

## Implementation status
defects: orphan

## Design notes
An audit focus in rjm's dx-review skill that concentrates on friction points, blockers, and cognitive load encountered during new user onboarding. It quantifies friction per step to pinpoint where prospective developers drop off during initial adoption.
