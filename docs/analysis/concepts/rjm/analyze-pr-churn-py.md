---
package: rjm
name: analyze-pr-churn.py
slug: analyze-pr-churn-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# analyze-pr-churn.py

## Definition — verbatim
(used, not defined)

> "| `analyze-pr-churn.py` | Deterministic commit-churn classification across a PR cohort (degenerate vs control) to evaluate instruction/rule changes against historical PRs. No LLM; core in `_pr_churn.py`. | Complementary |" — scripts/eval/README.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 94 | defined here | Documented in evaluation tooling table as a commit-churn classification script for PR cohorts. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
`analyze-pr-churn.py` is a Python evaluation script file name for classifying commit churn across PR cohorts rather than an SDLC lifecycle concept.
