---
package: rjm
name: last-5-PRs rule
slug: last-5-prs-rule
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# last-5-PRs rule

## Definition — verbatim
(used, not defined)

> "| M4 threshold 6 vs max 4; last-5-PRs rule |" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 14 | defined here | Cited in the provenance table referencing retrospective PR #1989 for sampling recent pull requests to evaluate thresholds. |

## Consumes
The git merge history and metric data of the five most recent merged pull requests.

## Produces
An empirical baseline window for assessing recurring failure rates and tuning threshold limits.

## When applied
Applied when auditing failure rates, evaluating threshold adjustments, or analyzing repetitive PR regressions.

## Sub-concepts
none

## Part of
ai-agents-empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
An empirical sampling guideline established after PR #1989. It mandates that when adjusting thresholds or evaluating defect frequencies, agents must sample the last 5 merged pull requests to establish a realistic baseline rather than reacting to a single anomalous PR.
