---
package: matt
name: scaffold-exercises
slug: scaffold-exercises
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scaffold-exercises

## Definition — verbatim
> "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section." — skills/misc/scaffold-exercises/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Catalogs the skill as a tool for creating exercise directory structures. |
| skills/misc/scaffold-exercises/SKILL.md | 2 | defined here | Defines the skill name and frontmatter metadata for exercise directory generation. |

## Consumes
Course curriculum outline or plan specifying section names, exercise names, and variant types.

## Produces
Exercise directory hierarchies under `exercises/` with stub `readme.md` files (and optional `main.ts` files), validated by `pnpm ai-hero-cli internal lint`.

## When applied
> "Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section." — skills/misc/scaffold-exercises/SKILL.md:3

## Sub-concepts
exercise-directory-structures, sections, problems, solutions, explainers, exercises, dash-case, exercise-variants, problem, explainer, stubbing, main-ts, explainer-1, gitkeep, speaker-notes-md, pnpm-run-exercise, git-mv

## Part of
none

## Implementation status
clean

## Design notes
A specialized course-authoring skill for scaffolding structured educational modules. It automates the generation of multi-variant exercise directories (`problem/`, `solution/`, `explainer/`) adhering to strict naming and linting conventions, ensuring that course repositories pass automated linter validation.
