---
package: rjm
name: Three-tier navigation preference
slug: three-tier-navigation-preference
kind: pattern
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

# Three-tier navigation preference

## Definition — verbatim
> "three-tier navigation preference (Decision, Section 1) survives as steering; only the blocking" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 48 | defined here | Hierarchy prioritizing Serena MCP tools, then native LSP, then grep/glob fallback. |

## Consumes
none

## Produces
none

## When applied
> "Serena MCP symbolic tools first; else native LSP (Claude built-in `LSP` tool /" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:172

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An ordered hierarchy for code navigation instructing agents to query dedicated symbol servers first, rely on native LSP second, and fall back to broad text search only when symbol tools are unavailable.
