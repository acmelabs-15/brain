---
package: matt
name: shelf life
slug: shelf-life
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shelf life

## Definition — verbatim
> "The line between `research` and `grill-with-docs` is the **shelf life of what comes back**." — docs/engineering/research.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/research.md | 21 | defined here | Defines the operational boundary distinguishing temporary research assets from durable architectural decisions. |
| external/research.md | 31 | used here | Explains the criterion separating short-lived research outputs from persistent decision records in the external guide. |

## Consumes
none

## Produces
none

## When applied
When choosing whether to run `research` (for short-lived facts) or `grill-with-docs` (for decisions with long shelf life).

## Sub-concepts
none

## Part of
research

## Implementation status
clean in concept definition; associated with defects in research documentation and implementation: script-bug (unrestricted agent delegation in docs/engineering/research.md:35 causing runaway subagents, and draft PR generation on throwaway branches in docs/engineering/research.md:61)

## Design notes
Shelf life is the architectural criterion in Matt's methodology distinguishing disposable, point-in-time factual answers from permanent engineering decisions. Research artifacts have short shelf life (describing third-party API quirks or library versions as of a particular date) and are kept lean or discarded after consumption to avoid context poisoning, whereas architectural decisions recorded via ADRs have long shelf life and persist permanently in the repository.
