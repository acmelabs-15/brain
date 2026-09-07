---
package: matt
name: Layering
slug: layering
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Layering

## Definition — verbatim
> "Layering (which packages may depend on which) is a *different* concern and is left as a commented stub in the config for this repo to fill in." — skills/in-progress/setup-ts-deep-modules/SKILL.md:35

## Also called — verbatim
`Layering` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:76

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 76 | defined here | Commented stub in dependency-cruiser configuration illustrating how to constrain inter-package dependency direction. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 35 | defined here | Distinguishes directional dependency layering from interface-hiding encapsulation rules. |

## Consumes
Architectural dependency topology rules defining allowed package dependency directions.

## Produces
Optional repository-specific rules governing which package layers can import other layers.

## When applied
> "Layering controls WHICH packages may depend on which. Add your own rules" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:78

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
An architectural pattern governing directional dependencies between packages (e.g. preventing domain layers from depending on UI layers). In Matt's framework, layering is treated as distinct from interface-hiding: interface-hiding controls how modules are imported (via entry points), whereas layering controls which modules may depend on which.
