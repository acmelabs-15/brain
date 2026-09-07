---
package: rjm
name: Define the ask
slug: define-the-ask
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Define the ask

## Definition — verbatim
> "1. **Define the ask.** One sentence: who does what by when. Vague asks cannot be made persuasive." — .claude/skills/business-strategy/references/influence.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/influence.md | 22 | defined here | First step of the influence sequence mandating that every ask specify who does what by when in a single sentence. |

## Consumes
A broad commercial goal, strategic proposal, or conversational objective.

## Produces
A clear, single-sentence operational ask specifying the designated actor, exact behavior, and deadline.

## When applied
"if you can name the exact behavior you want and the person who must do it, run this. If you are still discovering what you want, stop and define the ask first." — .claude/skills/business-strategy/references/influence.md:5

## Sub-concepts
none

## Part of
influence

## Implementation status
clean

## Design notes
Define the ask enforces absolute clarity on the requested behavior before any persuasion tactics are designed. In rjm, it establishes that ambiguity in the request cannot be salvaged by psychological triggers, serving as the required entry gate for influence.
