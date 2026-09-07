---
package: rjm
name: Risk Rating with STRIDE
slug: risk-rating-with-stride
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Rating with STRIDE

## Definition — verbatim
> "## Risk Rating with STRIDE" — .claude/skills/threat-modeling/references/stride-methodology.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 211 | defined here | Reference table correlating STRIDE categories with typical impact levels and likelihood factors. |

## Consumes
Identified STRIDE threats, environmental exposure data, authentication and encryption states.

## Produces
Impact and likelihood ratings for threat prioritization.

## When applied
Applied after threat enumeration to assign initial severity rankings to identified threats.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Risk Rating with STRIDE establishes baseline heuristics mapping threat categories to typical business impact levels and common likelihood drivers, accelerating triage before detailed qualitative scoring.
