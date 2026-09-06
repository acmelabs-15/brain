---
package: addy
path: skills/using-agent-skills/SKILL.md
type: skill
bytes: 10426
unit: inv-addy-46
aliases: []
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/using-agent-skills/SKILL.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked." — skills/using-agent-skills/SKILL.md:3

## Design intent — required
Serves as the foundational governance meta-skill and routing controller for the entire agent-skills library. It structures workflow selection by providing a phase-oriented decision tree across six development phases (Define, Plan, Build, Verify, Review, Ship), mapping incoming tasks and problem domains to 24 specialized skills. Crucially, it codifies six non-negotiable core operating behaviors for agents: surfacing assumptions explicitly before non-trivial work, actively managing confusion instead of guessing, pushing back against flawed technical approaches, enforcing simplicity against the natural tendency to overcomplicate, maintaining strict scope discipline, and verifying outcomes with concrete evidence. It catalogs ten subtle failure modes where agents mimic productivity while causing rework, defines the canonical 16-skill sequential lifecycle for feature implementation, and provides a quick-reference index. Without this meta-skill, autonomous agents lack systematic discovery, make unchecked assumptions, overengineer code, and drift outside requested task boundaries.

## Phase — required
cross-phase (meta-skill governing skill discovery and invocation across all phases)

## Inputs — required
- Incoming engineering tasks, feature requests, bug reports, and task phases — skills/using-agent-skills/SKILL.md:14, 17
- Ambiguous specifications, conflicting requirements, and confusion signals — skills/using-agent-skills/SKILL.md:65-74
- Flawed technical approaches, suboptimal architectural decisions, and sycophancy traps — skills/using-agent-skills/SKILL.md:78-84
- Global project Definition of Done checklist: `../../references/definition-of-done.md` — skills/using-agent-skills/SKILL.md:114

## Outputs — required
- Skill invocations routed to corresponding phase-specific skills — skills/using-agent-skills/SKILL.md:19-42
- Explicit assumption disclosures: `ASSUMPTIONS I'M MAKING:` — skills/using-agent-skills/SKILL.md:54
- Clarification prompts and tradeoff analyses for confusion management — skills/using-agent-skills/SKILL.md:68-73
- Technical pushback statements and alternative proposals — skills/using-agent-skills/SKILL.md:78-82
- Sequenced multi-skill execution workflows: `interview-me` → `idea-refine` → `spec-driven-development` → `planning-and-task-breakdown` → `context-engineering` → `source-driven-development` → `incremental-implementation` → `observability-and-instrumentation` → `doubt-driven-development` → `test-driven-development` → `code-review-and-quality` → `code-simplification` → `git-workflow-and-versioning` → `documentation-and-adrs` → `deprecation-and-migration` → `shipping-and-launch` — skills/using-agent-skills/SKILL.md:146-161

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
- doc docs/getting-started.md — docs/getting-started.md:40
- doc docs/adoption-guide.md — docs/adoption-guide.md:31
- doc docs/cursor-setup.md — docs/cursor-setup.md:102
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:112
- doc docs/comparison.md — docs/comparison.md:54

## Concepts named — required, verbatim
- `Using Agent Skills` — skills/using-agent-skills/SKILL.md:6 — defined here
- `Skill Discovery` — skills/using-agent-skills/SKILL.md:12 — defined here
- `Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45 — defined here
- `Surface Assumptions` — skills/using-agent-skills/SKILL.md:49 — defined here
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
- cross-file-contradiction — skills/using-agent-skills/SKILL.md:180: line 180 places TDD under `Verify` ("| Verify | test-driven-development | Failing test first, then make it pass |" — skills/using-agent-skills/SKILL.md:180), directly contradicting `README.md:363` and `CLAUDE.md:23` (which place it under `Build`).
- internal-contradiction — skills/using-agent-skills/SKILL.md:153: In the Lifecycle Sequence, line 153 places `observability-and-instrumentation` at step 8 alongside Build ("runs parallel with 7-9, not after" — skills/using-agent-skills/SKILL.md:153), but in the Quick Reference table at line 191, `observability-and-instrumentation` is categorized under the `Ship` phase ("| Ship | observability-and-instrumentation | Structured logs, RED metrics, traces, symptom-based alerts |" — skills/using-agent-skills/SKILL.md:191).
- doc-drift — skills/using-agent-skills/SKILL.md:3: Frontmatter description ("Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked." — skills/using-agent-skills/SKILL.md:3) omits the six core operating behaviors and the ten failure modes that form the central guidance of the skill body.

## Observations
- Explicitly exempted from the standard skill anatomy (`When to Use` and `Verification` sections) in `scripts/lib/skill-lint.js:58` ("Meta-skill — orchestrates other skills; When-to-Use and Verification are not applicable to a routing document.").
- Injected automatically into every Claude Code session via `hooks/session-start.sh` (as documented in `CONTRIBUTING.md:79`), providing persistent session-level guidance across all lifecycle phases.

## Context cost
10,426 bytes (~2,606 tokens). As a meta-skill routing to 24 other skills, full lifecycle execution loads sequential subsets totaling up to ~120,000+ bytes across all referenced skills.
