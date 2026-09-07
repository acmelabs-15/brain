---
package: rjm
name: Red-Green-Refactor
slug: red-green-refactor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Red-Green-Refactor

## Definition — verbatim
> "Built-in TDD workflow with Red-Green-Refactor" — .agents/analysis/claude-flow-architecture-analysis.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 82 | defined here | Identified as the core operational cycle underpinning automated TDD workflows in autonomous coding platforms. |

## Consumes
Specification of desired behavior and automated test harness.

## Produces
Failing test (Red), functional code passing the test (Green), and refactored clean implementation (Refactor).

## When applied
Applied iteratively during coding tasks whenever new logic is introduced or existing logic is updated.

## Sub-concepts
none

## Part of
tdd-integration

## Implementation status
clean

## Design notes
The classic three-step development cycle where an agent writes a failing test first (Red), implements the minimum code required to pass (Green), and cleans up design without altering behavior (Refactor).
