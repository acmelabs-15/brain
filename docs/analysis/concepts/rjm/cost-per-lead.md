---
package: rjm
name: cost per lead
slug: cost-per-lead
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/100m-leads.md, sha256: 6aa8d4a0fca004120b400df8d0dd485b2f7690526e5de73e18f88309521d4fcf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cost per lead

## Definition — verbatim
> "- [ ] You know your cost per lead and lead-to-sale rate per channel (2 pts)" — .claude/skills/business-strategy/references/100m-leads.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-leads.md | 41 | defined here | Scored checklist criterion evaluating channel-by-channel customer acquisition cost measurement. |

## Consumes
Channel marketing spend records and corresponding lead volume counts.

## Produces
Unit financial metric reflecting the acquisition efficiency of each marketing channel.

## When applied
Applied when auditing channel performance and determining where to allocate marketing resources.

## Sub-concepts
none

## Part of
100m-leads

## Implementation status
clean

## Design notes
A core unit-economic measurement technique in rjm's business strategy toolkit. Tracking cost per lead across individual channels ensures that marketing investments are grounded in empirical financial performance, preventing unmeasured capital waste across ineffective media.
