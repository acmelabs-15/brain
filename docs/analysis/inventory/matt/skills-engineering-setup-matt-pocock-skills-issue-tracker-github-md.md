---
package: matt
path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md
type: skill
bytes: 3731
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3

## Design intent — required
Seed template for GitHub issue tracking written into `docs/agents/issue-tracker.md` by `/setup-matt-pocock-skills`. Establishes `gh` CLI command patterns for issue creation, reading, listing, commenting, label editing, and closing. Configures handling of pull requests as an optional triage surface. Defines concrete operations for `/wayfinder`, including map issues (`wayfinder:map`), child sub-issues, canonical native issue dependencies via GitHub API (using database IDs), text-based dependency fallbacks, frontier queries, assignee claiming, and decision context pointer recording.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:18
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:106

## Concepts named — required, verbatim
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:1 — defined here
- `GitHub issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3 — defined here
- `gh` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3 — used here
- `Pull requests` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:16 — used here
- `triage surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:16 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:36 — defined here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — defined here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — defined here
- `tickets` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — used here
- `sub-issue` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:41 — used here
- `native issue dependencies` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — defined here
- `database id` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — used here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:44 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45 — defined here
- `context pointer` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45 — defined here

## Structure
- `# Issue tracker: GitHub` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:1
- `## Conventions` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:5
- `## Pull requests as a triage surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:16
- `## When a skill says "publish to the issue tracker"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:28
- `## When a skill says "fetch the relevant ticket"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:32
- `## Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:36

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clarifies that GitHub API endpoints for issue dependencies require the numeric `database id` (`.id`), not the human-visible `#number` or `node_id`.
- Provides an explicit text fallback (`Blocked by: #<n>, #<n>`) where native sub-issues or native dependencies are not enabled on a GitHub repository.
- Distinguishes external contributors from team members using GitHub `authorAssociation` filters (`CONTRIBUTOR`, `FIRST_TIME_CONTRIBUTOR`, `NONE`).

## Context cost
3731 bytes (~933 tokens). Detailed integration specification for GitHub CLI and API operations.
