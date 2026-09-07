---
package: rjm
name: Correctness
slug: correctness
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Correctness

## Definition — verbatim
> "No factual errors" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 46 | defines | Listed as one of the four 25% weighted dimensions of the evaluation rubric. |
| .claude/skills/slo-designer/references/slo-design-patterns.md | 105 | used here | Listed as a pipeline SLI measuring the absence of data corruption or loss. |
| .claude/skills/slo-designer/SKILL.md | 94 | defines | Defined as an SLI category measuring the percentage of correct results. |

## Consumes
Generated artifacts, data pipeline outputs, and factual assertions.

## Produces
Verification assessments and numerical scores measuring accuracy and absence of errors.

## When applied
During output evaluation in evaluator-optimizer loops and in service-level objective monitoring.

## Sub-concepts
none

## Part of
evaluation-rubric

## Implementation status
clean

## Design notes
An evaluation dimension measuring factual accuracy, logical validity, and absence of errors in agent-generated artifacts and data pipeline operations.
