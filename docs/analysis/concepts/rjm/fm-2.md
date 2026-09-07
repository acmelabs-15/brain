---
package: rjm
name: FM-2
slug: fm-2
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-2

## Definition — verbatim
> "Continuation reset after compaction" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 84 | used here | Mapped as failure mode FM-2 representing continuation reset after context window compaction. |

## Consumes
Context compaction events, extended multi-turn agent conversations, session continuation prompts.

## Produces
Loss of active constraints, unaligned defaults, and protocol non-compliance incidents.

## When applied
When triaging state loss or constraint violations following context window summarization or compaction.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-2 identifies the failure mode where context window compaction or summarization causes an agent to lose active constraints, session state, or historical decisions, effectively resetting its behavior to an unaligned default. In rjm, recognizing FM-2 justifies explicit memory architectures, persistent session files, and pre-compact hooks to safeguard continuity across extended development sessions.
