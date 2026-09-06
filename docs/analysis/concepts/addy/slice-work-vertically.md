---
package: addy
name: Slice work vertically
slug: slice-work-vertically
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Slice work vertically

## Definition — verbatim
> "Slice work vertically (one complete path per task, not horizontal layers)" — .gemini/commands/planning.toml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 10 | defines | Step 3 instruction to slice work vertically into complete paths per task |
| commands/planning.toml | 10 | defines | Step 3 instruction to slice work vertically into complete paths per task |

## Consumes
Identified component dependencies from Step 2.

## Produces
Task breakdowns structured around end-to-end user flows or data paths rather than isolated architectural layers.

## When applied
Step 3 of task breakdown in the planning process.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`Slice work vertically` is a decomposition technique that mandates organizing implementation tasks around complete, functional end-to-end paths rather than horizontal architectural layers (e.g. implementing all database models first, then all routes, then all UI). Vertical slicing ensures every task yields verifiable functionality early, shortening feedback loops and uncovering integration defects immediately.
