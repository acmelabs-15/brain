---
package: matt
name: deep-module vocabulary
slug: deep-module-vocabulary
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deep-module vocabulary

## Definition — verbatim
> "New **`codebase-design`** skill — the deep-module vocabulary (module, interface, depth, seam, adapter) and the principles for putting a lot of behaviour behind a small interface." — CHANGELOG.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 235 | defined here | Introduces codebase-design skill and defines deep-module vocabulary (module, interface, depth, seam, adapter). |

## Consumes
Architectural boundary designs and module interface definitions.

## Produces
Shared architectural lexicon and principles for designing deep modules with minimal interfaces.

## When applied
Applied during codebase architecture improvements, module interface design, and pre-agreed seam identification in TDD.

## Sub-concepts
seam, module, interface, depth, adapter

## Part of
codebase-design

## Implementation status
clean

## Design notes
The foundational architectural terminology originating in deep-module philosophy (Ousterhout), establishing a shared vocabulary for maximizing behavioral depth behind narrow interfaces and isolating test boundaries at pre-agreed seams.
