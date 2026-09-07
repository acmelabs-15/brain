---
package: rjm
name: idempotency key
slug: idempotency-key
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# idempotency key

## Definition — verbatim
> "- Identify the natural idempotency key for the operation: a request id, a session-and-step pair, a content hash, an issue number plus action." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 70 | used here | Checklist criterion requiring retried mutating calls to supply an idempotency key. |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 57 | defined here | Defines natural idempotency keys and rules for deduplicating side-effecting operations. |
| .claude/skills/software-engineering-library/references/release-it.md | 115 | defined here | Mandates idempotency keys on retried mutating calls to achieve effective exactly-once semantics. |

## Consumes
Unique operation identifiers, request tokens, session-step pairs, or payload content hashes.

## Produces
Idempotent operation execution, deduplication guards, and safe replayability of mutating actions.

## When applied
Applied across all mutating API requests, distributed event handlers, and retry loops.

## Sub-concepts
none

## Part of
retries

## Implementation status
defects: doc-drift (.claude/skills/software-engineering-library/references/data-intensive-applications.md:146); missing-path (.claude/skills/software-engineering-library/references/release-it.md:177); clean in .claude/skills/review/references/reliability.md

## Design notes
An `idempotency key` is a unique identifier attached to mutating requests that allows downstream receivers to recognize duplicate invocations and safely return prior results without re-executing side effects.
