---
package: rjm
name: Need for shared vocabulary
slug: need-for-shared-vocabulary
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

# Need for shared vocabulary

## Definition — verbatim
> "Without a stated principle, contributors will continue to optimize the wrong layer." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 55 | defined here | Decision driver heading in ADR-069 motivating the establishment of a common context principle |

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
Need for shared vocabulary is a decision driver heading in ADR-069 articulating why contributors need shared terminology around context architecture, rather than an operational lifecycle concept.
