---
package: matt
path: external/setup-matt-pocock-skills.md
type: external-doc
bytes: 356510
unit: inv-matt-24
deprecated: false
aliases: []
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/setup-matt-pocock-skills.md

## Purpose — required, verbatim
> "Set up one repo so the other skills know how it works." — external/setup-matt-pocock-skills.md:24

## Design intent — required
Public web documentation and onboarding reference for the `/setup-matt-pocock-skills` command and setup skill on the AI Hero site (`aihero.dev/skills-setup-matt-pocock-skills`). It explains how to establish repository-specific configuration for Matt Pocock's engineering skill suite without embedding repo-specific logic, tracker couplings, or global preference state directly into the skills. By driving an interactive confirmation flow that records repository layout, tracker mechanics (GitHub, GitLab, local markdown, or custom systems), and triage labels into inspectable, version-controlled markdown files under `docs/agents/` (`issue-tracker.md`, `domain.md`, `triage-labels.md`) and updating `CLAUDE.md` / `AGENTS.md`, it ensures that downstream skills (`triage`, `to-spec`, `to-tickets`, `wayfinder`, `domain-modeling`) operate consistently across different hosting environments while keeping the skills themselves immutable ("Config is death"). Without this documentation, developers adopting the skills would lack clarity on when to run the setup skill, what files it writes, how custom and non-GitHub issue trackers are supported, and how the skills achieve tracker independence.

## Phase — required
none

## Inputs — required
- User invocation: "You invoke this by typing" — external/setup-matt-pocock-skills.md:29
- Repository inspection: "It reads your" — external/setup-matt-pocock-skills.md:27
- Existing repository configuration: "reads what is already there" — external/setup-matt-pocock-skills.md:30
- User confirmation: "waits for you to confirm before writing anything." — external/setup-matt-pocock-skills.md:27
- Confirmation cadence: "Most runs are two confirmations and done." — external/setup-matt-pocock-skills.md:36
- Proposed tracker matching remote: "the one matching your" — external/setup-matt-pocock-skills.md:37
- Custom workflow description: "one paragraph from you describing the workflow" — external/setup-matt-pocock-skills.md:39
- Conditional triage label generation: "only when the" — external/setup-matt-pocock-skills.md:33
- Triage skill installation check: "skill is installed" — external/setup-matt-pocock-skills.md:33

## Outputs — required
- Tracker configuration file: "issue-tracker.md" — external/setup-matt-pocock-skills.md:33
- Domain documentation layout file: "domain.md" — external/setup-matt-pocock-skills.md:33
- Triage label mapping file: "triage-labels.md" — external/setup-matt-pocock-skills.md:33
- Harness pointer section: "Agent skills" — external/setup-matt-pocock-skills.md:33
- Monorepo context map: "CONTEXT-MAP.md" — external/setup-matt-pocock-skills.md:37
- Runtime files produced by this document: none

## Invokes — required
- skill triage — external/setup-matt-pocock-skills.md:30
- skill to-spec — external/setup-matt-pocock-skills.md:30
- skill to-tickets — external/setup-matt-pocock-skills.md:30
- skill wayfinder — external/setup-matt-pocock-skills.md:30
- skill grilling — external/setup-matt-pocock-skills.md:55
- skill domain-modeling — external/setup-matt-pocock-skills.md:70
- skill ask-matt — external/setup-matt-pocock-skills.md:70
- skill tdd — external/setup-matt-pocock-skills.md:70
- command /to-tickets — external/setup-matt-pocock-skills.md:66
- command /triage — external/setup-matt-pocock-skills.md:66
- doc SKILL.md — external/setup-matt-pocock-skills.md:67

## Invoked by — required
- doc setup-matt-pocock-skills — docs/engineering/ask-matt.md:23
- doc setup-matt-pocock-skills — docs/engineering/to-spec.md:22
- doc setup-matt-pocock-skills — docs/engineering/code-review.md:33
- doc setup-matt-pocock-skills — docs/engineering/wayfinder.md:25
- doc setup-matt-pocock-skills — docs/engineering/triage.md:74
- doc setup-matt-pocock-skills — docs/engineering/setup-matt-pocock-skills.md:3
- doc setup-matt-pocock-skills — README.md:74

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — external/setup-matt-pocock-skills.md:25 — defined here
- `CLAUDE.md` — external/setup-matt-pocock-skills.md:27 — used here
- `CONTEXT.md` — external/setup-matt-pocock-skills.md:27 — used here
- `agent` — external/setup-matt-pocock-skills.md:29 — used here
- `non-invokable` — external/setup-matt-pocock-skills.md:29 — defined here
- `triage` — external/setup-matt-pocock-skills.md:30 — used here
- `to-spec` — external/setup-matt-pocock-skills.md:30 — used here
- `to-tickets` — external/setup-matt-pocock-skills.md:30 — used here
- `wayfinder` — external/setup-matt-pocock-skills.md:30 — used here
- `issue-tracker.md` — external/setup-matt-pocock-skills.md:33 — defined here
- `domain.md` — external/setup-matt-pocock-skills.md:33 — defined here
- `triage-labels.md` — external/setup-matt-pocock-skills.md:33 — defined here
- `AGENTS.md` — external/setup-matt-pocock-skills.md:33 — used here
- `Issue tracker` — external/setup-matt-pocock-skills.md:37 — defined here
- `Triage labels` — external/setup-matt-pocock-skills.md:37 — defined here
- `Domain docs` — external/setup-matt-pocock-skills.md:37 — defined here
- `needs-triage` — external/setup-matt-pocock-skills.md:37 — defined here
- `needs-info` — external/setup-matt-pocock-skills.md:37 — defined here
- `ready-for-agent` — external/setup-matt-pocock-skills.md:37 — defined here
- `ready-for-human` — external/setup-matt-pocock-skills.md:37 — defined here
- `wontfix` — external/setup-matt-pocock-skills.md:37 — defined here
- `single-context` — external/setup-matt-pocock-skills.md:37 — defined here
- `multi-context` — external/setup-matt-pocock-skills.md:37 — defined here
- `CONTEXT-MAP.md` — external/setup-matt-pocock-skills.md:37 — defined here
- `GitHub` — external/setup-matt-pocock-skills.md:39 — used here
- `GitLab` — external/setup-matt-pocock-skills.md:39 — used here
- `Local markdown` — external/setup-matt-pocock-skills.md:39 — defined here
- `Other` — external/setup-matt-pocock-skills.md:39 — defined here
- `Jira` — external/setup-matt-pocock-skills.md:41 — used here
- `Linear` — external/setup-matt-pocock-skills.md:41 — used here
- `Azure DevOps` — external/setup-matt-pocock-skills.md:41 — used here
- `Beads` — external/setup-matt-pocock-skills.md:41 — used here
- `MCP` — external/setup-matt-pocock-skills.md:41 — used here
- `harness` — external/setup-matt-pocock-skills.md:48 — used here
- `mapping` — external/setup-matt-pocock-skills.md:50 — defined here
- `wayfinder:map` — external/setup-matt-pocock-skills.md:53 — used here
- `grilling` — external/setup-matt-pocock-skills.md:55 — used here
- `Config is death` — external/setup-matt-pocock-skills.md:56 — defined here
- `tickets` — external/setup-matt-pocock-skills.md:70 — used here
- `domain-modeling` — external/setup-matt-pocock-skills.md:70 — used here
- `ADRs` — external/setup-matt-pocock-skills.md:70 — used here
- `ask-matt` — external/setup-matt-pocock-skills.md:70 — used here
- `tdd` — external/setup-matt-pocock-skills.md:70 — used here
- `precondition` — external/setup-matt-pocock-skills.md:70 — defined here
- `run-once setup` — external/setup-matt-pocock-skills.md:70 — defined here

## Structure
- The /setup-matt-pocock-skills Skill
- What it does
- When to reach for it
- Prerequisites
- The three decisions
- Common questions
- It's working if
- Where it fits
- Install the skills
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/setup-matt-pocock-skills.md:48 — The file-selection rule selects `CLAUDE.md` if it exists regardless of active harness, appending configuration to a Claude file even when running under Codex.
- doc-drift — external/setup-matt-pocock-skills.md:50 — The skill generates `docs/agents/triage-labels.md` as a label mapping but does not create the physical labels in GitHub/GitLab via CLI, causing subsequent `wayfinder` ticket creation to fail on missing labels.
- doc-drift — external/setup-matt-pocock-skills.md:46 — Author advice after v1.1 advises re-running the setup skill after updating skills, whereas the skill's own closing message states re-running is only needed when changing trackers or restarting.
- internal-contradiction — external/setup-matt-pocock-skills.md:48 — The skill asks the user which instruction file to create if neither exists, contradicting user expectations of an automated environment decision.

## Observations
- Matt Pocock's core design tenet "Config is death" (external/setup-matt-pocock-skills.md:56) dictates that skills avoid user-level configuration in `~/.claude` (external/setup-matt-pocock-skills.md:58) in favor of committed markdown under `docs/agents/`.
- Local markdown under `.scratch/<feature>/` (external/setup-matt-pocock-skills.md:39) is treated as a first-class issue tracker for solo developers without a remote, rather than a degraded fallback.
- The "Other" tracker option provides an extensibility mechanism for enterprise issue systems (Jira, Linear, Azure DevOps, Beads) by allowing users to record custom workflow prose that downstream skills follow without modifying skill code.
- Establishes the relationship between setup and the lifecycle flow: "for the engineering flow, the precondition everything else assumes rather than a step in the chain." — external/setup-matt-pocock-skills.md:70.
- Context cost note: This HTML snapshot contains full Next.js site chrome (navigation bar, sidebar index, course promotions, JSON-LD, React hydration payload) totalling 356,510 bytes (~85,000 tokens), of which the substantive article text comprises ~15KB (~3,500 tokens).

## Context cost
356510 bytes, ~85000 tokens (HTML snapshot including Next.js shell and hydration state). Loads no external files.
