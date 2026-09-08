---
package: rjm
name: _filtered_targets
slug: filtered-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_changed_paths.py, sha256: dac06c7d9d9bd8e4359cb319cbfc994b45046be9130a022bc8469fda73c1ec29}
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _filtered_targets

## Definition — verbatim
(used, not defined)

> "def _filtered_targets(" — scripts/validation/checks_changed_paths.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_changed_paths.py | 170 | defined here | Returns changed paths matching a predicate after verifying that every matched file exists on disk. |
| scripts/validation/checks_tooling.py | 31 | used here | Imported to filter modified markdown and YAML targets before invoking external linters. |

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
`_filtered_targets` is a Python helper function in `checks_changed_paths.py` filtering target paths for validation runners while ensuring disk existence, classified as `kind: name-only` per D-023.
