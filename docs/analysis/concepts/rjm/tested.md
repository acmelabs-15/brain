---
package: rjm
name: TESTED
slug: tested
kind: reference
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

# TESTED

## Definition — verbatim
> "The auditor executed the interaction or command and observed the result" — .claude/skills/dx-review/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 9 | defines | Defined as the highest standard evidence label in developer experience scorecards. |

## Consumes
Direct execution logs, console output captures, and terminal observations of running commands.

## Produces
An evidence classification certifying that a specific scorecard rating is grounded in observed runtime behavior.

## When applied
Applied to scorecard rows and findings when the auditor directly ran the command, API request, or interactive flow.

## Sub-concepts
none

## Part of
evidence-labels, dx-review

## Implementation status
defects: orphan

## Design notes
The highest empirical evidence tier in rjm's dx-review audit framework. It enforces that scores marked TESTED represent verifiable, observed runtime execution rather than static documentation assumptions or unconfirmed expectations.
