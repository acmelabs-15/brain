---
package: addy
name: human review
slug: human-review
kind: gate
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

# human review

## Definition — verbatim
> "Present the plan for human review" — .gemini/commands/planning.toml:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 13 | defines | Step 6 requirement to present plan for human review before execution |
| commands/planning.toml | 13 | applies | Step 6 requirement to present plan for human review before execution |

## Consumes
Completed plan document (`tasks/plan.md`) and task breakdown (`tasks/todo.md`).

## Produces
Human sign-off or requested revisions to task scoping and architecture.

## When applied
Step 6 of the planning process, before exiting plan mode and commencing coding.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`human review` is the concluding human-in-the-loop gate of the Plan phase. It guarantees that autonomous agents cannot unilaterally begin large-scale code implementation without presenting the broken-down tasks, architectural tradeoffs, and sizing estimates to a human engineer for explicit approval.
