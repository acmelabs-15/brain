---
package: rjm
name: question
slug: question
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# question

## Definition — verbatim
(used, not defined)

> "3. Flag others for human attention (stale, question, implementation)" — .github/scripts/invoke_pr_comment_processing.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_comment_processing.py | 7 | used here | Comment triage classification identifying questions from reviewers requiring human responses. |

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
defects: orphan, script-bug

## Design notes
`question` is a PR review comment triage classification tag identifying reviewer questions that require human responses rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
