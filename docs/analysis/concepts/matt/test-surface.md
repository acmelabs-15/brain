---
package: matt
name: test surface
slug: test-surface
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# test surface

## Definition — verbatim
> "**The interface is the test surface.** Callers and tests cross the same seam. If you want to test *past* the interface, the module is probably the wrong shape." — skills/engineering/codebase-design/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 40 | defined here | Formulates the third principle: callers and tests must cross the exact same seam at the interface. |
| skills/engineering/codebase-design/DEEPENING.md | 35 | defined here | Directs engineers deepening modules to write new tests asserting across the module interface. |
| skills/engineering/codebase-design/SKILL.md | 64 | defined here | Mandates that the public interface serves as the primary verification surface. |

## Consumes
Module interface definitions, test fixtures, and observable behavioral contracts.

## Produces
Refactor-resilient test suites that test through the public interface rather than asserting against private internal state.

## When applied
When writing tests for modules or designing test suites during module deepening:
> "**The interface is the test surface.** Callers and tests cross the same seam. If you want to test *past* the interface, the module is probably the wrong shape." — skills/engineering/codebase-design/SKILL.md:64

## Sub-concepts
interface, seam

## Part of
codebase-design, tdd

## Implementation status
clean

## Design notes
The core testing principle in codebase-design establishing that a module's public interface must be the exact boundary where tests verify behavior. Callers and tests cross the identical seam. When developers or agents feel compelled to test past the interface by asserting against private internal state or mocking internal collaborators, the module is poorly shaped. Aligning the test surface with the public interface produces test suites that verify observable behavior and survive internal refactoring.
