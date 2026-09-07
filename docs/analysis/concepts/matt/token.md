---
package: matt
name: token
slug: token
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# token

## Definition — verbatim
(used, not defined)

> "The comparison that matters isn't tokens against zero; it's [tokens](https://www.aihero.dev/ai-coding-dictionary/token) against building the wrong state model and finding out after it has production callers." — docs/engineering/prototype.md:50

## Also called — verbatim
tokens — docs/engineering/prototype.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 50 | used here | Discusses token spend in prototyping relative to the downstream expense of building wrong models. |
| external/research.md | 38 | used here | Reports token usage explosion resulting from unconstrained recursive agent dispatch. |
| external/wait-what.md | 35 | used here | Describes reusing ubiquitous language tokens across documentation and prompts to reinforce alignment. |

## Consumes
none

## Produces
none

## When applied
Every interaction with LLMs, constraining context windows and billing metrics.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
Tokens represent the fundamental computational currency and context constraint in LLM engineering. Matt's philosophy frames token consumption as an investment: spending tokens early on focused prototypes or research is far cheaper than spending tokens building the wrong product.
