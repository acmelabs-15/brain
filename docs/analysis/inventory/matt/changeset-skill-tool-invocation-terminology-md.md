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
verified: 2026-09-04 quote-check+coverage
---

# .changeset/skill-tool-invocation-terminology.md

## Purpose — required, verbatim
> "Standardize cross-skill invocation on an explicit \"call the Skill tool\" instruction instead of bare `/skill`-style prose, across `code-review`, `diagnosing-bugs`, `grill-with-docs`, `grill-me`, `improve-codebase-architecture`, `tdd`, `to-spec`, `to-tickets`, `triage`, and `wayfinder`." — .changeset/skill-tool-invocation-terminology.md:5 (no explicit purpose statement)

## Design intent — required
Documents the transition in cross-skill invocations from implicit slash-command prose (`/skill`) to explicit tool invocation directives (`Call the Skill tool with "<skill>"`). This establishes harness-neutral invocation, handles multi-skill dependencies via multiple separate tool calls rather than a single compound call, and records this convention in `.agents/invocation.md`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- doc .agents/invocation.md — .changeset/skill-tool-invocation-terminology.md:9

## Invoked by — required
none

## Concepts named — required, verbatim
- `mattpocock-skills` — .changeset/skill-tool-invocation-terminology.md:2 — used here
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
- `.agents/invocation.md` — .changeset/skill-tool-invocation-terminology.md:9 — used here

## Structure
- (no headings)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents a critical agent usability finding: prose references to other skills (e.g. "run the `/grilling` skill") fail to reliably trigger model skill execution; explicitly commanding the model to call the `Skill` tool improves reliability and eliminates dependence on Claude Code specific slash syntax.

## Context cost
1006 bytes (~252 tokens). Changeset documentation.
