---
package: rjm
name: bounded staleness
slug: bounded-staleness
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

# bounded staleness

## Definition — verbatim
> "Name the model. _Read-your-writes_, _monotonic reads_, _bounded staleness_, _causal_, _eventual_, _strict serializable_. Pick the weakest one that is correct, then document it." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 77 | defined here | Listed as a consistency model option that establishes an explicit upper bound on read replication lag. |

## Consumes
Asynchronous replication pipelines, read queries, specified staleness window bounds.

## Produces
An explicit lag contract ensuring reader replicas are at most N seconds or N versions behind the leader.

## When applied
Applied when relaxing strict consistency for performance or availability while still needing a deterministic upper bound on data staleness.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Bounded staleness guarantees that replica reads lag behind the single source of truth by no more than a specified time window or version count. In rjm, documenting the staleness window provides a concrete operational contract rather than vague promises of eventual consistency.
