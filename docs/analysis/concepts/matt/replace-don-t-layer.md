---
package: matt
name: replace, don't layer
slug: replace-don-t-layer
kind: technique
package_phase: matt:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# replace, don't layer

## Definition — verbatim
> "## Testing strategy: replace, don't layer" — skills/engineering/codebase-design/DEEPENING.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 32 | defined here | Testing strategy rule directing deletion of old shallow tests once tests at the deepened module interface exist. |

## Consumes
Deepened module interface and existing tests from pre-deepened shallow modules.

## Produces
A lean test suite testing exclusively at deepened module interfaces with obsolete shallow tests removed.

## When applied
Following the deepening of a module cluster.

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
A testing strategy for module refactoring: when shallow modules are deepened into a cohesive deep module, developers must delete the old unit tests that targeted internal shallow components rather than keeping them as a redundant layer. Tests are rewritten at the deepened interface ("the interface is the test surface").
