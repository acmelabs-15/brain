---
package: rjm
name: Experimental Design Symmetry
slug: experimental-design-symmetry
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Experimental Design Symmetry

## Definition — verbatim
(used, not defined)

> "### Experimental Design Symmetry (Normative)" — .agents/architecture/ADR-058-agent-eval-discipline.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 74 | defined here | Section heading establishing normative requirement that agent and baseline variants receive identical user prompts. |
| scripts/eval/_providers.py | 20 | used here | Docstring citing ADR-058 requirement for cross-provider symmetry in evaluation execution. |

## Consumes
Experimental test fixtures, identical user messages, and single-variable system prompt variations.

## Produces
Scientifically sound between-subjects comparative evaluations where system prompt content is the sole free variable.

## When applied
Mandatory for all agent-vs-baseline evaluation harness designs and cross-provider evaluation executions.

## Sub-concepts
output-shape-suffix, baseline-prompt

## Part of
agent-vs-baseline-efficacy, agent-eval-discipline

## Implementation status
defects: doc-drift

## Design notes
A fundamental experimental control doctrine in ADR-058 requiring that agent and baseline variants receive strictly identical user messages, formatting suffixes, and API providers. By isolating the system prompt as the only free variable, it prevents output-format asymmetry from corrupting evaluation results and ensures measured deltas reflect genuine prompt capability.
