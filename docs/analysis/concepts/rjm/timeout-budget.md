---
package: rjm
name: Timeout budget
slug: timeout-budget
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timeout budget

## Definition — verbatim
> "**Timeout budget**: 300 seconds for analysis work, based on the ADR-041 operating budget." — docs/codeql-architecture.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 93 | defined here | Specifies the 300-second execution time limit for CodeQL analysis in CI/CD. |

## Consumes
CodeQL analysis execution timing telemetry.

## Produces
Enforced runtime threshold terminating overdue analysis jobs.

## When applied
During execution of the CodeQL analysis job in GitHub Actions or local scans.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
A timeout budget establishes an upper boundary on CodeQL analysis execution duration (300 seconds in CI/CD and 60 seconds locally). By bounding execution time, it prevents hung analysis processes or combinatorial query explosions from stalling CI/CD pipelines and developer feedback loops.
