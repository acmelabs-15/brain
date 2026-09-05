---
package: addy
path: skills/using-agent-skills/SKILL.md
type: skill
bytes: 10426
unit: inv-addy-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/using-agent-skills/SKILL.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked." — skills/using-agent-skills/SKILL.md:3

## Design intent — required
Acts as the governing meta-skill and routing catalog for the entire Addy skill pack, directing incoming tasks to the appropriate skill based on development phase (Define, Plan, Build, Verify, Review, Ship). It codifies six non-negotiable core operating behaviors (surface assumptions, manage confusion actively, push back when warranted, enforce simplicity, maintain scope discipline, and verify don't assume) and ten anti-patterns/failure modes that apply across all engineering tasks. Injected automatically into every session via Claude Code hooks, it ensures agents navigate workflows systematically, avoid ad-hoc actions, and uphold the project-wide Definition of Done. Without it, agents lack an index to discover available skills, fail to execute complete lifecycle sequences, and fall prey to common behavioral traps like sycophancy, overcomplication, and scope creep.

## Phase — required
cross-phase

## Inputs — required
- Incoming task descriptions, user goals, or bug reports — skills/using-agent-skills/SKILL.md:14, 17
- Session start event hook context (`hooks/session-start.sh`) — hooks/session-start.sh:3, 11
- Ambiguities, inconsistencies, or tradeoffs identified in project context — skills/using-agent-skills/SKILL.md:54, 65, 77

## Outputs — required
- Routing decisions mapping tasks to specific skills or complete skill sequences — skills/using-agent-skills/SKILL.md:14, 143
- Explicit assumptions declarations (`ASSUMPTIONS I'M MAKING`) — skills/using-agent-skills/SKILL.md:54
- Clarifications and named confusions surfaced to the human — skills/using-agent-skills/SKILL.md:68, 73
- Technical pushbacks and trade-off proposals — skills/using-agent-skills/SKILL.md:79, 81
- Verification evidence complying with the Definition of Done — skills/using-agent-skills/SKILL.md:112, 114

## Invokes — required
- skill interview-me — skills/using-agent-skills/SKILL.md:19
- skill idea-refine — skills/using-agent-skills/SKILL.md:20
- skill spec-driven-development — skills/using-agent-skills/SKILL.md:21
- skill constraint-driven-development — skills/using-agent-skills/SKILL.md:22
- skill planning-and-task-breakdown — skills/using-agent-skills/SKILL.md:23
- skill incremental-implementation — skills/using-agent-skills/SKILL.md:24
- skill frontend-ui-engineering — skills/using-agent-skills/SKILL.md:25
- skill api-and-interface-design — skills/using-agent-skills/SKILL.md:26
- skill context-engineering — skills/using-agent-skills/SKILL.md:27
- skill source-driven-development — skills/using-agent-skills/SKILL.md:28
- skill doubt-driven-development — skills/using-agent-skills/SKILL.md:29
- skill test-driven-development — skills/using-agent-skills/SKILL.md:30
- skill browser-testing-with-devtools — skills/using-agent-skills/SKILL.md:31
- skill debugging-and-error-recovery — skills/using-agent-skills/SKILL.md:32
- skill code-review-and-quality — skills/using-agent-skills/SKILL.md:33
- skill code-simplification — skills/using-agent-skills/SKILL.md:34
- skill security-and-hardening — skills/using-agent-skills/SKILL.md:35
- skill performance-optimization — skills/using-agent-skills/SKILL.md:36
- skill git-workflow-and-versioning — skills/using-agent-skills/SKILL.md:37
- skill ci-cd-and-automation — skills/using-agent-skills/SKILL.md:38
- skill deprecation-and-migration — skills/using-agent-skills/SKILL.md:39
- skill documentation-and-adrs — skills/using-agent-skills/SKILL.md:40
- skill observability-and-instrumentation — skills/using-agent-skills/SKILL.md:41
- skill shipping-and-launch — skills/using-agent-skills/SKILL.md:42
- reference references/definition-of-done.md — skills/using-agent-skills/SKILL.md:114

## Invoked by — required
- script hooks/session-start.sh — hooks/session-start.sh:11
- doc CONTRIBUTING.md — CONTRIBUTING.md:79
- doc README.md — README.md:228
- doc docs/comparison.md — docs/comparison.md:54

## Concepts named — required, verbatim
- `using-agent-skills` — skills/using-agent-skills/SKILL.md:2 — defined here
- `Using Agent Skills` — skills/using-agent-skills/SKILL.md:6 — defined here
- `Overview` — skills/using-agent-skills/SKILL.md:8 — defined here
- `Skill Discovery` — skills/using-agent-skills/SKILL.md:12 — defined here
- `Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45 — defined here
- `Surface Assumptions` — skills/using-agent-skills/SKILL.md:49 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/using-agent-skills/SKILL.md:54 — defined here
- `Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63 — defined here
- `Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75 — defined here
- `Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86 — defined here
- `Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97 — defined here
- `Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110 — defined here
- `Definition of Done` — skills/using-agent-skills/SKILL.md:114 — used here
- `Failure Modes to Avoid` — skills/using-agent-skills/SKILL.md:116 — defined here
- `Skill Rules` — skills/using-agent-skills/SKILL.md:131 — defined here
- `Lifecycle Sequence` — skills/using-agent-skills/SKILL.md:141 — defined here
- `Quick Reference` — skills/using-agent-skills/SKILL.md:166 — defined here
- `Define` — skills/using-agent-skills/SKILL.md:170 — defined here
- `Plan` — skills/using-agent-skills/SKILL.md:173 — defined here
- `Build` — skills/using-agent-skills/SKILL.md:174 — defined here
- `Verify` — skills/using-agent-skills/SKILL.md:180 — defined here
- `Review` — skills/using-agent-skills/SKILL.md:183 — defined here
- `Ship` — skills/using-agent-skills/SKILL.md:187 — defined here

## Structure
- `# Using Agent Skills` — skills/using-agent-skills/SKILL.md:6
- `## Overview` — skills/using-agent-skills/SKILL.md:8
- `## Skill Discovery` — skills/using-agent-skills/SKILL.md:12
- `## Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45
- `### 1. Surface Assumptions` — skills/using-agent-skills/SKILL.md:49
- `### 2. Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63
- `### 3. Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75
- `### 4. Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86
- `### 5. Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97
- `### 6. Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110
- `## Failure Modes to Avoid` — skills/using-agent-skills/SKILL.md:116
- `## Skill Rules` — skills/using-agent-skills/SKILL.md:131
- `## Lifecycle Sequence` — skills/using-agent-skills/SKILL.md:141
- `## Quick Reference` — skills/using-agent-skills/SKILL.md:166

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Acts as the central router and meta-cognitive anchor for the package, defining a canonical 16-step feature development sequence and encoding operating standards (anti-sycophancy, scope discipline, confusion management, simplicity enforcement) that guard against typical LLM agent failure modes. Also points to `references/definition-of-done.md` as the universal project-wide completion standard.

## Context cost
10,426 bytes (~2,650 tokens). Connects to all 24 skills in the pack and references `references/definition-of-done.md` (3,798 bytes).
