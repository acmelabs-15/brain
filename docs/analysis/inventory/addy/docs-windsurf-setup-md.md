---
package: addy
path: docs/windsurf-setup.md
type: doc
bytes: 1471
unit: inv-addy-5
---

# docs/windsurf-setup.md

## Purpose — required, verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7 (no explicit purpose statement)

## Design intent — required
Integration guide showing developers how to configure the Windsurf IDE (Codeium) to consume `agent-skills` by concatenating or copying `SKILL.md` markdown files into project-level `.windsurfrules` or global AI rules settings. Solves the problem of adapting a repository-agnostic skill library to Windsurf's rule-based context model while managing limited context windows through selective curation of 2-3 essential skills and on-demand reference pasting.

## Phase — required
`none`

## Inputs — required
- `skills/test-driven-development/SKILL.md` — docs/windsurf-setup.md:11, 33
- `skills/incremental-implementation/SKILL.md` — docs/windsurf-setup.md:13, 37
- `skills/code-review-and-quality/SKILL.md` — docs/windsurf-setup.md:15, 41
- `skills/security-and-hardening` — docs/windsurf-setup.md:47
- `references/security-checklist.md` — docs/windsurf-setup.md:48

## Outputs — required
- Project rules configuration file `.windsurfrules` (concatenated markdown instructions) — docs/windsurf-setup.md:7-16, 27-42
- Windsurf Global Rules configuration (Settings → AI → Global Rules) — docs/windsurf-setup.md:20-23

## Invokes — required
- skill test-driven-development — docs/windsurf-setup.md:11, 33
- skill incremental-implementation — docs/windsurf-setup.md:13, 37
- skill code-review-and-quality — docs/windsurf-setup.md:15, 41
- skill security-and-hardening — docs/windsurf-setup.md:47
- reference references/security-checklist.md — docs/windsurf-setup.md:48

## Invoked by — required
- README.md:149

## Concepts named — required, verbatim
- `Windsurf` — docs/windsurf-setup.md:1, 7, 20, 22, 27, 46, 48 — used here
- `.windsurfrules` — docs/windsurf-setup.md:7, 11, 12, 13, 14, 15, 27, 30 — defined here | used here
- `Project Rules` — docs/windsurf-setup.md:5 — defined here
- `Global Rules` — docs/windsurf-setup.md:18, 20, 22 — defined here
- `test-driven-development` — docs/windsurf-setup.md:11, 33 — used here
- `incremental-implementation` — docs/windsurf-setup.md:13, 37 — used here
- `code-review-and-quality` — docs/windsurf-setup.md:15, 41 — used here
- `security-and-hardening` — docs/windsurf-setup.md:47 — used here
- `security-checklist.md` — docs/windsurf-setup.md:48 — used here

## Structure
- `# Using agent-skills with Windsurf` — docs/windsurf-setup.md:1
- `## Setup` — docs/windsurf-setup.md:3
- `### Project Rules` — docs/windsurf-setup.md:5
- `### Global Rules` — docs/windsurf-setup.md:18
- `## Recommended Configuration` — docs/windsurf-setup.md:25
- `## Usage Tips` — docs/windsurf-setup.md:44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates purely static rule aggregation: unlike tools with dynamic loaders, Windsurf relies on static concatenation into `.windsurfrules`.
- Recommends limiting `.windsurfrules` to 2-3 essential skills (`test-driven-development`, `incremental-implementation`, `code-review-and-quality`) to prevent context window saturation (docs/windsurf-setup.md:27, 46).
- Recommends pasting situational skills (e.g. `security-and-hardening`) and checklists (`references/security-checklist.md`) directly into chat when relevant tasks arise (docs/windsurf-setup.md:47-48).

## Context cost
- File size: 1,471 bytes (~370 tokens).
- Transitive context cost: If the 3 recommended skills are concatenated into `.windsurfrules`, the static context overhead is ~46.5 KB (~11,600 tokens) loaded into every agent turn.
