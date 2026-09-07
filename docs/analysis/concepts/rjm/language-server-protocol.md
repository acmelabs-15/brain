---
package: rjm
name: Language Server Protocol
slug: language-server-protocol
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Language Server Protocol

## Definition — verbatim
(used, not defined)

> "file Reads. A Language Server Protocol (LSP) query answers the same question in" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:106

## Also called — verbatim
LSP — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 106 | used here | Referenced as the industry-standard protocol for querying code symbols and references. |

## Consumes
none

## Produces
none

## When applied
> "one call with a file:line result." — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:107

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An external open standard protocol providing IDE-grade language features like symbol definition and reference lookup, utilized by agents to minimize token consumption during code exploration.
