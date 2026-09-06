---
package: addy
name: checkpoints
slug: checkpoints
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

# checkpoints

## Definition — verbatim
> "Add checkpoints between phases" — .gemini/commands/planning.toml:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 12 | defines | Step 5 directive to insert validation checkpoints between phases |
| commands/planning.toml | 12 | applies | Step 5 directive to insert validation checkpoints between phases |

## Consumes
Groups of related implementation tasks within a phase.

## Produces
Gated milestone criteria in `tasks/todo.md` and `tasks/plan.md` halting execution until verified.

## When applied
Step 5 of planning when structuring tasks into execution phases.

## Sub-concepts
human-review

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`checkpoints` act as intermediate quality gates embedded between clusters of execution tasks. Instead of allowing an agent to barrel through an entire plan unchecked, checkpoints pause work at logical phase boundaries to confirm that all tests pass, the build compiles cleanly, and key user flows work before starting subsequent tasks.
