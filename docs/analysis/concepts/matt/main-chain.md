---
package: matt
name: main chain
slug: main-chain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# main chain

## Definition — verbatim
> "`implement` is the build step of the main chain, second from the end:" — docs/engineering/implement.md:87

## Also called — verbatim
main build chain — docs/engineering/grill-with-docs.md:76

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 87 | defined here | Defines implement as the build step of the main chain, second from the end. |
| external/implement.md | 71 | used here | Places implement within the sequential pipeline of the main chain. |

## Consumes
Upstream requirements and design decisions.

## Produces
The fully realized software product through staged transformation.

## When applied
Throughout the standard software delivery lifecycle.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The main chain is synonymous with the main build chain, referring to the end-to-end sequence of engineering skills connecting requirements discovery to reviewed implementation. It provides the reference backbone against which peripheral exploration skills are positioned.
