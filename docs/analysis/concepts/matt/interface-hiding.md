---
package: matt
name: Interface-hiding
slug: interface-hiding
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Interface-hiding

## Definition — verbatim
> "Interface-hiding controls HOW you import (through the entry points)." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 77 | defined here | Contrasted with layering to define the mechanism of importing strictly through public entry points. |

## Consumes
Package entry points and internal subfolder encapsulation rules.

## Produces
Strict enforcement of entry-point boundaries for external consumers.

## When applied
Enforced across all imports targeting package internals.

## Sub-concepts
entry-points, subfolders

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
The architectural principle governing the import mechanism rather than dependency direction. It dictates that consumers must access package functionality exclusively through root entry points, hiding underlying implementation subfolders regardless of layering relationships.
