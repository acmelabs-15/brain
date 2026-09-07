---
package: rjm
name: branch coverage
slug: branch-coverage
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# branch coverage

## Definition — verbatim
(used, not defined)

> "The original rule focused on test absence and branch coverage." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 54 | used here | Historical context explaining initial test rigor focus on test absence and branch coverage. |
| scripts/ci/combine_pin_coverage.py | 5 | used here | CI coverage combination script explaining branch-mode coverage measurement in pinned test groups. |

## Consumes
Instrumented code execution, conditional statements, control flow branches.

## Produces
Branch coverage percentage indicating the proportion of control-flow decision branches evaluated by tests.

## When applied
Measured during test execution, with 100% branch gates enforced on security-critical and pinned modules.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A testing metric measuring whether both true and false outcomes of every conditional decision point in code are exercised by test suites, providing significantly higher defect detection than statement coverage alone.
