---
package: rjm
name: Diagnosis
slug: diagnosis
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Diagnosis

## Definition — verbatim
> "## Diagnosis" — .claude/skills/retrospective/references/diagnosis-and-actions.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 86 | defined here | Outline heading for Phase 2 prioritizing analytical findings. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 11 | defined here | Reference section establishing the diagnosis priority order. |
| .claude/skills/retrospective/references/learning-template.md | 34 | used here | Template section heading organizing prioritized diagnostic findings. |
| .claude/skills/reviewer-findings/SKILL.md | 34 | defined here | Tri-part findings schema component representing the account of a defect reproduction. |

## Consumes
Causal insights, failure modes, and success patterns from Phase 1.

## Produces
Prioritized diagnostic findings categorized by operational impact.

## When applied
Third operational phase (Phase 2) of retrospective, sorting analytical findings into diagnostic tiers before deciding actions.

## Sub-concepts
critical-error-patterns, success-analysis, near-misses, efficiency-opportunities, skill-gaps

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction, orphan

## Design notes
Diagnosis is Phase 2 of the retrospective process. It evaluates and filters the causal insights generated in Phase 1 against a strict priority hierarchy (critical errors first, then successes, near misses, efficiency, and skill gaps) so that limited remediation capacity is allocated to the highest-risk issues.
