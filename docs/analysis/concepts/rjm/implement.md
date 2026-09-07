---
package: rjm
name: Implement
slug: implement
kind: phase
package_phase: rjm:build
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

# Implement

## Definition — verbatim
> "TDD vertical slices, atomic commits, code-quality self-check" — docs/getting-started.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 76 | defined here | Defined as Phase 4 of the 7-phase pipeline invoked via `/build` to write code and tests. |

## Consumes
Execution plan artifact from the Kanban phase.

## Produces
Committed code plus passing tests.

## When applied
> "After `/plan` output exists" — docs/getting-started.md:76

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Implement is the core coding phase in rjm. Triggered by `/build`, implementer agents execute vertical slices under strict test-driven development rules, producing atomic git commits and running code-quality self-checks before advancing to automated quality gates.
