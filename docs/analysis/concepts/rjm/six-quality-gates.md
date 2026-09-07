---
package: rjm
name: Six quality gates
slug: six-quality-gates
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Six quality gates

## Definition — verbatim
> "Six quality gates: functional, non-functional, security, DevOps, DX, observability" — docs/getting-started.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 77 | defined here | Defined as the verification gate suite executed during Phase 5 (QA) via `/test`. |

## Consumes
Committed code and vertical slices produced during the Implement phase.

## Produces
Gate verdicts table with PASS/WARN/CRITICAL_FAIL per gate.

## When applied
> "After `/build` completes a slice" — docs/getting-started.md:77

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
The Six quality gates constitute the comprehensive verification framework of rjm's QA phase. By assessing functional behavior, non-functional performance, security vulnerabilities, DevOps pipelines, developer experience, and observability instrumentation, they guard against system regressions.
