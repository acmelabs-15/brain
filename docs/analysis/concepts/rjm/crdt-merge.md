---
package: rjm
name: CRDT merge
slug: crdt-merge
kind: technique
package_phase: cross-phase
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

# CRDT merge

## Definition — verbatim
> "A second writer requires a written-down conflict resolution policy: last-writer-wins with a tiebreaker, CRDT merge, or explicit human escalation." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 40 | used here | Cited as a conflict resolution mechanism for concurrent multi-writer data structures. |

## Consumes
Concurrent mutation payloads, commutative and associative state transition functions.

## Produces
Convergent state across distributed replicas without central coordination or data loss.

## When applied
When distributed agent processes update shared domain models or memory entries concurrently without global lock acquisition.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
CRDT merge provides conflict-free replicated data type mechanics in rjm, enabling distributed agents to update shared models concurrently and converge on consistent state without central coordination.
