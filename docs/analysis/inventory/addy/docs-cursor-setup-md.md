---
package: addy
path: docs/cursor-setup.md
type: doc
bytes: 8370
unit: inv-addy-7
---

# docs/cursor-setup.md

## Purpose — required, verbatim
> "How to wire [agent-skills](../README.md) into **Cursor** using current, supported project context — not legacy monolith files or Kaizen-specific layouts." — docs/cursor-setup.md:3

## Design intent — required
Integration guide documenting how to wire the `addyosmani/agent-skills` catalogue into the Cursor IDE and its Cursor Agent using modern, supported context primitives. Cursor distinguishes between concise always-on or file-scoped policies (`.cursor/rules/*.mdc`) and full, procedural engineering workflows (`.cursor/skills/<name>/SKILL.md`). Without this guide, developers and agents would default to legacy practices such as dumping massive monolith `.cursorrules` files or copying full `SKILL.md` bodies into rules files, which exhaust context budgets and create divergent instructions. The document provides concrete setup instructions (`mkdir`, `rsync`), minimal routing rule configuration (`agent-skills.mdc` routing through `using-agent-skills`), an 8-phase to 17-skill reference map, clear anti-patterns, context optimization guidance, and troubleshooting heuristics.

## Phase — required
none

## Inputs — required
- Upstream skills repository `addyosmani/agent-skills` / `agent-skills/skills/` — docs/cursor-setup.md:48, 52, 64, 70, 76, 225
- Cursor context mechanisms: Project rules (`.cursor/rules/*.mdc`), Project skills (`.cursor/skills/`), User rules (Cursor Settings → Rules), User skills (`~/.cursor/skills/`) — docs/cursor-setup.md:13-16, 18
- Skill YAML frontmatter metadata (`name`, `description`) — docs/cursor-setup.md:81-86, 203
- Meta-skill routing entry point `skills/using-agent-skills/SKILL.md` — docs/cursor-setup.md:102, 144, 164
- Project pointer rule `.cursor/rules/agent-skills.mdc` — docs/cursor-setup.md:41, 92-106, 214
- Agent persona markdown files `agent-skills/agents/*.md` — docs/cursor-setup.md:176, 191
- External Cursor documentation: `https://docs.cursor.com/context/rules` and `https://docs.cursor.com/context/skills` — docs/cursor-setup.md:18

## Outputs — required
- Synced project skills directory `.cursor/skills/<skill-name>/SKILL.md` — docs/cursor-setup.md:14, 42, 63-76, 213
- Project rules directory `.cursor/rules/` with `.mdc` rule files — docs/cursor-setup.md:13, 40, 216
- Routing rule file `.cursor/rules/agent-skills.mdc` — docs/cursor-setup.md:41, 92-106, 214
- Optional user global skills directory `~/.cursor/skills/` — docs/cursor-setup.md:16, 130
- Agent task routing decisions matching user task descriptions to skill frontmatter descriptions — docs/cursor-setup.md:88, 138, 144, 203

## Invokes — required
- skill using-agent-skills — docs/cursor-setup.md:43, 102, 144, 164
- skill test-driven-development — docs/cursor-setup.md:23, 44, 83, 138, 158
- skill code-review-and-quality — docs/cursor-setup.md:23, 45, 149, 160, 193
- skill incremental-implementation — docs/cursor-setup.md:147, 157
- skill api-and-interface-design — docs/cursor-setup.md:147, 157
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
- agent code-reviewer — docs/cursor-setup.md:191
- doc getting-started.md — docs/cursor-setup.md:223
- doc README.md — docs/cursor-setup.md:3, 224

## Invoked by — required
- README.md:103

## Concepts named — required, verbatim
- `agent-skills` — docs/cursor-setup.md:3 — used here
- `Cursor` — docs/cursor-setup.md:1 — used here
- `rules` — docs/cursor-setup.md:9 — defined here | used here
- `skills` — docs/cursor-setup.md:9 — defined here | used here
- `Project rules` — docs/cursor-setup.md:13 — defined here
- `Project skills` — docs/cursor-setup.md:14 — defined here
- `User rules` — docs/cursor-setup.md:15 — defined here
- `User skills` — docs/cursor-setup.md:16 — defined here
- `alwaysApply` — docs/cursor-setup.md:13 — defined here | used here
- `globs` — docs/cursor-setup.md:13 — defined here | used here
- `conventional commits` — docs/cursor-setup.md:22 — used here
- `test-driven-development` — docs/cursor-setup.md:23 — used here
- `code-review-and-quality` — docs/cursor-setup.md:23 — used here
- `.cursorrules` — docs/cursor-setup.md:29 — used here
- `Cursor Agent` — docs/cursor-setup.md:42 — used here
- `using-agent-skills` — docs/cursor-setup.md:43 — used here
- `git submodule` — docs/cursor-setup.md:47 — used here
- `vendor clone` — docs/cursor-setup.md:47 — used here
- `upstream` — docs/cursor-setup.md:48 — defined here | used here
- `YAML frontmatter` — docs/cursor-setup.md:79 — used here
- `name` — docs/cursor-setup.md:83 — defined here | used here
- `description` — docs/cursor-setup.md:84 — defined here | used here
- `agent-skills.mdc` — docs/cursor-setup.md:92 — defined here
- `reference.md` — docs/cursor-setup.md:104 — used here
- `references/*.md` — docs/cursor-setup.md:146 — used here
- `incremental-implementation` — docs/cursor-setup.md:147 — used here
- `api-and-interface-design` — docs/cursor-setup.md:147 — used here
- `TDD` — docs/cursor-setup.md:149 — used here
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
- `code reviewer persona` — docs/cursor-setup.md:191 — used here
- `Checklist (new project)` — docs/cursor-setup.md:211 — defined here

## Structure
- `# Using agent-skills with Cursor` — docs/cursor-setup.md:1
- `## What Cursor supports today` — docs/cursor-setup.md:7
- `### Rules vs skills` — docs/cursor-setup.md:20
- `### Legacy (avoid for new setups)` — docs/cursor-setup.md:25
- `## Recommended project layout` — docs/cursor-setup.md:35
- `## Setup (any repository)` — docs/cursor-setup.md:56
- `### 1. Install skills into .cursor/skills/` — docs/cursor-setup.md:58
- `### 2. Add minimal project rules (optional but useful)` — docs/cursor-setup.md:90
- `### 3. User-level skills (optional)` — docs/cursor-setup.md:128
- `### 4. Verify` — docs/cursor-setup.md:134
- `## How agents should use skills` — docs/cursor-setup.md:142
- `### Phase → skill (quick map)` — docs/cursor-setup.md:151
- `## What not to do` — docs/cursor-setup.md:168
- `## Context tips` — docs/cursor-setup.md:180
- `## agents/ directory` — docs/cursor-setup.md:189
- `## Troubleshooting` — docs/cursor-setup.md:199
- `## Checklist (new project)` — docs/cursor-setup.md:211
- `## See also` — docs/cursor-setup.md:221

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/cursor-setup.md:104, 146 · References `reference.md` and `references/*.md` ("Open reference.md in that folder when the skill links to it"), but no skill in `sources/addy/skills` contains a file named `reference.md` (only `constraint-driven-development` has a `references/` directory, and `idea-refine` has specific files like `examples.md`, `frameworks.md`, `refinement-criteria.md`).
- `cross-file-contradiction` · docs/cursor-setup.md:29-31, 175, 217 vs docs/getting-started.md:34 · `cursor-setup.md` explicitly warns against adding skill content directly to rules files and treats `.cursorrules` as legacy to avoid ("Do not copy entire SKILL.md bodies into rules", "Skip giant .cursorrules"), whereas `docs/getting-started.md:34` still instructs users: "Rules file: Add skill content to your project's rules file (CLAUDE.md, .cursorrules, etc.)."

## Observations
- Decouples short contextual policies (`.cursor/rules/*.mdc`) from detailed procedural workflows (`.cursor/skills/`), avoiding prompt bloat and context exhaustion.
- Clarifies that Cursor Agent does not natively load agent personas from `agents/` (unlike Claude Code plugin subagents/personas), recommending chat pasting or distilling into `.mdc` rules (docs/cursor-setup.md:189-196).
- Recommends committing `.cursor/skills/` directly to project version control rather than relying on global user skills or submodules so teams share identical agent workflows (docs/cursor-setup.md:216).
- Outlines a 4-step execution model for agents: Discover -> Read -> Deep dive -> Combine (docs/cursor-setup.md:142-148).
- Provides a phase-to-skill quick reference matrix mapping 8 development stages to 17 skills (docs/cursor-setup.md:151-163).

## Context cost
- File size: 8,370 bytes (~2,093 tokens).
- Transitive context cost: Pure reference documentation read by developers during setup; not loaded at agent runtime. When configured in Cursor, `.cursor/rules/agent-skills.mdc` imposes ~4 lines (~45 tokens) of always-on overhead, dynamically loading individual skills (~2KB - ~15KB each) only when relevant.
