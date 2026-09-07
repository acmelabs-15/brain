---
package: rjm
name: Failure Modes
slug: failure-modes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Failure Modes

## Definition — verbatim
> "What goes wrong and why - minimum 3 anti-patterns with corrections" — .claude/skills/research-and-incorporate/references/workflow.md:164

## Also called — verbatim
> "## Failure Modes" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:68
> "### 4. Failure Modes (Pre-Mortem Lens)" — .claude/skills/review/references/decision-rigor.md:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 68 | defined here | Architecture template section mapping potential system failures to detection methods and mitigations. |
| .claude/skills/research-and-incorporate/references/workflow.md | 162 | defined here | Research workflow template section requiring analysis of at least three domain anti-patterns and corrections. |
| .claude/skills/research-and-incorporate/SKILL.md | 129 | defined here | Quality rubric row scoring comprehensive failure mode analysis in synthesized research. |
| .claude/skills/review/references/decision-rigor.md | 77 | defined here | Decision rigor review lens applying pre-mortem analysis to identify production failure vectors. |

## Consumes
Operational dependencies, potential error conditions, anti-patterns, and pre-mortem scenarios.

## Produces
Documented failure catalogs pairing failure scenarios with concrete detection triggers and mitigation strategies.

## When applied
Applied during architecture documentation, research synthesis, and decision review gating.

## Sub-concepts
pre-mortem, anti-patterns, mitigation-strategy

## Part of
architecture, research-and-incorporate, review

## Implementation status
clean (ARCHITECTURE.template.md, decision-rigor.md), defects: doc-drift (workflow.md), doc-drift, missing-path (SKILL.md)

## Design notes
Failure Modes forces proactive consideration of system breakdown vectors before they happen in production. Across architecture design, research synthesis, and decision review, rjm requires teams to employ pre-mortem thinking—mapping each foreseeable failure to its automated detection mechanism and proven mitigation strategy (circuit breakers, retries, degraded modes)—shifting the burden of proof from post-incident response to upfront design.
