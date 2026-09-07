---
package: rjm
name: Cost Analysis
slug: cost-analysis
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cost Analysis

## Definition — verbatim
> "### Step 9: Cost Analysis (For Significant Decisions)" — .claude/skills/programming-advisor/SKILL.md:210

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 210 | defined here | Evaluates financial tradeoffs for features with meaningful cost implications, covering tactical estimates, hidden costs, and delegation criteria. |

## Consumes
Pricing data references, token burn estimates, recurring SaaS fees, and scope characteristics.

## Produces
Tactical cost note comparison table, hidden cost warnings, and escalation to strategic TCO tools when appropriate.

## When applied
Applied during Step 9 of programming-advisor when evaluating features with significant financial or operational implications (SaaS fees > $10/mo, token burn > 50K, auth, payments).

## Sub-concepts
multi-year-tco, tactical-cost-note, hidden-costs, red-flags

## Part of
programming-advisor

## Implementation status
clean

## Design notes
Cost analysis in programming-advisor injects economic realism into architecture and dependency decisions. It balances upfront vibe coding token burn against ongoing SaaS recurring fees, maintenance overhead, and hidden compliance or audit liabilities, ensuring engineering choices are financially rational.
