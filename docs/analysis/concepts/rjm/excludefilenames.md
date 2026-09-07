---
package: rjm
name: excludeFilenames
slug: excludefilenames
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_copilot_routing_exclusions.py, sha256: d7fae2a3a71646d5de19396107aca1fb122a971001c0c1de52e0e6e995bd1336}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# excludeFilenames

## Definition — verbatim
(used, not defined)

> "set via templates/platforms/copilot-cli.yaml artifacts.skills.excludeFilenames." — scripts/validation/check_copilot_routing_exclusions.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_routing_exclusions.py | 5 | used here | Configuration key in copilot-cli.yaml defining canonical skills excluded from public distribution. |

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
A YAML configuration key identifier (`excludeFilenames`) in platform configuration defining excluded skills, classified as `name-only` per D-023.
