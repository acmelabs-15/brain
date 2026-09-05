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
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/roadmap.md

## Purpose — required, verbatim
> "CEO of the product, strategic product owner who defines what to build and why with outcome-focused vision. Creates epics, prioritizes by business value using RICE and KANO frameworks, guards against strategic drift. Use when you need direction, outcomes over outputs, sequencing by dependencies, or user-value validation." — .claude/agents/roadmap.md:3

## Design intent — required
Strategic product management agent acting as "CEO of the product" that defines what to build and why. It shifts product engineering focus from output (shipping features) to outcome (measurable user and business value). It introduces rigorous evaluation frameworks—RICE scoring, the KANO satisfaction-to-investment model, P0–P3 priority matrix, and build vs buy vs partner vs defer analysis—to resist scope creep and strategic drift. Crucially, its epic structure enforces post-delivery outcome reviews with hypothesis verification to create a closed learning loop that dynamically adjusts future prioritization confidence.

## Phase — required
cross-phase

## Inputs — required
- Product area, feature set, or strategic question via prompt argument ("argument-hint: Describe the product area, feature set, or strategic question" — .claude/agents/roadmap.md:7)
- Codebase and documentation files via read-only tools: "Read, Grep, Glob, WebSearch, WebFetch" — .claude/agents/roadmap.md:151
- External market and competitive research via WebSearch and WebFetch ("Read, Grep, Glob, WebSearch, WebFetch" — .claude/agents/roadmap.md:151)
- Prior strategic decisions retrieved from Serena memory ("mcp__serena__read_memory" — .claude/agents/roadmap.md:151)
- Quarterly delivery and metrics performance data for strategic drift evaluation (.claude/agents/roadmap.md:74-81)

## Outputs — required
- Epic specifications with Outcome, Success Metrics, Hypothesis, Scope, Priority, Dependencies, Risk, Kill Criteria, and post-delivery Outcome Review sections (.claude/agents/roadmap.md:88-126)
- Ranked epic lists with RICE scores and rationale ("Prioritized epic list" — .claude/agents/roadmap.md:157)
- Strategic drift and scope creep concern flags ("Strategic concerns" — .claude/agents/roadmap.md:158)
- Stakeholder questions requiring input ("Open questions" — .claude/agents/roadmap.md:159)
- Build vs buy vs partner vs defer recommendations with trade-off rationale (.claude/agents/roadmap.md:139-140)

## Invokes — required
- tool Read — .claude/agents/roadmap.md:151
- tool Grep — .claude/agents/roadmap.md:151
- tool Glob — .claude/agents/roadmap.md:151
- tool WebSearch — .claude/agents/roadmap.md:151
- tool WebFetch — .claude/agents/roadmap.md:151
- tool mcp__serena__read_memory — .claude/agents/roadmap.md:151
- agent milestone-planner — .claude/agents/roadmap.md:161
- agent explainer — .claude/agents/roadmap.md:162
- agent high-level-advisor — .claude/agents/roadmap.md:163

## Invoked by — required
- agent roadmap — .claude/agents/orchestrator.md:73
- agent roadmap — .claude/agents/architect.md:619
- command roadmap — .claude/commands/pr-quality/all.md:36
- command roadmap — .claude/commands/pr-quality/roadmap.md:16
- skill roadmap — .claude/skills/review/SKILL.md:89
- skill roadmap — .claude/skills/world-model-diagnostic/SKILL.md:45
- skill roadmap — .claude/skills/work-operating-model/SKILL.md:10
- doc roadmap — .agents/AGENT-SYSTEM.md:610

## Concepts named — required, verbatim
- `RICE` — .claude/agents/roadmap.md:3 — used here
- `KANO` — .claude/agents/roadmap.md:3 — used here
- `RICE Scoring` — .claude/agents/roadmap.md:30 — defined here
- `KANO Model` — .claude/agents/roadmap.md:41 — defined here
- `Priority Matrix` — .claude/agents/roadmap.md:52 — defined here
- `Anti-Marketing Language` — .claude/agents/roadmap.md:61 — defined here
- `Strategic Drift Detection` — .claude/agents/roadmap.md:72 — defined here
- `Epic Structure` — .claude/agents/roadmap.md:83 — defined here
- `Outcome Review` — .claude/agents/roadmap.md:117 — defined here
- `Build vs Buy vs Partner vs Defer` — .claude/agents/roadmap.md:128 — defined here

## Structure
- # Roadmap Agent — .claude/agents/roadmap.md:10
- ## Core Behavior — .claude/agents/roadmap.md:14
- ## Prioritization Frameworks — .claude/agents/roadmap.md:28
- ### RICE Scoring — .claude/agents/roadmap.md:30
- ### KANO Model — .claude/agents/roadmap.md:41
- ### Priority Matrix — .claude/agents/roadmap.md:52
- ## Anti-Marketing Language — .claude/agents/roadmap.md:61
- ## Strategic Drift Detection — .claude/agents/roadmap.md:72
- ## Epic Structure — .claude/agents/roadmap.md:83
- ## Outcome Review (post-delivery) — .claude/agents/roadmap.md:117
- ## Build vs Buy vs Partner vs Defer — .claude/agents/roadmap.md:128
- ## Constraints — .claude/agents/roadmap.md:141
- ## Tools — .claude/agents/roadmap.md:149
- ## Handoff — .claude/agents/roadmap.md:153

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Closed-loop outcome validation: The epic template incorporates an explicit `Outcome Review (post-delivery)` section (lines 117-126) evaluated against the Success Metrics target date. Verifying hypotheses as confirmed, refuted, or inconclusive feeds back into future RICE confidence scoring.
- Anti-marketing language standard: Mandates replacing vague qualitative claims ("delightful user experience", "cutting-edge AI") with concrete, quantifiable engineering and user behavior metrics (lines 61-71).
- Rigorous scope challenge: Explicitly instructs the agent to challenge the default build instinct and frame product choices across build, buy, partner, and defer options (lines 128-140).

## Context cost
6,805 bytes, ~1,700 tokens. Standalone agent prompt with no auxiliary subfiles.
