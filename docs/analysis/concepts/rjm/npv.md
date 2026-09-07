---
package: rjm
name: NPV
slug: npv
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# NPV

## Definition — verbatim
> "NPV accounts for: money today is worth more than money tomorrow." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 121 | used here | XML script output specification declaring Net Present Value calculation with confidence intervals. |
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 86 | defined here | Function docstring explaining how discounted cash flows convert future costs into today's dollars. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 204 | used here | Script documentation header summarizing NPV calculation across build, buy, and partner options. |

## Consumes
Upfront initial costs, ongoing yearly operational expenses, discount rate percentage, and time horizon.

## Produces
Discounted total present value costs enabling apples-to-apples economic comparisons across multi-year options.

## When applied
Calculated during Phase 2 (Analyze) to quantify total cost of ownership across build, buy, and partner alternatives.

## Sub-concepts
none

## Part of
calculate_tco.py

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path, script-bug

## Design notes
Net Present Value (NPV) provides the financial foundation for rjm's total cost of ownership modeling. By discounting future recurring maintenance, licensing, and integration expenses to present value, it ensures that long-term recurring SaaS subscriptions are fairly compared against upfront in-house software development investments.
