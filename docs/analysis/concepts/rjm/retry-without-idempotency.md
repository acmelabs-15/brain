---
package: rjm
name: Retry without idempotency
slug: retry-without-idempotency
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

# Retry without idempotency

## Definition — verbatim
> "- **Retry without idempotency**: a handler wrapped in a retry decorator with no dedupe key. The first failure is now a thundering herd of duplicates." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 159 | defined here | Defined as an anti-pattern where operations are retried automatically without deduplication keys. |

## Consumes
Automated retry decorators, non-idempotent operations, transient error conditions.

## Produces
Duplicate side effects, phantom transactions, or double execution upon retry.

## When applied
Flagged when retry logic is wrapped around side-effecting handlers without tracking persistent deduplication keys.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Retry without idempotency occurs when failure recovery mechanisms execute retries without deduplication keys, turning transient errors into bursts of duplicate operations that corrupt downstream state.
