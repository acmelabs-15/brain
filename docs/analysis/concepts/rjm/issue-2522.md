---
package: rjm
name: Issue #2522
slug: issue-2522
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

# Issue #2522

## Definition — verbatim
(used, not defined)

> "(Issue #2522). Tracked separately from errors so the exit code stays 0." — .github/scripts/invoke_pr_comment_processing.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_comment_processing.py | 194 | used here | Cited in comment tracking logic explaining why reaction failures do not fail scheduled runs. |

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
Issue #2522 is a GitHub repository issue tracking identifier documenting the separation of cosmetic reaction failures from fatal script errors, classified as name-only per D-023.
