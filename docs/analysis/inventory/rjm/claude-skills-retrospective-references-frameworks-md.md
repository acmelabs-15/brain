---
package: rjm
path: .claude/skills/retrospective/references/frameworks.md
type: reference
bytes: 12954
unit: inv-rjm-148
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/references/frameworks.md

## Purpose — required, verbatim
> "Gather facts before interpretation. Observation precedes diagnosis." — .claude/skills/retrospective/references/frameworks.md:12

## Design intent — required
Provides structured retrospective facilitation frameworks adapted from agile practices for autonomous AI agents. Translates human facilitation activities (Norm Kerth's 4-Step Debrief, timeline analysis, Mad/Sad/Glad outcome categorization, Sakichi Toyoda's Five Whys, Ishikawa fishbone diagrams, Kurt Lewin's Force Field Analysis, Derby & Larsen's Learning Matrix, +/Delta, and ROTI) into deterministic agent workflows by replacing emotional states with operational metrics (tool invocations, output artifacts, pivots, retries, escalations, context energy shifts, and token drift). It enforces the core methodological principle that objective observation strictly precedes interpretation and diagnosis, preventing rationalization or superficial post-mortems. Without it, retrospective execution would lack structured analysis rubrics, leading to disorganized ad-hoc debriefs that fail to uncover systematic root causes.

## Phase — required
cross-phase

## Inputs — required
- Session execution logs, tool call records, outputs, error traces, and timestamps — .claude/skills/retrospective/references/frameworks.md:20, 31-34, 61
- Timeline event sequences, agent handoffs, and execution durations — .claude/skills/retrospective/references/frameworks.md:72-79
- Observed failures, blocks, suboptimal executions, and successes — .claude/skills/retrospective/references/frameworks.md:95-97, 134
- Post-retrospective participant feedback and self-assessment metrics — .claude/skills/retrospective/references/frameworks.md:354-358, 437-443, 465-470

## Outputs — required
- 4-Step Debrief markdown structure (Observe, Respond, Analyze, Apply) — .claude/skills/retrospective/references/frameworks.md:27-51
- Chronological execution trace table with energy shift indicators — .claude/skills/retrospective/references/frameworks.md:69-87
- Outcome classification distribution (Mad, Sad, Glad) — .claude/skills/retrospective/references/frameworks.md:101-118
- Five Whys root cause analysis chain with actionable fix — .claude/skills/retrospective/references/frameworks.md:142-164
- Multi-category fishbone diagram (Prompt, Tools, Context, Dependencies, Sequence, State) — .claude/skills/retrospective/references/frameworks.md:209-242
- Force field balance analysis (Driving vs Restraining forces) — .claude/skills/retrospective/references/frameworks.md:252-277
- Patterns and shifts trend analysis table — .claude/skills/retrospective/references/frameworks.md:287-305
- Four-quadrant learning matrix (Continue, Change, Idea, Invest) — .claude/skills/retrospective/references/frameworks.md:322-342
- +/Delta assessment and Delta Triage issue routing — .claude/skills/retrospective/references/frameworks.md:361-431
- ROTI (Return on Time Invested) numerical score (0-4) and verdict — .claude/skills/retrospective/references/frameworks.md:447-459
- Helped, Hindered, Hypothesis meta-learning template — .claude/skills/retrospective/references/frameworks.md:473-484

## Invokes — required
- skill github — .claude/skills/retrospective/references/frameworks.md:399

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:85

## Concepts named — required, verbatim
- `Retrospective Frameworks` — .claude/skills/retrospective/references/frameworks.md:1 — defined here
- `Data Gathering` — .claude/skills/retrospective/references/frameworks.md:10 — defined here
- `4-Step Debrief` — .claude/skills/retrospective/references/frameworks.md:14 — defined here
- `Observe` — .claude/skills/retrospective/references/frameworks.md:20 — defined here
- `Respond` — .claude/skills/retrospective/references/frameworks.md:21 — defined here
- `Analyze` — .claude/skills/retrospective/references/frameworks.md:22 — defined here
- `Apply` — .claude/skills/retrospective/references/frameworks.md:23 — defined here
- `Execution Trace Analysis` — .claude/skills/retrospective/references/frameworks.md:53 — defined here
- `Execution Trace` — .claude/skills/retrospective/references/frameworks.md:70 — defined here
- `Timeline Patterns` — .claude/skills/retrospective/references/frameworks.md:80 — defined here
- `Energy Shifts` — .claude/skills/retrospective/references/frameworks.md:84 — defined here
- `Outcome Classification` — .claude/skills/retrospective/references/frameworks.md:89 — defined here
- `Mad` — .claude/skills/retrospective/references/frameworks.md:95 — defined here
- `Sad` — .claude/skills/retrospective/references/frameworks.md:96 — defined here
- `Glad` — .claude/skills/retrospective/references/frameworks.md:97 — defined here
- `Generate Insights` — .claude/skills/retrospective/references/frameworks.md:122 — defined here
- `Five Whys` — .claude/skills/retrospective/references/frameworks.md:126 — defined here
- `Five Whys Analysis` — .claude/skills/retrospective/references/frameworks.md:143 — defined here
- `Fishbone Analysis` — .claude/skills/retrospective/references/frameworks.md:190 — defined here
- `Fishbone` — .claude/skills/retrospective/references/frameworks.md:210 — defined here
- `Force Field Analysis` — .claude/skills/retrospective/references/frameworks.md:244 — defined here
- `Driving Forces` — .claude/skills/retrospective/references/frameworks.md:258 — defined here
- `Restraining Forces` — .claude/skills/retrospective/references/frameworks.md:263 — defined here
- `Force Balance` — .claude/skills/retrospective/references/frameworks.md:268 — defined here
- `Patterns and Shifts` — .claude/skills/retrospective/references/frameworks.md:279 — defined here
- `Recurring Patterns` — .claude/skills/retrospective/references/frameworks.md:290 — defined here
- `Shifts Detected` — .claude/skills/retrospective/references/frameworks.md:295 — defined here
- `Learning Matrix` — .claude/skills/retrospective/references/frameworks.md:307 — defined here
- `Closing Activities` — .claude/skills/retrospective/references/frameworks.md:346 — defined here
- `+/Delta` — .claude/skills/retrospective/references/frameworks.md:350 — defined here
- `Delta Triage` — .claude/skills/retrospective/references/frameworks.md:376 — defined here
- `ROTI` — .claude/skills/retrospective/references/frameworks.md:433 — defined here
- `Return on Time Invested` — .claude/skills/retrospective/references/frameworks.md:433 — defined here
- `ROTI Assessment` — .claude/skills/retrospective/references/frameworks.md:448 — defined here
- `Helped, Hindered, Hypothesis` — .claude/skills/retrospective/references/frameworks.md:461 — defined here

## Structure
- Phase 0: Data Gathering — .claude/skills/retrospective/references/frameworks.md:10
- Activity: 4-Step Debrief — .claude/skills/retrospective/references/frameworks.md:14
- Activity: Execution Trace Analysis — .claude/skills/retrospective/references/frameworks.md:53
- Activity: Outcome Classification — .claude/skills/retrospective/references/frameworks.md:89
- Phase 1: Generate Insights — .claude/skills/retrospective/references/frameworks.md:122
- Activity: Five Whys — .claude/skills/retrospective/references/frameworks.md:126
- Activity: Fishbone Analysis — .claude/skills/retrospective/references/frameworks.md:190
- Activity: Force Field Analysis — .claude/skills/retrospective/references/frameworks.md:244
- Activity: Patterns and Shifts — .claude/skills/retrospective/references/frameworks.md:279
- Activity: Learning Matrix — .claude/skills/retrospective/references/frameworks.md:307
- Closing Activities — .claude/skills/retrospective/references/frameworks.md:346
- Activity: +/Delta — .claude/skills/retrospective/references/frameworks.md:350
- Activity: Delta Triage — .claude/skills/retrospective/references/frameworks.md:376
- Activity: ROTI (Return on Time Invested) — .claude/skills/retrospective/references/frameworks.md:433
- Activity: Helped, Hindered, Hypothesis — .claude/skills/retrospective/references/frameworks.md:461

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Adapts established human agile facilitation methods to autonomous agent execution, substituting observable system facts (tool calls, outputs, errors, retries) for human feelings.
- Defines six agent-specific fishbone categories (Prompt, Tools, Context, Dependencies, Sequence, State) for diagnosing complex multi-factor failures.
- Establishes a Delta Triage routing protocol that immediately escalates P0/P1 issues to GitHub via the `github` skill while routing P2/P3 items to backlog memory.
- Lifted verbatim from canonical source agent body `.claude/agents/retrospective.md` (original lines 70-484, 1177-1335).

## Context cost
12954 bytes, approximately 3240 tokens.
