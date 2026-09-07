---
package: rjm
name: Reproducibility of behavior
slug: reproducibility-of-behavior
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

# Reproducibility of behavior

## Definition — verbatim
> "Behavior on a given task is dominated by what's in context, not by which agent dispatched the call." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 52 | defined here | Decision driver heading in ADR-069 noting that prompt context dominates task behavior |

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
Reproducibility of behavior is a decision driver heading in ADR-069 emphasizing that task behavior is determined by prompt context rather than dispatcher routing, rather than an operational lifecycle concept.
