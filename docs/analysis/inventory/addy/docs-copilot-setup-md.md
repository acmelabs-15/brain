---
package: addy
path: docs/copilot-setup.md
type: doc
bytes: 3496
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/copilot-setup.md

## Purpose — required, verbatim
> "Copilot supports creating agent skills using a `.github/skills`, `.claude/skills`, or `.agents/skills` directory in your repository." — docs/copilot-setup.md:7 (no explicit purpose statement)

## Design intent — required
Guides developers on integrating agent-skills into GitHub Copilot in VS Code. It explains directory structures for custom skills (`.github/skills/`), the mandatory `*.agent.md` file naming convention for custom agent personas (`.github/agents/`), global user-level custom instructions, and project-level coding standards via `.github/copilot-instructions.md`. Without this guide, Copilot users would encounter silent failures (such as Copilot silently ignoring `.md` files that lack the `.agent.md` extension) and miss out on structured review personas in Copilot Chat.

## Phase — required
none

## Inputs — required
GitHub Copilot configuration specifications, VS Code custom agent documentation, and agent-skills skills and personas (`test-driven-development`, `code-review-and-quality`, `code-reviewer`, `test-engineer`, `security-auditor`).

## Outputs — required
- `.github/skills/test-driven-development/SKILL.md` — docs/copilot-setup.md:13
- `.github/skills/code-review-and-quality/SKILL.md` — docs/copilot-setup.md:14
- `.github/agents/code-reviewer.agent.md` — docs/copilot-setup.md:30
- `.github/agents/test-engineer.agent.md` — docs/copilot-setup.md:31
- `.github/agents/security-auditor.agent.md` — docs/copilot-setup.md:32
- `.github/copilot-instructions.md` — docs/copilot-setup.md:51

## Invokes — required
- skill test-driven-development — docs/copilot-setup.md:13
- skill code-review-and-quality — docs/copilot-setup.md:14
- agent code-reviewer — docs/copilot-setup.md:30
- agent test-engineer — docs/copilot-setup.md:31
- agent security-auditor — docs/copilot-setup.md:32

## Invoked by — required
- doc README.md — README.md:165

## Concepts named — required, verbatim
- `agent skills` — docs/copilot-setup.md:7 — used here
- `Agent Personas` — docs/copilot-setup.md:19 — used here
- `Custom Instructions` — docs/copilot-setup.md:40 — used here
- `TDD` — docs/copilot-setup.md:57 — used here
- `Prove-It pattern` — docs/copilot-setup.md:58 — used here
- `Test hierarchy` — docs/copilot-setup.md:59 — used here
- `Code Quality` — docs/copilot-setup.md:62 — used here

## Structure
- # Using agent-skills with GitHub Copilot
- ## Setup
- ### Copilot Instructions
- ### Agent Personas (*.agent.md)
- ### Custom Instructions (User Level)
- ## Recommended Configuration
- ### .github/copilot-instructions.md
- ### Specialized Agents
- ## Usage Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lines 23-25 highlight a critical platform constraint: GitHub Copilot silently ignores custom agent files named `*.md`, strictly requiring `*.agent.md`. Lines 53-76 provide a recommended template for `.github/copilot-instructions.md` embedding TDD, Prove-It pattern, five-axis review, and operational boundaries.

## Context cost
3496 bytes (~874 tokens), 0 loaded dependencies. Static setup guide not intended for active agent working set.
