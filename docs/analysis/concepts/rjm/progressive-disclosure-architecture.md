---
package: rjm
name: progressive-disclosure architecture
slug: progressive-disclosure-architecture
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

# progressive-disclosure architecture

## Definition — verbatim
(used, not defined)

> "Memory-First Gate (BLOCKING), the progressive-disclosure architecture, a" — .agents/architecture/ADR-063-memory-skill-decomposition.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 48 | used here | Described as an architectural approach organizing monolithic skill bodies into tiered disclosure surfaces. |

## Consumes
Full documentation surface, specialized references, and operational schemas.

## Produces
A lean entry point exposing high-level workflows while deferring detailed schemas and references to secondary files.

## When applied
Applied when authoring complex skills or prompts to avoid context window exhaustion while maintaining comprehensive reference material.

## Sub-concepts
thin-router

## Part of
skillforge, adr-review

## Implementation status
defects: missing-path, doc-drift

## Design notes
Progressive disclosure is a core design pattern in rjm for managing agent context budgets. Rather than loading massive specifications, references, or API documentation into agent context up front, skills provide compact entry points with decision trees and pointers to external reference files. Agents load deeper levels of detail only when specifically required, minimizing context token costs and distraction.
