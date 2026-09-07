---
package: rjm
name: DELETE-AFTER-MERGE
slug: delete-after-merge
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

# DELETE-AFTER-MERGE

## Definition — verbatim
(used, not defined)

> "DELETE-AFTER-MERGE: This script is one-shot. It is idempotent on re-run" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 2 | defined here | Comment tag marking a one-shot migration utility intended for deletion after merge. |

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
DELETE-AFTER-MERGE is a maintenance tag indicating an ephemeral script intended for post-merge cleanup rather than a lifecycle concept.
