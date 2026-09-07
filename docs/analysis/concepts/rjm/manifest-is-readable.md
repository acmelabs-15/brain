---
package: rjm
name: _manifest_is_readable
slug: manifest-is-readable
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

# _manifest_is_readable

## Definition — verbatim
(used, not defined)

> "def _manifest_is_readable(install_root: Path) -> bool:" — scripts/ci/test_installed_plugin_hooks.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/test_installed_plugin_hooks.py | 181 | defined here | Validates that hooks.json exists, parses as valid JSON, and maps events to list structures. |

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
_manifest_is_readable is a verification function checking the syntactic integrity of hooks.json rather than an operational lifecycle concept.
