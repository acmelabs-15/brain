---
package: rjm
name: Tactical cost note
slug: tactical-cost-note
kind: artifact
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

# Tactical cost note

## Definition — verbatim
> "#### 9.3 Tactical cost note" — .claude/skills/programming-advisor/SKILL.md:228

## Also called — verbatim
`## 💰 Cost Note` — .claude/skills/programming-advisor/SKILL.md:233

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 228 | defined here | Defines a compact tabular format comparing SaaS monthly fees against DIY token burn and setup time for tactical decisions. |

## Consumes
Setup duration estimates, monthly subscription fees, and DIY token burn calculations.

## Produces
A concise cost table comparing Setup, Monthly, and Notes across candidate options.

## When applied
Applied when comparing simple library versus glue code alternatives where full multi-year financial modeling is unnecessary.

## Sub-concepts
none

## Part of
cost-analysis, programming-advisor

## Implementation status
clean

## Design notes
The tactical cost note provides a lightweight economic summary table for everyday library-vs-code decisions. It avoids complex financial machinery while giving developers and agents immediate visibility into monthly SaaS subscription costs versus initial DIY development token expenditure.
