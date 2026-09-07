---
package: rjm
name: At-most-once delivery
slug: at-most-once-delivery
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

# At-most-once delivery

## Definition — verbatim
> "the system may drop a message but never duplicates. Senders must accept loss." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 16 | defined here | Defined in core vocabulary as a delivery guarantee where messages may be dropped but never duplicated. |

## Consumes
Best-effort transport channels, fire-and-forget emitters.

## Produces
Duplicate-free message streams where message omissions are tolerated.

## When applied
Restricted exclusively to non-critical data streams such as debug logs, heartbeat pings, and ephemeral operational metrics.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
At-most-once delivery characterizes transports where duplicates cannot be tolerated but drops are acceptable. In rjm, it is confined strictly to non-critical streams like debug logging and ephemeral telemetry.
