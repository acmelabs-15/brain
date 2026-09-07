---
package: rjm
name: The Mixed-Goal Turn
slug: the-mixed-goal-turn
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Mixed-Goal Turn

## Definition — verbatim
> "Combining distinct cognitive operations in a single turn." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:599

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 597 | defined here | Cataloged as a critical anti-pattern where distinct cognitive goals are conflated in a single turn. |

## Consumes
Conflated prompt instructions demanding simultaneous generation, critique, and refinement.

## Produces
Superficial critique and rushed, poorly analyzed revisions.

## When applied
Identified when evaluating prompt designs to ensure operations are split across separate turns.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A multi-turn prompt engineering anti-pattern in rjm where distinct cognitive operations (e.g., generating, critiquing, and rewriting) are collapsed into one prompt turn. This degrades model output because the model rushes through critique to get to generation, or modifies content without deep diagnostic analysis.
