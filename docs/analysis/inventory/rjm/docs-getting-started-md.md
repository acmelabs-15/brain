---
package: rjm
path: docs/getting-started.md
type: doc
bytes: 8254
unit: inv-rjm-191
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/getting-started.md

## Purpose — required, verbatim
> "This guide walks you through installing and using the AI Agents system in your project." — docs/getting-started.md:3

## Design intent — required
Provides the primary onboarding guide for new users of the AI Agents toolkit across Claude Code, GitHub Copilot CLI, and VS Code. Details the fastest installation path via native plugin marketplaces (`/install-plugin` for Claude, `/plugin marketplace add` and `/plugin install` for Copilot CLI), introduces the 7-phase lifecycle pipeline (Grill Me, PRD to Spec, Kanban, Implement, QA, Review, Ship) with its commands and produced artifacts, explains Day Shift (human in loop) versus Night Shift (AFK autonomous execution) operating modes, provides verification steps for agent loading, and illustrates direct agent invocation versus orchestrator-routed workflows. Without this guide, new developers would lack a single entry point to discover and install plugins, understand the complete lifecycle pipeline, and invoke agents.

## Phase — required
rjm:cross-phase

## Inputs — required
- AI coding tool installation ("You need one of these AI coding tools:" — docs/getting-started.md:36)
- Marketplace registration commands ("Pick yours and paste the command(s) inside the CLI session." — docs/getting-started.md:7)
- Problem statement from human ("H->>S: problem statement" — docs/getting-started.md:100)
- Branch diff for testing and review ("H->>T: branch diff" — docs/getting-started.md:108)

## Outputs — required
- Structured PRD produced by `/spec` requirements-interview ("Structured PRD (Problem, User stories, Data model, Acceptance criteria)" — docs/getting-started.md:73)
- Durable specification files produced by `/spec` completion ("`.agents/specs/requirements/REQ-NNN-*.md`" — docs/getting-started.md:74)
- Versioned execution plan artifact produced by `/plan` ("Versioned execution plan artifact" — docs/getting-started.md:75)
- Committed code and passing tests produced by `/build` ("Committed code plus passing tests" — docs/getting-started.md:76)
- Six-gate verdicts table produced by `/test` ("Gate verdicts table with PASS/WARN/CRITICAL_FAIL per gate" — docs/getting-started.md:77)
- Findings list with file:line citations produced by `/review` ("Findings list (Critical, Important, Suggestion) with file:line citations" — docs/getting-started.md:78)
- Ship report and pull request link produced by `/ship` ("Ship report plus PR link" — docs/getting-started.md:79)

## Invokes — required
- doc CONTRIBUTING.md — docs/getting-started.md:42
- doc docs/installation.md — docs/getting-started.md:63
- command /spec — docs/getting-started.md:73
- command /plan — docs/getting-started.md:75
- command /build — docs/getting-started.md:76
- command /test — docs/getting-started.md:77
- command /review — docs/getting-started.md:78
- command /ship — docs/getting-started.md:79
- doc autonomous-issue-development.md — docs/getting-started.md:118
- doc ideation-workflow.md — docs/getting-started.md:119
- command .claude/commands/spec.md — docs/getting-started.md:120
- skill .claude/skills/requirements-interview/SKILL.md — docs/getting-started.md:121
- agent analyst — docs/getting-started.md:130
- agent orchestrator — docs/getting-started.md:144
- agent security — docs/getting-started.md:162
- agent qa — docs/getting-started.md:166
- agent architect — docs/getting-started.md:186
- agent critic — docs/getting-started.md:187
- agent implementer — docs/getting-started.md:188
- agent high-level-advisor — docs/getting-started.md:191
- doc agent-catalog.md — docs/getting-started.md:196
- doc skill-reference.md — docs/getting-started.md:197
- doc architecture.md — docs/getting-started.md:198
- doc customization.md — docs/getting-started.md:199

## Invoked by — required
- doc README.md — README.md:532

## Concepts named — required, verbatim
- `Claude Code CLI` — docs/getting-started.md:38 — used here
- `GitHub Copilot CLI` — docs/getting-started.md:39 — used here
- `VS Code with GitHub Copilot` — docs/getting-started.md:40 — used here
- `7-phase pipeline` — docs/getting-started.md:67 — defined here
- `Grill Me` — docs/getting-started.md:73 — defined here
- `PRD to Spec` — docs/getting-started.md:74 — defined here
- `Kanban` — docs/getting-started.md:75 — defined here
- `Implement` — docs/getting-started.md:76 — defined here
- `QA` — docs/getting-started.md:77 — defined here
- `Review` — docs/getting-started.md:78 — defined here
- `Ship` — docs/getting-started.md:79 — defined here
- `Day Shift` — docs/getting-started.md:81 — defined here
- `Night Shift` — docs/getting-started.md:81 — defined here
- `CRITICAL_FAIL` — docs/getting-started.md:77 — used here
- `Six quality gates` — docs/getting-started.md:77 — defined here
- `Five-axis review` — docs/getting-started.md:78 — defined here

## Structure
- ## Fastest Start — docs/getting-started.md:5
- ## Alternative: Full Installation — docs/getting-started.md:32
- ### Prerequisites — docs/getting-started.md:34
- ## Step 1: Install — docs/getting-started.md:44
- ## Step 2: Understand the Workflow — docs/getting-started.md:65
- ### The 7-phase pipeline — docs/getting-started.md:69
- ### Day Shift and Night Shift — docs/getting-started.md:81
- ### Pipeline at a glance — docs/getting-started.md:88
- ### Go deeper — docs/getting-started.md:116
- ## Step 3: Verify — docs/getting-started.md:123
- ## Step 4: Use an Agent — docs/getting-started.md:149
- ### Direct invocation — docs/getting-started.md:153
- ### Orchestrator-routed — docs/getting-started.md:169
- ## Step 5: Understand the Output — docs/getting-started.md:179
- ## What Next — docs/getting-started.md:194

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the canonical 7-phase lifecycle table with input commands, outputs, and trigger criteria.
- Introduces the operational distinction between "Day Shift" (requiring human decisions: interviews, PRD review, QA gate sign-off, ship decision) and "Night Shift" (AFK autonomous execution: build loops, test gates, review passes).
- Enumerates artifact numbers per bundle: Claude bundle ships 23 agents, 23 commands, 29 hooks, and 69 skills; Copilot bundle ships 24 agents, 28 hooks, and 81 skills.

## Context cost
8,254 bytes. Approximately 2,060 tokens.
