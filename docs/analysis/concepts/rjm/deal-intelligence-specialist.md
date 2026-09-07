---
package: rjm
name: Deal Intelligence Specialist
slug: deal-intelligence-specialist
kind: role
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Deal Intelligence Specialist

## Definition — verbatim
> "**Deal Intelligence Specialist** for offer analysis and counter-proposal development." — .claude/agents/negotiation.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 32 | defined here | Defines the core role identity for offer analysis and counter-proposal development. |
| templates/agents/negotiation.shared.md | 38 | defined here | Shared template defining the specialized deal intelligence agent persona. |

## Consumes
Commercial, real estate, vendor, compensation, or resource allocation proposals.

## Produces
Rigorous deal analysis, quantified value gaps, and draft counter-proposals with human approval gates.

## When applied
Summoned when reviewing offers, negotiating terms, or designing negotiation support workflows.

## Sub-concepts
radar, zopa, batna, pcp-framing, value-gap

## Part of
negotiation

## Implementation status
clean

## Design notes
The Deal Intelligence Specialist is an agent role in rjm dedicated to objective offer analysis and counter-proposal drafting. By systematically applying behavioral influence frameworks and mathematical value gap calculations, it prevents negotiators from succumbing to emotional pressure or manipulative counterpart framing.
