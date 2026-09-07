---
package: rjm
name: Stat-of-a-stat chain
slug: stat-of-a-stat-chain
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

# Stat-of-a-stat chain

## Definition — verbatim
> "- **Stat-of-a-stat chain**: source A cites source B citing source C. The deeper the chain, the higher the drift risk. Follow it to the origin." — .claude/skills/ai-agents-external-claims/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 41 | defines | Defines the trigger condition for nested citation chains with compounding risk of semantic drift. |

## Consumes
Multi-tier citations where an author references a secondary summary rather than raw data.

## Produces
Obligation to trace the chain backwards to the originating document or measurement.

## When applied
Activated when reviewing claims that cite intermediate articles or secondary reports.

## Sub-concepts
citation-chain-drift, primary-source

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A risk pattern occurring when sources cite intermediate summaries that in turn cite earlier references. Because each hop introduces paraphrasing, loss of context, and rounding errors, contributors must traverse the chain to its origin before treating the statistic as established fact.
