---
package: rjm
name: Test-Implementation Drift
slug: test-implementation-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Test-Implementation Drift

## Definition — verbatim
> "Tests don't match actual behavior | Mocks diverge from reality, stale fixtures" — .claude/skills/retrospective/references/diagnosis-and-actions.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 257 | defined here | Standard root cause category defined as tests that do not match actual behavior, including diverging mocks and stale fixtures. |

## Consumes
Execution traces where passing tests masked broken runtime behavior due to stale fixtures or diverged mocks.

## Produces
Root cause entity classification (`rootcause-test-implementation-drift-{nnn}`) prompting test suite alignment and mock updates.

## When applied
Applied during retrospective Root Cause Pattern Management when diagnosing discrepancies between test assertions and real execution behavior.

## Sub-concepts
none

## Part of
root-cause-categories, root-cause-pattern-management

## Implementation status
clean

## Design notes
Test-Implementation Drift is a root cause failure category capturing scenarios where test suites pass despite broken production functionality because mocks diverge from external systems, fixtures are stale, or tests encode self-referential assumptions.
