---
package: rjm
path: templates/agents/roadmap.shared.md
type: agent
bytes: 6885
unit: inv-rjm-322
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/roadmap.shared.md

## Purpose — required, verbatim
> "CEO of the product, strategic product owner who defines what to build and why with outcome-focused vision. Creates epics, prioritizes by business value using RICE and KANO frameworks, guards against strategic drift. Use when you need direction, outcomes over outputs, sequencing by dependencies, or user-value validation." — templates/agents/roadmap.shared.md:3

## Design intent — required
Strategic product owner and prioritization agent serving as the "CEO of the product" across non-Claude Code surfaces (VS Code, GitHub Copilot). It resolves the chronic engineering antipattern of output-driven feature velocity detached from user and business outcomes. Without it, development backlogs devolve into speculative feature laundry lists, unranked technical debt battles, and marketing jargon ("delightful user experience"). By operationalizing quantitative frameworks—RICE scoring with strict confidence thresholds, the KANO satisfaction-to-investment curve, and quarterly strategic drift detection—alongside an epic structure with post-delivery hypothesis outcome reviews, it enforces disciplined outcome accounting and closed-loop validation across tool environments.

## Phase — required
cross-phase

## Inputs — required
- Feature vision or backlog item to prioritize via prompt argument ("argument-hint: Describe the feature vision or backlog item to prioritize" — templates/agents/roadmap.shared.md:4)
- Source code, files, and project context via editor tools ("read" — templates/agents/roadmap.shared.md:7, "edit" — templates/agents/roadmap.shared.md:8, "vscode" — templates/agents/roadmap.shared.md:6)
- Domain and repository knowledge via knowledge toolset ("$toolset:knowledge" — templates/agents/roadmap.shared.md:9)
- Prior strategic decisions retrieved via Serena memory ("mcp__serena__read_memory" — templates/agents/roadmap.shared.md:157)
- Quarterly outcome and delivery metrics for strategic drift detection (templates/agents/roadmap.shared.md:80-86)

## Outputs — required
- Prioritized epic list with RICE scores and rationale ("Prioritized epic list" — templates/agents/roadmap.shared.md:163)
- Strategic drift and scope creep flags ("Strategic concerns" — templates/agents/roadmap.shared.md:164)
- Open questions requiring stakeholder input ("Open questions" — templates/agents/roadmap.shared.md:165)
- Structured epic specifications containing Outcome, Success Metrics, Hypothesis, Scope, Priority, Dependencies, Risk, Kill Criteria, and post-delivery Outcome Review (templates/agents/roadmap.shared.md:94-132)
- Build vs buy vs partner vs defer analysis and recommendations (templates/agents/roadmap.shared.md:134-146)

## Invokes — required
- agent milestone-planner — templates/agents/roadmap.shared.md:167
- agent explainer — templates/agents/roadmap.shared.md:168
- agent high-level-advisor — templates/agents/roadmap.shared.md:169

## Invoked by — required
- doc agent-catalog — docs/agent-catalog.md:41

## Concepts named — required, verbatim
- `RICE` — templates/agents/roadmap.shared.md:3 — used here
- `KANO` — templates/agents/roadmap.shared.md:3 — used here
- `strategic drift` — templates/agents/roadmap.shared.md:3 — used here
- `Core Behavior` — templates/agents/roadmap.shared.md:20 — defined here
- `Resolve by interleave` — templates/agents/roadmap.shared.md:29 — defined here
- `Prioritization Frameworks` — templates/agents/roadmap.shared.md:34 — defined here
- `RICE Scoring` — templates/agents/roadmap.shared.md:36 — defined here
- `KANO Model` — templates/agents/roadmap.shared.md:47 — defined here
- `Priority Matrix` — templates/agents/roadmap.shared.md:58 — defined here
- `Anti-Marketing Language` — templates/agents/roadmap.shared.md:67 — defined here
- `Strategic Drift Detection` — templates/agents/roadmap.shared.md:78 — defined here
- `Epic Structure` — templates/agents/roadmap.shared.md:89 — defined here
- `Outcome` — templates/agents/roadmap.shared.md:96 — defined here
- `Success Metrics` — templates/agents/roadmap.shared.md:99 — defined here
- `Hypothesis` — templates/agents/roadmap.shared.md:103 — defined here
- `Scope` — templates/agents/roadmap.shared.md:106 — defined here
- `Priority` — templates/agents/roadmap.shared.md:110 — defined here
- `Dependencies` — templates/agents/roadmap.shared.md:113 — defined here
- `Risk` — templates/agents/roadmap.shared.md:117 — defined here
- `Kill Criteria` — templates/agents/roadmap.shared.md:120 — defined here
- `Outcome Review` — templates/agents/roadmap.shared.md:123 — defined here
- `Build vs Buy vs Partner vs Defer` — templates/agents/roadmap.shared.md:134 — defined here

## Structure
- # Roadmap Agent — templates/agents/roadmap.shared.md:16
- ## Core Behavior — templates/agents/roadmap.shared.md:20
- ## Prioritization Frameworks — templates/agents/roadmap.shared.md:34
- ### RICE Scoring — templates/agents/roadmap.shared.md:36
- ### KANO Model — templates/agents/roadmap.shared.md:47
- ### Priority Matrix — templates/agents/roadmap.shared.md:58
- ## Anti-Marketing Language — templates/agents/roadmap.shared.md:67
- ## Strategic Drift Detection — templates/agents/roadmap.shared.md:78
- ## Epic Structure — templates/agents/roadmap.shared.md:89
- ## Build vs Buy vs Partner vs Defer — templates/agents/roadmap.shared.md:134
- ## Constraints — templates/agents/roadmap.shared.md:147
- ## Tools — templates/agents/roadmap.shared.md:155
- ## Handoff — templates/agents/roadmap.shared.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · templates/agents/roadmap.shared.md:157 · Line 157 documents tools "Read, Grep, Glob, WebSearch, WebFetch" and "mcp__serena__read_memory" that are not declared in either "tools_vscode" or "tools_copilot" frontmatter lists (lines 5-13).

## Observations
- Cross-platform template divergence (Variant V8): Shares 94% of lines with `.claude/agents/roadmap.md`. Frontmatter replaces Claude-specific metadata (`model: opus`, `name: roadmap`) with `tools_vscode` and `tools_copilot` declarations referencing `$toolset:knowledge`.
- Closed-loop outcome validation: The epic template incorporates an explicit `Outcome Review (post-delivery)` section (lines 123-132) evaluated on the Success Metrics target date. Refuted hypotheses reduce future RICE confidence; confirmed hypotheses raise it.
- Anti-marketing language standard: Mandates replacing vague qualitative claims ("delightful user experience", "cutting-edge AI") with concrete, quantifiable engineering and user behavior metrics (lines 67-76).

## Context cost
6885 bytes, ~1700 tokens. Isolated agent prompt template with no external file includes.
