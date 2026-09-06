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
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/scaffold-exercises/SKILL.md

## Purpose — required, verbatim
> "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section." — skills/misc/scaffold-exercises/SKILL.md:3

## Design intent — required
Scaffolding workflow for educational courses and tutorials (specifically AI Hero courses). Creates standardized directory hierarchies with numbered sections, exercise variants (`problem/`, `solution/`, `explainer/`), stub markdown readmes, and code files that adhere to validation rules enforced by `pnpm ai-hero-cli internal lint`. Guides renaming with `git mv` to preserve commit history.

## Phase — required
cross-phase

## Inputs — required
Course curriculum outline or plan specifying section names, exercise names, and variant subfolder requirements.

## Outputs — required
Directory trees under `exercises/` with `readme.md` files (and optional `main.ts` files), validated by linter and committed with git.

## Invokes — required
none

## Invoked by — required
- skill misc — skills/misc/README.md:7

## Concepts named — required, verbatim
- `scaffold-exercises` — skills/misc/scaffold-exercises/SKILL.md:2 — defined here
- `sections` — skills/misc/scaffold-exercises/SKILL.md:3 — used here
- `problems` — skills/misc/scaffold-exercises/SKILL.md:3 — used here
- `solutions` — skills/misc/scaffold-exercises/SKILL.md:3 — used here
- `explainers` — skills/misc/scaffold-exercises/SKILL.md:3 — used here
- `pnpm ai-hero-cli internal lint` — skills/misc/scaffold-exercises/SKILL.md:8 — used here
- `git commit` — skills/misc/scaffold-exercises/SKILL.md:8 — used here
- `exercises/` — skills/misc/scaffold-exercises/SKILL.md:12 — defined here
- `dash-case` — skills/misc/scaffold-exercises/SKILL.md:15 — defined here
- `Exercise variants` — skills/misc/scaffold-exercises/SKILL.md:17 — defined here
- `problem/` — skills/misc/scaffold-exercises/SKILL.md:21 — defined here
- `solution/` — skills/misc/scaffold-exercises/SKILL.md:22 — defined here
- `explainer/` — skills/misc/scaffold-exercises/SKILL.md:23 — defined here
- `stubbing` — skills/misc/scaffold-exercises/SKILL.md:25 — defined here
- `readme.md` — skills/misc/scaffold-exercises/SKILL.md:29 — used here
- `main.ts` — skills/misc/scaffold-exercises/SKILL.md:42 — used here
- `mkdir -p` — skills/misc/scaffold-exercises/SKILL.md:47 — used here
- `explainer.1/` — skills/misc/scaffold-exercises/SKILL.md:57 — used here
- `.gitkeep` — skills/misc/scaffold-exercises/SKILL.md:59 — used here
- `speaker-notes.md` — skills/misc/scaffold-exercises/SKILL.md:60 — used here
- `pnpm run exercise` — skills/misc/scaffold-exercises/SKILL.md:62 — used here
- `git mv` — skills/misc/scaffold-exercises/SKILL.md:69 — used here

## Structure
- `# Scaffold Exercises` — skills/misc/scaffold-exercises/SKILL.md:6
- `## Directory naming` — skills/misc/scaffold-exercises/SKILL.md:10
- `## Exercise variants` — skills/misc/scaffold-exercises/SKILL.md:17
- `## Required files` — skills/misc/scaffold-exercises/SKILL.md:27
- `## Workflow` — skills/misc/scaffold-exercises/SKILL.md:44
- `## Lint rules summary` — skills/misc/scaffold-exercises/SKILL.md:52
- `## Moving/renaming exercises` — skills/misc/scaffold-exercises/SKILL.md:65
- `## Example: stubbing from a plan` — skills/misc/scaffold-exercises/SKILL.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifically tailored to the `ai-hero-cli` linting harness used in Matt Pocock's courses. Specifies forbidden file types (`.gitkeep`, `speaker-notes.md`) that trigger lint failures.

## Context cost
3589 bytes, 107 lines, approximately 850 tokens.
