---
package: matt
path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md
type: skill
bytes: 1810
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as markdown files in `.scratch/`." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3

## Design intent — required
Seed template deployed to `docs/agents/issue-tracker.md` when configuring a repository to track issues locally using Markdown files under `.scratch/`. Eliminates external CLI and API dependencies (such as `gh` or `glab`), allowing solo projects, local-only codebases, or developers without hosted trackers to use the engineering skills suite. Standardizes per-feature directory layouts, individual numbered ticket files, in-file metadata lines (`Status:`, `Type:`, `Blocked by:`), appended conversation comments, and wayfinding map conventions.

## Phase — required
none

## Inputs — required
Local repository filesystem; `.scratch/` directory.

## Outputs — required
Emitted as `docs/agents/issue-tracker.md` into consumer repositories during setup.

## Invokes — required
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:108

## Concepts named — required, verbatim
- `Local Markdown` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:1 — defined here
- `.scratch/` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3 — defined here
- `spec.md` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:8 — defined here
- `Implementation issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:9 — defined here
- `Status:` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10 — defined here
- `publish to the issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:13 — defined here
- `fetch the relevant ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:17 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:21 — defined here
- `Child ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26 — defined here
- `Type:` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26 — defined here
- `Blocking` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:27 — defined here
- `Frontier` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:28 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:29 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:30 — defined here

## Structure
- Conventions — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:5
- When a skill says "publish to the issue tracker" — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:13
- When a skill says "fetch the relevant ticket" — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:17
- Wayfinding operations — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly mandates one file per ticket numbered from `01` (`.scratch/<feature-slug>/issues/<NN>-<slug>.md`), specifically forbidding combining tickets into a single monolithic file.

## Context cost
1810 bytes, 31 lines, ~400 tokens. Loads no external files.
