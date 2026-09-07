---
package: rjm
name: Engineering opportunity cost
slug: engineering-opportunity-cost
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Engineering opportunity cost

## Definition — verbatim
> "Effort spent inventing novel agent abstractions is effort not spent curating, indexing, and observing the corpus." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 53 | defined here | Decision driver heading in ADR-069 contrasting abstraction engineering against corpus curation |

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
Engineering opportunity cost is a decision driver heading in ADR-069 cautioning against expending engineering resources on novel agent abstractions instead of corpus curation, rather than an operational lifecycle concept.
