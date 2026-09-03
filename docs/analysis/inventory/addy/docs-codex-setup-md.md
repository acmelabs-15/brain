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
