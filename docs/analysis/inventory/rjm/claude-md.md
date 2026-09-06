---
package: rjm
path: CLAUDE.md
type: doc
bytes: 2482
unit: inv-rjm-186
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "For non-trivial tasks, delegate to specialized agents via Task tool:" — CLAUDE.md:7 (no explicit purpose statement)

## Design intent — required
Repository-level Claude Code entry-point and configuration guide. It incorporates root `@AGENTS.md` by reference, instructs Claude Code instances on subagent delegation via the `Task` tool (defaulting to `orchestrator`), outlines global vs. per-repo installation paths (`.claude/agents/`, `.claude/commands/`), provides a memory interface decision matrix, mandates reading path-scoped rules in `.claude/rules/*.md`, defines intent routing via `/autoplan` (ADR-078), and specifies the canonical slash commands for dev lifecycle phases (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). Without it, Claude Code sessions operating in the repository would lack harness-specific delegation conventions, memory escalation ladders, rule evaluation orders, and direct mapping from developer intents to lifecycle commands.

## Phase — required
cross-phase

## Inputs — required
- Injected root operating context via `@AGENTS.md` — CLAUDE.md:3
- Path-scoped rules in `.claude/rules/*.md` and universal rules in `.claude/rules/universal.md` — CLAUDE.md:37
- User requests, intents, and task prompts — CLAUDE.md:7,43

## Outputs — required
- Subagent delegation calls via `Task(subagent_type="orchestrator")` — CLAUDE.md:9
- Intent routing to lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`), `/autoplan`, or specialized skills (`reflect`, `exploring-knowledge-graph`) — CLAUDE.md:28,45,48,53-58

## Invokes — required
- doc AGENTS.md — CLAUDE.md:3
- agent orchestrator — CLAUDE.md:9
- agent Explore — CLAUDE.md:10
- agent implementer — CLAUDE.md:11
- agent architect — CLAUDE.md:11
- agent analyst — CLAUDE.md:11
- command /memory-search — CLAUDE.md:28
- skill exploring-knowledge-graph — CLAUDE.md:29
- script search_memory.py — CLAUDE.md:30
- reference .claude/rules/universal.md — CLAUDE.md:37
- command /autoplan — CLAUDE.md:43
- skill autoplan — CLAUDE.md:45
- skill reflect — CLAUDE.md:48
- command /spec — CLAUDE.md:53
- command /plan — CLAUDE.md:54
- command /build — CLAUDE.md:55
- command /test — CLAUDE.md:56
- command /review — CLAUDE.md:57
- command /ship — CLAUDE.md:58

## Invoked by — required
- doc docs/workflow-commands.md — docs/workflow-commands.md:227
- doc docs/customization.md — docs/customization.md:14
- doc docs/project-structure.md — docs/project-structure.md:18
- doc README.md — README.md:438

## Concepts named — required, verbatim
- `Claude Code Specifics` — CLAUDE.md:5 — defined here
- `Task tool` — CLAUDE.md:7 — used here
- `orchestrator` — CLAUDE.md:9 — used here
- `Explore` — CLAUDE.md:10 — used here
- `implementer` — CLAUDE.md:11 — used here
- `architect` — CLAUDE.md:11 — used here
- `analyst` — CLAUDE.md:11 — used here
- `Installation Locations` — CLAUDE.md:13 — defined here
- `Default Behavior` — CLAUDE.md:20 — defined here
- `Memory Interface Decision Matrix` — CLAUDE.md:24 — defined here
- `Path-scoped instructions` — CLAUDE.md:35 — defined here
- `Skill routing` — CLAUDE.md:41 — defined here
- `ADR-078` — CLAUDE.md:45 — used here
- `Lifecycle commands` — CLAUDE.md:50 — defined here

## Structure
- `## Claude Code Specifics` — CLAUDE.md:5
- `### Installation Locations` — CLAUDE.md:13
- `### Default Behavior` — CLAUDE.md:20
- `## Memory Interface Decision Matrix` — CLAUDE.md:24
- `## Path-scoped instructions` — CLAUDE.md:35
- `## Skill routing` — CLAUDE.md:41
- `## Lifecycle commands` — CLAUDE.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · CLAUDE.md:30 · script `search_memory.py` is referenced bare without its relative directory path (`.claude/skills/memory/scripts/search_memory.py`).

## Observations
- Imports root `@AGENTS.md` on line 3, allowing Claude Code to inherit all global constraints, gates, and boundaries while specializing Claude Code-specific delegation patterns.
- Distinguishes between global installations (`~/.claude/`) and per-repo installations (`.claude/`).
- Emphasizes economic execution in the memory matrix: "Start with cheapest option. Escalate only when cheaper option lacks capability" (line 33).
- Explicitly delegates intent routing when no skill is named to `/autoplan` per ADR-078, deferring the routing table to `.claude/skills/autoplan/SKILL.md`.

## Context cost
2482 bytes (~620 tokens).
