---
package: rjm
name: coverage targets
slug: coverage-targets
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# coverage targets

## Definition — verbatim
(used, not defined)

> "`.agents/governance/TESTING-RIGOR.md` defines per-function test cases, coverage targets, and verification steps." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 48 | used here | Describes governance definitions in TESTING-RIGOR.md specifying required coverage levels. |

## Consumes
Test execution runs, code instrumentation tools, source modules under verification.

## Produces
Quantitative threshold requirements (e.g. statement or branch percentage) that must be met to validate testing completeness before merging.

## When applied
Evaluated during test execution and QA gate checks on code diffs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Quantitative coverage benchmarks (statement, branch, or condition percentages) established by governance standards that test suites must achieve to ensure that new code and critical components have sufficient verification rigor.
