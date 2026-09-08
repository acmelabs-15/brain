---
package: rjm
name: find_all_violations
slug: find-all-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_all_violations

## Definition — verbatim
(used, not defined)

> "def find_all_violations(" — scripts/validation/check_subprocess_encoding.py:1735

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_subprocess_encoding.py | 1735 | defined here | Public function scanning repository script sources and returning (path, lineno) pairs for all flagged call sites. |

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
A public API function scanning Python files and returning file path and line number violation pairs in check_subprocess_encoding.py, classified as name-only per D-023.
