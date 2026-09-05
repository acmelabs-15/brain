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
verified: 2026-09-04 quote-check+coverage
---

# skills/using-agent-skills/SKILL.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked." — skills/using-agent-skills/SKILL.md:3

## Design intent — required
Functions as the central routing and governance meta-skill for the entire agent-skills collection. It provides an ASCII decision tree for mapping tasks to specialized skills across six lifecycle phases, defines six non-negotiable core operating behaviors (surfacing assumptions, managing confusion, pushing back against flawed approaches, enforcing simplicity, maintaining scope discipline, and verifying), catalogues ten common failure modes, and outlines the standard 16-step feature lifecycle sequence.

## Phase — required
addy:Meta

## Inputs — required
- Incoming user tasks and prompts (skills/using-agent-skills/SKILL.md:14, 17)
- Observed ambiguities, confusion, or inconsistencies in requirements/code (skills/using-agent-skills/SKILL.md:51, 65)
- Overall project Definition of Done reference (`references/definition-of-done.md` — skills/using-agent-skills/SKILL.md:114)

## Outputs — required
- Routing decisions selecting appropriate lifecycle skills (skills/using-agent-skills/SKILL.md:19-42)
- Explicitly stated assumptions (`ASSUMPTIONS I'M MAKING` — skills/using-agent-skills/SKILL.md:54)
- Pushback notes and tradeoff alternatives for problematic approaches (skills/using-agent-skills/SKILL.md:79-82)
- Verified task completions meeting Definition of Done criteria (skills/using-agent-skills/SKILL.md:112-114)

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
- reference ../../references/definition-of-done.md — skills/using-agent-skills/SKILL.md:114

## Invoked by — required
- hooks/session-start.sh:11
- README.md:228
- CONTRIBUTING.md:79
- docs/getting-started.md:40
- docs/adoption-guide.md:31
- docs/cursor-setup.md:102

## Concepts named — required, verbatim
- `using-agent-skills` — skills/using-agent-skills/SKILL.md:2 — defined here
- `Skill Discovery` — skills/using-agent-skills/SKILL.md:12 — defined here
- `interview-me` — skills/using-agent-skills/SKILL.md:19 — used here
- `idea-refine` — skills/using-agent-skills/SKILL.md:20 — used here
- `spec-driven-development` — skills/using-agent-skills/SKILL.md:21 — used here
- `constraint-driven-development` — skills/using-agent-skills/SKILL.md:22 — used here
- `planning-and-task-breakdown` — skills/using-agent-skills/SKILL.md:23 — used here
- `incremental-implementation` — skills/using-agent-skills/SKILL.md:24 — used here
- `frontend-ui-engineering` — skills/using-agent-skills/SKILL.md:25 — used here
- `api-and-interface-design` — skills/using-agent-skills/SKILL.md:26 — used here
- `context-engineering` — skills/using-agent-skills/SKILL.md:27 — used here
- `source-driven-development` — skills/using-agent-skills/SKILL.md:28 — used here
- `doubt-driven-development` — skills/using-agent-skills/SKILL.md:29 — used here
- `test-driven-development` — skills/using-agent-skills/SKILL.md:30 — used here
- `browser-testing-with-devtools` — skills/using-agent-skills/SKILL.md:31 — used here
- `debugging-and-error-recovery` — skills/using-agent-skills/SKILL.md:32 — used here
- `code-review-and-quality` — skills/using-agent-skills/SKILL.md:33 — used here
- `code-simplification` — skills/using-agent-skills/SKILL.md:34 — used here
- `security-and-hardening` — skills/using-agent-skills/SKILL.md:35 — used here
- `performance-optimization` — skills/using-agent-skills/SKILL.md:36 — used here
- `git-workflow-and-versioning` — skills/using-agent-skills/SKILL.md:37 — used here
- `ci-cd-and-automation` — skills/using-agent-skills/SKILL.md:38 — used here
- `deprecation-and-migration` — skills/using-agent-skills/SKILL.md:39 — used here
- `documentation-and-adrs` — skills/using-agent-skills/SKILL.md:40 — used here
- `observability-and-instrumentation` — skills/using-agent-skills/SKILL.md:41 — used here
- `shipping-and-launch` — skills/using-agent-skills/SKILL.md:42 — used here
- `Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45 — defined here
- `Surface Assumptions` — skills/using-agent-skills/SKILL.md:49 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/using-agent-skills/SKILL.md:54 — defined here
- `Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63 — defined here
- `Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75 — defined here
- `Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86 — defined here
- `Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97 — defined here
- `Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110 — defined here
- `Definition of Done` — skills/using-agent-skills/SKILL.md:114 — used here
- `definition-of-done.md` — skills/using-agent-skills/SKILL.md:114 — used here
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
- # Using Agent Skills — skills/using-agent-skills/SKILL.md:6
- ## Overview — skills/using-agent-skills/SKILL.md:8
- ## Skill Discovery — skills/using-agent-skills/SKILL.md:12
- ## Core Operating Behaviors — skills/using-agent-skills/SKILL.md:45
- ### 1. Surface Assumptions — skills/using-agent-skills/SKILL.md:49
- ### 2. Manage Confusion Actively — skills/using-agent-skills/SKILL.md:63
- ### 3. Push Back When Warranted — skills/using-agent-skills/SKILL.md:75
- ### 4. Enforce Simplicity — skills/using-agent-skills/SKILL.md:86
- ### 5. Maintain Scope Discipline — skills/using-agent-skills/SKILL.md:97
- ### 6. Verify, Don't Assume — skills/using-agent-skills/SKILL.md:110
- ## Failure Modes to Avoid — skills/using-agent-skills/SKILL.md:116
- ## Skill Rules — skills/using-agent-skills/SKILL.md:131
- ## Lifecycle Sequence — skills/using-agent-skills/SKILL.md:141
- ## Quick Reference — skills/using-agent-skills/SKILL.md:166

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Automatically injected into Claude Code sessions via `hooks/session-start.sh` so agents possess immediate discovery capability at the start of any conversation.
- Explicitly exempt from standard skill sections `When to Use` and `Verification` in repository linting (`scripts/lib/skill-lint.js:58`) because it functions as an overarching routing and behavioral meta-skill.
- Defines the 6 canonical lifecycle phases of Addy: Define, Plan, Build, Verify, Review, Ship (Quick Reference table lines 168-192).
- Complements per-task verification criteria with the global project-level `Definition of Done` (`references/definition-of-done.md`).

## Context cost
10426 bytes (~2607 tokens). Invocation of `references/definition-of-done.md` adds 3798 bytes (~950 tokens). If an agent traverses all 24 skills it introduces the entire package (>250 KB).
