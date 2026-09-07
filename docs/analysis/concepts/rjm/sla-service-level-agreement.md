---
package: rjm
name: SLA (Service Level Agreement)
slug: sla-service-level-agreement
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SLA (Service Level Agreement)

## Definition — verbatim
> "| SLA (Service Level Agreement) | Contract with consequences if SLO missed | Refunds, credits, penalties |" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 17 | defined here | SRE term table row defining SLA as a contract with consequences if an SLO is missed. |

## Consumes
Internal Service Level Objectives and contractual commitments.

## Produces
Formal agreement with defined financial, legal, or operational remedies (e.g. customer billing credits or penalties).

## When applied
Assessed over formal audit periods (e.g. monthly or quarterly) against historical SLI records.

## Sub-concepts
none

## Part of
slo-sli-sla-reference

## Implementation status
defects: missing-path

## Design notes
A Service Level Agreement represents the external contractual commitment made to customers. In RJM's reliability architecture, SLAs are deliberately set less strictly than internal SLOs to provide an operational safety margin before contractual penalties apply.
