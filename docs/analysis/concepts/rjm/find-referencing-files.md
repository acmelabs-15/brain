---
package: rjm
name: find_referencing_files
slug: find-referencing-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/rename_spec_id.py, sha256: ad4c8bc9523c6c8d9a633d463133c369bab159d2a397db401407bba7caea0581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_referencing_files

## Definition — verbatim
(used, not defined)

> "def find_referencing_files(spec_id: str, base_path: Path) -> list[Path]:" — scripts/traceability/rename_spec_id.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/rename_spec_id.py | 39 | defined here | Function discovering all specification files that reference a target spec ID in their related list. |

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
defects: script-bug

## Design notes
A Python helper function in `rename_spec_id.py` scanning specification directories for files referencing a spec ID, classified as `name-only` per D-023.
