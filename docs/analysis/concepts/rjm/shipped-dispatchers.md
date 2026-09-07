---
package: rjm
name: _shipped_dispatchers
slug: shipped-dispatchers
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

# _shipped_dispatchers

## Definition — verbatim
(used, not defined)

> "def _shipped_dispatchers(install_root: Path) -> list[Path]:" — scripts/ci/test_installed_plugin_hooks.py:210

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/test_installed_plugin_hooks.py | 210 | defined here | Discovers all _dispatch.py files residing under the installed plugin's hooks directory. |

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
_shipped_dispatchers is a filesystem utility function in the plugin hooks test script rather than an independent lifecycle concept.
