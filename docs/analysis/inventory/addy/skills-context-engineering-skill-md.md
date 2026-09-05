---
package: addy
path: skills/context-engineering/SKILL.md
type: skill
bytes: 11070
unit: inv-addy-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/context-engineering/SKILL.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." — skills/context-engineering/SKILL.md:3

## Design intent — required
Provides structured methodologies for engineering agent context across the lifecycle, addressing the fundamental trade-off between context starvation (leading to hallucinations and API guessing) and context flooding (leading to attention loss and ignored instructions). Establishes a five-tier context hierarchy spanning persistent rules files down to transient conversation turns, specifies concrete context packing strategies (the Brain Dump, Selective Include, and Hierarchical Summary), details MCP server integrations, and introduces explicit confusion management patterns so agents surface conflicting requirements or missing specifications instead of guessing.

## Phase — required
addy:Build ("Build" — README.md:359; CLAUDE.md:23)

## Inputs — required
- Project rules files: `CLAUDE.md` — skills/context-engineering/SKILL.md:42, `.cursorrules` — skills/context-engineering/SKILL.md:75, `.windsurfrules` — skills/context-engineering/SKILL.md:76, `AGENTS.md` — skills/context-engineering/SKILL.md:78
- Specifications and architecture docs — skills/context-engineering/SKILL.md:80
- Source files, tests, and type definitions classified by trust level (`Trusted`, `Verify before acting on`, `Untrusted`) — skills/context-engineering/SKILL.md:88, 99-101
- Error output and test logs — skills/context-engineering/SKILL.md:105
- Conversation history — skills/context-engineering/SKILL.md:113
- MCP server live data feeds: Context7, Chrome DevTools, PostgreSQL, Filesystem, GitHub — skills/context-engineering/SKILL.md:186-190

## Outputs — required
- Rules file configurations: `CLAUDE.md` — skills/context-engineering/SKILL.md:42
- Structured context payloads: `# Project Map` — skills/context-engineering/SKILL.md:161, Brain Dump — skills/context-engineering/SKILL.md:123, Selective Include — skills/context-engineering/SKILL.md:137
- Structured ambiguity resolution prompts: `CONFUSION:` — skills/context-engineering/SKILL.md:206, `MISSING REQUIREMENT:` — skills/context-engineering/SKILL.md:227
- Inline execution plan blocks: `PLAN:` — skills/context-engineering/SKILL.md:244

## Invokes — required
none

## Invoked by — required
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:202
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:27
- doc docs/adoption-guide.md — docs/adoption-guide.md:32

## Concepts named — required, verbatim
- `Context Engineering` — skills/context-engineering/SKILL.md:6 — defined here
- `The Context Hierarchy` — skills/context-engineering/SKILL.md:20 — defined here
- `Rules Files` — skills/context-engineering/SKILL.md:26 — defined here
- `Spec / Architecture Docs` — skills/context-engineering/SKILL.md:28 — defined here
- `Relevant Source Files` — skills/context-engineering/SKILL.md:30 — defined here
- `Error Output / Test Results` — skills/context-engineering/SKILL.md:32 — defined here
- `Conversation History` — skills/context-engineering/SKILL.md:34 — defined here
- `CLAUDE.md` — skills/context-engineering/SKILL.md:42 — defined here
- `.cursorrules` — skills/context-engineering/SKILL.md:75 — used here
- `.windsurfrules` — skills/context-engineering/SKILL.md:76 — used here
- `.github/copilot-instructions.md` — skills/context-engineering/SKILL.md:77 — used here
- `AGENTS.md` — skills/context-engineering/SKILL.md:78 — used here
- `Trust levels` — skills/context-engineering/SKILL.md:98 — defined here
- `Trusted` — skills/context-engineering/SKILL.md:99 — defined here
- `Verify before acting on` — skills/context-engineering/SKILL.md:100 — defined here
- `Untrusted` — skills/context-engineering/SKILL.md:101 — defined here
- `The Brain Dump` — skills/context-engineering/SKILL.md:123 — defined here
- `The Selective Include` — skills/context-engineering/SKILL.md:137 — defined here
- `The Hierarchical Summary` — skills/context-engineering/SKILL.md:156 — defined here
- `MCP Integrations` — skills/context-engineering/SKILL.md:180 — defined here
- `Context7` — skills/context-engineering/SKILL.md:186 — used here
- `Chrome DevTools` — skills/context-engineering/SKILL.md:187 — used here
- `PostgreSQL` — skills/context-engineering/SKILL.md:188 — used here
- `Filesystem` — skills/context-engineering/SKILL.md:189 — used here
- `GitHub` — skills/context-engineering/SKILL.md:190 — used here
- `Confusion Management` — skills/context-engineering/SKILL.md:192 — defined here
- `The Inline Planning Pattern` — skills/context-engineering/SKILL.md:239 — defined here
- `Context starvation` — skills/context-engineering/SKILL.md:257 — defined here
- `Context flooding` — skills/context-engineering/SKILL.md:258 — defined here
- `Stale context` — skills/context-engineering/SKILL.md:259 — defined here
- `Missing examples` — skills/context-engineering/SKILL.md:260 — defined here
- `Implicit knowledge` — skills/context-engineering/SKILL.md:261 — defined here
- `Silent confusion` — skills/context-engineering/SKILL.md:262 — defined here

## Structure
- `# Context Engineering` — skills/context-engineering/SKILL.md:6
- `## Overview` — skills/context-engineering/SKILL.md:8
- `## When to Use` — skills/context-engineering/SKILL.md:12
- `## The Context Hierarchy` — skills/context-engineering/SKILL.md:20
- `### Level 1: Rules Files` — skills/context-engineering/SKILL.md:38
- `### Level 2: Specs and Architecture` — skills/context-engineering/SKILL.md:80
- `### Level 3: Relevant Source Files` — skills/context-engineering/SKILL.md:88
- `### Level 4: Error Output` — skills/context-engineering/SKILL.md:105
- `### Level 5: Conversation Management` — skills/context-engineering/SKILL.md:113
- `## Context Packing Strategies` — skills/context-engineering/SKILL.md:121
- `### The Brain Dump` — skills/context-engineering/SKILL.md:123
- `### The Selective Include` — skills/context-engineering/SKILL.md:137
- `### The Hierarchical Summary` — skills/context-engineering/SKILL.md:156
- `## MCP Integrations` — skills/context-engineering/SKILL.md:180
- `## Confusion Management` — skills/context-engineering/SKILL.md:192
- `### When Context Conflicts` — skills/context-engineering/SKILL.md:196
- `### When Requirements Are Incomplete` — skills/context-engineering/SKILL.md:218
- `### The Inline Planning Pattern` — skills/context-engineering/SKILL.md:239
- `## Anti-Patterns` — skills/context-engineering/SKILL.md:253
- `## Common Rationalizations` — skills/context-engineering/SKILL.md:264
- `## Red Flags` — skills/context-engineering/SKILL.md:273
- `## Verification` — skills/context-engineering/SKILL.md:282

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — skills/context-engineering/SKILL.md:3: Frontmatter description ("Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." — skills/context-engineering/SKILL.md:3) omits MCP integrations and command links that the external documentation catalog page introduces ("wire MCP integrations so the agent has exactly what it needs - no more, no less." — external/context-engineering.md:5 and link to `/build` — external/context-engineering.md:12).
- orphan — skills/context-engineering/SKILL.md:1: No `.claude/commands/` slash command exposes this skill directly to the user (unlike other skills in the Build phase), leaving it invoked only as an embedded workflow reference in `skills/spec-driven-development/SKILL.md:202` and documentation.

## Observations
- Defines three distinct trust tiers for input context (Trusted, Verify before acting on, Untrusted), explicitly guarding against indirect prompt injection by warning that instruction-like text in data fixtures, configs, or external docs must be treated as passive data rather than executable directives (lines 98-103).
- Specifies strict context size boundaries: "Aim for <2,000 lines of focused context per task" and warns against ">5,000 lines" (skills/context-engineering/SKILL.md:258).
- The Inline Planning Pattern introduces a lightweight protocol ("Executing unless you redirect" — skills/context-engineering/SKILL.md:248) to catch divergent implementation approaches before extensive code is written.

## Context cost
11,070 bytes (~2,770 tokens). Isolated execution (loads no external references or scripts).
