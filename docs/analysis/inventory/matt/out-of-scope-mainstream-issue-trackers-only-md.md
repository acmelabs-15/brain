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
verified: 2026-09-06 quote-check+coverage
---

# .out-of-scope/mainstream-issue-trackers-only.md

## Purpose — required, verbatim
> "`setup-matt-pocock-skills` only offers first-class support for **mainstream** issue trackers. Requests to add support for niche, new, or single-vendor experimental trackers are out of scope." — .out-of-scope/mainstream-issue-trackers-only.md:3

## Design intent — required
Defines the architectural boundary limiting first-class issue tracker integrations in `setup-matt-pocock-skills` to mainstream tools (GitHub, GitLab, Backlog.md). Because each backend hard-codes CLI command shapes, argument flags, and output parsing across multiple lifecycle skills (`/to-spec`, `/to-tickets`, `/triage`), supporting niche or experimental trackers introduces excessive long-term maintenance overhead. Instead, users are directed to existing escape hatches (`local markdown` and `other/custom`).

## Phase — required
none

## Inputs — required
User requests for non-mainstream issue tracker backends (such as issue #99 for dex).

## Outputs — required
Architectural decision record formally excluding niche issue tracker backends.

## Invokes — required
- skill setup-matt-pocock-skills — .out-of-scope/mainstream-issue-trackers-only.md:3
- skill to-spec — .out-of-scope/mainstream-issue-trackers-only.md:7
- skill to-tickets — .out-of-scope/mainstream-issue-trackers-only.md:7
- skill triage — .out-of-scope/mainstream-issue-trackers-only.md:7

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — .out-of-scope/mainstream-issue-trackers-only.md:3 — used here
- `issue trackers` — .out-of-scope/mainstream-issue-trackers-only.md:3 — defined here
- `out of scope` — .out-of-scope/mainstream-issue-trackers-only.md:3 — defined here
- `issue-tracker backend` — .out-of-scope/mainstream-issue-trackers-only.md:7 — defined here
- `to-spec` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `to-tickets` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `triage` — .out-of-scope/mainstream-issue-trackers-only.md:7 — used here
- `Mainstream` — .out-of-scope/mainstream-issue-trackers-only.md:9 — defined here
- `GitHub` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `GitLab` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `Backlog.md` — .out-of-scope/mainstream-issue-trackers-only.md:11 — used here
- `escape hatches` — .out-of-scope/mainstream-issue-trackers-only.md:16 — defined here
- `local markdown` — .out-of-scope/mainstream-issue-trackers-only.md:18 — defined here
- `other/custom` — .out-of-scope/mainstream-issue-trackers-only.md:19 — defined here
- `dex` — .out-of-scope/mainstream-issue-trackers-only.md:25 — used here

## Structure
- Issue tracker integrations are limited to mainstream tools
- Why this is out of scope
- Prior requests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a clear rationale for rejecting external tool integration bloat in AI skills. Demonstrates how `local markdown` and `other/custom` serve as flexible escape hatches that decouple core skill prompts from external CLI evolutions.

## Context cost
1573 bytes, ~390 tokens. Loads no external files.
