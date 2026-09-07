---
package: rjm
name: _issue_body
slug: issue-body
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _issue_body

## Definition — verbatim
(used, not defined)

> "def _issue_body(env: dict[str, str], failed_jobs: list[str]) -> str:" — scripts/ci/main_pytest_failure_alert.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/main_pytest_failure_alert.py | 58 | defined here | Function formatting markdown body content containing run links, commit SHA, and failed job lists. |

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
defects: orphan

## Design notes
_issue_body is a Python string-formatting helper generating markdown alert bodies for GitHub issues rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
