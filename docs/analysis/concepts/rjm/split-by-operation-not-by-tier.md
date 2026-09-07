---
package: rjm
name: Split by operation, not by tier
slug: split-by-operation-not-by-tier
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Split by operation, not by tier

## Definition — verbatim
> "1. **Split by operation, not by tier.** The recommended primary axis is the" — .agents/architecture/ADR-063-memory-skill-decomposition.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 93 | defined here | Formulated as the core decomposition rule dividing skills along caller action boundaries rather than internal storage layers. |

## Consumes
Domain functionality encompassing multiple operations and underlying storage models.

## Produces
A decoupled set of sub-skills structured around distinct caller operations (e.g. search, gate, extract, maintain).

## When applied
When designing modular skill boundaries to maximize caller cohesion and minimize loaded context size.

## Sub-concepts
none

## Part of
memory-skill-decomposition

## Implementation status
defects: missing-path, doc-drift

## Design notes
Split by operation, not by tier is an architectural heuristic governing modular decomposition in rjm. It asserts that modules should be partitioned according to what callers do (operations like search or validation) rather than how data is internally structured (tiers or storage backends). Because calling workflows typically need only a single operation at a time, splitting by operation ensures that agents load only the minimal instructions relevant to their immediate task.
