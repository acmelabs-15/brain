---
package: rjm
name: PLUGIN_MANIFEST
slug: plugin-manifest
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
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
