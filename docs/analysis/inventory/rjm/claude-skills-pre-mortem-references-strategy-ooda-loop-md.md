---
package: rjm
path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md
type: reference
bytes: 2282
unit: inv-rjm-137
in_scope_via: .claude/skills/pre-mortem/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pre-mortem/references/strategy-ooda-loop.md

## Purpose — required, verbatim
> "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:9

## Design intent — required
Maps John Boyd's OODA (Observe, Orient, Decide, Act) loop framework directly to the pre-mortem lifecycle to guarantee that risk analysis remains an active, iterative feedback loop rather than a static one-off ritual. By connecting each pre-mortem phase to an OODA stage and providing an explicit cadence for re-observation as project scope or dependencies shift, it prevents analysis paralysis and staleness in project risk management.

## Phase — required
cross-phase

## Inputs — required
Project scope, team constraints, external dependencies, existing risk inventories, and milestone status reports.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill pre-mortem — .claude/skills/pre-mortem/SKILL.md:327

## Concepts named — required, verbatim
- `OODA Loop` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:7 — defined here
- `Observe` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:17 — defined here
- `Orient` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:18 — defined here
- `Decide` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:19 — defined here
- `Act` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:20 — defined here
- `Phase 1: Project Brief` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:32 — used here
- `Phase 2: Failure Announcement` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:33 — used here
- `Phase 3: Independent Analysis` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:34 — used here
- `Phase 4: Round-Robin Collection` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:35 — used here
- `Phase 5: Review and Mitigate` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:36 — used here
- `prospective hindsight` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:33 — used here

## Structure
- # OODA Loop
- ## Stages
- ## Key Insight
- ## Pre-Mortem Application
- ### Iterative Risk Review
- ### Anti-Patterns

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/pre-mortem/references/strategy-ooda-loop.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Strategic Thinking/OODA Loop.md.

## Observations
Highlights four critical anti-patterns (analysis paralysis in Phase 3, skipping Phase 5 mitigations, one-and-done pre-mortems, lack of re-observation) with explicit actionable remedies. Emphasizes speed of iteration over perfection of information.

## Context cost
2282 bytes, ~570 tokens.
