---
package: matt
path: docs/engineering/research.md
type: doc
bytes: 9674
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/research.md

## Purpose — required, verbatim
> "`research` answers a question by reading the sources that own the answer, then leaves a cited Markdown file in the repo. It works only from **[primary sources](https://www.aihero.dev/ai-coding-dictionary/primary-source)**: official docs, source code, specs, first-party APIs. It follows every claim back to the source that owns it, so it will not repeat a blog post's account of an API when the API's own docs are reachable." — docs/engineering/research.md:3

## Design intent — required
Delegates external investigation and documentation reading to an autonomous background agent so the primary session keeps its context window clean. Enforces strict primary-source discipline (official documentation, source code, formal specifications, first-party APIs) and produces a single cited markdown artifact in the repo's existing notes location rather than answering ephemerally in conversation. Contrasts with grilling (which derives decisions rather than short-lived facts) and establishes research files as temporary disposable assets intended to feed specs, grilling, or decision tickets rather than permanent git-tracked architecture documentation.

## Phase — required
matt:engineering

## Inputs — required
A narrow, answerable external question (third-party API behaviour, specification text, version claim), or wayfinder research decision tickets; plus existing repo notes directory conventions.

## Outputs — required
A single cited markdown file saved in the repo's existing notes folder, containing links to primary sources for every claim. In unreleased changes, findings are also captured on throwaway `research/<name>` branches with context pointers from tickets.

## Invokes — required
- doc grilling — docs/engineering/research.md:16
- doc grill-with-docs — docs/engineering/research.md:17
- doc prototype — docs/engineering/research.md:18
- doc wayfinder — docs/engineering/research.md:19
- doc to-spec — docs/engineering/research.md:73
- doc ask-matt — docs/engineering/research.md:73

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:153
- doc CHANGELOG.md — CHANGELOG.md:177

## Concepts named — required, verbatim
- `primary sources` — docs/engineering/research.md:3 — defined here
- `session` — docs/engineering/research.md:5 — used here
- `agent` — docs/engineering/research.md:9 — used here
- `grilling` — docs/engineering/research.md:21 — used here
- `background agent` — docs/engineering/research.md:25 — defined here
- `tokens` — docs/engineering/research.md:35 — used here
- `subagent` — docs/engineering/research.md:35 — used here
- `model` — docs/engineering/research.md:45 — used here
- `ticket` — docs/engineering/research.md:49 — used here
- `context` — docs/engineering/research.md:53 — used here
- `harness` — docs/engineering/research.md:53 — used here
- `context pointer` — docs/engineering/research.md:61 — used here
- `AFK` — docs/engineering/research.md:61 — used here
- `reach-for-it-anytime standalone` — docs/engineering/research.md:73 — defined here

## Structure
- ## What it does — docs/engineering/research.md:1
- ## When to reach for it — docs/engineering/research.md:7
- ## Delegated legwork — docs/engineering/research.md:23
- ## Common questions — docs/engineering/research.md:31
- ## It's working if — docs/engineering/research.md:63
- ## Where it fits — docs/engineering/research.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · docs/engineering/research.md:35 documents open issue #530 where background research agent spawns recursive duplicate general-purpose subagents, costing ~450k tokens.
- `script-bug` · docs/engineering/research.md:61 documents open issue #576 where research subagents open draft PRs from temporary research branches never intended to merge, and deleting branches breaks ticket context pointers.

## Observations
Treats research as delegable legwork rather than outsourced reasoning, emphasizing that the human retains final decision authority based on cited primary sources. Highlights community consensus that research markdown files should not be permanently retained in git because stale third-party research documents poison future model context reads; permanent architecture calls belong exclusively in ADRs.

## Context cost
9674 bytes (~2420 tokens).
