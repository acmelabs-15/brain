---
package: rjm
name: six forcing questions
slug: six-forcing-questions
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# six forcing questions

## Definition — verbatim
(used, not defined)

> "Run `/spec` first: it applies the front-gate (the six forcing questions, the `front-gate-before-pipeline` pattern) and confirms a named blocked user, a documented status quo, and a concrete observation before any downstream step runs." — .claude/commands/plan.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 15 | used here | Referenced as the concrete checklist of questions executed during `/spec` front-gating to confirm genuine demand. |

## Consumes
Proposed problem statement or candidate feature description.

## Produces
Explicit answers confirming a blocked user, documented status quo, measurable impact, and concrete observation.

## When applied
Invoked at the front-gate before planning, specification synthesis, or information pipeline execution.

## Sub-concepts
none

## Part of
front-gate, front-gate-before-pipeline

## Implementation status
clean

## Design notes
A standardized battery of probing questions applied at the earliest stage of specification and planning to weed out speculative or non-essential work. By requiring explicit, evidence-backed answers regarding who is blocked and what observable problem exists, it prevents agents from rationalizing low-value tasks.
