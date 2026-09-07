---
package: rjm
name: dogfood_check
slug: dogfood-check
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

# dogfood_check

## Definition — verbatim
(used, not defined)

> "def dogfood_check(source: Path, target: Path) -> tuple[bool, str]:" — scripts/dev/dogfood_copilot_plugin.py:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/dev/dogfood_copilot_plugin.py | 276 | defined here | Function evaluating whether the installed dogfood copy is stale relative to the working tree. |

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
dogfood_check is a Python helper function in dogfood_copilot_plugin.py that checks for content staleness between local working tree and installed plugin rather than an SDLC lifecycle concept.
