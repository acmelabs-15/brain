---
package: matt
name: PUBLIC SURFACE
slug: public-surface
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

# PUBLIC SURFACE

## Definition — verbatim
> "A package's PUBLIC SURFACE is its ENTRY POINTS:" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:5

## Also called — verbatim
`public surface` — skills/in-progress/setup-ts-deep-modules/SKILL.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 5 | defined here | Defines the package's public interface as consisting solely of its root entry point files. |

## Consumes
Package root files (`index.ts`, `client.ts`, `server.ts`).

## Produces
The authorized import boundary for external consumers and peer packages.

## When applied
Evaluated during dependency analysis to determine whether an import target is accessible from outside the package.

## Sub-concepts
entry-points, root-files

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
Designates the set of files that external code is permitted to import. In Matt's deep module architecture, the public surface consists strictly of the files located at the package root, ensuring that internal subfolders remain entirely private.
