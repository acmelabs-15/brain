---
package: rjm
path: .claude/skills/programming-advisor/references/pricing-data.md
type: reference
bytes: 5910
unit: inv-rjm-138
in_scope_via: .claude/skills/programming-advisor/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/pricing-data.md, sha256: 38003bd67a1ad7fdf4bcd848adc868a3538034a44c889ac7d2ee2190555d48b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/references/pricing-data.md

## Purpose — required, verbatim
> "Use this data to calculate total cost of ownership comparisons. Prices as of 2024." — .claude/skills/programming-advisor/references/pricing-data.md:3

## Design intent — required
Supplies standard pricing figures, token conversion metrics, and mathematical formulas for computing Year N Total Cost of Ownership (TCO) across 10 major cloud infrastructure and SaaS categories. It gives agents quantitative evidence to counter false DIY assumptions (e.g. "it's just simple auth/payments"), detailing hidden operational costs (security audits, compliance, on-call burdens, technical debt) and defining realistic break-even thresholds where building custom solutions makes economic sense.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/pricing-data.md — .claude/skills/programming-advisor/SKILL.md:230

## Concepts named — required, verbatim
- `Pricing Data Reference` — .claude/skills/programming-advisor/references/pricing-data.md:1 — defined here
- `Cost Calculation Formula` — .claude/skills/programming-advisor/references/pricing-data.md:5 — defined here
- `Year N Cost` — .claude/skills/programming-advisor/references/pricing-data.md:8 — defined here
- `Setup Cost (DIY)` — .claude/skills/programming-advisor/references/pricing-data.md:11 — defined here
- `Maintenance (DIY)` — .claude/skills/programming-advisor/references/pricing-data.md:12 — defined here
- `Maintenance (SaaS)` — .claude/skills/programming-advisor/references/pricing-data.md:13 — defined here
- `Token Cost Estimates` — .claude/skills/programming-advisor/references/pricing-data.md:16 — defined here
- `Authentication & Identity` — .claude/skills/programming-advisor/references/pricing-data.md:28 — defined here
- `Email Services` — .claude/skills/programming-advisor/references/pricing-data.md:43 — defined here
- `Payments & Billing` — .claude/skills/programming-advisor/references/pricing-data.md:57 — defined here
- `Database & Backend` — .claude/skills/programming-advisor/references/pricing-data.md:70 — defined here
- `File Storage & CDN` — .claude/skills/programming-advisor/references/pricing-data.md:84 — defined here
- `Search` — .claude/skills/programming-advisor/references/pricing-data.md:95 — defined here
- `Monitoring & Error Tracking` — .claude/skills/programming-advisor/references/pricing-data.md:108 — defined here
- `Analytics` — .claude/skills/programming-advisor/references/pricing-data.md:119 — defined here
- `AI & LLM Integration` — .claude/skills/programming-advisor/references/pricing-data.md:131 — defined here
- `Cron & Background Jobs` — .claude/skills/programming-advisor/references/pricing-data.md:144 — defined here
- `Break-Even Analysis Guidelines` — .claude/skills/programming-advisor/references/pricing-data.md:157 — defined here
- `When DIY Makes Sense` — .claude/skills/programming-advisor/references/pricing-data.md:159 — defined here
- `Hidden Costs to Surface` — .claude/skills/programming-advisor/references/pricing-data.md:169 — defined here
- `Red Flags for DIY` — .claude/skills/programming-advisor/references/pricing-data.md:177 — defined here

## Structure
# Pricing Data Reference — .claude/skills/programming-advisor/references/pricing-data.md:1
## Cost Calculation Formula — .claude/skills/programming-advisor/references/pricing-data.md:5
## Token Cost Estimates — .claude/skills/programming-advisor/references/pricing-data.md:16
## Authentication & Identity — .claude/skills/programming-advisor/references/pricing-data.md:28
## Email Services — .claude/skills/programming-advisor/references/pricing-data.md:43
## Payments & Billing — .claude/skills/programming-advisor/references/pricing-data.md:57
## Database & Backend — .claude/skills/programming-advisor/references/pricing-data.md:70
## File Storage & CDN — .claude/skills/programming-advisor/references/pricing-data.md:84
## Search — .claude/skills/programming-advisor/references/pricing-data.md:95
## Monitoring & Error Tracking — .claude/skills/programming-advisor/references/pricing-data.md:108
## Analytics — .claude/skills/programming-advisor/references/pricing-data.md:119
## AI & LLM Integration — .claude/skills/programming-advisor/references/pricing-data.md:131
## Cron & Background Jobs — .claude/skills/programming-advisor/references/pricing-data.md:144
## Break-Even Analysis Guidelines — .claude/skills/programming-advisor/references/pricing-data.md:157
### When DIY Makes Sense — .claude/skills/programming-advisor/references/pricing-data.md:159
### Hidden Costs to Surface — .claude/skills/programming-advisor/references/pricing-data.md:169
### Red Flags for DIY — .claude/skills/programming-advisor/references/pricing-data.md:177

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Sets token cost rule of thumb at `$0.015/1K tokens` for typical Claude Code usage, and estimates DIY annual maintenance at 20% of setup cost. Explicitly warns that payments should never be built custom due to PCI compliance costs exceeding $50K/year. Notes prices are as of 2024.

## Context cost
5910 bytes, approximately 1480 tokens.
