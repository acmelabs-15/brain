---
package: rjm
name: Eisenhower Matrix
slug: eisenhower-matrix
kind: technique
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

# Eisenhower Matrix

## Definition — verbatim
(used, not defined)

> "- **Priority frameworks**: Use Eisenhower Matrix (Urgent/Important) or P0/P1/P2 consistently" — .claude/agents/high-level-advisor.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 41 | used here | Prioritization framework applied by the advisor to separate tasks by urgency and importance. |
| templates/agents/high-level-advisor.shared.md | 44 | used here | Prioritization framework applied by the advisor to separate tasks by urgency and importance. |

## Consumes
Task backlogs, feature proposals, operational issues, maintenance burdens.

## Produces
Quadrant classification separating tasks by urgency and importance to direct focus.

## When applied
Applied during strategic backlog triage and priority calibration by the high-level advisor.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
The Eisenhower Matrix provides a two-axis prioritization lens (Urgent vs Important). In rjm's strategic advisory workflows, it ensures engineering teams distinguish between noisy fires and high-leverage architectural investments, preventing urgent trivia from crowding out vital improvements.
