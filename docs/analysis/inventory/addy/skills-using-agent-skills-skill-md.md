---
package: addy
path: skills/using-agent-skills/SKILL.md
type: skill
bytes: 10426
unit: inv-addy-13
---

# skills/using-agent-skills/SKILL.md

## Purpose — required, verbatim
> "Agent Skills is a collection of engineering workflow skills organized by development phase. Each skill encodes a specific process that senior engineers follow. This meta-skill helps you discover and apply the right skill for your current task." — skills/using-agent-skills/SKILL.md:10

## Design intent — required
Functions as the foundational meta-governor and operating constitution for the entire `agent-skills` ecosystem. Addresses the core failure modes of autonomous LLM agents: guessing without asking, silent assumptions, sycophantic agreement to bad technical proposals, needless over-engineering, orthogonal scope creep, and skipping verification. Provides a unified skill discovery decision tree routing incoming tasks across all 24 domain skills, establishes six non-negotiable core operating behaviors (Surface Assumptions, Manage Confusion Actively, Push Back When Warranted, Enforce Simplicity, Maintain Scope Discipline, Verify Don't Assume), catalogs ten subtle agent anti-patterns, defines a canonical 16-step linear lifecycle sequence for complete feature development, and binds every skill's local checks to the standing project-wide Definition of Done.

## Phase — required
cross-phase

## Inputs — required
- Incoming user tasks, feature requests, or session start prompts — skills/using-agent-skills/SKILL.md:14, 17
- Task ambiguity, rough concepts, unwritten quality bars, and specification gaps — skills/using-agent-skills/SKILL.md:19-23
- Engineering operational contexts: UI development, API design, context loading, doc verification, test failures, code review, security audits, migrations, and deployments — skills/using-agent-skills/SKILL.md:24-43
- Specification inconsistencies and conflicting requirements encountered during execution — skills/using-agent-skills/SKILL.md:63-74
- Definition of Done reference checklist at `../../references/definition-of-done.md` — skills/using-agent-skills/SKILL.md:114

## Outputs — required
- Skill routing decisions dispatching tasks to specific domain skills — skills/using-agent-skills/SKILL.md:16-43, 168-192
- Structured assumption disclosures using the `ASSUMPTIONS I'M MAKING:` template — skills/using-agent-skills/SKILL.md:51-60
- Explicit clarification requests and trade-off presentations when confusion arises — skills/using-agent-skills/SKILL.md:63-74
- Technical pushback, quantified downside analyses, and alternative proposals — skills/using-agent-skills/SKILL.md:75-85
- Task completion verdicts evaluated against local acceptance criteria and project Definition of Done — skills/using-agent-skills/SKILL.md:110-115

## Invokes — required
- reference references/definition-of-done.md — skills/using-agent-skills/SKILL.md:114
- skill interview-me — skills/using-agent-skills/SKILL.md:19, 146, 170
- skill idea-refine — skills/using-agent-skills/SKILL.md:20, 137, 147, 171
- skill spec-driven-development — skills/using-agent-skills/SKILL.md:21, 137, 140, 148, 172
- skill constraint-driven-development — skills/using-agent-skills/SKILL.md:22
- skill planning-and-task-breakdown — skills/using-agent-skills/SKILL.md:23, 137, 149, 173
- skill incremental-implementation — skills/using-agent-skills/SKILL.md:24, 137, 152, 174
- skill frontend-ui-engineering — skills/using-agent-skills/SKILL.md:25, 178
- skill api-and-interface-design — skills/using-agent-skills/SKILL.md:26, 179
- skill context-engineering — skills/using-agent-skills/SKILL.md:27, 150, 177
- skill source-driven-development — skills/using-agent-skills/SKILL.md:28, 151, 175
- skill doubt-driven-development — skills/using-agent-skills/SKILL.md:29, 154, 176
- skill test-driven-development — skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180
- skill browser-testing-with-devtools — skills/using-agent-skills/SKILL.md:31, 181
- skill debugging-and-error-recovery — skills/using-agent-skills/SKILL.md:32, 164, 182
- skill code-review-and-quality — skills/using-agent-skills/SKILL.md:33, 137, 156, 164, 183
- skill code-simplification — skills/using-agent-skills/SKILL.md:34, 137, 157, 184
- skill security-and-hardening — skills/using-agent-skills/SKILL.md:35, 185
- skill performance-optimization — skills/using-agent-skills/SKILL.md:36, 186
- skill git-workflow-and-versioning — skills/using-agent-skills/SKILL.md:37, 158, 187
- skill ci-cd-and-automation — skills/using-agent-skills/SKILL.md:38, 188
- skill deprecation-and-migration — skills/using-agent-skills/SKILL.md:39, 160, 189
- skill documentation-and-adrs — skills/using-agent-skills/SKILL.md:40, 159, 190
- skill observability-and-instrumentation — skills/using-agent-skills/SKILL.md:41, 153, 191
- skill shipping-and-launch — skills/using-agent-skills/SKILL.md:42, 137, 161, 192

## Invoked by — required
- hook hooks/session-start.sh — hooks/session-start.sh:3, 11, 27
- test hooks/session-start-test.sh — hooks/session-start-test.sh:33
- doc CONTRIBUTING.md — CONTRIBUTING.md:79, 84
- doc README.md — README.md:222, 228, 377
- doc docs/adoption-guide.md — docs/adoption-guide.md:31, 68, 124
- doc docs/comparison.md — docs/comparison.md:54
- doc docs/cursor-setup.md — docs/cursor-setup.md:43, 102, 144, 164
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:68, 103, 112
- doc docs/getting-started.md — docs/getting-started.md:40
- config evals/cases/test-driven-development.json — evals/cases/test-driven-development.json:25
- config evals/cases/using-agent-skills.json — evals/cases/using-agent-skills.json:2, 34
- script scripts/lib/skill-lint.js — scripts/lib/skill-lint.js:58
- script scripts/validate-reference-links.js — scripts/validate-reference-links.js:12
- test scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:48, 65, 83

## Concepts named — required, verbatim
- `using-agent-skills` — skills/using-agent-skills/SKILL.md:2 — defined here
- `meta-skill` — skills/using-agent-skills/SKILL.md:3, 10 — defined here
- `Using Agent Skills` — skills/using-agent-skills/SKILL.md:6 — defined here
- `Agent Skills` — skills/using-agent-skills/SKILL.md:10 — defined here
- `Skill Discovery` — skills/using-agent-skills/SKILL.md:12 — defined here
- `interview-me` — skills/using-agent-skills/SKILL.md:19, 146, 170 — used here
- `idea-refine` — skills/using-agent-skills/SKILL.md:20, 137, 147, 171 — used here
- `spec-driven-development` — skills/using-agent-skills/SKILL.md:21, 137, 140, 148, 172 — used here
- `constraint-driven-development` — skills/using-agent-skills/SKILL.md:22, 172 — used here
- `planning-and-task-breakdown` — skills/using-agent-skills/SKILL.md:23, 137, 149, 173 — used here
- `incremental-implementation` — skills/using-agent-skills/SKILL.md:24, 137, 152, 174 — used here
- `frontend-ui-engineering` — skills/using-agent-skills/SKILL.md:25, 178 — used here
- `api-and-interface-design` — skills/using-agent-skills/SKILL.md:26, 179 — used here
- `context-engineering` — skills/using-agent-skills/SKILL.md:27, 150, 177 — used here
- `source-driven-development` — skills/using-agent-skills/SKILL.md:28, 151, 175 — used here
- `doubt-driven-development` — skills/using-agent-skills/SKILL.md:29, 154, 176 — used here
- `test-driven-development` — skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180 — used here
- `browser-testing-with-devtools` — skills/using-agent-skills/SKILL.md:31, 181 — used here
- `debugging-and-error-recovery` — skills/using-agent-skills/SKILL.md:32, 164, 182 — used here
- `code-review-and-quality` — skills/using-agent-skills/SKILL.md:33, 137, 156, 164, 183 — used here
- `code-simplification` — skills/using-agent-skills/SKILL.md:34, 137, 157, 184 — used here
- `security-and-hardening` — skills/using-agent-skills/SKILL.md:35, 185 — used here
- `performance-optimization` — skills/using-agent-skills/SKILL.md:36, 186 — used here
- `git-workflow-and-versioning` — skills/using-agent-skills/SKILL.md:37, 158, 187 — used here
- `ci-cd-and-automation` — skills/using-agent-skills/SKILL.md:38, 188 — used here
- `deprecation-and-migration` — skills/using-agent-skills/SKILL.md:39, 160, 189 — used here
- `documentation-and-adrs` — skills/using-agent-skills/SKILL.md:40, 159, 190 — used here
- `observability-and-instrumentation` — skills/using-agent-skills/SKILL.md:41, 153, 191 — used here
- `shipping-and-launch` — skills/using-agent-skills/SKILL.md:42, 137, 161, 192 — used here
- `Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45 — defined here
- `Surface Assumptions` — skills/using-agent-skills/SKILL.md:49 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/using-agent-skills/SKILL.md:54 — defined here
- `Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63 — defined here
- `Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75 — defined here
- `sycophancy` — skills/using-agent-skills/SKILL.md:84, 124 — defined here
- `Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86 — defined here
- `Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97 — defined here
- `Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110 — defined here
- `Definition of Done` — skills/using-agent-skills/SKILL.md:114 — used here
- `acceptance criteria` — skills/using-agent-skills/SKILL.md:115 — used here
- `Failure Modes to Avoid` — skills/using-agent-skills/SKILL.md:116 — defined here
- `Skill Rules` — skills/using-agent-skills/SKILL.md:131 — defined here
- `Lifecycle Sequence` — skills/using-agent-skills/SKILL.md:141 — defined here
- `Quick Reference` — skills/using-agent-skills/SKILL.md:166 — defined here
- `Define` — skills/using-agent-skills/SKILL.md:170-172 — used here
- `Plan` — skills/using-agent-skills/SKILL.md:173 — used here
- `Build` — skills/using-agent-skills/SKILL.md:174-179 — used here
- `Verify` — skills/using-agent-skills/SKILL.md:180-182 — used here
- `Review` — skills/using-agent-skills/SKILL.md:183-186 — used here
- `Ship` — skills/using-agent-skills/SKILL.md:187-192 — used here

## Structure
- `# Using Agent Skills` (line 6)
- `## Overview` (line 8)
- `## Skill Discovery` (line 12)
- `## Core Operating Behaviors` (line 45)
  - `### 1. Surface Assumptions` (line 49)
  - `### 2. Manage Confusion Actively` (line 63)
  - `### 3. Push Back When Warranted` (line 75)
  - `### 4. Enforce Simplicity` (line 86)
  - `### 5. Maintain Scope Discipline` (line 97)
  - `### 6. Verify, Don't Assume` (line 110)
- `## Failure Modes to Avoid` (line 116)
- `## Skill Rules` (line 131)
- `## Lifecycle Sequence` (line 141)
- `## Quick Reference` (line 166)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `skills/using-agent-skills/SKILL.md:146-162` vs `skills/using-agent-skills/SKILL.md:19-42, 168-192` · In the `Lifecycle Sequence` section (lines 146-162), only 16 skills are sequenced for a complete feature lifecycle. 8 catalog skills are omitted from the linear sequence: `constraint-driven-development` (Define), `frontend-ui-engineering` (Build), `api-and-interface-design` (Build), `browser-testing-with-devtools` (Verify), `debugging-and-error-recovery` (Verify - noted at line 164 as bug fix flow), `security-and-hardening` (Review), `performance-optimization` (Review), and `ci-cd-and-automation` (Ship).
- `doc-drift` · `skills/using-agent-skills/SKILL.md:1` vs `docs/skill-anatomy.md:37-73` and `scripts/lib/skill-lint.js:57-58` · `using-agent-skills` deviates entirely from the standard 5-section skill anatomy (`When to Use`, `Common Rationalizations`, `Red Flags`, `Verification`), requiring a hardcoded validator exemption in `scripts/lib/skill-lint.js:58` (`'using-agent-skills': 'Meta-skill — orchestrates other skills; When-to-Use and Verification are not applicable to a routing document.'`). Instead, it substitutes `Core Operating Behaviors` and `Failure Modes to Avoid`.
- `doc-drift` · `skills/using-agent-skills/SKILL.md:114` vs `docs/skill-anatomy.md:111-119` · `using-agent-skills/SKILL.md:114` links to `../../references/definition-of-done.md`. As acknowledged in `docs/skill-anatomy.md:117`, single-skill installation tools (`npx addy-skills add using-agent-skills`) copy only `skills/using-agent-skills/`, leaving shared root `references/` behind and causing broken markdown links at runtime.

## Observations
- Constitutional Meta-Skill Pattern: Rather than implementing domain technical logic, this skill acts as an overarching meta-orchestrator. It is injected into every Claude Code session automatically via `hooks/session-start.sh`.
- Anti-Sycophancy & Intellectual Honesty Directives: Explicitly commands the agent to avoid "yes-machine" behavior (`Push Back When Warranted`), quantify downsides (e.g. latency numbers), and prefer honest technical disagreement over sycophancy.
- Progressive Disclosure vs Universal Injection: Injected globally via SessionStart, which incurs an upfront static context overhead of ~2,607 tokens (10,426 bytes) at the start of every session, contrasting with the progressive disclosure model prescribed in `docs/skill-anatomy.md` where skills are loaded only on demand.
- Universal Guardrails: Establishes project-wide behaviors that apply regardless of active skill: surfacing assumptions before execution, asking clarifying questions when confused instead of guessing, enforcing simplicity against over-engineering, and maintaining strict surgical scope boundaries.

## Context cost
File size: 10,426 bytes (~2,607 tokens). References `references/definition-of-done.md` (3,798 bytes, ~950 tokens). Total combined context if DoD is loaded is 14,224 bytes (~3,557 tokens). Static session injection via `hooks/session-start.sh` consumes ~2,607 tokens at session start.
