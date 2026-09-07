---
package: rjm
name: Modularity score
slug: modularity-score
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Modularity score

## Definition — verbatim
> "| Modularity score | >=80 | Run the audit script |" — .claude/skills/skillforge/references/modularity-guidelines.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/modularity-guidelines.md | 48 | defined here | Defined in modularity guideline table as an audit threshold requiring a score of >=80. |

## Consumes
Skill repository directory, SKILL.md line counts, and script/reference structure.

## Produces
A numerical audit score (0-100) and automated refactoring recommendations.

## When applied
Applied during skill authoring and CI audits via skill_modularity_audit.py to enforce focused skill design.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, other, exit-code-mismatch

## Design notes
Modularity score is an automated quality gate metric calculated by skill_modularity_audit.py that penalizes bloated SKILL.md files, missing progressive disclosure directories, and excessive section counts. It enforces the rjm standard of keeping core skill definitions focused while pushing procedural depth into scripts and references.
