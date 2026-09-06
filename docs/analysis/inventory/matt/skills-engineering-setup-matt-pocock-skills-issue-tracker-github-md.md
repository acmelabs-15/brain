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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md

## Purpose — required, verbatim
> "Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3

## Design intent — required
Seed template defining GitHub CLI (`gh`) integration conventions for engineering skills. Specifies command patterns for issue CRUD operations, configures external PR triage behavior, defines standard procedures for publishing specs and fetching tickets, and details GitHub-specific wayfinding mechanics (single `wayfinder:map` issue, sub-issue children, native issue dependency edges via database IDs, frontier queries, and assignment claims).

## Phase — required
matt:Setup

## Inputs — required
Git remote origin (`git remote -v`), GitHub issue/PR numbers, labels, comments, and dependency relationships.

## Outputs — required
Created/updated GitHub issues, comments, labels, sub-issue links, native dependency graph edges, and issue state transitions (closed/claimed).

## Invokes — required
- skill triage — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:18
- skill wayfinder — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:106

## Concepts named — required, verbatim
- `gh` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3 — used here
- `GitHub issues` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3 — used here
- `Pull requests` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:16 — used here
- `triage` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:18 — used here
- `wayfinder` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — used here
- `map` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — used here
- `child` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38 — used here
- `native issue dependencies` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — used here
- `database id` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — used here
- `issue_dependencies_summary.blocked_by` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42 — used here
- `Frontier query` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43 — used here
- `Claim` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:44 — used here
- `Resolve` — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45 — used here

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
Details explicit command lines and jq queries for headless agent manipulation of GitHub issues. Distinguishes between database ID (`.id`) and user-facing issue number (`#number`) required for native dependency API calls.

## Context cost
3731 bytes, 46 lines, approximately 850 tokens.
