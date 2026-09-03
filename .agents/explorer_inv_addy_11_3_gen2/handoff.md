# Handoff Report: Explorer 3 Gen 2 (inv-addy-11)

**Agent ID**: `explorer_inv_addy_11_3_gen2`  
**Work Unit**: `inv-addy-11`  
**Package**: `addy` (`sources/addy/`)  
**Assigned Files**:
1. `sources/addy/commands/constraints.toml` (2,775 bytes)
2. `sources/addy/commands/build.toml` (3,840 bytes)
3. `sources/addy/commands/spec.toml` (911 bytes)
4. `sources/addy/commands/code-simplify.toml` (1,066 bytes)
5. `sources/addy/commands/test.toml` (650 bytes)

---

## 1. Observation

### 1.1 File Existence and Integrity
All 5 assigned source files and all cross-cutting files in `inv-addy-11` exist in `sources/addy/`. Direct file inspections confirmed line counts and sizes:
- `sources/addy/commands/constraints.toml`: 33 lines, 2,775 bytes
- `sources/addy/commands/build.toml`: 44 lines, 3,840 bytes
- `sources/addy/commands/spec.toml`: 17 lines, 911 bytes
- `sources/addy/commands/code-simplify.toml`: 22 lines, 1,066 bytes
- `sources/addy/commands/test.toml`: 19 lines, 650 bytes

### 1.2 TOML Structural Schema
Across all `.toml` files in `sources/addy/commands/`:
- Exactly two root-level keys exist: `description` (a single-line string) and `prompt` (a multiline triple-quoted string `"""..."""`).
- There are no structural TOML tables or arrays such as `arguments = [...]`, `phases = [...]`, `prerequisites = [...]`, or `outputs = [...]`. All workflow logic, argument switches (`$ARGUMENTS`, `auto`), phase transitions, human checkpoints, and output locations are declared directly in markdown formatting inside the `prompt` string.
- This conforms to the native slash-command schema supported by the Antigravity CLI (`commands/*.toml`).

### 1.3 Referenced Target Existence
Every skill, persona agent, and reference file invoked or cited in the assigned 5 files was checked with `ls`:
- `sources/addy/skills/constraint-driven-development` — verified (exists, 20,880-byte `SKILL.md`, `references/floor-guard.md`)
- `sources/addy/skills/incremental-implementation` — verified (exists, 9,507-byte `SKILL.md`)
- `sources/addy/skills/test-driven-development` — verified (exists, 16,483-byte `SKILL.md`)
- `sources/addy/skills/planning-and-task-breakdown` — verified (exists, 10,564-byte `SKILL.md`)
- `sources/addy/skills/debugging-and-error-recovery` — verified (exists, 10,837-byte `SKILL.md`)
- `sources/addy/skills/doubt-driven-development` — verified (exists, 16,499-byte `SKILL.md`)
- `sources/addy/skills/spec-driven-development` — verified (exists, 12,163-byte `SKILL.md`)
- `sources/addy/skills/code-simplification` — verified (exists, 13,545-byte `SKILL.md`)
- `sources/addy/skills/code-review-and-quality` — verified (exists, 20,555-byte `SKILL.md`)
- `sources/addy/skills/browser-testing-with-devtools` — verified (exists, 14,539-byte `SKILL.md`)
- `sources/addy/skills/shipping-and-launch` — verified (exists, 16,081-byte `SKILL.md`)
- `sources/addy/skills/security-and-hardening` — verified (exists, 21,373-byte `SKILL.md`)
- `sources/addy/skills/performance-optimization` — verified (exists, 18,345-byte `SKILL.md`)
- `sources/addy/agents/code-reviewer.md` — verified
- `sources/addy/agents/security-auditor.md` — verified
- `sources/addy/agents/test-engineer.md` — verified
- `sources/addy/agents/web-performance-auditor.md` — verified
- `sources/addy/references/orchestration-patterns.md` — verified

### 1.4 Script Execution and Validation Results
Empirical runs of the project scripts in `sources/addy/` produced the following results:
1. `bun scripts/validate-commands.js`
   - Exit code: `0`
   - Output:
     ```
     Checking command parity...
       ✓  build
       ✓  code-simplify
       ✓  constraints
       ✓  plan (planning in toml dirs)
       ✓  review
       ✓  ship
       ✓  spec
       ✓  test
       ✓  webperf

     Checking description sync...
       ✓  build
       ✓  code-simplify
       ✓  constraints
       ✓  plan
       ✓  review
       ✓  ship
       ✓  spec
       ✓  test
       ✓  webperf

     9 commands checked — 0 error(s) — PASSED
     ```
2. `bun scripts/validate-versions.js`
   - Exit code: `0`
   - Output: `All plugin manifests use version 0.6.8.`
3. `bun scripts/validate-artifact-paths.js`
   - Exit code: `0`
   - Output:
     ```
     Checking spec/plan/todo artifact paths...
       ✓  .claude/commands/spec.md
       ✓  .claude/commands/plan.md
       ✓  .claude/commands/build.md
       ✓  skills/spec-driven-development/SKILL.md
       ✓  skills/planning-and-task-breakdown/SKILL.md
       ✓  docs/getting-started.md
       ✓  docs/adoption-guide.md

     7 files checked — 0 error(s) — PASSED
     ```
4. `bun test ./scripts/lib/skill-lint-test.js ./scripts/validate-artifact-paths-test.js`
   - Exit code: `0`
   - Output: `14 pass, 0 fail. Ran 14 tests across 2 files. [104.00ms]`
5. `bun scripts/validate-skills.js`
   - Exit code: `0`
   - Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`

---

## 2. Logic Chain

1. **Role of `commands/*.toml` within the Multi-Harness Architecture**:
   - `sources/addy/` supports multiple agent harnesses: Claude Code (`.claude/commands/*.md`), Gemini CLI (`.gemini/commands/*.toml`), and Antigravity CLI (`commands/*.toml`).
   - `scripts/validate-commands.js:30-34` defines:
     ```javascript
     const DIRS = {
       claude:      { dir: path.join(ROOT, '.claude', 'commands'), ext: '.md'   },
       gemini:      { dir: path.join(ROOT, '.gemini', 'commands'), ext: '.toml' },
       antigravity: { dir: path.join(ROOT, 'commands'),            ext: '.toml' },
     };
     ```
   - Therefore, the files in `commands/*.toml` are the canonical Antigravity CLI command definitions.

2. **Description Synchronization Requirement**:
   - `validate-commands.js:10-18` mandates that every command present in one directory exists in all three, and that the `description` string is identical across Claude, Gemini, and Antigravity.
   - However, `validate-commands.js:14-17` explicitly notes: *"Prompt body differences are intentional — each tool has its own syntax ($ARGUMENTS, agent-skills: prefixes, GEMINI.md vs CLAUDE.md)."*
   - In Claude Code (`.claude/commands/build.md:5`), skills are invoked with the namespaced plugin identifier `agent-skills:incremental-implementation`. In Antigravity CLI (`commands/build.toml:4`), skills are invoked with bare kebab-case names `incremental-implementation`.

3. **Command Naming Asymmetry (`plan` vs `planning`)**:
   - In Claude Code, the command is `/plan` (`.claude/commands/plan.md`).
   - In Antigravity CLI and Gemini CLI, the command is `/planning` (`commands/planning.toml` and `.gemini/commands/planning.toml`).
   - `validate-commands.js:38-40` explicitly maps `plan: 'planning'`.
   - `docs/antigravity-setup.md:63` explains the technical rationale: *"Use /planning instead of /plan to avoid conflicts with Antigravity's internal plan-generation command."*

4. **Discovery and Plugin Manifest Wiring**:
   - `sources/addy/.claude-plugin/plugin.json:11-12` specifies:
     ```json
     "commands": ["./.claude/commands", "./commands"],
     "skills": "./skills"
     ```
   - `sources/addy/.claude-plugin/marketplace.json` defines the plugin metadata (`agent-skills` version `0.6.8`).
   - Declaring `"./commands"` inside `.claude-plugin/plugin.json` exposes the `.toml` files to Claude Code plugin loader alongside the `.md` commands in `./.claude/commands`.

5. **Defect Identification via Systematic Checklist Comparison**:
   - Comparing `scripts/validate-artifact-paths.js:44-52` against all command directories revealed that `GUARDED_FILES` only monitors `.claude/commands/*.md`. It omits `commands/spec.toml`, `commands/planning.toml`, and `commands/build.toml`.
   - Comparing `docs/antigravity-setup.md:48-60` against `commands/` revealed that `docs/antigravity-setup.md` only documents 8 commands, completely omitting `/constraints` (`commands/constraints.toml`), despite `README.md:24-36` listing 9 commands.
   - Comparing `commands/constraints.toml:24` with `.gemini/commands/constraints.toml:24` revealed that `commands/constraints.toml` instructs agents to update `AGENTS.md and CLAUDE.md`. This is a copy-paste artifact from Claude Code; Antigravity workspace configuration relies on `AGENTS.md`.

---

## 3. Caveats

- **No live runtime execution of Antigravity CLI binary**: Testing was conducted using the repository's validation scripts (`validate-commands.js`, `validate-artifact-paths.js`, `validate-versions.js`, `skill-lint.js`) via Bun, rather than invoking `agy /build` against a live Antigravity CLI instance.
- **Claude Code `.toml` ingestion**: Whether Claude Code safely ignores or attempts to parse `.toml` files registered via `"./commands"` in `.claude-plugin/plugin.json` depends on the specific Claude Code plugin runtime parser implementation.

---

## 4. Conclusion

The 5 assigned command files (`constraints.toml`, `build.toml`, `spec.toml`, `code-simplify.toml`, `test.toml`) provide clean, declarative slash-command entry points for Antigravity CLI. They adhere strictly to a 2-key TOML structure (`description` + `prompt`), cleanly invoke their underlying modular skills without namespace prefixes, and achieve 100% description and command parity with Claude Code and Gemini CLI equivalents.

However, cross-cutting integration analysis reveals 4 concrete defects:
1. `validate-artifact-paths.js` suffers from a blind spot by omitting `commands/*.toml` from `GUARDED_FILES`.
2. `docs/antigravity-setup.md` suffers from documentation drift, listing only 8 commands and omitting `/constraints`.
3. `commands/constraints.toml:24` leaks a `CLAUDE.md` reference into an Antigravity command.
4. `.claude-plugin/plugin.json:11` redundantly includes `./commands` alongside `./.claude/commands`.

---

## 5. Verification Method

To independently reproduce and verify all observations:
```bash
# 1. Verify command parity and description sync across all 3 command dirs
bun sources/addy/scripts/validate-commands.js

# 2. Verify plugin manifest versions match git tag
bun sources/addy/scripts/validate-versions.js

# 3. Verify artifact path validation
bun sources/addy/scripts/validate-artifact-paths.js

# 4. Run unit tests for artifact path and skill linting
bun test ./sources/addy/scripts/lib/skill-lint-test.js ./sources/addy/scripts/validate-artifact-paths-test.js

# 5. Check existence of all referenced skills and agents
ls -d sources/addy/skills/constraint-driven-development \
      sources/addy/skills/incremental-implementation \
      sources/addy/skills/test-driven-development \
      sources/addy/skills/planning-and-task-breakdown \
      sources/addy/skills/debugging-and-error-recovery \
      sources/addy/skills/doubt-driven-development \
      sources/addy/skills/spec-driven-development \
      sources/addy/skills/code-simplification \
      sources/addy/skills/code-review-and-quality \
      sources/addy/skills/browser-testing-with-devtools \
      sources/addy/agents/code-reviewer.md \
      sources/addy/agents/security-auditor.md \
      sources/addy/agents/test-engineer.md \
      sources/addy/agents/web-performance-auditor.md
```

---

## 6. Cross-Cutting Integration Analysis Across All 16 Files in inv-addy-11

| # | File Path | Scope Role | Cross-Cutting Integration & Behavior |
|---|---|---|---|
| 1 | `scripts/lib/skill-lint.js` | Core validation library | Shared pure linter enforcing `SKILL.md` frontmatter, kebab-case directory names, 1024-char description limits, required "when to use" trigger regex (`DESCRIPTION_TRIGGER`), required sections (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`), allowlisted exemptions (`using-agent-skills`, `idea-refine`), workflow step matching, and known cross-skill reference validation. |
| 2 | `scripts/lib/skill-lint-test.js` | Unit tests | Validates `skill-lint.js` using `node:test` and `node:assert/strict`. Guarantees prototype-pollution immunity (e.g. `constructor` dirs cannot bypass section checks), verifies that invalid triggers fail, and tests workflow step checks. Passes under `bun test` (8 pass, 0 fail). |
| 3 | `scripts/validate-versions.js` | Sync validator | Asserts that `version` in `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json` matches git describe tag `0.6.8`. Exits 0 on match, throws error on drift. |
| 4 | `scripts/validate-commands.js` | Command parity validator | Enforces command stem parity and identical `description` fields across `.claude/commands/` (.md), `.gemini/commands/` (.toml), and `commands/` (.toml). Normalizes Claude `plan` to TOML `planning` via `NAME_MAP`. Ignores prompt differences. Exits 0 when 9 commands match. |
| 5 | `scripts/validate-artifact-paths-test.js` | Pipeline regression tests | Tests `validate-artifact-paths.js` against synthetic sandbox directories. Exercises PR #93 regression (drift to `docs/features/[name]/spec.md`), canonical paths (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), line-number reporting, and skipping missing files. Passes under `bun test` (6 pass, 0 fail). |
| 6 | `.claude-plugin/marketplace.json` | Plugin catalog | Manifest conforming to `https://json.schemastore.org/claude-code-marketplace.json`. Declares plugin `agent-skills` version `0.6.8`, repository, and description covering full SDLC from spec to ship. |
| 7 | `.claude-plugin/plugin.json` | Plugin manifest | Manifest for Claude Code plugin. Declares `"commands": ["./.claude/commands", "./commands"]` and `"skills": "./skills"`. Redundantly includes Antigravity TOML commands directory `./commands`. |
| 8 | `commands/ship.toml` | Antigravity slash command | Parallel fan-out orchestrator for pre-launch verification. Spawns 3 subagents concurrently (`code-reviewer`, `security-auditor`, `test-engineer`), aggregates in main context across 6 dimensions, requires mandatory rollback plan before GO decision. |
| 9 | `commands/webperf.toml` | Antigravity slash command | Performance audit command. Selects Quick mode (code anti-patterns) vs Deep mode (Lighthouse/CrUX/PSI/DevTools trace JSON), spawns `web-performance-auditor` subagent, returns structured scorecard. |
| 10 | `commands/planning.toml` | Antigravity slash command | Work breakdown command named `planning` to prevent shadowing Antigravity internal `plan`. Invokes `planning-and-task-breakdown`, vertically slices tasks with acceptance criteria, saves to `tasks/plan.md` and `tasks/todo.md`. |
| 11 | `commands/review.toml` | Antigravity slash command | 5-axis code review command (correctness, readability, architecture, security, performance). Invokes `code-review-and-quality`, `security-and-hardening`, `performance-optimization`. |
| 12 | `commands/constraints.toml` | Antigravity slash command | Quality bar interview and enforcement command. Defines `CONSTRAINTS.md`, sets up tiered npm scripts (`check:fast`, `check:task`, `check:full`), updates `AGENTS.md`/`CLAUDE.md`, defines sub-commands `/constraints check`, `/constraints guard`, `/constraints ratchet`. |
| 13 | `commands/build.toml` | Antigravity slash command | Incremental build command. Single-task mode vs autonomous `/build auto` mode. Verifies spec prerequisite (`SPEC.md`, `docs/SPEC.md`, `spec/*`), checks clean git baseline, requires single explicit human approval, runs RED-GREEN-regression-commit loops. |
| 14 | `commands/spec.toml` | Antigravity slash command | Specification authoring command. Asks clarifying interview questions, generates 6-section specification, supports multi-module capability maps, writes to `SPEC.md`. |
| 15 | `commands/code-simplify.toml` | Antigravity slash command | Behavior-preserving refactoring command. Reads `AGENTS.md`, scans for simplification patterns, applies changes incrementally with test runs, invokes `code-review-and-quality`. |
| 16 | `commands/test.toml` | Antigravity slash command | TDD implementation and bug verification command. Enforces RED-GREEN-Refactor for features, Prove-It pattern (reproducing failing test first) for bugs, integrates `browser-testing-with-devtools` for browser issues. |

---

## 7. Inventory Entries for Assigned Files

---

### Entry 1: `commands/constraints.toml`

```markdown
---
package: addy
path: commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-11
---

# commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — commands/constraints.toml:1

## Design intent — required
Establishes an automated, tiered quality engineering standard for a repository by detecting existing tooling, conducting a brief (at most 4-question) interview, generating a canonical `CONSTRAINTS.md` file, and wiring enforcement tools into cost-tiered commands (`check:fast`, `check:task`, `check:full`). It prevents agents from silently weakening quality standards or deleting tests by establishing explicit threshold baselines and providing sub-commands to inspect git diffs (`/constraints guard`), re-baseline metrics (`/constraints ratchet`), and evaluate the branch (`/constraints check`).

## Phase — required
`addy:Define`

## Inputs — required
- Repository configuration files: `package.json`, `pyproject.toml`, `go.mod`, test runner configurations, lint configs, coverage outputs, CI workflows (`commands/constraints.toml:10`)
- User responses to interview questions (dimensions beyond floor, block vs warn, target numbers vs hold, slowest tolerable check) (`commands/constraints.toml:12-16`)
- Sub-command argument via `$ARGUMENTS`: `check`, `guard`, or `ratchet` (`commands/constraints.toml:6, 28-31`)
- Git branch diff (for `/constraints guard` and edit-loop scoped checks) (`commands/constraints.toml:22, 30`)

## Outputs — required
- `CONSTRAINTS.md` at repo root (`commands/constraints.toml:18`)
- Tiered npm scripts in `package.json`: `check:fast`, `check:task`, `check:full` (`commands/constraints.toml:21`)
- Enforcement instruction lines appended to `AGENTS.md` and `CLAUDE.md` (`commands/constraints.toml:24`)
- Diagnostic reports for `/constraints check`, `/constraints guard`, and `/constraints ratchet` (`commands/constraints.toml:29-31`)

## Invokes — required
- skill constraint-driven-development — commands/constraints.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — commands/constraints.toml:4 — used here
- `$ARGUMENTS` — commands/constraints.toml:6 — used here
- `CONSTRAINTS.md` — commands/constraints.toml:1, 18, 20, 24 — defined here
- `Floor section` — commands/constraints.toml:18 — defined here
- `exceptions table` — commands/constraints.toml:18 — defined here
- `check:fast` — commands/constraints.toml:21 — defined here
- `check:task` — commands/constraints.toml:21 — defined here
- `check:full` — commands/constraints.toml:21 — defined here
- `edit loop` — commands/constraints.toml:22 — used here
- `AGENTS.md` — commands/constraints.toml:24 — used here
- `CLAUDE.md` — commands/constraints.toml:24 — used here
- `/constraints check` — commands/constraints.toml:29 — defined here
- `/constraints guard` — commands/constraints.toml:30 — defined here
- `/constraints ratchet` — commands/constraints.toml:31 — defined here

## Structure
- `description = "..."` — commands/constraints.toml:1
- `prompt = """` — commands/constraints.toml:3
  - Skill invocation statement — commands/constraints.toml:4
  - `$ARGUMENTS` placeholder — commands/constraints.toml:6
  - Default behavior: 7 numbered process steps — commands/constraints.toml:8-26
    - 1. **Detect first.** — commands/constraints.toml:10
    - 2. **Interview, at most four questions.** — commands/constraints.toml:12-17
    - 3. **Write CONSTRAINTS.md** — commands/constraints.toml:18
    - 4. **Install what each picked dimension needs.** — commands/constraints.toml:20-21
    - 5. **Place each check by cost.** — commands/constraints.toml:22
    - 6. **Point the agent at it.** — commands/constraints.toml:24
    - 7. **Verify.** — commands/constraints.toml:26
  - `Sub-commands:` listing 3 sub-commands (`check`, `guard`, `ratchet`) — commands/constraints.toml:28-31

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/antigravity-setup.md:48-60 · `docs/antigravity-setup.md` states "The plugin registers 8 custom slash commands" and omits `/constraints` from its table, despite `commands/constraints.toml` being present.
- `cross-file-contradiction` · commands/constraints.toml:24 · Line 24 instructs "Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md", leaking a Claude Code file reference (`CLAUDE.md`) into an Antigravity CLI command (which relies on `AGENTS.md`).

## Observations
- Recommends concrete de facto tooling for each quality dimension: Semgrep (code scanning), gitleaks with `--redact` (secrets), osv-scanner (dependencies), axe-core (accessibility), Lighthouse (web vitals), size-limit (bundles), dependency-cruiser (architectural boundaries), and Stryker (mutation/assertion quality).
- Explicit cost-tier placement: edit loop (seconds) for types/lint/secrets; task end (<90s) for related tests and changed-line coverage; CI/review for full scans.
- Pragmatic URL requirement: instructs agents to drop accessibility and performance checks if no live running URL exists, explicitly prohibiting fabricated checks.

## Context cost
- File size: 2,775 bytes (~694 tokens).
- Transitive cost when invoked: loads `skills/constraint-driven-development/SKILL.md` (20,880 bytes) and `references/floor-guard.md` (5,851 bytes), totaling 29,506 bytes (~7,376 tokens).
```

---

### Entry 2: `commands/build.toml`

```markdown
---
package: addy
path: commands/build.toml
type: command
bytes: 3840
unit: inv-addy-11
---

# commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — commands/build.toml:1

## Design intent — required
Executes planned engineering tasks through disciplined, test-driven iteration across two execution modes: single-task stepping (`/build`) and autonomous plan execution (`/build auto`). In single-task mode, it guides the agent through an 8-step RED-GREEN-Refactor cycle ending in build verification and atomic commit. In autonomous mode, it verifies strict spec prerequisites (`SPEC.md`, `docs/SPEC.md`, `spec/*`), verifies a clean git baseline, secures an explicit single human approval, and executes all plan tasks in dependency order with isolated commits. It halts autonomously when confronted with ambiguity, persistent test failures, or high-risk/irreversible changes.

## Phase — required
`addy:Build`

## Inputs — required
- Command mode argument: default (empty or single-task) vs `auto` / `all` (`commands/build.toml:11`)
- Specification document: `SPEC.md` at repo root, `docs/SPEC.md`, or a file under `spec/` (`commands/build.toml:30`)
- Execution plan: `tasks/plan.md` and `tasks/todo.md` (`commands/build.toml:31-33`)
- Git baseline status via `git status --porcelain` (`commands/build.toml:31`)
- User confirmation / approval checkpoint (`commands/build.toml:33`)

## Outputs — required
- Production code and unit/integration test files (`commands/build.toml:19-20`)
- Atomic per-task git commits (`commands/build.toml:23, 34`)
- Task completion markers updated in `tasks/plan.md` (`commands/build.toml:24, 34`)
- Autonomous execution summary report (`commands/build.toml:40`)

## Invokes — required
- skill incremental-implementation — commands/build.toml:4
- skill test-driven-development — commands/build.toml:4
- skill planning-and-task-breakdown — commands/build.toml:32
- skill debugging-and-error-recovery — commands/build.toml:36, 42
- skill doubt-driven-development — commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — commands/build.toml:4 — used here
- `test-driven-development` — commands/build.toml:4 — used here
- `/build` — commands/build.toml:8 — defined here
- `/build auto` — commands/build.toml:9, 26 — defined here
- `single-task mode` — commands/build.toml:11 — defined here
- `autonomous mode` — commands/build.toml:11 — defined here
- `acceptance criteria` — commands/build.toml:17 — used here
- `RED` — commands/build.toml:19, 34 — used here
- `GREEN` — commands/build.toml:20, 34 — used here
- `clean baseline` — commands/build.toml:31 — defined here
- `clean-rollback guarantee` — commands/build.toml:31 — defined here
- `SPEC.md` — commands/build.toml:30, 31 — used here
- `docs/SPEC.md` — commands/build.toml:30, 31 — used here
- `spec/*` — commands/build.toml:30, 31 — used here
- `tasks/plan.md` — commands/build.toml:31, 32, 33 — used here
- `tasks/todo.md` — commands/build.toml:31 — used here
- `planning-and-task-breakdown` — commands/build.toml:32 — used here
- `single checkpoint` — commands/build.toml:33 — defined here
- `dependency order` — commands/build.toml:34 — defined here
- `debugging-and-error-recovery` — commands/build.toml:36, 42 — used here
- `doubt-driven-development` — commands/build.toml:38 — used here
- `high-risk operation` — commands/build.toml:38 — defined here

## Structure
- `description = "..."` — commands/build.toml:1
- `prompt = """` — commands/build.toml:3
  - Skill invocation statement (`incremental-implementation` and `test-driven-development`) — commands/build.toml:4
  - `## Modes` — commands/build.toml:6-11
  - `## Default: one task` (8 numbered steps) — commands/build.toml:13-24
  - `## Autonomous: the whole plan (/build auto)` (7 numbered steps) — commands/build.toml:26-40
  - Fallback error recovery clause — commands/build.toml:42

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · scripts/validate-artifact-paths.js:44-52 · In `scripts/validate-artifact-paths.js`, `commands/build.toml` is omitted from `GUARDED_FILES`, leaving Antigravity build command artifact references unmonitored for path drift.

## Observations
- Strict human gate definition: mandates waiting for unambiguous affirmative approvals ("approve", "go", "yes") and explicitly directs agents to treat hedged responses ("looks reasonable", "I guess") as NOT approved (`commands/build.toml:33`).
- Rollback safety: enforces staging only touched files per task and strictly forbids `git add -A` to guarantee atomic rollback capability (`commands/build.toml:34`).
- Strict spec verification: requires canonical spec paths (`SPEC.md`, `docs/SPEC.md`, `spec/*`), refusing to invent requirements from arbitrary READMEs (`commands/build.toml:30`).

## Context cost
- File size: 3,840 bytes (~960 tokens).
- Transitive cost when invoked: loads `incremental-implementation` SKILL.md (9,507 bytes) and `test-driven-development` SKILL.md (16,483 bytes), with potential escalations to `planning-and-task-breakdown` (10,564 bytes), `debugging-and-error-recovery` (10,837 bytes), and `doubt-driven-development` (16,499 bytes), totaling up to 67,730 bytes (~16,933 tokens).
```

---

### Entry 3: `commands/spec.toml`

```markdown
---
package: addy
path: commands/spec.toml
type: command
bytes: 911
unit: inv-addy-11
---

# commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — commands/spec.toml:1

## Design intent — required
Serves as the front door to the specification lifecycle phase, initiating an interview workflow that extracts requirements, boundaries, technical constraints, and testing strategies before any implementation begins. For composite systems bundling multiple capabilities, it enforces a dependency-ordered capability map before individual specifications are written. It commits the resulting design to `SPEC.md` in the repository root as the baseline artifact for downstream planning and execution.

## Phase — required
`addy:Define`

## Inputs — required
- User responses to clarifying interview questions: objective & target users, core features & acceptance criteria, tech stack preferences & constraints, known boundaries (always, ask first, never) (`commands/spec.toml:6-10`)
- Approval of capability map when bundling multiple capabilities (`commands/spec.toml:14`)

## Outputs — required
- Capability map (module ids, dependency direction, build order) for multi-capability requests (`commands/spec.toml:14`)
- `SPEC.md` in the project root (`commands/spec.toml:16`)

## Invokes — required
- skill spec-driven-development — commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — commands/spec.toml:4 — used here
- `acceptance criteria` — commands/spec.toml:8 — used here
- `known boundaries` — commands/spec.toml:10 — used here
- `six core areas` — commands/spec.toml:12 — defined here
- `capability map` — commands/spec.toml:14 — used here
- `SPEC.md` — commands/spec.toml:16 — defined here

## Structure
- `description = "..."` — commands/spec.toml:1
- `prompt = """` — commands/spec.toml:3
  - Skill invocation statement (`spec-driven-development`) — commands/spec.toml:4
  - Interview guidance (4 numbered focus areas) — commands/spec.toml:6-10
  - Core coverage specification (six core areas) — commands/spec.toml:12
  - Multi-capability Phase 0 handling (capability map) — commands/spec.toml:14
  - Artifact output instruction (`SPEC.md`) and user confirmation — commands/spec.toml:16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · scripts/validate-artifact-paths.js:44-52 · In `scripts/validate-artifact-paths.js`, `commands/spec.toml` is omitted from `GUARDED_FILES`, leaving the Antigravity spec command unmonitored for artifact-path drift.

## Observations
- Covers six mandatory structural areas: objective, commands, project structure, code style, testing strategy, and boundaries (`commands/spec.toml:12`).
- Modular capability mapping: explicitly references the underlying skill's Phase 0 to decouple composite features into distinct, independently testable modules before drafting individual specs (`commands/spec.toml:14`).

## Context cost
- File size: 911 bytes (~228 tokens).
- Transitive cost when invoked: loads `skills/spec-driven-development/SKILL.md` (12,163 bytes), totaling 13,074 bytes (~3,269 tokens).
```

---

### Entry 4: `commands/code-simplify.toml`

```markdown
---
package: addy
path: commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-11
---

# commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — commands/code-simplify.toml:1

## Design intent — required
Guides targeted code simplification on recently modified code or a user-specified scope while guaranteeing zero behavioral regression. It forces the agent to read repository standards, understand callers and test coverage prior to making edits, scan for specific complexity anti-patterns (such as deep nesting, long functions, nested ternaries, and duplicated logic), apply refactorings incrementally with immediate test execution, and run a final quality review pass via `code-review-and-quality`.

## Phase — required
`addy:Build`

## Inputs — required
- Project conventions from `AGENTS.md` (`commands/code-simplify.toml:8`)
- Target code scope: recent changes or user-specified file/module scope (`commands/code-simplify.toml:9`)
- Existing test suite (`commands/code-simplify.toml:10, 18-19`)

## Outputs — required
- Refactored, simplified source code with behavior preserved (`commands/code-simplify.toml:6, 18-19`)
- Clean git diff with passing tests and build verification (`commands/code-simplify.toml:19`)
- Structured code review assessment via `code-review-and-quality` (`commands/code-simplify.toml:21`)

## Invokes — required
- skill code-simplification — commands/code-simplify.toml:4
- skill code-review-and-quality — commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — commands/code-simplify.toml:4 — used here
- `AGENTS.md` — commands/code-simplify.toml:8 — used here
- `guard clauses` — commands/code-simplify.toml:12 — used here
- `incremental simplification` — commands/code-simplify.toml:18 — defined here
- `code-review-and-quality` — commands/code-simplify.toml:21 — used here

## Structure
- `description = "..."` — commands/code-simplify.toml:1
- `prompt = """` — commands/code-simplify.toml:3
  - Skill invocation statement (`code-simplification`) — commands/code-simplify.toml:4
  - Scope and preservation rule — commands/code-simplify.toml:6
  - 6 numbered process steps (conventions, target, comprehension, scan patterns, incremental application, verification) — commands/code-simplify.toml:8-19
  - Reversion condition and review invocation — commands/code-simplify.toml:21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides concrete, pattern-based refactoring targets: deep nesting to guard clauses/helpers, long functions split by responsibility, nested ternaries to if/else/switch, generic names to descriptive names, duplicated logic to shared functions, dead code removed after confirmation (`commands/code-simplify.toml:11-17`).
- Fail-safe rollback: mandates reverting any simplification immediately if tests fail, rather than pushing untested adjustments forward (`commands/code-simplify.toml:21`).

## Context cost
- File size: 1,066 bytes (~267 tokens).
- Transitive cost when invoked: loads `skills/code-simplification/SKILL.md` (13,545 bytes) and `skills/code-review-and-quality/SKILL.md` (20,555 bytes), totaling 35,166 bytes (~8,792 tokens).
```

---

### Entry 5: `commands/test.toml`

```markdown
---
package: addy
path: commands/test.toml
type: command
bytes: 650
unit: inv-addy-11
---

# commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Design intent — required
Enforces a test-first engineering workflow for both new feature development and bug resolution. For new capabilities, it mandates the standard RED-GREEN-Refactor cycle. For bug fixes, it enforces the "Prove-It pattern", requiring the creation and confirmation of a reproducing failing test before any production code modification is allowed, followed by verification of the fix and a full regression run. For browser-facing problems, it integrates Chrome DevTools MCP testing via `browser-testing-with-devtools`.

## Phase — required
`addy:Verify`

## Inputs — required
- Feature requirement or bug report/reproduction steps (`commands/test.toml:6, 11`)
- Existing test suite and execution tooling (`commands/test.toml:16`)
- Chrome DevTools MCP tools (for browser issues) (`commands/test.toml:18`)

## Outputs — required
- Test suites and test cases (initially failing, then passing) (`commands/test.toml:7, 12, 15`)
- Production code implementation or bug fix (`commands/test.toml:8, 14`)
- Browser verification telemetry / reports (`commands/test.toml:18`)

## Invokes — required
- skill test-driven-development — commands/test.toml:4
- skill browser-testing-with-devtools — commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `test-driven-development` — commands/test.toml:4 — used here
- `TDD workflow` — commands/test.toml:1 — used here
- `Prove-It pattern` — commands/test.toml:1, 11 — defined here
- `browser-testing-with-devtools` — commands/test.toml:18 — used here
- `Chrome DevTools MCP` — commands/test.toml:18 — used here

## Structure
- `description = "..."` — commands/test.toml:1
- `prompt = """` — commands/test.toml:3
  - Skill invocation statement (`test-driven-development`) — commands/test.toml:4
  - Feature TDD loop (3 numbered steps) — commands/test.toml:6-9
  - Bug fix Prove-It pattern (5 numbered steps) — commands/test.toml:11-16
  - Browser verification integration clause — commands/test.toml:18

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The "Prove-It pattern" provides a formal protocol for bug fixes: Step 1 write failing test reproducing bug, Step 2 confirm it fails, Step 3 implement fix, Step 4 confirm test passes, Step 5 run full suite for regressions (`commands/test.toml:11-16`).
- Directly references Chrome DevTools MCP for browser-level issues via `browser-testing-with-devtools` (`commands/test.toml:18`).

## Context cost
- File size: 650 bytes (~163 tokens).
- Transitive cost when invoked: loads `skills/test-driven-development/SKILL.md` (16,483 bytes) and `skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes), totaling 31,672 bytes (~7,918 tokens).
```
