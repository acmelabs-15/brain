---
package: rjm
name: validate-skill.py
slug: validate-skill-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate-skill.py

## Definition — verbatim
(used, not defined)

> "`validate-skill.py` gates each skill's `description` individually (<=1024 chars," — scripts/skill_description_budget.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 374 | used here | Cited as the Lefthook staged-file validation script gating skill frontmatter. |
| scripts/skill_description_budget.py | 4 | used here | Cited in docstring as the per-skill description length validator. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
A Python script filename identifying the SkillForge validation script that enforces frontmatter syntax and description length limits, classified as name-only per D-023.
