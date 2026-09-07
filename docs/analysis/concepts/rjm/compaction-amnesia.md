---
package: rjm
name: Compaction amnesia
slug: compaction-amnesia
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Compaction amnesia

## Definition — verbatim
> "| Compaction amnesia | Index edits/tasks/errors in FTS5, reinject on compaction | Session continuity |" — .claude/skills/analyze/references/context-budget-management.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 16 | defined here | Defines compaction amnesia and its FTS5 reinjection mechanism for session continuity. |

## Consumes
Context compaction triggers and truncated session transcripts.

## Produces
Targeted reinjection of recent code edits, active task items, and error signatures.

## When applied
Triggered automatically upon context summarization or session truncation events.

## Sub-concepts
none

## Part of
three-problems

## Implementation status
defects: missing-path

## Design notes
Compaction Amnesia is the loss of essential operational context—such as recent file edits, specific task IDs, and exact error messages—when an agent's context window undergoes automated summarization. rjm mitigates this by maintaining an external FTS5 index of critical state that is reinjected immediately following compaction, preserving session continuity.
