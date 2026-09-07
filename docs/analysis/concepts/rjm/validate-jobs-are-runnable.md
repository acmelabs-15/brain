---
package: rjm
name: _validate_jobs_are_runnable
slug: validate-jobs-are-runnable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _validate_jobs_are_runnable

## Definition — verbatim
(used, not defined)

> "def _validate_jobs_are_runnable(self, file_path: Path, jobs: dict[str, Any]) -> None:" — scripts/validate_workflows.py:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 120 | defined here | Method confirming each job in a workflow specifies runs-on or uses so it can be dispatched. |

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
`_validate_jobs_are_runnable` is an internal Python method identifier ensuring workflow jobs declare execution runners or reusable targets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
