---
package: rjm
name: Hybrid Enforcement
slug: hybrid-enforcement
kind: pattern
package_phase: cross-phase
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

# Hybrid Enforcement

## Definition — verbatim
> "### Pattern C: Hybrid Enforcement" — .agents/governance/SKILL-PHASE-GATES.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 167 | defined here | Pattern combining prompt-based phase gates with structured downstream output validation. |

## Consumes
Prompt instructions and downstream parser validators.

## Produces
Standardized output blocks (such as `GATE_STATUS`) parsed by subsequent workflow steps.

## When applied
Used in multi-agent pipelines where prompt flexibility is paired with mechanical downstream validation.

## Sub-concepts
gate-status

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
An enforcement pattern bridging documentation-based prompts and programmatic verification. Skills are instructed to emit structured status tokens (e.g. `GATE_STATUS`) that downstream tools or subsequent agents parse to verify compliance before continuing.
