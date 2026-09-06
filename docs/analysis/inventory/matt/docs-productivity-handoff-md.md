---
package: matt
path: docs/productivity/handoff.md
type: doc
bytes: 8746
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/productivity/handoff.md

## Purpose — required, verbatim
> "`handoff` compacts the conversation you are in into a **handoff document**: one markdown file, written to your OS's temporary directory rather than into the workspace, that a fresh [agent](https://www.aihero.dev/ai-coding-dictionary/agent) can read to pick the work up." — docs/productivity/handoff.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-handoff` and `docs/productivity/handoff.md`) for the user-invoked `handoff` productivity skill. Addresses work portability across harness boundaries, directory/repository switches, team collaboration, and parallel task branching/forking. Produces a single targeted markdown handoff file in the OS temporary directory that records active task intent and suggested skills while redacting secrets and referencing durable assets (specs, tickets, ADRs, diffs) by path or URL rather than duplicating them. Formulates the distinction at phase boundaries between continuing in-session, `/compact` (intent preservation), `/clear` (context disposal), and `/handoff` (work migration).

## Phase — required
matt:Productivity

## Inputs — required
- User invocation via `/handoff` with an optional description parameter explaining the purpose of the next session.
- Current conversational context and thread state.

## Outputs — required
- Single markdown handoff document written to OS temporary directory (`/tmp`, `/private/tmp`, or OS equivalent) containing live thread summary, target task notes, redacted secrets, durable path/URL references, and a suggested skills section.

## Invokes — required
- skill prototype — docs/productivity/handoff.md:26
- skill ask-matt — docs/productivity/handoff.md:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `handoff` — docs/productivity/handoff.md:3 — defined here
- `handoff document` — docs/productivity/handoff.md:3 — defined here
- `agent` — docs/productivity/handoff.md:3 — used here
- `portability` — docs/productivity/handoff.md:5 — defined here
- `harness` — docs/productivity/handoff.md:5 — used here
- `session` — docs/productivity/handoff.md:5 — used here
- `subagent` — docs/productivity/handoff.md:5 — used here
- `/clear` — docs/productivity/handoff.md:5 — used here
- `/compact` — docs/productivity/handoff.md:5 — used here
- `context` — docs/productivity/handoff.md:15 — used here
- `grilling` — docs/productivity/handoff.md:20 — used here
- `prototype` — docs/productivity/handoff.md:26 — used here
- `suggested skills` — docs/productivity/handoff.md:32 — defined here
- `primary source` — docs/productivity/handoff.md:42 — used here
- `secondary source` — docs/productivity/handoff.md:42 — used here
- `/branch` — docs/productivity/handoff.md:53 — used here
- `--fork-session` — docs/productivity/handoff.md:53 — used here
- `CLAUDE.md` — docs/productivity/handoff.md:56 — used here
- `reach-for-it-anytime standalone` — docs/productivity/handoff.md:76 — used here
- `ask-matt` — docs/productivity/handoff.md:76 — used here

## Structure
- What it does — docs/productivity/handoff.md:1
- When to reach for it — docs/productivity/handoff.md:7
- Branching is the use people skip — docs/productivity/handoff.md:22
- What travels, and what doesn't — docs/productivity/handoff.md:30
- Common questions — docs/productivity/handoff.md:36
- It's working if — docs/productivity/handoff.md:65
- Where it fits — docs/productivity/handoff.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — docs/productivity/handoff.md:45 — OS-specific temp directory paths are long and divergent across platforms, with Windows agents frequently taking multiple attempts to locate the destination.
- other — docs/productivity/handoff.md:48 — Handoff files stored in OS temp directories vanish between sessions due to automatic temp cleanup in environments like Codex or reboot clearing /private/tmp.
- other — docs/productivity/handoff.md:51 — Shell command interpolation of handoff summaries containing backticks or $(...) into CLI invocations causes silent argument truncation.
- other — docs/productivity/handoff.md:60 — Sessions record unverified assumptions as confident factual claims, which downstream agents consume as unquestioned contractual premises.

## Observations
Highlights the parallel branching/forking pattern: an active session can remain open while spinning off a temporary sub-task (such as a spike in `prototype` or isolated learning in `teach`) via handoff, receiving the result back without polluting the main thread. Distinguishes primary source conversational context from secondary source compressed summaries, noting that staying in-session is always preferred when work does not need to travel. Emphasizes referencing existing repo files by relative path rather than duplicating content into the handoff doc.

## Context cost
8746 bytes, approximately 2000 tokens. Standalone doc; loads no secondary references.
