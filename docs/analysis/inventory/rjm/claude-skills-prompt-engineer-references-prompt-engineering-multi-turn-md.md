---
package: rjm
path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md
type: reference
bytes: 29728
unit: inv-rjm-139
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md

## Purpose — required, verbatim
> "This document synthesizes practical prompt engineering patterns with academic research on iterative LLM reasoning. All techniques target **multi-turn prompts**, structured sequences of messages where output from one turn becomes input to subsequent turns. These techniques leverage the observation that models can improve their own outputs through deliberate self-examination across multiple passes." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:3

## Design intent — required
Establishes a research-grounded reference catalog of multi-turn and iterative prompt engineering techniques for the `prompt-engineer` skill. It formalizes patterns where models examine, critique, verify, aggregate, and synthesize reasoning across message boundaries. By enforcing strict separation of cognitive concerns across distinct conversational turns (generation, critique, verification, synthesis), it prevents the quality degradation that occurs when models attempt mixed-goal single turns. It provides concrete implementation templates and empirical benchmarks for Self-Refine, Chain-of-Verification (CoVe), Factored Verification, Universal Self-Consistency (USC), Multi-Chain Reasoning (MCR), and Complexity-Weighted Voting, while cataloging 7 critical anti-patterns (such as context contamination and yes/no verification traps) and effective mitigation strategies. Without this reference, prompt optimization for complex multi-step and agentic flows would lack empirical backing, actionable feedback criteria, and systematic hallucination prevention.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill prompt-engineer — .claude/skills/prompt-engineer/SKILL.md:65
- skill prompt-engineer — .claude/skills/prompt-engineer/SKILL.md:175

## Concepts named — required, verbatim
- `multi-turn prompts` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:3 — defined here
- `CoT` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:5 — used here
- `Plan-and-Solve` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:5 — used here
- `RE2` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:5 — used here
- `Meta-principle` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:7 — defined here
- `Self-Refine` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:15 — defined here
- `Iterative Critique` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:16 — defined here
- `Format Strictness` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:16 — used here
- `Chain-of-Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17 — defined here
- `Quote Extraction` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17 — used here
- `Joint verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17 — used here
- `FACTSCORE` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17 — used here
- `Factored Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:18 — defined here
- `CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:18 — used here
- `Joint CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:18 — used here
- `Universal Self-Consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:19 — defined here
- `Greedy decoding` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:19 — used here
- `Multi-Chain Reasoning` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:20 — defined here
- `Self-Consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:20 — used here
- `Complexity-Weighted Voting` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:21 — defined here
- `USC` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:21 — used here
- `Simple majority voting` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:21 — used here
- `Chain Synthesis` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:22 — defined here
- `MCR` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:22 — used here
- `Explanation Generation` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:23 — defined here
- `Iterative Refinement` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:44 — defined here
- `SELF-REFINE` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50 — defined here
- `FEEDBACK` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50 — defined here
- `REFINE` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50 — defined here
- `non-monotonic improvement` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:108 — defined here
- `Acronym Generation` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:110 — used here
- `Feedback Prompt Design` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:116 — defined here
- `Refinement Prompt Design` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:141 — defined here
- `Stopping Conditions` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:178 — defined here
- `Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:200 — defined here
- `Factored vs. Joint Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:269 — defined here
- `2-Step CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:309 — defined here
- `Factored CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:310 — defined here
- `Verification Question Design` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:316 — defined here
- `Factor+Revise` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:344 — defined here
- `Aggregation and Consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:384 — defined here
- `GSM8K` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:429 — used here
- `MATH` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:430 — used here
- `TruthfulQA` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:431 — used here
- `SummScreen` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:432 — used here
- `complexity-based consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:513 — defined here
- `Conversation Structure Template` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:546 — defined here
- `Context Management` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:572 — defined here
- `The Mixed-Goal Turn` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:597 — defined here
- `The Contaminated Context` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:615 — defined here
- `The Yes/No Verification Trap` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:639 — defined here
- `The Infinite Loop` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:657 — defined here
- `The Forgotten History` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:678 — defined here
- `The Vague Feedback` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:700 — defined here
- `The Majority Fallacy` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:721 — defined here
- `Self-Refine + CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:744 — defined here
- `USC + Complexity Weighting` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:757 — defined here
- `MCR + Self-Refine` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:767 — defined here
- `Active Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:784 — used here
- `Tree of Thoughts` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:788 — used here
- `Meta Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:790 — used here

## Structure
# Prompt Engineering: Research-Backed Techniques for Multi-Turn Prompts — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:1
## Technique Selection Guide — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:11
## Quick Reference: Key Principles — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:27
## 1. Iterative Refinement — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:44
### Self-Refine — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:48
### Feedback Prompt Design — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:116
### Refinement Prompt Design — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:141
### Stopping Conditions — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:178
## 2. Verification — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:200
### Chain-of-Verification (CoVe) — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:204
### Factored vs. Joint Verification — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:269
### Verification Question Design — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:316
### Factor+Revise for Complex Verification — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:344
## 3. Aggregation and Consistency — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:384
### Universal Self-Consistency (USC) — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:388
### Multi-Chain Reasoning (MCR) — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:446
### Complexity-Weighted Voting — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:511
## 4. Implementation Patterns — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:544
### Conversation Structure Template — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:546
### Context Management — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:572
## 5. Anti-Patterns — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:595
### The Mixed-Goal Turn — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:597
### The Contaminated Context — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:615
### The Yes/No Verification Trap — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:639
### The Infinite Loop — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:657
### The Forgotten History — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:678
### The Vague Feedback — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:700
### The Majority Fallacy — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:721
## 6. Technique Combinations — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:740
### Self-Refine + CoVe — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:744
### USC + Complexity Weighting — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:757
### MCR + Self-Refine — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:767
## Research Citations — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:780

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes between factored verification (answering verification queries independently without prior baseline generation in context) and joint verification, empirically documenting that factored verification overcomes the hallucination copying tendency (70% accuracy vs 17% in longform generation).
- Documents the importance of actionable ("use the formula n(n+1)/2") and specific ("the for loop is brute force") feedback in Self-Refine, demonstrating that vague feedback causes refinement loops to degrade.
- Recommends fixed iteration limits (typically 2-4) over model self-termination, observing that models rarely self-terminate reliably.
- Notes non-monotonic improvement in multi-aspect tasks where quality fluctuates across iterations, advising systems to retain history and track the best-so-far output rather than trusting the final iteration.
- Provides concrete multi-turn combination topologies: Self-Refine + CoVe (verification after refinement), USC + Complexity Weighting (complexity filtering before consistency selection), and MCR + Self-Refine (multi-chain evidence synthesis followed by refinement).

## Context cost
29,728 bytes (~7,432 tokens). No additional dependencies loaded.
