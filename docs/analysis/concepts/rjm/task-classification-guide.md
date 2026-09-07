---
package: rjm
name: Task Classification Guide
slug: task-classification-guide
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task Classification Guide

## Definition — verbatim
> "This guide provides a systematic approach to classifying tasks for optimal agent routing. Accurate classification ensures tasks are routed to agents with the right capabilities." — docs/task-classification-guide.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 1 | defined here | Reference guide defining the 3-dimensional task classification model and orchestrator agent routing rules. |

## Consumes
User prompts, task descriptions, repository issues, stack traces, and code diffs.

## Produces
Systematic task classifications and recommended agent sequences tailored to task requirements.

## When applied
When incoming engineering requests need to be triaged, scored, and routed to specialized agent pipelines.

## Sub-concepts
classification-dimensions, task-type, complexity-level, quick-classification-matrix, decision-flowchart

## Part of
none

## Implementation status
clean

## Design notes
A foundational routing reference in rjm establishing a systematic taxonomy across task type, complexity, and risk, ensuring that incoming work is mechanically dispatched to agent pipelines with appropriate capabilities and security oversight.
