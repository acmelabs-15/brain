---
package: rjm
name: Night Shift
slug: night-shift
kind: pattern
package_phase: cross-phase
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

# Night Shift

## Definition — verbatim
> "**Night Shift (AFK or autonomous):** `/build` loops, `/test` gate runs, `/review` passes" — docs/getting-started.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 81 | defined here | Defined alongside Day Shift as the operational pipeline mode running autonomously without human intervention. |

## Consumes
Execution plans, committed vertical slices, branch diffs, and automated test suites.

## Produces
Committed code, test run results, gate verdict tables, and multi-axis code review findings.

## When applied
> "AFK or autonomous" — docs/getting-started.md:86

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Night Shift is the autonomous, unattended operational mode in rjm. By executing mechanical build loops, test gate suites, and static code reviews without requiring human presence, it maximizes throughput on well-specified tasks.
