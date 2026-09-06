---
package: addy
name: TYPE CHECK
slug: type-check
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TYPE CHECK

## Definition — verbatim
> "│   TYPE CHECK     │  tsc --noEmit" — skills/ci-cd-and-automation/SKILL.md:35

## Also called — verbatim
`Type check` — skills/ci-cd-and-automation/SKILL.md:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 35 | defined here | Second quality gate validating TypeScript type correctness via tsc --noEmit |

## Consumes
TypeScript source code, declarations, and tsconfig.json configuration.

## Produces
Compiler diagnostics and exit code confirming complete type safety without emitting build artifacts.

## When applied
Second gate in CI pipeline, running immediately after linting and before unit tests.

## Sub-concepts
none

## Part of
quality-gate-pipeline

## Implementation status
clean

## Design notes
In addy, TYPE CHECK enforces strict static typing across the codebase using tsc --noEmit. It guarantees type contract adherence, catches missing properties and parameter mismatches, and prevents runtime TypeError regressions before test execution begins.
