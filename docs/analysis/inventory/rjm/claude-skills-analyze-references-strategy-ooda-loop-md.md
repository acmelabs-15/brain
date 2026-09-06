---
package: rjm
path: .claude/skills/analyze/references/strategy-ooda-loop.md
type: reference
bytes: 2327
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/strategy-ooda-loop.md

## Purpose — required, verbatim
> "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/analyze/references/strategy-ooda-loop.md:9

## Design intent — required
Applies John Boyd's iterative OODA Loop framework (Observe, Orient, Decide, Act) to systematic software engineering workflows. It provides the theoretical mapping underpinning the multi-step `analyze` workflow, models rapid diagnostic iteration during incident response and legacy migration, and defines safeguards against cognitive failure modes like analysis paralysis and un-oriented action.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/strategy-ooda-loop.md — .claude/skills/analyze/SKILL.md:66
- reference references/strategy-ooda-loop.md — .claude/skills/planner/SKILL.md:288
- reference references/strategy-ooda-loop.md — .claude/skills/pre-mortem/SKILL.md:327

## Concepts named — required, verbatim
- `OODA Loop` — .claude/skills/analyze/references/strategy-ooda-loop.md:7 — defined here
- `Stages` — .claude/skills/analyze/references/strategy-ooda-loop.md:13 — defined here
- `Key Insight` — .claude/skills/analyze/references/strategy-ooda-loop.md:22 — defined here
- `Application to Codebase Analysis` — .claude/skills/analyze/references/strategy-ooda-loop.md:26 — defined here
- `Exploration (Step 1)` — .claude/skills/analyze/references/strategy-ooda-loop.md:32 — used here
- `Focus Selection (Step 2)` — .claude/skills/analyze/references/strategy-ooda-loop.md:33 — used here
- `Investigation Planning (Step 3)` — .claude/skills/analyze/references/strategy-ooda-loop.md:34 — used here
- `Deep Analysis (Steps 4 to N-2)` — .claude/skills/analyze/references/strategy-ooda-loop.md:35 — used here
- `Verification (Step N-1)` — .claude/skills/analyze/references/strategy-ooda-loop.md:36 — used here
- `Synthesis (Step N)` — .claude/skills/analyze/references/strategy-ooda-loop.md:37 — used here
- `Application to Incident Response` — .claude/skills/analyze/references/strategy-ooda-loop.md:39 — defined here
- `Application to Modernization` — .claude/skills/analyze/references/strategy-ooda-loop.md:46 — defined here
- `Anti-Patterns` — .claude/skills/analyze/references/strategy-ooda-loop.md:53 — defined here

## Structure
# OODA Loop — .claude/skills/analyze/references/strategy-ooda-loop.md:7
## Stages — .claude/skills/analyze/references/strategy-ooda-loop.md:13
## Key Insight — .claude/skills/analyze/references/strategy-ooda-loop.md:22
## Application to Codebase Analysis — .claude/skills/analyze/references/strategy-ooda-loop.md:26
## Application to Incident Response — .claude/skills/analyze/references/strategy-ooda-loop.md:39
## Application to Modernization — .claude/skills/analyze/references/strategy-ooda-loop.md:46
## Anti-Patterns — .claude/skills/analyze/references/strategy-ooda-loop.md:53

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly correlates the six phases of the `analyze` workflow with Boyd's four stages, highlighting that Verification represents an Observe stage of a second iterative loop. Frontmatter cites `wiki/concepts/Strategic Thinking/OODA Loop.md`. Also referenced in `planner` and `pre-mortem` skills.

## Context cost
2327 bytes, approximately 580 tokens.
