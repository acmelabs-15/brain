---
package: matt
name: entrypoint-boundary-from-app
slug: entrypoint-boundary-from-app
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

# entrypoint-boundary-from-app

## Definition — verbatim
> "entrypoint-boundary-from-app" — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 30 | defined here | Dependency-cruiser rule forbidding app and root code from importing package subfolder internals. |

## Consumes
Import statements originating from outside any package.

## Produces
Linter error if application or root code imports files from package subfolders.

## When applied
> "App/root code may import a package's entry points (its root files), but nothing inside its subfolders." — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:32

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
clean

## Design notes
An automated lint rule that restricts application and root-level code to importing only a package's root entry point files, mechanically blocking deep imports into private implementation subfolders.
