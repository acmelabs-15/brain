---
package: matt
name: When to split
slug: when-to-split
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# When to split

## Definition — verbatim
> "Splitting one document into two spends one of the two loads, so split only when the cut earns it:" — skills/productivity/writing-for-agents/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 54 | defined here | Decision framework for partitioning agent documents either by sequence or by invocation trigger. |

## Consumes
Candidate document experiencing sprawl, sequencing pressure, or divergent trigger paths.

## Produces
Partitioning plan splitting instructions by sequence (hiding post-completion steps) or by invocation (independent triggers).

## When applied
When evaluating whether a bloated or multi-path document should be divided across multiple files.

## Sub-concepts
splitting-by-invocation

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Establishes the criteria for document decomposition. Because dividing a document spends either context load or cognitive load, splitting is justified only when separating sequential steps prevents premature completion or when independent invocation triggers warrant separate descriptions.
