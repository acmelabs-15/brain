---
package: matt
path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md
type: skill
bytes: 3809
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitLab issues. Use the [`glab`](https://gitlab.com/gitlab-org/cli) CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3

## Design intent — required
Seed template for GitLab issue tracking configured into `docs/agents/issue-tracker.md` by `/setup-matt-pocock-skills`. Defines `glab` CLI patterns for issues and merge requests, accounting for GitLab specifics such as notes (comments), separate number spaces for issues and MRs, and closing behaviors. Provides `/wayfinder` operational mappings: map issue or epic (`wayfinder:map`), child tickets with `Part of #<map>`, native blocking links via `/blocked_by` quick action (with free-tier text fallbacks), frontier queries via GitLab API, and session claim/resolve steps.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:19
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:107

## Concepts named — required, verbatim
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:1 — defined here
- `GitLab issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3 — defined here
- `glab` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3 — used here
- `notes` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:10 — used here
- `Merge requests` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:13 — used here
- `triage surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:17 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:37 — defined here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — defined here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — defined here
- `tickets` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — used here
- `native blocking link` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — defined here
- `quick action` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — used here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:44 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:45 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:46 — defined here
- `context pointer` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:46 — defined here

## Structure
- `# Issue tracker: GitLab` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:1
- `## Conventions` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:5
- `## Merge requests as a triage surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:17
- `## When a skill says "publish to the issue tracker"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:29
- `## When a skill says "fetch the relevant ticket"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:33
- `## Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:37

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Notes that `glab issue close` does not accept a comment parameter, requiring a preceding `glab issue note` command.
- Highlights that native blocking links are a GitLab Premium/Ultimate feature, providing `Blocked by: #<n>, #<n>` markdown lines for free-tier setups.
- Distinguishes issues and merge requests as separate number spaces in GitLab, unlike GitHub's unified issue number space.

## Context cost
3809 bytes (~952 tokens). GitLab CLI (`glab`) operations and schema mapping.
