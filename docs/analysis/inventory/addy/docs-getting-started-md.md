---
package: addy
path: docs/getting-started.md
type: doc
bytes: 7104
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/getting-started.md

## Purpose — required, verbatim
> "agent-skills works with any AI coding agent that accepts Markdown instructions. This guide covers the universal approach. For tool-specific setup, see the dedicated guides." — docs/getting-started.md:3

## Design intent — required
Provides the universal, tool-agnostic onboarding and getting-started guide for agent-skills. It establishes the core paradigm that skills are executable, step-by-step workflows with verification gates rather than passive reference documentation. It outlines minimal and full-lifecycle skill loading configurations, skill anatomy, agent personas, slash commands, reference checklists, and working artifact management (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`). Without this guide, users would lack an overarching framework for adopting agent-skills across arbitrary agents and would risk degrading model performance by loading all skills simultaneously into persistent context.

## Phase — required
none

## Inputs — required
Universal AI coding agent prompt and rules capabilities, repository assets across `skills/`, `agents/`, `.claude/commands/`, and `references/`, and companion documentation (`docs/adoption-guide.md`, `docs/skill-anatomy.md`).

## Outputs — required
- `SPEC.md` — docs/getting-started.md:153
- `tasks/plan.md` — docs/getting-started.md:153
- `tasks/todo.md` — docs/getting-started.md:153

## Invokes — required
- skill using-agent-skills — docs/getting-started.md:40
- doc adoption-guide.md — docs/getting-started.md:44
- skill spec-driven-development — docs/getting-started.md:50
- skill test-driven-development — docs/getting-started.md:51
- skill code-review-and-quality — docs/getting-started.md:52
- skill planning-and-task-breakdown — docs/getting-started.md:61
- skill incremental-implementation — docs/getting-started.md:62
- skill security-and-hardening — docs/getting-started.md:63
- skill shipping-and-launch — docs/getting-started.md:64
- skill frontend-ui-engineering — docs/getting-started.md:71
- skill debugging-and-error-recovery — docs/getting-started.md:72
- skill ci-cd-and-automation — docs/getting-started.md:73
- doc skill-anatomy.md — docs/getting-started.md:90
- agent code-reviewer — docs/getting-started.md:98
- agent test-engineer — docs/getting-started.md:99
- agent security-auditor — docs/getting-started.md:100
- agent web-performance-auditor — docs/getting-started.md:101
- command /spec — docs/getting-started.md:111
- command /plan — docs/getting-started.md:112
- command /build — docs/getting-started.md:113
- command /test — docs/getting-started.md:115
- command /review — docs/getting-started.md:116
- command /code-simplify — docs/getting-started.md:117
- command /ship — docs/getting-started.md:118
- command /webperf — docs/getting-started.md:119
- reference testing-patterns.md — docs/getting-started.md:133
- reference performance-checklist.md — docs/getting-started.md:134
- reference security-checklist.md — docs/getting-started.md:135
- reference accessibility-checklist.md — docs/getting-started.md:136
- reference definition-of-done.md — docs/getting-started.md:137
- reference observability-checklist.md — docs/getting-started.md:138
- reference orchestration-patterns.md — docs/getting-started.md:139

## Invoked by — required
- doc README.md — README.md:206
- doc docs/adoption-guide.md — docs/adoption-guide.md:5
- doc docs/cursor-setup.md — docs/cursor-setup.md:223
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:3

## Concepts named — required, verbatim
- `Skills are not reference docs` — docs/getting-started.md:9 — used here
- `When to use` — docs/getting-started.md:22 — used here
- `Process` — docs/getting-started.md:23 — used here
- `Verification` — docs/getting-started.md:24 — used here
- `Common rationalizations` — docs/getting-started.md:25 — used here
- `Red flags` — docs/getting-started.md:26 — used here
- `meta-skill` — docs/getting-started.md:38 — used here
- `Full Lifecycle` — docs/getting-started.md:56 — used here
- `Context-Aware Loading` — docs/getting-started.md:67 — used here
- `Skill Anatomy` — docs/getting-started.md:75 — used here
- `Using Agents` — docs/getting-started.md:92 — used here
- `Five-axis code review` — docs/getting-started.md:98 — used here
- `Core Web Vitals` — docs/getting-started.md:101 — used here
- `Using Commands` — docs/getting-started.md:105 — used here
- `Using References` — docs/getting-started.md:127 — used here
- `living documents` — docs/getting-started.md:153 — used here

## Structure
- # Getting Started with agent-skills
- ## How Skills Work
- ## Quick Start (Any Agent)
- ### 1. Clone the repository
- ### 2. Choose a skill
- ### 3. Load the skill into your agent
- ### 4. Use the meta-skill for discovery
- ## Recommended Setup
- ### Minimal (Start here)
- ### Full Lifecycle
- ### Context-Aware Loading
- ## Skill Anatomy
- ## Using Agents
- ## Using Commands
- ## Using References
- ## Spec and task artifacts
- ## Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lines 121-125 explicitly address dual-harness command locations: the Claude Code plugin manifest expects `.claude/commands/`, whereas the root `commands/` directory serves the Antigravity CLI. Lines 143-149 highlight a known packaging limitation (issue #361) where installing a single skill via `npx skills add` fails to bundle referenced repo-level checklists from `references/`.

## Context cost
7104 bytes (~1776 tokens), 0 dependencies loaded into active working context. Static universal getting started guide.
