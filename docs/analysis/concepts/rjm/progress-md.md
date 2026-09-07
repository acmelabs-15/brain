---
package: rjm
name: progress.md
slug: progress-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# progress.md

## Definition — verbatim
> "progress.md    -> session log and test results" — .claude/skills/analyze/references/agent-architecture-patterns.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 29 | defined here | Defines progress.md as the chronological session log and test results tracker. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 20 | defined here | Specifies progress.md for recording session activity, tool invocations, and test verification. |

## Consumes
Completed step descriptions, command outputs, test suite outcomes, and timestamps.

## Produces
Chronological session journal documenting execution history and verification state.

## When applied
Updated after every completed task, tool invocation, or test run during an agent session.

## Sub-concepts
none

## Part of
3-file-planning-pattern

## Implementation status
defects: missing-path

## Design notes
progress.md maintains a chronological log of actions taken, tool execution results, and test suite outcomes across an agent session. It serves as an operational audit log and liveness heartbeat, ensuring that subsequent turns or successor agents can immediately assess what has been completed and verified without repeating work.
