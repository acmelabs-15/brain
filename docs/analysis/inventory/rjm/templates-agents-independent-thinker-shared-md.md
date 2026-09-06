---
package: rjm
path: templates/agents/independent-thinker.shared.md
type: agent
bytes: 8685
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/independent-thinker.shared.md

## Purpose — required, verbatim
> "Contrarian analyst who challenges assumptions with evidence, presents alternative viewpoints, and declares uncertainty rather than guessing. Intellectually rigorous, respectfully skeptical, cites sources. Use as devil's advocate when you need opposing critique, trade-off analysis, or verification rather than validation." — templates/agents/independent-thinker.shared.md:3

## Design intent — required
The `independent-thinker` shared agent template defines a contrarian analyst role intended to combat sycophancy, groupthink, and premature consensus in software architecture and technical decision-making. Operating as an adversarial reviewer, it requires explicit evidence citations for challenged assumptions, quantitative trade-off matrices, and honest admissions of uncertainty instead of confident guesses. As a shared multi-platform template, it serves as the upstream source for generating platform-specific agents (such as VS Code and Copilot CLI configurations) while preserving cross-harness behavioral standards.

## Phase — required
rjm:strategic

## Inputs — required
- Problem statements, decisions, architectural proposals, or assumptions provided via `argument-hint` ("State the decision or assumption to challenge" — templates/agents/independent-thinker.shared.md:4) or orchestrator prompt.
- Context retrieval queries executed via Memory Router script or Serena memories (`.claude/skills/memory/scripts/search_memory.py` — templates/agents/independent-thinker.shared.md:118; `.serena/memories/` — templates/agents/independent-thinker.shared.md:129).
- Primary source documentation, benchmarks, ADRs, and papers (templates/agents/independent-thinker.shared.md:80).

## Outputs — required
- Structured contrarian evaluations following the Assumption Challenge Template (templates/agents/independent-thinker.shared.md:133) or Alternative Analysis Format (templates/agents/independent-thinker.shared.md:158).
- Tradeoff evaluation comparison matrices (templates/agents/independent-thinker.shared.md:177).
- Analysis challenge memory records written to Serena (`mcp__serena__write_memory` with `memory_file_name: "analysis-challenge-[topic]"` — templates/agents/independent-thinker.shared.md:124-125).
- Handoff recommendations routed back to the orchestrator (templates/agents/independent-thinker.shared.md:204).

## Invokes — required
- toolset editor — templates/agents/independent-thinker.shared.md:6
- tool web — templates/agents/independent-thinker.shared.md:7
- tool cognitionai/deepwiki/* — templates/agents/independent-thinker.shared.md:8
- tool perplexity/* — templates/agents/independent-thinker.shared.md:9
- toolset knowledge — templates/agents/independent-thinker.shared.md:10
- tool cloudmcp-manager/* — templates/agents/independent-thinker.shared.md:16
- tool serena/* — templates/agents/independent-thinker.shared.md:17
- script .claude/skills/memory/scripts/search_memory.py — templates/agents/independent-thinker.shared.md:118
- tool mcp__serena__write_memory — templates/agents/independent-thinker.shared.md:124
- agent architect — templates/agents/independent-thinker.shared.md:214
- agent analyst — templates/agents/independent-thinker.shared.md:215
- agent orchestrator — templates/agents/independent-thinker.shared.md:216
- agent critic — templates/agents/independent-thinker.shared.md:217

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:29

## Concepts named — required, verbatim
- `strategic` — templates/agents/independent-thinker.shared.md:2 — defined here
- `Contrarian Analyst` — templates/agents/independent-thinker.shared.md:23 — defined here
- `Style Guide Compliance` — templates/agents/independent-thinker.shared.md:25 — used here
- `Text status indicators` — templates/agents/independent-thinker.shared.md:33 — used here
- `Evidence-based contrarian positions` — templates/agents/independent-thinker.shared.md:38 — defined here
- `Measured language` — templates/agents/independent-thinker.shared.md:40 — defined here
- `Activation Profile` — templates/agents/independent-thinker.shared.md:43 — defined here
- `Core Mission` — templates/agents/independent-thinker.shared.md:49 — defined here
- `Key Responsibilities` — templates/agents/independent-thinker.shared.md:53 — defined here
- `Core Directives` — templates/agents/independent-thinker.shared.md:61 — defined here
- `Primacy of Accuracy` — templates/agents/independent-thinker.shared.md:63 — defined here
- `Intellectual Independence` — templates/agents/independent-thinker.shared.md:67 — defined here
- `How to Think for Yourself` — templates/agents/independent-thinker.shared.md:71 — used here
- `Is that true?` — templates/agents/independent-thinker.shared.md:81 — defined here
- `Behavioral Principles` — templates/agents/independent-thinker.shared.md:93 — defined here
- `Memory Protocol` — templates/agents/independent-thinker.shared.md:111 — defined here
- `Memory Router` — templates/agents/independent-thinker.shared.md:113 — used here
- `ADR-037` — templates/agents/independent-thinker.shared.md:113 — used here
- `Analysis Framework` — templates/agents/independent-thinker.shared.md:131 — defined here
- `Assumption Challenge Template` — templates/agents/independent-thinker.shared.md:133 — defined here
- `Alternative Analysis Format` — templates/agents/independent-thinker.shared.md:158 — defined here
- `Comparison Matrix` — templates/agents/independent-thinker.shared.md:177 — defined here
- `Response Patterns` — templates/agents/independent-thinker.shared.md:186 — defined here
- `Handoff Protocol` — templates/agents/independent-thinker.shared.md:200 — defined here
- `Handoff Options` — templates/agents/independent-thinker.shared.md:210 — defined here
- `Execution Mindset` — templates/agents/independent-thinker.shared.md:219 — defined here

## Structure
- # Independent Thinker Agent — templates/agents/independent-thinker.shared.md:19
- ## Core Identity — templates/agents/independent-thinker.shared.md:21
- ## Style Guide Compliance — templates/agents/independent-thinker.shared.md:25
- ## Activation Profile — templates/agents/independent-thinker.shared.md:43
- ## Core Mission — templates/agents/independent-thinker.shared.md:49
- ## Key Responsibilities — templates/agents/independent-thinker.shared.md:53
- ## Core Directives — templates/agents/independent-thinker.shared.md:61
- ### Primacy of Accuracy — templates/agents/independent-thinker.shared.md:63
- ### Intellectual Independence — templates/agents/independent-thinker.shared.md:67
- ### How to Think for Yourself — templates/agents/independent-thinker.shared.md:71
- ## Behavioral Principles — templates/agents/independent-thinker.shared.md:93
- ## Memory Protocol — templates/agents/independent-thinker.shared.md:111
- ## Analysis Framework — templates/agents/independent-thinker.shared.md:131
- ### Assumption Challenge Template — templates/agents/independent-thinker.shared.md:133
- ### Alternative Analysis Format — templates/agents/independent-thinker.shared.md:158
- ## Comparison Matrix — templates/agents/independent-thinker.shared.md:177
- ## Response Patterns — templates/agents/independent-thinker.shared.md:186
- ## Handoff Protocol — templates/agents/independent-thinker.shared.md:200
- ## Handoff Options (Recommendations for Orchestrator) — templates/agents/independent-thinker.shared.md:210
- ## Execution Mindset — templates/agents/independent-thinker.shared.md:219

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `wiki/concepts/Critical Thinking/How to Think for Yourself.md` — templates/agents/independent-thinker.shared.md:74 — referenced wiki concept document path does not exist in the repository tree.

## Observations
- Shared template defines both VS Code and Copilot CLI tool mappings (`tools_vscode` and `tools_copilot`), bridging the gap between desktop IDE and terminal environments.
- Represents the shared source in VARIANT pair V26 with `.claude/agents/independent-thinker.md` (73% shared), where Claude Code customizations omit VS Code tool declarations and expand prompt guidelines. Divergence card exists at `docs/analysis/inventory/rjm/_divergence/claude-agents-independent-thinker-md--templates-agents-independent-thinker-shared-md.md`.

## Context cost
8,685 bytes (~2,171 tokens) standalone. Loads no subsidiary files directly.
