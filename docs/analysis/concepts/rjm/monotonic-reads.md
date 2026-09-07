---
package: rjm
name: monotonic reads
slug: monotonic-reads
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

# monotonic reads

## Definition — verbatim
> "Name the model. _Read-your-writes_, _monotonic reads_, _bounded staleness_, _causal_, _eventual_, _strict serializable_. Pick the weakest one that is correct, then document it." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 77 | defined here | Listed as a standard consistency model guaranteeing an observer never observes an older state after reading a newer one. |

## Consumes
Successive read queries, distributed store replicas, replication streams.

## Produces
Monotonic ordering of read results preventing observers from seeing time-reversed data states.

## When applied
Applied when designing client read routing across distributed replicas to ensure queries do not return stale state after observing fresher state.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Monotonic reads ensure that once an agent or user observes a particular state, they will never observe an older version in subsequent reads. In rjm, this pattern prevents distributed time-travel anomalies where repeated status checks hit out-of-sync replicas.
