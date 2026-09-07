---
package: rjm
name: 4-Plugin vs 2-Plugin Model
slug: 4-plugin-vs-2-plugin-model
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 4-Plugin vs 2-Plugin Model

## Definition — verbatim
(used, not defined)

> "### P1-10: 4-Plugin vs 2-Plugin Model (Analyst)" — .agents/critique/ADR-045-debate-log.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 99 | defined here | Debated by Analyst as a P1 consideration regarding maintenance overhead versus modularity. |

## Consumes
Decomposed framework components (agents, skills, protocol, gates), maintenance overhead metrics.

## Produces
Comparative evaluation of distribution architectures (4 granular plugins vs. 2 consolidated plugins).

## When applied
Evaluated during ADR-045 architectural review to determine the target plugin distribution structure.

## Sub-concepts
4-plugin-model

## Part of
none

## Implementation status
defects: cross-file-contradiction

## Design notes
`4-Plugin vs 2-Plugin Model` represents the architectural trade-off analysis debated in ADR-045 comparing a 4-plugin modular distribution (core-agents, framework-skills, session-protocol, quality-gates) against a consolidated 2-plugin model (core + extensions) to evaluate maintenance costs against granularity.
