---
package: rjm
name: false positives
slug: false-positives
kind: name-only
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

# false positives

## Definition — verbatim
(used, not defined)

> "Against it stand documented false positives" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 56 | used here | Quantifies instances where legitimate agent actions were erroneously blocked by runtime guards. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
false positives is an evaluation metric term used in ADR-062 to characterize incorrect runtime gate blocks rather than an operational lifecycle concept, classified as name-only per D-023.
