---
package: rjm
name: epics
slug: epics
kind: artifact
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# epics

## Definition — verbatim
> "Creates epics, prioritizes by business value using RICE and KANO frameworks, guards against strategic drift." — .claude/agents/roadmap.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 3 | used here | Defined as the primary strategic planning artifact produced by the roadmap agent. |

## Consumes
High-level product vision, strategic goals, user research, and technical feasibility reports.

## Produces
Large, outcome-oriented work specifications decomposed into prioritized milestones and tasks.

## When applied
Authored during the initial strategic planning phase before breaking work down into stories or tasks.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
Epics serve as the highest-level work unit in rjm's planning hierarchy. Authored with precise technical descriptions that avoid marketing fluff, epics define what to build and why, serving as the bridge between strategic intent and downstream task decomposition.
