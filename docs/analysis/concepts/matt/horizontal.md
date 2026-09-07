---
package: matt
name: horizontal
slug: horizontal
kind: pattern
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# horizontal

## Definition — verbatim
> "A **horizontal** slice ships one layer of the change. Nothing works until every layer has landed, and each ticket's acceptance criteria have to reach into work that another ticket owns." — docs/engineering/to-tickets.md:27

## Also called — verbatim
> "A batch of tests landed before any implementation." — docs/engineering/tdd.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 27 | defined here | Contrasts horizontal slicing (shipping one layer at a time) with vertical tracer bullets. |
| external/to-tickets.md | 34 | defined here | External catalog definition of horizontal slicing across architectural layers as an anti-pattern. |

## Consumes
Multi-layer feature architectures split along architectural boundaries (e.g. database schema first, then API, then UI).

## Produces
Incomplete, non-working interim states where acceptance criteria cross ticket boundaries and rework cascades.

## When applied
Identified as an anti-pattern to avoid when planning tickets in `to-tickets`.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
Horizontal slicing is an anti-pattern in Matt's lifecycle where work is partitioned by technical architectural layers rather than user-observable behaviors. When tickets are sliced horizontally, individual tickets cannot be verified independently, acceptance criteria leak across ticket boundaries, and system behavior remains broken until the final layer lands, resulting in high rework rates for AI agents.
