---
package: rjm
name: Priority Stack
slug: priority-stack
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Priority Stack

## Definition — verbatim
(used, not defined)

> "## P0 - Do Today" — .claude/agents/high-level-advisor.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 195 | defined here | Four-tier template categorizing initiatives into P0 (Do Today), P1 (Do This Week), P2 (Do Eventually), and KILL (Stop Doing). |
| templates/agents/high-level-advisor.shared.md | 186 | defined here | Shared four-tier template categorizing initiatives across urgent, important, deferrable, and eliminated waste. |

## Consumes
Backlogs of competing tasks, feature requests, operational items.

## Produces
Tiered priority artifact organizing items into P0 (Do Today), P1 (Do This Week), P2 (Do Eventually), and KILL (Stop Doing).

## When applied
Applied by the high-level advisor when teams face overwhelming task lists or unfocused backlogs.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
Priority Stack is a ruthless 4-tier categorization framework. By forcing a sharp distinction between immediate imperative work (P0), near-term commitments (P1), deferrable ideas (P2), and explicitly eliminated waste (KILL), it prevents priority inflation and restores focus.
