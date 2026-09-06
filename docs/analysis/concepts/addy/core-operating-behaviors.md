---
package: addy
name: Core Operating Behaviors
slug: core-operating-behaviors
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Core Operating Behaviors

## Definition — verbatim
> "These behaviors apply at all times, across all skills. They are non-negotiable." — skills/using-agent-skills/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 45 | defined here | Defines the six non-negotiable execution behaviors governing agent operation across all skills and phases. |

## Consumes
Agent instructions, user requests, execution context, ambiguities.

## Produces
Disciplined agent behavior adhering to explicit assumptions, confusion management, pushback, simplicity, scope control, and verification.

## When applied
Continuously across all sessions, tasks, and skill executions.

## Sub-concepts
surface-assumptions, manage-confusion-actively, push-back-when-warranted, enforce-simplicity, maintain-scope-discipline, verify-don-t-assume

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A set of six non-negotiable operational tenets (Surface Assumptions, Manage Confusion Actively, Push Back When Warranted, Enforce Simplicity, Maintain Scope Discipline, Verify Don't Assume) designed to counteract default LLM failure modes like sycophancy, silent guessing, and scope creep.
