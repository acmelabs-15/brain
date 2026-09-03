# Source File Survey Report: inv-addy-20

- **Work Unit**: `inv-addy-20` (Phase 1 Inventory Extraction)
- **Investigator**: Explorer 1 (`teamwork_preview_explorer_inv_addy_20_1`)
- **Target Source**: `sources/addy` (Pinned SHA: `d2c37ef6225dd8726cdd369a8030307f48592d26`)
- **Date**: 2026-09-03
- **Status**: COMPLETE

---

## 1. Executive Summary & Assigned Files

This report provides an exhaustive, line-by-line survey and analysis of the 5 files assigned to work unit `inv-addy-20`. Every file has been verified for physical byte counts, line counts, character counts, frontmatter, heading hierarchy, purpose statements, inputs, outputs, invocation relationships, named concepts, scripts, exit codes, and defects according to `docs/plan/METHOD.md` §3 (R1–R6) and §4.

### 1.1 Scope Table

| # | File Path | Type | Bytes | Lines | Words | Chars | Phase |
|---|---|---|---|---|---|---|---|
| 1 | `sources/addy/skills/git-workflow-and-versioning/SKILL.md` | `skill` | 14,063 | 356 | 2,142 | 13,785 | `addy:Ship` |
| 2 | `sources/addy/skills/documentation-and-adrs/SKILL.md` | `skill` | 9,782 | 289 | 1,470 | 9,748 | `addy:Ship` |
| 3 | `sources/addy/AGENTS.md` | `doc` | 5,386 | 93 | 720 | 5,348 | `cross-phase` |
| 4 | `sources/addy/.codex-plugin/plugin.json` | `config` | 1,119 | 30 | 112 | 1,119 | `cross-phase` |
| 5 | `sources/addy/CLAUDE.md` | `doc` | 4,094 | 61 | 508 | 4,072 | `cross-phase` |
| **Total** | **5 files** | — | **34,444** | **829** | **4,952** | **34,072** | — |

*Note on counts:* Byte counts strictly match the manifest (`docs/analysis/manifest/addy.md` rows 188–192). Character counts are multibyte counts reported by `wc -m`. Line counts include the trailing newline.

---

## 2. File Survey 1: `sources/addy/skills/git-workflow-and-versioning/SKILL.md`

### 2.1 File Properties
- **Path**: `sources/addy/skills/git-workflow-and-versioning/SKILL.md`
- **Relative Path**: `skills/git-workflow-and-versioning/SKILL.md`
- **Size**: 14,063 bytes | 356 lines | 2,142 words | 13,785 characters
- **Type**: `skill`
- **Unit**: `inv-addy-20`

### 2.2 Frontmatter
```yaml
---
name: git-workflow-and-versioning
description: Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog.
---
```

### 2.3 Purpose & Design Intent
- **Purpose (Verbatim lines 10–11)**:
  > "Git is your safety net. Treat commits as save points, branches as sandboxes, and history as documentation. With AI agents generating code at high speed, disciplined version control is the mechanism that keeps changes manageable, reviewable, and reversible." — `skills/git-workflow-and-versioning/SKILL.md:10-11`
- **Design Intent**:
  AI coding agents write and rewrite code at extreme velocities, making runaway regressions, massive unreviewable diffs, and context drift common failure modes. This skill institutes git as the central transactional ledger for agentic workflows: trunk-based development prevents divergence, small atomic commits act as instantaneous rollback save points, worktrees isolate concurrent subagent streams without branch thrashing, pre-commit hygiene eliminates credential leaks and broken builds, and Semantic Versioning with human-curated changelogs ensures consumer contracts remain unviolated.

### 2.4 Lifecycle Phase
- Assigned to **`addy:Ship`** in `sources/addy/CLAUDE.md:26` and `sources/addy/README.md:371`.
- Operates cross-cuttingly during all code modifications (`skills/git-workflow-and-versioning/SKILL.md:14`: *"Always. Every code change flows through git."*).

### 2.5 Inputs & Outputs
- **Inputs**:
  - Dirty working tree / uncommitted file changes
  - User requests to branch, commit, resolve merge conflicts, open/review PRs, or release/tag
  - Project test runners (`npm test`), linters (`npm run lint`), and typecheckers (`npx tsc --noEmit`)
  - Target consumers / observable behavioral changes (to assess breaking vs non-breaking impact)
- **Outputs**:
  - Small, atomic commits (~100 lines target) with conventional commit messages (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`)
  - Short-lived feature branches (`feature/<desc>`, `fix/<desc>`, `chore/<desc>`, `refactor/<desc>`)
  - Isolated git worktree directories (`../project-feature-a`, `../project-feature-b`)
  - Structured change summaries with explicit out-of-scope boundaries (`CHANGES MADE`, `THINGS I DIDN'T TOUCH (intentionally)`, `POTENTIAL CONCERNS`)
  - Annotated release tags (`git tag -a v1.4.0 -m "Release 1.4.0"`)
  - Curated changelog entries grouped by `Added / Changed / Fixed / Deprecated / Removed / Security`
  - Properly configured `.gitignore` excluding secrets, dependencies, and build artifacts

### 2.6 Invocation Relationships
- **Invokes**:
  - `skills/code-review-and-quality/SKILL.md` — cited at line 113 for change-splitting strategies: *"See the splitting strategies in `code-review-and-quality` for how to break down large changes."*
  - `skills/api-and-interface-design/SKILL.md` — cited at line 284 for Hyrum's Law: *"A 'patch' that changes behavior consumers relied on is a major change wearing a disguise (Hyrum's Law — see the `api-and-interface-design` skill)."*
  - `skills/deprecation-and-migration/SKILL.md` — cited at line 311 for deprecation windows: *"Breaking changes get a migration note and a deprecation window (follow the `deprecation-and-migration` skill)"*
  - `skills/shipping-and-launch/SKILL.md` — cited at line 311 as downstream consumer: *"shipping the actual release is the `shipping-and-launch` skill's job — this section is the versioning contract that feeds it."*
- **Invoked by**:
  - `evals/cases/git-workflow-and-versioning.json` (trigger eval case)
  - `README.md:277, 371`
  - `CLAUDE.md:26`
  - `docs/codex-setup.md:25` (via Codex `@git-workflow-and-versioning`)
  - *Orphan Note:* Not invoked by any slash command in `.claude/commands/` or `.claude-plugin/plugin.json`.

### 2.7 Complete Heading Structure
1. `# Git Workflow and Versioning` (line 6)
2. `## Overview` (line 8)
3. `## When to Use` (line 12)
4. `## Core Principles` (line 16)
   - `### Trunk-Based Development (Recommended)` (line 18)
   - `### 1. Commit Early, Commit Often` (line 34)
   - `### 2. Atomic Commits` (line 48)
   - `### 3. Descriptive Messages` (line 65)
   - `### 4. Keep Concerns Separate` (line 96)
   - `### 5. Size Your Changes` (line 111)
5. `## Branching Strategy` (line 121)
   - `### Feature Branches` (line 123)
   - `### Branch Naming` (line 138)
6. `## Working with Worktrees` (line 147)
7. `## The Save Point Pattern` (line 173)
8. `## Change Summaries` (line 191)
9. `## Pre-Commit Hygiene` (line 211)
10. `## Handling Generated Files` (line 244)
11. `## Using Git for Debugging` (line 250)
12. `## Release & Versioning` (line 270)
    - `### Semantic Versioning` (line 274)
    - `### Tag the release, and let the tag be the source of truth` (line 286)
    - `### Keep a changelog written for humans` (line 297)
13. `## Common Rationalizations` (line 313)
14. `## Red Flags` (line 327)
15. `## Verification` (line 340)

### 2.8 Exhaustive Concepts Named
- `Trunk-Based Development` — line 18 — defined here
- `short-lived feature branches` — line 20 — defined here
- `DORA research` — line 20 — used here
- `gitflow` — line 28 — used here
- `feature flags` — lines 32, 136 — used here
- `atomic commits` — lines 28, 48 — defined here
- `save points` — lines 10, 46, 173 — defined here
- `descriptive messages` — line 65 — defined here
- `conventional commit types` (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`) — lines 88–95 — defined here
- `keep concerns separate` — line 96 — defined here
- `size your changes` (~100 lines target, ~300 lines acceptable, ~1000 lines split) — lines 111–119 — defined here
- `splitting strategies` — line 113 — used here (references `code-review-and-quality`)
- `branching strategy` — line 121 — defined here
- `branch naming conventions` (`feature/`, `fix/`, `chore/`, `refactor/`) — lines 138–145 — defined here
- `git worktrees` — lines 147–172 — defined here
- `The Save Point Pattern` — lines 173–190 — defined here
- `Change Summaries` (`CHANGES MADE`, `THINGS I DIDN'T TOUCH`, `POTENTIAL CONCERNS`) — lines 191–210 — defined here
- `scope discipline` — lines 193, 209 — defined here
- `Pre-Commit Hygiene` — lines 211–243 — defined here
- `lint-staged + husky` — line 235 — used here
- `git bisect` — lines 252–257 — used here
- `git blame` — lines 263–264 — used here
- `Semantic Versioning` (`MAJOR.MINOR.PATCH`) — lines 274–285 — defined here
- `Hyrum's Law` — line 284 — used here (references `api-and-interface-design`)
- `immutable release tags` — lines 286–296 — defined here
- `curated changelog` / `Keep a Changelog` — lines 297–312 — defined here
- `deprecation window` — line 311 — used here (references `deprecation-and-migration`)

### 2.9 Verbatim Blocks, Code Patterns & Tables
- **Trunk-Based Diagram (lines 22–26)**:
  ```
  main ──●──●──●──●──●──●──●──●──●──  (always deployable)
          ╲      ╱  ╲    ╱
           ●──●─╱    ●──╱    ← short-lived feature branches (1-3 days)
  ```
- **The Save Point Pattern Diagram (lines 175–187)**:
  ```
  Agent starts work
      │
      ├── Makes a change
      │   ├── Test passes? → Commit → Continue
      │   └── Test fails? → Revert to last commit → Investigate
      │
      ├── Makes another change
      │   ├── Test passes? → Commit → Continue
      │   └── Test fails? → Revert to last commit → Investigate
      │
      └── Feature complete → All commits form a clean history
  ```
- **Change Summary Schema (lines 196–207)**:
  ```
  CHANGES MADE:
  - <path>: <what changed>

  THINGS I DIDN'T TOUCH (intentionally):
  - <path>: <why omitted / out of scope>

  POTENTIAL CONCERNS:
  - <trade-off, dependency impact, or review confirmation item>
  ```
- **Common Rationalizations (Table, lines 315–326)**: Contains 9 rows contrasting rationalizations vs reality ("I'll commit when the feature is done", "The message doesn't matter", "I'll squash it all later", "Branches add overhead", "I'll split this change later", "I don't need a .gitignore", "It's just a small fix, bump the patch", "The changelog is just the commit log", "We'll write the changelog at release time").
- **Red Flags (lines 329–339)**: 10 explicit red flags.
- **Verification Checklist (lines 342–355)**: 6 commit checklist items and 3 release checklist items.

### 2.10 Defects, Drift & Observations
- `missing-from-orchestrator`: Omitted entirely from `AGENTS.md` intent-to-skill and lifecycle mapping (neither lines 26–32 nor 40–45 mention `git-workflow-and-versioning`).
- `command-gap`: No slash command exists in `.claude/commands/` for versioning or git workflow.
- `unresolvable-changelog-in-repo`: Directs users to keep a changelog (`skills/git-workflow-and-versioning/SKILL.md:297`), but the `addyosmani/agent-skills` repository itself has no `CHANGELOG.md`.

---

## 3. File Survey 2: `sources/addy/skills/documentation-and-adrs/SKILL.md`

### 3.1 File Properties
- **Path**: `sources/addy/skills/documentation-and-adrs/SKILL.md`
- **Relative Path**: `skills/documentation-and-adrs/SKILL.md`
- **Size**: 9,782 bytes | 289 lines | 1,470 words | 9,748 characters
- **Type**: `skill`
- **Unit**: `inv-addy-20`

### 3.2 Frontmatter
```yaml
---
name: documentation-and-adrs
description: Records decisions and documentation. Use when making architectural decisions, changing public APIs, shipping features, or when you need to record context that future engineers and agents will need to understand the codebase.
---
```

### 3.3 Purpose & Design Intent
- **Purpose (Verbatim lines 10–11)**:
  > "Document decisions, not just code. The most valuable documentation captures the *why* — the context, constraints, and trade-offs that led to a decision. Code shows *what* was built; documentation explains *why it was built this way* and *what alternatives were considered*. This context is essential for future humans and agents working in the codebase." — `skills/documentation-and-adrs/SKILL.md:10-11`
- **Design Intent**:
  Prevents technical amnesia and redundant debates by institutionalizing Architecture Decision Records (ADRs), intent-driven inline comments, typed public API documentation (JSDoc / OpenAPI), clean READMEs, and agent rules. Crucially separates the *why* (stable rationale, rejected options) from the *what* (ephemeral implementation details), creating durable memory assets that protect incoming human developers and autonomous AI agents from falling into known architectural traps or silently reversing past decisions.

### 3.4 Lifecycle Phase
- Assigned to **`addy:Ship`** in `sources/addy/CLAUDE.md:26` and `sources/addy/README.md:374`.
- Also provides templates and standards for upstream phases: Define/Plan (ADRs), Build (JSDoc/gotchas), and Ship (Changelog).

### 3.5 Inputs & Outputs
- **Inputs**:
  - Architectural choices (frameworks, database models, auth strategies, protocols)
  - Existing project ADR layout conventions (`.adr-dir`, `docs/adr/*.md`, `Documentation/Decisions/*.rst`, MADR, `adr-tools`)
  - Public API functions, REST endpoints, and schemas
  - Known runtime gotchas, hydration hazards, or initialization constraints
  - Shipped pull requests / user-facing behavioral changes
- **Outputs**:
  - Sequentially numbered ADR files (default: `docs/decisions/ADR-NNN-title.md`) with Status, Date, Context, Decision, Alternatives Considered (with Pros/Cons/Rejected), and Consequences
  - TypeScript inline documentation / JSDoc comments (`@param`, `@returns`, `@throws`, `@example`)
  - OpenAPI / Swagger YAML declarations (`paths:`, `components/schemas/`)
  - Standard `README.md` containing Quick Start, Commands, Architecture, and Contributing
  - Curated `Changelog` entries (`Added`, `Fixed`, `Changed`)
  - Agent rule files (`CLAUDE.md`, rules files)

### 3.6 Invocation Relationships
- **Invokes**:
  - `CLAUDE.md` — lines 254, 288 (as target documentation asset for agent context)
  - `README.md` — lines 200, 273, 284
- **Invoked by**:
  - `evals/cases/documentation-and-adrs.json`
  - `evals/fixtures/documentation-and-adrs/decision-context.md`
  - `README.md:280, 374`
  - `CLAUDE.md:26`
  - `docs/codex-setup.md:25` (via Codex `@documentation-and-adrs`)
  - *Orphan Note:* Not invoked by any slash command or agent persona in `sources/addy`.

### 3.7 Complete Heading Structure
1. `# Documentation and ADRs` (line 6)
2. `## Overview` (line 8)
3. `## When to Use` (line 12)
4. `## Architecture Decision Records (ADRs)` (line 23)
   - `### When to Write an ADR` (line 27)
   - `### Match the existing convention first` (line 36)
   - `### ADR Template` (line 46)
   - `### ADR Lifecycle` (line 93)
5. `## Inline Documentation` (line 102)
   - `### When to Comment` (line 104)
   - `### When NOT to Comment` (line 122)
   - `### Document Known Gotchas` (line 137)
6. `## API Documentation` (line 152)
   - `### Inline with Types (Preferred for TypeScript)` (line 156)
   - `### OpenAPI / Swagger for REST APIs` (line 176)
7. `## README Structure` (line 200)
8. `## Changelog Maintenance` (line 231)
9. `## Documentation for Agents` (line 250)
10. `## Common Rationalizations` (line 259)
11. `## Red Flags` (line 269)
12. `## Verification` (line 279)

### 3.8 Exhaustive Concepts Named
- `Architecture Decision Records (ADRs)` — line 23 — defined here
- `MADR layout` — line 40 — used here
- `adr-tools` — line 40 — used here
- `ADR Template` (`Status`, `Date`, `Context`, `Decision`, `Alternatives Considered`, `Consequences`) — lines 46–91 — defined here
- `ADR Lifecycle` (`PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)`) — lines 93–97 — defined here
- `inline documentation standards` (`comment the why, not the what`) — lines 104–136 — defined here
- `Document Known Gotchas` — lines 137–150 — defined here
- `API Documentation` — line 152 — defined here
- `inline with types (JSDoc)` — lines 156–174 — defined here
- `OpenAPI / Swagger for REST APIs` — lines 176–199 — defined here
- `README Structure` (`Quick Start`, `Commands`, `Architecture`, `Contributing`) — lines 200–230 — defined here
- `Changelog Maintenance` (`Added`, `Fixed`, `Changed`) — lines 231–249 — defined here
- `Documentation for Agents` (`CLAUDE.md / rules files`, `Spec files`, `ADRs`, `Inline gotchas`) — lines 250–258 — defined here

### 3.9 Verbatim Blocks, Code Patterns & Tables
- **ADR Template (lines 50–91)**:
  ```markdown
  # ADR-001: Use PostgreSQL for primary database

  ## Status
  Accepted | Superseded by ADR-XXX | Deprecated

  ## Date
  2025-01-15

  ## Context
  We need a primary database for the task management application. Key requirements:
  - Relational data model (users, tasks, teams with relationships)
  - ACID transactions for task state changes
  - Support for full-text search on task content
  - Managed hosting available (for small team, limited ops capacity)

  ## Decision
  Use PostgreSQL with Prisma ORM.

  ## Alternatives Considered
  ### MongoDB
  - Pros: Flexible schema, easy to start with
  - Cons: Our data is inherently relational; would need to manage relationships manually
  - Rejected: Relational data in a document store leads to complex joins or data duplication
  ### SQLite
  - Pros: Zero configuration, embedded, fast for reads
  - Cons: Limited concurrent write support, no managed hosting for production
  - Rejected: Not suitable for multi-user web application in production
  ### MySQL
  - Pros: Mature, widely supported
  - Cons: PostgreSQL has better JSON support, full-text search, and ecosystem tooling
  - Rejected: PostgreSQL is the better fit for our feature requirements

  ## Consequences
  - Prisma provides type-safe database access and migration management
  - We can use PostgreSQL's full-text search instead of adding Elasticsearch
  - Team needs PostgreSQL knowledge (standard skill, low risk)
  - Hosting on managed service (Supabase, Neon, or RDS)
  ```
- **ADR Lifecycle Diagram (lines 95–97)**:
  `PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)`
- **JSDoc Gotcha Pattern (lines 140–150)**:
  ```typescript
  /**
   * IMPORTANT: This function must be called before the first render.
   * If called after hydration, it causes a flash of unstyled content
   * because the theme context isn't available during SSR.
   *
   * See ADR-003 for the full design rationale.
   */
  export function initializeTheme(theme: Theme): void { ... }
  ```
- **Common Rationalizations (Table, lines 261–268)**: 5 rows ("The code is self-documenting", "We'll write docs when the API stabilizes", "Nobody reads docs", "ADRs are overhead", "Comments get outdated").
- **Red Flags (lines 270–278)**: 7 red flags.
- **Verification Checklist (lines 281–288)**: 6 verification checks.

### 3.10 Defects, Drift & Observations
- `missing-from-orchestrator`: Omitted from `AGENTS.md` (no intent mapping or lifecycle mapping entry).
- `self-reference-absence`: Prescribes storing ADRs in `docs/decisions/` (line 48), but `sources/addy` does not practice this internally — there is no `docs/decisions/` directory in `sources/addy/`.
- `command-gap`: No slash command exists to orchestrate ADR authoring.

---

## 4. File Survey 3: `sources/addy/AGENTS.md`

### 4.1 File Properties
- **Path**: `sources/addy/AGENTS.md`
- **Relative Path**: `AGENTS.md`
- **Size**: 5,386 bytes | 93 lines | 720 words | 5,348 characters
- **Type**: `doc`
- **Unit**: `inv-addy-20`

### 4.2 Purpose & Design Intent
- **Purpose (Verbatim lines 3–5)**:
  > "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository.
  >
  > > **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself. It is not meant to be copied into other projects or into a global agent configuration; the reusable assets are the skills in `skills/`, not this file." — `AGENTS.md:3-5`
- **Design Intent**:
  Provides the central governing rules for autonomous AI coding agents executing in the `agent-skills` codebase. Establishes the OpenCode skill-driven execution model, maps intents and implicit lifecycle phases to skills, forbids manual implementation when a skill applies, and establishes the strict multi-agent orchestration architecture: Users and Slash Commands are orchestrators; personas never invoke other personas; multi-persona work is strictly parallel fan-out with a merge step.

### 4.3 Lifecycle Phase
- **`cross-phase`** (governs agent execution and orchestration across all lifecycle phases).

### 4.4 Inputs & Outputs
- **Inputs**:
  - User requests / intent submitted to coding agents
  - OpenCode `skill` tool
  - `CONTRIBUTING.md#before-proposing-a-new-skill`
  - `docs/skill-anatomy.md`
  - `docs/agents.md`
  - `references/orchestration-patterns.md`
- **Outputs**:
  - Mandatory skill invocations via `skill` tool or slash commands
  - Orchestration plans (parallel fan-out of subagents for review/ship)
  - Compliant skill directories (`skills/<kebab-case-name>/SKILL.md`)

### 4.5 Invocation Relationships
- **Invokes**:
  - Skills:
    - `skills/spec-driven-development/SKILL.md` (lines 26, 40)
    - `skills/incremental-implementation/SKILL.md` (lines 26, 42)
    - `skills/test-driven-development/SKILL.md` (lines 26, 42)
    - `skills/planning-and-task-breakdown/SKILL.md` (lines 27, 41)
    - `skills/debugging-and-error-recovery/SKILL.md` (lines 28, 43)
    - `skills/code-review-and-quality/SKILL.md` (lines 29, 44)
    - `skills/code-simplification/SKILL.md` (line 30)
    - `skills/api-and-interface-design/SKILL.md` (line 31)
    - `skills/frontend-ui-engineering/SKILL.md` (line 32)
    - `skills/shipping-and-launch/SKILL.md` (line 45)
  - Personas:
    - `agents/code-reviewer.md` (line 80)
    - `agents/security-auditor.md` (line 80)
    - `agents/test-engineer.md` (line 80)
  - Slash Commands:
    - `.claude/commands/ship.md` / `commands/ship.toml` (line 80)
    - `.claude/commands/spec.md` (line 36)
    - `.claude/commands/plan.md` (line 36)
  - Reference and Doc Files:
    - `docs/agents.md` (line 82)
    - `references/orchestration-patterns.md` (line 82)
    - `CONTRIBUTING.md` (line 88)
    - `docs/skill-anatomy.md` (lines 88, 92)
- **Invoked by**:
  - Automatically loaded by Antigravity CLI and multi-agent harnesses at repo root.

### 4.6 Complete Heading Structure
1. `# AGENTS.md` (line 1)
2. `## Repository Overview` (line 7)
3. `## OpenCode Integration` (line 11)
   - `### Core Rules` (line 15)
   - `### Intent → Skill Mapping` (line 22)
   - `### Lifecycle Mapping (Implicit Commands)` (line 34)
   - `### Execution Model` (line 47)
   - `### Anti-Rationalization` (line 56)
4. `## Orchestration: Personas, Skills, and Commands` (line 70)
5. `## Creating a New Skill` (line 86)

### 4.7 Exhaustive Concepts Named
- `skill-driven execution model` — line 13 — defined here
- `OpenCode Integration` — line 11 — defined here
- `skill tool` — lines 13, 52 — used here
- `Intent → Skill Mapping` — line 22 — defined here
- `Lifecycle Mapping (Implicit Commands)` (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`) — lines 34–46 — defined here
- `Execution Model` (4-step sequence: determine, invoke, follow, implement) — lines 47–55 — defined here
- `Anti-Rationalization` rules for agents — lines 56–68 — defined here
- `Three composable layers` (`Skills`, `Personas`, `Slash commands`) — lines 70–77 — defined here
- `Composition rule` ("user/command is orchestrator; personas do not invoke personas") — line 78 — defined here
- `Parallel fan-out with a merge step` — line 80 — defined here
- `Anti-pattern: router persona` — line 80 — defined here
- `Claude Code interop` (subagents, Agent Teams, frontmatter limitations) — line 84 — defined here
- `Pre-flight checks` — line 88 — used here
- `Markdown-first skills` — line 90 — defined here
- `Skill section anatomy` (`Overview`, `When to Use`, `Process`, `Common Rationalizations`, `Red Flags`, `Verification`) — line 90 — defined here

### 4.8 Key Verbatim Rules & Orchestration Architecture
- **Three Composable Layers (lines 74–77)**:
  > "- **Skills** (`skills/<name>/SKILL.md`) — workflows with steps and exit criteria. The *how*. Mandatory hops when an intent matches.
  > - **Personas** (`agents/<role>.md`) — roles with a perspective and an output format. The *who*.
  > - **Slash commands** (`.claude/commands/*.md`) — user-facing entry points. The *when*. The orchestration layer."
- **Composition Rule (line 78)**:
  > "the user (or a slash command) is the orchestrator. Personas do not invoke other personas. A persona may invoke skills."
- **The Fan-out Rule (line 80)**:
  > "The only multi-persona orchestration pattern this repo endorses is **parallel fan-out with a merge step** — used by `/ship` to run `code-reviewer`, `security-auditor`, and `test-engineer` concurrently and synthesize their reports. Do not build a 'router' persona that decides which other persona to call; that's the job of slash commands and intent mapping."
- **Claude Code Platform Constraints (line 84)**:
  > "subagents cannot spawn other subagents, and teams cannot nest. Plugin agents silently ignore the `hooks`, `mcpServers`, and `permissionMode` frontmatter fields."

### 4.9 Defects, Drift & Observations
- `doc-drift`: In § Lifecycle Mapping (lines 40–45), the 6 phases map to only 7 skills, leaving out 18 of the 25 skills in `skills/`. Specifically, `SHIP` is mapped exclusively to `shipping-and-launch`, omitting `git-workflow-and-versioning`, `documentation-and-adrs`, `ci-cd-and-automation`, `deprecation-and-migration`, and `observability-and-instrumentation`.
- `incomplete-intent-mapping`: Intent → Skill Mapping lists only 7 intents (lines 26–32), omitting 18 skills.

---

## 5. File Survey 4: `sources/addy/.codex-plugin/plugin.json`

### 5.1 File Properties
- **Path**: `sources/addy/.codex-plugin/plugin.json`
- **Relative Path**: `.codex-plugin/plugin.json`
- **Size**: 1,119 bytes | 30 lines | 112 words | 1,119 characters
- **Type**: `config`
- **Unit**: `inv-addy-20`

### 5.2 Complete Verbatim Content
```json
{
  "name": "agent-skills",
  "version": "0.6.8",
  "description": "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship.",
  "author": {
    "name": "Addy Osmani",
    "url": "https://github.com/addyosmani"
  },
  "homepage": "https://github.com/addyosmani/agent-skills",
  "repository": "https://github.com/addyosmani/agent-skills",
  "license": "MIT",
  "skills": "./skills/",
  "interface": {
    "displayName": "Agent Skills",
    "shortDescription": "Senior-engineer workflows for AI coding agents: spec, plan, build, test, review, ship.",
    "longDescription": "Agent Skills bundles 24 production engineering workflows from Addy Osmani, covering requirements, planning, implementation, testing, review, and shipping.",
    "developerName": "Addy Osmani",
    "category": "Productivity",
    "capabilities": [
      "Interactive",
      "Read",
      "Write"
    ],
    "defaultPrompt": [
      "Help me choose the right engineering workflow for this task",
      "Plan and implement this change using the relevant Agent Skills"
    ]
  }
}
```

### 5.3 Purpose & Design Intent
- **Purpose**:
  Manifest file configuring the `agent-skills` repository as a native OpenAI Codex plugin. Defines metadata, author details, skills root directory, category, capability permissions (`Interactive`, `Read`, `Write`), and discovery prompts.
- **Design Intent**:
  Provides multi-platform compatibility for Codex users without duplicating skill files. Re-uses the exact same markdown skills repository consumed by Claude Code and Antigravity.

### 5.4 Lifecycle Phase
- **`cross-phase`** (plugin distribution and platform manifest).

### 5.5 Invocation Relationships
- **Invokes**:
  - `./skills/` (line 12)
- **Invoked by / Tested by**:
  - `scripts/validate-versions.js:10`
  - `scripts/validate-versions-test.js`
  - `docs/codex-setup.md:29`

### 5.6 Exhaustive Concepts Named
- `Codex plugin` — lines 1–29 — defined here
- `capabilities` (`Interactive`, `Read`, `Write`) — lines 19–23 — defined here
- `defaultPrompt` — lines 24–27 — defined here
- `full software development lifecycle from spec to ship` — line 4 — used here

### 5.7 Defects, Drift & Observations
- `doc-drift`: Line 16 claims `"Agent Skills bundles 24 production engineering workflows"`. The repository actually contains 25 skills in `skills/` (verified by `scripts/validate-skills.js:63`). Furthermore, `docs/codex-setup.md:25` contradicts this by stating: `"All 25 skills under skills/ are available."`

---

## 6. File Survey 5: `sources/addy/CLAUDE.md`

### 6.1 File Properties
- **Path**: `sources/addy/CLAUDE.md`
- **Relative Path**: `CLAUDE.md`
- **Size**: 4,094 bytes | 61 lines | 508 words | 4,072 characters
- **Type**: `doc`
- **Unit**: `inv-addy-20`

### 6.2 Purpose & Design Intent
- **Purpose (Verbatim lines 3–5)**:
  > "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents.
  >
  > > **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself, not other projects. Don't copy it into another project or a global agent configuration; the reusable assets are the skills in `skills/`." — `CLAUDE.md:3-5`
- **Design Intent**:
  Instruction file loaded by Claude Code when working in the `agent-skills` repository. Maps out the 7 repository subdirectories, defines the authoritative 6-phase lifecycle taxonomy (Define, Plan, Build, Verify, Review, Ship), standardizes authoring anatomy for new skills, defines the 100-line supporting-file threshold, documents the eval test runner command, and sets strict contribution boundaries.

### 6.3 Lifecycle Phase
- **`cross-phase`** (repository governance and lifecycle taxonomy specification).

### 6.4 Inputs & Outputs
- **Inputs**:
  - Claude Code agent session initialization
  - `CONTRIBUTING.md#before-proposing-a-new-skill` (lines 39, 56)
  - `docs/skill-anatomy.md` (lines 39, 57)
  - `evals/README.md` (line 15)
- **Outputs**:
  - Compliant pull requests targeting upstream default branch
  - Eval test suite executions (`node scripts/run-evals.js`)

### 6.5 Invocation Relationships
- **Invokes**:
  - `docs/skill-anatomy.md` (lines 39, 57)
  - `CONTRIBUTING.md` (lines 39, 56)
  - `evals/README.md` (line 15)
  - `scripts/run-evals.js` (line 45)
  - Personas: `code-reviewer`, `test-engineer`, `security-auditor`, `web-performance-auditor` (line 11)
  - Slash commands: `/spec`, `/plan`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf` (line 13)
  - Skills by Phase (lines 21–26):
    - **Define**: `interview-me`, `idea-refine`, `spec-driven-development`
    - **Plan**: `planning-and-task-breakdown`
    - **Build**: `incremental-implementation`, `test-driven-development`, `context-engineering`, `source-driven-development`, `doubt-driven-development`, `frontend-ui-engineering`, `api-and-interface-design`
    - **Verify**: `browser-testing-with-devtools`, `debugging-and-error-recovery`
    - **Review**: `code-review-and-quality`, `code-simplification`, `security-and-hardening`, `performance-optimization`
    - **Ship**: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`, `observability-and-instrumentation`, `shipping-and-launch`
- **Invoked by**:
  - Automatically read by Claude Code at repo root.

### 6.6 Complete Heading Structure
1. `# agent-skills` (line 1)
2. `## Project Structure` (line 7)
3. `## Skills by Phase` (line 19)
4. `## Conventions` (line 28)
5. `## Contributing` (line 37)
6. `## Commands` (line 41)
7. `## Pull Requests` (line 47)
8. `## Boundaries` (line 54)

### 6.7 Exhaustive Concepts Named
- `production-grade engineering skills` — line 3 — defined here
- `Project structure layers` (`skills/`, `agents/`, `hooks/`, `.claude/commands/`, `references/`, `evals/`, `docs/`) — lines 9–17 — defined here
- `Six lifecycle phases` (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`) — lines 21–26 — defined here
- `skill section anatomy` (`Overview`, `When to Use`, `Process`, `Common Rationalizations`, `Red Flags`, `Verification`) — line 33 — defined here
- `shared references vs colocated references` — line 34 — defined here
- `supporting file 100-line threshold` — line 35 — defined here
- `trigger/routing evals` vs `behavioral graded evals` — line 45 — defined here
- `PR contribution boundaries` (`Always` and `Never` rules) — lines 54–60 — defined here

### 6.8 Verbatim Blocks & Boundaries
- **Project Structure (lines 9–17)**:
  ```
  skills/       → Core skills (SKILL.md per directory)
  agents/       → Reusable agent personas (code-reviewer, test-engineer, security-auditor, web-performance-auditor)
  hooks/        → Session lifecycle hooks
  .claude/commands/ → Slash commands (/spec, /plan, /build, /test, /review, /code-simplify, /ship; plus /webperf specialist audit)
  references/   → Supplementary checklists (testing, performance, security, accessibility, observability)
  evals/        → Skill eval cases + framework (see evals/README.md)
  docs/         → Setup guides for different tools
  ```
- **Conventions List (lines 30–35)**: 6 core conventions.
- **Boundaries (lines 56–60)**:
  ```
  - Always: Run the CONTRIBUTING.md pre-flight checks before creating a new skill directory
  - Always: Follow the skill-anatomy.md format for new skills
  - Always: Check the upstream repo's open PRs and issues for overlap before opening a new PR
  - Never: Add skills that are vague advice instead of actionable processes
  - Never: Duplicate content between skills — reference other skills instead
  ```

### 6.9 Defects, Drift & Observations
- `doc-drift`: Lines 21–26 categorize 23 skills across the 6 phases. Two skills present in `sources/addy/skills/` are omitted completely: `constraint-driven-development` and `using-agent-skills`!
- `doc-drift`: Line 13 lists slash commands `/spec`, `/plan`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf` (8 commands), omitting `/constraints` (`.claude/commands/constraints.md` and `commands/constraints.toml`), which is the 9th command checked by `scripts/validate-commands.js`.
- `script-execution-flaw`: Line 45 documents `node scripts/run-evals.js`. In an ES-module-enabled repository or workspace (like Bun/Node `"type": "module"`), running with `node` causes `ReferenceError: require is not defined in ES module scope`. It must be executed with Bun (`bun run scripts/run-evals.js`) or with CommonJS flag.

---

## 7. Comparative Analysis & Synthesis Findings

### 7.1 Cross-File Lifecycle Taxonomy Comparison

Across the source package `addy`, there are four distinct places where lifecycle phases and skills are mapped:

| Lifecycle Phase | `CLAUDE.md:21-26` | `README.md:353-377` | `AGENTS.md:40-45` | `.codex-plugin/plugin.json:15` |
|---|---|---|---|---|
| **Define** | `interview-me`, `idea-refine`, `spec-driven-development` (3) | `interview-me`, `idea-refine`, `spec-driven-development` (3) | `spec-driven-development` (1) | "spec" |
| **Plan** | `planning-and-task-breakdown` (1) | `planning-and-task-breakdown` (1) | `planning-and-task-breakdown` (1) | "plan" |
| **Build** | `incremental-implementation`, `test-driven-development`, `context-engineering`, `source-driven-development`, `doubt-driven-development`, `frontend-ui-engineering`, `api-and-interface-design` (7) | `incremental-implementation`, `test-driven-development`, `context-engineering`, `source-driven-development`, `doubt-driven-development`, `frontend-ui-engineering`, `api-and-interface-design` (7) | `incremental-implementation`, `test-driven-development` (2) | "build" |
| **Verify** | `browser-testing-with-devtools`, `debugging-and-error-recovery` (2) | `browser-testing-with-devtools`, `debugging-and-error-recovery` (2) | `debugging-and-error-recovery` (1) | "test" |
| **Review** | `code-review-and-quality`, `code-simplification`, `security-and-hardening`, `performance-optimization` (4) | `code-review-and-quality`, `code-simplification`, `security-and-hardening`, `performance-optimization` (4) | `code-review-and-quality` (1) | "review" |
| **Ship** | `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`, `observability-and-instrumentation`, `shipping-and-launch` (6) | `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`, `observability-and-instrumentation`, `shipping-and-launch` (6) | `shipping-and-launch` (1) | "ship" |
| **Total Skills Mapped** | **23** | **23** | **7** | **(Summary words)** |

### 7.2 The 23 vs 24 vs 25 Skill Discrepancy
- **25 Skills Exist**:
  The physical directory `sources/addy/skills/` contains exactly 25 skill subdirectories.
  `scripts/validate-skills.js` checks and validates 25 skills.
  `scripts/validate-reference-links.js` validates 25 skills.
  `docs/codex-setup.md:25` states: *"All 25 skills under skills/ are available."*
- **24 Skills Claimed**:
  `.codex-plugin/plugin.json:16` states: *"Agent Skills bundles 24 production engineering workflows from Addy Osmani..."*
- **23 Skills Categorized**:
  `CLAUDE.md:21-26` and `README.md:353-377` categorize only 23 skills, omitting `constraint-driven-development` and `using-agent-skills`.
  (Note: `using-agent-skills` and `idea-refine` are marked "section checks exempt" in `scripts/validate-skills.js`).

### 7.3 Multi-Agent Orchestration Contract
`AGENTS.md:70-85` sets down foundational orchestration principles for the lifecycle synthesis:
1. **User / Slash Command = Orchestrator**: Personas cannot spawn or call other personas.
2. **Parallel Fan-out with Merge**: The only supported multi-persona topology is a command (such as `/ship`) concurrently spawning specialist reviewers (`code-reviewer`, `security-auditor`, `test-engineer`) and synthesizing their independent verdicts into a GO / NO-GO gate.
3. **No Router Personas**: Router personas are anti-patterns. Routing is handled by explicit slash commands or intent mapping.

---

## 8. Script Execution Verification (METHOD.md R2)

All scripts referenced by the assigned files or validating their structures were executed directly in `sources/addy/`:

| Script / Command | Documented Invocation | Execution Command | Exit Code | Observed Output / Result | Verification vs Claims |
|---|---|---|---|---|---|
| `scripts/run-evals.js` | `node scripts/run-evals.js` (`CLAUDE.md:45`) | `cd sources/addy && bun run scripts/run-evals.js` | `0` | `Running skill evals across 25 skills, 25 case files... 136 checks passed — 0 error(s), 0 warning(s) trigger rank-1 rate: 86% (72/84 positive prompts rank their skill first) PASSED` | Matches claim of trigger routing evals passing. Exits 1 under bare `node` in ESM workspace. |
| `scripts/validate-skills.js` | "Validate: Check that all SKILL.md files have valid YAML frontmatter" (`CLAUDE.md:44`) | `cd sources/addy && bun scripts/validate-skills.js` | `0` | `25 skills checked — 0 error(s), 0 warning(s) — PASSED` | Validates all 25 skills, confirms `git-workflow-and-versioning` and `documentation-and-adrs` pass. |
| `scripts/validate-commands.js` | Parity validation | `cd sources/addy && bun scripts/validate-commands.js` | `0` | `9 commands checked — 0 error(s) — PASSED` | Confirms 9 commands checked, exposes `/constraints` omission in `CLAUDE.md:13`. |
| `scripts/validate-reference-links.js` | Link integrity | `cd sources/addy && bun scripts/validate-reference-links.js` | `0` | `25 skills checked — 0 error(s) — PASSED` | All markdown reference links in all 25 skills resolve. |
| `scripts/validate-versions.js` | Version sync | `cd sources/addy && bun scripts/validate-versions.js` | `0` | `All plugin manifests use version 0.6.8.` | Verifies `.codex-plugin/plugin.json` version matches release tag `0.6.8`. |
| `scripts/validate-artifact-paths.js` | Spec/plan/todo paths | `cd sources/addy && bun scripts/validate-artifact-paths.js` | `0` | `7 files checked — 0 error(s) — PASSED` | Checks spec/plan/todo artifact paths across 7 files. |
| Addy Test Suite (5 files) | `npm test` (`CLAUDE.md:43`: N/A) | `cd sources/addy && bun test ./scripts/*-test.js` | `0` | `35 pass, 0 fail across 5 test files [693ms]` | All 35 tests pass completely. |

---

## 9. Comprehensive Defect & Drift Catalog

| ID | File | Line(s) | Classification | Description |
|---|---|---|---|---|
| DEF-01 | `CLAUDE.md` | 21–26 | `doc-drift` | Skills by Phase lists 23 skills, omitting `constraint-driven-development` and `using-agent-skills` from the taxonomy. |
| DEF-02 | `CLAUDE.md` | 13 | `doc-drift` | Slash commands list names 8 commands, omitting `/constraints` which exists in `.claude/commands/constraints.md` and `commands/constraints.toml`. |
| DEF-03 | `CLAUDE.md` | 45 | `script-bug` | `node scripts/run-evals.js` fails with `ReferenceError: require is not defined` when run in an environment with `"type": "module"`; must use `bun` or CommonJS loader. |
| DEF-04 | `.codex-plugin/plugin.json` | 16 | `doc-drift` | `longDescription` states "Agent Skills bundles 24 production engineering workflows", contradicting the actual count of 25 skills and `docs/codex-setup.md:25` ("All 25 skills"). |
| DEF-05 | `AGENTS.md` | 40–45 | `doc-drift` | Lifecycle Mapping (Implicit Commands) only maps 7 skills across the 6 phases, omitting 18 skills (including `git-workflow-and-versioning` and `documentation-and-adrs`). |
| DEF-06 | `AGENTS.md` | 26–32 | `doc-drift` | Intent → Skill Mapping lists only 7 intents, omitting 18 skills. |
| DEF-07 | `skills/git-workflow-and-versioning/SKILL.md` | 297 | `missing-path` | References maintaining a changelog for consumers, but `sources/addy` itself does not include a `CHANGELOG.md`. |
| DEF-08 | `skills/documentation-and-adrs/SKILL.md` | 48 | `missing-path` | Recommends `docs/decisions/` as the standard ADR directory, but `sources/addy` itself does not have a `docs/decisions/` directory. |
| DEF-09 | `skills/git-workflow-and-versioning/SKILL.md` | 1–356 | `orphan` | Not invoked by any slash command in `.claude/commands/` or `.claude-plugin/plugin.json`. |
| DEF-10 | `skills/documentation-and-adrs/SKILL.md` | 1–289 | `orphan` | Not invoked by any slash command in `.claude/commands/` or `.claude-plugin/plugin.json`. |

---

## 10. Guidance for Downstream Worker & Reviewers

1. **Inventory Entry Slugs**:
   - `skills-git-workflow-and-versioning-skill-md.md`
   - `skills-documentation-and-adrs-skill-md.md`
   - `agents-md.md`
   - `codex-plugin-plugin-json.md`
   - `claude-md.md`
2. **Phase Assignment in Entries**:
   - `git-workflow-and-versioning`: `addy:Ship`
   - `documentation-and-adrs`: `addy:Ship`
   - `AGENTS.md`: `cross-phase`
   - `.codex-plugin/plugin.json`: `cross-phase`
   - `CLAUDE.md`: `cross-phase`
3. **Exact Verbatim Preservation**:
   - Quotes for Purpose fields (see sections 2.3, 3.3, 4.2, 5.2, 6.2).
   - Change summary format from `git-workflow-and-versioning/SKILL.md:196-207`.
   - ADR template from `documentation-and-adrs/SKILL.md:50-91`.
   - Orchestration rules from `AGENTS.md:74-85`.
   - Capabilities and default prompts from `.codex-plugin/plugin.json:19-27`.
   - Boundaries from `CLAUDE.md:56-60`.
4. **Manifest and STATE Updates**:
   - Manifest `docs/analysis/manifest/addy.md`: check lines 188, 189, 190, 191, 192 (`[x]`).
   - `docs/plan/STATE.md`: mark unit `inv-addy-20` as `complete`, session `006`, output path `docs/analysis/inventory/addy/_units/inv-addy-20.md`, and update inventoried rows count (+5 to 163).
