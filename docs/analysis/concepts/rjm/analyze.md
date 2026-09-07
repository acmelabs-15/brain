---
package: rjm
name: analyze
slug: analyze
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# analyze

## Definition — verbatim
> "name: analyze" — .claude/skills/analyze/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 2 | defined here | Declares skill name for systematic multi-step codebase analysis. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 11 | defined here | Step 2 of four-phase process: Classify -> Analyze -> Evaluate -> Decide. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 109 | defined here | Specification for Phase 2: Analyze quantifying total cost of ownership. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 53 | defined here | Phase 2 in process quick reference covering TCO and team capacity. |
| .claude/skills/code-qualities-assessment/SKILL.md | 70 | used here | Recommends analyze skill for broad codebase investigations and security assessments. |
| .claude/skills/doc-accuracy/SKILL.md | 9 | used here | Recommends analyze skill instead of doc-accuracy for broad codebase analysis. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 16 | used here | Single-word skill reference handled in reference patterns regex. |
| .claude/skills/retrospective/references/frameworks.md | 22 | defined here | Step 3 of 4-Step Debrief activity analyzing patterns in agent behavior. |
| .claude/skills/security-scan/SKILL.md | 270 | used here | Related skill for general code analysis with security focus option. |
| scripts/eval/eval-knowledge-integration.py | 194 | used here | Test suite scenario evaluation key for analyze skill knowledge integration. |

## Consumes
Target codebase, user problem statement, focus criteria (architecture, security, code quality).

## Produces
Multi-step investigation report, prioritized severity findings with file:line citations, and actionable recommendations.

## When applied
Invoked when the user requests codebase analysis, architecture review, security assessment, or code quality evaluation.

## Sub-concepts
systematic-multi-step-codebase-analysis, architecture-reviews, security-assessments, code-quality-evaluations, guided-exploration

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
`analyze` is the canonical multi-step exploration and diagnostic skill in `rjm`. It combines an external Python state machine (`analyze.py`) with staged subagent exploration, structured hypothesis planning, deep evidence gathering, and synthesis.
