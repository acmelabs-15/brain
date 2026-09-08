---
package: rjm
name: shift-left validation
slug: shift-left-validation
kind: technique
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

# shift-left validation

## Definition — verbatim
> "Unified shift-left validation runner for pre-PR checks." — scripts/validation/pre_pr.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 2 | defined here | Defined in module docstring as the core purpose of the pre-PR test runner. |

## Consumes
Local workspace code, git changes, scripts, and repository configuration.

## Produces
Immediate local feedback, non-zero exit codes blocking invalid pushes, and automated test reports.

## When applied
Applied locally before opening pull requests or pushing branches to remote repositories.

## Sub-concepts
none

## Part of
pre-pr

## Implementation status
defects: doc-drift

## Design notes
An engineering practice and architectural technique in `rjm` that moves testing, syntax validation, link resolution, and policy checks from remote CI environments into local developer pre-commit and pre-push hooks. It ensures defects are surfaced immediately at the lowest possible feedback cost.
