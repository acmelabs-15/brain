---
package: addy
name: Sequential pipeline as user-driven slash commands
slug: sequential-pipeline-as-user-driven-slash-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Sequential pipeline as user-driven slash commands

## Definition — verbatim
> "The user runs slash commands in a defined order, carrying context (or commit history) between them. There is no orchestrator agent — the user IS the orchestrator." — references/orchestration-patterns.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 78 | defined here | Pattern catalog entry defining the human-orchestrated lifecycle pipeline where slash commands execute sequentially |

## Consumes
Phase artifacts, human developer judgment and decisions, sequential lifecycle slash commands (/spec, /plan, /build, /test, /review, /ship)

## Produces
Systematic phase-by-phase progression through the software development lifecycle with explicit human quality checkpoints

## When applied
When a workflow has sequential dependencies across phases and human judgment between steps adds value

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
This pattern establishes that in multi-phase software development (/spec -> /plan -> /build -> /test -> /review -> /ship), the human developer serves as the primary orchestrator. Rather than delegating the entire pipeline to an autonomous meta-agent that paraphrases context and skips human checkpoints, running sequential slash commands keeps token costs low, preserves precision across phase boundaries, and ensures vital human oversight.
