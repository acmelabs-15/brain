---
package: matt
path: external/to-spec.md
type: doc
bytes: 359264
unit: inv-matt-28
deprecated: false
aliases: []
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/to-spec.md

## Purpose — required, verbatim
> "Turn an agreed conversation into a written spec." — external/to-spec.md:24

## Design intent — required
Consolidates an agreed, grilled conversation and architectural debate into an enduring specification published as an issue on the tracker. Operates as a pure decision record that captures settled conclusions rather than initiating fresh interviews or evaluating open questions. Prioritizes sketching and confirming high-level public testing seams before drafting prose, ensuring that downstream implementation (`tdd`) and audit (`code-review`) share identical seam boundaries across multi-session builds.

## Phase — required
matt:The Main Flow

## Inputs — required
Active conversational discussion (from `grill-with-docs` or `wayfinder`), codebase conventions, `CONTEXT.md` / ADRs, or a referenced wayfinder map issue (`/to-spec #<map_issue>`).

## Outputs — required
A published specification issue on the configured issue tracker (or local markdown under `.scratch/`) containing agreed feature goals, user stories, pre-agreed testing seams, and out-of-scope boundaries.

## Invokes — required
- skill grill-with-docs — external/to-spec.md:30
- skill implement — external/to-spec.md:30
- skill to-tickets — external/to-spec.md:30
- skill wayfinder — external/to-spec.md:30
- skill setup-matt-pocock-skills — external/to-spec.md:32
- skill tdd — external/to-spec.md:38
- skill code-review — external/to-spec.md:38
- skill ask-matt — external/to-spec.md:69

## Invoked by — required
none

## Concepts named — required, verbatim
- `to-spec` — external/to-spec.md:25 — defined here
- `spec` — external/to-spec.md:25 — defined here
- `agent` — external/to-spec.md:28 — used here
- `context windows` — external/to-spec.md:34 — used here
- `grilling` — external/to-spec.md:34 — used here
- `seams` — external/to-spec.md:37 — defined here
- `ready-for-agent` — external/to-spec.md:42 — used here
- `AFK` — external/to-spec.md:43 — used here
- `model` — external/to-spec.md:45 — used here
- `user stories` — external/to-spec.md:53 — used here
- `clearing` — external/to-spec.md:57 — used here
- `compaction` — external/to-spec.md:57 — used here
- `out-of-scope` — external/to-spec.md:64 — defined here

## Structure
- # The /to-spec Skill — external/to-spec.md:24
- ## What it does — external/to-spec.md:24
- ## When to reach for it — external/to-spec.md:27
- ## Prerequisites — external/to-spec.md:31
- ## The spec is a decision record — external/to-spec.md:33
- ## Seams before prose — external/to-spec.md:36
- ## Common questions — external/to-spec.md:39
- ## It's working if — external/to-spec.md:58
- ## Where it fits — external/to-spec.md:66
- ## Install the skills — external/to-spec.md:69

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/to-spec.md:41: Skill was renamed from `/to-prd` to `/to-spec` in v1.1 to unify terminology across the toolkit, leaving older documentation and references obsolete.
- `other` · external/to-spec.md:51: Specs function as frozen snapshots without automated two-way synchronization when implementation uncovers contradictory code realities.
- `other` · external/to-spec.md:53: Heavily structured around user stories, providing a poor structural fit for architectural refactors, module boundary migrations, and internal infrastructure.
- `other` · external/to-spec.md:55: Does not inspect issue trackers for duplicate initiatives or cross-link newly generated specs to existing ADRs.
- `other` · external/to-spec.md:57: Large specs published solely to issue trackers are prone to truncation on re-fetch; no local backup file is written by default.

## Observations
Represents the web documentation snapshot of `/to-spec` from `aihero.dev/skills-to-spec`. Serves as the central bridge between exploratory grilling and decomposed execution (`to-tickets`), ensuring decisions survive context resets. Emphasizes that "seams before prose" prevents agent hallucinations about system interfaces.

## Context cost
359264 bytes, ~72000 tokens (HTML snapshot including full inline hydration payload).
