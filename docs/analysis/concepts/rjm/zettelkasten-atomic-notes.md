---
package: rjm
name: Zettelkasten atomic notes
slug: zettelkasten-atomic-notes
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Zettelkasten atomic notes

## Definition — verbatim
(used, not defined)

> "learned patterns, skills (Zettelkasten atomic notes, tiered)" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 29 | used here | Knowledge persistence method structuring Serena memories into modular, tiered notes |

## Consumes
Empirical observations, post-mortem findings, and architectural patterns.

## Produces
Atomic markdown memory notes stored within `.serena/memories/`.

## When applied
Applied when recording lessons learned and operational patterns to facilitate granular context retrieval.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
Zettelkasten atomic notes is a knowledge organization technique that decomposes repository learnings into small, single-topic markdown files, enabling fine-grained context retrieval without exceeding LLM context windows.
