---
package: rjm
name: Base Rate Neglect
slug: base-rate-neglect
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Base Rate Neglect

## Definition — verbatim
> "- Base Rate Neglect: ignoring overall probability when evaluating specific cases" — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 68 | used here | Listed under Related Mental Models as ignoring overall probability when evaluating specific cases. |

## Consumes
Specific project success claims, anecdotal case studies, and optimism-biased timeline estimates.

## Produces
Baseline statistical checks comparing specific claims against historical industry or organization base rates.

## When applied
Consulted during decomposition and verification of architectural or project timelines.

## Sub-concepts
none

## Part of
survivorship-bias

## Implementation status
clean

## Design notes
Base Rate Neglect identifies the cognitive tendency to evaluate an initiative based solely on its unique features while ignoring background distribution rates (e.g., project rewrite failure rates). In decision-critic, it mandates anchoring probability assessments to general empirical baselines.
