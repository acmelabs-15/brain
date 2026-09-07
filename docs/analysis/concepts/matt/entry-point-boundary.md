---
package: matt
name: Entry-point boundary
slug: entry-point-boundary
kind: gate
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

# Entry-point boundary

## Definition — verbatim
> "1. **Entry-point boundary**: code outside a package (app code or another package) may import only that package's entry points (its root files), never anything in its subfolders." — skills/in-progress/setup-ts-deep-modules/SKILL.md:28

## Also called — verbatim
`entrypoint-boundary-from-app` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:30

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 28 | defined here | First rule of deep module enforcement forbidding external code from importing subfolder contents. |

## Consumes
All external import statements targeting package directories.

## Produces
Validation error preventing external code from bypassing root entry points.

## When applied
> "**Entry-point boundary**: code outside a package (app code or another package) may import only that package's entry points (its root files), never anything in its subfolders." — skills/in-progress/setup-ts-deep-modules/SKILL.md:28

## Sub-concepts
root-files, entry-points

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
The primary architectural rule of Matt's deep module system. It restricts any code outside a package to importing only that package's root entry points, mechanically blocking deep imports into private implementation subfolders.
