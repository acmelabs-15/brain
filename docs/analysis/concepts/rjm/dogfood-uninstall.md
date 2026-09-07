---
package: rjm
name: dogfood_uninstall
slug: dogfood-uninstall
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dogfood_uninstall

## Definition — verbatim
(used, not defined)

> "def dogfood_uninstall(target: Path) -> str:" — scripts/dev/dogfood_copilot_plugin.py:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/dev/dogfood_copilot_plugin.py | 197 | defined here | Function that removes the dogfood copy of the plugin and restores any previously stashed backup. |

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
dogfood_uninstall is a Python helper function in dogfood_copilot_plugin.py managing plugin uninstallation and backup restoration rather than an SDLC lifecycle concept.
