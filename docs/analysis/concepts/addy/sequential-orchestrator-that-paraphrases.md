---
package: addy
name: Sequential orchestrator that paraphrases
slug: sequential-orchestrator-that-paraphrases
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Sequential orchestrator that paraphrases

## Definition — verbatim
> "An agent that calls `/spec`, then `/plan`, then `/build`, etc. on the user's behalf." — references/orchestration-patterns.md:318

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 316 | defines | Cataloged as an anti-pattern where a top-level agent executes a sequential lifecycle pipeline on behalf of the user |

## Consumes
Multi-step lifecycle pipelines (/spec, /plan, /build, /test, /review, /ship)

## Produces
Guidance directing developers to keep the human user as the primary orchestrator across lifecycle phases

## When applied
When evaluating end-to-end automation pipelines or designing meta-agents to execute lifecycle stages

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
An anti-pattern in addy's workflow design where an automated orchestrator executes sequential lifecycle commands without human checkpoints. Automated paraphrasing between stages causes context drift, doubles token consumption, and strips human agency at critical judgment gates.
