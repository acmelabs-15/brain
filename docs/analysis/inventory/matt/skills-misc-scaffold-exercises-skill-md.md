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
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/scaffold-exercises/SKILL.md

## Purpose — required, verbatim
> "Create exercise directory structures that pass `pnpm ai-hero-cli internal lint`, then commit with `git commit`." — skills/misc/scaffold-exercises/SKILL.md:8

## Design intent — required
Scaffolds structured course exercise directories compliant with the AI Hero course authoring format and linter (`pnpm ai-hero-cli internal lint`). Enforces two-level numeric dash-case directory conventions (`XX-section-name/XX.YY-exercise-name/`), required variant subfolders (`problem/`, `solution/`, `explainer/`), and required file conventions (`readme.md`, `main.ts`). Provides workflows for parsing plans, creating directories, stubbing, linting, and renaming via `git mv`.

## Phase — required
cross-phase

## Inputs — required
Curriculum plan specifying section names, exercise titles, and variant subfolder requirements.

## Outputs — required
Exercise directory structure under `exercises/` with `readme.md` and optional `main.ts` files; git commits.

## Invokes — required
none

## Invoked by — required
- doc skills/misc/README.md — skills/misc/README.md:7

## Concepts named — required, verbatim
- `Sections` — skills/misc/scaffold-exercises/SKILL.md:12 — defined here
- `Exercises` — skills/misc/scaffold-exercises/SKILL.md:13 — defined here
- `problem/` — skills/misc/scaffold-exercises/SKILL.md:21 — defined here
- `solution/` — skills/misc/scaffold-exercises/SKILL.md:22 — defined here
- `explainer/` — skills/misc/scaffold-exercises/SKILL.md:23 — defined here
- `pnpm ai-hero-cli internal lint` — skills/misc/scaffold-exercises/SKILL.md:49 — used here

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
Coupled to the proprietary `ai-hero-cli internal lint` tool used for Total TypeScript / AI Hero courses. Kept under `skills/misc/` as authoring tooling rather than general-purpose lifecycle automation.

## Context cost
3589 bytes (~880 tokens).
