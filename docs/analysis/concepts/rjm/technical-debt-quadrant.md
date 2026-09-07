---
package: rjm
name: Technical Debt Quadrant
slug: technical-debt-quadrant
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Technical Debt Quadrant

## Definition — verbatim
> "- **Technical Debt Quadrant**: Categorize when to invest vs ship" — .claude/skills/analyze/references/quality-boy-scout-rule.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 63 | defined here | Referenced under Related Concepts as a framework to categorize when to invest in cleanup versus ship. |

## Consumes
Debt assessment findings, engineering timeline pressures, system quality metrics.

## Produces
Categorized technical debt classifications (deliberate/inadvertent, reckless/prudent) to guide refactoring investments.

## When applied
Applied during analysis and planning when prioritizing code remediation against delivery velocity.

## Sub-concepts
none

## Part of
quality-boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Technical Debt Quadrant provides a taxonomy for evaluating whether accumulated technical debt is deliberate or inadvertent, helping rjm agents and developers make disciplined trade-offs between delivery speed and long-term code health.
