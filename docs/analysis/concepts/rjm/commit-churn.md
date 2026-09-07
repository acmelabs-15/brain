---
package: rjm
name: commit churn
slug: commit-churn
kind: technique
package_phase: cross-phase
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

# commit churn

## Definition — verbatim
> "Analyze commit churn across a PR cohort, to evaluate instruction changes." — scripts/eval/analyze-pr-churn.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/analyze-pr-churn.py | 2 | defined here | Evaluation methodology analyzing commit distributions across PR cohorts to detect process thrash. |

## Consumes
Git commit history and merged pull request metadata.

## Produces
Commit headline categorizations across churn buckets and thrash fraction metrics.

## When applied
Executed after shipping prompt or instruction modifications to evaluate whether development process thrash decreased relative to baseline.

## Sub-concepts
degenerate-prs, control-cohort

## Part of
none

## Implementation status
clean

## Design notes
Commit churn analysis quantifies non-progress developer iteration (such as repeated CI fixes, review responses, and validation checks) across pull requests to evaluate whether prompt context optimizations successfully reduce development process thrash.
