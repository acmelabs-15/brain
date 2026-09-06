---
package: addy
name: Conversation History
slug: conversation-history
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Conversation History

## Definition — verbatim
> "Long conversations accumulate stale context. Manage this:" — skills/context-engineering/SKILL.md:115

## Also called — verbatim
`Conversation Management` — skills/context-engineering/SKILL.md:113

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 34 | defined here | Level 5 of the context hierarchy, accumulating and compacting across turns |

## Consumes
Multi-turn interaction logs, user prompt sequences, and agent tool execution history.

## Produces
Active session state that requires periodic summarization, compaction, or reset.

## When applied
Managed continuously throughout an active conversation and refreshed when changing features.

## Sub-concepts
none

## Part of
the-context-hierarchy, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The fifth and most transient tier of the Context Hierarchy, representing accumulated conversation history. Because extended dialogue logs introduce stale context and dilute attention budgets, context engineering prescribes active management strategies: starting fresh sessions, writing progress summaries, and deliberate context compaction.
