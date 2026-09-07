---
package: rjm
name: TDD Integration
slug: tdd-integration
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

# TDD Integration

## Definition — verbatim
> "Built-in TDD workflow with Red-Green-Refactor" — .agents/analysis/claude-flow-architecture-analysis.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 82 | defined here | Evaluated as a structured development methodology integrating automated Test-Driven Development into agent workflows. |

## Consumes
Feature specifications, acceptance criteria, and test runner configurations.

## Produces
Automated test suites and verified source code passing test gates.

## When applied
Applied during implementation phases to require test specification prior to code generation.

## Sub-concepts
red-green-refactor

## Part of
sparc-methodology

## Implementation status
clean

## Design notes
A software engineering practice embedding automated test-driven development into agent execution loops, ensuring code correctness and preventing regressions before changes are marked ready for review.
