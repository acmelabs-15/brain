---
package: rjm
name: LLM-as-judge sidecar
slug: llm-as-judge-sidecar
kind: pattern
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

# LLM-as-judge sidecar

## Definition — verbatim
> "It produces a deterministic-only gated signal, supplemented by an optional advisory LLM-as-judge sidecar." — .agents/architecture/ADR-058-agent-eval-discipline.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 53 | defined here | Architectural decision establishing an optional, advisory LLM scoring sidecar that does not gate execution. |

## Consumes
Agent execution outputs and qualitative scoring rubrics.

## Produces
Advisory qualitative scores, semantic evaluations, and human-readable feedback.

## When applied
Optionally executed alongside evaluation runs to provide qualitative insights without affecting automated gate decisions.

## Sub-concepts
none

## Part of
agent-vs-baseline-efficacy, agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An evaluation architecture pattern in ADR-058 that decouples qualitative assessment from pipeline gating. By running LLM evaluation as an optional advisory "sidecar" alongside deterministic gates, rjm gains qualitative qualitative feedback while preventing LLM judge flakiness and subjectivity from causing CI pipeline failures.
