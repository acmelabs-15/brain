---
package: rjm
name: RETRIEVAL-LED REASONING
slug: retrieval-led-reasoning
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RETRIEVAL-LED REASONING

## Definition — verbatim
(used, not defined)

> "## RETRIEVAL-LED REASONING" — .agents/governance/PROJECT-CONSTRAINTS.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/PROJECT-CONSTRAINTS.md | 15 | defined here | Defines the operational principle mandating retrieval of constraints from documentation rather than relying on pre-training assumptions. |

## Consumes
Authoritative repository governance documentation (.agents/governance/PROJECT-CONSTRAINTS.md) and linked ADRs.

## Produces
Deterministic architectural and workflow decisions adhering strictly to current project rules.

## When applied
Applied at session initialization and whenever decisions are made regarding language choice, skill usage, workflows, or commit structures.

## Sub-concepts
none

## Part of
architecture-governance

## Implementation status
defects: cross-file-contradiction

## Design notes
An architectural reasoning pattern and operational mandate requiring autonomous agents to retrieve explicit project constraints from authoritative repository documentation rather than relying on pre-training priors. This prevents obsolete conventions or generic LLM biases from overriding repository-specific standards.
