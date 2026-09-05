---
package: addy
path: docs/developer-onboarding.md
type: doc
bytes: 7850
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/developer-onboarding.md

## Purpose — required, verbatim
> "This guide is for people working **on** the agent-skills repository itself: contributing skills, fixing docs, improving the eval harness." — docs/developer-onboarding.md:3

## Design intent — required
Serves as the mental model guide and orientation for contributors to the agent-skills repository itself. It lays out the five composable layers (skills, personas, commands, references, evals), explains core architectural rules (such as user/command orchestration, banning persona-to-persona invocation, and avoiding content duplication), describes the local verification loop (Tier 1 structural validation, command parity, Tier 2 lexical routing, Tier 3 behavioral evals, hook regression tests), and outlines contribution workflows. Without this document, contributors would lack repo architecture guidelines, leading to miscategorized assets, duplicated content across skills, and broken CI validation.

## Phase — required
none

## Inputs — required
Repository contribution guidelines (CONTRIBUTING.md), format specification (skill-anatomy.md), eval framework specification (evals/README.md), and developer environment tooling (Node 20+, bash, jq, gh CLI, Claude Code).

## Outputs — required
none

## Invokes — required
- doc getting-started.md — docs/developer-onboarding.md:3
- doc CONTRIBUTING.md — docs/developer-onboarding.md:5
- doc skill-anatomy.md — docs/developer-onboarding.md:5
- doc evals/README.md — docs/developer-onboarding.md:5
- reference orchestration-patterns.md — docs/developer-onboarding.md:23
- doc AGENTS.md — docs/developer-onboarding.md:26
- doc CLAUDE.md — docs/developer-onboarding.md:26
- script scripts/validate-skills.js — docs/developer-onboarding.md:56
- script scripts/validate-commands.js — docs/developer-onboarding.md:59
- script scripts/run-evals.js — docs/developer-onboarding.md:62
- script hooks/session-start-test.sh — docs/developer-onboarding.md:69
- doc README.md — docs/developer-onboarding.md:111
- skill using-agent-skills — docs/developer-onboarding.md:112
- skill test-driven-development — docs/developer-onboarding.md:113

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:5

## Concepts named — required, verbatim
- `Skills` — docs/developer-onboarding.md:15 — used here
- `Personas` — docs/developer-onboarding.md:16 — used here
- `Commands` — docs/developer-onboarding.md:17 — used here
- `References` — docs/developer-onboarding.md:18 — used here
- `Evals` — docs/developer-onboarding.md:19 — used here
- `parallel fan-out` — docs/developer-onboarding.md:23 — used here
- `command parity` — docs/developer-onboarding.md:74 — used here
- `verification loop` — docs/developer-onboarding.md:50 — used here
- `Tier 1` — docs/developer-onboarding.md:55 — used here
- `Tier 2` — docs/developer-onboarding.md:61 — used here
- `Tier 3` — docs/developer-onboarding.md:64 — used here
- `Hook regression test` — docs/developer-onboarding.md:67 — used here
- `TF-IDF` — docs/developer-onboarding.md:72 — used here
- `trigger prompts` — docs/developer-onboarding.md:90 — used here
- `Pre-PR checklist` — docs/developer-onboarding.md:98 — used here

## Structure
- # Developer Onboarding
- ## 1. The mental model
- ## 2. Local setup
- ## 3. The verification loop
- ## 4. Contribution paths
- ### Path 1: Fixing or improving an existing skill (most common, best first PR)
- ### Path 2: Proposing a new skill (higher bar, do the pre-flight)
- ### Path 3: Docs, references, harness
- ## 5. Pre-PR checklist
- ## 6. Suggested reading order

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lines 21-27 formulate two foundational structural rules: "The user (or a slash command) is the orchestrator. Personas never invoke other personas; the only endorsed multi-persona pattern is parallel fan-out with a merge step" and "Don't duplicate, reference." Lines 26-27 clarify that root `AGENTS.md` and `CLAUDE.md` configure agents working on this repository itself rather than being reusable assets for user projects.

## Context cost
7850 bytes (~1962 tokens), 0 dependencies loaded into active working context. Static contributor guide kept out of agent working set.
