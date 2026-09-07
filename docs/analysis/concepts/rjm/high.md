---
package: rjm
name: High
slug: high
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# High

## Definition — verbatim
> "Data breach, authentication bypass" — .agents/security/static-analysis-checklist.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 235 | defined here | Defined as severity tier for data breaches and authentication bypass. |
| .claude/agents/code-reviewer.md | 73 | defined here | Defined as 80-89 score range for real defects with clear impact. |
| .claude/agents/security/references/dependency-risk-scoring.md | 19 | defined here | Defined as risk score >3.5 requiring ADR approval. |
| .claude/agents/silent-failure-hunter.md | 126 | defined here | Defined as surfaced errors with inadequate handling or generic messages. |
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 35 | defined here | Defined as HIGH provenance confidence constant. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 35 | defined here | Defined as HIGH classification confidence constant. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 112 | used here | Enum/string type annotation for finding severity. |
| .claude/skills/doc-accuracy/SKILL.md | 203 | defined here | Defined as materially misleading documentation without immediate failure. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 46 | defined here | Defined as HIGH severity constant for prose lint rules. |
| .claude/skills/security-detection/SKILL.md | 86 | defined here | Defined as potential security impact recommending review. |
| .claude/skills/threat-modeling/SKILL.md | 221 | defined here | Defined as exploitable with public tools and no authentication. |
| docs/diagrams/routing-flowchart.md | 109 | used here | Flowchart routing node for high-risk path. |
| templates/agents/code-reviewer.shared.md | 83 | defined here | Defined in shared template as 80-89 score range. |
| templates/agents/silent-failure-hunter.shared.md | 136 | defined here | Defined in shared template as inadequate error handling tier. |

## Consumes
Identified security vulnerabilities, code defects, misleading documentation, or high-risk dependencies.

## Produces
An elevated finding prioritization requiring documented mitigation, escalation, or remediation before release.

## When applied
Assigned when an issue causes significant data exposure, real functional correctness defects, or high dependency risk.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug, unimplemented-feature

## Design notes
The second-tier severity classification level in rjm, applied to defects and vulnerabilities with significant security, correctness, or maintenance impact that warrant strong review and mitigation.
