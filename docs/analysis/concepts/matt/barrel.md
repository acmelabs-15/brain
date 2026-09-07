---
package: matt
name: barrel
slug: barrel
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

# barrel

## Definition — verbatim
> "Barrel files that re-export a whole subtree are discouraged; keep entry points small and hide implementation in subfolders." — skills/in-progress/setup-ts-deep-modules/SKILL.md:33

## Also called — verbatim
`barrel index` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 33 | defined here | Discouraged code organization pattern where a single file re-exports an entire subtree. |

## Consumes
Package submodules and export statements.

## Produces
Overly wide public API surface aggregating multiple distinct concerns.

## When applied
Discouraged in favor of multiple focused entry points at the package root.

## Sub-concepts
barrel-index

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
An architectural anti-pattern involving files that aggregate and re-export whole subtrees. In Matt's deep module architecture, barrel files are discouraged because they blur interface boundaries and expand surface area; packages should instead expose multiple discrete entry points.
