---
package: rjm
name: GitQueryError
slug: gitqueryerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/tracked_paths.py, sha256: 2d9d92b4577f09a636d93a061b26cd143389eb6153519e0ba1b195fe9b0d9afc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitQueryError

## Definition — verbatim
(used, not defined)

> "class GitQueryError(RuntimeError):" — scripts/validation/tracked_paths.py:38

## Also called — verbatim
`from scripts.validation.tracked_paths import GitQueryError` — scripts/validation/check_skill_md_portability.py:128

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 128 | used here | Imported to catch and handle git query operational failures during validation. |
| scripts/validation/tracked_paths.py | 38 | defined here | Custom exception raised when git command execution fails within a repository. |

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
`GitQueryError` is a Python exception class identifier representing git query execution failures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
