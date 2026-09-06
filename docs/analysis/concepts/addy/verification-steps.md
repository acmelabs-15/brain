---
package: addy
name: verification steps
slug: verification-steps
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

# verification steps

## Definition — verbatim
> "Write tasks with acceptance criteria and verification steps" — .gemini/commands/planning.toml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 11 | defines | Step 4 requirement to write tasks with explicit verification steps |
| commands/planning.toml | 11 | applies | Step 4 requirement to write tasks with explicit verification steps |

## Consumes
Acceptance criteria and functional requirements defined for an individual task.

## Produces
Explicit, runnable test commands or checks attached to each task item.

## When applied
Step 4 of task authoring during the planning process.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`verification steps` are explicit instructions defined in advance for proving that a task meets its acceptance criteria. By requiring exact test commands, curl requests, or CLI invocations directly in the task definition, the plan eliminates subjective completion criteria and ensures agents run concrete validation before marking tasks done.
