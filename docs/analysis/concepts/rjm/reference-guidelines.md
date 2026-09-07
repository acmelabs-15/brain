---
package: rjm
name: Reference/Guidelines
slug: reference-guidelines
kind: pattern
package_phase: rjm:Phase 0: Skill Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reference/Guidelines

## Definition — verbatim
> "### 3. Reference/Guidelines (standards and conventions)" — .claude/skills/skillforge/scripts/init_skill.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 224 | defined here | Defined in PATTERNS_GUIDE as the skill organization pattern for standards, conventions, rules by category, and examples. |

## Consumes
Domain standards, conventions, categorized rules, and examples.

## Produces
Scaffolded reference skill structured around categorized rules, examples, and anti-patterns.

## When applied
Used when authoring skills that codify style guides, API conventions, and architectural standards.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
SkillForge organization pattern designed for standards codification and rule retrieval. Organizing rules into explicit categories with positive examples and anti-patterns enables agents to reliably verify compliance against engineering conventions.
