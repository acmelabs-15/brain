---
package: rjm
path: .claude/skills/planner/references/strategy-ooda-loop.md
type: reference
bytes: 2463
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/strategy-ooda-loop.md

## Purpose — required, verbatim
> "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/planner/references/strategy-ooda-loop.md:9

## Design intent — required
Maps John Boyd's OODA Loop framework (Observe, Orient, Decide, Act) to the planner's dual workflows: the planning phase (`planner.py`) and the execution phase (`executor.py`). It structures iterative loops where speed of feedback and orientation matters more than exhaustive information gathering, providing concrete step-by-step mappings to avoid anti-patterns like analysis paralysis, skipping plan reviews, and one-pass execution without quality checks.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/strategy-ooda-loop.md — .claude/skills/planner/SKILL.md:288

## Concepts named — required, verbatim
- `OODA Loop` — .claude/skills/planner/references/strategy-ooda-loop.md:7 — defined here
- `Observe` — .claude/skills/planner/references/strategy-ooda-loop.md:17 — defined here
- `Orient` — .claude/skills/planner/references/strategy-ooda-loop.md:18 — defined here
- `Decide` — .claude/skills/planner/references/strategy-ooda-loop.md:19 — defined here
- `Act` — .claude/skills/planner/references/strategy-ooda-loop.md:20 — defined here
- `Planning Phase as OODA` — .claude/skills/planner/references/strategy-ooda-loop.md:30 — defined here
- `Execution Phase as OODA` — .claude/skills/planner/references/strategy-ooda-loop.md:39 — defined here
- `Analysis paralysis` — .claude/skills/planner/references/strategy-ooda-loop.md:53 — defined here

## Structure
# OODA Loop — .claude/skills/planner/references/strategy-ooda-loop.md:7
## Stages — .claude/skills/planner/references/strategy-ooda-loop.md:13
## Key Insight — .claude/skills/planner/references/strategy-ooda-loop.md:22
## Planner Application — .claude/skills/planner/references/strategy-ooda-loop.md:26
### Planning Phase as OODA — .claude/skills/planner/references/strategy-ooda-loop.md:30
### Execution Phase as OODA — .claude/skills/planner/references/strategy-ooda-loop.md:39
### Anti-Patterns — .claude/skills/planner/references/strategy-ooda-loop.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/strategy-ooda-loop.md:2 · Frontmatter source `wiki/concepts/Strategic Thinking/OODA Loop.md` does not exist in the repository.

## Observations
Treats the OODA loop as an iterative cycle where faster loops provide systemic advantage over striving for perfect initial information. Directly matches `executor.py` steps to OODA stages: Step 1 Execution Planning is Observe, Step 2 Reconciliation is Orient, Step 3 Milestone Execution is Act, Step 4 Post-Implementation QR is Observe (initiating a nested loop), and Steps 5-7 Resolution + Docs are Decide + Act.

## Context cost
2463 bytes, approximately 600 tokens.
