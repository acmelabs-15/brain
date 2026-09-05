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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitLab issues. Use the [`glab`](https://gitlab.com/gitlab-org/cli) CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3

## Design intent — required
Seed template deployed to `docs/agents/issue-tracker.md` when configuring a repository to track issues on GitLab using the `glab` CLI. Adapts the engineering skill suite to GitLab idioms (such as comments being called notes and distinct ID spaces for issues and merge requests), and specifies wayfinding mechanisms: map issues with `wayfinder:map`, child tickets, blocking relationships via the `/blocked_by` quick action or text headers, and frontier queries.

## Phase — required
none

## Inputs — required
GitLab repository environment; `glab` CLI; git remotes (`git remote -v`).

## Outputs — required
Emitted as `docs/agents/issue-tracker.md` into consumer repositories during setup.

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:19
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:39

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:107

## Concepts named — required, verbatim
- `GitLab` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:1 — defined here
- `glab` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3 — used here
- `Merge requests as a triage surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:17 — defined here
- `MRs as a request surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:19 — defined here
- `publish to the issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:29 — defined here
- `fetch the relevant ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:33 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:37 — defined here
- `wayfinder:map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:41 — defined here
- `Child ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:42 — defined here
- `Blocking` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — defined here
- `native blocking link` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — defined here
- `/blocked_by` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43 — used here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:44 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:45 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:46 — defined here

## Structure
- Conventions — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:5
- Merge requests as a triage surface — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:17
- When a skill says "publish to the issue tracker" — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:29
- When a skill says "fetch the relevant ticket" — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:33
- Wayfinding operations — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:37

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents GitLab specific workflows: posting a note before closing because `glab issue close` does not accept comments, using the `/blocked_by #<blocker>` quick action for issue linking, and providing a text fallback (`Blocked by: #<n>, #<n>`) for tiers without native issue dependencies.

## Context cost
3809 bytes, 47 lines, ~850 tokens. Loads no external files.
