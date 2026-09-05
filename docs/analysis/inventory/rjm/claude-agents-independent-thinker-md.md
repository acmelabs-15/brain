---
package: rjm
path: .claude/agents/independent-thinker.md
type: agent
bytes: 10571
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/independent-thinker.md

## Purpose — required, verbatim
> "Contrarian analyst who challenges assumptions with evidence, presents alternative viewpoints, and declares uncertainty rather than guessing. Intellectually rigorous, respectfully skeptical, cites sources. Use as devil's advocate when you need opposing critique, trade-off analysis, or verification rather than validation." — .claude/agents/independent-thinker.md:3

## Design intent — required
An adversarial analysis specialist designed to prevent consensus groupthink, confirmation bias, and unexamined technical choices in multi-agent workflows. It acts as an intellectual devil's advocate that demands empirical evidence for assumptions, presents concrete tradeoff analyses and alternative designs, and explicitly declares uncertainty rather than generating sycophantic or confident guesses. Without it, autonomous planning and architecture workflows would accept prevailing defaults and unstated assumptions without stress-testing.

## Phase — required
rjm:strategic

## Inputs — required
- Problem statements, decisions, architectural proposals, or assumptions provided via `argument-hint` ("State the decision or assumption to challenge") or orchestrator prompt.
- Codebase evidence gathered via `Read`, `Grep`, and `Glob` tools.
- External claims, benchmarks, and documentation researched via `WebSearch` and `WebFetch`.
- Historical analysis memories retrieved via Memory Router (`uv run python .claude/skills/memory/scripts/search_memory.py --query "analysis challenges [topic/assumption]"`).

## Outputs — required
- Markdown analysis reports following either the Assumption Challenge Template (Evidence For/Against, Alternative Interpretations, Uncertainty Level, Recommendation) or Alternative Analysis Format (Concerns, Alternatives with Pros/Cons/Tradeoffs, Comparison Matrix, Verdict).
- Standardized analysis document block: Evidence Review, Alternative Perspectives, Uncertainty Areas, Assessment, Recommendation.
- Learned challenge memories persisted via Serena MCP tools (`mcp__serena__write_memory`, `mcp__serena__edit_memory`) to `.serena/memories/` under `analysis-challenge-[topic]`.

## Invokes — required
- tool Read — .claude/agents/independent-thinker.md:43
- tool Grep — .claude/agents/independent-thinker.md:43
- tool Glob — .claude/agents/independent-thinker.md:43
- tool WebSearch — .claude/agents/independent-thinker.md:44
- tool WebFetch — .claude/agents/independent-thinker.md:44
- script .claude/skills/memory/scripts/search_memory.py — .claude/agents/independent-thinker.md:46
- tool mcp__serena__write_memory — .claude/agents/independent-thinker.md:49
- tool mcp__serena__edit_memory — .claude/agents/independent-thinker.md:50
- agent architect — .claude/agents/independent-thinker.md:241
- agent analyst — .claude/agents/independent-thinker.md:242
- agent orchestrator — .claude/agents/independent-thinker.md:243
- agent critic — .claude/agents/independent-thinker.md:244

## Invoked by — required
- agent independent-thinker — .agents/AGENT-SYSTEM.md:428
- agent orchestrator — README.md:277
- doc src/claude/AGENTS.md — src/claude/AGENTS.md:170
- agent independent-thinker — docs/agent-catalog.md:29

## Concepts named — required, verbatim
- `devil's advocate` — .claude/agents/independent-thinker.md:3 — used here
- `Contrarian Analyst` — .claude/agents/independent-thinker.md:13 — defined here
- `Memory Router` — .claude/agents/independent-thinker.md:45 — used here
- `ADR-037` — .claude/agents/independent-thinker.md:45 — used here
- `Core Mission` — .claude/agents/independent-thinker.md:60 — defined here
- `Core Directives` — .claude/agents/independent-thinker.md:72 — defined here
- `Primacy of Accuracy` — .claude/agents/independent-thinker.md:74 — defined here
- `Intellectual Independence` — .claude/agents/independent-thinker.md:78 — defined here
- `How to Think for Yourself` — .claude/agents/independent-thinker.md:82 — used here
- `Is that true?` — .claude/agents/independent-thinker.md:92 — defined here
- `Behavioral Principles` — .claude/agents/independent-thinker.md:112 — defined here
- `Verification Protocol` — .claude/agents/independent-thinker.md:130 — defined here
- `Memory Protocol` — .claude/agents/independent-thinker.md:138 — defined here
- `Analysis Framework` — .claude/agents/independent-thinker.md:158 — defined here
- `Assumption Challenge Template` — .claude/agents/independent-thinker.md:160 — defined here
- `Alternative Analysis Format` — .claude/agents/independent-thinker.md:185 — defined here
- `Comparison Matrix` — .claude/agents/independent-thinker.md:204 — defined here
- `Handoff Protocol` — .claude/agents/independent-thinker.md:227 — defined here
- `Handoff Options` — .claude/agents/independent-thinker.md:237 — defined here
- `Output Format` — .claude/agents/independent-thinker.md:246 — defined here
- `Execution Mindset` — .claude/agents/independent-thinker.md:275 — defined here

## Structure
- # Independent Thinker Agent — .claude/agents/independent-thinker.md:9
- ## Core Identity — .claude/agents/independent-thinker.md:11
- ## Style Guide Compliance — .claude/agents/independent-thinker.md:15
- ## Activation Profile — .claude/agents/independent-thinker.md:33
- ## Claude Code Tools — .claude/agents/independent-thinker.md:39
- ## Persona Traits — .claude/agents/independent-thinker.md:52
- ## Core Mission — .claude/agents/independent-thinker.md:60
- ## Key Responsibilities — .claude/agents/independent-thinker.md:64
- ## Core Directives — .claude/agents/independent-thinker.md:72
- ### Primacy of Accuracy — .claude/agents/independent-thinker.md:74
- ### Intellectual Independence — .claude/agents/independent-thinker.md:78
- ### How to Think for Yourself — .claude/agents/independent-thinker.md:82
- ### Rejection of AI Tropes — .claude/agents/independent-thinker.md:104
- ### Evidence-Based Reasoning — .claude/agents/independent-thinker.md:108
- ## Behavioral Principles — .claude/agents/independent-thinker.md:112
- ## Verification Protocol — .claude/agents/independent-thinker.md:130
- ## Memory Protocol — .claude/agents/independent-thinker.md:138
- ## Analysis Framework — .claude/agents/independent-thinker.md:158
- ### Assumption Challenge Template — .claude/agents/independent-thinker.md:160
- ### Alternative Analysis Format — .claude/agents/independent-thinker.md:185
- ## Response Patterns — .claude/agents/independent-thinker.md:213
- ## Handoff Protocol — .claude/agents/independent-thinker.md:227
- ## Handoff Options (Recommendations for Orchestrator) — .claude/agents/independent-thinker.md:237
- ## Output Format — .claude/agents/independent-thinker.md:246
- ## When to Use — .claude/agents/independent-thinker.md:267
- ## Execution Mindset — .claude/agents/independent-thinker.md:275

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `wiki/concepts/Critical Thinking/How to Think for Yourself.md` — .claude/agents/independent-thinker.md:85 — The cited wiki source file does not exist in the repository; the `wiki/` directory is entirely absent.

## Observations
- Variant relation: shares 73% of distinct lines with `templates/agents/independent-thinker.shared.md` (ledger V26).
- Adopts Paul Graham's "How to Think for Yourself" essay framing as explicit operating principles to combat unexamined consensus and cognitive conformity.
- Configures Anthropic Opus (`model: opus`) reflecting the need for deep analytical and contrarian reasoning.

## Context cost
10571 bytes (approx. 2640 tokens).
