---
package: rjm
name: Performance Budget
slug: performance-budget
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Performance Budget

## Definition — verbatim
(used, not defined)

> "### Performance Budget" — .agents/architecture/ADR-054-local-security-scanning.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 155 | defined here | Establishes enforced execution timeout boundaries for local Semgrep processes and Lefthook jobs. |

## Consumes
Execution timing telemetry from local hook runners and subprocess managers.

## Produces
Enforced timeout boundaries preventing hung local hooks from blocking developer push workflows.

## When applied
Enforced during local pre-push hook execution and continuous integration test suite orchestration.

## Sub-concepts
none

## Part of
- pre-push

## Implementation status
clean

## Design notes
A Performance Budget enforces hard execution time ceilings on automated local scanning tools. In ADR-054, rjm sets explicit timeout boundaries (840 seconds for the Python Semgrep child process and 900 seconds for the Lefthook `security-scan` job) to prevent local hook runs from hanging indefinitely. By capping run durations, performance budgets ensure local developer and agent experience remains predictable while maintaining thorough security validation.
