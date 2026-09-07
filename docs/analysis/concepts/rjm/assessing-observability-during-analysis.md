---
package: rjm
name: Assessing Observability During Analysis
slug: assessing-observability-during-analysis
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Assessing Observability During Analysis

## Definition — verbatim
(used, not defined)

> "When analyzing a codebase, check for these gaps:" — .claude/skills/analyze/references/reliability-observability-pillars.md:76-78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 76 | defined here | Audit framework for evaluating telemetry gaps, missing correlation, and cardinality risks during codebase analysis. |

## Consumes
Target codebase source code, configuration files, error handlers, and telemetry instrumentation.

## Produces
Catalog of observability gaps rated by severity (High, Medium, Low) with actionable remediation targets.

## When applied
During codebase analysis, technical due diligence, or architecture review when evaluating system production-readiness.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Assessing Observability During Analysis provides an explicit audit checklist for evaluating the telemetry maturity of a target codebase during analysis. By categorizing common anti-patterns—such as error swallowing, missing trace propagation, and unbounded metric cardinality—with standardized severity ratings, it ensures technical assessments consistently identify operational risk before deployment or refactoring.
