---
package: rjm
name: Read gate
slug: read-gate
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

# Read gate

## Definition — verbatim
> "The Read gate (item 3) uses a different capability and is where" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 192 | defined here | Gating mechanism conditioning full file reads on prior symbol overview navigation. |

## Consumes
none

## Produces
none

## When applied
> "The Read gate keys on the `get_symbols_overview` capability" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:197

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A gate designed to prevent agents from reading entire source files before first requesting structured symbol overviews, later removed due to disproportionate impact on high-frequency read operations.
