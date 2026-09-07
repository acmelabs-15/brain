---
package: rjm
name: CRITICAL_FAIL
slug: critical-fail
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CRITICAL_FAIL

## Definition — verbatim
> "Produces per-gate verdicts: PASS, WARN, or CRITICAL_FAIL" — docs/workflow-commands.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 100 | used here | Strict blocking verdict issued by architect agent gate when ADR exceptions omit Chesterton's Fence analysis. |
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 10 | used here | Target gate verdict requiring actionable remediation details in quality gate prompt evaluations. |
| .claude/agents/qa.md | 211 | defined here | Verdict issued by QA agent when test evidence verifies code structure rather than genuine behavior. |
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 10 | used here | Documented verdict payload structure returned when unresolved broken references are detected. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 20 | used here | Execution verdict returned by orphan reference scanner when finding unresolved path references. |
| .claude/skills/review/references/decision-rigor.md | 127 | used here | Blocking verdict assigned to architectural decisions lacking empirical evidence or risk assessment. |
| .claude/skills/review/references/devops.md | 249 | used here | Verdict assigned to CI/CD pipeline modifications violating security guardrails or reproducibility. |
| .claude/skills/review/references/observability.md | 117 | used here | Verdict issued when critical instrumentation, monitoring, or logging requirements are omitted. |
| .claude/skills/review/references/qa.md | 201 | used here | Standard evaluation outcome for test omissions, mock misuse, or regression test failures. |
| .claude/skills/review/scripts/validate_findings_scope.py | 54 | used here | Validation condition checking that review findings justify a blocking CRITICAL_FAIL verdict. |
| .claude/skills/review/SKILL.md | 29 | used here | Top-level review phase outcome indicating severe blockers preventing pull request merge. |
| docs/getting-started.md | 77 | used here | User-facing documentation describing review gate failure outcomes and mandatory fixes. |
| docs/technical-guardrails.md | 52 | used here | Documented enforcement outcome triggered when code violates fundamental technical guardrails. |
| docs/workflow-commands.md | 125 | defined here | Lifecycle command specification defining gate verdicts produced during automated `/test` execution. |
| scripts/quality_gate/check_critical_failures.py | 19 | used here | CI gate script checking review reports and failing with non-zero exit when CRITICAL_FAIL exists. |
| scripts/README.md | 60 | used here | Script documentation detailing automated CI check for critical review failures. |

## Consumes
Quality gate audit findings, broken reference scans, security vulnerabilities, or test rigor violations.

## Produces
A blocking pull request gate signal and non-zero CI exit preventing automated or manual merge.

## When applied
Emitted whenever an automated validator, reviewing agent, or quality gate identifies a severity-0/P0 defect, safety violation, or governance breach.

## Sub-concepts
none

## Part of
- review-gate

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan

## Design notes
`CRITICAL_FAIL` is the definitive merge-blocking gate verdict across rjm's lifecycle phases. Emitted across functional QA, security scanning, architecture review, and DevOps validation, a CRITICAL_FAIL verdict halts the pipeline and requires explicit developer or agent remediation. Unlike advisory warnings (`WARN`), it cannot be ignored, ensuring that severe defects and broken invariants cannot enter the mainline repository.
