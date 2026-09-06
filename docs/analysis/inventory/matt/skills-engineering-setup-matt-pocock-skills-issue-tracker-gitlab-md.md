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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitLab issues. Use the [`glab`](https://gitlab.com/gitlab-org/cli) CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3

## Design intent — required
Seed template defining GitLab CLI (`glab`) integration conventions for the engineering skills. Sets up issue and merge request operations, handling GitLab-specific quirks such as separate issue/MR number spaces, posting closing comments as notes prior to calling `glab issue close`, using `/blocked_by` quick actions for Premium/Ultimate blocking links with description fallbacks, and executing JSON-formatted wayfinding queries.

## Phase — required
matt:Setup

## Inputs — required
Git remote origin (`git remote -v`), GitLab issue/MR numbers, labels, comments (notes), and blocking links.

## Outputs — required
GitLab issues, notes, label updates, merge request interactions, assignee assignments, and issue state transitions (closed/claimed).

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:19
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:107

## Concepts named — required, verbatim
- `glab` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3 — used here
- `GitLab issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3 — used here
- `notes` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:10 — used here
- `Merge requests` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:13 — used here
- `triage` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:19 — used here
- `wayfinder` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — used here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — used here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39 — used here
- `native blocking link` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — used here
- `/blocked_by` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — used here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:44 — used here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:45 — used here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:46 — used here

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
Carefully documents CLI differences from GitHub, such as lack of closing comment argument on `glab issue close` requiring a prior note, and using `/blocked_by` note commands for issue relationships.

## Context cost
3809 bytes, 47 lines, approximately 870 tokens.
