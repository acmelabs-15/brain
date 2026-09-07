---
package: rjm
name: Pre-Mortems
slug: pre-mortems
kind: technique
package_phase: rjm:analyze
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

# Pre-Mortems

## Definition — verbatim
(used, not defined)

> "| Decision-Making | Second Order Thinking | Tech Debt Quadrant | Cynefin, Rumsfeld Matrix | OODA Loop, Inversion, Pre-Mortems | Wardley Mapping |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Cited in the Problem Domain Cross-Reference matrix as a Tier 4 (Staff) decision-making technique alongside OODA Loop and Inversion. |

## Consumes
Proposed plans, architecture changes, or decision candidates prior to execution.

## Produces
Anticipated failure modes, preventive risk mitigations, and pre-committed contingency measures.

## When applied
Applied at Tier 4 (Staff) engineering complexity to evaluate high-impact decisions by assuming future failure and identifying causal pathways in advance.

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: missing-path

## Design notes
In rjm's engineering complexity taxonomy, Pre-Mortems serve as an advanced decision-making technique for Tier 4 (Staff) scope, prompting engineers and agents to project future project failure retrospectively before launching initiatives, uncovering non-obvious risks and single points of failure.
