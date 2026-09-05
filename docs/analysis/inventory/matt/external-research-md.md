---
package: matt
path: external/research.md
type: doc
bytes: 347558
unit: inv-matt-22
deprecated: false
aliases: []
memo_inputs:
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/research.md

## Purpose — required, verbatim
> "Get a cited answer, read from primary sources." — external/research.md:24

## Design intent — required
Delegates external technical investigation legwork to a background agent that consults primary sources (official documentation, specifications, source repositories) and writes a cited Markdown note directly into the repository. By executing in the background, the skill keeps the primary conversation session context clean while producing a verifiable file with direct hyperlinks on every claim, allowing external facts to be independently audited and fed into subsequent architectural design, grilling, or specification tasks.

## Phase — required
matt:Shaping

## Inputs — required
Explicit user invocation via `/research` or automatic dispatch by an orchestrating agent (`wayfinder`) (external/research.md:28, 51); a concrete external technical question requiring factual discovery beyond the repository (such as library APIs, protocol specifications, or version quirks) (external/research.md:29); target location in the repository's notes directory (external/research.md:35).

## Outputs — required
Single cited Markdown document written to the repository's notes directory (external/research.md:25, 26, 35); direct hyperlinked citations on every factual claim pointing back to primary documentation or source files (external/research.md:26, 57); completion notification reporting the output file path without dumping raw text into the primary session (external/research.md:26, 56); throwaway `research/<name>` git branches in automated wayfinder runs (external/research.md:51).

## Invokes — required
- skill grilling — external/research.md:30
- skill grill-with-docs — external/research.md:30
- skill prototype — external/research.md:30
- skill wayfinder — external/research.md:30
- skill to-spec — external/research.md:61
- skill ask-matt — external/research.md:61

## Invoked by — required
none

## Concepts named — required, verbatim
- `research` — external/research.md:25 — defined here
- `primary sources` — external/research.md:25 — defined here
- `agent` — external/research.md:28 — used here
- `shelf life of what comes back` — external/research.md:31 — defined here
- `background agent` — external/research.md:33 — defined here
- `high-trust` — external/research.md:42 — used here
- `context` — external/research.md:47 — used here
- `tickets` — external/research.md:50 — used here
- `reach-for-it-anytime standalone` — external/research.md:61 — defined here

## Structure
- # The /research Skill — external/research.md:24
- ## What it does — external/research.md:24
- ## When to reach for it — external/research.md:27
- ## Delegated legwork — external/research.md:32
- ## Common questions — external/research.md:36
- ## It's working if — external/research.md:52
- ## Where it fits — external/research.md:60
- ## Install the skills — external/research.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/research.md:38: Recursive subagent spawning bug (issue #530) where general-purpose agents invoked by research recursively re-invoke research, spiraling context to ~450k tokens.
- `doc-drift` · external/research.md:51: Research subagents under wayfinder create draft PRs from temporary `research/<name>` branches, and deleting those branches breaks ticket context pointers (issue #576).
- `doc-drift` · external/research.md:43: Absence of an automated domain allowlist forces reliance on model heuristics and human link audits to ensure citations link to primary sources.
- `doc-drift` · external/research.md:49: Lack of explicit stopping criteria can cause agents to spiral into excessive reading depth or produce broad, shallow summaries.

## Observations
Represents the web documentation snapshot of `/research` from `aihero.dev/skills-research`. Emphasizes that research is ephemeral investigation legwork to be conducted in an isolated background subagent to protect the main conversation context. Findings are written to a single Markdown file with per-claim primary source citations, designed to inform immediate decisions and be discarded or archived once converted into durable ADRs.

## Context cost
347558 bytes, ~70000 tokens (HTML snapshot including full inline hydration payload).
