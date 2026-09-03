---
package: addy
path: docs/antigravity-setup.md
type: doc
bytes: 5041
unit: inv-addy-7
---

# docs/antigravity-setup.md

## Purpose — required, verbatim
> "The `agent-skills` package can be installed as a native plugin in the Antigravity CLI (`agy`), giving the agent access to structured workflows, personas, and custom slash commands." — docs/antigravity-setup.md:3

## Design intent — required
Integration guide explaining how to install and configure `agent-skills` as a native plugin in Google's Antigravity CLI (`agy`), either remotely via Git or locally via file path, or by importing from Gemini CLI. It documents how Antigravity automatically discovers skills and personas on-demand based on developer intent, defines 8 custom slash commands (renaming `/plan` to `/planning` to avoid internal collisions), establishes workspace-level convention enforcement via `AGENTS.md`, and enables safety controls via sandbox execution and interactive artifact review. Without this guide, Antigravity users would lack instructions for packaging the repository as a native plugin or utilizing its slash commands and subagents.

## Phase — required
none

## Inputs — required
- Remote git repository `https://github.com/addyosmani/agent-skills.git` — docs/antigravity-setup.md:14, 21
- Local repository path `/path/to/agent-skills` — docs/antigravity-setup.md:25, 79
- Legacy Gemini CLI installation for plugin import — docs/antigravity-setup.md:34, 36
- Skill frontmatter trigger descriptions in `skills/*/SKILL.md` — docs/antigravity-setup.md:69, 86-88
- Subagent persona definitions in `agents/` — docs/antigravity-setup.md:95-98
- Workspace convention rules in `AGENTS.md` — docs/antigravity-setup.md:106-107
- User prompts and tasks during CLI execution — docs/antigravity-setup.md:70-71, 87-92

## Outputs — required
- Global Antigravity plugin installation directory `~/.gemini/config/plugins/agent-skills/` — docs/antigravity-setup.md:28, 30
- Registered custom slash commands (`/spec`, `/planning`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`) — docs/antigravity-setup.md:48-60
- Registered reusable subagents (`code-reviewer`, `security-auditor`, `test-engineer`) — docs/antigravity-setup.md:95-100
- Workspace enforcement link or copy of `AGENTS.md` — docs/antigravity-setup.md:107
- Artifact Review screens (`Ctrl+r`) for reviewing/approving code diffs before commit — docs/antigravity-setup.md:124

## Invokes — required
- skill spec-driven-development — docs/antigravity-setup.md:52, 90
- skill planning-and-task-breakdown — docs/antigravity-setup.md:53
- skill incremental-implementation — docs/antigravity-setup.md:54, 91
- skill test-driven-development — docs/antigravity-setup.md:55, 91
- skill code-review-and-quality — docs/antigravity-setup.md:56
- skill code-simplification — docs/antigravity-setup.md:57
- skill shipping-and-launch — docs/antigravity-setup.md:58
- skill debugging-and-error-recovery — docs/antigravity-setup.md:92
- agent web-performance-auditor (misidentified as Activated Skill) — docs/antigravity-setup.md:59
- agent code-reviewer.md — docs/antigravity-setup.md:96
- agent security-auditor.md — docs/antigravity-setup.md:97
- agent test-engineer.md — docs/antigravity-setup.md:98
- config AGENTS.md — docs/antigravity-setup.md:106, 107

## Invoked by — required
- README.md:110

## Concepts named — required, verbatim
- `agent-skills` — docs/antigravity-setup.md:1 — used here
- `Antigravity CLI` — docs/antigravity-setup.md:1 — used here
- `agy` — docs/antigravity-setup.md:1 — defined here | used here
- `workflows` — docs/antigravity-setup.md:3 — used here
- `personas` — docs/antigravity-setup.md:3 — used here
- `slash commands` — docs/antigravity-setup.md:3 — used here
- `Native Plugin Installation` — docs/antigravity-setup.md:7 — defined here
- `plugin system` — docs/antigravity-setup.md:9 — used here
- `skills` — docs/antigravity-setup.md:9 — used here
- `agents` — docs/antigravity-setup.md:9 — used here
- `custom commands` — docs/antigravity-setup.md:9 — used here
- `agy plugin install` — docs/antigravity-setup.md:14 — defined here
- `global Antigravity configuration directory` — docs/antigravity-setup.md:28 — defined here
- `Import from Gemini CLI` — docs/antigravity-setup.md:32 — defined here
- `Gemini CLI` — docs/antigravity-setup.md:32 — used here
- `agy plugin import gemini` — docs/antigravity-setup.md:36 — defined here
- `agy plugin list` — docs/antigravity-setup.md:41 — defined here
- `lifecycle commands` — docs/antigravity-setup.md:48 — defined here | used here
- `/webperf` — docs/antigravity-setup.md:48 — defined here | used here
- `specialist audit` — docs/antigravity-setup.md:48 — defined here
- `/spec` — docs/antigravity-setup.md:52 — defined here | used here
- `spec-driven-development` — docs/antigravity-setup.md:52 — used here
- `/planning` — docs/antigravity-setup.md:53 — defined here | used here
- `planning-and-task-breakdown` — docs/antigravity-setup.md:53 — used here
- `/build` — docs/antigravity-setup.md:54 — defined here | used here
- `incremental-implementation` — docs/antigravity-setup.md:54 — used here
- `/test` — docs/antigravity-setup.md:55 — defined here | used here
- `TDD workflow` — docs/antigravity-setup.md:55 — used here
- `red, green, refactor` — docs/antigravity-setup.md:55 — used here
- `test-driven-development` — docs/antigravity-setup.md:55 — used here
- `/review` — docs/antigravity-setup.md:56 — defined here | used here
- `Five-axis code review` — docs/antigravity-setup.md:56 — used here
- `code-review-and-quality` — docs/antigravity-setup.md:56 — used here
- `/code-simplify` — docs/antigravity-setup.md:57 — defined here | used here
- `code-simplification` — docs/antigravity-setup.md:57 — used here
- `/ship` — docs/antigravity-setup.md:58 — defined here | used here
- `Pre-launch checklist` — docs/antigravity-setup.md:58 — used here
- `parallel persona fan-out` — docs/antigravity-setup.md:58 — used here
- `shipping-and-launch` — docs/antigravity-setup.md:58 — used here
- `Core Web Vitals` — docs/antigravity-setup.md:59 — used here
- `performance issues` — docs/antigravity-setup.md:59 — used here
- `web-performance-auditor` — docs/antigravity-setup.md:59 — used here
- `/plan` — docs/antigravity-setup.md:63 — used here
- `Skills & Discovery` — docs/antigravity-setup.md:67 — defined here
- `Verification & Validation` — docs/antigravity-setup.md:75 — defined here
- `agy plugin validate` — docs/antigravity-setup.md:79 — defined here
- `On-Demand Skill Activation` — docs/antigravity-setup.md:86 — defined here
- `trigger descriptions` — docs/antigravity-setup.md:87 — used here
- `developer intent` — docs/antigravity-setup.md:87 — used here
- `debugging-and-error-recovery` — docs/antigravity-setup.md:92 — used here
- `Specialized Agent Personas` — docs/antigravity-setup.md:94 — defined here
- `subagent definitions` — docs/antigravity-setup.md:95 — used here
- `code-reviewer.md` — docs/antigravity-setup.md:96 — used here
- `security-auditor.md` — docs/antigravity-setup.md:97 — used here
- `test-engineer.md` — docs/antigravity-setup.md:98 — used here
- `subagents` — docs/antigravity-setup.md:100 — used here
- `AGENTS.md` — docs/antigravity-setup.md:106 — used here
- `Project-Specific Enforcements` — docs/antigravity-setup.md:106 — defined here
- `planning phase` — docs/antigravity-setup.md:107 — used here
- `Sandbox Mode` — docs/antigravity-setup.md:109 — defined here
- `--sandbox` — docs/antigravity-setup.md:113 — defined here
- `agy update` — docs/antigravity-setup.md:122 — defined here
- `Ctrl+r` — docs/antigravity-setup.md:124 — defined here
- `Artifact Review` — docs/antigravity-setup.md:124 — defined here | used here
- `--dangerously-skip-permissions` — docs/antigravity-setup.md:125 — defined here

## Structure
- `# Using agent-skills with Antigravity CLI (agy)` — docs/antigravity-setup.md:1
- `## Setup` — docs/antigravity-setup.md:5
- `### Option 1: Native Plugin Installation (Recommended)` — docs/antigravity-setup.md:7
- `### Option 2: Import from Gemini CLI` — docs/antigravity-setup.md:32
- `## Slash Commands` — docs/antigravity-setup.md:46
- `## Skills & Discovery` — docs/antigravity-setup.md:67
- `## Verification & Validation` — docs/antigravity-setup.md:75
- `## How It Works` — docs/antigravity-setup.md:84
- `### 1. On-Demand Skill Activation` — docs/antigravity-setup.md:86
- `### 2. Specialized Agent Personas` — docs/antigravity-setup.md:94
- `## Configuration & Customization` — docs/antigravity-setup.md:104
- `### Project-Specific Enforcements (AGENTS.md)` — docs/antigravity-setup.md:106
- `### Sandbox Mode` — docs/antigravity-setup.md:109
- `## Usage Tips` — docs/antigravity-setup.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/antigravity-setup.md:48 · Asserts "The plugin registers 8 custom slash commands: 7 lifecycle commands plus the `/webperf` specialist audit", omitting the 9th command (`/constraints`, defined in `commands/constraints.toml` and `.gemini/commands/constraints.toml`), which exists in the repo and passes `validate-commands.js`.
- `internal-contradiction` · docs/antigravity-setup.md:50, 59 · Table column header is "Activated Skill" and lists `web-performance-auditor` as a skill, but `web-performance-auditor` is an agent persona located in `agents/web-performance-auditor.md`, not a skill in `skills/`.
- `doc-drift` · docs/antigravity-setup.md:94-98 · The "Specialized Agent Personas" section enumerates only three persona files (`code-reviewer.md`, `security-auditor.md`, `test-engineer.md`), omitting `web-performance-auditor.md` despite its presence in `agents/`.
- `missing-path` · docs/antigravity-setup.md:59 · Target `skills/web-performance-auditor` implied by the "Activated Skill" column does not exist on disk.

## Observations
- Documents the transition in Antigravity plugin installation paths from legacy `~/.gemini/antigravity-cli/plugins/` to modern `~/.gemini/config/plugins/` (docs/antigravity-setup.md:30).
- Explains deliberate command renaming: `/planning` is used instead of `/plan` to avoid conflicts with Antigravity's internal plan generator (docs/antigravity-setup.md:63).
- Outlines runtime permission architecture: skills prompt the user before execution (line 71), dangerous permissions can be skipped via `--dangerously-skip-permissions` (line 125), and terminal execution can be restricted using `--sandbox` (line 113).
- Documents the `Ctrl+r` interactive Artifact Review UI for inspecting code diffs before committing (line 124).
- References `AGENTS.md` at workspace root as the enforcement contract for steering agent behavior and requiring spec/planning gates (lines 106-107).

## Context cost
- File size: 5,041 bytes (~1,260 tokens).
- Transitive context cost: 0 static prompt token overhead during standard agent runs; skills and agents are discovered and loaded dynamically on-demand.
