---
package: addy
path: docs/copilot-setup.md
type: doc
bytes: 3496
unit: inv-addy-6
---

# docs/copilot-setup.md

## Purpose — required, verbatim
> "Copilot supports creating agent skills using a `.github/skills`, `.claude/skills`, or `.agents/skills` directory in your repository." — docs/copilot-setup.md:7

## Design intent — required
Provides platform-specific configuration and integration instructions for running `agent-skills` inside GitHub Copilot (VS Code extension and Copilot Chat). Solves critical harness integration pitfalls by explicitly documenting Copilot's strict persona naming constraint (`*.agent.md` double extension, warning that standard `*.md` files are silently ignored), outlining skill directory discovery paths (`.github/skills`, `.claude/skills`, `.agents/skills`), defining chat-based persona invocation conventions (`@code-reviewer`, `@test-engineer`, `@security-auditor`), and supplying a project-level `.github/copilot-instructions.md` configuration template that distills core lifecycle engineering rules (TDD, Prove-It pattern, 5-axis review, incremental delivery) to prevent context exhaustion from inlining full skill files. Without this document, Copilot users would encounter silent failures with persona files or overload prompt context by injecting raw full-length skills.

## Phase — required
`none`

## Inputs — required
- GitHub Copilot execution environment (VS Code extension, Copilot Chat, workspace agents)
- `agent-skills` source assets:
  - `skills/test-driven-development/SKILL.md`
  - `skills/code-review-and-quality/SKILL.md`
  - `agents/code-reviewer.md`
  - `agents/test-engineer.md`
  - `agents/security-auditor.md`
- Official GitHub Copilot documentation:
  - "Creating agent skills for GitHub Copilot" (`https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills`)
  - "VS Code custom agents docs" (`https://code.visualstudio.com/docs/copilot/customization/custom-agents#_custom-agent-file-structure`)

## Outputs — required
- Setup shell commands to populate `.github/skills/` and `.github/agents/*.agent.md` — docs/copilot-setup.md:9-15, 27-33
- Specialized agent persona invocation commands in Copilot Chat (`@code-reviewer Review this PR`, `@test-engineer Analyze test coverage for this module`, `@security-auditor Check this endpoint for vulnerabilities`) — docs/copilot-setup.md:35-38
- Recommended configuration template for `.github/copilot-instructions.md` covering Testing, Code Quality, Implementation, and Boundaries — docs/copilot-setup.md:53-76
- Concrete usage tips on instruction conciseness, agent review specialization, chat context reference, and PR review workflow integration — docs/copilot-setup.md:82-87

## Invokes — required
- skill skills/test-driven-development/SKILL.md — docs/copilot-setup.md:10, 13
- skill skills/code-review-and-quality/SKILL.md — docs/copilot-setup.md:10, 14
- agent agents/code-reviewer.md — docs/copilot-setup.md:30, 36, 85, 87
- agent agents/test-engineer.md — docs/copilot-setup.md:31, 37, 85
- agent agents/security-auditor.md — docs/copilot-setup.md:32, 38, 85

## Invoked by — required
- doc README.md — README.md:165

## Concepts named — required, verbatim
- `agent-skills` — docs/copilot-setup.md:1, 21 — used here
- `GitHub Copilot` — docs/copilot-setup.md:1, 17, 23, 44, 51 — used here
- `Copilot` — docs/copilot-setup.md:7, 21, 24, 84, 85, 87 — used here
- `Copilot Instructions` — docs/copilot-setup.md:5 — defined here
- `agent skills` — docs/copilot-setup.md:7, 17 — used here
- `.github/skills` — docs/copilot-setup.md:7, 10, 13, 14 — used here
- `.claude/skills` — docs/copilot-setup.md:7 — used here
- `.agents/skills` — docs/copilot-setup.md:7 — used here
- `test-driven-development` — docs/copilot-setup.md:10, 13 — used here
- `code-review-and-quality` — docs/copilot-setup.md:10, 14 — used here
- `Agent Personas` — docs/copilot-setup.md:19 — used here
- `*.agent.md` — docs/copilot-setup.md:19, 23 — defined here
- `custom agent files` — docs/copilot-setup.md:23 — used here
- `custom agents` — docs/copilot-setup.md:25 — used here
- `.github/agents` — docs/copilot-setup.md:29, 30, 31, 32 — used here
- `code-reviewer` — docs/copilot-setup.md:30, 36, 85, 87 — used here
- `test-engineer` — docs/copilot-setup.md:31, 37, 85 — used here
- `security-auditor` — docs/copilot-setup.md:32, 38, 85 — used here
- `Copilot Chat` — docs/copilot-setup.md:35, 80, 86 — used here
- `Custom Instructions` — docs/copilot-setup.md:40, 44 — used here
- `Recommended Configuration` — docs/copilot-setup.md:47 — defined here
- `.github/copilot-instructions.md` — docs/copilot-setup.md:49, 51 — used here
- `Project Coding Standards` — docs/copilot-setup.md:54 — defined here
- `Testing` — docs/copilot-setup.md:56 — defined here
- `TDD` — docs/copilot-setup.md:57 — used here
- `Prove-It pattern` — docs/copilot-setup.md:58 — used here
- `Test hierarchy` — docs/copilot-setup.md:59 — defined here
- `Code Quality` — docs/copilot-setup.md:62 — defined here
- `five axes: correctness, readability, architecture, security, performance` — docs/copilot-setup.md:63 — used here
- `Implementation` — docs/copilot-setup.md:67 — defined here
- `implement → test → verify → commit` — docs/copilot-setup.md:69 — defined here
- `Boundaries` — docs/copilot-setup.md:72 — defined here
- `Specialized Agents` — docs/copilot-setup.md:78 — used here
- `PR reviews` — docs/copilot-setup.md:87 — used here

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
- `doc-drift` · `docs/copilot-setup.md:30-32, 85` · Documents and copies only three agent personas (`code-reviewer`, `test-engineer`, `security-auditor`), completely omitting `agents/web-performance-auditor.md` (`web-performance-auditor.agent.md`) without explaining whether web performance auditing is unsupported or intentionally excluded in Copilot setups (unlike `docs/antigravity-setup.md:48` and `docs/gemini-cli-setup.md:110` which configure all four agents).
- `doc-drift` · `docs/copilot-setup.md:13-14, 30-32` · Bash copy instructions use pseudocode placeholder `/path/to/agent-skills/` requiring manual user path substitution rather than providing relative path or CLI automation commands.

## Observations
- **Critical Harness Extension Requirement**: Documents the subtle but fatal pitfall that GitHub Copilot requires custom agent files to end in `*.agent.md`, silently ignoring standard `*.md` files (lines 23-24).
- **Distilled System Prompt Pattern**: Rather than dumping full multi-thousand-token skill files into `.github/copilot-instructions.md`, it advocates distilling the core lifecycle rules into an ultra-dense, categorized checklist (Testing, Code Quality, Implementation, Boundaries), keeping prompt token cost low and instruction adherence high.
- **Native @-Mention Persona Invocation**: Employs Copilot Chat's native `@<agent>` dispatch syntax (`@code-reviewer Review this PR`) to provide interactive, persona-specific review triggers.
- **Cross-Framework Alignment Pattern**: The 4-phase micro-loop specified in line 69 (`implement → test → verify → commit`) mirrors the inner-loop cadence of both Addy's incremental implementation and Superpowers' task execution loop.

## Context cost
3,496 bytes (~874 tokens). Pure setup guide; does not load external files at runtime.
