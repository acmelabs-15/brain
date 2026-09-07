---
package: rjm
name: Invisible Disadvantage Check
slug: invisible-disadvantage-check
kind: gate
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: .claude/skills/negotiation/references/skills.md, sha256: ae5055eedea0db85458d74da810803dc4defc1a70e885ad31b738513c4965114}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Invisible Disadvantage Check

## Definition — verbatim
> "Before finalizing any recommendation, explicitly state:" — .claude/agents/negotiation.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 123 | defined here | Step 4 assessment gate quantifying money left on the table before recommendation finalization. |
| .claude/skills/negotiation/references/skills.md | 17 | defined here | Standard output schema for quantifying offer value, achievable value, and gap. |
| templates/agents/negotiation.shared.md | 134 | defined here | Shared template section checking for unperceived disadvantages in offers. |

## Consumes
Mapped offer parameters, counter-proposal draft, and risk assessments.

## Produces
An explicit declaration of offer status, quantified money left on the table, recommended action (counter/accept/walk), and risk rating.

## When applied
Mandatory check executed in Step 4 of the RADAR protocol before submitting recommendations.

## Sub-concepts
none

## Part of
radar

## Implementation status
clean

## Design notes
The Invisible Disadvantage Check is an assessment gate designed to counteract capability disparities in negotiation. Derived from Project Deal research showing that disadvantaged parties often fail to recognize when value is extracted from them, this check forces explicit articulation of uncaptured value and counter risks.
