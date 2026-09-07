---
package: rjm
name: Frontmatter Requirements
slug: frontmatter-requirements
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontmatter Requirements

## Definition — verbatim
> "Skills must use only these allowed frontmatter properties:" — .claude/skills/skillforge/references/output-structure.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/output-structure.md | 3 | defined here | Section heading defining allowed YAML frontmatter properties and validation rules. |

## Consumes
Skill YAML frontmatter blocks in SKILL.md.

## Produces
Validation verdicts ensuring only approved metadata properties (name, description, license, allowed-tools, model) are present.

## When applied
Applied during skill authoring and pre-commit validation to ensure frontmatter adheres strictly to platform schemas.

## Sub-concepts
none

## Part of
skill-output-structure

## Implementation status
clean

## Design notes
Frontmatter Requirements restrict SKILL.md frontmatter to a minimal, strictly validated set of properties (name, description, license, allowed-tools, model) with character length and format constraints. In rjm, this prevents invalid configurations from causing parser failures across diverse CLI agent harnesses.
