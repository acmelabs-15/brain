---
package: addy
path: docs/agents.md
type: doc
bytes: 6996
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/agents.md

## Purpose — required, verbatim
> "Specialist personas that play a single role with a single perspective. Each persona is a Markdown file consumed as a system prompt by your harness (Claude Code, Cursor, Copilot, etc.)." — docs/agents.md:3

## Design intent — required
Defines the architecture, composition hierarchy, and operational rules for specialist agent personas, enforcing a three-layer model (Skill = how, Persona = who, Command = when). It prohibits personas from delegating to other personas, restricts multi-agent collaboration to parallel fan-out with single-agent synthesis (/ship), and details Claude Code subagent and Agent Teams interop. Without this document, agent designs risk introducing unnecessary routing intermediaries (meta-orchestrators), cyclic delegation loops, and fragmented context.

## Phase — required
cross-phase

## Inputs — required
- Staged changes, PRs, diffs, or architecture questions — docs/agents.md:29-32, 74

## Outputs — required
- Specialized reports from single personas, or synthesized go/no-go decisions with rollback plans — docs/agents.md:19, 44, 70

## Invokes — required
- agent agents/code-reviewer.md — docs/agents.md:7
- agent agents/security-auditor.md — docs/agents.md:8
- agent agents/test-engineer.md — docs/agents.md:9
- agent agents/web-performance-auditor.md — docs/agents.md:10
- skill code-review-and-quality — docs/agents.md:18
- reference references/orchestration-patterns.md — docs/agents.md:46

## Invoked by — required
- doc README.md — README.md:297

## Concepts named — required, verbatim
- `Agent Personas` — docs/agents.md:1 — defined here
- `Direct persona invocation` — docs/agents.md:26 — defined here
- `fan-out` — docs/agents.md:41, 60 — defined here
- `meta-orchestrator` — docs/agents.md:81 — defined here
- `Agent Teams` — docs/agents.md:108, 111 — used here

## Structure
- Agent Personas — docs/agents.md:1
- How personas relate to skills and commands — docs/agents.md:12
- When to use each — docs/agents.md:24
- Direct persona invocation — docs/agents.md:26
- Slash command (single persona behind it) — docs/agents.md:34
- Slash command (orchestrator — fan-out) — docs/agents.md:41
- Decision matrix — docs/agents.md:48
- Worked example: valid orchestration — docs/agents.md:58
- Worked example: invalid orchestration (do not build this) — docs/agents.md:79
- Rules for personas — docs/agents.md:99
- Claude Code interop — docs/agents.md:106
- Adding a new persona — docs/agents.md:117

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly analyzes the failure mode of a `meta-orchestrator`: "Pure routing layer with no domain value / Adds two paraphrasing hops → information loss + 2× token cost" (lines 94-95). Differentiates Claude Code subagents (isolated execution returning reports to lead) from Agent Teams (teammates messaging directly for competing hypotheses).

## Context cost
6,996 bytes (approx. 1,700 tokens) for this documentation file. References four agent personas and orchestration patterns.
