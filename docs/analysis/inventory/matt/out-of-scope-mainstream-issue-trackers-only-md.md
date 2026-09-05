---
package: matt
path: .out-of-scope/mainstream-issue-trackers-only.md
type: doc
bytes: 1573
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .out-of-scope/mainstream-issue-trackers-only.md

## Purpose — required, verbatim
> "`setup-matt-pocock-skills` only offers first-class support for **mainstream** issue trackers. Requests to add support for niche, new, or single-vendor experimental trackers are out of scope." — .out-of-scope/mainstream-issue-trackers-only.md:3

## Design intent — required
Documents a deliberate architectural boundary: first-class issue tracker support in `setup-matt-pocock-skills` and related lifecycle skills (`/to-spec`, `/to-tickets`, `/triage`) is restricted to mainstream systems (GitHub, GitLab, Backlog.md) to avoid continuous maintenance of brittle CLI wrappers, while directing unstandardized trackers to escape hatches (`local markdown` and `other/custom`).

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill setup-matt-pocock-skills — .out-of-scope/mainstream-issue-trackers-only.md:3
- skill /to-spec — .out-of-scope/mainstream-issue-trackers-only.md:7
- skill /to-tickets — .out-of-scope/mainstream-issue-trackers-only.md:7
- skill /triage — .out-of-scope/mainstream-issue-trackers-only.md:7

## Invoked by — required
none

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — .out-of-scope/mainstream-issue-trackers-only.md:3 — used here
- `mainstream` — .out-of-scope/mainstream-issue-trackers-only.md:3 — used here
- `/to-spec` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `/to-tickets` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `/triage` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `GitHub` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `GitLab` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `Backlog.md` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `local markdown` — .out-of-scope/mainstream-issue-trackers-only.md:18 — used here
- `other/custom` — .out-of-scope/mainstream-issue-trackers-only.md:19 — used here
- `dex` — .out-of-scope/mainstream-issue-trackers-only.md:25 — used here

## Structure
# Issue tracker integrations are limited to mainstream tools
- ## Why this is out of scope — .out-of-scope/mainstream-issue-trackers-only.md:5
- ## Prior requests — .out-of-scope/mainstream-issue-trackers-only.md:23

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the rationale for bounding integration surface area: CLI wrappers for experimental trackers create permanent maintenance drag on ticket-generation and triage skills; local markdown files provide a universal zero-dependency fallback.

## Context cost
1573 bytes (~393 tokens). Policy documentation.
