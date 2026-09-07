---
package: rjm
name: "REALISTIC MODE"
slug: realistic-mode
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# REALISTIC MODE

## Definition — verbatim
> "REALISTIC MODE (accounts for hidden build costs):" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 255 | defined here | Usage instructions defining realistic cost estimation modeling hidden engineering overhead and code churn drag. |

## Consumes
Fully-loaded engineer salary, annual maintenance hours, yearly maintenance growth rate (e.g. 15%), and annual code churn rate (e.g. 50%).

## Produces
Dynamic multi-year cost projections that reflect system aging, technical debt accumulation, and ongoing maintenance expansion.

## When applied
Required for Standard and Deep tier evaluations ($50K+ budget) where custom development incurs multi-year organizational overhead.

## Sub-concepts
none

## Part of
total-cost-of-ownership

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
The primary realistic financial modeling pattern in rjm's buy-vs-build toolkit that explicitly accounts for compounding system complexity, maintenance growth, and code churn drag, preventing organizations from falling into the trap of assuming static software maintenance costs.
