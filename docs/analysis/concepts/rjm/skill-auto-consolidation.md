---
package: rjm
name: skill auto-consolidation
slug: skill-auto-consolidation
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill auto-consolidation

## Definition — verbatim
> "Automatic (minUses=3, minSuccessRate=70%)" — .agents/analysis/claude-flow-architecture-analysis.md:93

## Also called — verbatim
> "7. **Skill Auto-Consolidation**: Automate pattern learning from retrospectives" — .agents/analysis/claude-flow-architecture-analysis.md:136

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 18 | defined here | Researched as an automated mechanism promoting frequently used, successful patterns into reusable skills. |

## Consumes
Repeated workflow patterns, execution frequency counts, and success rate metrics.

## Produces
Consolidated, reusable skill definitions automatically added to the skill library.

## When applied
Triggered when an observed execution pattern achieves the required threshold criteria (minimum 3 uses, 70% success rate).

## Sub-concepts
none

## Part of
neural-learning

## Implementation status
not-implemented

## Design notes
An automated skill synthesis technique that monitors workflow patterns and automatically promotes repeatedly successful sequences into persistent skills once usage and success thresholds are met.
