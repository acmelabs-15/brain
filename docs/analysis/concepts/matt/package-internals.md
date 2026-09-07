---
package: matt
name: PACKAGE_INTERNALS
slug: package-internals
kind: name-only
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

# PACKAGE_INTERNALS

## Definition — verbatim
(used, not defined)

> "const PACKAGE_INTERNALS" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 24 | defined here | Regular expression constant matching all paths nested within package subfolders. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
A configuration constant in `dependency-cruiser.config.cjs` defining a regular expression pattern that matches private subfolder paths, classified as name-only because it is an internal code identifier rather than a lifecycle concept.
