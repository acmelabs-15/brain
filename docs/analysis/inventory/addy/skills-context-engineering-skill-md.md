---
package: addy
path: skills/context-engineering/SKILL.md
type: skill
bytes: 11070
unit: inv-addy-40
aliases: []
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/context-engineering/SKILL.md

## Purpose — required, verbatim
> "Context is the single biggest lever for agent output quality — too little and the agent hallucinates, too much and it loses focus. Context engineering is the practice of deliberately curating what the agent sees, when it sees it, and how it's structured." — skills/context-engineering/SKILL.md:10

## Design intent — required
Provides operational guidance for curating, structuring, and managing the context fed to AI coding agents across a session lifecycle. Establishes a five-level context hierarchy (ranging from persistent rules files down to transient conversation history), context packing strategies (Brain Dump, Selective Include, Hierarchical Summary), MCP integrations, and protocols for surfacing conflicting or incomplete requirements to avoid silent assumptions or hallucinated solutions.

## Phase — required
addy:Build

## Inputs — required
- Project tech stack details, build/test commands, conventions, and boundaries
- Specifications and architecture documents
- Relevant source and test files
- Error outputs, stack traces, and test failure results
- User responses to ambiguity / confusion prompts

## Outputs — required
- Rules files (`CLAUDE.md`, `.cursorrules`, `.windsurfrules`, `.github/copilot-instructions.md`, `AGENTS.md`)
- Hierarchical project summaries / maps
- Structured task prompt blocks (Brain Dump, Selective Include)
- Explicit clarification prompts for conflicts or missing requirements
- Lightweight inline plans before multi-step task execution

## Invokes — required
none

## Invoked by — required
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:202
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:27
- doc adoption-guide.md — docs/adoption-guide.md:32
- doc README.md — README.md:251
- doc CLAUDE.md — CLAUDE.md:23

## Concepts named — required, verbatim
- `Context Engineering` — skills/context-engineering/SKILL.md:6 — defined here
- `Context Hierarchy` — skills/context-engineering/SKILL.md:20 — defined here
- `Rules Files` — skills/context-engineering/SKILL.md:26 — defined here
- `CLAUDE.md` — skills/context-engineering/SKILL.md:26 — used here
- `.cursorrules` — skills/context-engineering/SKILL.md:75 — used here
- `.windsurfrules` — skills/context-engineering/SKILL.md:76 — used here
- `.github/copilot-instructions.md` — skills/context-engineering/SKILL.md:77 — used here
- `AGENTS.md` — skills/context-engineering/SKILL.md:78 — used here
- `Pre-task context loading` — skills/context-engineering/SKILL.md:92 — defined here
- `Trust levels` — skills/context-engineering/SKILL.md:98 — defined here
- `Context Packing Strategies` — skills/context-engineering/SKILL.md:121 — defined here
- `The Brain Dump` — skills/context-engineering/SKILL.md:123 — defined here
- `The Selective Include` — skills/context-engineering/SKILL.md:137 — defined here
- `The Hierarchical Summary` — skills/context-engineering/SKILL.md:156 — defined here
- `Model Context Protocol` — skills/context-engineering/SKILL.md:182 — used here
- `Confusion Management` — skills/context-engineering/SKILL.md:192 — defined here
- `Inline Planning Pattern` — skills/context-engineering/SKILL.md:239 — defined here
- `Context starvation` — skills/context-engineering/SKILL.md:257 — defined here
- `Context flooding` — skills/context-engineering/SKILL.md:258 — defined here
- `Stale context` — skills/context-engineering/SKILL.md:259 — defined here
- `Silent confusion` — skills/context-engineering/SKILL.md:262 — defined here

## Structure
- `# Context Engineering`
- `## Overview`
- `## When to Use`
- `## The Context Hierarchy`
- `### Level 1: Rules Files`
- `### Level 2: Specs and Architecture`
- `### Level 3: Relevant Source Files`
- `### Level 4: Error Output`
- `### Level 5: Conversation Management`
- `## Context Packing Strategies`
- `### The Brain Dump`
- `### The Selective Include`
- `### The Hierarchical Summary`
- `## MCP Integrations`
- `## Confusion Management`
- `### When Context Conflicts`
- `### When Requirements Are Incomplete`
- `### The Inline Planning Pattern`
- `## Anti-Patterns`
- `## Common Rationalizations`
- `## Red Flags`
- `## Verification`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts context window capacity with the agent's actual attention budget, urging focused context under 2,000 lines per task. Defines trust levels that treat external documentation, configurations, and data fixtures as untrusted data rather than direct instructions. Prescribes explicit formatting for confusion management and inline execution plans.

## Context cost
11070 bytes (~2768 tokens). Loads no external files.
