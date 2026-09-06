---
package: addy
path: references/orchestration-patterns.md
type: doc
bytes: 18201
unit: inv-addy-35
aliases: []
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# references/orchestration-patterns.md

## Purpose — required, verbatim
> "Reference catalog of agent orchestration patterns this repo endorses, plus anti-patterns to avoid. Read this before adding a new slash command that coordinates multiple personas, or before introducing a new persona that \"wraps\" existing ones." — references/orchestration-patterns.md:3

## Design intent — required
Provide an architectural blueprint and decision framework for coordinating AI personas and slash commands in agentic workflows. It establishes the strict architectural principle that users or slash commands orchestrate and personas never invoke other personas, cataloging five endorsed orchestration patterns (direct invocation, single-persona command, parallel fan-out with merge, sequential pipeline, research isolation) alongside four anti-patterns (router persona, persona calling persona, sequential paraphrasing orchestrator, deep persona trees). It maps these patterns to Claude Code execution primitives (subagents vs. Agent Teams) and demonstrates competing-hypothesis debugging to prevent over-orchestration and context bloat.

## Phase — required
cross-phase

## Inputs — required
Task requirements, user prompts, PR diffs or repository code, slash command triggers (/spec, /plan, /build, /test, /review, /ship), and bug reports or diagnostic hypotheses.

## Outputs — required
none

## Invokes — required
- command /review — references/orchestration-patterns.md:35
- skill code-review-and-quality — references/orchestration-patterns.md:35
- command /test — references/orchestration-patterns.md:40
- command /code-simplify — references/orchestration-patterns.md:40
- command /ship — references/orchestration-patterns.md:54
- command /spec — references/orchestration-patterns.md:83
- command /plan — references/orchestration-patterns.md:83
- command /build — references/orchestration-patterns.md:83
- agent code-reviewer — references/orchestration-patterns.md:123
- agent security-auditor — references/orchestration-patterns.md:123
- agent test-engineer — references/orchestration-patterns.md:123

## Invoked by — required
- doc README.md — README.md:313
- doc AGENTS.md — AGENTS.md:82
- doc docs/getting-started.md — docs/getting-started.md:139
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:23
- doc docs/agents.md — docs/agents.md:46
- command commands/ship.toml — commands/ship.toml:23
- command .gemini/commands/ship.toml — .gemini/commands/ship.toml:23
- skill skills/doubt-driven-development — skills/doubt-driven-development/SKILL.md:46

## Concepts named — required, verbatim
- `Orchestration Patterns` — references/orchestration-patterns.md:1 — defined here
- `governing rule` — references/orchestration-patterns.md:5 — defined here
- `Direct invocation` — references/orchestration-patterns.md:11 — defined here
- `Single-persona slash command` — references/orchestration-patterns.md:30 — defined here
- `Parallel fan-out with merge` — references/orchestration-patterns.md:48 — defined here
- `Sequential pipeline as user-driven slash commands` — references/orchestration-patterns.md:78 — defined here
- `Research isolation` — references/orchestration-patterns.md:96 — defined here
- `Explore` — references/orchestration-patterns.md:113, 156 — used here
- `Plan` — references/orchestration-patterns.md:157 — used here
- `general-purpose` — references/orchestration-patterns.md:158 — used here
- `Subagents` — references/orchestration-patterns.md:125, 129 — defined here
- `Agent Teams` — references/orchestration-patterns.md:125, 129 — defined here
- `Subagents cannot spawn other subagents` — references/orchestration-patterns.md:145 — used here
- `No nested teams` — references/orchestration-patterns.md:146 — used here
- `competing-hypothesis debugging` — references/orchestration-patterns.md:174 — defined here
- `Router persona` — references/orchestration-patterns.md:284 — defined here
- `meta-orchestrator` — references/orchestration-patterns.md:284 — defined here
- `Persona that calls another persona` — references/orchestration-patterns.md:302 — defined here
- `Sequential orchestrator that paraphrases` — references/orchestration-patterns.md:316 — defined here
- `Deep persona trees` — references/orchestration-patterns.md:330 — defined here
- `Decision flow` — references/orchestration-patterns.md:343 — defined here

## Structure
- # Orchestration Patterns
- ## Endorsed patterns
- ### 1. Direct invocation (no orchestration)
- ### 2. Single-persona slash command
- ### 3. Parallel fan-out with merge
- ### 4. Sequential pipeline as user-driven slash commands
- ### 5. Research isolation (context preservation)
- ## Claude Code compatibility
- ### Where personas live
- ### Subagents vs. Agent Teams
- ### Platform-enforced rules
- ### Built-in subagents to know about
- ### Frontmatter restrictions for plugin agents
- ### Spawning multiple subagents in parallel
- ## Worked example: Agent Teams for competing-hypothesis debugging
- ### The scenario
- ### Why this is *not* a /ship job
- ### Setup (one-time, per-environment)
- ### The trigger prompt
- ### What happens
- ### When to clean up
- ### Cost expectation
- ### Anti-pattern in this scenario
- ### When *not* to use Agent Teams
- ## Anti-patterns
- ### A. Router persona ("meta-orchestrator")
- ### B. Persona that calls another persona
- ### C. Sequential orchestrator that paraphrases
- ### D. Deep persona trees
- ## Decision flow
- ## When to add a new pattern to this catalog

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Sets the fundamental architectural invariant of the repo: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas."
- Distinguishes Subagents (independent tasks, report-only fan-out, single turn multi-call) from Agent Teams (inter-agent direct messaging, shared task list, collaborative adversarial debate).
- Concrete worked example demonstrates competing-hypothesis debugging using Agent Teams (`code-reviewer`, `security-auditor`, `test-engineer`) to identify a 30-second checkout hang.
- Documents Claude Code plugin agent frontmatter limitations: `hooks`, `mcpServers`, and `permissionMode` are silently ignored for plugin agents, whereas `name`, `description`, `tools`, `disallowedTools`, `model`, `maxTurns`, `skills`, `memory`, `background`, `effort`, `isolation`, `color`, and `initialPrompt` work.

## Context cost
18201 bytes, ~4550 tokens. Core architecture reference defining multi-agent execution constraints.
