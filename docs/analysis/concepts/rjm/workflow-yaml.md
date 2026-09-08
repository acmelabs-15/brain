---
package: rjm
name: Workflow YAML
slug: workflow-yaml
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Workflow YAML

## Definition — verbatim
(used, not defined)

> "4. Workflow YAML (validate GitHub Actions workflows)" — scripts/validation/pre_pr.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 11 | used here | Documented as step 4 in the pre-PR validation sequence validating GitHub Actions workflows. |

## Consumes
GitHub Actions workflow YAML files located under `.github/workflows/`.

## Produces
Pass/fail validation verdict on workflow syntax, actionlint rules, and local parsing.

## When applied
Executed as part of the shift-left pre-PR validation sequence prior to creating pull requests.

## Sub-concepts
none

## Part of
pre-pr

## Implementation status
defects: doc-drift

## Design notes
A quality gate in `pre_pr.py` that validates GitHub Actions workflow definitions under `.github/workflows/` for YAML syntax and structural validity, preventing broken CI pipeline configurations from being pushed to remote branches.
