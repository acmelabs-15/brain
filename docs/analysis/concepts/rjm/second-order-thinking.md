---
package: rjm
name: Second Order Thinking
slug: second-order-thinking
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Second Order Thinking

## Definition — verbatim
(used, not defined)

> "| Decision-Making | Second Order Thinking | Tech Debt Quadrant | Cynefin, Rumsfeld Matrix | OODA Loop, Inversion, Pre-Mortems | Wardley Mapping |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Prescribed as the foundational decision-making mental model for Tier 1 engineering. |

## Consumes
Immediate decisions, proposed code modifications, architectural changes.

## Produces
Anticipated downstream consequences, side effects, and long-term implications.

## When applied
Evaluating the subsequent impacts of architectural choices beyond immediate results.

## Sub-concepts
none

## Part of
problem-domain-cross-reference

## Implementation status
defects: missing-path

## Design notes
A mental model in rjm's decision-making taxonomy requiring engineers to ask "And then what?" when considering technical choices, evaluating not just direct effects but secondary and tertiary downstream consequences.
