---
package: rjm
name: Soft warn
slug: soft-warn
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

# Soft warn

## Definition — verbatim
> "Soft warn | reads 1-2 after warmup | ALLOW; read 3 with nav_count 0 -> warn" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 206 | defined here | Second tier of graduated read gate allowing reads while providing warning feedback. |

## Consumes
none

## Produces
none

## When applied
> "reads 1-2 after warmup" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:206

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An intermediate tier in the graduated read gate that allows reads without blocking but issues advisory warnings on the third read if no symbol navigation has taken place.
