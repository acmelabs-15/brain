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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as markdown files in `.scratch/`." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3

## Design intent — required
Seed template for local file-based issue tracking configured into `docs/agents/issue-tracker.md` by `/setup-matt-pocock-skills`. Defines directory structures and naming conventions under `.scratch/<feature-slug>/` for specs (`spec.md`) and individual issue tickets (`issues/<NN>-<slug>.md`). Specifies in-file metadata conventions (`Status:`, `Type:`, `Blocked by:`) and adapts `/wayfinder` operations (map file, child ticket files, local frontier discovery, and status claiming/resolving) for local markdown workflows.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference triage-labels.md — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:108

## Concepts named — required, verbatim
- `Issue tracker` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:1 — defined here
- `Local Markdown` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:1 — defined here
- `.scratch/` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:3 — defined here
- `spec` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:8 — used here
- `Implementation issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:9 — defined here
- `ticket` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:9 — used here
- `Triage state` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10 — defined here
- `Status:` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:10 — defined here
- `Wayfinding operations` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:21 — defined here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23 — defined here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:23 — defined here
- `Type:` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26 — defined here
- `Blocked by:` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:27 — defined here
- `Frontier` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:28 — defined here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:29 — defined here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:30 — defined here
- `context pointer` — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:30 — defined here

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
- Provides an entirely local, offline alternative to remote SaaS issue trackers, avoiding reliance on `gh` or `glab` CLIs.
- Explicitly mandates one file per ticket rather than combining tickets into a single monolithic file, ensuring clear git diffs and isolated worker contexts.

## Context cost
1810 bytes (~453 tokens). Lightweight reference template.
