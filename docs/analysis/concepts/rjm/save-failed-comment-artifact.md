---
package: rjm
name: save_failed_comment_artifact
slug: save-failed-comment-artifact
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# save_failed_comment_artifact

## Definition — verbatim
(used, not defined)

> "def save_failed_comment_artifact(" — .github/scripts/post_issue_comment.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/post_issue_comment.py | 59 | defined here | Helper function writing comment text to a local artifact file when posting to GitHub fails. |

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
A Python helper function identifier (`save_failed_comment_artifact`) preserving comment text on API failure rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
