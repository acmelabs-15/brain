---
package: rjm
name: _find_dispatcher
slug: find-dispatcher
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _find_dispatcher

## Definition — verbatim
(used, not defined)

> "def _find_dispatcher(install_root: Path, event: str) -> Path | None:" — scripts/ci/test_installed_plugin_hooks.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/test_installed_plugin_hooks.py | 224 | defined here | Helper function resolving and verifying hook dispatcher script paths within the installation root. |

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
defects: script-bug, other

## Design notes
`_find_dispatcher` is an internal Python helper function in `test_installed_plugin_hooks.py` resolving hook dispatcher scripts while guarding against path traversal rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
