---
package: rjm
name: last-writer-wins
slug: last-writer-wins
kind: pattern
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

# last-writer-wins

## Definition — verbatim
> "A second writer requires a written-down conflict resolution policy: last-writer-wins with a tiebreaker, CRDT merge, or explicit human escalation." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 40 | used here | Named as an explicit conflict resolution policy option for concurrent writers that requires a tiebreaker. |

## Consumes
Concurrent mutation attempts, unambiguous tiebreaker attribute (e.g. wall-clock timestamp or monotonic sequence number).

## Produces
Deterministic conflict resolution favoring the latest identified write.

## When applied
When multiple writers concurrently update the same data field and a tiebreaker policy is explicitly declared.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Last-writer-wins (LWW) is an explicit conflict resolution strategy in rjm that resolves concurrent writes by ordering on an unambiguous tiebreaker (such as timestamp or transaction sequence), rejecting implicit or accidental overwrites.
