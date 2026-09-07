---
package: rjm
name: OLD_PATTERN
slug: old-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OLD_PATTERN

## Definition — verbatim
(used, not defined)

> "OLD_PATTERN = re.compile(" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 41 | defined here | Compiled regex matching legacy setup_hook_lib_path bootstrap code in hook scripts. |

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
defects: orphan, other

## Design notes
OLD_PATTERN is a script-internal regex variable used to match legacy bootstrap code during migration rather than a lifecycle concept.
