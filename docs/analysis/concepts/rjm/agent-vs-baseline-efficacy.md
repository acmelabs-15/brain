---
package: rjm
name: Agent-vs-Baseline Efficacy
slug: agent-vs-baseline-efficacy
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent-vs-Baseline Efficacy

## Definition — verbatim
(used, not defined)

> "# ADR-058: Agent Eval Discipline (Agent-vs-Baseline Efficacy)" — .agents/architecture/ADR-058-agent-eval-discipline.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 21 | defined here | Title and context establishing empirical methodology to evaluate specialized agent prompts against a naive baseline. |

## Consumes
Specialized agent system prompts, naive baseline prompts, test fixture corpora, and model API providers.

## Produces
Between-subjects comparative evaluation metrics, recall deltas, confidence intervals, and recommendation verdicts.

## When applied
Conducted before shipping new specialized agents or adopting agent prompts to verify that specialization produces measurable improvements over a naive baseline.

## Sub-concepts
between-subjects, deterministic-only-gated-signal, experimental-design-symmetry

## Part of
agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An empirical evaluation methodology codified in ADR-058 designed to answer whether a specialized agent prompt actually outperforms a naive baseline prompt. By running between-subjects comparisons with strict experimental symmetry and deterministic scoring, it replaces subjective assumptions about agent value with statistical evidence.
