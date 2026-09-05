---
package: rjm
path: .claude/agents/explainer.md
type: agent
bytes: 6718
unit: inv-rjm-66
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/explainer.md

## Purpose — required, verbatim
> "Documentation specialist who writes PRDs, explainers, and technical specifications that junior developers understand without questions. Uses explicit language, INVEST criteria for user stories, and unambiguous acceptance criteria. Use when you need clarity, accessible documentation, templates, or requirements that define scope and boundaries." — .claude/agents/explainer.md:3

## Design intent — required
Documentation and specification authoring specialist designed to produce unambiguous, highly accessible technical documentation (PRDs, explainers, and technical specifications) calibrated by default for junior developers (Grade 9 reading level). It enforces strict INVEST criteria on user stories, prevents conversational back-and-forth by defaulting to direct output with explicit inline assumptions rather than blocking on clarifying questions, and runs a mandatory multi-layer prose self-check audit to eliminate AI jargon and vernacular.

## Phase — required
rjm:plan

## Inputs — required
- Feature, concept, or topic to document via `argument-hint` ("Name the feature, concept, or topic to document") or summon prompt.
- Codebase context and existing documentation inspected via `Read`, `Grep`, `Glob`, `WebSearch`, and `WebFetch` tools.
- Answers to structured clarifying questions (Problem, User, Functionality, User stories, Acceptance criteria, Non-goals) when read-only checks cannot resolve ambiguity.
- Historical context retrieved via Serena memory (`mcp__serena__read_memory`).

## Outputs — required
- Product Requirement Documents (PRDs) saved to `.agents/planning/PRD-[feature-name].md`.
- Concept and architecture explainers saved to `.agents/planning/EXPLAINER-[topic].md`.
- GitHub issues created via `gh issue create --title "Explainer: [feature]"`.
- Persistent documentation context written to Serena memory (`mcp__serena__write_memory`).

## Invokes — required
- skill prose-self-check — .claude/agents/explainer.md:16
- agent milestone-planner — .claude/agents/explainer.md:132
- agent critic — .claude/agents/explainer.md:133
- agent implementer — .claude/agents/explainer.md:134

## Invoked by — required
- agent explainer — .agents/AGENT-SYSTEM.md:538
- agent explainer — README.md:409
- doc explainer — docs/agent-catalog.md:26
- agent explainer — src/claude/orchestrator.md:89

## Concepts named — required, verbatim
- `Prose Self-Check` — .claude/agents/explainer.md:14 — defined here
- `four-layer AI-vernacular audit` — .claude/agents/explainer.md:16 — used here
- `INVEST` — .claude/agents/explainer.md:46 — used here
- `Audience Modes` — .claude/agents/explainer.md:57 — defined here
- `PRD Structure` — .claude/agents/explainer.md:82 — defined here
- `Explainer Structure` — .claude/agents/explainer.md:97 — defined here
- `Working Principles` — .claude/agents/explainer.md:107 — defined here
- `Anti-Patterns` — .claude/agents/explainer.md:116 — defined here
- `Handoff` — .claude/agents/explainer.md:128 — defined here

## Structure
- # Explainer Agent — .claude/agents/explainer.md:10
- ## Prose Self-Check — .claude/agents/explainer.md:14
- ## When to Produce Directly vs Ask First — .claude/agents/explainer.md:18
- ## When You Do Ask Questions — .claude/agents/explainer.md:31
- ## Audience Modes — .claude/agents/explainer.md:57
- ## Tools — .claude/agents/explainer.md:70
- ## Output Locations — .claude/agents/explainer.md:74
- ## PRD Structure — .claude/agents/explainer.md:82
- ## Explainer Structure — .claude/agents/explainer.md:97
- ## Working Principles — .claude/agents/explainer.md:107
- ## Anti-Patterns — .claude/agents/explainer.md:116
- ## Handoff — .claude/agents/explainer.md:128

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/prose-self-check/SKILL.md — .claude/agents/explainer.md:16 — references prose-self-check skill file `.claude/skills/prose-self-check/SKILL.md` which does not exist in the repository (exists under `src/copilot-cli/skills/prose-self-check/`).

## Observations
- Variant relation: shares 93% of distinct lines with `templates/agents/explainer.shared.md` (duplication ledger V9).
- Anti-conversational bias: explicitly instructs the agent to default to direct output with clear inline assumptions rather than asking multiple clarifying questions on common patterns (e.g. 2FA, password reset).
- Two-tier audience calibration: defaults to Grade 9 reading level for junior developers and onboarding documentation, reserving expert mode for senior engineer specifications.

## Context cost
6718 bytes (approx. 1680 tokens).
