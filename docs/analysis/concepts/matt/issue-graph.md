---
package: matt
name: issue graph
slug: issue-graph
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue graph

## Definition — verbatim
(used, not defined)
> "because it has no view of the rest of the issue graph" — external/tdd.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 56 | used here | Defined in dictionary as the hierarchical relationship structure linking specs, tickets, and PRs in an issue tracker. |

## Consumes
Project requirements, specifications, and sliced work tickets.

## Produces
A connected hierarchy of parent and child issues in the project tracker.

## When applied
Formed across planning, ticketing, and implementation phases to track feature decomposition.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift, orphan

## Design notes
The issue graph is the structural backbone of feature development across Matt's lifecycle. By connecting high-level specification documents to sliced, independent tickets and resulting pull requests, the issue graph provides durable relational context across ephemeral agent sessions without overloading any single conversation context.
