---
package: rjm
name: Stopping Conditions
slug: stopping-conditions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Stopping Conditions

## Definition — verbatim
> "Self-Refine requires explicit stopping conditions." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 178 | defined here | Section cataloging stopping condition strategies (fixed iterations, feedback-based, score-based, diminishing returns). |

## Consumes
Iteration count, model termination signal, quality scores, or measured improvement delta.

## Produces
A termination decision ending the refinement loop.

## When applied
Evaluated at the conclusion of each refinement cycle to decide whether to continue or finalize output.

## Sub-concepts
none

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
A governance pattern for iterative refinement loops in rjm multi-turn prompt engineering. Because models rarely self-terminate reliably, explicit stopping conditions (such as fixed iteration caps of 2-4 cycles or quantitative quality thresholds) are mandated to prevent infinite loops and runaway token costs.
