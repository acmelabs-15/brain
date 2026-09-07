---
package: rjm
name: Bounded Queues and Buffers
slug: bounded-queues-and-buffers
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bounded Queues and Buffers

## Definition — verbatim
> "### 4. Bounded Queues and Buffers" — .claude/skills/review/references/reliability.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 78 | defined here | Reliability review checklist auditing queue capacity limits and overflow management policies. |

## Consumes
Asynchronous queues, worker pools, in-memory buffers, and producer-consumer channels.

## Produces
Findings identifying unbounded in-memory data structures and unhandled queue overflow scenarios.

## When applied
Applied during reliability reviews of asynchronous processing, event handling, or buffered I/O.

## Sub-concepts
none

## Part of
reliability

## Implementation status
clean

## Design notes
`Bounded Queues and Buffers` is a reliability review checklist ensuring all queues, buffers, and worker pools enforce explicit maximum depth limits and documented overflow handling to prevent out-of-memory crashes.
