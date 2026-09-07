---
package: rjm
name: risk
slug: risk
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# risk

## Definition — verbatim
> "| **Risk** | 30% | Vendor risk, Execution risk, Regulatory risk, Lock-in risk |" — .claude/skills/buy-vs-build-framework/SKILL.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 114 | used here | Primary category in criteria JSON assigned a 30.0% weighting in decision scoring. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 165 | defined here | Defined in decision matrix weights table as an evaluation category assessing vendor, execution, regulatory, and lock-in vulnerabilities. |
| .claude/skills/pre-mortem/scripts/pre-mortem.py | 39 | defined here | Dataclass representing an individual risk entry with description, impact, probability, and mitigation plan. |
| templates/agents/roadmap.shared.md | 117 | defined here | Section heading in shared roadmap template requiring explicit failure modes and mitigations for roadmap initiatives. |

## Consumes
Threat models, architectural dependency graphs, regulatory compliance mandates, and pre-mortem failure analyses.

## Produces
Evaluated risk ratings, mitigation strategies, and risk sub-scores within decision matrices.

## When applied
Applied during roadmap formulation, pre-mortem risk audits, and strategic sourcing decisions.

## Sub-concepts
none

## Part of
decision-matrix-scores, pre-mortem

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
Across rjm, risk functions both as an explicit dimension in decision matrices and as a structured data model in pre-mortem exercises and roadmaps. By requiring teams to systematically enumerate vendor vulnerabilities, technical lock-in, compliance exposures, and execution risks before committing to architectural paths, the package guards against catastrophic downside surprises.
