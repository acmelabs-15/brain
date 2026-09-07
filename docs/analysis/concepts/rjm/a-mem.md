---
package: rjm
name: A-MEM
slug: a-mem
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# A-MEM

## Definition — verbatim
> "A-MEM" — .agents/architecture/ADR-007-memory-first-architecture.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 70 | used here | Cited as recent research (arXiv 2502.12110) demonstrating dynamic memory organization and memory evolution. |

## Consumes
none

## Produces
none

## When applied
Referenced in architectural research evaluating adaptive memory indexing and evolution mechanisms.

## Sub-concepts
memory-evolution

## Part of
memory-first-architecture

## Implementation status
not-implemented

## Design notes
An academic reference (arXiv 2502.12110) cited in ADR-007 that moves beyond static retrieval systems by introducing dynamic memory organization, contextual description generation, intelligent linking, and memory evolution across foundation model agent workflows.
