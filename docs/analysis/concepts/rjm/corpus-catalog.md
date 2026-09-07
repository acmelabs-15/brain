---
package: rjm
name: Corpus catalog
slug: corpus-catalog
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Corpus catalog

## Definition — verbatim
> "What is the authoritative, machine-readable inventory of all context artifacts the system can assemble?" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 68 | defined here | Proposed machine-readable inventory of all context artifacts the system can assemble |

## Consumes
Context artifacts, memory files, skill files, and architectural documentation.

## Produces
An authoritative, machine-readable inventory of context artifacts.

## When applied
Applied during context assembly to dynamically discover and select relevant prompt materials.

## Sub-concepts
none

## Part of
curated-context-corpus

## Implementation status
not-implemented

## Design notes
The corpus catalog is a proposed architectural artifact in ADR-069 that would provide a comprehensive, machine-readable directory of all context sources in the repository to power dynamic context assembly.
