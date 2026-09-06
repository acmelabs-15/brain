---
package: rjm
path: .claude/skills/reflect/references/triggers.md
type: reference
bytes: 3089
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/references/triggers.md, sha256: bcbb400093d89616e435a83f03d5f8adbfd300798a7fcc70422a7a9150e2e25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/references/triggers.md

## Purpose — required, verbatim
> "Full trigger tables and proactive-invocation guidance for the reflect skill." — .claude/skills/reflect/references/triggers.md:3

## Design intent — required
Provides comprehensive trigger tables, phrase mappings, and operational priorities governing when an agent or user should invoke the `reflect` skill. Solves the problem of passive agents failing to capture transient lessons by establishing explicit proactive triggers (e.g. user saying "no", praise like "perfect", multiple edge-case questions, or multi-skill sessions) categorized into HIGH (immediate), MEDIUM (batched threshold), and LOW (session end) tiers.

## Phase — required
cross-phase

## Inputs — required
- User input utterances, conversation events (e.g. corrections, praise, questions, multi-skill usage), and explicit trigger phrases (`reflect on this session`, `learn from this mistake`, etc.).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill reflect — .claude/skills/reflect/SKILL.md:34

## Concepts named — required, verbatim
- `Trigger Phrases` — .claude/skills/reflect/references/triggers.md:6 — defined here
- `HIGH Priority Triggers` — .claude/skills/reflect/references/triggers.md:18 — defined here
- `Chesterton's Fence` — .claude/skills/reflect/references/triggers.md:23 — used here
- `MEDIUM Priority Triggers` — .claude/skills/reflect/references/triggers.md:26 — defined here
- `LOW Priority Triggers` — .claude/skills/reflect/references/triggers.md:35 — defined here
- `Proactive Invocation Reminder` — .claude/skills/reflect/references/triggers.md:53 — defined here

## Structure
- `# Reflect Triggers (Detailed)` — .claude/skills/reflect/references/triggers.md:1
- `## Trigger Phrases` — .claude/skills/reflect/references/triggers.md:6
- `### 🔴 HIGH Priority Triggers (Invoke Immediately)` — .claude/skills/reflect/references/triggers.md:18
- `### 🟡 MEDIUM Priority Triggers (Invoke When Threshold Is Met)` — .claude/skills/reflect/references/triggers.md:26
- `### 🟢 LOW Priority Triggers (Invoke at Session End)` — .claude/skills/reflect/references/triggers.md:35
- `## Original Triggers (Still Supported)` — .claude/skills/reflect/references/triggers.md:44
- `## Proactive Invocation Reminder` — .claude/skills/reflect/references/triggers.md:53

## Defects — required
none

## Observations
- Quantifies cost vs benefit of reflection (~30 seconds of analysis to prevent repeating mistakes forever).
- Contrasts manual reflection against automatic Stop hooks, emphasizing that manual reflection has richer conversational context.
- Context cost: 3089 bytes, ~770 tokens.

## Context cost
3089 bytes, ~770 tokens.
