---
package: rjm
name: find_stale_refs
slug: find-stale-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_stale_refs

## Definition — verbatim
(used, not defined)

> "def find_stale_refs(" — scripts/validation/stale_script_refs.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/stale_script_refs.py | 126 | defined here | Iterates through tracked documentation files, extracts script references, and checks them against tracked files and allowlists. |

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
defects: missing-path, doc-drift

## Design notes
An analysis engine function identifier in `stale_script_refs.py` collecting untracked script references, classified as name-only per D-023.
