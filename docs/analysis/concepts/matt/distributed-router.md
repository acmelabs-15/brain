---
package: matt
name: distributed router
slug: distributed-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# distributed router

## Definition — verbatim
> "The pages are collectively a distributed router; each is a node." — .agents/writing-docs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 5 | defined here | Defines the collection of skill documentation pages as a distributed router guiding users across nodes. |

## Consumes
Individual documentation pages and inter-skill linking conventions.

## Produces
A decentralized navigation network connecting adjacent skills across the repository.

## When applied
Applied when structuring skill documentation pages to ensure each page points readers to relevant siblings.

## Sub-concepts
Where it fits

## Part of
writing-docs

## Implementation status
clean

## Design notes
A decentralized navigation architecture where individual documentation pages act as interconnected nodes. Rather than requiring a monolithic guide, each page situates its skill among neighbors and points to ask-matt, creating an organic routing web.
