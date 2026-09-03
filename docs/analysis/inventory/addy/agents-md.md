---
package: addy
path: AGENTS.md
type: doc
bytes: 5386
unit: inv-addy-20
---

# AGENTS.md

## Purpose — required, verbatim
> "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository.
>
> > **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself. It is not meant to be copied into other projects or into a global agent configuration; the reusable assets are the skills in `skills/`, not this file." — AGENTS.md:3-5

## Design intent — required
Acts as the central operational constitution and runtime guidance file for AI coding agents operating across multiple harnesses (Claude Code, Cursor, Copilot, Antigravity, OpenCode) within the `addyosmani/agent-skills` repository. It establishes OpenCode's skill-driven execution model via the `skill` tool, enforces intent-to-skill and lifecycle-to-skill mappings, equips agents with anti-rationalization defenses against implementing changes directly, establishes the three composable architectural layers (Skills = how, Personas = who, Slash commands = when), sets strict multi-persona orchestration laws (parallel fan-out with merge only; personas never invoke other personas; router personas are forbidden), and enforces repository-specific pre-flight checks and skill-anatomy standards for creating new skills.

## Phase — required
cross-phase

## Inputs — required
- User task prompts, coding intents, and maintenance requests directed to coding agents (`AGENTS.md:24, 49`)
- Repository assets across `skills/`, `agents/`, and `.claude/commands/` (`AGENTS.md:18, 74-76`)
- Open repository pull requests queried via `gh pr list --state open` (`AGENTS.md:88`)
- Authoring standards: `CONTRIBUTING.md#before-proposing-a-new-skill` (`AGENTS.md:88`) and `docs/skill-anatomy.md` (`AGENTS.md:88, 92`)

## Outputs — required
- Mandatory skill invocations via OpenCode `skill` tool or slash commands (`AGENTS.md:13, 52`)
- Enforced sequential lifecycle progressions: DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP (`AGENTS.md:40-45`)
- Parallel fan-out orchestration plans synthesizing multiple specialist persona outputs (`AGENTS.md:80`)
- Compliant markdown-first skill directories with YAML frontmatter (`skills/<kebab-case-name>/SKILL.md`) (`AGENTS.md:90`)

## Invokes — required
- dir skills/ — AGENTS.md:5, AGENTS.md:9, AGENTS.md:13, AGENTS.md:18, AGENTS.md:90
- skill skills/spec-driven-development/SKILL.md — AGENTS.md:26, AGENTS.md:40
- skill skills/incremental-implementation/SKILL.md — AGENTS.md:26, AGENTS.md:42
- skill skills/test-driven-development/SKILL.md — AGENTS.md:26, AGENTS.md:42
- skill skills/planning-and-task-breakdown/SKILL.md — AGENTS.md:27, AGENTS.md:41
- skill skills/debugging-and-error-recovery/SKILL.md — AGENTS.md:28, AGENTS.md:43
- skill skills/code-review-and-quality/SKILL.md — AGENTS.md:29, AGENTS.md:44
- skill skills/code-simplification/SKILL.md — AGENTS.md:30
- skill skills/api-and-interface-design/SKILL.md — AGENTS.md:31
- skill skills/frontend-ui-engineering/SKILL.md — AGENTS.md:32
- skill skills/shipping-and-launch/SKILL.md — AGENTS.md:45
- dir agents/ — AGENTS.md:75, AGENTS.md:84
- agent agents/code-reviewer.md — AGENTS.md:80
- agent agents/security-auditor.md — AGENTS.md:80
- agent agents/test-engineer.md — AGENTS.md:80
- dir .claude/commands/ — AGENTS.md:76
- command .claude/commands/ship.md — AGENTS.md:80
- doc docs/agents.md — AGENTS.md:82
- reference references/orchestration-patterns.md — AGENTS.md:82
- doc CONTRIBUTING.md — AGENTS.md:88
- doc docs/skill-anatomy.md — AGENTS.md:88, AGENTS.md:92

## Invoked by — required
- doc README.md — README.md:156
- skill skills/context-engineering/SKILL.md — skills/context-engineering/SKILL.md:78
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:53, skills/constraint-driven-development/SKILL.md:140, skills/constraint-driven-development/SKILL.md:301
- skill skills/planning-and-task-breakdown/SKILL.md — skills/planning-and-task-breakdown/SKILL.md:162
- command commands/code-simplify.toml — commands/code-simplify.toml:8
- command commands/constraints.toml — commands/constraints.toml:24
- doc CONTRIBUTING.md — CONTRIBUTING.md:71
- doc docs/agents.md — docs/agents.md:97
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:26, docs/developer-onboarding.md:116
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:106, docs/antigravity-setup.md:107
- doc docs/opencode-setup.md — docs/opencode-setup.md:3, docs/opencode-setup.md:9, docs/opencode-setup.md:19, docs/opencode-setup.md:92, docs/opencode-setup.md:94, docs/opencode-setup.md:96, docs/opencode-setup.md:98, docs/opencode-setup.md:134, docs/opencode-setup.md:136, docs/opencode-setup.md:155, docs/opencode-setup.md:244, docs/opencode-setup.md:255, docs/opencode-setup.md:256, docs/opencode-setup.md:259
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:296, references/orchestration-patterns.md:298

## Concepts named — required, verbatim
- `AGENTS.md` — AGENTS.md:1 — defined here
- `Claude Code` — AGENTS.md:3 — used here
- `Cursor` — AGENTS.md:3 — used here
- `Copilot` — AGENTS.md:3 — used here
- `Antigravity` — AGENTS.md:3 — used here
- `OpenCode Integration` — AGENTS.md:11 — defined here
- `skill-driven execution model` — AGENTS.md:13 — defined here
- `skill tool` — AGENTS.md:13 — used here
- `Core Rules` — AGENTS.md:15 — defined here
- `Intent → Skill Mapping` — AGENTS.md:22 — defined here
- `spec-driven-development` — AGENTS.md:26 — used here
- `incremental-implementation` — AGENTS.md:26 — used here
- `test-driven-development` — AGENTS.md:26 — used here
- `planning-and-task-breakdown` — AGENTS.md:27 — used here
- `debugging-and-error-recovery` — AGENTS.md:28 — used here
- `code-review-and-quality` — AGENTS.md:29 — used here
- `code-simplification` — AGENTS.md:30 — used here
- `api-and-interface-design` — AGENTS.md:31 — used here
- `frontend-ui-engineering` — AGENTS.md:32 — used here
- `Lifecycle Mapping (Implicit Commands)` — AGENTS.md:34 — defined here
- `DEFINE` — AGENTS.md:40 — defined here
- `PLAN` — AGENTS.md:41 — defined here
- `BUILD` — AGENTS.md:42 — defined here
- `VERIFY` — AGENTS.md:43 — defined here
- `REVIEW` — AGENTS.md:44 — defined here
- `SHIP` — AGENTS.md:45 — defined here
- `shipping-and-launch` — AGENTS.md:45 — used here
- `Execution Model` — AGENTS.md:47 — defined here
- `Anti-Rationalization` — AGENTS.md:56 — defined here
- `Three composable layers` — AGENTS.md:72 — defined here
- `Skills` — AGENTS.md:74 — defined here
- `Personas` — AGENTS.md:75 — defined here
- `Slash commands` — AGENTS.md:76 — defined here
- `Composition rule` — AGENTS.md:78 — defined here
- `parallel fan-out with a merge step` — AGENTS.md:80 — defined here
- `router persona` — AGENTS.md:80 — defined here
- `code-reviewer` — AGENTS.md:80 — used here
- `security-auditor` — AGENTS.md:80 — used here
- `test-engineer` — AGENTS.md:80 — used here
- `Claude Code interop` — AGENTS.md:84 — defined here
- `Agent Teams` — AGENTS.md:84 — used here
- `Creating a New Skill` — AGENTS.md:86 — defined here
- `markdown-first` — AGENTS.md:90 — defined here
- `skill section anatomy` — AGENTS.md:90 — defined here

## Structure
- AGENTS.md (line 1)
- Repository Overview (line 7)
- OpenCode Integration (line 11)
  - Core Rules (line 15)
  - Intent → Skill Mapping (line 22)
  - Lifecycle Mapping (Implicit Commands) (line 34)
  - Execution Model (line 47)
  - Anti-Rationalization (line 56)
- Orchestration: Personas, Skills, and Commands (line 70)
- Creating a New Skill (line 86)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · docs/antigravity-setup.md:107 instructs users to "copy or link AGENTS.md into the root of your workspace", directly contradicting AGENTS.md:5, CONTRIBUTING.md:71, docs/developer-onboarding.md:26, and docs/opencode-setup.md:3, 92, 136, which all explicitly mandate that the repository root AGENTS.md is strictly repository-scoped and must never be copied into consumer workspaces.
- doc-drift · AGENTS.md:40-45 maps only 7 skills across the 6 lifecycle phases, omitting 18 skills (including `git-workflow-and-versioning` and `documentation-and-adrs`), and maps `VERIFY` exclusively to `debugging-and-error-recovery`, whereas CLAUDE.md:24 maps `Verify` to both `browser-testing-with-devtools` and `debugging-and-error-recovery`.
- doc-drift · AGENTS.md:26-32 intent mapping lists only 7 intents mapping to 9 skills, leaving 16 skills unmapped.

## Observations
- Codifies the central multi-agent governance theorem of the repository: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas. A persona may invoke skills."
- Explicitly rejects "router" personas in favor of declarative slash commands and client-side intent mapping.
- Clarifies platform limitations for Claude Code: subagents cannot nest or spawn subagents, and plugin agents silently drop `hooks`, `mcpServers`, and `permissionMode` frontmatter properties.

## Context cost
5,386 bytes (~1,350 tokens).
