---
package: rjm
name: EXPORT_NAME
slug: export-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/install_locked_deps.py, sha256: 8fbaf932b42e746f6d6ce2a3b41c8ae0ae36f0144c988bad8f0a4aea54f97e69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXPORT_NAME

## Definition — verbatim
(used, not defined)

> "EXPORT_NAME = \"uv-locked-requirements.txt\"" — scripts/ci/install_locked_deps.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/install_locked_deps.py | 44 | defined here | Constant defining the filename for exported requirements from uv.lock. |

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
defects: orphan

## Design notes
EXPORT_NAME is a script-level constant specifying the target requirements file name for uv export rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
