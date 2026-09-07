---
package: rjm
name: Read-your-writes
slug: read-your-writes
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

# Read-your-writes

## Definition — verbatim
> "Name the model. _Read-your-writes_, _monotonic reads_, _bounded staleness_, _causal_, _eventual_, _strict serializable_. Pick the weakest one that is correct, then document it." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 77 | defined here | Listed as a standard consistency model option for boundaries requiring writers to immediately see their own updates. |

## Consumes
Persistent store write operations, client session context, read queries executed by the writing process.

## Produces
Guaranteed visibility of a process's own modifications in all subsequent reads initiated by that same process.

## When applied
Applied when introducing components that read and write shared state across replication boundaries where readers must immediately observe writes they just submitted.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Read-your-writes consistency guarantees that a writer will always observe its own updates, preventing user-facing anomalies or agent confusion caused by replication lag. In rjm, systems must explicitly route reads to the leader or version writes rather than relying on loop-based read retries.
