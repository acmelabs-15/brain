---
package: rjm
name: materialize
slug: materialize
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/materialize_installed_plugin.py, sha256: de098ac790298c060997e8a1fe7fd94a7a19bf0e4762b41d497af93cb7a26c2c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# materialize

## Definition — verbatim
(used, not defined)

> "def materialize(plugin_source: Path, install_root: Path) -> None:" — scripts/ci/materialize_installed_plugin.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/materialize_installed_plugin.py | 26 | defined here | Validates plugin source and manifest structure, then copies tree to the target installation root. |

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
`materialize` is a Python function identifier in `materialize_installed_plugin.py` copying a plugin source tree to an install root rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
