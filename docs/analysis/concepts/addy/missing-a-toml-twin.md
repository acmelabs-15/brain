---
package: addy
name: missing a TOML twin
slug: missing-a-toml-twin
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# missing a TOML twin

## Definition — verbatim
(used, not defined)
> "test('fails when a Claude command is missing a TOML twin', () => {" — scripts/validate-commands-test.js:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands-test.js | 75 | defines | Unit test verifying validator failure when a Claude command lacks corresponding Gemini/Antigravity TOML definitions. |

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
Test case label verifying error detection when a Claude command lacks counterpart definitions in TOML directories rather than a lifecycle concept.
