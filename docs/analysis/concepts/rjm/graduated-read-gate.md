---
package: rjm
name: Graduated Read gate
slug: graduated-read-gate
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

# Graduated Read gate

## Definition — verbatim
> "Graduated Read gate, three tiers, all configured languages" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 195 | defined here | Heading introducing the multi-tier progressive enforcement design for file reads. |

## Consumes
none

## Produces
none

## When applied
> "the gate ramps. `nav_required = 2` (matches the Surgical threshold; the Hard" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:200

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A staged gating structure (Warmup, Soft warn, Hard block, Surgical) that gradually escalates read interception if an agent reads files without performing symbol overview navigation.
