---
package: rjm
name: Investigation
slug: investigation
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

# Investigation

## Definition — verbatim
> "## Phase 2: Investigation" — .claude/agents/debug.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 38 | defined here | Section heading defining the root cause analysis and hypothesis formation phase. |
| templates/agents/debug.shared.md | 46 | defined here | Section heading defining the second phase of the debugging lifecycle in the shared agent template. |

## Consumes
Confirmed reproduction steps, error logs, and codebase context from Problem Assessment.

## Produces
Code execution traces, identified failure mechanisms (e.g. null references, race conditions), prioritized hypotheses, and verification plans.

## When applied
After a defect is successfully reproduced and before attempting any code modifications.

## Sub-concepts
none

## Part of
debug

## Implementation status
clean

## Design notes
The second phase of the debugging lifecycle in rjm. It focuses on tracing execution paths, data flows, and control logic to identify root causes and form testable hypotheses, ensuring the underlying cause is understood rather than merely masking symptoms.
