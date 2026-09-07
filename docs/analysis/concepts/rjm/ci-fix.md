---
package: rjm
name: ci_fix
slug: ci-fix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
  - {path: scripts/eval/analyze-pr-churn.py, sha256: caa76d02bf3e72c1e40110bd99569504f7e255f07b16ae36304f42a651c507e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ci_fix

## Definition — verbatim
(used, not defined)

> "ci_fix" — scripts/eval/_pr_churn.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_pr_churn.py | 43 | defined here | Commit churn bucket classifying CI workflow, runner, and pipeline fix commits. |
| scripts/eval/analyze-pr-churn.py | 7 | used here | Cited in module docstring as a metric of process thrash in degenerate pull requests. |

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
`ci_fix` is a commit classification bucket identifier in `_pr_churn.py` tracking CI workflow and build remediation commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
