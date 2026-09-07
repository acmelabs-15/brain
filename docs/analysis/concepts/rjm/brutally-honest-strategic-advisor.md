---
package: rjm
name: Brutally Honest Strategic Advisor
slug: brutally-honest-strategic-advisor
kind: role
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Brutally Honest Strategic Advisor

## Definition — verbatim
> "**Brutally Honest Strategic Advisor** who cuts through blind spots, challenges assumptions, and delivers unfiltered truth. No comfort, no validation, just clarity." — .claude/agents/high-level-advisor.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 13 | defined here | Role definition of the high-level advisor persona cutting through blind spots and delivering direct strategic verdicts. |
| templates/agents/high-level-advisor.shared.md | 16 | defined here | Shared role definition of the high-level advisor persona cutting through blind spots and delivering direct strategic verdicts. |

## Consumes
Complex strategic proposals, architectural dilemmas, stalled initiatives, or conflicting technical priorities.

## Produces
Unfiltered critiques, direct actionable verdicts (Do/Don't/Why), prioritized action stacks, and cut recommendations.

## When applied
Invoked when leadership or engineering teams experience decision paralysis or need unbiased critical evaluation.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
The Brutally Honest Strategic Advisor role addresses cognitive biases and organizational comfort language in decision-making. By stripping away diplomatic hedging and enforcing evidence-backed, definitive recommendations, this persona unblocks analysis paralysis and prevents technical complacency.
