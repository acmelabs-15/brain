---
package: addy
path: references/orchestration-patterns.md
type: doc
bytes: 18201
unit: inv-addy-3
---

# references/orchestration-patterns.md

## Purpose — required, verbatim
> "Reference catalog of agent orchestration patterns this repo endorses, plus anti-patterns to avoid. Read this before adding a new slash command that coordinates multiple personas, or before introducing a new persona that \"wraps\" existing ones.\n\nThe governing rule: **the user (or a slash command) is the orchestrator. Personas do not invoke other personas.** Skills are mandatory hops inside a persona's workflow." — references/orchestration-patterns.md:3-5

## Design intent — required
Establishes a normative, harness-aware reference catalog of multi-agent and persona orchestration patterns for AI coding agent workflows. It enforces the fundamental architectural principle that the user (or slash commands) must remain the sole orchestrator, explicitly prohibiting nested personas or autonomous multi-layer agent hierarchies that degrade context through paraphrasing hops, incur runaway token costs, and bypass essential human checkpoints. Without it, agent systems drift into brittle, opaque recursive meta-orchestrators, lossy inter-persona delegation trees, and improper concurrency choices between isolated subagents and collaborative agent teams.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- persona `agents/code-reviewer.md` — references/orchestration-patterns.md:16,22,35,53,123,166,228,247,289,304,332
- persona `agents/security-auditor.md` — references/orchestration-patterns.md:23,54,123,137,166,230,247,304
- persona `agents/test-engineer.md` — references/orchestration-patterns.md:24,55,123,166,233,248
- skill `skills/code-review-and-quality/SKILL.md` — references/orchestration-patterns.md:35
- command `commands/review.toml` / `.claude/commands/review.md` (`/review`) — references/orchestration-patterns.md:35,40,83,289,295
- command `commands/test.toml` / `.claude/commands/test.md` (`/test`) — references/orchestration-patterns.md:40,83
- command `commands/code-simplify.toml` / `.claude/commands/code-simplify.md` (`/code-simplify`) — references/orchestration-patterns.md:40
- command `commands/ship.toml` / `.claude/commands/ship.md` (`/ship`) — references/orchestration-patterns.md:54,64,83,137,170,176,193,195,201,265,273,332
- command `commands/spec.toml` / `.claude/commands/spec.md` (`/spec`) — references/orchestration-patterns.md:83,318
- command `commands/plan.toml` / `.claude/commands/plan.md` (`/plan`) — references/orchestration-patterns.md:83,318
- command `commands/build.toml` / `.claude/commands/build.md` (`/build`) — references/orchestration-patterns.md:83,318
- doc `AGENTS.md` — references/orchestration-patterns.md:296,298
- doc `README.md` — references/orchestration-patterns.md:326
- config `.claude-plugin/plugin.json` — references/orchestration-patterns.md:123

## Invoked by — required
- doc `AGENTS.md` — AGENTS.md:82
- doc `README.md` — README.md:313
- doc `docs/agents.md` — docs/agents.md:46,113,123
- doc `docs/developer-onboarding.md` — docs/developer-onboarding.md:23
- doc `docs/getting-started.md` — docs/getting-started.md:139
- skill `skills/doubt-driven-development/SKILL.md` — skills/doubt-driven-development/SKILL.md:46,229
- command `commands/ship.toml` — commands/ship.toml:23

## Concepts named — required, verbatim
- `Orchestration Patterns` — references/orchestration-patterns.md:1 — defined here
- `anti-patterns` — references/orchestration-patterns.md:3,282 — defined here
- `mandatory hops` — references/orchestration-patterns.md:5 — used here
- `Direct invocation (no orchestration)` — references/orchestration-patterns.md:11 — defined here
- `code-reviewer` — references/orchestration-patterns.md:16,22,35,53,123,166,228,247,289,304,332 — used here
- `security-auditor` — references/orchestration-patterns.md:23,54,123,137,166,230,247,304 — used here
- `test-engineer` — references/orchestration-patterns.md:24,55,123,166,233,248 — used here
- `Single-persona slash command` — references/orchestration-patterns.md:30 — defined here
- `/review` — references/orchestration-patterns.md:35,40,83,289,295 — used here
- `code-review-and-quality` — references/orchestration-patterns.md:35 — used here
- `/test` — references/orchestration-patterns.md:40,83 — used here
- `/code-simplify` — references/orchestration-patterns.md:40 — used here
- `Parallel fan-out with merge` — references/orchestration-patterns.md:48 — defined here
- `/ship` — references/orchestration-patterns.md:54,64,83,137,170,176,193,195,201,265,273,332 — used here
- `go/no-go` — references/orchestration-patterns.md:54 — used here
- `rollback` — references/orchestration-patterns.md:54 — used here
- `Validation checklist before adopting this pattern` — references/orchestration-patterns.md:68 — defined here
- `Sequential pipeline as user-driven slash commands` — references/orchestration-patterns.md:78 — defined here
- `/spec` — references/orchestration-patterns.md:83,318 — used here
- `/plan` — references/orchestration-patterns.md:83,318 — used here
- `/build` — references/orchestration-patterns.md:83,318 — used here
- `DEFINE` — references/orchestration-patterns.md:88 — used here
- `PLAN` — references/orchestration-patterns.md:88 — used here
- `BUILD` — references/orchestration-patterns.md:88 — used here
- `VERIFY` — references/orchestration-patterns.md:88 — used here
- `REVIEW` — references/orchestration-patterns.md:88 — used here
- `SHIP` — references/orchestration-patterns.md:88 — used here
- `human checkpoints` — references/orchestration-patterns.md:92,321 — used here
- `Research isolation (context preservation)` — references/orchestration-patterns.md:96 — defined here
- `research sub-agent` — references/orchestration-patterns.md:98,100 — defined here
- `digest` — references/orchestration-patterns.md:98,100,276 — defined here
- `Explore` — references/orchestration-patterns.md:113,156,276 — used here
- `Claude Code compatibility` — references/orchestration-patterns.md:117 — defined here
- `Subagents` — references/orchestration-patterns.md:125,129 — used here
- `Agent Teams` — references/orchestration-patterns.md:125,129,174,191,195,203,271 — used here
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` — references/orchestration-patterns.md:134,210 — used here
- `Subagents cannot spawn other subagents` — references/orchestration-patterns.md:144 — used here
- `No nested teams` — references/orchestration-patterns.md:146 — used here
- `Plan` — references/orchestration-patterns.md:157 — used here
- `general-purpose` — references/orchestration-patterns.md:158 — used here
- `Frontmatter restrictions for plugin agents` — references/orchestration-patterns.md:162 — defined here
- `Agent Teams for competing-hypothesis debugging` — references/orchestration-patterns.md:174 — defined here
- `competing-hypothesis debugging` — references/orchestration-patterns.md:174,226 — defined here
- `Router persona ("meta-orchestrator")` — references/orchestration-patterns.md:284 — defined here
- `Persona that calls another persona` — references/orchestration-patterns.md:302 — defined here
- `Sequential orchestrator that paraphrases` — references/orchestration-patterns.md:316 — defined here
- `Deep persona trees` — references/orchestration-patterns.md:329 — defined here
- `pre-ship-coordinator` — references/orchestration-patterns.md:332 — used here
- `quality-coordinator` — references/orchestration-patterns.md:332 — used here
- `Decision flow` — references/orchestration-patterns.md:343 — defined here
- `When to add a new pattern to this catalog` — references/orchestration-patterns.md:361 — defined here

## Structure
- `# Orchestration Patterns` — line 1
- `## Endorsed patterns` — line 9
- `### 1. Direct invocation (no orchestration)` — line 11
- `### 2. Single-persona slash command` — line 30
- `### 3. Parallel fan-out with merge` — line 48
- `### 4. Sequential pipeline as user-driven slash commands` — line 78
- `### 5. Research isolation (context preservation)` — line 96
- `## Claude Code compatibility` — line 117
- `### Where personas live` — line 121
- `### Subagents vs. Agent Teams` — line 125
- `### Platform-enforced rules` — line 141
- `### Built-in subagents to know about` — line 150
- `### Frontmatter restrictions for plugin agents` — line 162
- `### Spawning multiple subagents in parallel` — line 168
- `## Worked example: Agent Teams for competing-hypothesis debugging` — line 174
- `### The scenario` — line 178
- `### Why this is *not* a `/ship` job` — line 193
- `### Setup (one-time, per-environment)` — line 203
- `### The trigger prompt` — line 217
- `### What happens` — line 242
- `### When to clean up` — line 253
- `### Cost expectation` — line 263
- `### Anti-pattern in this scenario` — line 267
- `### When *not* to use Agent Teams` — line 271
- `## Anti-patterns` — line 282
- `### A. Router persona ("meta-orchestrator")` — line 284
- `### B. Persona that calls another persona` — line 302
- `### C. Sequential orchestrator that paraphrases` — line 316
- `### D. Deep persona trees` — line 329
- `## Decision flow` — line 343
- `## When to add a new pattern to this catalog` — line 361

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · references/orchestration-patterns.md:125-280 · `references/orchestration-patterns.md` fully documents, endorses, and provides a worked example for Agent Teams as an endorsed multi-persona collaborative pattern alongside parallel fan-out, whereas `AGENTS.md:80`, `docs/agents.md:46`, and `docs/developer-onboarding.md:23` claim that parallel fan-out with merge is the "only" multi-persona orchestration pattern endorsed by the repo.

## Observations
- Foundational architectural reference defining the orchestration rules and composition hierarchy for the Addy package: the user (or slash command) is the sole orchestrator; personas never call other personas; skills are mandatory hops within persona workflows.
- Establishes an explicit taxonomy of 5 endorsed patterns: (1) Direct invocation, (2) Single-persona slash command, (3) Parallel fan-out with merge, (4) Sequential pipeline as user-driven slash commands, and (5) Research isolation.
- Deep integration with Claude Code platform primitives: maps patterns to subagents vs. Agent Teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`), built-in subagents (`Explore`, `Plan`, `general-purpose`), frontmatter support/restrictions in plugin agents, and single-turn parallel tool dispatching.
- Catalogs 4 critical anti-patterns with technical rationales (context drift, 2x token inflation, loss of human checkpoints): Router persona, Persona-calls-persona, Sequential paraphrasing orchestrator, Deep persona trees.
- Includes an end-to-end worked example of competing-hypothesis debugging using Agent Teams with prompt templates and explicit team cleanup protocols (`Clean up the team` through the lead session).
- Imposes a high-threshold bar for adding new orchestration patterns (must be used >=2 times in real work, exhibit a concrete repo artifact, explain why existing patterns fail, and identify its anti-pattern shadow).

## Context cost
18,201 bytes (~4,550 tokens).
