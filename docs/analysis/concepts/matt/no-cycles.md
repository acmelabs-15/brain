---
package: matt
name: No cycles
slug: no-cycles
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

# No cycles

## Definition — verbatim
> "4. **No cycles**: no dependency cycles." — skills/in-progress/setup-ts-deep-modules/SKILL.md:31

## Also called — verbatim
`no-circular` — skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:69

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 31 | defined here | Fourth rule of deep module enforcement barring circular dependency relationships. |

## Consumes
Package and file import relationships across the repository.

## Produces
Zero circular dependency violations across all modules.

## When applied
> "**No cycles**: no dependency cycles." — skills/in-progress/setup-ts-deep-modules/SKILL.md:31

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
A fundamental structural rule that forbids cyclic dependencies between modules and packages, maintaining a clean directed acyclic graph (DAG) across the codebase.
