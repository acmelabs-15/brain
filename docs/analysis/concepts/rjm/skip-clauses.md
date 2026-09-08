---
package: rjm
name: SKIP clauses
slug: skip-clauses
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKIP clauses

## Definition — verbatim
> "Validate SKIP clauses for multi-member skill families." — scripts/validation/check_skill_skip_clauses.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_skip_clauses.py | 2 | defined here | Validates negative routing rules in skill frontmatter descriptions for multi-member families. |

## Consumes
`SKILL.md` frontmatter descriptions of sibling skills within a multi-member family.

## Produces
Negative routing directives (e.g., `Do NOT use ... use X instead`) preventing overlapping skill dispatch.

## When applied
Authored into `SKILL.md` description frontmatter whenever two or more skills share the same leading family prefix.

## Sub-concepts
skip-clause-pattern, paren-use-pattern, use-instead-pattern, semicolon-use-pattern

## Part of
multi-member-skill-families

## Implementation status
defects: script-bug

## Design notes
SKIP clauses are negative routing directives declared in `SKILL.md` frontmatter descriptions (for example, "Do NOT use [condition], use [sibling] instead"). In rjm's architecture, model dispatch relies on frontmatter descriptions to route tasks to appropriate skills; when multiple skills share overlapping domain tokens, explicit SKIP clauses prevent ambiguous or incorrect tool selection and ensure complete connectivity across sibling skills.
