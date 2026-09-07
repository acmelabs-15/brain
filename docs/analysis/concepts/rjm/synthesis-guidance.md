---
package: rjm
name: Synthesis Guidance
slug: synthesis-guidance
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Synthesis Guidance

## Definition — verbatim
> "## Synthesis Guidance" — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 47 | defined here | Provides decision verdict rules mapping evaluated scope conditions to STAND, REVISE, or ESCALATE. |

## Consumes
Verification gate ratings and boundary evaluations across all decomposed items.

## Produces
Synthesis verdict mapping recommendations (STAND, REVISE, or ESCALATE).

## When applied
Applied during Step 7 (Synthesis) to translate individual item assessments into a final verdict.

## Sub-concepts
none

## Part of
decision-critique-application

## Implementation status
defects: missing-path

## Design notes
Synthesis Guidance is the procedural rule set that synthesizes multiple decomposed ratings into a final decision verdict, ensuring consistent and objective transitions from evidence to action.
