---
package: addy
path: docs/cursor-setup.md
type: doc
bytes: 8370
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/cursor-setup.md

## Purpose — required, verbatim
> "How to wire [agent-skills](../README.md) into **Cursor** using current, supported project context — not legacy monolith files or Kaizen-specific layouts." — docs/cursor-setup.md:3

## Design intent — required
Provides modern setup and configuration guidance for integrating agent-skills into Cursor IDE. It guides developers to use Cursor's current configuration model — project rules in `.cursor/rules/*.mdc` and on-demand workflow skills in `.cursor/skills/<skill-name>/SKILL.md` — while explicitly warning against deprecated legacy approaches like monolithic `.cursorrules` or pasting entire skills into always-on rules. Without this guide, developers would waste context windows and encounter conflicting rules by duplicating skills into static project prompts.

## Phase — required
none

## Inputs — required
Cursor IDE documentation on Rules and Skills, agent-skills directory structure (`skills/`, `references/`, `agents/`), and upstream synchronization patterns.

## Outputs — required
- `.cursor/skills/` — docs/cursor-setup.md:64
- `.cursor/rules/agent-skills.mdc` — docs/cursor-setup.md:92

## Invokes — required
- skill using-agent-skills — docs/cursor-setup.md:102
- skill interview-me — docs/cursor-setup.md:155
- skill idea-refine — docs/cursor-setup.md:155
- skill spec-driven-development — docs/cursor-setup.md:155
- skill planning-and-task-breakdown — docs/cursor-setup.md:156
- skill incremental-implementation — docs/cursor-setup.md:157
- skill frontend-ui-engineering — docs/cursor-setup.md:157
- skill api-and-interface-design — docs/cursor-setup.md:157
- skill test-driven-development — docs/cursor-setup.md:158
- skill browser-testing-with-devtools — docs/cursor-setup.md:158
- skill debugging-and-error-recovery — docs/cursor-setup.md:159
- skill code-review-and-quality — docs/cursor-setup.md:160
- skill code-simplification — docs/cursor-setup.md:160
- skill security-and-hardening — docs/cursor-setup.md:161
- skill performance-optimization — docs/cursor-setup.md:161
- skill git-workflow-and-versioning — docs/cursor-setup.md:162
- skill ci-cd-and-automation — docs/cursor-setup.md:162
- skill shipping-and-launch — docs/cursor-setup.md:162
- doc getting-started.md — docs/cursor-setup.md:223
- doc README.md — docs/cursor-setup.md:224

## Invoked by — required
- doc README.md — README.md:103

## Concepts named — required, verbatim
- `rules` — docs/cursor-setup.md:9 — used here
- `skills` — docs/cursor-setup.md:9 — used here
- `Project rules` — docs/cursor-setup.md:13 — used here
- `Project skills` — docs/cursor-setup.md:14 — used here
- `User rules` — docs/cursor-setup.md:15 — used here
- `User skills` — docs/cursor-setup.md:16 — used here
- `cursorrules` — docs/cursor-setup.md:29 — used here
- `TDD` — docs/cursor-setup.md:149 — used here
- `rationalization tables` — docs/cursor-setup.md:183 — used here

## Structure
- # Using agent-skills with Cursor
- ## What Cursor supports today
- ### Rules vs skills
- ### Legacy (avoid for new setups)
- ## Recommended project layout
- ## Setup (any repository)
- ### 1. Install skills into .cursor/skills/
- ### 2. Add minimal project rules (optional but useful)
- ### 3. User-level skills (optional)
- ### 4. Verify
- ## How agents should use skills
- ### Phase → skill (quick map)
- ## What not to do
- ## Context tips
- ## agents/ directory
- ## Troubleshooting
- ## Checklist (new project)
- ## See also

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Warns against common context anti-patterns (lines 20-32 and 168-177): pasting `SKILL.md` bodies into rules, maintaining diverging copies, or configuring multiple `alwaysApply: true` rules. Lines 189-196 note that `agents/*.md` personas are not auto-loaded by Cursor and must be referenced via corresponding skills, pasted into chat, or extracted into short `.mdc` rules.

## Context cost
8370 bytes (~2092 tokens), 0 loaded dependencies. Static setup guide kept out of agent working set.
