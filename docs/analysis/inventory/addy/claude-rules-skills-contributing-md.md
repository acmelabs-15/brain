---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Provides a path-scoped Claude Code rule (`paths: ["skills/**"]`) that enforces pre-flight catalog checks, checks open pull requests (`gh pr list --state open`), mandates extending existing skills rather than introducing overlapping duplicates, enforces `docs/skill-anatomy.md` compliance, and references `CONTRIBUTING.md` as the single source of truth.

## Phase — required
cross-phase

## Inputs — required
- File modifications matching `skills/**`

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — .claude/rules/skills-contributing.md:11,15
- doc docs/skill-anatomy.md — .claude/rules/skills-contributing.md:13

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Anti-duplication guardrail` — .claude/rules/skills-contributing.md:2 — defined here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `single source of truth` — .claude/rules/skills-contributing.md:15 — used here

## Structure
- frontmatter: description, paths
- Heading: Adding or changing a skill

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses Claude Code's native path-scoped rules syntax (`paths: ["skills/**"]`).

## Context cost
988 bytes, ~250 tokens.
