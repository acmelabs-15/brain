---
package: rjm
name: deterministic-scorable output
slug: deterministic-scorable-output
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

# deterministic-scorable output

## Definition — verbatim
> "This methodology applies to agents with **deterministic-scorable output**:" — .agents/architecture/ADR-058-agent-eval-discipline.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 106 | defined here | Scope specification defining the class of structured agent outputs amenable to assertion-based evaluation. |

## Consumes
Agent response payloads containing structured verdicts, taxonomy identifiers (CWE, STRIDE), or formatted key-value pairs.

## Produces
Deterministic pass/fail signals and recall metrics verified by regular expressions and string matching.

## When applied
Used to establish the eligibility of an agent role for the ADR-058 empirical evaluation methodology.

## Sub-concepts
none

## Part of
agent-vs-baseline-efficacy, agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An agent output architecture pattern in ADR-058 that structures agent responses with predictable tokens, discrete verdicts, and standardized categorization labels. By formatting agent findings deterministically, responses can be checked directly against assertions without requiring subjective LLM-as-judge evaluation.
