# Specification Mining Report: Work Unit `inv-addy-8`

**Unit ID:** `inv-addy-8`  
**Package:** `addy` (`github.com/addyosmani/agent-skills` @ `d2c37ef6225dd8726cdd369a8030307f48592d26`)  
**Assigned Files:** 5 files (49,662 bytes total)  
**Miner:** `spec_miner_inv_addy_8_3`  
**Target Milestone:** Phase 1 Inventory  
**Date:** 2026-09-03  

---

## 1. Executive Summary & Assigned Files Enumeration

Work unit `inv-addy-8` covers five core architectural, contribution, and hook files in the `addy` repository. These files encompass the root public documentation and entry point (`README.md`), the authoritative contribution guidelines and testing rules (`CONTRIBUTING.md`), and the code simplification ignore hook subsystem (`hooks/SIMPLIFY-IGNORE.md`, `hooks/simplify-ignore.sh`, and `hooks/session-start-test.sh`).

| # | Source Path (relative to `sources/addy/`) | Type | Bytes | Lines | Purpose Summary | Target Inventory Slug |
|---|---|---|---|---|---|---|
| 1 | `README.md` | `doc` | 25,223 | 429 | Architectural overview, 6-stage lifecycle model, catalog of 25 skills, 9 slash commands, 4 agent personas, 7 checklists, and 11 platform integration guides. | `readme-md.md` |
| 2 | `CONTRIBUTING.md` | `doc` | 7,179 | 124 | Authoritative contributor rulebook, skill quality bar, frontmatter and eval requirements, and hook testing protocols. | `contributing-md.md` |
| 3 | `hooks/SIMPLIFY-IGNORE.md` | `doc` | 3,863 | 91 | Architecture, setup, comment syntax, crash recovery, and limitations of the block-level simplify-ignore hook. | `hooks-simplify-ignore-md.md` |
| 4 | `hooks/simplify-ignore.sh` | `script` | 12,173 | 303 | Bash hook implementing `PreToolUse Read`, `PostToolUse Edit\|Write`, and `Stop` events with SHA-1 placeholder caching. | `hooks-simplify-ignore-sh.md` |
| 5 | `hooks/session-start-test.sh` | `script` | 1,224 | 47 | Regression test asserting JSON payload structure of the `session-start.sh` hook under jq and non-jq environments. | `hooks-session-start-test-sh.md` |

**Total Source Size:** 49,662 bytes across 5 files.

---

## 2. Target Inventory Paths & Slugs

All inventory entries and unit report must be placed in `docs/analysis/inventory/addy/`:

1. `docs/analysis/inventory/addy/readme-md.md` (for `sources/addy/README.md`)
2. `docs/analysis/inventory/addy/contributing-md.md` (for `sources/addy/CONTRIBUTING.md`)
3. `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md` (for `sources/addy/hooks/SIMPLIFY-IGNORE.md`)
4. `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md` (for `sources/addy/hooks/simplify-ignore.sh`)
5. `docs/analysis/inventory/addy/hooks-session-start-test-sh.md` (for `sources/addy/hooks/session-start-test.sh`)
6. `docs/analysis/inventory/addy/_units/inv-addy-8.md` (Unit report for `inv-addy-8`)

---

## 3. Detailed Required Fields Specification

Per `METHOD.md` rules R1–R6 and `docs/plan/templates/inventory-entry.md`, every required field must be populated. No required field may be left empty; if there is nothing to report, explicitly write `none` (`coverage.ts` enforces this).

### 3.1 `sources/addy/README.md` (`readme-md.md`)

- **Frontmatter:**
  ```yaml
  ---
  package: addy
  path: README.md
  type: doc
  bytes: 25223
  unit: inv-addy-8
  deprecated: false
  in_scope_via: entry point
  ---
  ```
- **Title:** `# README.md`
- **Purpose — required, verbatim:**
  > "Production-grade engineering skills for AI coding agents. Skills encode the workflows, quality gates, and best practices that senior engineers use when building software. These ones are packaged so AI agents follow them consistently across every phase of development." — `README.md:3-5`
- **Design intent — required:**
  Acts as the central front-door, architectural map, and comprehensive index for the entire repository. It establishes the 6-stage lifecycle model (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`), maps the 9 slash commands to their respective development phases, provides an index of all 25 skills (24 lifecycle skills plus `using-agent-skills` meta-skill) with trigger conditions, introduces the 4 specialist agent personas and 7 shared reference checklists, formalizes the 4 skill design tenets (Process not prose, Anti-rationalization, Non-negotiable verification, Progressive disclosure), and specifies setup configurations across 11 distinct AI agent and IDE platforms. Without this file, the package lacks structural cohesion, discovery mechanisms, and cross-platform installation instructions.
- **Phase — required:** `cross-phase` (defines and indexes the entire development lifecycle).
- **Inputs — required:** User intent, engineering requirements, prompt commands, platform configuration files (`.claude/`, `.gemini/`, `.cursor/`, `.opencode/`, etc.).
- **Outputs — required:** `none` (informational and reference document).
- **Invokes — required:**
  - Slash commands:
    - `command /spec — README.md:17, 28`
    - `command /plan — README.md:17, 29`
    - `command /build — README.md:17, 30`
    - `command /test — README.md:17, 31`
    - `command /constraints — README.md:32`
    - `command /review — README.md:17, 33`
    - `command /webperf — README.md:34`
    - `command /code-simplify — README.md:35`
    - `command /ship — README.md:17, 36`
  - Skills:
    - `skill using-agent-skills — README.md:228`
    - `skill interview-me — README.md:234`
    - `skill idea-refine — README.md:235`
    - `skill spec-driven-development — README.md:236`
    - `skill constraint-driven-development — README.md:237`
    - `skill planning-and-task-breakdown — README.md:243`
    - `skill incremental-implementation — README.md:249`
    - `skill test-driven-development — README.md:250`
    - `skill context-engineering — README.md:251`
    - `skill source-driven-development — README.md:252`
    - `skill doubt-driven-development — README.md:253`
    - `skill frontend-ui-engineering — README.md:254`
    - `skill api-and-interface-design — README.md:255`
    - `skill browser-testing-with-devtools — README.md:261`
    - `skill debugging-and-error-recovery — README.md:262`
    - `skill code-review-and-quality — README.md:268`
    - `skill code-simplification — README.md:269`
    - `skill security-and-hardening — README.md:270`
    - `skill performance-optimization — README.md:271`
    - `skill git-workflow-and-versioning — README.md:277`
    - `skill ci-cd-and-automation — README.md:278`
    - `skill deprecation-and-migration — README.md:279`
    - `skill documentation-and-adrs — README.md:280`
    - `skill observability-and-instrumentation — README.md:281`
    - `skill shipping-and-launch — README.md:282`
  - Agent Personas:
    - `agent code-reviewer — README.md:292`
    - `agent test-engineer — README.md:293`
    - `agent security-auditor — README.md:294`
    - `agent web-performance-auditor — README.md:295`
  - Reference Checklists:
    - `reference definition-of-done.md — README.md:307`
    - `reference testing-patterns.md — README.md:308`
    - `reference security-checklist.md — README.md:309`
    - `reference performance-checklist.md — README.md:310`
    - `reference accessibility-checklist.md — README.md:311`
    - `reference observability-checklist.md — README.md:312`
    - `reference orchestration-patterns.md — README.md:313`
  - Documentation Guides:
    - `doc docs/cursor-setup.md — README.md:103`
    - `doc docs/antigravity-setup.md — README.md:110`
    - `doc docs/gemini-cli-setup.md — README.md:130`
    - `doc docs/windsurf-setup.md — README.md:149`
    - `doc docs/opencode-setup.md — README.md:158`
    - `doc docs/copilot-setup.md — README.md:165`
    - `doc docs/codex-setup.md — README.md:184`
    - `doc docs/commandcode-setup.md — README.md:199`
    - `doc docs/getting-started.md — README.md:206`
    - `doc docs/adoption-guide.md — README.md:216`
    - `doc docs/agents.md — README.md:297`
    - `doc docs/comparison.md — README.md:402`
    - `doc docs/skill-anatomy.md — README.md:410`
    - `doc CONTRIBUTING.md — README.md:410`
- **Invoked by — required:** `CONTRIBUTING.md:13` ("Browse the skill list in the README and skim skills/..."); repository entry point.
- **Concepts named — required, verbatim:**
  - `DEFINE` — `README.md:12` — defined here
  - `PLAN` — `README.md:12` — defined here
  - `BUILD` — `README.md:12` — defined here
  - `VERIFY` — `README.md:12` — defined here
  - `REVIEW` — `README.md:12` — defined here
  - `SHIP` — `README.md:12` — defined here
  - `/build auto` — `README.md:38` — defined here
  - `Spec before code` — `README.md:28` — defined here
  - `Small, atomic tasks` — `README.md:29` — defined here
  - `One slice at a time` — `README.md:30` — defined here
  - `Tests are proof` — `README.md:31` — defined here
  - `Decide it once, enforce it everywhere` — `README.md:32` — defined here
  - `Improve code health` — `README.md:33` — defined here
  - `Measure before you optimize` — `README.md:34` — defined here
  - `Clarity over cleverness` — `README.md:35` — defined here
  - `Faster is safer` — `README.md:36` — defined here
  - `Process, not prose` — `README.md:341` — defined here
  - `Anti-rationalization` — `README.md:342` — defined here
  - `Verification is non-negotiable` — `README.md:343` — defined here
  - `Progressive disclosure` — `README.md:344` — defined here
  - `CLAIM → EXTRACT → DOUBT → RECONCILE → STOP` — `README.md:253` — defined here
  - `Five-step triage` — `README.md:262` — defined here
  - `skills CLI` — `README.md:46` — used here
  - `Red-Green-Refactor` — `README.md:250` — used here
  - `test pyramid (80/15/5)` — `README.md:250` — used here
  - `test sizes` — `README.md:250` — used here
  - `DAMP over DRY` — `README.md:250` — used here
  - `Beyonce Rule` — `README.md:250` — used here
  - `thin vertical slices` — `README.md:249` — used here
  - `feature flags` — `README.md:249` — used here
  - `safe defaults` — `README.md:249` — used here
  - `rollback-friendly changes` — `README.md:249` — used here
  - `context packing` — `README.md:251` — used here
  - `MCP integrations` — `README.md:251` — used here
  - `WCAG 2.1 AA accessibility` — `README.md:254` — used here
  - `Contract-first design` — `README.md:255` — used here
  - `Hyrum's Law` — `README.md:255` — used here
  - `One-Version Rule` — `README.md:255` — used here
  - `Stop-the-line rule` — `README.md:262` — used here
  - `Five-axis review` — `README.md:268` — used here
  - `change sizing (~100 lines)` — `README.md:268` — used here
  - `severity labels (Nit/Optional/FYI)` — `README.md:268` — used here
  - `Chesterton's Fence` — `README.md:269` — used here
  - `Rule of 500` — `README.md:269` — used here
  - `OWASP Top 10 prevention` — `README.md:270` — used here
  - `three-tier boundary system` — `README.md:270` — used here
  - `Core Web Vitals targets` — `README.md:271` — used here
  - `bundle analysis` — `README.md:271` — used here
  - `Trunk-based development` — `README.md:277` — used here
  - `commit-as-save-point pattern` — `README.md:277` — used here
  - `Shift Left` — `README.md:278` — used here
  - `quality gate pipelines` — `README.md:278` — used here
  - `Code-as-liability mindset` — `README.md:279` — used here
  - `compulsory vs advisory deprecation` — `README.md:279` — used here
  - `zombie code removal` — `README.md:279` — used here
  - `Architecture Decision Records` — `README.md:280` — used here
  - `RED metrics` — `README.md:281` — used here
  - `USE metrics` — `README.md:312` — used here
  - `OpenTelemetry tracing` — `README.md:281` — used here
  - `symptom-based alerting` — `README.md:281` — used here
  - `staged rollouts` — `README.md:282` — used here
  - `rollback procedures` — `README.md:282` — used here
  - `Prove-It pattern` — `README.md:293` — used here
  - `Quick/Deep modes` — `README.md:295` — used here
  - `metric-honesty rule` — `README.md:295` — used here
  - `Definition of Done` — `README.md:307` — used here
- **Structure:**
  - `# Agent Skills`
  - `## Commands`
  - `## Quick Start`
  - `## Adoption`
  - `## All 24 Skills`
    - `### Meta - Discover which skill applies`
    - `### Define - Clarify what to build`
    - `### Plan - Break it down`
    - `### Build - Write the code`
    - `### Verify - Prove it works`
    - `### Review - Quality gates before merge`
    - `### Ship - Deploy with confidence`
  - `## Agent Personas`
  - `## Reference Checklists`
  - `## How Skills Work`
  - `## Project Structure`
  - `## Why Agent Skills?`
  - `## How it compares`
  - `## Contributing`
  - `## Team`
  - `## License`
- **Scripts — required:** `none`
- **Defects — required:**
  - `doc-drift` / `internal-contradiction`: `README.md:24` asserts "9 slash commands that map to the development lifecycle" and lists 9 commands (`/spec`, `/plan`, `/build`, `/test`, `/constraints`, `/review`, `/webperf`, `/code-simplify`, `/ship`) in lines 27-36. However, the Project Structure tree in lines 381-383 annotates `.claude/commands/`, `.gemini/commands/`, and `commands/` as each holding "8 slash commands".
  - `doc-drift` / `internal-contradiction`: `README.md:220` heading states `## All 24 Skills`, whereas line 222 states "The pack includes 25 skills total — 24 lifecycle skills plus the using-agent-skills meta-skill."
  - `cross-file-contradiction`: `README.md:268` defines review severity labels as `Nit/Optional/FYI`. In contrast, `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` define `Critical`, `Required`, `Optional`, `Nit`, while `.claude/commands/review.md:15` defines `Critical`, `Important`, `Suggestion`.
- **Observations:** Explicitly documents issue `#361` (lines 61-66) where single-skill installations via `npx skills add` do not copy root `references/`, leading to runtime broken links unless the entire repo is installed.
- **Context cost:** 25,223 bytes (~6,300 tokens).

---

### 3.2 `sources/addy/CONTRIBUTING.md` (`contributing-md.md`)

- **Frontmatter:**
  ```yaml
  ---
  package: addy
  path: CONTRIBUTING.md
  type: doc
  bytes: 7179
  unit: inv-addy-8
  deprecated: false
  in_scope_via: entry point
  ---
  ```
- **Title:** `# CONTRIBUTING.md`
- **Purpose — required, verbatim:**
  > "Thanks for your interest in contributing! This project is a collection of production-grade engineering skills for AI coding agents. New here? docs/developer-onboarding.md is a guided tour of how the repo fits together (the five layers, the verification loop, and the contribution paths) and tells you when to read this document, skill-anatomy.md, and evals/README.md. This file is the authoritative rulebook; the onboarding guide is the map." — `CONTRIBUTING.md:3-5`
- **Design intent — required:**
  Establishes the authoritative rules, quality standards, and validation workflows for contributing skills, evals, and hooks to the repository. It mandates that every new skill conform to the 4 quality criteria (Specific, Verifiable, Battle-tested, Minimal), requires valid YAML frontmatter and comprehensive eval case suites (with trigger counts and fixture backing), forbids antipatterns (skill-to-skill duplication, colocated reference material, empty scripts directories, documentation translations), and mandates regression testing for session hooks. Without this file, external contributions and internal refactorings would degrade repo consistency, bypass CI requirements, and cause skill drift.
- **Phase — required:** `cross-phase` (developer governance spanning all skills and tools).
- **Inputs — required:** Contributor PRs, proposed skill directories, eval suite configurations, shell test environments.
- **Outputs — required:** `none` (governance rules).
- **Invokes — required:**
  - `doc docs/developer-onboarding.md — CONTRIBUTING.md:5`
  - `doc docs/skill-anatomy.md — CONTRIBUTING.md:5, 15, 23`
  - `doc evals/README.md — CONTRIBUTING.md:5, 42`
  - `doc README.md — CONTRIBUTING.md:13`
  - `hook hooks/session-start.sh — CONTRIBUTING.md:79, 83`
  - `script hooks/session-start-test.sh — CONTRIBUTING.md:79, 87, 99`
  - `skill skills/using-agent-skills/SKILL.md — CONTRIBUTING.md:84`
- **Invoked by — required:**
  - `README.md:410` ("See docs/skill-anatomy.md for the format specification and CONTRIBUTING.md for guidelines.")
  - `.claude/rules/skills-contributing.md:1`
- **Concepts named — required, verbatim:**
  - `authoritative rulebook` — `CONTRIBUTING.md:5` — defined here
  - `Skill Quality Bar` (`Specific`, `Verifiable`, `Battle-tested`, `Minimal`) — `CONTRIBUTING.md:27-35` — defined here
  - `kebab-case name` — `CONTRIBUTING.md:22` — defined here
  - `YAML frontmatter` — `CONTRIBUTING.md:24` — used here
  - `standard anatomy` — `CONTRIBUTING.md:44-51` — defined here
  - `Repo-scoped files` — `CONTRIBUTING.md:69` — defined here
  - `session-start hook` — `CONTRIBUTING.md:79` — used here
  - `no-jq fallback` — `CONTRIBUTING.md:92` — defined here
  - `Skill gap` — `CONTRIBUTING.md:116` — used here
  - `eval case` — `CONTRIBUTING.md:42` — used here
  - `behavioral eval` — `CONTRIBUTING.md:42` — used here
  - `execution evals` — `CONTRIBUTING.md:42` — used here
  - `dialogue eval` — `CONTRIBUTING.md:42` — used here
  - `five layers` — `CONTRIBUTING.md:5` — used here
  - `verification loop` — `CONTRIBUTING.md:5` — used here
- **Structure:**
  - `# Contributing to Agent Skills`
  - `## Adding a New Skill`
    - `### Before proposing a new skill`
    - `### Creating the skill`
    - `### Skill Quality Bar`
    - `### Structure`
    - `### What Not to Do`
  - `## Modifying Existing Skills`
  - `## Repo-scoped files`
  - `## Translations`
  - `## Testing Hooks`
    - `### Reproducing the no-jq fallback`
  - `## Reporting Issues`
  - `## License`
- **Scripts — required:**
  - path: `hooks/session-start-test.sh`
  - language: `bash` + `node` (47 lines)
  - documented invocation: `bash hooks/session-start-test.sh` — `CONTRIBUTING.md:87`
  - executed: yes
  - actual command run: `cd sources/addy && bash hooks/session-start-test.sh`
  - actual exit code: `1`
  - actual stdout/stderr: `Error: expected IMPORTANT priority, got undefined`
  - documented exit codes: `exits non-zero on any assertion failure` — `CONTRIBUTING.md:90`
  - for validators/gates: can it exit non-zero? Yes. Does it fail on default branch? YES, it ALWAYS fails.
  - does output match claims: NO. Claims `session-start JSON payload OK` (`CONTRIBUTING.md:90`), but fails with exit code 1.
- **Defects — required:**
  - `doc-drift` / `always-failing-gate`: `CONTRIBUTING.md:87-90` specifies running `bash hooks/session-start-test.sh` with expected output `session-start JSON payload OK`. In reality, the command fails with exit code 1 (`Error: expected IMPORTANT priority, got undefined`) because `session-start.sh` was updated to output Claude Code's `hookSpecificOutput` envelope while `session-start-test.sh` still expects deprecated root-level `priority: "IMPORTANT"`.
  - `doc-drift`: `CONTRIBUTING.md:98-99` documents testing the no-jq fallback via `PATH=... bash hooks/session-start-test.sh` expecting fallback guidance. This invocation also fails with exit code 1 because the test expects root `priority: "INFO"`.
- **Observations:** Explicitly documents that `AGENTS.md` and `CLAUDE.md` at repo root are repo-scoped and should never be copied into user projects (`CONTRIBUTING.md:69-72`). Prohibits colocating references inside individual skill directories (`CONTRIBUTING.md:61`).
- **Context cost:** 7,179 bytes (~1,800 tokens).

---

### 3.3 `sources/addy/hooks/SIMPLIFY-IGNORE.md` (`hooks-simplify-ignore-md.md`)

- **Frontmatter:**
  ```yaml
  ---
  package: addy
  path: hooks/SIMPLIFY-IGNORE.md
  type: doc
  bytes: 3863
  unit: inv-addy-8
  deprecated: false
  in_scope_via: hooks/simplify-ignore.sh
  ---
  ```
- **Title:** `# SIMPLIFY-IGNORE.md`
- **Purpose — required, verbatim:**
  > "Block-level protection for /code-simplify. Mark code that should never be simplified — the model won't see it." — `hooks/SIMPLIFY-IGNORE.md:3`
- **Design intent — required:**
  Provides the architectural explanation, configuration examples, and operating manual for the `simplify-ignore.sh` hook. It solves the problem of AI coding agents over-simplifying performance-critical, hardware-specific, or delicate code during automated refactoring sessions by specifying comment-boundary conventions (`simplify-ignore-start` / `simplify-ignore-end`), demonstrating how Claude Code events (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`) automate placeholder substitution, detailing manual crash recovery, and documenting boundary limitations.
- **Phase — required:** `addy:Review` (supports the `/code-simplify` command and `code-simplification` skill).
- **Inputs — required:** Source files containing annotation comments, `.claude/settings.json` hook configurations.
- **Outputs — required:**
  - Files in `.claude/.simplify-ignore-cache/` (`.bak`, `.path`, `.block.<h>`, `.reason.<h>`, `.prefix.<h>`, `.suffix.<h>`, `.lock`).
  - Restored source files or `.recovered` backup files upon session exit.
- **Invokes — required:**
  - `script hooks/simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27, 33, 38, 76`
  - `command /code-simplify — hooks/SIMPLIFY-IGNORE.md:3, 45`
- **Invoked by — required:** `hooks/simplify-ignore.sh:179` (self-reference bypass guard).
- **Concepts named — required, verbatim:**
  - `Block-level protection` — `hooks/SIMPLIFY-IGNORE.md:3` — defined here
  - `/code-simplify` — `hooks/SIMPLIFY-IGNORE.md:3` — used here
  - `simplify-ignore-start` — `hooks/SIMPLIFY-IGNORE.md:10, 64` — defined here
  - `simplify-ignore-end` — `hooks/SIMPLIFY-IGNORE.md:16, 66` — defined here
  - `BLOCK_<hash> placeholder` — `hooks/SIMPLIFY-IGNORE.md:45, 55` — defined here
  - `PreToolUse Read` — `hooks/SIMPLIFY-IGNORE.md:24, 55` — used here
  - `PostToolUse Edit|Write` — `hooks/SIMPLIFY-IGNORE.md:30, 56` — used here
  - `Stop hook` — `hooks/SIMPLIFY-IGNORE.md:36, 57` — used here
  - `content-hashed round-trip` — `hooks/SIMPLIFY-IGNORE.md:59` — defined here
  - `Crash recovery` — `hooks/SIMPLIFY-IGNORE.md:71` — defined here
  - `Single-line block limitation` — `hooks/SIMPLIFY-IGNORE.md:83` — defined here
  - `Progressive fallback expansion` — `hooks/SIMPLIFY-IGNORE.md:85` — defined here
  - `.recovered file pattern` — `hooks/SIMPLIFY-IGNORE.md:86` — defined here
- **Structure:**
  - `# simplify-ignore hook`
  - `## Setup`
  - `## How it works`
  - `## Annotation syntax`
  - `## Crash recovery`
  - `## Known limitations`
  - `## Requirements`
- **Scripts — required:**
  - path: `hooks/simplify-ignore.sh`
  - language: `bash` (303 lines)
  - documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` — `hooks/SIMPLIFY-IGNORE.md:76`
  - executed: yes
  - actual command run: `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh`
  - actual exit code: `0`
  - actual stdout/stderr: empty
  - documented exit codes: `none` explicitly stated; restores files and cleans cache.
  - does output match claims: yes, clean execution.
- **Defects — required:** `none`
- **Observations:** Cautions that `.claude/.simplify-ignore-cache/` must be included in `.gitignore` to avoid checking temporary block caches into version control. Documents graceful handling of single-line vs multi-line blocks and HTML comment syntax (`<!-- ... -->`).
- **Context cost:** 3,863 bytes (~960 tokens).

---

### 3.4 `sources/addy/hooks/simplify-ignore.sh` (`hooks-simplify-ignore-sh.md`)

- **Frontmatter:**
  ```yaml
  ---
  package: addy
  path: hooks/simplify-ignore.sh
  type: script
  bytes: 12173
  unit: inv-addy-8
  deprecated: false
  in_scope_via: hooks/SIMPLIFY-IGNORE.md
  ---
  ```
- **Title:** `# simplify-ignore.sh`
- **Purpose — required, verbatim:**
  > "simplify-ignore.sh — Hook for Read (PreToolUse), Edit|Write (PostToolUse), Stop. PreToolUse Read → backs up file, replaces blocks with BLOCK_<hash> in-place. PostToolUse Edit → expands placeholders, re-filters so file stays hidden. PostToolUse Write → expands placeholders, re-filters so file stays hidden. Stop → restores real file content from backup. The file on disk ALWAYS has placeholders while the session is active. The real content (with model's changes applied) lives in the backup." — `hooks/simplify-ignore.sh:2-10`
- **Design intent — required:**
  Implements the runtime shell hook that intercepts file reads and writes in Claude Code to ensure designated code blocks remain hidden from the AI model while preserving full file validity on disk. On `PreToolUse Read`, it parses the target file, stores blocks in a project-scoped cache (`.claude/.simplify-ignore-cache/`), and substitutes them with SHA-1 hash placeholders (`BLOCK_<hash>`). On `PostToolUse Edit|Write`, it expands the placeholders back to original block content, merges the model's edits, updates the backup, and re-filters the disk file. On `Stop` (or empty input crash recovery), it restores the original file content from the backup, safely saving moved/deleted files as `.recovered`.
- **Phase — required:** `addy:Review`
- **Inputs — required:**
  - Standard input: JSON payload from Claude Code containing `tool_name` (`Read`, `Edit`, `Write`) and `tool_input.file_path`, or `{}` on `Stop` / manual crash recovery.
  - Source files annotated with `simplify-ignore-start` and `simplify-ignore-end`.
  - Cache files in `.claude/.simplify-ignore-cache/`.
- **Outputs — required:**
  - Filtered source files containing `BLOCK_<hash>` placeholders during active agent reads.
  - Restored source files upon session completion.
  - Temporary backup files (`.bak`, `.path`, `.block.<h>`, `.reason.<h>`, `.prefix.<h>`, `.suffix.<h>`, `.lock`).
  - `.recovered` backup files if target files were deleted or renamed.
- **Invokes — required:**
  - `tool jq — hooks/simplify-ignore.sh:16, 26, 30`
  - `tool shasum / sha1sum — hooks/simplify-ignore.sh:39, 40`
  - `tool perl — hooks/simplify-ignore.sh:137, 269`
- **Invoked by — required:**
  - Claude Code hook configuration — `hooks/SIMPLIFY-IGNORE.md:27, 33, 38`
  - Manual recovery — `hooks/SIMPLIFY-IGNORE.md:76`
  - Test harness — `hooks/simplify-ignore-test.sh:18`
- **Concepts named — required, verbatim:**
  - `simplify-ignore.sh` — `hooks/simplify-ignore.sh:2` — defined here
  - `PreToolUse Read` — `hooks/simplify-ignore.sh:4, 177` — defined here
  - `PostToolUse Edit` — `hooks/simplify-ignore.sh:5, 219` — defined here
  - `PostToolUse Write` — `hooks/simplify-ignore.sh:6, 219` — defined here
  - `Stop` — `hooks/simplify-ignore.sh:7, 144` — defined here
  - `BLOCK_<hash>` — `hooks/simplify-ignore.sh:4, 44, 90, 117` — defined here
  - `simplify-ignore-cache` — `hooks/simplify-ignore.sh:20` — defined here
  - `file_id` — `hooks/simplify-ignore.sh:43` — defined here
  - `block_hash` — `hooks/simplify-ignore.sh:44` — defined here
  - `escape_glob` — `hooks/simplify-ignore.sh:47` — defined here
  - `filter_file` — `hooks/simplify-ignore.sh:59` — defined here
  - `atomic lock` (`${ID}.lock`) — `hooks/simplify-ignore.sh:189-199` — defined here
  - `progressive fallback matching` — `hooks/simplify-ignore.sh:248-259` — defined here
  - `.recovered` — `hooks/simplify-ignore.sh:160` — defined here
- **Structure:**
  - Header, event summary, and dependency declaration (lines 1-12)
  - Strict mode and `jq` check (lines 14-18)
  - Cache location resolution and hook input parsing (lines 20-36)
  - Hashing, identifier, and glob escaping utilities (`hash_cmd`, `file_id`, `block_hash`, `escape_glob`) (lines 38-54)
  - Core filter routine (`filter_file`) (lines 56-142)
  - `Stop` hook event handler (cache restoration & orphan lock cleanup) (lines 144-172)
  - `PreToolUse Read` event handler (backup & in-place filtering) (lines 176-216)
  - `PostToolUse Edit|Write` event handler (expansion, re-backup, & re-filtering) (lines 218-302)
- **Scripts — required:**
  - path: `hooks/simplify-ignore.sh`
  - language: `bash` (303 lines)
  - documented invocation: `echo '{}' | bash hooks/simplify-ignore.sh` (`hooks/SIMPLIFY-IGNORE.md:76`) and `bash hooks/simplify-ignore-test.sh`
  - executed: yes
  - actual command run: `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh` (Exit code: `0`)
  - test command run: `cd sources/addy && bash hooks/simplify-ignore-test.sh` (Exit code: `0`, 21 tests pass)
  - documented exit codes: `exit 1` on missing `jq` (`hooks/simplify-ignore.sh:17`) or missing `shasum`/`sha1sum` (`hooks/simplify-ignore.sh:41`); `exit 0` on clean execution and unhandled paths.
  - for validators/gates: not a validator, but exits non-zero on missing system dependencies.
  - does output match claims: yes.
- **Defects — required:** `none`
- **Observations:** High-quality defensive bash script: incorporates macOS Bash 3.2 glob compatibility (`escape_glob`), directory-based atomic locking (`mkdir ${ID}.lock`) with 60-second stale lock reclamation, inode preservation via `cat >`, and trailing-newline preservation via `perl -pe 'chomp if eof'`.
- **Context cost:** 12,173 bytes (~3,050 tokens).

---

### 3.5 `sources/addy/hooks/session-start-test.sh` (`hooks-session-start-test-sh.md`)

- **Frontmatter:**
  ```yaml
  ---
  package: addy
  path: hooks/session-start-test.sh
  type: script
  bytes: 1224
  unit: inv-addy-8
  deprecated: false
  in_scope_via: CONTRIBUTING.md
  ---
  ```
- **Title:** `# session-start-test.sh`
- **Purpose — required, verbatim:**
  > "session-start-test.sh - Tests for the SessionStart hook JSON payload" — `hooks/session-start-test.sh:2`
- **Design intent — required:**
  Implements an automated test suite verifying the JSON payload format emitted by `hooks/session-start.sh`. It runs the hook script, saves the payload to a temporary file via `mktemp`, and evaluates assertions in an inline Node.js runner to verify that the payload contains appropriate priority ratings, startup preface strings, and the injected content of `skills/using-agent-skills/SKILL.md` under both `jq`-enabled and fallback execution modes.
- **Phase — required:** `cross-phase` (hook verification test).
- **Inputs — required:** Output of `bash hooks/session-start.sh`, environment variables `HAS_JQ` and `PAYLOAD_PATH`.
- **Outputs — required:** Standard output `session-start JSON payload OK` on passing assertions; exit code 0 or 1.
- **Invokes — required:**
  - `script hooks/session-start.sh — hooks/session-start-test.sh:14`
  - `runtime node — hooks/session-start-test.sh:17`
  - `tool jq — hooks/session-start-test.sh:10`
- **Invoked by — required:** `CONTRIBUTING.md:87, 99` (documented pre-PR test command).
- **Concepts named — required, verbatim:**
  - `session-start-test.sh` — `hooks/session-start-test.sh:2` — defined here
  - `SessionStart hook` — `hooks/session-start-test.sh:2` — defined here
  - `JSON payload test` — `hooks/session-start-test.sh:2` — defined here
  - `HAS_JQ` — `hooks/session-start-test.sh:17` — defined here
  - `PAYLOAD_PATH` — `hooks/session-start-test.sh:17` — defined here
  - `IMPORTANT priority assertion` — `hooks/session-start-test.sh:24` — defined here
  - `INFO priority fallback assertion` — `hooks/session-start-test.sh:36` — defined here
- **Structure:**
  - Strict mode and environment initialization (`set -euo pipefail`) (lines 1-4)
  - Tempfile creation and trap registration (lines 6-7)
  - `jq` detection logic (lines 9-12)
  - Hook execution and stdout capture (lines 14-15)
  - Node.js inline test assertions (lines 17-46)
- **Scripts — required:**
  - path: `hooks/session-start-test.sh`
  - language: `bash` + `node` (47 lines)
  - documented invocation: `bash hooks/session-start-test.sh` — `CONTRIBUTING.md:87`
  - executed: yes
  - actual command run: `cd sources/addy && bash hooks/session-start-test.sh`
  - actual exit code: `1`
  - actual stdout/stderr: `Error: expected IMPORTANT priority, got undefined`
  - documented exit codes: `exits non-zero on any assertion failure` — `CONTRIBUTING.md:90`
  - for validators/gates: can it exit non-zero? YES. Does it fail on default branch? YES, it ALWAYS fails on the repository's own default branch!
  - does output match claims: NO. Claims `session-start JSON payload OK` (`CONTRIBUTING.md:90`), but throws an unhandled error and exits 1.
- **Defects — required:**
  - `script-bug` / `always-failing-gate`: `hooks/session-start-test.sh:24-34` asserts `payload.priority === 'IMPORTANT'` and checks `payload.message`. However, `hooks/session-start.sh:21-25` was updated to output Claude Code's standard `SessionStart` envelope:
    `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`.
    Because `payload.priority` and `payload.message` do not exist on the root object, the script throws `Error: expected IMPORTANT priority, got undefined` and exits 1.
  - `script-bug`: The fallback branch (`hasJq === false`, lines 36-42) asserts `payload.priority === 'INFO'` and `payload.message.includes('jq is required')`. Because `hooks/session-start.sh:14` also emits the `hookSpecificOutput` envelope (`{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "agent-skills: jq is required..."}}`), the fallback assertion also fails with `expected INFO priority when jq is missing, got undefined`.
- **Observations:** Documents a concrete upstream migration drift between tool versions: Claude Code changed hook payload standards, `hooks/session-start.sh` was updated to match the new envelope, but `hooks/session-start-test.sh` and `CONTRIBUTING.md` were left with the legacy schema.
- **Context cost:** 1,224 bytes (~310 tokens).

---

## 4. Script Execution & Verification Requirements

Per `ORIGINAL_REQUEST.md` R2 and `METHOD.md` §4 / R2, the Worker must execute every script in scope and record actual outputs, exit codes, and comparisons.

The Worker must execute the following scripts from within `sources/addy/`:

### 4.1 Required Primary Executions for `inv-addy-8` Scope

1. **`hooks/session-start-test.sh`**
   - Command: `cd sources/addy && bash hooks/session-start-test.sh`
   - Actual exit code: `1`
   - Observed Output:
     ```
     [stdin]:8
         throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
         ^

     Error: expected IMPORTANT priority, got undefined
         at [stdin]:8:11
         ...
     ```
   - Match Documentation: NO (`CONTRIBUTING.md:90` claims output is `session-start JSON payload OK`).
   - Defect Classification: `script-bug` / `always-failing-gate` / `doc-drift`.

2. **`hooks/simplify-ignore.sh` (Crash Recovery Invocation)**
   - Command: `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh`
   - Actual exit code: `0`
   - Observed Output: `""` (clean stdout/stderr).
   - Match Documentation: YES (`hooks/SIMPLIFY-IGNORE.md:76`).

3. **`hooks/simplify-ignore-test.sh` (Test suite for `simplify-ignore.sh`)**
   - Command: `cd sources/addy && bash hooks/simplify-ignore-test.sh`
   - Actual exit code: `0`
   - Observed Output: `Results: 21 passed, 0 failed` (across all 10 test cases including single-line, multi-line, reason tags, unclosed blocks, HTML syntax, and malformed JSON).
   - Match Documentation: YES.

4. **`hooks/session-start.sh` (Direct invocation to verify payload discrepancy)**
   - Command: `cd sources/addy && bash hooks/session-start.sh`
   - Actual exit code: `0`
   - Observed Output: Emits JSON object:
     `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n..."}}`
   - Comparison: Confirms envelope shape mismatch with `session-start-test.sh`.

### 4.2 Standard Addy Repository Validator Scripts

The Worker should also run the standard suite of repository validators to ensure baseline repository health:

1. `cd sources/addy && bun scripts/validate-skills.js` → Exit code `0` (25 skills checked — 0 error(s), 0 warning(s) — PASSED)
2. `cd sources/addy && bun scripts/validate-commands.js` → Exit code `0` (9 commands checked — 0 error(s) — PASSED)
3. `cd sources/addy && bun scripts/validate-reference-links.js` → Exit code `0` (25 skills checked — 0 error(s) — PASSED)
4. `cd sources/addy && bun scripts/validate-artifact-paths.js` → Exit code `0` (7 files checked — 0 error(s) — PASSED)
5. `cd sources/addy && bun scripts/validate-versions.js` → Exit code `0` (All plugin manifests use version 0.6.8)
6. `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js ./scripts/validate-commands-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-versions-test.js ./scripts/lib/skill-lint-test.js ./scripts/run-evals-test.js` → Exit code `0` (43 pass, 0 fail)

---

## 5. Manifest Update Requirements

In `docs/analysis/manifest/addy.md`, exactly 5 rows must be toggled from `[ ]` to `[x]`:

| Manifest Line | File Path in Manifest | Before | After |
|---|---|---|---|
| 125 | `README.md` | `\| README.md \| 25223 \| doc \| [ ] \|` | `\| README.md \| 25223 \| doc \| [x] \|` |
| 126 | `CONTRIBUTING.md` | `\| CONTRIBUTING.md \| 7179 \| doc \| [ ] \|` | `\| CONTRIBUTING.md \| 7179 \| doc \| [x] \|` |
| 127 | `hooks/SIMPLIFY-IGNORE.md` | `\| hooks/SIMPLIFY-IGNORE.md \| 3863 \| doc \| [ ] \|` | `\| hooks/SIMPLIFY-IGNORE.md \| 3863 \| doc \| [x] \|` |
| 128 | `hooks/simplify-ignore.sh` | `\| hooks/simplify-ignore.sh \| 12173 \| file \| [ ] \|` | `\| hooks/simplify-ignore.sh \| 12173 \| file \| [x] \|` |
| 129 | `hooks/session-start-test.sh` | `\| hooks/session-start-test.sh \| 1224 \| file \| [ ] \|` | `\| hooks/session-start-test.sh \| 1224 \| file \| [x] \|` |

---

## 6. `STATE.md` & Coverage Check Requirements

### 6.1 `STATE.md` Updates

1. **Work Units Table (line 72):**
   - Before: `| inv-addy-8 | addy | 5 | 49662 | in-progress | 006 | — |`
   - After: `| inv-addy-8 | addy | 5 | 49662 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-8.md |`
2. **Counts Table:**
   - Increments `Rows inventoried (addy / matt / rjm)`:
     If baseline before batch was `111 / 0 / 0`, `inv-addy-8` adds 5 files (to `116 / 0 / 0`, or cumulative with other completed units in session 006).

### 6.2 Anti-Drift Verification Scripts

The Worker must verify:
1. `bun scripts/synthesis/coverage.ts`:
   - Decreases unchecked rows by 5.
   - `Empty required inventory fields` must be `0`.
2. `bun scripts/synthesis/glossary-lint.ts`:
   - Must report `Glossary lint: clean`.

---

## 7. Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|---|---|---|---|---|---|---|
| 1 | Lifecycle | 6-Stage Lifecycle Model | Aligned development stages: `DEFINE` → `PLAN` → `BUILD` → `VERIFY` → `REVIEW` → `SHIP` | Developer prompt / task | Lifecycle artifacts | None (conceptual framework) | `README.md:12-18` |
| 2 | Command | `/build auto` Autonomous Pipeline | Generates plan and implements all tasks in a single approved pass, pausing on risky steps | Spec / approval | Built code, commits | Pauses on failures | `README.md:38` |
| 3 | Quality | 9 Lifecycle Principles | Guiding rules for each lifecycle phase (e.g., "Spec before code", "Tests are proof", "Faster is safer") | Software tasks | Code artifacts | None | `README.md:27-36` |
| 4 | Architecture | 4 Skill Anatomy Tenets | Process not prose, Anti-rationalization, Non-negotiable verification, Progressive disclosure | Skill authoring | Structured `SKILL.md` | Non-conformity flagged by linter | `README.md:340-345` |
| 5 | Governance | Skill Quality Bar | Criteria for new skills: Specific, Verifiable, Battle-tested, Minimal | PR submissions | Validated skills | PR rejection / triage | `CONTRIBUTING.md:29-35` |
| 6 | Governance | Repo-scoped File Boundary | `AGENTS.md` and `CLAUDE.md` at root apply only to repo development, not for user project copying | Repository configuration | Agent instructions | None | `CONTRIBUTING.md:69-72` |
| 7 | Testing | Eval Case Requirements | Mandatory 3 positive triggers, 2 negative triggers (with owner), and 1 behavioral eval per skill | `evals/cases/<name>.json` | Verified eval suite | CI linter failure | `CONTRIBUTING.md:42` |
| 8 | Hook | Simplify-Ignore Block Redaction | Comment-boundary based dynamic redaction of code blocks via content-hashed placeholders (`BLOCK_<hash>`) | Source comments | `BLOCK_<hash>` placeholders | Unclosed block warning | `hooks/SIMPLIFY-IGNORE.md:1-91` |
| 9 | Hook | PreToolUse Read Interception | Replaces annotated code blocks with placeholders in-place before model reads | Claude Code `Read` tool | Filtered file on disk, backup in cache | Missing jq/shasum exits 1 | `hooks/simplify-ignore.sh:176-216` |
| 10 | Hook | PostToolUse Edit/Write Expansion | Re-expands placeholders to real code, applies model changes, and re-filters in-place | Claude Code `Edit`/`Write` | Expanded file, updated backup | Fuzzy fallback warning on modified placeholder | `hooks/simplify-ignore.sh:218-302` |
| 11 | Hook | Stop / Crash Recovery | Restores all files from cache backups when session ends or on `echo '{}' \| bash simplify-ignore.sh` | Hook exit / empty stdin | Restored files or `.recovered` backups | Deleted original recovered as `.recovered` | `hooks/simplify-ignore.sh:144-172` |
| 12 | Hook | SessionStart Meta-Skill Injection | Automatically injects `using-agent-skills` into Claude Code / Codex session start payloads | SessionStart event | JSON envelope with additionalContext | Missing jq returns fallback INFO payload | `hooks/session-start.sh:1-29` |
| 13 | Hook | SessionStart Hook Regression Test | Automated validation of `session-start.sh` JSON payload across jq and non-jq environments | Hook payload stdout | Assertion result (`session-start JSON payload OK`) | Throws unhandled Error and exits 1 on mismatch | `hooks/session-start-test.sh:1-47` |

---

## 8. Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---|---|---|
| 1 | `session-start-test.sh` | Standard execution with `jq` in PATH | Exits 1 with `Error: expected IMPORTANT priority, got undefined` because `session-start.sh` emits Claude Code `hookSpecificOutput` envelope rather than deprecated root `priority`. |
| 2 | `session-start-test.sh` | Execution without `jq` in PATH | Exits 1 with `Error: expected INFO priority when jq is missing, got undefined` because fallback also uses `hookSpecificOutput`. |
| 3 | `simplify-ignore.sh` | Terminal interactive mode (`[ -t 0 ]`) or `echo '{}'` | Automatically falls back to `INPUT="{}"`, executes `Stop` recovery path, restores any backups, cleans locks, and exits 0 cleanly. |
| 4 | `simplify-ignore.sh` | Malformed JSON on stdin (e.g. `echo "invalid" \| bash ...`) | Traps JSON parse error, prints warning `Warning: failed to parse .tool_name from hook input` to stderr, treats `TOOL_NAME=""` as `Stop`, and exits 0 cleanly. |
| 5 | `simplify-ignore.sh` | Target source file moved or deleted during active session | Emits warning to stderr and saves backup copy as `<orig>.recovered` instead of losing edits. |
| 6 | `simplify-ignore.sh` | Unclosed `simplify-ignore-start` without end marker | Emits warning to stderr `Warning: unclosed simplify-ignore-start in <src> (block not hidden)` and flushes buffer un-redacted. |
| 7 | `simplify-ignore.sh` | AI model deletes `BLOCK_<hash>` placeholder during Edit | Emits warning to stderr `Warning: protected block BLOCK_<hash> was deleted by model`. |
| 8 | `simplify-ignore.sh` | Single-line block (`start` + `end` on same line with other code) | Hides the entire line rather than only the annotated tokens. |
| 9 | `README.md` | Command count in text table vs. Project Structure diagram | Text table lists 9 commands (`/spec` to `/ship`); Project Structure lists "8 slash commands" for Claude, Gemini, and Antigravity. |
| 10 | `README.md` | Skill count in heading vs. body text | Heading says `All 24 Skills`; body says "The pack includes 25 skills total — 24 lifecycle skills plus the using-agent-skills meta-skill." |

---

## 9. Step-by-Step Implementation Guide for the Worker

The Worker assigned to execute `inv-addy-8` should follow these exact steps:

### Step 1: Read and Verify Source Files
Verify the 5 assigned files are present and match their byte counts:
- `sources/addy/README.md` (25,223 bytes)
- `sources/addy/CONTRIBUTING.md` (7,179 bytes)
- `sources/addy/hooks/SIMPLIFY-IGNORE.md` (3,863 bytes)
- `sources/addy/hooks/simplify-ignore.sh` (12,173 bytes)
- `sources/addy/hooks/session-start-test.sh` (1,224 bytes)

### Step 2: Execute Scripts & Record Evidence
Run the following commands in `sources/addy/` and capture stdout, stderr, and exit codes:
1. `cd sources/addy && bash hooks/session-start-test.sh` (records exit code 1 and error trace as evidence of defect)
2. `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh` (records exit code 0)
3. `cd sources/addy && bash hooks/simplify-ignore-test.sh` (records exit code 0, 21 tests pass)
4. `cd sources/addy && bash hooks/session-start.sh` (records actual JSON envelope)
5. `cd sources/addy && bun scripts/validate-skills.js && bun scripts/validate-commands.js && bun scripts/validate-reference-links.js && bun scripts/validate-artifact-paths.js && bun scripts/validate-versions.js` (records all pass)

### Step 3: Author the 5 Inventory Entries
Create the five markdown inventory files under `docs/analysis/inventory/addy/` matching the exact slugs and field specifications defined in Section 3 of this report:
- `docs/analysis/inventory/addy/readme-md.md`
- `docs/analysis/inventory/addy/contributing-md.md`
- `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md`
- `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md`
- `docs/analysis/inventory/addy/hooks-session-start-test-sh.md`

Ensure every required field is populated, verbatim quotes cite `path:line`, and empty fields explicitly contain `none`.

### Step 4: Author the Unit Report
Create `docs/analysis/inventory/addy/_units/inv-addy-8.md` following `docs/plan/templates/work-unit-report.md`:
- List all 5 assigned files with `[x]` and byte counts.
- List all 5 inventory entries plus the unit report in `Outputs produced`.
- List all executed scripts with exact commands, exit codes, and output summaries.
- Check off all items in `Coverage self-check`.
- Include substantive `Cross-unit notes` detailing:
  - The `session-start-test.sh` payload envelope regression and defect.
  - The `README.md` command count discrepancy (9 in table vs 8 in tree).
  - The `README.md` review severity discrepancy (`Nit/Optional/FYI` vs 4-tier in skills and 3-tier in slash commands).
  - The single-skill packaging limitation (Issue #361).
- Set `Blocked or uncertain` to `none`.
- Provide token approximations for source read (~12,400 tokens) and output written (~14,500 tokens).

### Step 5: Update Manifest
In `docs/analysis/manifest/addy.md`:
- Mark rows 125–129 as checked: `[ ]` → `[x]`.

### Step 6: Update `STATE.md`
In `docs/plan/STATE.md`:
- Update `inv-addy-8` row in Phase 1 Work Units table to `complete` with output `docs/analysis/inventory/addy/_units/inv-addy-8.md`.
- Update `Rows inventoried (addy / matt / rjm)` count in Counts table by adding 5 files.

### Step 7: Run Anti-Drift Verification
Run verification scripts from the project root:
```bash
bun scripts/synthesis/coverage.ts
bun scripts/synthesis/glossary-lint.ts
```
Confirm `coverage.ts` reports 0 empty fields and unchecked rows reduced by 5, and `glossary-lint.ts` reports clean.
