---
package: rjm
path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
type: reference
bytes: 82025
unit: inv-rjm-140
in_scope_via: .claude/skills/prompt-engineer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md

## Purpose — required, verbatim
> "This document synthesizes practical prompt engineering patterns with academic research on LLM reasoning and instruction-following. All techniques target **single-turn system prompts**, static instructions executed in one LLM call." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:3

## Design intent — required
Comprehensive compendium synthesizing 25+ academic research papers and empirical prompt engineering patterns into structured, actionable techniques for single-turn system prompts without multi-message orchestration or external tool loops. Solves the pervasive problems of intuitive, superstitious, or counterproductive prompting—such as overusing emphasis markers, analysis paralysis from unrestricted planning, blind application of Chain-of-Thought on implicit/pattern tasks where verbalization causes 30%+ accuracy drops, and negative prohibitions that models struggle to inhibit. By providing an explicit Technique Selection Guide, trigger conditions, stacking compatibilities, conflict matrices, cost/tradeoff profiles, and anti-pattern catalogs, it equips prompt engineers and autonomous agents to systematically select and format instructions for maximal clarity, grounding, and task alignment.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill prompt-engineer — .claude/skills/prompt-engineer/SKILL.md:57

## Concepts named — required, verbatim
- `Plan-and-Solve` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:311 — defined here
- `Step-Back` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:338 — defined here
- `Chain of Draft` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:364 — defined here
- `Direct Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:16 — defined here
- `Thread of Thought` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:389 — defined here
- `RE2` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93 — defined here
- `Re-Reading` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93 — defined here
- `RaR` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:140 — defined here
- `Rephrase and Respond` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:140 — defined here
- `S2A` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:180 — defined here
- `System 2 Attention` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:180 — defined here
- `Distractor-Robust Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:205 — defined here
- `Document Positioning` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:240 — defined here
- `Quote Extraction` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:278 — defined here
- `Contrastive Examples` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:490 — defined here
- `Complexity-Based Selection` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:25 — defined here
- `Diversity-Based Selection` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:26 — defined here
- `Analogical Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:612 — defined here
- `Category-Based Generalization` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:662 — defined here
- `Scope Limitation` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:774 — defined here
- `XML Structure Patterns` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:815 — defined here
- `Format Strictness` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:31 — defined here
- `Output Format Strictness` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:921 — defined here
- `Hint-Based Guidance` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:977 — defined here
- `Metacognitive Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1469 — defined here
- `Identity Establishment` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1043 — defined here
- `Role-Play Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1043 — defined here
- `Emotional Stimuli` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1061 — defined here
- `Confidence Building` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1088 — defined here
- `Error Normalization` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1125 — defined here
- `Pre-Work Context Analysis` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1160 — defined here
- `Emphasis Hierarchy` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1260 — defined here
- `Affirmative Directives` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1214 — defined here
- `Embedded Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1435 — defined here
- `Thinking Tags` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:819 — defined here
- `Instructive Tag Naming` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:876 — defined here
- `Completeness Checkpoint Tags` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:839 — defined here
- `Tabular Reasoning Structure` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:908 — defined here
- `Tab-CoT` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:910 — used here
- `Directional Stimulus Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:977 — defined here
- `The STOP Escalation Pattern` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1288 — defined here
- `Numbered Rule Priority` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1324 — defined here
- `Reward/Penalty Framing` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1369 — defined here
- `UX-Justified Defaults` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1395 — defined here
- `Chain-of-Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1437 — used here
- `CoVe` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1443 — used here
- `Analysis Paralysis` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:778 — defined here
- `Rogue Actions` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:783 — defined here
- `Premature Disengagement` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:784 — defined here
- `Incoherent Objects` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:496 — defined here
- `The Hedging Spiral` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1510 — defined here
- `The Everything-Is-Critical Problem` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1529 — defined here
- `Vague Behavioral Instructions` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1551 — defined here
- `The Implicit Category Trap` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1577 — defined here
- `The Soft Attention Trap` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1614 — defined here
- `The Negative Instruction Trap` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1632 — defined here
- `Empty Input Handling` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:947 — defined here
- `Automatic Generation of Invalid Demonstrations` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:531 — defined here
- `Forbidden Output Phrases Pattern` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:537 — defined here
- `Complexity-Based Example Selection` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:551 — defined here
- `Diversity-Based Example Selection` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:578 — defined here
- `Zero-shot-CoT` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:315 — used here
- `Zero-shot-PS` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:322 — used here
- `Zero-shot-PS+` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:323 — used here
- `Chain-of-Thought` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:431 — used here
- `Auto-CoT` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:584 — used here

## Structure
# Prompt Engineering: Research-Backed Techniques for Single-Turn Prompts — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1
## Technique Selection Guide — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:9
## Quick Reference: Key Principles — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:45
## 1. Input Enhancement — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:89
### Re-Reading (RE2) — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93
### Critical: Instruction vs. Repetition — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:109
### Rephrase and Respond (RaR) — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:140
### Handling Irrelevant Context: S2A and Distractor-Robust Prompting — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:176
#### System 2 Attention (S2A): Preprocessing Filter — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:180
#### Distractor-Robust Prompting: Single-Turn Alternative — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:205
### Document Positioning: Data First, Instructions Last — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:240
### Quote Extraction for Grounding — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:278
## 2. Reasoning Structure — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:307
### Plan-and-Solve Prompting — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:311
### Step-Back Prompting — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:338
### Chain of Draft: Efficient Reasoning — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:364
### Thread of Thought: Segmented Context Analysis — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:389
### Chain-of-Thought: When It Helps vs. When It Hurts — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:431
### CoT Faithfulness Limitation — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:469
## 3. Example Design — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:486
### Contrastive Examples: Teaching What to Avoid — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:490
#### Automatic Generation of Invalid Demonstrations — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:531
#### Forbidden Output Phrases Pattern — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:537
### Complexity-Based Example Selection — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:551
### Diversity-Based Example Selection — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:578
### Analogical Prompting: Self-Generated Examples — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:612
### Category-Based Generalization — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:662
#### Synergy: Categories + Edge Cases — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:704
### Additional Example Design Factors — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:724
#### Example Ordering — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:728
#### Label Distribution — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:740
#### Structural Similarity — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:762
## 4. Output Control — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:770
### Scope Limitation: Preventing Overthinking — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:774
### XML Structure Patterns — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:815
#### Basic Thinking Tags — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:819
#### Completeness Checkpoint Tags — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:839
#### Instructive Tag Naming — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:876
#### Tabular Reasoning Structure — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:908
### Output Format Strictness — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:921
### Empty Input Handling — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:947
### Hint-Based Guidance (Directional Stimulus Prompting) — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:977
### Conditional Sections — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1017
## 5. Behavioral Shaping — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1039
### Identity Establishment (Role-Play Prompting) — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1043
### Emotional Stimuli — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1061
### Confidence Building — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1088
### Error Normalization — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1125
### Pre-Work Context Analysis — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1160
### Affirmative Directives — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1214
### Emphasis Hierarchy — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1260
### The STOP Escalation Pattern — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1288
### Numbered Rule Priority — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1324
### Reward/Penalty Framing — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1369
### UX-Justified Defaults — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1395
## 6. Verification — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1431
### Embedded Verification — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1435
## 7. Natural Language Understanding — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1465
### Metacognitive Prompting — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1469
## 8. Anti-Patterns to Avoid — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1508
### The Hedging Spiral — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1510
### The Everything-Is-Critical Problem — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1529
### Vague Behavioral Instructions — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1551
### The Implicit Category Trap — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1577
### The Soft Attention Trap — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1614
### The Negative Instruction Trap — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1632
## Research Citations — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1656

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Academic synthesis: Integrates findings from 25+ peer-reviewed research papers (ACL, NeurIPS, ICML, ICLR, arXiv) spanning 2021-2025 into standardized prompt design patterns.
- Grounding vs. computation boundary: Establishes that Chain-of-Thought (CoT) benefits self-contained computational reasoning (arithmetic, symbolic manipulation) but hurts or destabilizes context-grounded tasks (QA over documents, NLI, pattern recognition, classification) where verbalization introduces hallucinated rationalizations or overrides implicit learning (observing 30%+ accuracy drops).
- Hard attention requirement: Proves that System 2 Attention (S2A) requires strict filtering where original contaminated context is completely excluded; providing both filtered and unfiltered context causes soft attention leakage.
- Format compliance: Explains why directive language ("ONLY", "Do not") outperforms polite phrasing ("Please"), which models frequently interpret as optional or flexible.
- Metacognitive failure modes: Documents that Metacognitive Prompting exhibits high failure rates on simple tasks (68.3% overthinking errors, 31.7% overcorrection errors), requiring cautious scoping.

## Context cost
82025 bytes, approximately 19500 tokens.
