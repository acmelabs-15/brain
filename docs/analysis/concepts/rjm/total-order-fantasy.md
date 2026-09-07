---
package: rjm
name: Total-order fantasy
slug: total-order-fantasy
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Total-order fantasy

## Definition — verbatim
> "- **Total-order fantasy**: assuming all events are seen in the same order by all consumers because \"they came from the same producer.\" Per-key order is the strongest free guarantee." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 161 | defined here | Defined as an anti-pattern where consumers assume global event ordering without architectural enforcement. |

## Consumes
Distributed event streams, multi-consumer subscriptions, producer queues.

## Produces
Race conditions, out-of-order execution, and inconsistent distributed state.

## When applied
Flagged when a system assumes global total order across events instead of designing for per-key partitioning or causal ordering.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Total-order fantasy is the mistaken belief that all distributed consumers observe events in an identical sequence simply because they originated from a single producer, countered by designing around realistic per-key ordering guarantees.
