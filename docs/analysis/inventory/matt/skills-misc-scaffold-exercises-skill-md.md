---
package: matt
path: skills/misc/scaffold-exercises/SKILL.md
type: skill
bytes: 3589
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/scaffold-exercises/SKILL.md

## Purpose — required, verbatim
> "Create exercise directory structures that pass `pnpm ai-hero-cli internal lint`, then commit with `git commit`." — skills/misc/scaffold-exercises/SKILL.md:8

## Design intent — required
Course authoring automation skill designed to scaffold structured exercise directory trees (sections, exercise folders, and problem/solution/explainer subfolders) that comply with the strict validation rules of the `ai-hero-cli internal lint` tool. Standardizes dash-case naming, two-tier numeric numbering (`XX.YY`), minimal non-empty stub readmes, and git history preservation via `git mv`.

## Phase — required
none

## Inputs — required
Course curriculum outline or plan specifying section names, exercise titles/numbers, and designated variants (`problem`, `solution`, `explainer`).

## Outputs — required
Created exercise folder structures containing stub `readme.md` files (and optional `main.ts` code files) adhering to course linting rules, committed to git.

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/misc/README.md:7

## Concepts named — required, verbatim
- `scaffold-exercises` — skills/misc/scaffold-exercises/SKILL.md:2 — defined here
- `ai-hero-cli internal lint` — skills/misc/scaffold-exercises/SKILL.md:8 — used here
- `git commit` — skills/misc/scaffold-exercises/SKILL.md:8 — used here
- `Sections` — skills/misc/scaffold-exercises/SKILL.md:12 — defined here
- `Exercises` — skills/misc/scaffold-exercises/SKILL.md:13 — defined here
- `problem` — skills/misc/scaffold-exercises/SKILL.md:21 — defined here
- `solution` — skills/misc/scaffold-exercises/SKILL.md:22 — defined here
- `explainer` — skills/misc/scaffold-exercises/SKILL.md:23 — defined here
- `git mv` — skills/misc/scaffold-exercises/SKILL.md:69 — used here

## Structure
- Scaffold Exercises — skills/misc/scaffold-exercises/SKILL.md:6
- Directory naming — skills/misc/scaffold-exercises/SKILL.md:10
- Exercise variants — skills/misc/scaffold-exercises/SKILL.md:17
- Required files — skills/misc/scaffold-exercises/SKILL.md:27
- Workflow — skills/misc/scaffold-exercises/SKILL.md:44
- Lint rules summary — skills/misc/scaffold-exercises/SKILL.md:52
- Moving/renaming exercises — skills/misc/scaffold-exercises/SKILL.md:65
- Example: stubbing from a plan — skills/misc/scaffold-exercises/SKILL.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Encapsulates course-specific linting rules from Matt's AI Hero educational platform (e.g. forbidding `.gitkeep`, prohibiting `speaker-notes.md`, enforcing non-empty readmes, and requiring `main.ts` when code is present).

## Context cost
3589 bytes, 107 lines, approximately 800 tokens.
