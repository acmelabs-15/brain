---
package: matt
path: skills/misc/README.md
type: skill
bytes: 684
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/README.md

## Purpose — required, verbatim
> "Tools I keep around but rarely use, not promoted in the plugin." — skills/misc/README.md:3

## Design intent — required
Directory catalog and index for miscellaneous utility skills in the repository that are maintained for personal or niche use but not actively promoted in the primary plugin interface. Indexes guardrails, test migration, course exercise scaffolding, and pre-commit setup.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill git-guardrails-claude-code — skills/misc/README.md:5
- skill migrate-to-shoehorn — skills/misc/README.md:6
- skill scaffold-exercises — skills/misc/README.md:7
- skill setup-pre-commit — skills/misc/README.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `plugin` — skills/misc/README.md:3 — used here
- `git-guardrails-claude-code` — skills/misc/README.md:5 — used here
- `Claude Code hooks` — skills/misc/README.md:5 — used here
- `git commands` — skills/misc/README.md:5 — used here
- `migrate-to-shoehorn` — skills/misc/README.md:6 — used here
- `test files` — skills/misc/README.md:6 — used here
- `type assertions` — skills/misc/README.md:6 — used here
- `@total-typescript/shoehorn` — skills/misc/README.md:6 — used here
- `scaffold-exercises` — skills/misc/README.md:7 — used here
- `exercise directory structures` — skills/misc/README.md:7 — used here
- `sections` — skills/misc/README.md:7 — used here
- `problems` — skills/misc/README.md:7 — used here
- `solutions` — skills/misc/README.md:7 — used here
- `explainers` — skills/misc/README.md:7 — used here
- `setup-pre-commit` — skills/misc/README.md:8 — used here
- `Husky pre-commit hooks` — skills/misc/README.md:8 — used here
- `lint-staged` — skills/misc/README.md:8 — used here
- `Prettier` — skills/misc/README.md:8 — used here
- `type checking` — skills/misc/README.md:8 — used here
- `tests` — skills/misc/README.md:8 — used here

## Structure
- `# Misc` — skills/misc/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the four skills grouped under `skills/misc/`. All four are utility or developer tooling skills rather than core design/engineering lifecycle stages.

## Context cost
684 bytes, 9 lines, approximately 120 tokens.
