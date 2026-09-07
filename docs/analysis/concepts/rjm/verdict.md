---
package: rjm
name: Verdict
slug: verdict
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verdict

## Definition — verbatim
> "Verdict = Literal[\"PASS\", \"WARN\", \"CRITICAL_FAIL\"]" — .claude/skills/orphan-ref-validator/scripts/envelope.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 36 | defined here | Primary definition of `Verdict` within envelope.py. |
| .claude/skills/review/references/decision-rigor.md | 121 | defined here | Primary definition of `Verdict` within decision-rigor.md. |
| .claude/skills/review/references/devops.md | 243 | defined here | Primary definition of `Verdict` within devops.md. |
| .claude/skills/review/references/observability.md | 111 | defined here | Primary definition of `Verdict` within observability.md. |
| .claude/skills/review/references/reliability.md | 121 | defined here | Primary definition of `Verdict` within reliability.md. |
| .claude/skills/review/references/roadmap.md | 147 | defined here | Primary definition of `Verdict` within roadmap.md. |
| .claude/skills/review/references/security.md | 142 | defined here | Primary definition of `Verdict` within security.md. |
| .claude/skills/review/references/spec-compliance.md | 122 | defined here | Primary definition of `Verdict` within spec-compliance.md. |
| .claude/skills/reviewer-findings/SKILL.md | 33 | defined here | Primary definition of `Verdict` within SKILL.md. |
| scripts/ci/artifact_write_summary.py | 11 | used here | Referenced and applied in artifact_write_summary.py during verification and operational workflows. |
| scripts/ci/parse_ai_review_output.py | 76 | used here | Referenced and applied in parse_ai_review_output.py during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path, orphan

## Design notes
An operational technique or artifact (Verdict) utilized within the rjm ecosystem to ensure consistency and systematic execution.
