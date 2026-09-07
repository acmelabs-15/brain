---
package: rjm
name: At-least-once delivery
slug: at-least-once-delivery
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

# At-least-once delivery

## Definition — verbatim
> "the system guarantees a message arrives, but it may arrive more than once. Receivers must dedupe." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 15 | defined here | Defined in core vocabulary as a delivery guarantee ensuring arrival while requiring receiver deduplication. |

## Consumes
Message transport channels, retry policies, receiver deduplication storage.

## Produces
Reliable message arrival guarantees accompanied by potential duplicate delivery.

## When applied
Default messaging model across inter-agent communications, hook dispatches, and asynchronous event streams.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
At-least-once delivery is the realistic baseline messaging contract across rjm's distributed hooks and subagents, requiring all message handlers to maintain idempotency keys rather than relying on wishful exactly-once delivery assumptions.
