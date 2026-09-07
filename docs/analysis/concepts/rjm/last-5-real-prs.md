---
package: rjm
name: last 5 real PRs
slug: last-5-real-prs
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# last 5 real PRs

## Definition — verbatim
> "This repo's rule: a detector that cannot fire on the last 5 real PRs is not calibrated (`.agents/retrospective/2026-05-10-pr-1989-recursive-failure.md:153`)." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 60 | defines | States the repository calibration standard requiring candidate guards to be evaluated against the last 5 real PRs. |

## Consumes
Git commit diffs and pull request histories from the five most recently merged PRs.

## Produces
Empirical evaluation dataset reflecting authentic repository code modifications and rework patterns.

## When applied
Required prior to shipping any automated detector, guard, or numeric threshold.

## Sub-concepts
calibration-table

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
An empirical sampling standard established after the PR #1989 failure, requiring that any newly introduced code guard or threshold detector be tested against the last five actual merged pull requests. This ensures that guards are tested against messy, real-world development patterns rather than idealized synthetic fixtures.
