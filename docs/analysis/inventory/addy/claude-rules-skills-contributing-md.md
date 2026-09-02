---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-4
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Provides a path-scoped Claude Code rule (`paths: ["skills/**"]`) that enforces pre-flight catalog checks, checks open pull requests (`gh pr list --state open`), mandates extending existing skills rather than introducing overlapping duplicates, enforces `docs/skill-anatomy.md` compliance, and references `CONTRIBUTING.md` as the single source of truth.

## Phase — required
`cross-phase`

## Inputs — required
- File modifications matching `skills/**`

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — .claude/rules/skills-contributing.md:11, 15
- doc docs/skill-anatomy.md — .claude/rules/skills-contributing.md:13

## Invoked by — required
- Claude Code rules engine (scoped to `skills/**`)

## Concepts named — required, verbatim
- `Anti-duplication guardrail` — .claude/rules/skills-contributing.md:2 — defined here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `single source of truth` — .claude/rules/skills-contributing.md:15 — used here

## Structure
- `---` (frontmatter: description, paths) — .claude/rules/skills-contributing.md:1-5
- `# Adding or changing a skill` — .claude/rules/skills-contributing.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Uses Claude Code's native path-scoped rules syntax (`paths: ["skills/**"]`).

## Context cost
- File size: 988 bytes (~250 tokens).
