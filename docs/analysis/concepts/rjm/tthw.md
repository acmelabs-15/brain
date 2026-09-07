---
package: rjm
name: TTHW
slug: tthw
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

# TTHW

## Definition — verbatim
> "Measure Time-to-Hello-World (TTHW) only when the target supports a runnable example." — .claude/skills/dx-review/SKILL.md:90-91

## Also called — verbatim
`Time-to-Hello-World` — .claude/skills/dx-review/SKILL.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 90 | defines | Defined as an empirical metric measuring elapsed time from onboarding discovery to successful execution. |

## Consumes
Runnable target examples, execution timestamps, start/end boundary specifications, and command execution results.

## Produces
A quantitative time measurement in minutes (or explicit N/A justification) entered into the dx-review scorecard.

## When applied
Evaluated during Step 1 of dx-review when the target product supports a runnable execution example.

## Sub-concepts
none

## Part of
onboarding-audit, dx-review

## Implementation status
defects: orphan

## Design notes
Standard acronym and metric technique for Time-to-Hello-World within rjm's dx-review skill. It measures the duration required to achieve a working result from initial setup, demanding rigorous evidence labels (TESTED, PARTIAL) and prohibiting speculative estimates.
