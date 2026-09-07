---
package: rjm
name: Idempotent
slug: idempotent
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

# Idempotent

## Definition — verbatim
> "applying the operation twice yields the same observable state as applying it once." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 14 | defined here | Defined in core vocabulary as an operation property where repeated execution yields the same observable state. |

## Consumes
Natural idempotency keys, duplicate detection tables, persistent state barriers.

## Produces
Replay-safe write handlers, duplicate-suppressing consumers, safe automated retries.

## When applied
Whenever implementing write handlers that modify disk, network, or memory stores subject to transient failure and retry.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Idempotent design in rjm ensures that operations such as tool executions, telemetry logging, and PR creation can safely be executed multiple times without generating duplicate state or unintended side effects. By attaching persisted idempotency keys to mutation handlers, workflows remain resilient against transient network faults and process crashes.
