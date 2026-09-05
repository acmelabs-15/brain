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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3

## Design intent — required
Seed template deployed to `docs/agents/issue-tracker.md` when configuring a repository to track issues using GitHub Issues via the `gh` CLI. Standardizes CLI commands for creating, inspecting, listing, labeling, and closing issues and pull requests, and specifies the exact mechanics of wayfinding: mapping issues with `wayfinder:map`, child tickets as sub-issues, native issue dependency wiring via database IDs, and frontier query execution.

## Phase — required
none

## Inputs — required
GitHub repository environment; `gh` CLI; git remotes (`git remote -v`).

## Outputs — required
Emitted as `docs/agents/issue-tracker.md` into consumer repositories during setup.

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:18
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:106

## Concepts named — required, verbatim
- `GitHub` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:1 — defined here
- `gh` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3 — used here
- `PRs as a request surface` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:18 — defined here
- `publish to the issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:28 — defined here
- `fetch the relevant ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:32 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:36 — defined here
- `wayfinder:map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:40 — defined here
- `Child ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:41 — defined here
- `sub-issue` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:41 — used here
- `Blocking` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — defined here
- `native issue dependencies` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — defined here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:44 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45 — defined here

## Structure
- Conventions — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:5
- Pull requests as a triage surface — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:16
- When a skill says "publish to the issue tracker" — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:28
- When a skill says "fetch the relevant ticket" — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:32
- Wayfinding operations — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:36

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the exact GitHub REST API call for creating issue dependency edges (`gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`) requiring the internal numeric database ID rather than issue numbers.

## Context cost
3731 bytes, 46 lines, ~850 tokens. Loads no external files.
