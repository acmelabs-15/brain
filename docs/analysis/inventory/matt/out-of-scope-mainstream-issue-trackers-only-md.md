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
verified: 2026-09-05 quote-check+coverage
---

# .out-of-scope/mainstream-issue-trackers-only.md

## Purpose — required, verbatim
> "`setup-matt-pocock-skills` only offers first-class support for **mainstream** issue trackers. Requests to add support for niche, new, or single-vendor experimental trackers are out of scope." — .out-of-scope/mainstream-issue-trackers-only.md:3

## Design intent — required
Defines the boundary and maintenance policy for issue tracker backends in `mattpocock-skills`. It establishes that only mainstream trackers (e.g. GitHub, GitLab, Backlog.md) receive first-class support in `setup-matt-pocock-skills`, `/to-spec`, `/to-tickets`, and `/triage`. Niche or experimental tools are explicitly out of scope due to the ongoing maintenance surface of CLI bindings, flags, and output parsing, pointing users to `local markdown` and `other/custom` escape hatches instead. Without this policy document, maintainers would face unbounded maintenance pressure to support bespoke or short-lived issue tracking tools.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Issue tracker` — .out-of-scope/mainstream-issue-trackers-only.md:1 — used here
- `setup-matt-pocock-skills` — .out-of-scope/mainstream-issue-trackers-only.md:3 — used here
- `mainstream` — .out-of-scope/mainstream-issue-trackers-only.md:3 — defined here
- `to-spec` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `to-tickets` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `triage` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `GitHub` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `GitLab` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `Backlog.md` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `local markdown` — .out-of-scope/mainstream-issue-trackers-only.md:18 — defined here
- `other/custom` — .out-of-scope/mainstream-issue-trackers-only.md:19 — defined here

## Structure
- # Issue tracker integrations are limited to mainstream tools
- ## Why this is out of scope
- ## Prior requests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explains the design rationale for restricting issue-tracker CLI integrations to mainstream tools (GitHub, GitLab, Backlog.md) while offering `local markdown` and `other/custom` as unopinionated escape hatches to prevent feature bloat and CLI maintenance debt.

## Context cost
1573 bytes, approximately 380 tokens.
