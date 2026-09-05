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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/research.md

## Purpose — required, verbatim
> "answers a question by reading the sources that own the answer, then leaves a cited Markdown file in the repo. It works only from **[primary sources](https://www.aihero.dev/ai-coding-dictionary/primary-source)**: official docs, source code, specs, first-party APIs." — docs/engineering/research.md:3

## Design intent — required
Documentation explaining the operational model and architectural tradeoffs of the `research` skill. It offloads external information-gathering (reading official documentation, specifications, source code, and first-party APIs) to a background subagent so the primary session context remains uncluttered. The skill outputs a persistent, fully cited Markdown file in the repository's notes directory rather than conversational text, providing short-lived factual assets to feed into subsequent grilling, spec-writing, or architecture decisions.

## Phase — required
none

## Inputs — required
Unresolved factual questions concerning external dependencies, third-party APIs, or specifications; research tickets filed by `wayfinder`.

## Outputs — required
A single Markdown file in the repo's existing notes directory (or sensible fallback location) with hyperlinks to primary sources on each claim. When invoked via wayfinder, research findings are captured on a throwaway `research/<name>` branch with a context pointer on the ticket.

## Invokes — required
- skill grilling — docs/engineering/research.md:16
- skill grill-with-docs — docs/engineering/research.md:17
- skill prototype — docs/engineering/research.md:18
- skill wayfinder — docs/engineering/research.md:19
- skill to-spec — docs/engineering/research.md:73
- skill ask-matt — docs/engineering/research.md:73

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `research` — docs/engineering/research.md:3 — defined here
- `primary sources` — docs/engineering/research.md:3 — used here
- `session` — docs/engineering/research.md:5 — used here
- `agent` — docs/engineering/research.md:9 — used here
- `ADRs` — docs/engineering/research.md:17 — used here
- `shelf life` — docs/engineering/research.md:21 — defined here
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

## Structure
- What it does
- When to reach for it
- Delegated legwork
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug · docs/engineering/research.md:35 · Unrestricted background agent delegation can cause runaway nested research subagents (issue #530) costing ~450k tokens.
- script-bug · docs/engineering/research.md:61 · Background research subagents on throwaway branches have been observed opening unwanted draft PRs (issue #576), and deleting branches breaks context pointers.

## Observations
Highlights the contrast in artifact shelf-life between ADRs (long-lived, kept in git) and research notes (short-lived, frequently kept outside git in tools like Obsidian or issue trackers to prevent repo poisoning by stale context). Also notes that the skill lacks an explicit stopping criterion and relies on citation traceability rather than source allowlisting.

## Context cost
9674 bytes, ~2300 tokens. Loads no external files.
