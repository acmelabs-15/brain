---
package: rjm
name: Business Case
slug: business-case
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Business Case

## Definition — verbatim
> "| **Business Case** | High | MBA-oriented, cost-driven decisions | SWOT analysis, cost/benefit, ROI |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 18 | defines | Cataloged as a high-complexity ADR template format featuring SWOT analysis, cost/benefit, and ROI for cost-driven decisions. |

## Consumes
Problem statement, organizational investment requirements, cost projections, and strategic business objectives.

## Produces
Comprehensive architectural business case document incorporating SWOT analysis, cost-benefit trade-offs, and return on investment (ROI) calculations.

## When applied
When an architectural decision requires formal financial justification, investment board sign-off, or commercial cost-driver analysis.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A high-complexity architectural decision record template cataloged in rjm for financially motivated technical decisions. It emphasizes SWOT analysis, cost-benefit assessments, and return on investment metrics to evaluate architectural options from an organizational investment perspective rather than purely technical criteria.
