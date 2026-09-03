# Handoff Report: Explorer 2 (Replacement gen2, inv-addy-14)

## 1. Observation

### 1.1 Scope and Environment
- Assigned files in unit `inv-addy-14`:
  1. `sources/addy/skills/ci-cd-and-automation/SKILL.md` (11,332 bytes, 391 lines)
  2. `sources/addy/skills/context-engineering/SKILL.md` (11,070 bytes, 290 lines)
- Total source inspected: 22,402 bytes across 2 files, read completely from line 1 to end without sampling per METHOD.md R1.
- Repository status: Working branch is `v2` at commit matching pinned SHA `d2c37ef6225dd8726cdd369a8030307f48592d26` for `addy`.
- Zero scripts or references directories exist within either skill directory (`sources/addy/skills/ci-cd-and-automation/` contains only `SKILL.md`; `sources/addy/skills/context-engineering/` contains only `SKILL.md`).

### 1.2 Path Verifications (§4 Checklist)
All cross-referenced paths were inspected on disk:
- In `sources/addy/skills/ci-cd-and-automation/SKILL.md`:
  - Line 189 references `debugging-and-error-recovery` skill → `sources/addy/skills/debugging-and-error-recovery/SKILL.md` exists on disk (14,068 bytes).
  - All other paths mentioned in text (`.github/workflows/ci.yml`, `.env.example`, `.env`, `.env.test`, `.github/dependabot.yml`, `playwright-report/`) are illustrative user-project configuration examples and workflow targets.
- In `sources/addy/skills/context-engineering/SKILL.md`:
  - Rules files mentioned (`CLAUDE.md`, `.cursorrules`, `.cursor/rules/*.md`, `.windsurfrules`, `.github/copilot-instructions.md`, `AGENTS.md`) are illustrative templates and industry conventions.
  - Source file examples (`UserService.ts:42`, `src/routes/auth.ts`, `src/lib/validation.ts`, `tests/routes/auth.test.ts`, `src/auth/`, `src/tasks/`, `src/lib/`, `src/graphql/user.ts`) are instructional examples.
  - MCP servers listed (`Context7`, `Chrome DevTools`, `PostgreSQL`, `Filesystem`, `GitHub`) are external tool references.

### 1.3 Invocation Graph Tracing
Neither file is an orphan:
- `ci-cd-and-automation` is referenced/invoked by:
  - `CLAUDE.md:26` (Ship phase)
  - `README.md:278, 372` (Ship phase table and tree)
  - `skills/using-agent-skills/SKILL.md:38, 188` (Ship phase)
  - `skills/constraint-driven-development/SKILL.md:33, 308`
  - `docs/cursor-setup.md:162`
  - `docs/adoption-guide.md:61`
  - `docs/getting-started.md:73`
  - `evals/cases/ci-cd-and-automation.json:2, 35`
  - `evals/cases/deprecation-and-migration.json:24`
  - `evals/cases/idea-refine.json:21`
  - `evals/cases/source-driven-development.json:21`
  - `evals/cases/constraint-driven-development.json:33`
- `context-engineering` is referenced/invoked by:
  - `CLAUDE.md:23` (Build phase)
  - `README.md:251, 359` (Build phase table and tree)
  - `skills/spec-driven-development/SKILL.md:202`
  - `skills/using-agent-skills/SKILL.md:27, 150, 177` (Build phase)
  - `docs/adoption-guide.md:32, 81, 112, 124`
  - `evals/cases/context-engineering.json:2, 35`

### 1.4 Defect Findings (§4 Checklist)
- `skills/ci-cd-and-automation/SKILL.md:364`:
  - Text states: `Optimize the pipeline (see CI Optimization below), don't skip it.`
  - Defect classification: `doc-drift` (or `internal-contradiction`) — the section `## CI Optimization` is located *above* line 364 (at lines 310–359), not below.
- `skills/context-engineering/SKILL.md`:
  - No defects found (`none`). Clean structure.

---

## 2. Logic Chain

1. **Rule R1 & R2 Compliance:** Both files were read line-by-line without truncating or sampling (Obs 1.1). Neither skill ships executable scripts or tests in its directory (Obs 1.1); commands mentioned in text (`npm test`, `npx tsc --noEmit`, `npx vercel rollback`) are illustrative examples of user-repository commands rather than packaged scripts.
2. **Defect Verification (§4 Checklist):**
   - Referenced skill `debugging-and-error-recovery` exists on disk (Obs 1.2).
   - One documentation drift defect was detected in `ci-cd-and-automation/SKILL.md:364` where the text points to "below" for a section placed above (Obs 1.4).
   - Neither skill is an orphan (Obs 1.3).
3. **Phase Assignment:**
   - `ci-cd-and-automation` belongs to `addy:Ship` per `CLAUDE.md:26`, `README.md:372`, and `using-agent-skills/SKILL.md:188`.
   - `context-engineering` belongs to `addy:Build` per `CLAUDE.md:23`, `README.md:359`, and `using-agent-skills/SKILL.md:177`.
4. **Concept Extraction (R6 Depth Rule):** Every named technique, gate, artifact, role, template, checklist, and phase in both files was exhaustively extracted with exact `path:line` citations.

---

## 3. Caveats

- Neither skill contains internal executable scripts or unit tests under `sources/addy/skills/<skill>/`; evaluation cases (`evals/cases/*.json`) and fixtures belong to earlier units.
- External documentation snapshots (`sources/addy-external/ci-cd-and-automation.md` and `sources/addy-external/context-engineering.md`) are separate manifest rows.
- No caveats regarding completeness of reading or field extraction.

---

## 4. Conclusion & Inventory Entries

Both files have been exhaustively analyzed according to METHOD.md R1–R6. Below are the complete inventory entries:

---

### Inventory Entry 1: `skills/ci-cd-and-automation/SKILL.md`

```markdown
---
package: addy
path: skills/ci-cd-and-automation/SKILL.md
type: skill
bytes: 11332
unit: inv-addy-14
---

# skills/ci-cd-and-automation/SKILL.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies." — skills/ci-cd-and-automation/SKILL.md:3

## Design intent — required
Manual verification of changes, tests, types, and builds does not scale and easily breaks down as autonomous agents and developers introduce rapid code changes. Without automated CI/CD pipelines, unverified changes slip into main/production, leading to regressions, broken builds, secret leaks, and lengthy outages. `ci-cd-and-automation` provides the automated enforcement mechanism for all quality standards—establishing shift-left gating (linting, type checking, unit tests, build, integration tests, E2E, security audit, and bundle size checks), automated feedback loops to agents when CI fails, safe deployment strategies (preview deployments, feature flags, staged rollouts, and rollback workflows), and pipeline performance optimization (caching, parallel jobs, path filtering, matrix test sharding). Without it, quality assurance relies on unreliable human vigilance, batch sizes balloon, deployments become high-risk events, and agent feedback loops remain unclosed.

## Phase — required
addy:Ship

## Inputs — required
- Project source code, build scripts, and package manager configurations (`package.json`, etc.)
- Existing CI/CD configuration files (`.github/workflows/*.yml`, `.github/dependabot.yml`)
- Environment variable specifications and secrets (`.env.example`, GitHub Secrets, vault credentials)
- Failure outputs from CI runs (lint failures, TypeScript compiler errors `tsc --noEmit`, test failure reports, build errors, security audit reports)
- Deployment target credentials and platform configurations (Vercel token, database connection URLs)

## Outputs — required
- Automated CI workflow definitions (`.github/workflows/ci.yml`, with quality gates for lint, type check, unit tests, build, integration tests, E2E tests, security audit, and bundle size)
- Database integration test job configurations with service containers and migration steps (`npx prisma migrate deploy`)
- E2E test workflow configurations and test artifact uploads (`playwright-report/`)
- Preview deployment configurations and workflows (`npx vercel --token=...`)
- Feature flag implementations and flag lifecycle deprecation plans
- Staged rollout procedures and manual/automatic rollback workflows (`npx vercel rollback`)
- Automated dependency update configurations (`.github/dependabot.yml`)
- Quality gate enforcement policies (required PR status checks, required reviews, branch protection)
- CI pipeline optimizations (dependency caching, parallel execution, path filters, test matrix sharding)

## Invokes — required
skill debugging-and-error-recovery — skills/ci-cd-and-automation/SKILL.md:189

## Invoked by — required
- command `commands/ship.toml` — commands/ship.toml:4
- doc `CLAUDE.md` — CLAUDE.md:26
- doc `README.md` — README.md:278, 372
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:38, 188
- skill `skills/constraint-driven-development/SKILL.md` — skills/constraint-driven-development/SKILL.md:33, 308
- doc `docs/cursor-setup.md` — docs/cursor-setup.md:162
- doc `docs/adoption-guide.md` — docs/adoption-guide.md:61
- doc `docs/getting-started.md` — docs/getting-started.md:73
- config `evals/cases/ci-cd-and-automation.json` — evals/cases/ci-cd-and-automation.json:2, 35
- config `evals/cases/deprecation-and-migration.json` — evals/cases/deprecation-and-migration.json:24
- config `evals/cases/idea-refine.json` — evals/cases/idea-refine.json:21
- config `evals/cases/source-driven-development.json` — evals/cases/source-driven-development.json:21
- config `evals/cases/constraint-driven-development.json` — evals/cases/constraint-driven-development.json:33

## Concepts named — required, verbatim
- `ci-cd-and-automation` — skills/ci-cd-and-automation/SKILL.md:2 — defined here
- `quality gates` — skills/ci-cd-and-automation/SKILL.md:10 — used here
- `Shift Left` — skills/ci-cd-and-automation/SKILL.md:12 — defined here
- `static analysis` — skills/ci-cd-and-automation/SKILL.md:12 — used here
- `Faster is Safer` — skills/ci-cd-and-automation/SKILL.md:14 — defined here
- `The Quality Gate Pipeline` — skills/ci-cd-and-automation/SKILL.md:24 — defined here
- `LINT CHECK` — skills/ci-cd-and-automation/SKILL.md:33 — defined here
- `TYPE CHECK` — skills/ci-cd-and-automation/SKILL.md:35 — defined here
- `UNIT TESTS` — skills/ci-cd-and-automation/SKILL.md:37 — defined here
- `BUILD` — skills/ci-cd-and-automation/SKILL.md:39 — defined here
- `INTEGRATION` — skills/ci-cd-and-automation/SKILL.md:41 — defined here
- `E2E` — skills/ci-cd-and-automation/SKILL.md:43 — defined here
- `SECURITY AUDIT` — skills/ci-cd-and-automation/SKILL.md:45 — defined here
- `BUNDLE SIZE` — skills/ci-cd-and-automation/SKILL.md:47 — defined here
- `Ready for review` — skills/ci-cd-and-automation/SKILL.md:51 — defined here
- `Basic CI Pipeline` — skills/ci-cd-and-automation/SKILL.md:58 — defined here
- `.github/workflows/ci.yml` — skills/ci-cd-and-automation/SKILL.md:61 — used here
- `Database Integration Tests` — skills/ci-cd-and-automation/SKILL.md:100 — defined here
- `E2E Tests` — skills/ci-cd-and-automation/SKILL.md:139 — defined here
- `Feeding CI Failures Back to Agents` — skills/ci-cd-and-automation/SKILL.md:164 — defined here
- `debugging-and-error-recovery` — skills/ci-cd-and-automation/SKILL.md:189 — used here
- `Deployment Strategies` — skills/ci-cd-and-automation/SKILL.md:193 — defined here
- `Preview Deployments` — skills/ci-cd-and-automation/SKILL.md:195 — defined here
- `Feature Flags` — skills/ci-cd-and-automation/SKILL.md:210 — defined here
- `Canary` — skills/ci-cd-and-automation/SKILL.md:216 — used here
- `A/B tests` — skills/ci-cd-and-automation/SKILL.md:217 — used here
- `Flag lifecycle` — skills/ci-cd-and-automation/SKILL.md:227 — defined here
- `Staged Rollouts` — skills/ci-cd-and-automation/SKILL.md:229 — defined here
- `Rollback Plan` — skills/ci-cd-and-automation/SKILL.md:247 — defined here
- `Environment Management` — skills/ci-cd-and-automation/SKILL.md:271 — defined here
- `.env.example` — skills/ci-cd-and-automation/SKILL.md:274 — used here
- `.env` — skills/ci-cd-and-automation/SKILL.md:275 — used here
- `.env.test` — skills/ci-cd-and-automation/SKILL.md:276 — used here
- `CI secrets` — skills/ci-cd-and-automation/SKILL.md:277 — defined here
- `Production secrets` — skills/ci-cd-and-automation/SKILL.md:278 — defined here
- `Dependabot` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `Renovate` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `.github/dependabot.yml` — skills/ci-cd-and-automation/SKILL.md:288 — used here
- `Build Cop` — skills/ci-cd-and-automation/SKILL.md:298 — defined here
- `PR Checks` — skills/ci-cd-and-automation/SKILL.md:302 — defined here
- `Required reviews` — skills/ci-cd-and-automation/SKILL.md:304 — defined here
- `Required status checks` — skills/ci-cd-and-automation/SKILL.md:305 — defined here
- `Branch protection` — skills/ci-cd-and-automation/SKILL.md:306 — defined here
- `Auto-merge` — skills/ci-cd-and-automation/SKILL.md:307 — defined here
- `CI Optimization` — skills/ci-cd-and-automation/SKILL.md:310 — defined here
- `Cache dependencies` — skills/ci-cd-and-automation/SKILL.md:315 — defined here
- `Run jobs in parallel` — skills/ci-cd-and-automation/SKILL.md:317 — defined here
- `Only run what changed` — skills/ci-cd-and-automation/SKILL.md:319 — defined here
- `path filters` — skills/ci-cd-and-automation/SKILL.md:320 — used here
- `matrix builds` — skills/ci-cd-and-automation/SKILL.md:321 — defined here
- `Optimize the test suite` — skills/ci-cd-and-automation/SKILL.md:323 — defined here
- `larger runners` — skills/ci-cd-and-automation/SKILL.md:325 — defined here
- `Common Rationalizations` — skills/ci-cd-and-automation/SKILL.md:360 — defined here
- `Red Flags` — skills/ci-cd-and-automation/SKILL.md:370 — defined here
- `Verification` — skills/ci-cd-and-automation/SKILL.md:380 — defined here

## Structure
- `# CI/CD and Automation` — line 6
- `## Overview` — line 8
- `## When to Use` — line 16
- `## The Quality Gate Pipeline` — line 24
- `## GitHub Actions Configuration` — line 56
- `### Basic CI Pipeline` — line 58
- `### With Database Integration Tests` — line 100
- `### E2E Tests` — line 139
- `## Feeding CI Failures Back to Agents` — line 164
- `## Deployment Strategies` — line 193
- `### Preview Deployments` — line 195
- `### Feature Flags` — line 210
- `### Staged Rollouts` — line 229
- `### Rollback Plan` — line 247
- `## Environment Management` — line 271
- `## Automation Beyond CI` — line 283
- `### Dependabot / Renovate` — line 285
- `### Build Cop Role` — line 298
- `### PR Checks` — line 302
- `## CI Optimization` — line 310
- `## Common Rationalizations` — line 360
- `## Red Flags` — line 370
- `## Verification` — line 380

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — skills/ci-cd-and-automation/SKILL.md:364 — Rationalization table text refers to "(see CI Optimization below)", but the `## CI Optimization` section is located above at line 310.

## Observations
- Skill acts as the central automated quality enforcement spine for the Addy lifecycle, directly operationalizing the principles "Shift Left" and "Faster is Safer".
- Introduces the human/operational role "Build Cop" (line 298) responsible for keeping CI green, distinct from author-led fixing.
- Provides a dedicated feedback-loop pattern specifically for feeding CI failure traces back into agent prompts (lines 164–192).

## Context cost
11,332 bytes (approx. 2,833 tokens). If loaded alongside invoked skill `debugging-and-error-recovery` (14,068 bytes), total combined context cost is 25,400 bytes (approx. 6,350 tokens).
```

---

### Inventory Entry 2: `skills/context-engineering/SKILL.md`

```markdown
---
package: addy
path: skills/context-engineering/SKILL.md
type: skill
bytes: 11070
unit: inv-addy-14
---

# skills/context-engineering/SKILL.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." — skills/context-engineering/SKILL.md:3

## Design intent — required
Language model performance degrades rapidly under context starvation (hallucinating non-existent APIs and ignoring conventions) or context flooding (>5,000 lines of diffuse context causing attention distraction). `context-engineering` solves the problem of unreliable, drifting agent behavior by establishing rigorous context curation disciplines: structuring context into a 5-level persistence hierarchy (Rules Files → Specs/Architecture → Source Files → Error Output → Conversation History), defining structured context packing patterns (The Brain Dump, The Selective Include, The Hierarchical Summary / Project Map), classifying loaded files by trust tiers (Trusted, Verify before acting on, Untrusted), integrating MCP servers for live context, and providing explicit confusion management / inline planning protocols when specifications are contradictory or incomplete. Without it, agents either drift blindly or become overwhelmed by excessive context dumps, leading to hallucinated code, broken conventions, and costly rework.

## Phase — required
addy:Build

## Inputs — required
- Project tech stack, commands, conventions, boundaries, and architectural patterns
- Rules files (project-level persistent instructions: `CLAUDE.md`, `.cursorrules`, `.cursor/rules/*.md`, `.windsurfrules`, `.github/copilot-instructions.md`, `AGENTS.md`)
- Feature specifications and architecture documentation (scoped excerpts)
- Relevant source code, tests, and type definitions
- Error traces and test failures (minimal, specific excerpts)
- Model Context Protocol (MCP) server feeds (Context7, Chrome DevTools, PostgreSQL, Filesystem, GitHub)
- Ambiguities, conflicting requirements, or missing specifications detected during execution

## Outputs — required
- Curated project rules files (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`)
- Task-scoped context packages (The Brain Dump, The Selective Include, The Hierarchical Summary / `Project Map`)
- Trust-tiered context classifications (Trusted, Verify before acting on, Untrusted)
- Surface clarifications for conflicting or incomplete requirements (The Confusion Management prompt pattern)
- Lightweight execution plans before multi-step tasks (The Inline Planning Pattern)
- Context hygiene actions (fresh sessions, progressive summarization, deliberate compaction)

## Invokes — required
none

## Invoked by — required
- doc `CLAUDE.md` — CLAUDE.md:23
- doc `README.md` — README.md:251, 359
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:27, 150, 177
- skill `skills/spec-driven-development/SKILL.md` — skills/spec-driven-development/SKILL.md:202
- doc `docs/adoption-guide.md` — docs/adoption-guide.md:32, 81, 112, 124
- config `evals/cases/context-engineering.json` — evals/cases/context-engineering.json:2, 35

## Concepts named — required, verbatim
- `context-engineering` — skills/context-engineering/SKILL.md:2 — defined here
- `The Context Hierarchy` — skills/context-engineering/SKILL.md:20 — defined here
- `Rules Files` — skills/context-engineering/SKILL.md:26, 38 — defined here
- `Specs and Architecture` — skills/context-engineering/SKILL.md:28, 80 — defined here
- `Relevant Source Files` — skills/context-engineering/SKILL.md:30, 88 — defined here
- `Error Output` — skills/context-engineering/SKILL.md:32, 105 — defined here
- `Conversation Management` — skills/context-engineering/SKILL.md:34, 113 — defined here
- `CLAUDE.md` — skills/context-engineering/SKILL.md:42 — used here
- `.cursorrules` — skills/context-engineering/SKILL.md:75 — used here
- `.cursor/rules/*.md` — skills/context-engineering/SKILL.md:75 — used here
- `.windsurfrules` — skills/context-engineering/SKILL.md:76 — used here
- `.github/copilot-instructions.md` — skills/context-engineering/SKILL.md:77 — used here
- `AGENTS.md` — skills/context-engineering/SKILL.md:78 — used here
- `Pre-task context loading` — skills/context-engineering/SKILL.md:92 — defined here
- `Trust levels for loaded files` — skills/context-engineering/SKILL.md:98 — defined here
- `Trusted` — skills/context-engineering/SKILL.md:99 — defined here
- `Verify before acting on` — skills/context-engineering/SKILL.md:100 — defined here
- `Untrusted` — skills/context-engineering/SKILL.md:101 — defined here
- `Context Packing Strategies` — skills/context-engineering/SKILL.md:121 — defined here
- `The Brain Dump` — skills/context-engineering/SKILL.md:123 — defined here
- `The Selective Include` — skills/context-engineering/SKILL.md:137 — defined here
- `The Hierarchical Summary` — skills/context-engineering/SKILL.md:156 — defined here
- `Project Map` — skills/context-engineering/SKILL.md:161 — defined here
- `MCP Integrations` — skills/context-engineering/SKILL.md:180 — defined here
- `Context7` — skills/context-engineering/SKILL.md:186 — used here
- `Chrome DevTools` — skills/context-engineering/SKILL.md:187 — used here
- `PostgreSQL` — skills/context-engineering/SKILL.md:188 — used here
- `Filesystem` — skills/context-engineering/SKILL.md:189 — used here
- `GitHub` — skills/context-engineering/SKILL.md:190 — used here
- `Confusion Management` — skills/context-engineering/SKILL.md:192 — defined here
- `When Context Conflicts` — skills/context-engineering/SKILL.md:196 — defined here
- `When Requirements Are Incomplete` — skills/context-engineering/SKILL.md:218 — defined here
- `The Inline Planning Pattern` — skills/context-engineering/SKILL.md:239 — defined here
- `Anti-Patterns` — skills/context-engineering/SKILL.md:253 — defined here
- `Context starvation` — skills/context-engineering/SKILL.md:257 — defined here
- `Context flooding` — skills/context-engineering/SKILL.md:258 — defined here
- `Stale context` — skills/context-engineering/SKILL.md:259 — defined here
- `Missing examples` — skills/context-engineering/SKILL.md:260 — defined here
- `Implicit knowledge` — skills/context-engineering/SKILL.md:261 — defined here
- `Silent confusion` — skills/context-engineering/SKILL.md:262 — defined here
- `Common Rationalizations` — skills/context-engineering/SKILL.md:264 — defined here
- `Red Flags` — skills/context-engineering/SKILL.md:273 — defined here
- `Verification` — skills/context-engineering/SKILL.md:282 — defined here

## Structure
- `# Context Engineering` — line 6
- `## Overview` — line 8
- `## When to Use` — line 12
- `## The Context Hierarchy` — line 20
- `### Level 1: Rules Files` — line 38
- `### Level 2: Specs and Architecture` — line 80
- `### Level 3: Relevant Source Files` — line 88
- `### Level 4: Error Output` — line 105
- `### Level 5: Conversation Management` — line 113
- `## Context Packing Strategies` — line 121
- `### The Brain Dump` — line 123
- `### The Selective Include` — line 137
- `### The Hierarchical Summary` — line 156
- `## MCP Integrations` — line 180
- `## Confusion Management` — line 192
- `### When Context Conflicts` — line 196
- `### When Requirements Are Incomplete` — line 218
- `### The Inline Planning Pattern` — line 239
- `## Anti-Patterns` — line 253
- `## Common Rationalizations` — line 264
- `## Red Flags` — line 273
- `## Verification` — line 282

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the 5-level "Context Hierarchy" which parallels modern prompt engineering and context caching architectures (persistent rules → per-session specs → per-task source files → per-iteration error outputs → compacting conversation history).
- Features "Trust levels for loaded files" (Trusted, Verify before acting on, Untrusted), explicitly protecting against indirect prompt injection where external docs/config contain instruction-like text.
- Introduces "The Inline Planning Pattern" (emit a lightweight 3-step plan before execution: "Executing unless you redirect") as a rapid 30-second alignment safeguard.
- Line 78 notes `AGENTS.md (OpenAI Codex)`; while modern practice uses `AGENTS.md` broadly across agent runtimes (including Antigravity), in Addy's codebase this serves as the Codex equivalent to Claude Code's `CLAUDE.md`.

## Context cost
11,070 bytes (approx. 2,768 tokens). Isolated execution (no child skills invoked).
```

---

## 5. Verification Method

To independently verify all findings in this report:

1. **Verify File Existence and Integrity:**
   ```bash
   ls -la sources/addy/skills/ci-cd-and-automation/SKILL.md
   ls -la sources/addy/skills/context-engineering/SKILL.md
   ```
2. **Verify Line Counts and File Sizes:**
   ```bash
   wc -l sources/addy/skills/ci-cd-and-automation/SKILL.md sources/addy/skills/context-engineering/SKILL.md
   wc -c sources/addy/skills/ci-cd-and-automation/SKILL.md sources/addy/skills/context-engineering/SKILL.md
   ```
3. **Verify Defect in `ci-cd-and-automation/SKILL.md`:**
   ```bash
   grep -n "see CI Optimization below" sources/addy/skills/ci-cd-and-automation/SKILL.md
   grep -n "## CI Optimization" sources/addy/skills/ci-cd-and-automation/SKILL.md
   ```
   Confirm that line 310 (`## CI Optimization`) precedes line 364 ("see CI Optimization below").
4. **Verify Lifecycle Phase Classification:**
   ```bash
   grep -n "ci-cd-and-automation" sources/addy/CLAUDE.md sources/addy/README.md sources/addy/skills/using-agent-skills/SKILL.md
   grep -n "context-engineering" sources/addy/CLAUDE.md sources/addy/README.md sources/addy/skills/using-agent-skills/SKILL.md
   ```
5. **Verify No Scripts Exist in Scope:**
   ```bash
   ls sources/addy/skills/ci-cd-and-automation/
   ls sources/addy/skills/context-engineering/
   ```
