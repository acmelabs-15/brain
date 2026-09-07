---
package: rjm
name: Warmup
slug: warmup
kind: gate
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

# Warmup

## Definition — verbatim
> "Warmup | first gated Read this session, no warmup recorded, overview-capable LSP available" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 205 | defined here | First tier of the graduated read gate requiring an initial overview call per session. |

## Consumes
none

## Produces
none

## When applied
> "first gated Read this session, no warmup recorded, overview-capable LSP available" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:205

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
The introductory tier of the graduated read gate that blocks an agent's initial file read in a session, forcing it to invoke symbol overview or diagnostics before proceeding.
