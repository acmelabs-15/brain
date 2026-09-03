# Work Unit Report: `inv-addy-8` (Part 1: README.md & CONTRIBUTING.md)

This report provides the exhaustive inventory entries and §4 checklist findings for the first two files of work unit `inv-addy-8` in the `addy` source package:
1. `sources/addy/README.md` (25,223 bytes)
2. `sources/addy/CONTRIBUTING.md` (7,179 bytes)

---

# Inventory Entry 1: `sources/addy/README.md`

```markdown
---
package: addy
path: README.md
type: doc
bytes: 25223
unit: inv-addy-8
---

# README.md

## Purpose — required, verbatim
> "**Production-grade engineering skills for AI coding agents.**

Skills encode the workflows, quality gates, and best practices that senior engineers use when building software. These ones are packaged so AI agents follow them consistently across every phase of development." — README.md:3-5

## Design intent — required
The root catalog, architectural blueprint, and primary entry point for the entire `agent-skills` repository. It addresses the core failure mode where AI coding agents default to the path of least resistance (omitting specifications, skipping automated testing, neglecting security reviews, and ignoring operational boundaries) by introducing an opinionated, six-phase software development lifecycle (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`). It maps 9 slash commands to 25 skills (24 domain lifecycle skills and 1 meta-orchestration skill), 4 specialist agent personas, and 7 shared reference checklists. Additionally, it specifies universal skill anatomy (process over prose, anti-rationalization tables, non-negotiable verification gates, progressive disclosure) and provides distribution and setup documentation across ten agent runtimes (Claude Code, Cursor, Antigravity CLI, Gemini CLI, Windsurf, OpenCode, GitHub Copilot, Kiro IDE, Codex, Command Code). Without it, developers and autonomous agents would lack catalog discovery, unified lifecycle phase taxonomy, and installation mechanics.

## Phase — required
`cross-phase` (root catalog encompassing `addy:Define`, `addy:Plan`, `addy:Build`, `addy:Verify`, `addy:Review`, `addy:Ship`, plus meta-skills and specialist personas)

## Inputs — required
- Developer invocation and installation requests across 10+ AI agent platforms (README.md:46-208)
- Upstream engineering literature and institutional standards: *Software Engineering at Google* (swe-book), Google engineering practices guide, OWASP Top 10, WCAG 2.1 AA, Core Web Vitals (README.md:254, 270, 271, 310, 311, 396)
- Target codebase maturity context (greenfield vs. brownfield adoption paths) (README.md:216)
- Client-side environment configurations for Claude Code, Cursor, Antigravity CLI, Gemini CLI, Windsurf, OpenCode, Copilot, Kiro IDE, Codex CLI, and Command Code (README.md:70-208)

## Outputs — required
- Unified lifecycle phase architecture map (`DEFINE` → `PLAN` → `BUILD` → `VERIFY` → `REVIEW` → `SHIP`) (README.md:11-18)
- 9 slash command entry points mapped to principles (`/spec`, `/plan`, `/build`, `/test`, `/constraints`, `/review`, `/webperf`, `/code-simplify`, `/ship`) (README.md:22-37)
- Autonomous execution mode pattern (`/build auto`) (README.md:38)
- Comprehensive catalog indexing 25 skills, 4 agent personas, and 7 shared checklists (README.md:220-315)
- Standard skill design specification and anatomical template (README.md:317-345)
- Repository directory structure layout (README.md:348-386)

## Invokes — required
- doc docs/cursor-setup.md — README.md:103
- doc docs/antigravity-setup.md — README.md:110
- doc docs/gemini-cli-setup.md — README.md:130
- doc docs/windsurf-setup.md — README.md:149
- doc docs/opencode-setup.md — README.md:158
- doc docs/copilot-setup.md — README.md:165
- doc docs/codex-setup.md — README.md:184
- doc docs/commandcode-setup.md — README.md:199
- doc docs/getting-started.md — README.md:206
- doc docs/adoption-guide.md — README.md:216
- skill skills/using-agent-skills/SKILL.md — README.md:228, 377
- skill skills/interview-me/SKILL.md — README.md:57, 234, 353
- skill skills/idea-refine/SKILL.md — README.md:235, 354
- skill skills/spec-driven-development/SKILL.md — README.md:184, 196, 236, 355
- skill skills/constraint-driven-development/SKILL.md — README.md:237, 356
- skill skills/planning-and-task-breakdown/SKILL.md — README.md:243, 357
- skill skills/incremental-implementation/SKILL.md — README.md:249, 358
- skill skills/test-driven-development/SKILL.md — README.md:58, 250, 363
- skill skills/context-engineering/SKILL.md — README.md:251, 359
- skill skills/source-driven-development/SKILL.md — README.md:252, 360
- skill skills/doubt-driven-development/SKILL.md — README.md:253, 361
- skill skills/frontend-ui-engineering/SKILL.md — README.md:40, 254, 362
- skill skills/api-and-interface-design/SKILL.md — README.md:40, 255, 364
- skill skills/browser-testing-with-devtools/SKILL.md — README.md:261, 365
- skill skills/debugging-and-error-recovery/SKILL.md — README.md:262, 366
- skill skills/code-review-and-quality/SKILL.md — README.md:56, 268, 367
- skill skills/code-simplification/SKILL.md — README.md:269, 368
- skill skills/security-and-hardening/SKILL.md — README.md:270, 369
- skill skills/performance-optimization/SKILL.md — README.md:271, 370
- skill skills/git-workflow-and-versioning/SKILL.md — README.md:277, 371
- skill skills/ci-cd-and-automation/SKILL.md — README.md:278, 372
- skill skills/deprecation-and-migration/SKILL.md — README.md:279, 373
- skill skills/documentation-and-adrs/SKILL.md — README.md:280, 374
- skill skills/observability-and-instrumentation/SKILL.md — README.md:281, 375
- skill skills/shipping-and-launch/SKILL.md — README.md:282, 376
- agent agents/code-reviewer.md — README.md:292
- agent agents/test-engineer.md — README.md:293
- agent agents/security-auditor.md — README.md:294
- agent agents/web-performance-auditor.md — README.md:295
- doc docs/agents.md — README.md:297
- reference references/definition-of-done.md — README.md:307
- reference references/testing-patterns.md — README.md:308
- reference references/security-checklist.md — README.md:309
- reference references/performance-checklist.md — README.md:310
- reference references/accessibility-checklist.md — README.md:311
- reference references/observability-checklist.md — README.md:312
- reference references/orchestration-patterns.md — README.md:313
- doc docs/comparison.md — README.md:402
- doc docs/skill-anatomy.md — README.md:410
- doc CONTRIBUTING.md — README.md:410
- command /spec — README.md:17, 28
- command /plan — README.md:17, 29
- command /build — README.md:17, 30
- command /build auto — README.md:38
- command /test — README.md:17, 31
- command /constraints — README.md:32
- command /review — README.md:17, 33
- command /webperf — README.md:34, 295
- command /code-simplify — README.md:35
- command /ship — README.md:17, 36
- config plugin.json — README.md:384
- hook hooks/session-start.sh — README.md:380

## Invoked by — required
- doc docs/cursor-setup.md — docs/cursor-setup.md:3, 224
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:111
- doc docs/adoption-guide.md — docs/adoption-guide.md:5
- doc CONTRIBUTING.md — CONTRIBUTING.md:13
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:326

## Concepts named — required, verbatim
- `DEFINE` — README.md:12 — defined here
- `PLAN` — README.md:12 — defined here
- `BUILD` — README.md:12 — defined here
- `VERIFY` — README.md:12 — defined here
- `REVIEW` — README.md:12 — defined here
- `SHIP` — README.md:12 — defined here
- `Idea Refine` — README.md:14-15 — used here
- `Spec / PRD` — README.md:14-15 — used here
- `Code Impl` — README.md:14-15 — used here
- `Test / Debug` — README.md:14-15 — used here
- `QA Gate` — README.md:14-15 — used here
- `Go Live` — README.md:14-15 — used here
- `/spec` — README.md:17, 28 — used here
- `/plan` — README.md:17, 29 — used here
- `/build` — README.md:17, 30 — used here
- `/test` — README.md:17, 31 — used here
- `/constraints` — README.md:32 — used here
- `/review` — README.md:17, 33 — used here
- `/webperf` — README.md:34, 295 — used here
- `/code-simplify` — README.md:35 — used here
- `/ship` — README.md:17, 36 — used here
- `Spec before code` — README.md:28 — defined here
- `Small, atomic tasks` — README.md:29 — defined here
- `One slice at a time` — README.md:30 — defined here
- `Tests are proof` — README.md:31 — defined here
- `Decide it once, enforce it everywhere` — README.md:32 — defined here
- `Improve code health` — README.md:33 — defined here
- `Measure before you optimize` — README.md:34 — defined here
- `Clarity over cleverness` — README.md:35 — defined here
- `Faster is safer` — README.md:36, 278 — defined here
- `/build auto` — README.md:38 — defined here
- `five-axis review` — README.md:56, 268, 292 — used here
- `requirements interrogation` — README.md:57 — used here
- `red-green-refactor` — README.md:58, 250 — used here
- `Greenfield` — README.md:216 — used here
- `Brownfield` — README.md:216 — used here
- `Meta` — README.md:224 — defined here
- `Define` — README.md:230 — defined here
- `Plan` — README.md:239 — defined here
- `Build` — README.md:246 — defined here
- `Verify` — README.md:257 — defined here
- `Review` — README.md:264 — defined here
- `Ship` — README.md:273 — defined here
- `divergent/convergent thinking` — README.md:235 — used here
- `PRD` — README.md:236 — used here
- `CONSTRAINTS.md` — README.md:237 — used here
- `Thin vertical slices` — README.md:249 — used here
- `Feature flags` — README.md:249, 278, 282, 396 — used here
- `Safe defaults` — README.md:249 — used here
- `Rollback-friendly changes` — README.md:249 — used here
- `Test pyramid (80/15/5)` — README.md:250, 396 — used here
- `Test sizes` — README.md:250 — used here
- `DAMP over DRY` — README.md:250 — used here
- `Beyonce Rule` — README.md:250, 396 — used here
- `Browser testing` — README.md:250, 261 — used here
- `Rules files` — README.md:251 — used here
- `Context packing` — README.md:251 — used here
- `MCP integrations` — README.md:251 — used here
- `CLAIM → EXTRACT → DOUBT → RECONCILE → STOP` — README.md:253 — used here
- `Adversarial fresh-context review` — README.md:253 — used here
- `Cross-model escalation` — README.md:253 — used here
- `Design systems` — README.md:254 — used here
- `Responsive design` — README.md:254 — used here
- `WCAG 2.1 AA accessibility` — README.md:254 — used here
- `Contract-first design` — README.md:255 — used here
- `Hyrum's Law` — README.md:255, 396 — used here
- `One-Version Rule` — README.md:255 — used here
- `Boundary validation` — README.md:255 — used here
- `Chrome DevTools MCP` — README.md:261 — used here
- `Five-step triage: reproduce, localize, reduce, fix, guard` — README.md:262 — used here
- `Stop-the-line rule` — README.md:262 — used here
- `Safe fallbacks` — README.md:262 — used here
- `Change sizing (~100 lines)` — README.md:268, 277, 396 — used here
- `Severity labels (Nit/Optional/FYI)` — README.md:268 — used here
- `Review speed norms` — README.md:268, 396 — used here
- `Splitting strategies` — README.md:268 — used here
- `Chesterton's Fence` — README.md:269, 396 — used here
- `Rule of 500` — README.md:269 — used here
- `OWASP Top 10 prevention` — README.md:270, 294, 309 — used here
- `Three-tier boundary system` — README.md:270 — used here
- `Measure-first approach` — README.md:271 — used here
- `Core Web Vitals targets` — README.md:271, 295, 310 — used here
- `Bundle analysis` — README.md:271 — used here
- `Trunk-based development` — README.md:277, 396 — used here
- `Atomic commits` — README.md:277 — used here
- `Commit-as-save-point pattern` — README.md:277 — used here
- `Shift Left` — README.md:278, 396 — used here
- `Quality gate pipelines` — README.md:278 — used here
- `Failure feedback loops` — README.md:278 — used here
- `Code-as-liability mindset` — README.md:279, 396 — used here
- `Compulsory vs advisory deprecation` — README.md:279 — used here
- `Migration patterns` — README.md:279 — used here
- `Zombie code removal` — README.md:279 — used here
- `Architecture Decision Records (ADRs)` — README.md:280 — used here
- `Structured logging` — README.md:281, 312 — used here
- `RED metrics` — README.md:281, 312 — used here
- `USE metrics` — README.md:312 — used here
- `OpenTelemetry tracing` — README.md:281 — used here
- `Symptom-based alerting` — README.md:281, 312 — used here
- `Pre-launch checklists` — README.md:282 — used here
- `Staged rollouts` — README.md:282 — used here
- `Rollback procedures` — README.md:282 — used here
- `code-reviewer` — README.md:292 — used here
- `test-engineer` — README.md:293 — used here
- `security-auditor` — README.md:294 — used here
- `web-performance-auditor` — README.md:295 — used here
- `Prove-It pattern` — README.md:293 — used here
- `Quick/Deep modes` — README.md:295 — used here
- `Metric-honesty rule` — README.md:295 — used here
- `definition-of-done` — README.md:307 — used here
- `testing-patterns` — README.md:308 — used here
- `security-checklist` — README.md:309 — used here
- `performance-checklist` — README.md:310 — used here
- `accessibility-checklist` — README.md:311 — used here
- `observability-checklist` — README.md:312 — used here
- `orchestration-patterns` — README.md:313 — used here
- `Personas don't invoke personas rule` — README.md:313 — used here
- `Process, not prose` — README.md:341 — defined here
- `Anti-rationalization` — README.md:320, 333, 342 — defined here | used here
- `Non-negotiable verification` — README.md:343 — defined here
- `Progressive disclosure` — README.md:344 — defined here

## Structure
1. `# Agent Skills` — README.md:1
2. `## Commands` — README.md:22
3. `## Quick Start` — README.md:44
4. `## Adoption` — README.md:214
5. `## All 24 Skills` — README.md:220
6. `### Meta - Discover which skill applies` — README.md:224
7. `### Define - Clarify what to build` — README.md:230
8. `### Plan - Break it down` — README.md:239
9. `### Build - Write the code` — README.md:246
10. `### Verify - Prove it works` — README.md:257
11. `### Review - Quality gates before merge` — README.md:264
12. `### Ship - Deploy with confidence` — README.md:273
13. `## Agent Personas` — README.md:286
14. `## Reference Checklists` — README.md:301
15. `## How Skills Work` — README.md:317
16. `## Project Structure` — README.md:348
17. `## Why Agent Skills?` — README.md:390
18. `## How it compares` — README.md:400
19. `## Contributing` — README.md:406
20. `## Team` — README.md:414
21. `## License` — README.md:426

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `internal-contradiction` · `doc-drift` · README.md:24 vs README.md:381-383: README.md:24 states "9 slash commands that map to the development lifecycle" and lists 9 commands in the table (lines 26-37), but the project tree diagram in lines 381-383 labels the command directories as containing 8 slash commands (`.claude/commands/ # 8 slash commands`, `.gemini/commands/ # 8 slash commands`, `commands/ # 8 slash commands`), whereas all three directories actually contain 9 commands on disk.
- `doc-drift` · README.md:220 vs README.md:222, 352: Section heading is titled `## All 24 Skills`, but line 222 clarifies "The pack includes 25 skills total — 24 lifecycle skills plus the `using-agent-skills` meta-skill", and the project structure at line 352 notes `25 skills (24 lifecycle + 1 meta)`.
- `cross-file-contradiction` · README.md:29 vs `.gemini/commands/planning.toml` and `commands/planning.toml`: The command table specifies `/plan`, which matches `.claude/commands/plan.md`, but Gemini and Antigravity implementations name the command file `planning.toml` rather than `plan.toml`.

## Observations
- Unusually strong architectural clarity: the document explicitly delineates between human-in-the-loop stepping and full autonomous execution (`/build auto` runs tasks autonomously while maintaining atomic commits, test-driven verification, and pause-on-risk gates).
- Explicit design standard for AI agent skills: process over prose, explicit anti-rationalization tables confronting agent shortcuts, non-negotiable verification gates, and progressive disclosure to preserve agent context windows.

## Context cost
File size: 25,223 bytes (~6,200 tokens). If an agent loads this file as documentation, context cost is 25,223 bytes. It does not automatically load downstream references or skills unless an agent follows a linked path.
```

---

# Inventory Entry 2: `sources/addy/CONTRIBUTING.md`

```markdown
---
package: addy
path: CONTRIBUTING.md
type: doc
bytes: 7179
unit: inv-addy-8
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "This file is the authoritative rulebook; the onboarding guide is the map." — CONTRIBUTING.md:5

Full context:
> "Thanks for your interest in contributing! This project is a collection of production-grade engineering skills for AI coding agents.

New here? [docs/developer-onboarding.md](docs/developer-onboarding.md) is a guided tour of how the repo fits together (the five layers, the verification loop, and the contribution paths) and tells you when to read this document, [skill-anatomy.md](docs/skill-anatomy.md), and [evals/README.md](evals/README.md). This file is the authoritative rulebook; the onboarding guide is the map." — CONTRIBUTING.md:3-5

## Design intent — required
The authoritative contribution governance manual and quality gate specification for the repository. It addresses the risks of catalog bloat, prompt drift, duplicate skill submissions, and unverifiable workflows by establishing mandatory pre-flight checks (`gh pr list --state open`, catalog search, anatomy compliance, explicit gap justification), defining a rigorous skill quality bar (Specific, Verifiable, Battle-tested, Minimal), and requiring that every new skill include an automated eval test suite (`evals/cases/<skill-name>.json` with at least 3 positive triggers, 2 negative triggers with owner attribution, and 1 behavioral execution/dialogue eval). It strictly forbids leaking repository-scoped configuration (`AGENTS.md`, `CLAUDE.md`) into consumer environments, bans unmaintainable documentation translations, and provides instructions for testing the session-start lifecycle hook. Without it, the repository would accumulate redundant, un-evaluated prompts with high regression rates across AI agent environments.

## Phase — required
`cross-phase` (contribution policies, evaluation gates, and quality standards applicable to all lifecycle phases)

## Inputs — required
- Contributor pull requests and proposed skill directories under `skills/` (CONTRIBUTING.md:7-68)
- Existing catalog in `README.md` and `skills/` directory (CONTRIBUTING.md:13)
- Open GitHub pull requests queried via `gh pr list --state open` (CONTRIBUTING.md:14)
- Skill anatomy specifications in `docs/skill-anatomy.md` (CONTRIBUTING.md:15, 23, 44)
- Eval case schemas and fixtures in `evals/cases/`, `evals/fixtures/`, and `evals/README.md` (CONTRIBUTING.md:42)
- Environment tools: `jq`, `mktemp`, bash (CONTRIBUTING.md:77-105)
- Community issue reports submitted via GitHub issue template `skill-gap.yml` (CONTRIBUTING.md:116)

## Outputs — required
- New skill directory additions: `skills/<kebab-case-name>/SKILL.md` (CONTRIBUTING.md:22-23)
- Mandatory eval case definitions: `evals/cases/<skill-name>.json` containing ≥3 positive triggers, ≥2 negative triggers, and ≥1 behavioral eval (CONTRIBUTING.md:42)
- Verification test assertions (`session-start JSON payload OK`) (CONTRIBUTING.md:86-90)
- Triage data from structured issue forms for skill gaps and outdated guidance (CONTRIBUTING.md:114-119)

## Invokes — required
- doc docs/developer-onboarding.md — CONTRIBUTING.md:5
- doc docs/skill-anatomy.md — CONTRIBUTING.md:5, 15, 23
- doc evals/README.md — CONTRIBUTING.md:5, 42
- doc README.md — CONTRIBUTING.md:13
- dir skills/ — CONTRIBUTING.md:13, 22, 61, 71
- dir evals/cases/ — CONTRIBUTING.md:42
- dir evals/fixtures/ — CONTRIBUTING.md:42
- dir scripts/ — CONTRIBUTING.md:60
- dir references/ — CONTRIBUTING.md:61
- file AGENTS.md — CONTRIBUTING.md:71
- file CLAUDE.md — CONTRIBUTING.md:71
- hook hooks/session-start.sh — CONTRIBUTING.md:79, 83
- skill skills/using-agent-skills/SKILL.md — CONTRIBUTING.md:79, 84
- script hooks/session-start-test.sh — CONTRIBUTING.md:79, 87, 99
- template .github/ISSUE_TEMPLATE/skill-gap.yml — CONTRIBUTING.md:116

## Invoked by — required
- file CLAUDE.md — CLAUDE.md:39, 56
- file AGENTS.md — AGENTS.md:88
- doc README.md — README.md:410
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5, 86, 88, 94, 116
- doc docs/opencode-setup.md — docs/opencode-setup.md:136
- fixture evals/fixtures/context-engineering/context-audit.md — evals/fixtures/context-engineering/context-audit.md:6

## Concepts named — required, verbatim
- `Production-grade engineering skills` — CONTRIBUTING.md:3 — used here
- `Five layers` — CONTRIBUTING.md:5 — used here
- `Verification loop` — CONTRIBUTING.md:5 — used here
- `Pre-flight checks` — CONTRIBUTING.md:11-17 — defined here
- `Search the catalog` — CONTRIBUTING.md:13 — defined here
- `Check open PRs` — CONTRIBUTING.md:14 — defined here
- `Read the anatomy` — CONTRIBUTING.md:15 — defined here
- `Justify the gap` — CONTRIBUTING.md:16 — defined here
- `Kebab-case` — CONTRIBUTING.md:22 — used here
- `SKILL.md` — CONTRIBUTING.md:23, 40 — used here
- `YAML frontmatter` — CONTRIBUTING.md:23, 41, 53, 67 — used here
- `Trigger conditions` — CONTRIBUTING.md:25 — used here
- `Specific` — CONTRIBUTING.md:31 — defined here
- `Verifiable` — CONTRIBUTING.md:32 — defined here
- `Battle-tested` — CONTRIBUTING.md:33 — defined here
- `Minimal` — CONTRIBUTING.md:34 — defined here
- `Eval case file` — CONTRIBUTING.md:42 — defined here | used here
- `Positive triggers` — CONTRIBUTING.md:42 — defined here
- `Negative triggers` — CONTRIBUTING.md:42 — defined here
- `Behavioral eval` — CONTRIBUTING.md:42 — defined here
- `Execution evals` — CONTRIBUTING.md:42 — defined here
- `Dialogue eval` — CONTRIBUTING.md:42 — defined here
- `Standard anatomy` — CONTRIBUTING.md:44 — defined here
- `Overview` — CONTRIBUTING.md:46 — defined here
- `When to Use` — CONTRIBUTING.md:47 — defined here
- `Process` — CONTRIBUTING.md:48 — defined here
- `Common Rationalizations` — CONTRIBUTING.md:49 — defined here
- `Red Flags` — CONTRIBUTING.md:50 — defined here
- `Verification` — CONTRIBUTING.md:51 — defined here
- `Repo-scoped files` — CONTRIBUTING.md:69 — defined here
- `Session-start hook` — CONTRIBUTING.md:79 — used here
- `Meta-skill` — CONTRIBUTING.md:79, 84 — used here
- `Regression test` — CONTRIBUTING.md:79 — used here
- `No-jq fallback` — CONTRIBUTING.md:92, 104 — defined here
- `Skill gap issue form` — CONTRIBUTING.md:116 — used here

## Structure
1. `# Contributing to Agent Skills` — CONTRIBUTING.md:1
2. `## Adding a New Skill` — CONTRIBUTING.md:7
3. `### Before proposing a new skill` — CONTRIBUTING.md:9
4. `### Creating the skill` — CONTRIBUTING.md:20
5. `### Skill Quality Bar` — CONTRIBUTING.md:27
6. `### Structure` — CONTRIBUTING.md:36
7. `### What Not to Do` — CONTRIBUTING.md:55
8. `## Modifying Existing Skills` — CONTRIBUTING.md:63
9. `## Repo-scoped files` — CONTRIBUTING.md:69
10. `## Translations` — CONTRIBUTING.md:73
11. `## Testing Hooks` — CONTRIBUTING.md:77
12. `### Reproducing the no-jq fallback` — CONTRIBUTING.md:92
13. `## Reporting Issues` — CONTRIBUTING.md:106
14. `## License` — CONTRIBUTING.md:121

## Scripts — required if type is script or the skill ships scripts
The file explicitly documents and instructs contributors to execute the hook regression test script:
- **Path:** `hooks/session-start-test.sh` (shell / node wrapper, 47 lines)
- **Documented invocation:** `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87
- **Executed:** yes
- **Actual command run:** `cd sources/addy && bash hooks/session-start-test.sh`
- **Actual stdout / stderr:**
  ```
  [stdin]:8
      throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
      ^

  Error: expected IMPORTANT priority, got undefined
      at [stdin]:8:11
      ...
  ```
- **Actual exit code:** `1`
- **Documented exit codes / claims:** "Expected output: `session-start JSON payload OK`. The script exits non-zero on any assertion failure." — CONTRIBUTING.md:90
- **Actual exit paths in code:**
  - `hooks/session-start.sh`: exits `0` on all branches (lines 15, 25, 27).
  - `hooks/session-start-test.sh`: exits non-zero via `set -e` on node process error or assertion throws (lines 25, 29, 33, 37, 41), exits `0` on line 45 (`console.log('session-start JSON payload OK')`).
- **Does the output match what the documentation claims?** NO. The test unconditionally crashes with an uncaught `Error: expected IMPORTANT priority, got undefined` (exit code 1).
- **Gate verification:** The gate is broken. `hooks/session-start.sh:25` was modified to output the Claude Code/Codex CLI standard `SessionStart` envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`), but `hooks/session-start-test.sh:24-43` was never updated and still expects legacy top-level `payload.priority === 'IMPORTANT'` and `payload.message`. Because `payload.priority` is `undefined`, the assertion fails unconditionally on the source repo's pinned commit.

## Defects — required
- `script-bug` · `doc-drift` · CONTRIBUTING.md:86-90 vs hooks/session-start-test.sh:24-43 vs hooks/session-start.sh:25: The documented test command `bash hooks/session-start-test.sh` fails with exit code 1 (`Error: expected IMPORTANT priority, got undefined`) because `hooks/session-start.sh` outputs the new `{"hookSpecificOutput": ...}` envelope, whereas `hooks/session-start-test.sh` asserts against deprecated properties `payload.priority` and `payload.message`.
- `script-bug` · CONTRIBUTING.md:92-105 vs hooks/session-start-test.sh:36: The no-jq fallback test also fails because the fallback payload in `hooks/session-start.sh:14` uses `hookSpecificOutput` without top-level `priority: 'INFO'`.

## Observations
- Strict, commendable policy against documentation translations (CONTRIBUTING.md:73-76): explicitly articulates why translation PRs are rejected (translation drift, maintenance burden of community corrections), preserving English as the canonical vocabulary.
- Clear separation between repo-level metadata and reusable skill assets: explicitly cautions against copying `AGENTS.md` and `CLAUDE.md` into downstream consumer projects (CONTRIBUTING.md:69-72).

## Context cost
File size: 7,179 bytes (~1,750 tokens). If an agent loads this file and its immediate prerequisite onboarding references (`docs/developer-onboarding.md` at 4,809 bytes, `docs/skill-anatomy.md` at 6,561 bytes, and `evals/README.md` at 8,114 bytes), total context cost is ~26,663 bytes (~6,500 tokens).
```

---

# Work Unit Synthesis & Comparative Analysis

### 1. Verification and §4 Checklist Execution Results
- **Path Existence Check:** All 55 referenced paths across `README.md` and `CONTRIBUTING.md` were checked against the filesystem using `test -e` / `ls`. Every referenced file, directory, and document exists on disk in `sources/addy/`.
- **Script Execution:**
  - Documented command: `bash hooks/session-start-test.sh` (CONTRIBUTING.md:87).
  - Result: Failed with exit code 1 (`Error: expected IMPORTANT priority, got undefined`).
  - Analysis: Complete interface desynchronization between `hooks/session-start.sh` (emitting the Claude Code/Codex JSON format) and `hooks/session-start-test.sh` (verifying legacy fields).
- **Documentation Drift & Contradictions:**
  1. `README.md:24` claims "9 slash commands", but lines 381-383 list `8 slash commands` for `.claude/commands/`, `.gemini/commands/`, and `commands/`. The directories actually hold 9 command files each.
  2. `README.md:220` heading is `## All 24 Skills`, but the text in line 222 states "The pack includes 25 skills total — 24 lifecycle skills plus the `using-agent-skills` meta-skill."
  3. `README.md:29` specifies `/plan`, whereas in `.gemini/commands/` and `commands/` the file is named `planning.toml`.
  4. `CONTRIBUTING.md:86-105` claims `session-start-test.sh` passes and outputs `session-start JSON payload OK`, but it fails on default checkout.

### 2. Conceptual and Lifecycle Synthesis
- Both files demonstrate high maturity in lifecycle engineering: `README.md` establishes the overarching sequence of 6 phases (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`), and `CONTRIBUTING.md` establishes the contribution and testing gates required to maintain that lifecycle.
- Quality gates are institutionalized: skills are defined as workflows with non-negotiable exit criteria and anti-rationalization tables, supported by multi-tiered evals (triggers + behavioral tests).
