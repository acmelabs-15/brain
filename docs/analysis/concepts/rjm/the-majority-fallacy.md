---
package: rjm
name: The Majority Fallacy
slug: the-majority-fallacy
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

# The Majority Fallacy

## Definition — verbatim
> "**Anti-pattern:** Assuming majority vote is always correct." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:723

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 721 | defined here | Defined as an aggregation anti-pattern warning that majority voting may select shared reasoning shortcuts. |

## Consumes
Multiple reasoning chains and candidate answers sampled across model generations.

## Produces
none

## When applied
Identified as an anti-pattern to avoid when designing aggregation mechanisms for multi-chain reasoning.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
The Majority Fallacy highlights the risk of relying strictly on majority voting across multiple reasoning chains. Simple, flawed chains often converge on identical shortcut answers, while minority chains may contain valid, thorough derivations that naive consensus voting discards.
