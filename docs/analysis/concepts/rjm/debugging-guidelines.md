---
package: rjm
name: Debugging Guidelines
slug: debugging-guidelines
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Debugging Guidelines

## Definition — verbatim
> "## Debugging Guidelines" — .claude/agents/debug.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 56 | defined here | Section heading defining six core operational heuristics for systematic debugging. |
| templates/agents/debug.shared.md | 64 | defined here | Section heading defining the core debugging principles in the shared agent template. |

## Consumes
Application defect context, codebase architecture, and debugging phase state.

## Produces
Execution discipline guiding agent behavior during bug diagnosis and repair.

## When applied
Throughout all phases of debugging to maintain methodical progress and prevent scope creep.

## Sub-concepts
none

## Part of
debug

## Implementation status
clean

## Design notes
A core set of operational heuristics in rjm's debug agent: be systematic, document everything, think incrementally, consider context, stay focused, and test thoroughly. These guidelines prevent agents from making sweeping changes, skipping verification, or drifting into unrelated refactoring.
