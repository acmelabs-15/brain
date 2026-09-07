---
package: rjm
name: Bound Every Queue and Buffer
slug: bound-every-queue-and-buffer
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bound Every Queue and Buffer

## Definition — verbatim
> "## Bound Every Queue and Buffer" — .claude/skills/software-engineering-library/references/release-it.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 139 | defined here | Core pattern section mandating explicit capacity limits and overflow policies across all queues and buffers. |

## Consumes
In-process channels, message broker topics, agent run queues, and memory write buffers.

## Produces
Enforced maximum queue depths and documented overflow policies (drop new, drop old, reject producer, divert).

## When applied
Applied whenever designing or implementing asynchronous queues, buffering channels, or work distribution tables.

## Sub-concepts
none

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
A core stability technique in rjm requiring hard capacity limits and defined overflow policies for all buffers and queues. Without bounds, slow consumers cause queues to grow indefinitely until the host crashes from memory exhaustion or persistent storage fills.
