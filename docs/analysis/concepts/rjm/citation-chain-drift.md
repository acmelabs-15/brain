---
package: rjm
name: citation-chain drift
slug: citation-chain-drift
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# citation-chain drift

## Definition — verbatim
(used, not defined)

> "Covers stake-holding sources, round-number tells, citation-chain drift, and the walk-the-gate-or-file-conservative discipline." — .claude/skills/ai-agents-external-claims/SKILL.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 5 | defines | Identified in the skill description frontmatter as an error pattern where multi-hop citations degrade in accuracy. |

## Consumes
Claims that cite intermediate summaries, blog posts, or secondary interpretations.

## Produces
Identification of distorted or paraphrased assertions across citation hops.

## When applied
When an external citation references a source that itself cites another source.

## Sub-concepts
stat-of-a-stat-chain

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
The progressive distortion, over-generalization, or semantic drift that occurs when a statistic or claim is passed along a chain of secondary citations (source A citing source B citing source C) rather than verified directly at the original primary source.
