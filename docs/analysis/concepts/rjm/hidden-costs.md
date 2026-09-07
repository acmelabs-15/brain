---
package: rjm
name: Hidden Costs
slug: hidden-costs
kind: checklist
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

# Hidden Costs

## Definition — verbatim
> "#### 9.4 Hidden Costs to Surface" — .claude/skills/programming-advisor/SKILL.md:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 244 | defined here | Checklist of unbudgeted liabilities (security audits, compliance, on-call support, opportunity cost, technical debt) to surface in build-vs-buy decisions. |

## Consumes
Candidate solution architectures and operational delivery models.

## Produces
Enumerated list of non-obvious lifecycle liabilities (security audits, compliance audits, on-call support burden, opportunity cost, technical debt).

## When applied
Applied during Step 9.4 of programming-advisor when conducting cost analysis for significant architectural choices.

## Sub-concepts
none

## Part of
cost-analysis, programming-advisor

## Implementation status
clean

## Design notes
A checklist of latent operational expenses surfaced during build-vs-buy evaluations. By forcing explicit consideration of ongoing commitments—including SOC2/GDPR/PCI compliance, $5K-$50K security audits, on-call support burdens, and perpetual technical debt—it prevents teams from underestimating the true lifetime cost of custom software.
