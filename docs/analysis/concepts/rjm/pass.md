---
package: rjm
name: PASS
slug: pass
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_vendor.py, sha256: 061027f393d2466c4024469e1804be4c726a1aa7e66475037f83ae4fd8eee157}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PASS

## Definition — verbatim
> "4. Produces per-gate verdicts: PASS, WARN, or CRITICAL_FAIL" — docs/workflow-commands.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 198 | defined here | Recommendation string assigned when a vendor achieves an aggregate score greater than 70 points. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 1095 | defined here | Final verification verdict returned when zero blocking documentation discrepancies are detected. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 19 | used here | Exit code 0 semantic condition indicating no critical reference findings exist. |
| .claude/skills/planner/scripts/planner.py | 455 | used here | Expected review verdict enumerated in subagent delegation XML template. |
| .claude/skills/planner/SKILL.md | 90 | used here | Exit criteria checklist condition requiring review phase verdict to be PASS or PASS_WITH_CONCERNS. |
| .claude/skills/review/references/decision-rigor.md | 125 | used here | Verdict indicating an architectural decision is well-reasoned, evidenced, and compliant with standards. |
| .claude/skills/review/references/devops.md | 247 | used here | Verdict indicating CI/CD and deployment configurations are safe and properly specified. |
| .claude/skills/review/references/observability.md | 115 | used here | Verdict indicating system telemetry, logging, and metrics are sufficient for reliable operations. |
| .claude/skills/review/references/qa.md | 243 | used here | Heading declaring standard-met quality assurance assessment verdict. |
| .claude/skills/review/scripts/validate_findings_scope.py | 54 | used here | Regular expression token recognized as a valid verdict string in finding scope validation. |
| .claude/skills/review/SKILL.md | 33 | used here | Permissible shipment condition under the self-audit review round cap protocol. |
| docs/workflow-commands.md | 125 | defined here | Enumerated primary verdict emitted by specialized review and workflow quality gates. |
| scripts/eval/eval-rule-activation.py | 1718 | defined here | Success return value indicating evaluated rule activation met performance thresholds. |

## Consumes
Execution results, linting checks, verification tests, and review findings.

## Produces
Affirmative authorization enabling progression to subsequent development, merge, or release phases.

## When applied
Emitted when an artifact, code change, plan, or vendor candidate satisfies all required quality criteria without blocking defects.

## Sub-concepts
none

## Part of
quality-gates, review

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
PASS is the primary affirmative verdict spanning all validation scripts, review axes, workflow gates, and evaluation engines in rjm. It establishes a binary or tri-state gate ensuring that work artifacts meet rigorous baseline standards before merging, deploying, or transitioning across lifecycle phases.
