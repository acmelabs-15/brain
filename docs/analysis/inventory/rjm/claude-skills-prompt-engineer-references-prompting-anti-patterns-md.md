---
package: rjm
path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md
type: reference
bytes: 4371
unit: inv-rjm-141
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/references/prompting-anti-patterns.md

## Purpose — required, verbatim
> "Systematic failures in prompt design and effective replacements based on observed model behavior." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:9

## Design intent — required
Catalogs empirical prompt engineering anti-patterns—such as acronym frameworks, uppercase shouting for enforcement, elaborate greetings, confidence percentages, finalization gates, deep conditionals, vague instructions, and global rules—that fail silently in LLM workflows. Provides research-grounded replacements including biasing headers (~80 tokens), Anthropic's 3-step hallucination reduction, engineering restraint priority hierarchies (CLAUDE.md pattern), and multi-agent verification teams.

## Phase — required
cross-phase

## Inputs — required
- "arXiv 2307.02185" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:49

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference prompting-anti-patterns.md — .claude/skills/prompt-engineer/SKILL.md:177

## Concepts named — required, verbatim
- `Acronym frameworks` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:19 — defined here
- `Biasing Headers` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:30 — defined here
- `Anthropic 3-Step Hallucination Reduction` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:43 — defined here
- `Engineering Restraint` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:51 — defined here
- `CLAUDE.md Pattern` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:51 — defined here
- `Cognitive Infrastructure Pattern` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:63 — defined here
- `Natural Human Voice` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:73 — defined here
- `The Subtraction Trap` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:79 — defined here
- `More Rules = More Fingerprint` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:85 — defined here
- `Multi-agent verification pattern` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:102 — defined here

## Structure
- `# Prompt Engineering Anti-Patterns` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:7
- `## Core Insight` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:11
- `## Anti-Pattern Catalog` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:15
- `## What Actually Works` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:28
- `### Biasing Headers (~80 tokens)` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:30
- `### Anthropic 3-Step Hallucination Reduction` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:43
- `### Engineering Restraint (CLAUDE.md Pattern)` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:51
- `### Cognitive Infrastructure Pattern` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:63
- `### Natural Human Voice` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:73
- `## The Subtraction Trap` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:79
- `## More Rules = More Fingerprint` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:85
- `## Meta-Rules for Prompt Design` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:89
- `## Verification > Prompt Engineering` — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:98

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides crucial philosophical grounding: prompts shape tone and bias behaviors, but cannot guarantee compliance or serve as procedural enforcement gates. When prompts fail, they fail silently. Also documents the trade-off of strict citation constraints (Anthropic 3-step reduction), noting they reduce creative output by 15-20% per arXiv 2307.02185.

## Context cost
4371 bytes, approximately 1100 tokens.
