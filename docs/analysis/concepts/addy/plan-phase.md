---
package: addy
name: "Plan phase"
slug: plan-phase
kind: phase
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Plan phase

## Definition — verbatim
(used, not defined)

> "Plan phase" — external/planning-and-task-breakdown.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/planning-and-task-breakdown.md | 5 | used here | Displayed as the phase badge in the planning skill header. |

## Consumes
Approved specifications, architecture constraints, and product requirements.

## Produces
Ordered task breakdown, dependency graphs, and test plans.

## When applied
Executed after the Define phase and before the Build phase.

## Sub-concepts
planning-and-task-breakdown, dependency-ordering

## Part of
none

## Implementation status
clean

## Design notes
The formal second phase in Addy's lifecycle. It translates high-level specifications into concrete, verifiable, and sequentially ordered tasks so agents can implement without getting lost in large problem spaces.
