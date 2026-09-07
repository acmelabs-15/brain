---
package: rjm
name: FORMATTERS
slug: formatters
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/reconstruct_trace.py, sha256: ca583e5d73a03980877473ec231b4879af5011e2718eb188e5eded7369b9f081}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FORMATTERS

## Definition — verbatim
(used, not defined)

> "FORMATTERS = {" — scripts/traceability/reconstruct_trace.py:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 168 | defined here | Dictionary mapping format names to trace graph rendering functions. |
| scripts/validation/hook_contracts.py | 936 | defined here | Dictionary mapping report format names to hook contract formatting functions. |
| scripts/validation/sha_pinning.py | 253 | defined here | Dictionary mapping output format names to SHA pinning violation formatters. |

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
defects: doc-drift

## Design notes
Python dictionary constant mapping format names to CLI output formatters, classified as `name-only` per D-023.
