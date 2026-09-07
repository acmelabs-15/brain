---
package: rjm
name: Hook Architecture
slug: hook-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hook Architecture

## Definition — verbatim
> "## Hook Architecture" — .claude/skills/analyze/references/context-budget-management.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 26 | defined here | Details the lifecycle hook pattern for session initialization, command capture, and compaction. |
| .claude/skills/analyze/SKILL.md | 72 | used here | References hook architecture for session continuity in the analyze skill references. |

## Consumes
Agent harness lifecycle events (session start, pre-command, post-command, compaction).

## Produces
Automated persistence, telemetry gathering, and state reinjection independent of prompt logic.

## When applied
Executed automatically at key transitions throughout the agent runtime lifecycle.

## Sub-concepts
none

## Part of
context-budget-management

## Implementation status
defects: missing-path, doc-drift

## Design notes
Hook Architecture introduces deterministic lifecycle hooks into the agent runtime (e.g. SessionStart, PreCompact, PostCommand). By delegating context indexing, telemetry, and recovery to deterministic system hooks rather than relying on LLM prompting, rjm ensures robust session continuity across tool invocations and compactions.
