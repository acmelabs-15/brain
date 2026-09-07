---
package: rjm
name: collision loop
slug: collision-loop
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# collision loop

## Definition — verbatim
> "Do not overwrite an existing file. Use this collision loop before" — .claude/commands/checkpoint.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 75 | defined here | Defined in step 4 as the iterative file existence check ensuring unique checkpoint paths. |

## Consumes
Base checkpoint filename candidate and existing files in `.agents/checkpoints/`.

## Produces
A verified collision-free file path by appending numerical suffixes (`-2`, `-3`, ...) until no file collision exists.

## When applied
When resolving the target destination file path during `/checkpoint` execution.

## Sub-concepts
none

## Part of
checkpoint-command

## Implementation status
clean

## Design notes
The collision loop guarantees filesystem idempotence and data preservation during checkpointing. By verifying that candidate checkpoint paths do not exist via glob checks and sequentially incrementing numerical suffixes upon collision, it ensures no prior snapshot is ever overwritten or lost.
