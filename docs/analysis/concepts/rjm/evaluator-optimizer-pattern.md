---
package: rjm
name: evaluator-optimizer pattern
slug: evaluator-optimizer-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# evaluator-optimizer pattern

## Definition — verbatim
> "This aligns with Anthropic's evaluator-optimizer pattern from their agent design guidance." — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 38 | used here | Cited as the architectural foundation for multi-agent quality gate loops. |
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 923 | used here | Referenced as bounding iteration count in optimization loops. |

## Consumes
Candidate outputs, evaluation rubrics, and feedback history.

## Produces
Optimized artifacts meeting quality score thresholds or escalation triggers.

## When applied
When generating high-impact artifacts requiring automated quality assurance and refinement.

## Sub-concepts
generator-evaluator-regenerate-loop, evaluation-rubric, structured-feedback, regeneration-limit

## Part of
quality-gates-with-evaluator-optimizer-pattern

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
An agentic architectural pattern separating output generation from evaluation. One agent generates the artifact while an independent evaluator scores it against defined criteria and provides actionable feedback, allowing the generator to optimize the artifact iteratively within bounded limits.
