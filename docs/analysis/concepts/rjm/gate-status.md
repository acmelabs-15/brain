---
package: rjm
name: GATE_STATUS
slug: gate-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GATE_STATUS

## Definition — verbatim
(used, not defined)

> "GATE_STATUS:" — .agents/governance/SKILL-PHASE-GATES.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 177 | defined here | Standardized output token prefix identifying phase gate validation status blocks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
hybrid-enforcement, skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A structured output label and schema identifier emitted in skill outputs to record gate compliance, rather than an independent lifecycle concept.
