---
package: rjm
name: trusted controller
slug: trusted-controller
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# trusted controller

## Definition — verbatim
> "A trusted controller that owns task definitions, scoring, and result files, and hands the optimizer only the optimize group." — .agents/architecture/ADR-087-held-out-validated-improvement.md:573-574

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 573 | defined here | Identified as Open Requirement 1 and a mandatory prerequisite for evaluating optimization on unseen tasks. |

## Consumes
Task definitions, scoring routines, and evaluation result files across optimize, selection, and test groups.

## Produces
Guarded evaluation execution batches restricted to the optimize group handed to the optimizer loop.

## When applied
Applied during automated prompt, rule, or agent evaluation and optimization workflows to isolate held-out grading criteria from optimizing agents.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (Identified in ADR-087 as Open Requirement 1 prerequisite; citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
A trusted execution boundary that isolates held-out evaluation tasks and grading criteria from the autonomous optimizer. Without an independent controller owning task definitions and scoring results, optimizing agents with filesystem access can directly inspect grading rubrics and held-out test splits, reducing validation on unseen tasks to cooperative honor-system compliance.
