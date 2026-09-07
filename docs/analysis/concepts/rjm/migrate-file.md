---
package: rjm
name: migrate_file
slug: migrate-file
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

# migrate_file

## Definition — verbatim
(used, not defined)

> "Return one of: migrated, already-migrated, skipped-no-pattern, error." — scripts/migrations/req003_inline_plugin_root_bootstrap.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 84 | defined here | Function performing regex replacement to migrate individual hook scripts to inline bootstrap. |

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
migrate_file is an internal migration script function modifying individual hook files rather than an independent lifecycle concept.
