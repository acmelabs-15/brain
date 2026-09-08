---
package: rjm
name: RemoteLookupError
slug: remotelookuperror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RemoteLookupError

## Definition — verbatim
(used, not defined)

> "class RemoteLookupError(RuntimeError):" — scripts/validation/push_ref_staleness.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/push_ref_staleness.py | 60 | defined here | Custom exception class carrying an exit code for failed remote git queries. |

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
defects: orphan, doc-drift

## Design notes
A Python exception class in `push_ref_staleness.py`, classified as name-only per D-023.
