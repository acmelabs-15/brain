---
package: rjm
path: .agents/analysis/vercel-passive-context-vs-skills-research.md
type: agent
bytes: 9718
unit: inv-rjm-4
deprecated: false
in_scope_via: inv-rjm-4
aliases: []
memo_inputs:
  - {path: .agents/analysis/vercel-passive-context-vs-skills-research.md, sha256: b14bcfb650ae9cc8e282d9489f9f26e4ac5232796408159323b06c437e3cd16b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/analysis/vercel-passive-context-vs-skills-research.md

## Purpose — required, verbatim
> "Vercel research demonstrates that embedding compressed documentation directly in AGENTS.md achieves 100% pass rates on Next.js 16 API evaluations, compared to 79% for skills with explicit instructions and 53% for baseline. This finding challenges skill-based retrieval architectures and supports \"retrieval-led reasoning over pre-training-led reasoning.\"" — .agents/analysis/vercel-passive-context-vs-skills-research.md:9 (no explicit purpose statement)

## Design intent — required
An analysis document synthesizing Vercel's research on passive context (AGENTS.md) versus active skill invocation for coding agents. It evaluates empirical performance data showing that compressed, passively available documentation eliminates agent decision points and sequencing fragility, and translates these findings into architectural recommendations for `ai-agents` (e.g., compressing CRITICAL-CONTEXT.md into pipe-delimited format, restricting skills to action-specific workflows, and building behavior-based eval suites).

## Phase — required
cross-phase

## Inputs — required
Vercel research blog post and eval suite on Next.js 16 APIs (vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals at line 4), Agent Skills FAQ (line 5), vercel-labs/agent-skills repository (line 5), and existing ai-agents architecture files (CLAUDE.md at line 158, CRITICAL-CONTEXT.md at line 169, SKILL-QUICK-REF.md at line 189).

## Outputs — required
Architecture recommendations for ai-agents, integration opportunities (lines 167-184), proposed ADR on passive context vs skills (line 187), failure modes catalog (lines 198-214), and context compression guidelines (lines 72-95).


## Invokes — required
none

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:125
- reference model-context-doctrine — .claude/skills/context-optimizer/references/model-context-doctrine.md:55

## Concepts named — required, verbatim
- `AGENTS.md` — .agents/analysis/vercel-passive-context-vs-skills-research.md:1 — used here
- `passive context` — .agents/analysis/vercel-passive-context-vs-skills-research.md:1 — used here
- `skills` — .agents/analysis/vercel-passive-context-vs-skills-research.md:1 — used here
- `retrieval-led reasoning` — .agents/analysis/vercel-passive-context-vs-skills-research.md:9 — defined here
- `pre-training-led reasoning` — .agents/analysis/vercel-passive-context-vs-skills-research.md:9 — defined here
- `Elimination of Decision Points` — .agents/analysis/vercel-passive-context-vs-skills-research.md:47 — defined here
- `Consistent Availability` — .agents/analysis/vercel-passive-context-vs-skills-research.md:49 — defined here
- `Avoided Sequencing Problems` — .agents/analysis/vercel-passive-context-vs-skills-research.md:51 — defined here
- `Instruction Fragility` — .agents/analysis/vercel-passive-context-vs-skills-research.md:55 — defined here
- `Context Optimization` — .agents/analysis/vercel-passive-context-vs-skills-research.md:70 — defined here
- `Pipe-delimited structure` — .agents/analysis/vercel-passive-context-vs-skills-research.md:83 — defined here
- `Decision Point Elimination` — .agents/analysis/vercel-passive-context-vs-skills-research.md:141 — defined here
- `Failure Modes Catalog` — .agents/analysis/vercel-passive-context-vs-skills-research.md:195 — defined here

## Structure
- # Vercel Research: AGENTS.md Passive Context vs Skills — .agents/analysis/vercel-passive-context-vs-skills-research.md:1
- ## Executive Summary — .agents/analysis/vercel-passive-context-vs-skills-research.md:7
- ## Performance Metrics — .agents/analysis/vercel-passive-context-vs-skills-research.md:11
- ## Evaluation Methodology — .agents/analysis/vercel-passive-context-vs-skills-research.md:22
- ### Hardened Eval Suite — .agents/analysis/vercel-passive-context-vs-skills-research.md:24
- ### Testing Rigor — .agents/analysis/vercel-passive-context-vs-skills-research.md:36
- ## Why Passive Context Outperforms Skills — .agents/analysis/vercel-passive-context-vs-skills-research.md:43
- ### Three Critical Factors — .agents/analysis/vercel-passive-context-vs-skills-research.md:45
- ### Instruction Fragility — .agents/analysis/vercel-passive-context-vs-skills-research.md:55
- ### Production Reliability Concern — .agents/analysis/vercel-passive-context-vs-skills-research.md:66
- ## Context Optimization — .agents/analysis/vercel-passive-context-vs-skills-research.md:70
- ### Compression Achievement — .agents/analysis/vercel-passive-context-vs-skills-research.md:72
- ### Compressed Format Structure — .agents/analysis/vercel-passive-context-vs-skills-research.md:79
- ## Framework Author Recommendations — .agents/analysis/vercel-passive-context-vs-skills-research.md:96
- ### For General Framework Knowledge — .agents/analysis/vercel-passive-context-vs-skills-research.md:98
- ### When Skills Remain Useful — .agents/analysis/vercel-passive-context-vs-skills-research.md:102
- ### Best Practices — .agents/analysis/vercel-passive-context-vs-skills-research.md:109
- ## Implementation — .agents/analysis/vercel-passive-context-vs-skills-research.md:116
- ## Theoretical Framework — .agents/analysis/vercel-passive-context-vs-skills-research.md:128
- ### Retrieval-Led vs Pre-Training-Led Reasoning — .agents/analysis/vercel-passive-context-vs-skills-research.md:130
- ### Decision Point Elimination — .agents/analysis/vercel-passive-context-vs-skills-research.md:141
- ## Project Applicability: ai-agents — .agents/analysis/vercel-passive-context-vs-skills-research.md:152
- ### Current Architecture Alignment — .agents/analysis/vercel-passive-context-vs-skills-research.md:154
- ### Integration Opportunities — .agents/analysis/vercel-passive-context-vs-skills-research.md:165
- ### Recommended Actions — .agents/analysis/vercel-passive-context-vs-skills-research.md:185
- ## Failure Modes Catalog — .agents/analysis/vercel-passive-context-vs-skills-research.md:195
- ### Skills-Based Approach Failures — .agents/analysis/vercel-passive-context-vs-skills-research.md:197
- ### Passive Context Limitations — .agents/analysis/vercel-passive-context-vs-skills-research.md:207
- ## Quantitative Impact Summary — .agents/analysis/vercel-passive-context-vs-skills-research.md:215
- ## Related Research — .agents/analysis/vercel-passive-context-vs-skills-research.md:224
- ## Sources — .agents/analysis/vercel-passive-context-vs-skills-research.md:231

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/analysis/vercel-passive-context-vs-skills-research.md:226 Referenced memory path "../serena/memories/claude-md-anthropic-best-practices.md" does not exist.
- missing-path · .agents/analysis/vercel-passive-context-vs-skills-research.md:227 Referenced memory path "../serena/memories/claude-code-skills-official-guidance.md" does not exist.
- missing-path · .agents/analysis/vercel-passive-context-vs-skills-research.md:228 Referenced memory path "../serena/memories/prompting-observations.md" does not exist.
- missing-path · .agents/analysis/vercel-passive-context-vs-skills-research.md:229 Referenced memory path "../serena/memories/memory-token-efficiency.md" does not exist.

## Observations
The paper's benchmark shows a 47% increase in task pass rate when replacing dynamic skill invocation with compressed passive context in AGENTS.md. Proposes migrating CRITICAL-CONTEXT.md to a pipe-delimited index format (.agents/analysis/vercel-passive-context-vs-skills-research.md:83, 169) and creating an ADR to prefer passive context for framework knowledge and skills strictly for tool-based actions (.agents/analysis/vercel-passive-context-vs-skills-research.md:187).

## Context cost
9,718 bytes, ~2,400 tokens.
