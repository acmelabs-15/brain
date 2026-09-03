---
package: addy
path: CLAUDE.md
type: doc
bytes: 4094
unit: inv-addy-20
---

# CLAUDE.md

## Purpose — required, verbatim
> "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents.
>
> > **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself, not other projects. Don't copy it into another project or a global agent configuration; the reusable assets are the skills in `skills/`." — CLAUDE.md:3-5

## Design intent — required
Instruction file for Claude Code agents executing directly on the `addyosmani/agent-skills` repository. It delineates the seven top-level repository structural directories, establishes the primary 6-phase software development lifecycle taxonomy (Define, Plan, Build, Verify, Review, Ship), categorizes skills under their designated lifecycle stages, standardizes skill authoring anatomy (YAML frontmatter, section order, 100-line supporting file threshold), defines validation and eval execution procedures (`run-evals.js`), and mandates pull request boundaries to prevent duplication and collisions with upstream contributions.

## Phase — required
cross-phase

## Inputs — required
- Claude Code agent session initialization and maintenance requests (`CLAUDE.md:3-5`)
- Repository directory structures across `skills/`, `agents/`, `hooks/`, `.claude/commands/`, `references/`, `evals/`, and `docs/` (`CLAUDE.md:9-17`)
- Upstream pull request queues and contributor pre-flight guidelines (`CLAUDE.md:39, 49-60`)

## Outputs — required
- Standardized markdown-first skills with required section anatomy (`CLAUDE.md:30-36`)
- Automated skill routing and behavioral eval executions (`node scripts/run-evals.js`) (`CLAUDE.md:45`)
- Upstream pull requests adhering to repository scope and boundary constraints (`CLAUDE.md:47-61`)

## Invokes — required
- dir skills/ — CLAUDE.md:5, CLAUDE.md:10, CLAUDE.md:30
- dir agents/ — CLAUDE.md:11
- agent agents/code-reviewer.md — CLAUDE.md:11
- agent agents/test-engineer.md — CLAUDE.md:11
- agent agents/security-auditor.md — CLAUDE.md:11
- agent agents/web-performance-auditor.md — CLAUDE.md:11
- dir hooks/ — CLAUDE.md:12
- dir .claude/commands/ — CLAUDE.md:13
- command .claude/commands/spec.md — CLAUDE.md:13
- command .claude/commands/plan.md — CLAUDE.md:13
- command .claude/commands/build.md — CLAUDE.md:13
- command .claude/commands/test.md — CLAUDE.md:13
- command .claude/commands/review.md — CLAUDE.md:13
- command .claude/commands/code-simplify.md — CLAUDE.md:13
- command .claude/commands/ship.md — CLAUDE.md:13
- command .claude/commands/webperf.md — CLAUDE.md:13
- dir references/ — CLAUDE.md:14, CLAUDE.md:34
- dir evals/ — CLAUDE.md:15
- doc evals/README.md — CLAUDE.md:15
- dir docs/ — CLAUDE.md:16
- skill skills/interview-me/SKILL.md — CLAUDE.md:21
- skill skills/idea-refine/SKILL.md — CLAUDE.md:21
- skill skills/spec-driven-development/SKILL.md — CLAUDE.md:21
- skill skills/planning-and-task-breakdown/SKILL.md — CLAUDE.md:22
- skill skills/incremental-implementation/SKILL.md — CLAUDE.md:23
- skill skills/test-driven-development/SKILL.md — CLAUDE.md:23
- skill skills/context-engineering/SKILL.md — CLAUDE.md:23
- skill skills/source-driven-development/SKILL.md — CLAUDE.md:23
- skill skills/doubt-driven-development/SKILL.md — CLAUDE.md:23
- skill skills/frontend-ui-engineering/SKILL.md — CLAUDE.md:23
- skill skills/api-and-interface-design/SKILL.md — CLAUDE.md:23
- skill skills/browser-testing-with-devtools/SKILL.md — CLAUDE.md:24
- skill skills/debugging-and-error-recovery/SKILL.md — CLAUDE.md:24
- skill skills/code-review-and-quality/SKILL.md — CLAUDE.md:25
- skill skills/code-simplification/SKILL.md — CLAUDE.md:25
- skill skills/security-and-hardening/SKILL.md — CLAUDE.md:25
- skill skills/performance-optimization/SKILL.md — CLAUDE.md:25
- skill skills/git-workflow-and-versioning/SKILL.md — CLAUDE.md:26
- skill skills/ci-cd-and-automation/SKILL.md — CLAUDE.md:26
- skill skills/deprecation-and-migration/SKILL.md — CLAUDE.md:26
- skill skills/documentation-and-adrs/SKILL.md — CLAUDE.md:26
- skill skills/observability-and-instrumentation/SKILL.md — CLAUDE.md:26
- skill skills/shipping-and-launch/SKILL.md — CLAUDE.md:26
- doc CONTRIBUTING.md — CLAUDE.md:39, CLAUDE.md:56
- doc docs/skill-anatomy.md — CLAUDE.md:39, CLAUDE.md:57
- script scripts/run-evals.js — CLAUDE.md:45

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:71
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:26
- doc docs/opencode-setup.md — docs/opencode-setup.md:92
- doc docs/getting-started.md — docs/getting-started.md:34
- doc docs/adoption-guide.md — docs/adoption-guide.md:32
- skill skills/documentation-and-adrs/SKILL.md — skills/documentation-and-adrs/SKILL.md:254, skills/documentation-and-adrs/SKILL.md:288
- skill skills/code-simplification/SKILL.md — skills/code-simplification/SKILL.md:49, skills/code-simplification/SKILL.md:328
- skill skills/context-engineering/SKILL.md — skills/context-engineering/SKILL.md:26, skills/context-engineering/SKILL.md:42
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:140, skills/constraint-driven-development/SKILL.md:301
- skill skills/planning-and-task-breakdown/SKILL.md — skills/planning-and-task-breakdown/SKILL.md:162
- command commands/constraints.toml — commands/constraints.toml:24
- script scripts/validate-commands.js — scripts/validate-commands.js:16
- script scripts/validate-reference-links.js — scripts/validate-reference-links.js:20
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:92

## Concepts named — required, verbatim
- `agent-skills` — CLAUDE.md:1 — defined here
- `production-grade engineering skills` — CLAUDE.md:3 — defined here
- `Project Structure` — CLAUDE.md:7 — defined here
- `Skills by Phase` — CLAUDE.md:19 — defined here
- `Define` — CLAUDE.md:21 — defined here
- `interview-me` — CLAUDE.md:21 — used here
- `idea-refine` — CLAUDE.md:21 — used here
- `spec-driven-development` — CLAUDE.md:21 — used here
- `Plan` — CLAUDE.md:22 — defined here
- `planning-and-task-breakdown` — CLAUDE.md:22 — used here
- `Build` — CLAUDE.md:23 — defined here
- `incremental-implementation` — CLAUDE.md:23 — used here
- `test-driven-development` — CLAUDE.md:23 — used here
- `context-engineering` — CLAUDE.md:23 — used here
- `source-driven-development` — CLAUDE.md:23 — used here
- `doubt-driven-development` — CLAUDE.md:23 — used here
- `frontend-ui-engineering` — CLAUDE.md:23 — used here
- `api-and-interface-design` — CLAUDE.md:23 — used here
- `Verify` — CLAUDE.md:24 — defined here
- `browser-testing-with-devtools` — CLAUDE.md:24 — used here
- `debugging-and-error-recovery` — CLAUDE.md:24 — used here
- `Review` — CLAUDE.md:25 — defined here
- `code-review-and-quality` — CLAUDE.md:25 — used here
- `code-simplification` — CLAUDE.md:25 — used here
- `security-and-hardening` — CLAUDE.md:25 — used here
- `performance-optimization` — CLAUDE.md:25 — used here
- `Ship` — CLAUDE.md:26 — defined here
- `git-workflow-and-versioning` — CLAUDE.md:26 — used here
- `ci-cd-and-automation` — CLAUDE.md:26 — used here
- `deprecation-and-migration` — CLAUDE.md:26 — used here
- `documentation-and-adrs` — CLAUDE.md:26 — used here
- `observability-and-instrumentation` — CLAUDE.md:26 — used here
- `shipping-and-launch` — CLAUDE.md:26 — used here
- `Conventions` — CLAUDE.md:28 — defined here
- `Contributing` — CLAUDE.md:37 — defined here
- `Commands` — CLAUDE.md:41 — defined here
- `Evals` — CLAUDE.md:45 — defined here
- `trigger/routing evals` — CLAUDE.md:45 — defined here
- `behavioral` — CLAUDE.md:45 — defined here
- `Pull Requests` — CLAUDE.md:47 — defined here
- `Boundaries` — CLAUDE.md:54 — defined here

## Structure
- agent-skills (line 1)
- Project Structure (line 7)
- Skills by Phase (line 19)
- Conventions (line 28)
- Contributing (line 37)
- Commands (line 41)
- Pull Requests (line 47)
- Boundaries (line 54)

## Scripts — required if type is script or the skill ships scripts
For documented commands in CLAUDE.md:41-45:
- path: `scripts/run-evals.js`, language: JavaScript (CommonJS), lines: 341
- documented invocation: `node scripts/run-evals.js` (verbatim, CLAUDE.md:45)
- **executed:** yes
- actual command run: `node scripts/run-evals.js` (fails with exit code 1; `ReferenceError: require is not defined in ES module scope`); `bun scripts/run-evals.js` (passes with exit code 0; `136 checks passed — 0 error(s), 0 warning(s) trigger rank-1 rate: 86% PASSED`)
- documented exit codes: `0` on all checks passing, non-zero on test failures
- for validators/gates: executes cleanly on default branch under Bun runtime; exits 1 under Node when invoked in an ESM-scoped root.
- does the output match what the documentation claims? yes, runs trigger routing evals across all skills and reports pass rate.

## Defects — required
- doc-drift · CLAUDE.md:21-26 lists 23 skills across the 6 phases, omitting `constraint-driven-development` and `using-agent-skills` from the `Skills by Phase` taxonomy.
- doc-drift · CLAUDE.md:13 lists 8 slash commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`), omitting `/constraints` (`.claude/commands/constraints.md` and `commands/constraints.toml`), which is the 9th command verified by `scripts/validate-commands.js`.
- script-bug · CLAUDE.md:45 specifies `node scripts/run-evals.js`. In workspaces configured with `"type": "module"`, Node crashes with `ReferenceError: require is not defined in ES module scope` (exit code 1); executing via `bun` transparently resolves the CommonJS module and exits 0.

## Observations
- Defines the repository's authoritative six-stage lifecycle taxonomy: Define, Plan, Build, Verify, Review, Ship.
- Explicitly establishes the 100-line threshold for creating supporting reference files, keeping small references inline within the primary `SKILL.md`.
- Notes that `npm test` is "Not applicable (this is a documentation project)" (line 43), even though the repository maintains 5 automated test suites in `scripts/*-test.js`.

## Context cost
4,094 bytes (~1,025 tokens).
