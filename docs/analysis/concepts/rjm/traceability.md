---
package: rjm
name: Traceability
slug: traceability
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Traceability

## Definition — verbatim
> "All decisions documented in `.agents/` directories" — .agents/AGENT-SYSTEM.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 24 | defined here | Listed in the Key Benefits table defining decision traceability in .agents/ directories. |
| .agents/governance/ears-format.md | 300 | defined here | Section heading defining upstream and downstream requirement traceability rules. |
| .claude/agents/critic.md | 121 | defined here | Table row defining the critic's verification of the REQ → DESIGN → TASK chain. |
| .claude/skills/skillforge/references/specification-template.md | 397 | defined here | Checklist section verifying requirements, success criteria, and anti-pattern traces. |
| scripts/validation/pre_pr_sequence.py | 299 | defined here | Validation gate definition executing validate_traceability in the pre-PR sequence. |
| scripts/validation/pre_pr.py | 18 | used here | CLI step description for validating specification links in pre-PR checks. |
| templates/agents/critic.shared.md | 125 | defined here | Template table row verifying intact REQ → DESIGN → TASK chains. |

## Consumes
Requirements, design specifications, task items, and code commits.

## Produces
Bi-directional links connecting user requirements through architecture designs to concrete tasks and tests.

## When applied
Applied during specification drafting, plan review by critic, PR validation, and release readiness checks.

## Sub-concepts
traceability-chains, specification-hierarchy

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Traceability ensures that every line of implemented code and every task traces back to an approved design and business requirement, and vice versa. By verifying unbroken REQ → DESIGN → TASK chains at both the critic agent level and automated pre-PR validation gates, rjm eliminates orphan tasks, unapproved scope additions, and untestable features.
