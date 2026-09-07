---
package: rjm
name: Governance-only
slug: governance-only
kind: pattern
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Governance-only

## Definition — verbatim
> "#### Use **Governance-only** when:" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 121 | defined here | Placement rule for operational policies, conventions, and standards that do not modify architecture. |

## Consumes
Operational standards, coding conventions, review policies, and process rules.

## Produces
Living policy documents in `.agents/governance/` with mandatory compliance requirements and exception processes.

## When applied
Used when establishing operational policies that require continuous enforcement but do not affect system architecture.

## Sub-concepts
none

## Part of
decision-classification-matrix

## Implementation status
defects: missing-path

## Design notes
A placement category for operational rules, workflow standards, and development conventions that do not impact underlying software architecture. Stored as living documents in `.agents/governance/`, these policies evolve independently of architectural decision records.
