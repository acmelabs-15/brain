---
package: rjm
name: PLUGIN_MANIFEST
slug: plugin-manifest
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PLUGIN_MANIFEST

## Definition — verbatim
(used, not defined)

> "PLUGIN_MANIFEST = Path(\".claude-plugin\") / \"plugin.json\"" — scripts/validation/check_shipped_skill_routes.py:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 191 | defined here | Constant specifying the relative path to plugin.json identifying valid plugin roots. |

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
A constant identifier defining the relative path to the plugin manifest file rather than an agent lifecycle concept.
