---
package: rjm
name: unauthorized-memory-inference
slug: unauthorized-memory-inference
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# unauthorized-memory-inference

## Definition — verbatim
(used, not defined)

> "the unauthorized-memory-inference reference. Use it on memory write paths to check that a write is factual capture, not a behavioral inference or a standing order the user did not authorize." — .claude/skills/review/references/agent-safety.md:54

## Also called — verbatim
> "# Agent Unauthorized Memory Inference" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 54 | used here | Reference guidance to check memory writes for unauthorized behavioral inferences. |

## Consumes
Memory write operations, session summaries, and agent prompt modifications.

## Produces
Detection and prevention of unauthorized behavioral modification rules written to agent memory.

## When applied
Applied during PR review on memory write paths and agent memory integration changes.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
clean

## Design notes
A security defect pattern in rjm where an autonomous agent records interpretive behavioral rules or self-programming inferences in persistent memory without explicit user instruction.
