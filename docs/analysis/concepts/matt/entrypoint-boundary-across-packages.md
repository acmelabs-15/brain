---
package: matt
name: entrypoint-boundary-across-packages
slug: entrypoint-boundary-across-packages
kind: gate
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

# entrypoint-boundary-across-packages

## Definition — verbatim
> "entrypoint-boundary-across-packages" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 38 | defined here | Dependency-cruiser rule restricting cross-package imports to entry point files only. |

## Consumes
Import statements between different packages within the repository.

## Produces
Linter error if any package imports internal files from another package.

## When applied
> "A package's own files import each other freely, but may reach OTHER packages only through their entry points, never their internals." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:40

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
An automated boundary gate that permits files within the same package to import each other freely while enforcing that inter-package dependencies must pass through public entry points rather than internal subfolders.
