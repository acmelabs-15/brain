---
package: addy
path: skills/context-engineering/SKILL.md
type: skill
bytes: 11070
unit: inv-addy-14
---

# skills/context-engineering/SKILL.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." — skills/context-engineering/SKILL.md:3

## Design intent — required
Language model performance degrades rapidly under context starvation (hallucinating non-existent APIs and ignoring conventions) or context flooding (>5,000 lines of diffuse context causing attention distraction). `context-engineering` solves the problem of unreliable, drifting agent behavior by establishing rigorous context curation disciplines: structuring context into a 5-level persistence hierarchy (Rules Files → Specs/Architecture → Source Files → Error Output → Conversation History), defining structured context packing patterns (The Brain Dump, The Selective Include, The Hierarchical Summary / Project Map), classifying loaded files by trust tiers (Trusted, Verify before acting on, Untrusted), integrating MCP servers for live context, and providing explicit confusion management / inline planning protocols when specifications are contradictory or incomplete. Without it, agents either drift blindly or become overwhelmed by excessive context dumps, leading to hallucinated code, broken conventions, and costly rework.

## Phase — required
addy:Build

## Inputs — required
- Project tech stack, commands, conventions, boundaries, and architectural patterns
- Rules files (project-level persistent instructions: `CLAUDE.md`, `.cursorrules`, `.cursor/rules/*.md`, `.windsurfrules`, `.github/copilot-instructions.md`, `AGENTS.md`)
- Feature specifications and architecture documentation (scoped excerpts)
- Relevant source code, tests, and type definitions
- Error traces and test failures (minimal, specific excerpts)
- Model Context Protocol (MCP) server feeds (Context7, Chrome DevTools, PostgreSQL, Filesystem, GitHub)
- Ambiguities, conflicting requirements, or missing specifications detected during execution

## Outputs — required
- Curated project rules files (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`)
- Task-scoped context packages (The Brain Dump, The Selective Include, The Hierarchical Summary / `Project Map`)
- Trust-tiered context classifications (Trusted, Verify before acting on, Untrusted)
- Surface clarifications for conflicting or incomplete requirements (The Confusion Management prompt pattern)
- Lightweight execution plans before multi-step tasks (The Inline Planning Pattern)
- Context hygiene actions (fresh sessions, progressive summarization, deliberate compaction)

## Invokes — required
none

## Invoked by — required
- doc `CLAUDE.md` — CLAUDE.md:23
- doc `README.md` — README.md:251, 359
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:27, 150, 177
- skill `skills/spec-driven-development/SKILL.md` — skills/spec-driven-development/SKILL.md:202
- doc `docs/adoption-guide.md` — docs/adoption-guide.md:32, 81, 112, 124
- config `evals/cases/context-engineering.json` — evals/cases/context-engineering.json:2, 35

## Concepts named — required, verbatim
- `context-engineering` — skills/context-engineering/SKILL.md:2 — defined here
- `The Context Hierarchy` — skills/context-engineering/SKILL.md:20 — defined here
- `Rules Files` — skills/context-engineering/SKILL.md:26, 38 — defined here
- `Specs and Architecture` — skills/context-engineering/SKILL.md:28, 80 — defined here
- `Relevant Source Files` — skills/context-engineering/SKILL.md:30, 88 — defined here
- `Error Output` — skills/context-engineering/SKILL.md:32, 105 — defined here
- `Conversation Management` — skills/context-engineering/SKILL.md:34, 113 — defined here
- `CLAUDE.md` — skills/context-engineering/SKILL.md:42 — used here
- `.cursorrules` — skills/context-engineering/SKILL.md:75 — used here
- `.cursor/rules/*.md` — skills/context-engineering/SKILL.md:75 — used here
- `.windsurfrules` — skills/context-engineering/SKILL.md:76 — used here
- `.github/copilot-instructions.md` — skills/context-engineering/SKILL.md:77 — used here
- `AGENTS.md` — skills/context-engineering/SKILL.md:78 — used here
- `Pre-task context loading` — skills/context-engineering/SKILL.md:92 — defined here
- `Trust levels for loaded files` — skills/context-engineering/SKILL.md:98 — defined here
- `Trusted` — skills/context-engineering/SKILL.md:99 — defined here
- `Verify before acting on` — skills/context-engineering/SKILL.md:100 — defined here
- `Untrusted` — skills/context-engineering/SKILL.md:101 — defined here
- `Context Packing Strategies` — skills/context-engineering/SKILL.md:121 — defined here
- `The Brain Dump` — skills/context-engineering/SKILL.md:123 — defined here
- `The Selective Include` — skills/context-engineering/SKILL.md:137 — defined here
- `The Hierarchical Summary` — skills/context-engineering/SKILL.md:156 — defined here
- `Project Map` — skills/context-engineering/SKILL.md:161 — defined here
- `MCP Integrations` — skills/context-engineering/SKILL.md:180 — defined here
- `Context7` — skills/context-engineering/SKILL.md:186 — used here
- `Chrome DevTools` — skills/context-engineering/SKILL.md:187 — used here
- `PostgreSQL` — skills/context-engineering/SKILL.md:188 — used here
- `Filesystem` — skills/context-engineering/SKILL.md:189 — used here
- `GitHub` — skills/context-engineering/SKILL.md:190 — used here
- `Confusion Management` — skills/context-engineering/SKILL.md:192 — defined here
- `When Context Conflicts` — skills/context-engineering/SKILL.md:196 — defined here
- `When Requirements Are Incomplete` — skills/context-engineering/SKILL.md:218 — defined here
- `The Inline Planning Pattern` — skills/context-engineering/SKILL.md:239 — defined here
- `Anti-Patterns` — skills/context-engineering/SKILL.md:253 — defined here
- `Context starvation` — skills/context-engineering/SKILL.md:257 — defined here
- `Context flooding` — skills/context-engineering/SKILL.md:258 — defined here
- `Stale context` — skills/context-engineering/SKILL.md:259 — defined here
- `Missing examples` — skills/context-engineering/SKILL.md:260 — defined here
- `Implicit knowledge` — skills/context-engineering/SKILL.md:261 — defined here
- `Silent confusion` — skills/context-engineering/SKILL.md:262 — defined here
- `Common Rationalizations` — skills/context-engineering/SKILL.md:264 — defined here
- `Red Flags` — skills/context-engineering/SKILL.md:273 — defined here
- `Verification` — skills/context-engineering/SKILL.md:282 — defined here

## Structure
- `# Context Engineering` — line 6
- `## Overview` — line 8
- `## When to Use` — line 12
- `## The Context Hierarchy` — line 20
- `### Level 1: Rules Files` — line 38
- `### Level 2: Specs and Architecture` — line 80
- `### Level 3: Relevant Source Files` — line 88
- `### Level 4: Error Output` — line 105
- `### Level 5: Conversation Management` — line 113
- `## Context Packing Strategies` — line 121
- `### The Brain Dump` — line 123
- `### The Selective Include` — line 137
- `### The Hierarchical Summary` — line 156
- `## MCP Integrations` — line 180
- `## Confusion Management` — line 192
- `### When Context Conflicts` — line 196
- `### When Requirements Are Incomplete` — line 218
- `### The Inline Planning Pattern` — line 239
- `## Anti-Patterns` — line 253
- `## Common Rationalizations` — line 264
- `## Red Flags` — line 273
- `## Verification` — line 282

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the 5-level "Context Hierarchy" which parallels modern prompt engineering and context caching architectures (persistent rules → per-session specs → per-task source files → per-iteration error outputs → compacting conversation history).
- Features "Trust levels for loaded files" (Trusted, Verify before acting on, Untrusted), explicitly protecting against indirect prompt injection where external docs/config contain instruction-like text.
- Introduces "The Inline Planning Pattern" (emit a lightweight 3-step plan before execution: "Executing unless you redirect") as a rapid 30-second alignment safeguard.
- Line 78 notes `AGENTS.md (OpenAI Codex)`; while modern practice uses `AGENTS.md` broadly across agent runtimes (including Antigravity), in Addy's codebase this serves as the Codex equivalent to Claude Code's `CLAUDE.md`.

## Context cost
11,070 bytes (approx. 2,768 tokens). Isolated execution (no child skills invoked).
