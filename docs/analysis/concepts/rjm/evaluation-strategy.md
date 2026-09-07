---
package: rjm
name: Evaluation Strategy
slug: evaluation-strategy
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evaluation Strategy

## Definition — verbatim
> "### 4. Evaluation Strategy" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 37 | defined here | Recommends shifting from multi-step intermediate checkpoints to a comprehensive end-of-workflow evaluation gate. |

## Consumes
Agent execution outputs, functional criteria, performance metrics, and automated test suites.

## Produces
Comprehensive end-of-pipeline verification verdicts covering both functional and non-functional system properties.

## When applied
Applied when establishing automated testing, verification gates, and evaluation harnesses for agent workflows.

## Sub-concepts
none

## Part of
the-bitter-lesson-of-building-with-llms

## Implementation status
defects: missing-path

## Design notes
Evaluation Strategy in step-change AI architectures replaces intrusive intermediate micro-checkpoints with an exhaustive evaluation gate at the completion of a workflow. Because frontier models achieve high baseline correctness, testing end-to-end outcomes comprehensively scales better than constant human or heuristic intervention at each intermediate step.
