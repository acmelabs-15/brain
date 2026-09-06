---
package: addy
name: Follow Project Conventions
slug: follow-project-conventions
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Follow Project Conventions

## Definition — verbatim
> "Simplification means making code more consistent with the codebase, not imposing external preferences." — skills/code-simplification/SKILL.md:44-46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 44 | defined here | Second core principle requiring refactorings to align with local codebase patterns and project style guides. |

## Consumes
Project configuration files (`CLAUDE.md`, linter settings, style guides) and neighboring idioms in the codebase.

## Produces
Refactored code conforming strictly to project conventions for import ordering, function style, naming, error handling, and type annotation depth.

## When applied
When reviewing, planning, or applying code simplifications across a project.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A principle constraining refactorings to reinforce the codebase's existing conventions rather than introducing personal or external stylistic preferences that produce churn and cognitive dissonance.
