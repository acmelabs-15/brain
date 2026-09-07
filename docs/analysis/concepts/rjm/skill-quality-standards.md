---
package: rjm
name: Skill Quality Standards
slug: skill-quality-standards
kind: checklist
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Quality Standards

## Definition — verbatim
> "### 4. Skill Quality Standards" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 182 | defined here | Section heading defining required elements, description quality, and structural constraints for skills. |

## Consumes
Candidate skill definitions, instructions, and frontmatter declarations.

## Produces
Verified skills meeting character bounds, trigger requirements, and modularity rules.

## When applied
When authoring or modifying skills, enforced during SkillForge validation and pre-commit checks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Skill Quality Standards define the baseline verification criteria for all skills in rjm, mandating description-based keyword triggering, concise body instructions, and modular decomposition to prevent prompt bloat and invocation failure.
