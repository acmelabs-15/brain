---
package: rjm
name: _extract_spec_refs
slug: extract-spec-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _extract_spec_refs

## Definition — verbatim
(used, not defined)

> "def _extract_spec_refs(combined: str) -> str:" — scripts/ci/spec_extract_refs.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_extract_refs.py | 82 | defined here | Helper function parsing REQ, DESIGN, TASK IDs and spec file paths from PR text. |

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
defects: orphan, missing-path

## Design notes
_extract_spec_refs is a private Python regex parsing function extracting specification references rather than an operational lifecycle concept.
