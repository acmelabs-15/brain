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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as markdown files in `.scratch/`." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3

## Design intent — required
Seed template establishing conventions for offline, filesystem-based issue tracking under `.scratch/` when external trackers like GitHub or GitLab are not available or desirable. Mandates one directory per feature, dedicated `spec.md` files, individual numbered ticket files (`issues/<NN>-<slug>.md`), frontmatter-like status lines for triage states, and local wayfinding mechanisms (`map.md`, `Blocked by:` annotations, and frontier discovery).

## Phase — required
matt:Setup

## Inputs — required
Feature directories, specs, ticket files, and map files under `.scratch/`.

## Outputs — required
Markdown spec files, individual numbered ticket files, status line updates, appended comments, and map files under `.scratch/`.

## Invokes — required
- skill triage-labels — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:108

## Concepts named — required, verbatim
- `.scratch/` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3 — used here
- `spec.md` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:8 — used here
- `issues/<NN>-<slug>.md` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:9 — used here
- `triage-labels.md` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10 — used here
- `wayfinder` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23 — used here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23 — used here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23 — used here
- `map.md` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:25 — used here
- `Child ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26 — used here
- `Frontier` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:28 — used here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:29 — used here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:30 — used here

## Structure
- `# Issue tracker: Local Markdown` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:1
- `## Conventions` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:5
- `## When a skill says "publish to the issue tracker"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:13
- `## When a skill says "fetch the relevant ticket"` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:17
- `## Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Permits complete offline operation and execution for solo projects or repositories without remote hosting, emulating state machines through structured Markdown headers and filenames.

## Context cost
1810 bytes, 31 lines, approximately 420 tokens.
