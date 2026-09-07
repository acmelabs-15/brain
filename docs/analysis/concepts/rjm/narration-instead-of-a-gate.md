---
package: rjm
name: Narration instead of a gate
slug: narration-instead-of-a-gate
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Narration instead of a gate

## Definition — verbatim
> "- **Narration instead of a gate.** Streaming every micro-decision as chat" — .claude/skills/autoplan/SKILL.md:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 207 | defined here | Anti-pattern advising against streaming micro-decisions as chat rather than batching them into the Phase 4 summary gate. |

## Consumes
Step-by-step intermediate decisions during task execution.

## Produces
Conversational channel clutter and fragmented progress visibility.

## When applied
Addressed during execution reporting; micro-decisions must be batched into the final gate.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Narration instead of a gate is an interaction anti-pattern where an agent continuously streams trivial micro-decisions and intermediate thoughts into the user conversation. This pollutes the context and disrupts user focus. Autoplan replaces narration streams with quiet execution and a consolidated Phase 4 summary block.
