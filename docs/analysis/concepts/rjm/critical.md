---
package: rjm
name: Critical
slug: critical
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critical

## Definition — verbatim
> "Remote code execution, full system compromise" — .agents/security/static-analysis-checklist.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 234 | defined here | Defined as severity tier for remote code execution and full system compromise. |
| .claude/agents/code-reviewer.md | 72 | defined here | Defined as 90-100 score range blocking merge, release, or production correctness. |
| .claude/agents/silent-failure-hunter.md | 125 | defined here | Defined as hidden or swallowed errors that never surface to caller or operator. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 112 | used here | Enum/string type annotation for finding severity. |
| .claude/skills/doc-accuracy/SKILL.md | 202 | defined here | Defined as non-compiling code or silently wrong behavior in documentation. |
| .claude/skills/review/SKILL.md | 144 | defined here | Defined as highest severity finding level alongside IMPORTANT and SUGGESTION. |
| .claude/skills/security-detection/SKILL.md | 85 | defined here | Defined as immediate security implications requiring mandatory review. |
| .claude/skills/threat-modeling/SKILL.md | 235 | defined here | Highest risk cell in likelihood/impact matrix. |
| docs/diagrams/routing-flowchart.md | 106 | used here | Flowchart decision node checking for critical issues. |
| docs/workflow-commands.md | 156 | defined here | Finding category in review workflow commands. |
| scripts/validation/pr_description.py | 27 | defined here | Defined in Severity literal type. |
| templates/agents/code-reviewer.shared.md | 82 | defined here | Defined in shared template as 90-100 blocking defect tier. |
| templates/agents/silent-failure-hunter.shared.md | 135 | defined here | Defined in shared template as suppressed or hidden error tier. |

## Consumes
Defect reports, static analysis violations, silent failure findings, or review comments.

## Produces
A blocking severity verdict preventing pull request merge, deployment, or documentation approval.

## When applied
Assigned when an issue causes confirmed system compromise, remote code execution, silent failure, or complete build failure.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug

## Design notes
The highest defect and vulnerability classification level in rjm, reserved for non-negotiable blocking issues such as security compromises, unhandled silent failures, and build-breaking defects.
