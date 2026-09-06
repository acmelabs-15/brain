---
package: rjm
path: .claude/skills/context-optimizer/references/vibe-engineering.md
type: reference
bytes: 3069
unit: inv-rjm-107
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/vibe-engineering.md

## Purpose — required, verbatim
> "Structured LLM interaction framework from Google Chrome Engineering, popularized by Addy Osmani's agent-skills repo. Applied to every LLM interaction, not just debugging." — .claude/skills/context-optimizer/references/vibe-engineering.md:9

## Design intent — required
Provides a disciplined, 7-step micro-interaction protocol (Clarify the Goal, Gather Context, Break It Down, Execute with Iteration, Verify the Result, Reflect on the Process, Document the Learning) adapted from Google Chrome Engineering and Addy Osmani's agent-skills to structure LLM interactions at the individual prompt level. Within the context-optimizer skill, it maps conversational problem-solving steps to mechanical context optimization stages (such as mapping context gathering to passive-vs-skill placement and breakdown to extract-and-index). Without it, context optimization would lack a structured reasoning model for decomposing prompts and tasks, leaving agents vulnerable to unverified assumptions, skipped context, and unstructured intuition.

## Phase — required
cross-phase

## Inputs — required
- Human intent or conversational prompts requiring structured decomposition into verifiable steps — .claude/skills/context-optimizer/references/vibe-engineering.md:47
- Codebase paths, constraints (performance, compatibility, security), and prior attempts for context gathering — .claude/skills/context-optimizer/references/vibe-engineering.md:19
- Step execution outputs, test results, format specifications, and error conditions for verification — .claude/skills/context-optimizer/references/vibe-engineering.md:29, 33

## Outputs — required
- Atomic execution steps with clear success criteria (~5-10 minutes agent time) — .claude/skills/context-optimizer/references/vibe-engineering.md:25
- Process reflections updating the agent's working model of codebase conventions — .claude/skills/context-optimizer/references/vibe-engineering.md:39
- Documented patterns for reuse (code comments, wiki entries, skill file updates, memory notes) — .claude/skills/context-optimizer/references/vibe-engineering.md:43
- Mapping table linking 7-step protocol steps to context optimization equivalents — .claude/skills/context-optimizer/references/vibe-engineering.md:61-69

## Invokes — required
- script test_skill_passive_compliance.py — .claude/skills/context-optimizer/references/vibe-engineering.md:67
- doc SKILL.md — .claude/skills/context-optimizer/references/vibe-engineering.md:69

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:127

## Concepts named — required, verbatim
- `Vibe Engineering` — .claude/skills/context-optimizer/references/vibe-engineering.md:7 — defined here
- `7-Step Agent Interaction Protocol` — .claude/skills/context-optimizer/references/vibe-engineering.md:7 — defined here
- `Clarify the Goal` — .claude/skills/context-optimizer/references/vibe-engineering.md:13 — defined here
- `Gather Context` — .claude/skills/context-optimizer/references/vibe-engineering.md:17 — defined here
- `Break It Down` — .claude/skills/context-optimizer/references/vibe-engineering.md:23 — defined here
- `Execute with Iteration` — .claude/skills/context-optimizer/references/vibe-engineering.md:27 — defined here
- `Verify the Result` — .claude/skills/context-optimizer/references/vibe-engineering.md:31 — defined here
- `Reflect on the Process` — .claude/skills/context-optimizer/references/vibe-engineering.md:37 — defined here
- `Document the Learning` — .claude/skills/context-optimizer/references/vibe-engineering.md:41 — defined here
- `Anti-Patterns > Examples` — .claude/skills/context-optimizer/references/vibe-engineering.md:49 — defined here
- `Anti-Patterns` — .claude/skills/context-optimizer/references/vibe-engineering.md:55 — used here

## Structure
- `Vibe Engineering: 7-Step Agent Interaction Protocol` — .claude/skills/context-optimizer/references/vibe-engineering.md:7
- `The 7 Steps` — .claude/skills/context-optimizer/references/vibe-engineering.md:11
- `Clarify the Goal` — .claude/skills/context-optimizer/references/vibe-engineering.md:13
- `Gather Context` — .claude/skills/context-optimizer/references/vibe-engineering.md:17
- `Break It Down` — .claude/skills/context-optimizer/references/vibe-engineering.md:23
- `Execute with Iteration` — .claude/skills/context-optimizer/references/vibe-engineering.md:27
- `Verify the Result` — .claude/skills/context-optimizer/references/vibe-engineering.md:31
- `Reflect on the Process` — .claude/skills/context-optimizer/references/vibe-engineering.md:37
- `Document the Learning` — .claude/skills/context-optimizer/references/vibe-engineering.md:41
- `Why "Vibe Engineering"` — .claude/skills/context-optimizer/references/vibe-engineering.md:45
- `Key Insight: Anti-Patterns > Examples` — .claude/skills/context-optimizer/references/vibe-engineering.md:49
- `Context Optimization Relevance` — .claude/skills/context-optimizer/references/vibe-engineering.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/context-optimizer/references/vibe-engineering.md:2 — Frontmatter source path `wiki/concepts/AI Productivity/Vibe Engineering.md` does not exist in repository.

## Observations
- Directly links to another source package in the lifecycle synthesis (addy): acknowledges the protocol was popularized by Addy Osmani's agent-skills repo (`"Structured LLM interaction framework from Google Chrome Engineering, popularized by Addy Osmani's agent-skills repo." — .claude/skills/context-optimizer/references/vibe-engineering.md:9`).
- Advocates prioritizing negative guidance over positive examples: argues that anti-patterns provide crisper behavioral boundaries for LLM agents than ideal exemplars (`"Showing what NOT to do is more valuable than showing correct examples. Agents (and humans) learn boundaries faster than ideal paths." — .claude/skills/context-optimizer/references/vibe-engineering.md:51`).
- Distinguishes prompt-level from project-level workflows: notes that while the 7-step interaction protocol governs single-message exchanges, project workflows govern multi-message lifecycles (issues, PRs) (`"The 7-step protocol applies at the prompt level (every message), while project workflows apply it at the project level (issues, PRs)." — .claude/skills/context-optimizer/references/vibe-engineering.md:59`).

## Context cost
3,069 bytes, approximately 750 tokens. Loads no additional reference dependencies.
