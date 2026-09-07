---
package: rjm
name: Error Budget Table
slug: error-budget-table
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Error Budget Table

## Definition — verbatim
(used, not defined)

> "## Error Budget Table" — .claude/skills/slo-designer/SKILL.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 217 | defined here | Reference table translating SLO target percentages into allowed monthly and weekly downtime durations. |

## Consumes
SLO target percentages from 99% to 99.999%.

## Produces
Exact error budget percentages and allowable downtime durations across monthly and weekly periods.

## When applied
Referenced during error budget calculation to communicate allowed downtime in human-readable terms.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
A reference lookup table translating abstract SLO percentages (the "nines") into concrete downtime allowances over monthly and weekly windows (e.g. 99.9% = 43m 50s/month). It provides stakeholders with an intuitive understanding of the physical downtime implications of a given target.
