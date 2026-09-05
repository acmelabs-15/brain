---
package: matt
path: README.md
type: doc
bytes: 15587
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# README.md

## Purpose — required, verbatim
> "My agent skills that I use every day to do real engineering - not vibe coding." — README.md:15

## Design intent — required
Provides the top-level orientation, installation instructions, architectural rationale, and catalog reference for Matt Pocock's skills repository. Explains how small, composable skills counteract common LLM agent failure modes (misalignment, verbosity, broken code, and codebase architectural decay into a "ball of mud") by emphasizing disciplined software engineering fundamentals: grilling interviews, shared domain language (`CONTEXT.md` / ADRs), test-driven development (`tdd`), and deep module design.

## Phase — required
cross-phase

## Inputs — required
- User choice of agent harness (Claude Code plugin vs. Codex / `skills.sh` direct repository installation)
- Configuration preferences captured via `/setup-matt-pocock-skills` (issue tracker choice: GitHub, Linear, local files; triage labels; documentation directory)

## Outputs — required
- Primary documentation and navigation reference for installing and executing the skills catalog
- Setup instructions directing users to initialize issue tracker configuration and documentation layout via `/setup-matt-pocock-skills`

## Invokes — required
- doc .agents/adr/0002-ship-as-a-claude-code-plugin.md — README.md:57
- skill setup-matt-pocock-skills — README.md:55
- skill triage — README.md:79
- skill grill-me — README.md:100
- skill grill-with-docs — README.md:101
- skill tdd — README.md:156
- skill diagnosing-bugs — README.md:158
- skill to-spec — README.md:176
- skill improve-codebase-architecture — README.md:178
- skill ask-matt — README.md:194
- skill to-tickets — README.md:200
- skill implement — README.md:201
- skill wayfinder — README.md:202
- skill prototype — README.md:206
- skill research — README.md:208
- skill domain-modeling — README.md:210
- skill codebase-design — README.md:211
- skill code-review — README.md:212
- skill resolving-merge-conflicts — README.md:213
- skill wizard — README.md:214
- skill handoff — README.md:223
- skill teach — README.md:224
- skill to-questionnaire — README.md:225
- skill wait-what — README.md:226
- skill grilling — README.md:230
- skill writing-for-agents — README.md:231

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:9
- doc CHANGELOG.md — CHANGELOG.md:25

## Concepts named — required, verbatim
- `Skills For Real Engineers` — README.md:11 — defined here
- `vibe coding` — README.md:15 — used here
- `GSD` — README.md:17 — used here
- `BMAD` — README.md:17 — used here
- `Spec-Kit` — README.md:17 — used here
- `Claude Code plugin` — README.md:27 — used here
- `skills.sh` — README.md:27 — used here
- `Codex` — README.md:49 — used here
- `setup-matt-pocock-skills` — README.md:55 — used here
- `grilling session` — README.md:96 — defined here
- `ubiquitous language` — README.md:107 — used here
- `domain model` — README.md:107 — used here
- `shared language` — README.md:115 — defined here
- `CONTEXT.md` — README.md:122 — used here
- `materialization cascade` — README.md:125 — used here
- `ADR` — README.md:131 — used here
- `red-green-refactor` — README.md:154 — used here
- `tdd` — README.md:156 — used here
- `diagnosing-bugs` — README.md:158 — used here
- `modules are deep` — README.md:166 — used here
- `software entropy` — README.md:170 — used here
- `to-spec` — README.md:176 — used here
- `improve-codebase-architecture` — README.md:178 — used here
- `User-invoked` — README.md:186 — defined here
- `Model-invoked` — README.md:186 — defined here
- `ask-matt` — README.md:194 — used here
- `grill-with-docs` — README.md:195 — used here
- `triage` — README.md:196 — used here
- `tracer-bullet tickets` — README.md:200 — defined here
- `to-tickets` — README.md:200 — used here
- `blocking edges` — README.md:200 — defined here
- `implement` — README.md:201 — used here
- `wayfinder` — README.md:202 — used here
- `decision tickets` — README.md:202 — defined here
- `prototype` — README.md:206 — used here
- `research` — README.md:208 — used here
- `primary sources` — README.md:208 — used here
- `domain-modeling` — README.md:210 — used here
- `codebase-design` — README.md:211 — used here
- `code-review` — README.md:212 — used here
- `resolving-merge-conflicts` — README.md:213 — used here
- `wizard` — README.md:214 — used here
- `grill-me` — README.md:222 — used here
- `handoff` — README.md:223 — used here
- `teach` — README.md:224 — used here
- `to-questionnaire` — README.md:225 — used here
- `wait-what` — README.md:226 — used here
- `grilling` — README.md:230 — used here
- `writing-for-agents` — README.md:231 — used here

## Structure
- `# Skills For Real Engineers` — README.md:11
- `## Installation (30-second setup)` — README.md:25
- `### 1. Get the skills` — README.md:29
- `### 2. Run `/setup-matt-pocock-skills`` — README.md:74
- `### 3. Bam - you're ready to go.` — README.md:82
- `## Why These Skills Exist` — README.md:84
- `### #1: The Agent Didn't Do What I Want` — README.md:88
- `### #2: The Agent Is Way Too Verbose` — README.md:105
- `### #3: The Code Doesn't Work` — README.md:142
- `### #4: We Built A Ball Of Mud` — README.md:160
- `### Summary` — README.md:180
- `## Reference` — README.md:184
- `### Engineering` — README.md:188
- `### Productivity` — README.md:216

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes two distribution models: managed read-only bundle via Claude Code plugin vs editable user-owned files via `skills.sh` / `npx skills add`.
- Explicitly warns that installing both the plugin and `skills.sh` copies results in duplicate skills.
- Partitions skills along one strict axis: User-invoked (orchestrators, typed manually) and Model-invoked (reusable disciplines reachable autonomously by agents).
- Formulates four classic failure modes of LLM coding agents: misalignment (#1), verbosity (#2), broken code (#3), and codebase architectural collapse into a "ball of mud" (#4), mapping each directly to corresponding skills and practices.

## Context cost
15587 bytes (~3897 tokens). Primary repository documentation; not loaded into agent execution contexts during skill invocations.
