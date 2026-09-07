---
package: rjm
name: SYMBOL-NAVIGATION
slug: symbol-navigation
kind: technique
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

# SYMBOL-NAVIGATION

## Definition — verbatim
> "AND target language has SYMBOL-NAVIGATION capability" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:183

## Also called — verbatim
go-to-definition / find-references — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:184

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 183 | defined here | Required capability condition for triggering symbol-grep blocking guards. |

## Consumes
none

## Produces
none

## When applied
> "(go-to-definition / find-references): programming languages only" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:184

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A capability classifier designating language server support for go-to-definition and find-references, used to restrict navigation blocking specifically to languages where symbol lookups exist.
