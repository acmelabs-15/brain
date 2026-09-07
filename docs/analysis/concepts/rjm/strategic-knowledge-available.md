---
package: rjm
name: Strategic Knowledge Available
slug: strategic-knowledge-available
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strategic Knowledge Available

## Definition — verbatim
(used, not defined)

> "## Strategic Knowledge Available" — .claude/agents/negotiation.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 48 | defined here | Section heading listing memory queries for behavioral influence and negotiation theory. |
| templates/agents/architect.shared.md | 41 | defined here | Section heading listing architectural principles and reference frameworks available in memory. |
| templates/agents/negotiation.shared.md | 54 | defined here | Shared template section heading indexing strategic knowledge queries for negotiation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A standardized section heading used across agent definitions (such as architect and negotiation) to catalog relevant persistent memory keys and domain frameworks available for query; it represents a structural catalog heading rather than an independent lifecycle concept.
