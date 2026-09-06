---
package: rjm
path: .claude/agents/roadmap.md
type: agent
bytes: 6805
unit: inv-rjm-72
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/agents/roadmap.md

## Purpose — required, verbatim
> "CEO of the product, strategic product owner who defines what to build and why with outcome-focused vision. Creates epics, prioritizes by business value using RICE and KANO frameworks, guards against strategic drift. Use when you need direction, outcomes over outputs, sequencing by dependencies, or user-value validation." — .claude/agents/roadmap.md:3

## Design intent — required
A strategic product owner agent that defines product direction, prioritizes candidate features by outcomes rather than outputs, and prevents strategic drift. It applies quantitative prioritization frameworks (RICE scoring, KANO model satisfaction curves, and P0–P3 priority matrices) to structure initiatives into epics with testable hypotheses, measurable success metrics, explicit kill criteria, and post-delivery outcome reviews. It challenges default build instincts via a build vs. buy vs. partner vs. defer evaluation framework and guards against empty marketing language. Without it, projects risk building low-value features, suffering scope creep, succumbing to feature factory output without measurable impact, and accumulating unjustified custom engineering debt.

## Phase — required
rjm:strategic

## Inputs — required
- Product area descriptions, feature sets, or strategic questions supplied via `argument-hint` ("Describe the product area, feature set, or strategic question" — .claude/agents/roadmap.md:7) or orchestrator prompt.
- Available business, usage, and metric data for RICE (reach, impact, confidence, effort) and KANO scoring.
- Codebase and documentation inspected via `Read`, `Grep`, `Glob`, `WebSearch`, and `WebFetch` (.claude/agents/roadmap.md:151).
- Prior strategic decisions retrieved from Serena memory via `mcp__serena__read_memory` (.claude/agents/roadmap.md:151).

## Outputs — required
- Structured epic specifications following the Epic Structure template (.claude/agents/roadmap.md:88) including Outcome, Success Metrics, Hypothesis, Scope (In/Out), Priority (P0–P3 with RICE score), Dependencies, Risk, Kill Criteria, and post-delivery Outcome Review (.claude/agents/roadmap.md:117).
- Ranked epic and feature lists with quantitative RICE scores and rationale (.claude/agents/roadmap.md:157).
- Strategic drift detection assessments (.claude/agents/roadmap.md:72) flagging features that do not move user metrics.
- Build vs. buy vs. partner vs. defer trade-off analyses (.claude/agents/roadmap.md:128).
- Handoff returns to orchestrator containing prioritized epics, strategic concerns, open questions, and recommended next steps (.claude/agents/roadmap.md:156-164).

## Invokes — required
- agent milestone-planner — .claude/agents/roadmap.md:161
- agent explainer — .claude/agents/roadmap.md:162
- agent high-level-advisor — .claude/agents/roadmap.md:163

## Invoked by — required
- agent roadmap — .agents/AGENT-SYSTEM.md:610
- agent roadmap — README.md:406
- agent roadmap — docs/agent-catalog.md:41
- agent roadmap — docs/ideation-workflow.md:56
- agent roadmap — docs/task-classification-guide.md:74

## Concepts named — required, verbatim
- `RICE` — .claude/agents/roadmap.md:3 — used here
- `KANO` — .claude/agents/roadmap.md:3 — used here
- `epics` — .claude/agents/roadmap.md:3 — used here
- `strategic drift` — .claude/agents/roadmap.md:3 — used here
- `strategic` — .claude/agents/roadmap.md:6 — defined here
- `CEO of the product` — .claude/agents/roadmap.md:12 — defined here
- `Prioritize by outcome, not output` — .claude/agents/roadmap.md:12 — defined here
- `Core Behavior` — .claude/agents/roadmap.md:14 — defined here
- `Build vs buy vs partner` — .claude/agents/roadmap.md:21 — used here
- `interleave` — .claude/agents/roadmap.md:23 — defined here
- `Prioritization Frameworks` — .claude/agents/roadmap.md:28 — defined here
- `RICE Scoring` — .claude/agents/roadmap.md:30 — defined here
- `Reach` — .claude/agents/roadmap.md:35 — defined here
- `Impact` — .claude/agents/roadmap.md:36 — defined here
- `Confidence` — .claude/agents/roadmap.md:37 — defined here
- `Effort` — .claude/agents/roadmap.md:38 — defined here
- `KANO Model` — .claude/agents/roadmap.md:41 — defined here
- `Must-Have` — .claude/agents/roadmap.md:47 — defined here
- `Performance` — .claude/agents/roadmap.md:48 — defined here
- `Delighter` — .claude/agents/roadmap.md:49 — defined here
- `Indifferent` — .claude/agents/roadmap.md:50 — defined here
- `Priority Matrix` — .claude/agents/roadmap.md:52 — defined here
- `P0` — .claude/agents/roadmap.md:56 — defined here
- `P1` — .claude/agents/roadmap.md:57 — defined here
- `P2` — .claude/agents/roadmap.md:58 — defined here
- `P3` — .claude/agents/roadmap.md:59 — defined here
- `Anti-Marketing Language` — .claude/agents/roadmap.md:61 — defined here
- `Strategic Drift Detection` — .claude/agents/roadmap.md:72 — defined here
- `Epic Structure` — .claude/agents/roadmap.md:83 — defined here
- `Hypothesis` — .claude/agents/roadmap.md:97 — defined here
- `Kill Criteria` — .claude/agents/roadmap.md:114 — defined here
- `Outcome Review` — .claude/agents/roadmap.md:117 — defined here
- `Build vs Buy vs Partner vs Defer` — .claude/agents/roadmap.md:128 — defined here
- `TCO test` — .claude/agents/roadmap.md:132 — defined here

## Structure
- `# Roadmap Agent` — .claude/agents/roadmap.md:10
- `## Core Behavior` — .claude/agents/roadmap.md:14
- `## Prioritization Frameworks` — .claude/agents/roadmap.md:28
- `### RICE Scoring` — .claude/agents/roadmap.md:30
- `### KANO Model` — .claude/agents/roadmap.md:41
- `### Priority Matrix` — .claude/agents/roadmap.md:52
- `## Anti-Marketing Language` — .claude/agents/roadmap.md:61
- `## Strategic Drift Detection` — .claude/agents/roadmap.md:72
- `## Epic Structure` — .claude/agents/roadmap.md:83
- `## Build vs Buy vs Partner vs Defer` — .claude/agents/roadmap.md:128
- `## Constraints` — .claude/agents/roadmap.md:141
- `## Tools` — .claude/agents/roadmap.md:149
- `## Handoff` — .claude/agents/roadmap.md:153

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- A variant copy exists at `templates/agents/roadmap.shared.md` (VARIANT V8, 94% shared lines), tracked in divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-roadmap-md--templates-agents-roadmap-shared-md.md`.
- Enforces strict anti-marketing language guidelines (.claude/agents/roadmap.md:61), requiring epic descriptions to substitute vague marketing phrasing with quantifiable engineering targets (e.g. latency percentiles, requests per second, OAuth protocols).
- Embeds a closed-loop "Outcome Review" section (.claude/agents/roadmap.md:117) within the epic template to evaluate hypotheses post-delivery, feeding confirmed or refuted outcomes back into the RICE confidence parameter for subsequent planning cycles.

## Context cost
6,805 bytes (~1,700 tokens). Loads no external files on initialization.
