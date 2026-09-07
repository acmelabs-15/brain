---
package: matt
name: ENTRY POINTS
slug: entry-points
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

# ENTRY POINTS

## Definition — verbatim
> "A package's public surface is its **entry points** (the files at the package root), and everything in its subfolders is hidden." — skills/in-progress/setup-ts-deep-modules/SKILL.md:9

## Also called — verbatim
`ENTRY POINTS` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 5 | defined here | Identifies root files as the public entry points that expose package functionality without exposing internals. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 9 | defined here | Mandates that packages expose multiple small entry points at root rather than funneling through giant barrel files. |

## Consumes
Package root source files exporting public APIs.

## Produces
Granular, well-defined import targets for external callers.

## When applied
> "A package's public surface is its **entry points** (the files at the package root), and everything in its subfolders is hidden." — skills/in-progress/setup-ts-deep-modules/SKILL.md:9

## Sub-concepts
root-files

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
Root files of a package that constitute its only externally reachable surface. Rather than funneling all exports through a single giant barrel `index.ts`, packages are encouraged to expose multiple focused entry points (e.g., `index.ts`, `client.ts`, `server.ts`) at the root level while hiding internal implementations in subfolders.
