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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/skill-tool-invocation-terminology.md

## Purpose — required, verbatim
> "Standardize cross-skill invocation on an explicit \"call the Skill tool\" instruction instead of bare `/skill`-style prose, across `code-review`, `diagnosing-bugs`, `grill-with-docs`, `grill-me`, `improve-codebase-architecture`, `tdd`, `to-spec`, `to-tickets`, `triage`, and `wayfinder`." — .changeset/skill-tool-invocation-terminology.md:5

## Design intent — required
Documents a patch changeset that standardizes cross-skill invocation phrasing across ten repository skills. Instead of conversational references or slash-command trigger syntax (`/skill`), skills are updated to explicitly instruct the model to call the Skill tool. This raises invocation reliability, removes Claude Code-specific assumptions to maintain harness neutrality, mandates discrete calls for multi-skill steps, and codifies the invocation convention in `.agents/invocation.md`.

## Phase — required
none

## Inputs — required
Prior cross-skill invocation phrasing and rough-edge reports across ten named skills (`code-review`, `diagnosing-bugs`, `grill-with-docs`, `grill-me`, `improve-codebase-architecture`, `tdd`, `to-spec`, `to-tickets`, `triage`, `wayfinder`).

## Outputs — required
Patch version changeset for `mattpocock-skills`; standardized tool invocation instructions across ten skills; convention codified in `.agents/invocation.md`.

## Invokes — required
- reference .agents/invocation.md — .changeset/skill-tool-invocation-terminology.md:9
- skill code-review — .changeset/skill-tool-invocation-terminology.md:5
- skill diagnosing-bugs — .changeset/skill-tool-invocation-terminology.md:5
- skill grill-with-docs — .changeset/skill-tool-invocation-terminology.md:5
- skill grill-me — .changeset/skill-tool-invocation-terminology.md:5
- skill improve-codebase-architecture — .changeset/skill-tool-invocation-terminology.md:5
- skill tdd — .changeset/skill-tool-invocation-terminology.md:5
- skill to-spec — .changeset/skill-tool-invocation-terminology.md:5
- skill to-tickets — .changeset/skill-tool-invocation-terminology.md:5
- skill triage — .changeset/skill-tool-invocation-terminology.md:5
- skill wayfinder — .changeset/skill-tool-invocation-terminology.md:5
- skill grilling — .changeset/skill-tool-invocation-terminology.md:7
- skill domain-modeling — .changeset/skill-tool-invocation-terminology.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `cross-skill invocation` — .changeset/skill-tool-invocation-terminology.md:5 — defined here
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
- `harness-neutral` — .changeset/skill-tool-invocation-terminology.md:7 — defined here
- `trigger syntax` — .changeset/skill-tool-invocation-terminology.md:7 — defined here
- `domain-modeling` — .changeset/skill-tool-invocation-terminology.md:8 — used here
- `.agents/invocation.md` — .changeset/skill-tool-invocation-terminology.md:9 — defined here

## Structure
- Frontmatter
- Summary statement
- Invocation rationale and harness neutrality
- Multi-skill call rules
- Reference to .agents/invocation.md

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly addresses an important execution failure mode where models discuss a skill rather than loading its tool definition. Enforces harness-neutral phrasing rather than relying on Claude Code slash-command trigger semantics. Documents convention in `.agents/invocation.md`.

## Context cost
1006 bytes, ~250 tokens. References `.agents/invocation.md` (3848 bytes, ~900 tokens).
