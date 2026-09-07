---
package: rjm
name: native LSP
slug: native-lsp
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

# native LSP

## Definition — verbatim
(used, not defined)

> "Serena MCP symbolic tools first; else native LSP (Claude built-in `LSP` tool /" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 172 | used here | Tier 2 option in the three-tier navigation preference hierarchy. |

## Consumes
none

## Produces
none

## When applied
> "`.serena/project.yml` language list decide which tier applies per file." — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:174

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Built-in language server protocol capabilities provided directly by agent harnesses, used when dedicated external MCP servers are unavailable.
