---
package: rjm
name: Medium
slug: medium
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Medium

## Definition — verbatim
> "Limited data exposure, session issues" — .agents/security/static-analysis-checklist.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 236 | defined here | Defined as severity tier for limited data exposure and session issues. |
| .claude/agents/security/references/dependency-risk-scoring.md | 18 | defined here | Defined as risk score 2.0-3.5 requiring documented mitigation. |
| .claude/agents/silent-failure-hunter.md | 127 | defined here | Defined as surfaced and handled errors with weak diagnostics or missing context. |
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 36 | defined here | Defined as MEDIUM provenance confidence constant. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 36 | defined here | Defined as MEDIUM classification confidence constant. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 112 | used here | Enum/string type annotation for finding severity. |
| .claude/skills/doc-accuracy/SKILL.md | 204 | defined here | Defined as inconsistent or confusing documentation correct in at least one location. |
| .claude/skills/threat-modeling/SKILL.md | 222 | defined here | Defined as requiring some skill or access in threat matrix. |
| templates/agents/silent-failure-hunter.shared.md | 137 | defined here | Defined in shared template as weak diagnostics error tier. |

## Consumes
Findings with moderate impact such as weak diagnostics, limited data exposure, or minor doc inconsistencies.

## Produces
Prioritized remediation recommendations that should be addressed in the current development cycle.

## When applied
Assigned when an issue poses limited impact and does not block production execution directly.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, other, script-bug, unimplemented-feature

## Design notes
The intermediate severity tier in rjm's classification framework, designating issues that introduce risk, incomplete diagnostics, or documentation inconsistencies without causing direct system compromise.
