---
package: rjm
name: Complexity-Weighted Voting
slug: complexity-weighted-voting
kind: technique
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

# Complexity-Weighted Voting

## Definition — verbatim
> "### Complexity-Weighted Voting" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:511

## Also called — verbatim
`complexity-based consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:513

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 21 | defined here | Highlighted in the technique selection guide as a selection strategy filtering for the top K complex reasoning chains before voting. |

## Consumes
A candidate set of sampled reasoning chains with quantifiable step counts or reasoning depths.

## Produces
A consensus answer determined by majority voting restricted to the top K most complex reasoning chains.

## When applied
Applied when reasoning candidates exhibit wide variation in depth and simple chains risk representing superficial shortcuts or lucky guesses.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
Complexity-Weighted Voting enhances self-consistency by filtering out low-effort or superficial reasoning chains. Because simple reasoning chains often represent hasty shortcuts or lucky guesses, weighting votes by step count and restricting the consensus vote to the top-K most complex chains yields higher accuracy without requiring additional model calls.
