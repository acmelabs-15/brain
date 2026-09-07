---
package: rjm
name: thin router
slug: thin-router
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

# thin router

## Definition — verbatim
> "keep `memory` as a thin router that delegates, and preserve the" — .agents/architecture/ADR-063-memory-skill-decomposition.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 86 | defined here | Established as the target architecture pattern for the decomposed memory skill to prevent caller breakage while shedding logic. |

## Consumes
High-level caller invocations and dispatch matrices mapping operations to sub-skills.

## Produces
Direct delegation to focused sub-skills without executing heavy domain logic locally.

## When applied
Applied when decomposing large monolithic skills into smaller modular components while retaining existing entry points.

## Sub-concepts
when-to-use-matrix

## Part of
router-pattern

## Implementation status
defects: missing-path, doc-drift

## Design notes
A thin router is an architectural pattern that preserves backward compatibility during skill decomposition. Instead of completely removing an established top-level skill name, the skill is stripped of heavy implementation logic, reference documents, and scripts, leaving only a lightweight dispatch table. Callers targeting the legacy name are seamlessly routed to modular sub-skills, avoiding caller churn while shrinking active context overhead.
