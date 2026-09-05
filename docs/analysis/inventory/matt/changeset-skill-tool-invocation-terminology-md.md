---
package: matt
path: .changeset/skill-tool-invocation-terminology.md
type: doc
bytes: 1006
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .changeset/skill-tool-invocation-terminology.md

## Purpose — required, verbatim
> "Standardize cross-skill invocation on an explicit \"call the Skill tool\" instruction instead of bare `/skill`-style prose, across `code-review`, `diagnosing-bugs`, `grill-with-docs`, `grill-me`, `improve-codebase-architecture`, `tdd`, `to-spec`, `to-tickets`, `triage`, and `wayfinder`." — .changeset/skill-tool-invocation-terminology.md:5
(no explicit purpose statement)

## Design intent — required
Documents a critical architectural shift in how skills invoke other skills within `mattpocock-skills`. Previously, skills used informal prose like "run the `/grilling` skill", which frequently failed to trigger skill activation. This changeset transitions to explicit tool invocation semantics (`Call the Skill tool with "..."`), mandates decomposing multi-skill requests into discrete calls, makes instructions harness-neutral rather than Claude Code-specific, and references `.agents/invocation.md`. Without this change, cross-skill composition remains unreliable and tool-dependent.

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
- `mattpocock-skills` — .changeset/skill-tool-invocation-terminology.md:2 — used here
- `patch` — .changeset/skill-tool-invocation-terminology.md:2 — used here
- `Skill tool` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `code-review` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `diagnosing-bugs` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `grill-with-docs` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `grill-me` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `improve-codebase-architecture` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `tdd` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `to-spec` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `to-tickets` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `triage` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `wayfinder` — .changeset/skill-tool-invocation-terminology.md:5 — used here
- `grilling` — .changeset/skill-tool-invocation-terminology.md:7 — used here
- `domain-modeling` — .changeset/skill-tool-invocation-terminology.md:8 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the migration from prose invocation ("run `/grilling`") to explicit tool calls (`Call the Skill tool with "grilling"`), noting that prose instructions failed to load skills reliably, particularly in `grill-with-docs`. It also notes the removal of the leading slash to ensure harness neutrality beyond Claude Code.

## Context cost
1006 bytes, approximately 240 tokens.
