---
package: rjm
name: Recommendations
slug: recommendations
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Recommendations

## Definition — verbatim
> "### Phase 4: Recommendations" — .claude/agents/quality-auditor.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 75 | defines | Phase 4 of quality auditor generating prioritized quick wins, medium tasks, and large refactoring actions. |
| .claude/skills/adr-review/references/artifacts.md | 40 | defines | Section in ADR review artifact providing actionable proposals and alternative architectural choices. |
| .claude/skills/analyze/scripts/analyze.py | 369 | defines / applies | XML tag structure in code analysis tool output framing synthesized improvement advice. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 51 | defines | TypedDict schema defining structured skill reorganization recommendations. |
| .claude/skills/review/references/reliability.md | 117 | defines | Section in reliability review rubric detailing corrective architectural and testing guidance. |
| .claude/skills/review/references/roadmap.md | 143 | defines | Section in roadmap review rubric outlining sequencing adjustments and timeline recommendations. |
| .claude/skills/review/references/security.md | 138 | defines | Section in security review rubric specifying vulnerability remediations and hardening steps. |
| .claude/skills/review/references/spec-compliance.md | 118 | defines | Section in specification compliance review rubric listing conformance remediation steps. |

## Consumes
Identified deficiencies, review findings, gap analysis, and risk assessments.

## Produces
Actionable, prioritized corrective measures categorized by impact and implementation effort.

## When applied
Concluding stage of audits, architectural reviews, and deep analysis workflows.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
clean

## Design notes
The conclusive action-oriented phase and artifact section across audits and reviews (including quality audits, ADR evaluations, and multi-axis code reviews). It transforms analytical findings and gaps into concrete, prioritized engineering proposals (quick wins, medium fixes, and structural refactorings) so teams can remediate issues immediately.
