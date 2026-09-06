---
package: rjm
path: README.md
type: doc
bytes: 29662
unit: inv-rjm-195
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# README.md

## Purpose — required, verbatim
> "For platform teams, engineering managers, and orgs that want AI-assisted development with real governance. Session protocol, review gates, and ADR-steered agent behavior built in." — README.md:3

## Design intent — required
Serves as the repository's primary landing page and documentation entry point, explaining the coordinated multi-agent architecture for software development with built-in governance. It documents native marketplace installation paths for Claude Code and GitHub Copilot CLI, the six development lifecycle stages (`/spec` through `/ship`), explicit handoff protocols between the orchestrator and specialized agent roles, and developer setup instructions.

## Phase — required
cross-phase

## Inputs — required
- "taking a well-defined idea as input and executing on it." — README.md:122
- "Prefix with the agent name to route directly, or use the orchestrator for multi-step workflows." — README.md:227
- "Pick yours and paste the command(s) inside the CLI session." — README.md:21

## Outputs — required
- "Pre-flight checks, PR creation, ship report" — README.md:321
- "CVA analysis, testable acceptance criteria, critic review" — README.md:316
- "Milestones, atomic tasks (S/M/L), dependency graph, risk register" — README.md:317
- "TDD slices, atomic commits, code quality scoring" — README.md:318
- "6 quality gates (functional, non-functional, security, DevOps, DX, observability)" — README.md:319
- "5-axis review (architecture, security, quality, tests, standards)" — README.md:320

## Invokes — required
- command /spec — README.md:316
- command /plan — README.md:317
- command /build — README.md:318
- command /test — README.md:319
- command /review — README.md:320
- command /ship — README.md:321
- doc docs/workflow-commands.md — README.md:344
- doc AGENTS.md — README.md:421
- doc CONTRIBUTING.md — README.md:487
- doc docs/getting-started.md — README.md:532
- doc docs/agent-catalog.md — README.md:533
- doc docs/skill-reference.md — README.md:534
- doc docs/architecture.md — README.md:535
- doc docs/customization.md — README.md:536
- doc docs/installation.md — README.md:537
- doc docs/project-structure.md — README.md:538
- doc CLAUDE.md — README.md:541
- doc docs/when-to-use.md — README.md:544
- doc docs/ideation-workflow.md — README.md:545
- doc docs/markdown-linting.md — README.md:546

## Invoked by — required
entry point

## Concepts named — required, verbatim
- `DEFINE` — README.md:306 — defined here | used here
- `PLAN` — README.md:306 — defined here | used here
- `BUILD` — README.md:306 — defined here | used here
- `VERIFY` — README.md:306 — defined here | used here
- `REVIEW` — README.md:306 — defined here | used here
- `SHIP` — README.md:306 — defined here | used here
- `analyst` — README.md:57 — defined here | used here
- `architect` — README.md:57 — defined here | used here
- `implementer` — README.md:57 — defined here | used here
- `qa` — README.md:57 — defined here | used here
- `security` — README.md:57 — defined here | used here
- `devops` — README.md:57 — defined here | used here
- `independent-thinker` — README.md:277 — defined here | used here
- `high-level-advisor` — README.md:289 — defined here | used here
- `roadmap` — README.md:295 — defined here | used here
- `critic` — README.md:122 — defined here | used here
- `orchestrator` — README.md:122 — defined here | used here
- `milestone-planner` — README.md:263 — defined here | used here
- `explainer` — README.md:257 — defined here | used here
- `retrospective` — README.md:407 — defined here | used here
- `skillbook` — README.md:408 — defined here | used here
- `task-decomposer` — README.md:410 — defined here | used here
- `pr-comment-responder` — README.md:413 — defined here | used here
- `debug` — README.md:414 — defined here | used here
- `janitor` — README.md:415 — defined here | used here
- `issue-feature-review` — README.md:416 — defined here | used here
- `merge-resolver` — README.md:417 — defined here | used here
- `negotiation` — README.md:418 — defined here | used here
- `backlog-generator` — README.md:419 — defined here | used here
- `Agent` — README.md:142 — defined here | used here
- `Orchestrator` — README.md:143 — defined here | used here
- `Handoff` — README.md:144 — defined here | used here
- `Skill` — README.md:145 — defined here | used here
- `Memory` — README.md:146 — defined here | used here
- `ADR` — README.md:147 — defined here | used here
- `Quality Gate` — README.md:148 — defined here | used here
- `Multi-Agent Impact Analysis Framework` — README.md:130 — defined here | used here
- `CVA analysis` — README.md:316 — defined here | used here
- `RICE` — README.md:295 — defined here | used here
- `KANO` — README.md:295 — defined here | used here
- `RADAR protocol` — README.md:418 — defined here | used here
- `/spec` — README.md:311 — defined here | used here
- `/plan` — README.md:311 — defined here | used here
- `/build` — README.md:311 — defined here | used here
- `/test` — README.md:311 — defined here | used here
- `/review` — README.md:311 — defined here | used here
- `/ship` — README.md:311 — defined here | used here

## Structure
# AI Agent System — README.md:1
## Fastest Start — README.md:19
### What You Get — README.md:46
### Troubleshooting — README.md:59
## Where to Start — README.md:70
## Table of Contents — README.md:82
## Purpose and Scope — README.md:116
### What is AI Agents? — README.md:118
### Core Capabilities — README.md:126
### Key Concepts — README.md:138
## Alternative: Full Installation — README.md:152
### Quick Install (CLI marketplace) — README.md:158
### Verify Installation — README.md:185
### Supported Platforms — README.md:209
## Quick Start — README.md:221
### Examples — README.md:225
#### Simple Scenarios — README.md:229
#### Advanced Scenarios — README.md:267
## Lifecycle Commands — README.md:301
## System Architecture — README.md:348
### How Agents Work Together — README.md:350
### Agent Catalog — README.md:391
### Directory Structure — README.md:423
## Additional Troubleshooting — README.md:444
## Contributing — README.md:485
### Developer Setup — README.md:489
### Agent Development — README.md:516
## Documentation — README.md:528
## License — README.md:550

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · README.md:15 · placeholder gif asset URL `https://github.com/rjmurillo/ai-agents/assets/TODO-record-gif-before-v0.2` not yet created or published.
- doc-drift · README.md:311 · documents `/review` alongside slash commands `/spec`, `/plan`, `/build`, `/test`, `/ship`, but review is implemented as a skill (`.claude/skills/review/`) rather than a slash command per ADR-064, and `.claude/commands/review.md` does not exist.

## Observations
Documents the dual Claude Code and Copilot CLI marketplace distribution model (`.claude-plugin/marketplace.json` and `.github/plugin/marketplace.json`). Highlights graceful degradation where Python 3.10+ hooks skip with warnings rather than blocking execution when Python is absent or below 3.10.

## Context cost
29662 bytes, ~7415 tokens.
