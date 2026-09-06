---
package: rjm
path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md
type: reference
bytes: 2999
unit: inv-rjm-138
in_scope_via: .claude/skills/programming-advisor/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/references/bitter-lesson-llms.md

## Purpose — required, verbatim
> "As models get dramatically smarter (step changes, not incremental), simpler works best. Humans overestimate the value of their scaffolding, complex prompts, and multi-step processes. What worked for the last model generation over-constrains the next one." — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:9

## Design intent — required
Addresses the tendency of engineers and AI system architects to build complex, over-engineered prompt chains, rigid procedural scaffolding, and brittle custom retrieval systems that rapidly depreciate and break when underlying foundational models experience generational step changes in intelligence. It provides architectural principles (Mythos-ready system architecture, single end-of-pipeline evaluation, minimal prompt instruction) and build-vs-buy heuristics, emphasizing that simpler integrations with frontier models consistently outperform intricate custom scaffolding.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/bitter-lesson-llms.md — .claude/skills/programming-advisor/SKILL.md:390

## Concepts named — required, verbatim
- `The Bitter Lesson of Building with LLMs` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:7 — defined here
- `Prompt Scaffolding` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:17 — defined here
- `Retrieval Architecture` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:25 — defined here
- `Hardcoded Domain Knowledge` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:31 — defined here
- `Evaluation Strategy` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:37 — defined here
- `Mythos-Ready System Architecture` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:44 — defined here
- `Outcome specs` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:48 — defined here
- `Constraints` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:49 — defined here
- `Tools` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:50 — defined here
- `Multi-agent` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:51 — defined here
- `Model intelligence improvement modeling` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:55 — defined here
- `Build vs Buy` — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:59 — used here

## Structure
# The Bitter Lesson of Building with LLMs — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:7
## Core Principle — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:11
## Four Things That Break on Step-Change Models — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:15
### 1. Prompt Scaffolding — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:17
### 2. Retrieval Architecture — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:25
### 3. Hardcoded Domain Knowledge — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:31
### 4. Evaluation Strategy — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:37
## Mythos-Ready System Architecture — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:44
## Meta-Skill for 2026 — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:53
## Implications for Build vs Buy — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides architectural grounding derived from Rich Sutton's "The Bitter Lesson", adapted to LLM engineering. Cites Anthropic and OpenAI guidance on keeping instructions minimal and specifies that 3,000-token procedural prompts often carry 30-50% deletable text once model capabilities jump. Frontmatter references `wiki/concepts/AI Strategy/The Bitter Lesson of Building with LLMs.md`.

## Context cost
2999 bytes, approximately 750 tokens.
