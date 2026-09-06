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
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/programming-advisor/references/pricing-data.md

## Purpose — required, verbatim
> "Use this data to calculate total cost of ownership comparisons. Prices as of 2024." — .claude/skills/programming-advisor/references/pricing-data.md:3

## Design intent — required
Empirical reference dataset detailing subscription tiers, usage costs, free allowances, and DIY maintenance estimates for core software infrastructure categories (auth, email, payments, database, storage, search, monitoring, analytics, AI APIs, background jobs). Provides formulas and realistic break-even criteria for comparing custom build costs with commercial SaaS pricing, surfacing critical hidden costs like security audits, regulatory compliance, and on-call operational overhead.

## Phase — required
rjm:spec

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill programming-advisor — .claude/skills/programming-advisor/SKILL.md:230

## Concepts named — required, verbatim
- `total cost of ownership` — .claude/skills/programming-advisor/references/pricing-data.md:3 — used here
- `Cost Calculation Formula` — .claude/skills/programming-advisor/references/pricing-data.md:5 — defined here
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
- `## Cost Calculation Formula` — .claude/skills/programming-advisor/references/pricing-data.md:5
- `## Token Cost Estimates` — .claude/skills/programming-advisor/references/pricing-data.md:16
- `## Authentication & Identity` — .claude/skills/programming-advisor/references/pricing-data.md:28
- `## Email Services` — .claude/skills/programming-advisor/references/pricing-data.md:43
- `## Payments & Billing` — .claude/skills/programming-advisor/references/pricing-data.md:57
- `## Database & Backend` — .claude/skills/programming-advisor/references/pricing-data.md:70
- `## File Storage & CDN` — .claude/skills/programming-advisor/references/pricing-data.md:84
- `## Search` — .claude/skills/programming-advisor/references/pricing-data.md:95
- `## Monitoring & Error Tracking` — .claude/skills/programming-advisor/references/pricing-data.md:108
- `## Analytics` — .claude/skills/programming-advisor/references/pricing-data.md:119
- `## AI & LLM Integration` — .claude/skills/programming-advisor/references/pricing-data.md:131
- `## Cron & Background Jobs` — .claude/skills/programming-advisor/references/pricing-data.md:144
- `## Break-Even Analysis Guidelines` — .claude/skills/programming-advisor/references/pricing-data.md:157
- `### When DIY Makes Sense` — .claude/skills/programming-advisor/references/pricing-data.md:159
- `### Hidden Costs to Surface` — .claude/skills/programming-advisor/references/pricing-data.md:169
- `### Red Flags for DIY` — .claude/skills/programming-advisor/references/pricing-data.md:177

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines a concrete multi-year cost formula: `Year N Cost = Setup Cost + (Monthly * 12 * N) + (Maintenance * N)`, setting DIY setup cost at Token Estimate * $0.015/1K tokens and DIY annual maintenance at 20% of setup cost.
- Emphatically rejects DIY payments ("Don't. PCI compliance alone costs $50K+/year").
- Identifies critical red flags in engineering estimation, including claims like "we can build it in a weekend" or "we'll add security later".

## Context cost
5910 bytes (~1480 tokens). Loads no external files.
