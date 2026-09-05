---
package: addy
path: docs/developer-onboarding.md
type: doc
bytes: 7850
unit: inv-addy-5
aliases: []
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/developer-onboarding.md

## Purpose — required, verbatim
> "This guide is for people working **on** the agent-skills repository itself: contributing skills, fixing docs, improving the eval harness." — docs/developer-onboarding.md:3

## Design intent — required
Introduces contributors to the architecture, mental model, and verification tooling of the agent-skills repository. It defines the five repository layers (Skills, Personas, Commands, References, Evals), enforces architectural separation (orchestration via user/commands rather than persona-to-persona chaining), outlines the multi-tiered local verification loop, and provides structured checklists for contributions.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- doc getting-started.md — docs/developer-onboarding.md:3
- doc CONTRIBUTING.md — docs/developer-onboarding.md:5
- doc skill-anatomy.md — docs/developer-onboarding.md:5
- doc evals/README.md — docs/developer-onboarding.md:5
- reference orchestration-patterns.md — docs/developer-onboarding.md:23
- config AGENTS.md — docs/developer-onboarding.md:26
- doc CLAUDE.md — docs/developer-onboarding.md:26
- script validate-skills.js — docs/developer-onboarding.md:56
- script validate-commands.js — docs/developer-onboarding.md:59
- script run-evals.js — docs/developer-onboarding.md:62
- script session-start.sh — docs/developer-onboarding.md:67
- skill using-agent-skills — docs/developer-onboarding.md:68
- script session-start-test.sh — docs/developer-onboarding.md:69
- doc README.md — docs/developer-onboarding.md:111

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:5

## Concepts named — required, verbatim
- `Skills` — docs/developer-onboarding.md:15 — defined here
- `Personas` — docs/developer-onboarding.md:16 — defined here
- `Commands` — docs/developer-onboarding.md:17 — defined here
- `References` — docs/developer-onboarding.md:18 — defined here
- `Evals` — docs/developer-onboarding.md:19 — defined here
- `parallel fan-out` — docs/developer-onboarding.md:23 — used here
- `AGENTS.md` — docs/developer-onboarding.md:26 — used here
- `CLAUDE.md` — docs/developer-onboarding.md:26 — used here
- `Tier 1` — docs/developer-onboarding.md:55 — defined here
- `Command parity` — docs/developer-onboarding.md:58 — defined here
- `Tier 2` — docs/developer-onboarding.md:61 — defined here
- `Tier 3` — docs/developer-onboarding.md:64 — defined here
- `Hook regression test` — docs/developer-onboarding.md:67 — defined here
- `stemmed TF-IDF` — docs/developer-onboarding.md:72 — used here
- `code-review-and-quality` — docs/developer-onboarding.md:107 — used here
- `test-driven-development` — docs/developer-onboarding.md:113 — used here

## Structure
- `# Developer Onboarding` — docs/developer-onboarding.md:1
- `## 1. The mental model` — docs/developer-onboarding.md:9
- `## 2. Local setup` — docs/developer-onboarding.md:30
- `## 3. The verification loop` — docs/developer-onboarding.md:50
- `## 4. Contribution paths` — docs/developer-onboarding.md:76
- `### Path 1: Fixing or improving an existing skill (most common, best first PR)` — docs/developer-onboarding.md:78
- `### Path 2: Proposing a new skill (higher bar, do the pre-flight)` — docs/developer-onboarding.md:84
- `### Path 3: Docs, references, harness` — docs/developer-onboarding.md:92
- `## 5. Pre-PR checklist` — docs/developer-onboarding.md:98
- `## 6. Suggested reading order` — docs/developer-onboarding.md:109

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lays down key architectural invariants for the repository: personas never invoke other personas (the only endorsed multi-persona orchestration is parallel fan-out with a merge step), skills link rather than duplicate content, and repository-root agent configs (`AGENTS.md`, `CLAUDE.md`) are scoped strictly to the development of this repository and must never be copied into consumer projects. Explains Tier 2 routing evals based on stemmed TF-IDF over skill descriptions.

## Context cost
7850 bytes, ~1960 tokens.
