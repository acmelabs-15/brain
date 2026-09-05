---
package: addy
path: docs/copilot-setup.md
type: doc
bytes: 3496
unit: inv-addy-5
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/copilot-setup.md

## Purpose — required, verbatim
> "Copilot supports creating agent skills using a `.github/skills`, `.claude/skills`, or `.agents/skills` directory in your repository." — docs/copilot-setup.md:7
(no explicit purpose statement)

## Design intent — required
Explains how to configure and deploy agent-skills within GitHub Copilot. It documents the directory requirements for agent skills, highlights the platform-specific naming requirement for custom agent personas (`*.agent.md`), and supplies recommended project-level coding standards for `.github/copilot-instructions.md`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill test-driven-development — docs/copilot-setup.md:10
- skill code-review-and-quality — docs/copilot-setup.md:10
- agent code-reviewer — docs/copilot-setup.md:30
- agent test-engineer — docs/copilot-setup.md:31
- agent security-auditor — docs/copilot-setup.md:32

## Invoked by — required
- doc README.md — README.md:165

## Concepts named — required, verbatim
- `.github/skills` — docs/copilot-setup.md:7 — used here
- `.claude/skills` — docs/copilot-setup.md:7 — used here
- `.agents/skills` — docs/copilot-setup.md:7 — used here
- `test-driven-development` — docs/copilot-setup.md:10 — used here
- `code-review-and-quality` — docs/copilot-setup.md:10 — used here
- `Agent Personas` — docs/copilot-setup.md:19 — used here
- `*.agent.md` — docs/copilot-setup.md:19 — used here
- `.github/agents` — docs/copilot-setup.md:29 — used here
- `code-reviewer` — docs/copilot-setup.md:30 — used here
- `test-engineer` — docs/copilot-setup.md:31 — used here
- `security-auditor` — docs/copilot-setup.md:32 — used here
- `Custom Instructions` — docs/copilot-setup.md:40 — used here
- `.github/copilot-instructions.md` — docs/copilot-setup.md:49 — used here
- `TDD` — docs/copilot-setup.md:57 — used here
- `Prove-It pattern` — docs/copilot-setup.md:58 — used here
- `five axes` — docs/copilot-setup.md:63 — used here

## Structure
- `# Using agent-skills with GitHub Copilot` — docs/copilot-setup.md:1
- `## Setup` — docs/copilot-setup.md:3
- `### Copilot Instructions` — docs/copilot-setup.md:5
- `### Agent Personas (*.agent.md)` — docs/copilot-setup.md:19
- `### Custom Instructions (User Level)` — docs/copilot-setup.md:40
- `## Recommended Configuration` — docs/copilot-setup.md:47
- `### .github/copilot-instructions.md` — docs/copilot-setup.md:49
- `### Specialized Agents` — docs/copilot-setup.md:78
- `## Usage Tips` — docs/copilot-setup.md:82

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents a silent failure failure mode in GitHub Copilot: custom agent files must end in `*.agent.md`; files named `*.md` are silently ignored without error. Outlines the "Prove-It pattern" for bug fixes (write a failing test first, then fix).

## Context cost
3496 bytes, ~875 tokens.
