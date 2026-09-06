---
package: rjm
path: templates/agents/explainer.shared.md
type: agent
bytes: 6798
unit: inv-rjm-316
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/explainer.shared.md

## Purpose — required, verbatim
> "Documentation specialist who writes PRDs, explainers, and technical specifications that junior developers understand without questions. Uses explicit language, INVEST criteria for user stories, and unambiguous acceptance criteria. Use when you need clarity, accessible documentation, templates, or requirements that define scope and boundaries." — templates/agents/explainer.shared.md:3

## Design intent — required
Multi-harness agent template defining the documentation and technical specification authoring specialist for VS Code and Copilot CLI platforms. It equips agents to write PRDs, explainers, and specs calibrated by default for junior developers (Grade 9 reading level) without conversational drag, enforcing INVEST criteria on user stories, direct production with inline assumptions over premature clarification gating, and pre-emission prose audits to eliminate AI jargon.

## Phase — required
rjm:plan

## Inputs — required
- Feature, concept, or topic to document via `argument-hint` ("Name the feature, concept, or topic to document") or summon prompt.
- Codebase context and existing documentation inspected via read-only tools (`read`, `Grep`, `Glob`, `WebSearch`, `WebFetch`).
- Answers to structured clarifying questions (Problem, User, Functionality, User stories, Acceptance criteria, Non-goals) when read-only checks cannot resolve ambiguity.
- Historical context and memory via Serena (`mcp__serena__read_memory`).

## Outputs — required
- PRD documents saved to `.agents/planning/PRD-[feature-name].md`.
- Explainer documents saved to `.agents/planning/EXPLAINER-[topic].md`.
- GitHub issues created via Bash: `gh issue create --title "Explainer: [feature]"`.
- Persistent memory updates via Serena (`mcp__serena__write_memory`).

## Invokes — required
- skill prose-self-check — templates/agents/explainer.shared.md:22
- agent milestone-planner — templates/agents/explainer.shared.md:138
- agent critic — templates/agents/explainer.shared.md:139
- agent implementer — templates/agents/explainer.shared.md:140

## Invoked by — required
- doc explainer — docs/agent-catalog.md:26
- doc templates/agents/*.shared.md — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:34
- doc templates/agents/[name].shared.md — CONTRIBUTING.md:474
- doc templates/agents/*.shared.md — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:56

## Concepts named — required, verbatim
- `Prose Self-Check` — templates/agents/explainer.shared.md:20 — defined here
- `prose-self-check` — templates/agents/explainer.shared.md:22 — used here
- `four-layer AI-vernacular audit` — templates/agents/explainer.shared.md:22 — used here
- `INVEST` — templates/agents/explainer.shared.md:52 — used here
- `Audience Modes` — templates/agents/explainer.shared.md:63 — defined here
- `PRD Structure` — templates/agents/explainer.shared.md:88 — defined here
- `Explainer Structure` — templates/agents/explainer.shared.md:103 — defined here
- `Working Principles` — templates/agents/explainer.shared.md:113 — defined here
- `Anti-Patterns` — templates/agents/explainer.shared.md:122 — defined here
- `Handoff` — templates/agents/explainer.shared.md:134 — defined here

## Structure
- # Explainer Agent — templates/agents/explainer.shared.md:16
- ## Prose Self-Check — templates/agents/explainer.shared.md:20
- ## When to Produce Directly vs Ask First — templates/agents/explainer.shared.md:24
- ## When You Do Ask Questions — templates/agents/explainer.shared.md:37
- ## Audience Modes — templates/agents/explainer.shared.md:63
- ## Tools — templates/agents/explainer.shared.md:76
- ## Output Locations — templates/agents/explainer.shared.md:80
- ## PRD Structure — templates/agents/explainer.shared.md:88
- ## Explainer Structure — templates/agents/explainer.shared.md:103
- ## Working Principles — templates/agents/explainer.shared.md:113
- ## Anti-Patterns — templates/agents/explainer.shared.md:122
- ## Handoff — templates/agents/explainer.shared.md:134

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/prose-self-check/SKILL.md — templates/agents/explainer.shared.md:22 — references prose-self-check skill at `.claude/skills/prose-self-check/SKILL.md` which does not exist in the repository (exists under `src/copilot-cli/skills/prose-self-check/`).

## Observations
- Variant relation: shares 93% of distinct lines with `.claude/agents/explainer.md` (duplication ledger V9, 1 hunk). Divergence card `claude-agents-explainer-md--templates-agents-explainer-shared-md.md` documents harness substitution between Claude Code frontmatter metadata and multi-harness VS Code / Copilot CLI toolset definitions (`tools_vscode`, `tools_copilot`).
- Provenance: declared in `CONTRIBUTING.md:474` ("Generated from: templates/agents/[name].shared.md") and `src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:34` as the canonical source template for `src/copilot-cli/agents/` and `src/vs-code-agents/`.
- Bias towards direct production: explicitly instructs agents to avoid over-engineering with excessive clarifying questions on standard patterns (2FA, forgot password, rate limiting) by producing output directly with inline assumptions.
- Audience calibration: mandates Grade 9 reading level by default, requiring definitions for all technical terms and prerequisites on first use.

## Context cost
6798 bytes (approx. 1700 tokens).
