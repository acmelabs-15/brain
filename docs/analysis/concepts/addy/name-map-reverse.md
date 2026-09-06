---
package: addy
name: NAME_MAP_REVERSE
slug: name-map-reverse
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands.js, sha256: c49934f8c78b393ba38da33fb00a625bdd6efe0c164c306582e762328083a080}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# NAME_MAP_REVERSE

## Definition — verbatim
(used, not defined)
> "const NAME_MAP_REVERSE = Object.fromEntries(" — scripts/validate-commands.js:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands.js | 41 | defines | Inverted lookup table mapping TOML command stems back to Claude stems for bidirectional parity checking. |

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
Reverse lookup table dynamically created to translate TOML filenames back to Claude command stems rather than an independent lifecycle concept.
