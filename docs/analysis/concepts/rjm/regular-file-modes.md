---
package: rjm
name: REGULAR_FILE_MODES
slug: regular-file-modes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_git.py, sha256: 514b5c5a3541e4888e0b15440c04ec529e190db1a04714049ece5887b20c92b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# REGULAR_FILE_MODES

## Definition — verbatim
(used, not defined)

> "REGULAR_FILE_MODES = (\"100644\", \"100755\")" — scripts/validation/portability_git.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_git.py | 25 | defined here | Constant tuple of valid git file modes (100644, 100755) under which a baseline may be committed. |

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
A module-level constant identifier in `portability_git.py`, classified as name-only per D-023.
