---
package: rjm
name: process_comments
slug: process-comments
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

# process_comments

## Definition — verbatim
(used, not defined)

> "def process_comments(" — .github/scripts/invoke_pr_comment_processing.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_comment_processing.py | 177 | defined here | Orchestrates comment triage processing, reactions, and automated replies based on classification. |

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
process_comments is a core procedural function identifier in PR comment processing scripts rather than an SDLC lifecycle concept, classified as name-only per D-023.
