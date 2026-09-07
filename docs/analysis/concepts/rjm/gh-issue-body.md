---
package: rjm
name: _gh_issue_body
slug: gh-issue-body
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _gh_issue_body

## Definition — verbatim
(used, not defined)

> "def _gh_issue_body(issue_ref: str, default_repo: str) -> tuple[int, str]:" — scripts/ci/spec_load_content.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_load_content.py | 45 | defined here | Helper function invoking the GitHub CLI to retrieve the title and body of an issue reference. |

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
_gh_issue_body is a private Python helper function retrieving issue bodies via GitHub CLI rather than an operational lifecycle concept.
