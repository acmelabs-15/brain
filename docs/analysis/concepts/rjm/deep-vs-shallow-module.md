---
package: rjm
name: deep-vs-shallow module
slug: deep-vs-shallow-module
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

# deep-vs-shallow module

## Definition — verbatim
(used, not defined)

> "- `.claude/rules/philosophy-of-software-design.md`: the deep-vs-shallow module <!-- orphan-ref-ignore -->" — .agents/architecture/ADR-063-memory-skill-decomposition.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 156 | used here | Applied as an architectural evaluation criterion to justify sub-skill creation only when hiding significant complexity. |

## Consumes
Module interface size, implementation complexity, and caller integration overhead.

## Produces
An architectural design assessment rejecting shallow pass-through abstractions in favor of deep modules with rich functionality behind simple interfaces.

## When applied
Evaluated when proposing new skills, commands, scripts, or architectural sub-divisions.

## Sub-concepts
information-hiding

## Part of
philosophy-of-software-design

## Implementation status
defects: missing-path, doc-drift

## Design notes
The deep-vs-shallow module principle, adapted from John Ousterhout's Philosophy of Software Design, governs modularity across rjm. A deep module provides substantial functionality behind a simple, compact interface, maximizing the value-to-cost ratio for callers. Conversely, shallow modules introduce interface complexity without hiding significant implementation depth. rjm enforces this principle to prevent fragmentation and gratuitous sub-skill proliferation.
