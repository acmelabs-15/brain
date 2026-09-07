---
package: rjm
name: Root cause analysis
slug: root-cause-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Root cause analysis

## Definition — verbatim
> "Why is this skill needed? (Asked 5 times)" — .claude/skills/skillforge/references/multi-lens-framework.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 10 | used here | Cites prior root cause analysis on quality gate comment caching to identify false failure causes. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 25 | used here | Included as one of the multi-lens analytical perspectives applied during skill design. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 94 | defined here | Defined as an essential section of diagnostic analysis evaluating why failures occurred or what contributed to successes. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 236 | defined here | Formalized as Lens 9 using the 5 Whys technique to identify fundamental root drivers for skill design. |
| scripts/security/invoke_security_retrospective.py | 509 | used here | Formats a root cause analysis section in generated security retrospective markdown reports. |

## Consumes
Incident reports, test failure outputs, false-positive alerts, and design proposals.

## Produces
Causal chains, identified root causes (via 5 Whys), preventative action items, and retrospective patterns.

## When applied
Conducted during post-incident reviews, retrospectives, skill design formulation, and quality gate debugging.

## Sub-concepts
none

## Part of
diagnostic-analysis, multi-lens-framework

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104; .claude/skills/cva-analysis/references/SKILL_SPEC.md:118); orphan, doc-drift (scripts/security/invoke_security_retrospective.py:98); clean in .claude/skills/retrospective/references/diagnosis-and-actions.md and .claude/skills/skillforge/references/multi-lens-framework.md

## Design notes
`Root cause analysis` provides a disciplined recursive method (such as the 5 Whys) to probe beyond superficial symptoms, uncovering structural, organizational, or prompt-level causes behind defects and requirements.
