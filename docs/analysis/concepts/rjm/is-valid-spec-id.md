---
package: rjm
name: is_valid_spec_id
slug: is-valid-spec-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_valid_spec_id

## Definition — verbatim
(used, not defined)

> "def is_valid_spec_id(spec_id: str) -> bool:" — scripts/traceability/spec_utils.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 27 | used here | Imported to validate root specification ID parameter format. |
| scripts/traceability/spec_utils.py | 28 | defined here | Function verifying whether a spec ID conforms to the TYPE-ID regex pattern. |
| scripts/traceability/update_spec_references.py | 31 | used here | Imported to validate source and target spec IDs before updating references. |

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
defects: script-bug, missing-path, orphan

## Design notes
A Python validation function in `spec_utils.py` verifying that specification IDs follow expected prefixes and formats, classified as `name-only` per D-023.
