---
package: rjm
name: Problem Assessment
slug: problem-assessment
kind: phase
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

# Problem Assessment

## Definition — verbatim
> "## Phase 1: Problem Assessment" — .claude/agents/debug.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 32 | defined here | Section heading defining the initial context gathering and bug reproduction phase. |
| templates/agents/debug.shared.md | 40 | defined here | Section heading defining the first phase of the debugging lifecycle in the shared agent template. |

## Consumes
Error messages, stack traces, failure reports, and recent codebase commits.

## Produces
Context summary, identified expected vs actual behavior, and documented reproduction steps with error logs.

## When applied
At the start of every debugging workflow prior to investigating code or forming hypotheses.

## Sub-concepts
none

## Part of
debug

## Implementation status
clean

## Design notes
The initial phase of the four-phase debugging lifecycle in rjm. It establishes ground truth by requiring the agent to gather context and reproduce the bug before forming hypotheses or touching code, eliminating false assumptions and phantom fixes.
