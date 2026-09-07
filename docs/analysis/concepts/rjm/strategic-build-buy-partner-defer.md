---
package: rjm
name: Strategic build/buy/partner/defer
slug: strategic-build-buy-partner-defer
kind: gate
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

# Strategic build/buy/partner/defer

## Definition — verbatim
> "### Step 5: Strategic build/buy/partner/defer (delegate)" — .claude/skills/programming-advisor/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 98 | defined here | Decision gate delegating strategic capability investments exceeding tactical scope to buy-vs-build-framework. |

## Consumes
Identified scope, budget horizon, competitive differentiation factors, and stakeholder requirements.

## Produces
Delegation handoff to `buy-vs-build-framework` or permission to proceed with tactical recommendations.

## When applied
Applied at Step 5 when budget impact exceeds ~$50K, when evaluation spans a 2+ year horizon, when capability is a core differentiator, or when partner/defer options require multi-stakeholder sign-off.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
A scoping and governance gate in programming-advisor that separates lightweight tactical library-or-glue choices from strategic capital investments. When a proposal entails substantial financial commitments, multi-year maintenance obligations, or core product differentiation, this gate halts tactical guidance and mandates formal analysis through buy-vs-build-framework.
