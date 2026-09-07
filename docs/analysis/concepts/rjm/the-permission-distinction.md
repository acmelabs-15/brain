---
package: rjm
name: The Permission Distinction
slug: the-permission-distinction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Permission Distinction

## Definition — verbatim
> "## The Permission Distinction" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 42 | defined here | Taxonomy distinguishing permissions for factual capture, behavioral inference, and standing orders in memory writes. |

## Consumes
Proposed memory entries and write requests.

## Produces
Permission authorization decisions categorizing writes as approved by default or requiring explicit grants.

## When applied
Applied when designing memory permissions and reviewing agent prompt write privileges.

## Sub-concepts
factual-capture, behavioral-inference

## Part of
agent-unauthorized-memory-inference

## Implementation status
clean

## Design notes
A security taxonomy establishing clear authorization boundaries for agent memory modifications. It separates approved factual recording from unauthorized behavioral inference and template-derived standing orders, ensuring agents cannot alter their future operational rules without explicit user consent.
