---
package: rjm
name: runtime enforcement layer
slug: runtime-enforcement-layer
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

# runtime enforcement layer

## Definition — verbatim
> "runtime enforcement layer and retain only the static steering. See the" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 18 | defined here | Identified as the hook-based blocking layer retired in favor of static steering. |

## Consumes
none

## Produces
none

## When applied
> "Adopt a conditional, availability-gated LSP-first enforcement layer, ported to" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:164

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A system of runtime hooks designed to intercept and conditionally block agent tool calls like Grep or Read, subsequently retired due to false positive and process spawn overhead.
