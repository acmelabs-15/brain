---
package: rjm
name: Domain Knowledge
slug: domain-knowledge
kind: reference
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Domain Knowledge

## Definition — verbatim
> "Load domain-specific reference when relevant:" — templates/agents/negotiation.shared.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/negotiation.shared.md | 190 | defines | External domain references (real estate, compensation, vendor contracts) loaded for context-specific negotiation depth. |

## Consumes
Domain context files and memory queries.

## Produces
Domain-specific legal, contractual, or compensation benchmarks.

## When applied
Loaded when evaluating offers within specific domains such as real estate, salary negotiations, or vendor agreements.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Contextual domain reference repository covering real estate transaction law, compensation equity structures, and vendor/RFC terms, providing concrete domain expertise to complement general bargaining theory.
