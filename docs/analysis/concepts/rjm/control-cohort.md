---
package: rjm
name: control cohort
slug: control-cohort
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/analyze-pr-churn.py, sha256: caa76d02bf3e72c1e40110bd99569504f7e255f07b16ae36304f42a651c507e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# control cohort

## Definition — verbatim
(used, not defined)

> "and a control cohort (low commit count)" — scripts/eval/analyze-pr-churn.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/analyze-pr-churn.py | 5 | defined here | Baseline evaluation cohort designation for pull requests with low commit counts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An evaluation cohort classification label in `analyze-pr-churn.py` designating low-commit baseline pull requests used for comparative thrash analysis, classified as name-only per D-023.
