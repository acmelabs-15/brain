# Inventory Exploration Report — Work Unit `inv-addy-7` (Explorer 1)

**Date**: 2026-09-03  
**Package**: `addy` (github.com/addyosmani/agent-skills @ `d2c37ef6225dd8726cdd369a8030307f48592d26`)  
**Assigned Files**:
1. `sources/addy/docs/cursor-setup.md` (8,370 bytes, doc)
2. `sources/addy/docs/codex-setup.md` (1,805 bytes, doc)

---

## Executive Summary

This report covers the exhaustive inventory extraction for Explorer 1's assigned files in work unit `inv-addy-7`. Both files are developer-facing integration and setup guides detailing how the `agent-skills` repository is consumed outside Claude Code:
1. `docs/cursor-setup.md` details how to integrate the repository with the Cursor IDE and Cursor Agent using modern `.cursor/rules/*.mdc` policies and `.cursor/skills/<name>/SKILL.md` workflows.
2. `docs/codex-setup.md` details how the repository functions as a native OpenAI Codex plugin, sharing the root `skills/` directory without duplication.

Both files were read completely from first to last line without skipping any section. Every path mentioned in both files was verified on disk. All package validation scripts and test suites were executed with exit code 0. Two defects were identified and classified according to METHOD.md §4:
- In `docs/cursor-setup.md`: `doc-drift` regarding nonexistent `reference.md` files in skills (lines 104, 146), and `cross-file-contradiction` with `docs/getting-started.md:34` regarding putting skill content into rules files.
- In `docs/codex-setup.md`: `cross-file-contradiction` with `.codex-plugin/plugin.json:16` regarding the total skill count (25 in doc vs 24 in manifest).

Below are the complete, validated inventory entries formatted per `docs/plan/templates/inventory-entry.md`.

---

# Inventory Entry: docs/cursor-setup.md

```markdown
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
```

---

# Inventory Entry: docs/codex-setup.md

```markdown
---
package: addy
path: docs/codex-setup.md
type: doc
bytes: 1805
unit: inv-addy-7
---

# docs/codex-setup.md

## Purpose — required, verbatim
> "This repository is also a [Codex plugin](https://developers.openai.com/codex/plugins/build). The same root-level `skills/` directory used by Claude Code is consumed by Codex, so no files are copied or duplicated." — docs/codex-setup.md:3

## Design intent — required
Documents the setup, installation, and operation of `addyosmani/agent-skills` as a native OpenAI Codex plugin using the Codex CLI. Solves the distribution problem across disparate agent platforms by establishing a single-source architecture where Codex directly references the root `skills/` directory via `.codex-plugin/plugin.json` and `.agents/plugins/marketplace.json` without file copying or synchronization scripts. Documents the CLI marketplace installation commands (`codex plugin marketplace add`, `codex plugin add`), local clone support, `@<skill-name>` chat invocation semantics, and delineates platform capability boundaries (explaining that Claude Code slash commands, agent personas, and lifecycle hooks stay Claude-specific and require direct skill invocation in Codex).

## Phase — required
none

## Inputs — required
- Repository marketplace source `addyosmani/agent-skills` or local path `/path/to/your/clone` — docs/codex-setup.md:8, 19
- Codex CLI (`v0.122` or later) — docs/codex-setup.md:8-9, 12, 19-20
- Root skills directory `skills/` (`skills/<name>/SKILL.md`) — docs/codex-setup.md:3, 25, 29, 31
- Codex plugin manifest `.codex-plugin/plugin.json` — docs/codex-setup.md:29
- Marketplace definition `.agents/plugins/marketplace.json` — docs/codex-setup.md:30
- Skill `spec-driven-development` (as invocation example) — docs/codex-setup.md:25, 33

## Outputs — required
- Installed and enabled `agent-skills` plugin in Codex — docs/codex-setup.md:9, 14, 20
- Chat-invoked skill activations via `@<skill-name>` (e.g. `@spec-driven-development`) or automatic task matching — docs/codex-setup.md:25, 33

## Invokes — required
- config .codex-plugin/plugin.json — docs/codex-setup.md:29
- config .agents/plugins/marketplace.json — docs/codex-setup.md:30
- skill spec-driven-development — docs/codex-setup.md:25, 33
- command /spec — docs/codex-setup.md:33
- directory .claude/commands/ — docs/codex-setup.md:33
- directory agents/ — docs/codex-setup.md:33
- directory hooks/ — docs/codex-setup.md:33

## Invoked by — required
- README.md:184

## Concepts named — required, verbatim
- `Codex` — docs/codex-setup.md:1 — used here
- `Codex plugin` — docs/codex-setup.md:3 — defined here | used here
- `Claude Code` — docs/codex-setup.md:3 — used here
- `Codex CLI` — docs/codex-setup.md:12 — used here
- `codex plugin marketplace add` — docs/codex-setup.md:8 — defined here
- `codex plugin add` — docs/codex-setup.md:9 — defined here
- `codex marketplace add` — docs/codex-setup.md:12 — defined here
- `agent-skills` — docs/codex-setup.md:1 — used here
- `spec-driven-development` — docs/codex-setup.md:25 — used here
- `.codex-plugin/plugin.json` — docs/codex-setup.md:29 — defined here | used here
- `.agents/plugins/marketplace.json` — docs/codex-setup.md:30 — defined here | used here
- `SKILL.md` — docs/codex-setup.md:31 — used here
- `frontmatter` — docs/codex-setup.md:31 — used here
- `name` — docs/codex-setup.md:31 — used here
- `description` — docs/codex-setup.md:31 — used here
- `Slash commands` — docs/codex-setup.md:33 — used here
- `personas` — docs/codex-setup.md:33 — used here
- `lifecycle hook` — docs/codex-setup.md:33 — used here
- `/spec` — docs/codex-setup.md:33 — used here

## Structure
- `# Using agent-skills with Codex` — docs/codex-setup.md:1
- `## Install` — docs/codex-setup.md:5
- `## Usage` — docs/codex-setup.md:23
- `## How it works` — docs/codex-setup.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · docs/codex-setup.md:25 vs .codex-plugin/plugin.json:16 · `docs/codex-setup.md:25` states "All 25 skills under skills/ are available", whereas `.codex-plugin/plugin.json:16` states "Agent Skills bundles 24 production engineering workflows from Addy Osmani", reflecting a stale count in the plugin manifest.

## Observations
- Highlights single-source multi-harness design: Claude Code and Codex consume the identical `skills/` directory and identical `name` + `description` YAML frontmatter with zero file duplication (docs/codex-setup.md:3, 31).
- Explains harness boundary differences: Claude Code specific capabilities like `.claude/commands/` slash commands, `agents/` personas, and `hooks/` lifecycle scripts do not load in Codex, requiring direct `@<skill-name>` invocation instead (docs/codex-setup.md:33).
- Clarifies marketplace configuration: `.agents/plugins/marketplace.json` defines the local repository (`path: "./"`) as the plugin source (docs/codex-setup.md:30).

## Context cost
- File size: 1,805 bytes (~451 tokens).
- Transitive context cost: Pure reference documentation read by developers for plugin setup; zero static overhead at agent runtime. Skills are loaded on demand when invoked via `@<skill-name>`.
```

---

## Verification & Validation Summary

### 1. File & Path Existence Verification
Every referenced path was checked on disk in `sources/addy/`:
- `sources/addy/README.md` (exists, 25,223 bytes)
- `sources/addy/docs/getting-started.md` (exists, 7,104 bytes)
- `sources/addy/skills/using-agent-skills/SKILL.md` (exists, 10,426 bytes)
- All 18 skills referenced in `cursor-setup.md` exist under `sources/addy/skills/`
- All 25 skills total exist in `sources/addy/skills/`
- `sources/addy/agents/` (exists, contains 4 personas: `code-reviewer.md`, `security-auditor.md`, `test-engineer.md`, `web-performance-auditor.md`)
- `sources/addy/.codex-plugin/plugin.json` (exists, 1,119 bytes)
- `sources/addy/.agents/plugins/marketplace.json` (exists, 535 bytes)
- `sources/addy/.claude/commands/` (exists, contains 9 commands including `spec.md`)
- `sources/addy/hooks/` (exists, contains `hooks.json`, `session-start.sh`, `simplify-ignore.sh`, etc.)
- `sources/addy/plugin.json` (exists, 129 bytes)

### 2. Validation & Test Execution
Executed with `bun` inside `sources/addy/`:
- `bun scripts/validate-skills.js` -> 25 skills checked, 0 errors, PASSED.
- `bun scripts/validate-commands.js` -> 9 commands checked, 0 errors, PASSED.
- `bun scripts/validate-reference-links.js` -> 25 skills checked, 0 errors, PASSED.
- `bun scripts/validate-artifact-paths.js` -> 7 files checked, 0 errors, PASSED.
- `bun scripts/validate-versions.js` -> All plugin manifests use version 0.6.8, PASSED.
- `bun test ./scripts/run-evals-test.js ./scripts/validate-artifact-paths-test.js ./scripts/validate-commands-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-versions-test.js` -> 35 passed, 0 failed.

Synthesis scripts in brain root:
- `bun scripts/synthesis/glossary-lint.ts` -> Glossary lint: clean.
