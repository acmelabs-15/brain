---
package: rjm
path: .claude/skills/prompt-engineer/SKILL.md
type: skill
bytes: 8470
unit: inv-rjm-141
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/SKILL.md

## Purpose — required, verbatim
> "Optimizes system prompts by applying research-backed prompt engineering patterns. Human-in-the-loop phases: understand, plan, propose changes, receive approval, then integrate." — .claude/skills/prompt-engineer/SKILL.md:11

## Design intent — required
Serves as the main skill definition for prompt optimization in Claude Code agents. Orchestrates a 5-phase human-in-the-loop workflow that prevents prompt degradation, hallucination, and rule contradictions by requiring quoted trigger conditions from empirical pattern references, presenting upfront visual cards with BEFORE/AFTER comparisons, securing human approval before execution, and enforcing strict limits on emphasis markers (≤3).

## Phase — required
cross-phase

## Inputs — required
- "The prompt matches its operating context (tool-use vs. conversational, token constraints)" — .claude/skills/prompt-engineer/SKILL.md:25
- "Human has approved both section-level changes and full integration" — .claude/skills/prompt-engineer/SKILL.md:26
- "Use when the user provides a prompt and wants it improved, refined, or reviewed for best practices." — .claude/skills/prompt-engineer/SKILL.md:42

## Outputs — required
- "visual card format with BEFORE/AFTER" — .claude/skills/prompt-engineer/SKILL.md:140
- "optimized prompt" — .claude/skills/prompt-engineer/SKILL.md:168

## Invokes — required
- reference prompt-engineering-single-turn.md — .claude/skills/prompt-engineer/SKILL.md:174
- reference prompt-engineering-multi-turn.md — .claude/skills/prompt-engineer/SKILL.md:175
- reference workflow.md — .claude/skills/prompt-engineer/SKILL.md:176
- reference prompting-anti-patterns.md — .claude/skills/prompt-engineer/SKILL.md:177
- reference prompting-ai-detection-cliff.md — .claude/skills/prompt-engineer/SKILL.md:178

## Invoked by — required
- skill prompt-engineer — .claude/skills/prose-self-check/SKILL.md:269
- skill prompt-engineer — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:168
- skill prompt-engineer — .agents/governance/SKILL-PHASE-GATES.md:78
- skill prompt-engineer — .agents/governance/SKILL-PHASE-GATES.md:227

## Concepts named — required, verbatim
- `Prompt Optimizer` — .claude/skills/prompt-engineer/SKILL.md:9 — defined here
- `Behavioral clarity` — .claude/skills/prompt-engineer/SKILL.md:17 — defined here
- `Appropriate scope` — .claude/skills/prompt-engineer/SKILL.md:18 — defined here
- `Grounded changes` — .claude/skills/prompt-engineer/SKILL.md:19 — defined here
- `visual card template` — .claude/skills/prompt-engineer/SKILL.md:84 — used here
- `completion checkpoint` — .claude/skills/prompt-engineer/SKILL.md:84 — used here
- `Triage` — .claude/skills/prompt-engineer/SKILL.md:115 — defined here
- `Simple prompts` — .claude/skills/prompt-engineer/SKILL.md:117 — defined here
- `Complex prompts` — .claude/skills/prompt-engineer/SKILL.md:123 — defined here
- `Core Quality Principles` — .claude/skills/prompt-engineer/SKILL.md:129 — defined here
- `Completion Checkpoint` — .claude/skills/prompt-engineer/SKILL.md:136 — defined here
- `visual card format` — .claude/skills/prompt-engineer/SKILL.md:140 — used here
- `trigger condition` — .claude/skills/prompt-engineer/SKILL.md:143 — used here
- `Stacking compatibility` — .claude/skills/prompt-engineer/SKILL.md:144 — used here
- `Anti-patterns` — .claude/skills/prompt-engineer/SKILL.md:145 — used here
- `Emphasis markers` — .claude/skills/prompt-engineer/SKILL.md:146 — used here
- `Anti-Patterns` — .claude/skills/prompt-engineer/SKILL.md:148 — defined here
- `Verification` — .claude/skills/prompt-engineer/SKILL.md:160 — defined here

## Structure
- `# Prompt Optimizer` — .claude/skills/prompt-engineer/SKILL.md:9
- `## Purpose and Success Criteria` — .claude/skills/prompt-engineer/SKILL.md:13
- `## Triggers` — .claude/skills/prompt-engineer/SKILL.md:28
- `## When to Use This Skill` — .claude/skills/prompt-engineer/SKILL.md:40
- `## Required Resources` — .claude/skills/prompt-engineer/SKILL.md:50
- `### Single-Turn Reference (Always Read)` — .claude/skills/prompt-engineer/SKILL.md:54
- `### Multi-Turn Reference (Conditional)` — .claude/skills/prompt-engineer/SKILL.md:62
- `### Workflow Reference` — .claude/skills/prompt-engineer/SKILL.md:78
- `## Process` — .claude/skills/prompt-engineer/SKILL.md:86
- `## Triage (Phase 0)` — .claude/skills/prompt-engineer/SKILL.md:115
- `## Core Quality Principles` — .claude/skills/prompt-engineer/SKILL.md:129
- `## Completion Checkpoint` — .claude/skills/prompt-engineer/SKILL.md:136
- `## Anti-Patterns` — .claude/skills/prompt-engineer/SKILL.md:148
- `## Verification` — .claude/skills/prompt-engineer/SKILL.md:160
- `## References` — .claude/skills/prompt-engineer/SKILL.md:172

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Categorized under Tier 2 (Sonnet, `claude-sonnet-4-6`) per ADR-040. Enforces a quote-first requirement: every technique applied must cite a matching trigger condition from the reference documents. Emphasizes preservation of working prompt sections over full rewrites. Restricts emphasis markers (`**` or `__`) in optimized prompts to ≤3 to prevent emphasis dilution.

## Context cost
8470 bytes file size; together with referenced single-turn (82025 bytes), workflow (18782 bytes), anti-patterns (4371 bytes), and ai-detection-cliff (2664 bytes), base context load is ~116 KB (~29,000 tokens), plus an additional 29728 bytes (~7,500 tokens) if multi-turn flows are active.
