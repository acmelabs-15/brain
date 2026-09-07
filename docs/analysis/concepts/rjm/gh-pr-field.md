---
package: rjm
name: _gh_pr_field
slug: gh-pr-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _gh_pr_field

## Definition — verbatim
(used, not defined)

> "def _gh_pr_field(pr_number: str, repository: str, field: str) -> tuple[int, str]:" — scripts/ci/spec_extract_refs.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_extract_refs.py | 48 | defined here | Helper function executing gh pr view to fetch a specific pull request field in JSON format. |

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
defects: orphan, missing-path

## Design notes
_gh_pr_field is a private Python helper function for GitHub CLI query execution rather than an operational lifecycle concept.
