---
package: addy
path: docs/getting-started.md
type: doc
bytes: 7104
unit: inv-addy-5
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/getting-started.md

## Purpose — required, verbatim
> "agent-skills works with any AI coding agent that accepts Markdown instructions. This guide covers the universal approach." — docs/getting-started.md:3

## Design intent — required
Acts as the universal entry point and user guide for agent-skills across any Markdown-capable AI coding agent. It introduces skill mechanics and anatomy, establishes minimal and full-lifecycle adoption baselines, catalogs slash commands, agent personas, and supplementary reference checklists, and defines how living working artifacts are tracked throughout a feature's lifecycle.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

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
- agent code-reviewer.md — docs/getting-started.md:98
- agent test-engineer.md — docs/getting-started.md:99
- agent security-auditor.md — docs/getting-started.md:100
- agent web-performance-auditor.md — docs/getting-started.md:101
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
- doc adoption-guide.md — docs/adoption-guide.md:5
- doc developer-onboarding.md — docs/developer-onboarding.md:3
- doc cursor-setup.md — docs/cursor-setup.md:223

## Concepts named — required, verbatim
- `When to use` — docs/getting-started.md:22 — defined here
- `Process` — docs/getting-started.md:23 — defined here
- `Verification` — docs/getting-started.md:24 — defined here
- `Common rationalizations` — docs/getting-started.md:25 — defined here
- `Red flags` — docs/getting-started.md:26 — defined here
- `using-agent-skills` — docs/getting-started.md:40 — used here
- `spec-driven-development` — docs/getting-started.md:50 — used here
- `test-driven-development` — docs/getting-started.md:51 — used here
- `code-review-and-quality` — docs/getting-started.md:52 — used here
- `planning-and-task-breakdown` — docs/getting-started.md:61 — used here
- `incremental-implementation` — docs/getting-started.md:62 — used here
- `security-and-hardening` — docs/getting-started.md:63 — used here
- `shipping-and-launch` — docs/getting-started.md:64 — used here
- `frontend-ui-engineering` — docs/getting-started.md:71 — used here
- `debugging-and-error-recovery` — docs/getting-started.md:72 — used here
- `ci-cd-and-automation` — docs/getting-started.md:73 — used here
- `Skill Anatomy` — docs/getting-started.md:75 — defined here
- `code-reviewer.md` — docs/getting-started.md:98 — used here
- `test-engineer.md` — docs/getting-started.md:99 — used here
- `security-auditor.md` — docs/getting-started.md:100 — used here
- `web-performance-auditor.md` — docs/getting-started.md:101 — used here
- `.claude/commands/` — docs/getting-started.md:107 — used here
- `/spec` — docs/getting-started.md:111 — used here
- `/plan` — docs/getting-started.md:112 — used here
- `/build` — docs/getting-started.md:113 — used here
- `/build auto` — docs/getting-started.md:114 — used here
- `/test` — docs/getting-started.md:115 — used here
- `/review` — docs/getting-started.md:116 — used here
- `/code-simplify` — docs/getting-started.md:117 — used here
- `/ship` — docs/getting-started.md:118 — used here
- `/webperf` — docs/getting-started.md:119 — used here
- `testing-patterns.md` — docs/getting-started.md:133 — used here
- `performance-checklist.md` — docs/getting-started.md:134 — used here
- `security-checklist.md` — docs/getting-started.md:135 — used here
- `accessibility-checklist.md` — docs/getting-started.md:136 — used here
- `definition-of-done.md` — docs/getting-started.md:137 — used here
- `observability-checklist.md` — docs/getting-started.md:138 — used here
- `orchestration-patterns.md` — docs/getting-started.md:139 — used here
- `SPEC.md` — docs/getting-started.md:153 — used here
- `tasks/plan.md` — docs/getting-started.md:153 — used here
- `tasks/todo.md` — docs/getting-started.md:153 — used here

## Structure
- `# Getting Started with agent-skills` — docs/getting-started.md:1
- `## How Skills Work` — docs/getting-started.md:5
- `## Quick Start (Any Agent)` — docs/getting-started.md:11
- `### 1. Clone the repository` — docs/getting-started.md:13
- `### 2. Choose a skill` — docs/getting-started.md:19
- `### 3. Load the skill into your agent` — docs/getting-started.md:28
- `### 4. Use the meta-skill for discovery` — docs/getting-started.md:38
- `## Recommended Setup` — docs/getting-started.md:42
- `### Minimal (Start here)` — docs/getting-started.md:46
- `### Full Lifecycle` — docs/getting-started.md:56
- `### Context-Aware Loading` — docs/getting-started.md:67
- `## Skill Anatomy` — docs/getting-started.md:75
- `## Using Agents` — docs/getting-started.md:92
- `## Using Commands` — docs/getting-started.md:105
- `## Using References` — docs/getting-started.md:127
- `## Spec and task artifacts` — docs/getting-started.md:151
- `## Tips` — docs/getting-started.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents a known ecosystem portability gap (tracked in issue #361): installing an isolated skill via `npx skills add ... --skill <name>` copies only `skills/<name>/` and leaves repo-level `references/` checklists unavailable unless the whole repo is cloned or checklists are copied locally into the skill. Clarifies that root `commands/` belongs to Antigravity CLI and is distinct from `.claude/commands/`. Identifies `SPEC.md`, `tasks/plan.md`, and `tasks/todo.md` as temporary living artifacts managed across lifecycle phases.

## Context cost
7104 bytes, ~1776 tokens.
