---
package: addy
path: references/orchestration-patterns.md
type: doc
bytes: 18201
unit: inv-addy-35
deprecated: false
aliases: []
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# references/orchestration-patterns.md

## Purpose — required, verbatim
> "Reference catalog of agent orchestration patterns this repo endorses, plus anti-patterns to avoid. Read this before adding a new slash command that coordinates multiple personas, or before introducing a new persona that \"wraps\" existing ones." — references/orchestration-patterns.md:3

## Design intent — required
Establishes the foundational orchestration catalog and architectural constraints for multi-agent workflows in the repository. Enforces the strict rule that the user or a slash command is the sole orchestrator, prohibiting personas from invoking other personas to prevent context degradation and runaway token costs. Catalogs five endorsed orchestration patterns (direct invocation, single-persona slash commands, parallel fan-out with merge, user-driven sequential pipelines, and research isolation), contrasts subagent fan-out against Claude Code Agent Teams for adversarial debugging, and documents four anti-patterns to prevent architectural complexity.

## Phase — required
cross-phase

## Inputs — required
User requests to coordinate multi-agent tasks, create slash commands, design agent personas, or orchestrate specialized workflows across codebase artifacts.

## Outputs — required
none

## Invokes — required
- agent code-reviewer — references/orchestration-patterns.md:22
- agent security-auditor — references/orchestration-patterns.md:23
- agent test-engineer — references/orchestration-patterns.md:24
- skill code-review-and-quality — references/orchestration-patterns.md:35
- command review — references/orchestration-patterns.md:40
- command test — references/orchestration-patterns.md:40
- command code-simplify — references/orchestration-patterns.md:40
- command ship — references/orchestration-patterns.md:64
- command spec — references/orchestration-patterns.md:83
- command plan — references/orchestration-patterns.md:83
- command build — references/orchestration-patterns.md:83
- config .claude-plugin/plugin.json — references/orchestration-patterns.md:123
- agent agents/code-reviewer.md — references/orchestration-patterns.md:123
- agent agents/security-auditor.md — references/orchestration-patterns.md:123
- agent agents/test-engineer.md — references/orchestration-patterns.md:123
- doc AGENTS.md — references/orchestration-patterns.md:298
- doc README.md — references/orchestration-patterns.md:326

## Invoked by — required
- doc AGENTS.md — AGENTS.md:82
- doc docs/agents.md — docs/agents.md:46
- doc README.md — README.md:313
- doc docs/getting-started.md — docs/getting-started.md:139
- command commands/ship.toml — commands/ship.toml:23
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:23
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:46

## Concepts named — required, verbatim
- `orchestrator` — references/orchestration-patterns.md:5 — defined here
- `Direct invocation` — references/orchestration-patterns.md:11 — defined here
- `code-reviewer` — references/orchestration-patterns.md:16 — used here
- `security-auditor` — references/orchestration-patterns.md:23 — used here
- `test-engineer` — references/orchestration-patterns.md:24 — used here
- `Single-persona slash command` — references/orchestration-patterns.md:30 — defined here
- `code-review-and-quality` — references/orchestration-patterns.md:35 — used here
- `Parallel fan-out with merge` — references/orchestration-patterns.md:48 — defined here
- `merge step` — references/orchestration-patterns.md:50 — defined here
- `Validation checklist` — references/orchestration-patterns.md:68 — defined here
- `Sequential pipeline as user-driven slash commands` — references/orchestration-patterns.md:78 — defined here
- `DEFINE` — references/orchestration-patterns.md:88 — used here
- `PLAN` — references/orchestration-patterns.md:88 — used here
- `BUILD` — references/orchestration-patterns.md:88 — used here
- `VERIFY` — references/orchestration-patterns.md:88 — used here
- `REVIEW` — references/orchestration-patterns.md:88 — used here
- `SHIP` — references/orchestration-patterns.md:88 — used here
- `Research isolation` — references/orchestration-patterns.md:96 — defined here
- `research sub-agent` — references/orchestration-patterns.md:98 — defined here
- `Explore` — references/orchestration-patterns.md:113 — used here
- `subagents` — references/orchestration-patterns.md:127 — used here
- `Agent Teams` — references/orchestration-patterns.md:127 — used here
- `Plan` — references/orchestration-patterns.md:157 — used here
- `general-purpose` — references/orchestration-patterns.md:158 — used here
- `competing-hypothesis debugging` — references/orchestration-patterns.md:174 — defined here
- `Router persona` — references/orchestration-patterns.md:284 — defined here
- `Persona that calls another persona` — references/orchestration-patterns.md:302 — defined here
- `Sequential orchestrator that paraphrases` — references/orchestration-patterns.md:316 — defined here
- `Deep persona trees` — references/orchestration-patterns.md:330 — defined here

## Structure
- # Orchestration Patterns — references/orchestration-patterns.md:1
- ## Endorsed patterns — references/orchestration-patterns.md:9
- ### 1. Direct invocation (no orchestration) — references/orchestration-patterns.md:11
- ### 2. Single-persona slash command — references/orchestration-patterns.md:30
- ### 3. Parallel fan-out with merge — references/orchestration-patterns.md:48
- ### 4. Sequential pipeline as user-driven slash commands — references/orchestration-patterns.md:78
- ### 5. Research isolation (context preservation) — references/orchestration-patterns.md:96
- ## Claude Code compatibility — references/orchestration-patterns.md:117
- ### Where personas live — references/orchestration-patterns.md:121
- ### Subagents vs. Agent Teams — references/orchestration-patterns.md:125
- ### Platform-enforced rules — references/orchestration-patterns.md:141
- ### Built-in subagents to know about — references/orchestration-patterns.md:150
- ### Frontmatter restrictions for plugin agents — references/orchestration-patterns.md:162
- ### Spawning multiple subagents in parallel — references/orchestration-patterns.md:168
- ## Worked example: Agent Teams for competing-hypothesis debugging — references/orchestration-patterns.md:174
- ### The scenario — references/orchestration-patterns.md:178
- ### Why this is *not* a `/ship` job — references/orchestration-patterns.md:193
- ### Setup (one-time, per-environment) — references/orchestration-patterns.md:203
- ### The trigger prompt — references/orchestration-patterns.md:217
- ### What happens — references/orchestration-patterns.md:242
- ### When to clean up — references/orchestration-patterns.md:253
- ### Cost expectation — references/orchestration-patterns.md:263
- ### Anti-pattern in this scenario — references/orchestration-patterns.md:267
- ### When *not* to use Agent Teams — references/orchestration-patterns.md:271
- ## Anti-patterns — references/orchestration-patterns.md:282
- ### A. Router persona ("meta-orchestrator") — references/orchestration-patterns.md:284
- ### B. Persona that calls another persona — references/orchestration-patterns.md:302
- ### C. Sequential orchestrator that paraphrases — references/orchestration-patterns.md:316
- ### D. Deep persona trees — references/orchestration-patterns.md:330
- ## Decision flow — references/orchestration-patterns.md:343
- ## When to add a new pattern to this catalog — references/orchestration-patterns.md:361

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly documents platform-level enforcement in Claude Code: subagents cannot spawn other subagents, and teammates cannot spawn nested teams, structurally preventing deep persona trees. Notes that plugin subagents silently ignore `hooks`, `mcpServers`, and `permissionMode` frontmatter fields unless placed in `.claude/agents/` or `~/.claude/agents/`. Highlights that parallel fan-out requires issuing multiple Agent tool calls in a single assistant turn.

## Context cost
18201 bytes, ~4550 tokens.
