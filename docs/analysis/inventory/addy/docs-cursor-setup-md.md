---
package: addy
path: docs/cursor-setup.md
type: doc
bytes: 8370
unit: inv-addy-5
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/cursor-setup.md

## Purpose — required, verbatim
> "How to wire [agent-skills](../README.md) into **Cursor** using current, supported project context — not legacy monolith files or Kaizen-specific layouts." — docs/cursor-setup.md:3

## Design intent — required
Explains the recommended integration of agent-skills into Cursor using current Cursor mechanisms: modular project rules (`.cursor/rules/*.mdc`) and discoverable skills (`.cursor/skills/<skill-name>/SKILL.md`). It steers users away from deprecated monolithic `.cursorrules` files, instructs how to sync upstream skills without context bloat, and provides a quick-reference phase-to-skill mapping table.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill using-agent-skills — docs/cursor-setup.md:43
- skill test-driven-development — docs/cursor-setup.md:44
- skill code-review-and-quality — docs/cursor-setup.md:45
- skill incremental-implementation — docs/cursor-setup.md:147
- skill api-and-interface-design — docs/cursor-setup.md:147
- skill interview-me — docs/cursor-setup.md:155
- skill idea-refine — docs/cursor-setup.md:155
- skill spec-driven-development — docs/cursor-setup.md:155
- skill planning-and-task-breakdown — docs/cursor-setup.md:156
- skill frontend-ui-engineering — docs/cursor-setup.md:157
- skill browser-testing-with-devtools — docs/cursor-setup.md:158
- skill debugging-and-error-recovery — docs/cursor-setup.md:159
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
- `.cursor/rules/*.mdc` — docs/cursor-setup.md:13 — used here
- `alwaysApply` — docs/cursor-setup.md:13 — used here
- `globs` — docs/cursor-setup.md:13 — used here
- `.cursor/skills/` — docs/cursor-setup.md:23 — used here
- `Rules` — docs/cursor-setup.md:22 — defined here
- `Skills` — docs/cursor-setup.md:23 — defined here
- `.cursorrules` — docs/cursor-setup.md:29 — used here
- `agent-skills.mdc` — docs/cursor-setup.md:41 — used here
- `using-agent-skills` — docs/cursor-setup.md:43 — used here
- `test-driven-development` — docs/cursor-setup.md:44 — used here
- `code-review-and-quality` — docs/cursor-setup.md:45 — used here
- `reference.md` — docs/cursor-setup.md:104 — used here
- `incremental-implementation` — docs/cursor-setup.md:147 — used here
- `api-and-interface-design` — docs/cursor-setup.md:147 — used here
- `interview-me` — docs/cursor-setup.md:155 — used here
- `idea-refine` — docs/cursor-setup.md:155 — used here
- `spec-driven-development` — docs/cursor-setup.md:155 — used here
- `planning-and-task-breakdown` — docs/cursor-setup.md:156 — used here
- `frontend-ui-engineering` — docs/cursor-setup.md:157 — used here
- `browser-testing-with-devtools` — docs/cursor-setup.md:158 — used here
- `debugging-and-error-recovery` — docs/cursor-setup.md:159 — used here
- `code-simplification` — docs/cursor-setup.md:160 — used here
- `security-and-hardening` — docs/cursor-setup.md:161 — used here
- `performance-optimization` — docs/cursor-setup.md:161 — used here
- `git-workflow-and-versioning` — docs/cursor-setup.md:162 — used here
- `ci-cd-and-automation` — docs/cursor-setup.md:162 — used here
- `shipping-and-launch` — docs/cursor-setup.md:162 — used here

## Structure
- `# Using agent-skills with Cursor` — docs/cursor-setup.md:1
- `## What Cursor supports today` — docs/cursor-setup.md:7
- `### Rules vs skills` — docs/cursor-setup.md:20
- `### Legacy (avoid for new setups)` — docs/cursor-setup.md:25
- `## Recommended project layout` — docs/cursor-setup.md:35
- `## Setup (any repository)` — docs/cursor-setup.md:56
- `### 1. Install skills into `.cursor/skills/`` — docs/cursor-setup.md:58
- `### 2. Add minimal project rules (optional but useful)` — docs/cursor-setup.md:90
- `### 3. User-level skills (optional)` — docs/cursor-setup.md:128
- `### 4. Verify` — docs/cursor-setup.md:134
- `## How agents should use skills` — docs/cursor-setup.md:142
- `### Phase → skill (quick map)` — docs/cursor-setup.md:151
- `## What not to do` — docs/cursor-setup.md:168
- `## Context tips` — docs/cursor-setup.md:180
- `## `agents/` directory` — docs/cursor-setup.md:189
- `## Troubleshooting` — docs/cursor-setup.md:199
- `## Checklist (new project)` — docs/cursor-setup.md:211
- `## See also` — docs/cursor-setup.md:221

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clearly demarcates between rules (concise, always-on or glob-scoped instructions in `.cursor/rules/*.mdc`) and skills (step-by-step processes in `.cursor/skills/<name>/SKILL.md`), warning that copying entire skill bodies into rules duplicates context and wastes tokens. Explains that Cursor does not automatically load agent persona files from `agents/` and notes workarounds (chat pasting or extracting checklists into `.mdc` rules).

## Context cost
8370 bytes, ~2090 tokens.
