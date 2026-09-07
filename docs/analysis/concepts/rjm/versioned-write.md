---
package: rjm
name: versioned write
slug: versioned-write
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

# versioned write

## Definition — verbatim
> "For mutable values, prefer compare-and-set or a versioned write." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 59 | used here | Recommended pattern for mutable records to prevent blind upserts from overwriting concurrent modifications. |

## Consumes
Current record version number, updated payload with incremented version identifier.

## Produces
Monotonically incremented persisted record or optimistic concurrency collision error.

## When applied
When persisting updates to mutable shared state where concurrent writers could collide.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Versioned write applies optimistic locking by attaching monotonically increasing version counters to persisted rows or JSON entities in rjm, ensuring concurrent writes fail gracefully instead of silently destroying interleaved updates.
