---
package: matt
name: root files
slug: root-files
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# root files

## Definition — verbatim
> "The public surface is the package's **root files**, not one designated `index.ts`." — skills/in-progress/setup-ts-deep-modules/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 24 | defined here | Defines the package's public surface as consisting of all files located at the package root level. |

## Consumes
Source files located directly in the root directory of a package.

## Produces
Authorized public entry points importable by external packages and application code.

## When applied
> "Public vs private is decided by **depth**: a package's root files are entry points; anything in a subfolder is private." — skills/in-progress/setup-ts-deep-modules/SKILL.md:100

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
Defines public accessibility based on directory depth rather than file naming conventions. Any file situated directly in a package's root directory is treated as a valid public entry point, allowing multiple small entry points without requiring complex configuration updates.
