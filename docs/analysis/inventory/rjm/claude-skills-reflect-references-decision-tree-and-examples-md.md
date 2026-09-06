---
package: rjm
path: .claude/skills/reflect/references/decision-tree-and-examples.md
type: reference
bytes: 5042
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/references/decision-tree-and-examples.md

## Purpose — required, verbatim
> "SKILL.md points here for the full decision tree, worked examples, per-domain" — .claude/skills/reflect/references/decision-tree-and-examples.md:3

## Design intent — required
Provides the detailed operational decision tree, concrete worked examples (covering user corrections, success reinforcement, and edge-case discovery), domain-specific memory examples (code review, API design, testing, documentation), and anti-pattern guidance for the `reflect` skill. Solves the ambiguity of conversational signal extraction by specifying an exact ASCII flow chart and rule set that guides an agent through signal detection, threshold filtering, interactive preview/editing with the user (`[keep/modify/remove]`), and persistence to Serena memory files with Git fallback.

## Phase — required
cross-phase

## Inputs — required
- Conversation history and detected skill usage from current session.
- User input during interactive review (`Y`, `n`, `edit`, `keep`, `modify`, `remove`).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill reflect — .claude/skills/reflect/SKILL.md:103

## Concepts named — required, verbatim
- `Decision Tree` — .claude/skills/reflect/references/decision-tree-and-examples.md:6 — defined here
- `Serena` — .claude/skills/reflect/references/decision-tree-and-examples.md:25 — used here
- `Git fallback` — .claude/skills/reflect/references/decision-tree-and-examples.md:26 — defined here
- `Insufficient evidence` — .claude/skills/reflect/references/decision-tree-and-examples.md:37 — defined here
- `Correction Detected` — .claude/skills/reflect/references/decision-tree-and-examples.md:53 — defined here
- `Success Pattern` — .claude/skills/reflect/references/decision-tree-and-examples.md:66 — defined here
- `Edge Case Discovery` — .claude/skills/reflect/references/decision-tree-and-examples.md:79 — defined here
- `Code Review Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:94 — defined here
- `API Design Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:105 — defined here
- `Testing Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:116 — defined here
- `Documentation Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:127 — defined here
- `Anti-Patterns` — .claude/skills/reflect/references/decision-tree-and-examples.md:138 — defined here

## Structure
- `# Decision Tree, Examples, Use Cases, Anti-Patterns (Detailed)` — .claude/skills/reflect/references/decision-tree-and-examples.md:1
- `## Decision Tree` — .claude/skills/reflect/references/decision-tree-and-examples.md:6
- `## Examples` — .claude/skills/reflect/references/decision-tree-and-examples.md:51
- `### Example 1: Correction Detected` — .claude/skills/reflect/references/decision-tree-and-examples.md:53
- `### Example 2: Success Pattern` — .claude/skills/reflect/references/decision-tree-and-examples.md:66
- `### Example 3: Edge Case Discovery` — .claude/skills/reflect/references/decision-tree-and-examples.md:79
- `## Use Cases` — .claude/skills/reflect/references/decision-tree-and-examples.md:92
- `### 1. Code Review Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:94
- `### 2. API Design Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:105
- `### 3. Testing Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:116
- `### 4. Documentation Skills` — .claude/skills/reflect/references/decision-tree-and-examples.md:127
- `## Anti-Patterns` — .claude/skills/reflect/references/decision-tree-and-examples.md:138

## Defects — required
none

## Observations
- Defines an anti-patterns table emphasizing that memory modifications must never be applied without previewing, must append with timestamps rather than overwrite, and should avoid noise from one-off events.
- Context cost: 5042 bytes, ~1260 tokens.

## Context cost
5042 bytes, ~1260 tokens.
