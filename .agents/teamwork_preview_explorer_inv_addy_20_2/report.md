# Standards, Schemas, Templates, and Pattern Survey Report: `inv-addy-20`

**Work Unit**: `inv-addy-20`  
**Explorer**: Explorer 2 (Template & Pattern Survey)  
**Parent Orchestrator**: `orchestrator_inv_addy_20_1` (Conversation ID: `ee39c068-caf0-493f-92bc-429693b797aa`)  
**Target Output**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_2/report.md`  
**Date**: 2026-09-03  
**Status**: COMPLETE  

---

## 1. Executive Summary & Problem Boundary

This investigation provides the authoritative template, schema, and pattern survey for Phase 1 Inventory Extraction of work unit `inv-addy-20`. Work unit `inv-addy-20` encompasses **5 assigned files** totaling **34,444 bytes** from `sources/addy/`:

| # | Source Path | Bytes | Lines | Manifest Row | File Type | Target Deliverable Path |
|---|-------------|-------|-------|--------------|-----------|-------------------------|
| 1 | `sources/addy/skills/git-workflow-and-versioning/SKILL.md` | 14,063 | 356 | Row 188 (Line 188) | `skill` | `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` |
| 2 | `sources/addy/skills/documentation-and-adrs/SKILL.md` | 9,782 | 289 | Row 189 (Line 189) | `skill` | `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md` |
| 3 | `sources/addy/AGENTS.md` | 5,386 | 93 | Row 190 (Line 190) | `doc` | `docs/analysis/inventory/addy/agents-md.md` |
| 4 | `sources/addy/.codex-plugin/plugin.json` | 1,119 | 30 | Row 191 (Line 191) | `config` | `docs/analysis/inventory/addy/codex-plugin-plugin-json.md` |
| 5 | `sources/addy/CLAUDE.md` | 4,094 | 61 | Row 192 (Line 192) | `doc` | `docs/analysis/inventory/addy/claude-md.md` |
| 6 | Unit Report | — | — | — | `report` | `docs/analysis/inventory/addy/_units/inv-addy-20.md` |

This survey defines:
1. The governing project standards (`AGENTS.md`, `METHOD.md` rules R1–R10, §4, §8, §10, `DO-NOT-READ.md`, and `GLOSSARY.md`).
2. Exact state tracking requirements in `docs/plan/STATE.md` and `docs/analysis/manifest/addy.md`.
3. Strict file-naming, directory layout, and path derivation algorithms.
4. The exact metadata frontmatter schemas and mandatory section headings for each of the 5 inventory entries and the unit report.
5. Verbatim extraction requirements (Rule R3) with line-numbered citations.
6. Execution verification commands, actual exit codes, and test suite results (Rule R2).
7. Cross-unit dependencies, architectural defects, and cross-file contradictions.

---

## 2. Governing Standards & Methodology

### 2.1 AGENTS.md & Repository Constraints
- **Multi-session memory**: Entire project memory lives in files under `docs/`. Injected conversation summaries or memories outside `docs/` are discarded.
- **Language & Runtime**: All code written in this repository is strictly **Bun / TypeScript** (`bun test`, `bun run`). Node-specific APIs and Python are forbidden (R9).
- **Subagent Delegation Model**: Fan-out worker extraction, multi-perspective review, adversarial challenge, and forensic audit.

### 2.2 METHOD.md Hard Rules (R1 – R10)
- **R1 — Full reads. Coverage is proven, not asserted**: Every in-scope file is read from first line to last line without sampling. Manifest rows are marked checked `[x]` only when the inventory entry file exists on disk.
- **R2 — Evidence, and scripts are run**: Every claim about a source names `path:line`. Every script or validator touching the scope is executed with documented commands; exit codes and stdout are verified against code exit paths.
- **R3 — Verbatim in extraction**: Inventory fields marked *verbatim* carry the source's exact words in quotes with `path:line` citations. Paraphrasing in verbatim fields is an analysis defect.
- **R4 — One vocabulary, from the glossary**: Prior to Phase 4 decisions, terms must use package prefixes: `addy:Ship`, `addy:Define`, `addy:Build`. Never introduce an analyst's own term. Canonical terms in `docs/plan/GLOSSARY.md` are reserved.
- **R5 — Defect is not dismissal**: Record every defect (broken reference, doc drift, contradiction) in the `defects` field with standard classification. Design intent is evaluated separately from implementation flaws.
- **R6 — Depth rule**: Every named technique, framework, artifact, gate, role, checklist, template, or phase gets recorded under `Concepts named — required, verbatim` with `path:line` and `defined here | used here` status.
- **R7 — Persist before proceeding**: A unit is done only when all deliverables exist on disk, manifest rows are checked, and `STATE.md` shows the unit marked complete.
- **R8 — Decisions are append-only**: `DECISIONS.md` is append-only.
- **R9 — Bun only**: Scripts are Bun/TypeScript only.
- **R10 — Human gate**: Phase 6 requires explicit human approval from Peter.

### 2.3 METHOD.md §4 Checklist for "Comprehensive" File Extraction
Every inventory entry must evaluate the 8 dimensions of the §4 checklist:
1. **Existence**: Verify every path referenced by the file using filesystem tools. Missing paths are classified as `missing-path`.
2. **Execution**: Execute all associated test suites and validation scripts with real commands and record actual exit codes.
3. **Documentation Drift**: Identify discrepancies between README, command files, skill bodies, and external documentation (`doc-drift`).
4. **Internal Consistency**: Flag internal contradictions within the file (`internal-contradiction`).
5. **Cross-File Consistency**: Compare concepts across files (e.g., `CLAUDE.md` vs `AGENTS.md` vs `docs/antigravity-setup.md`) (`cross-file-contradiction`).
6. **Composition**: Trace what the file invokes and what invokes it across the full manifest graph.
7. **Context Cost**: Record exact byte size and approximate token count of the file plus dependencies loaded.
8. **Design Intent**: Formulate what problem the file solves and what would be lost without it, kept separate from defects.

### 2.4 METHOD.md §8 & §10 Protocols
- **Session Protocol (§8)**: Operates under autonomous batching decision `D-010`. In Session 006, units are executed in parallel chunks.
- **Anti-Drift Checks (§10)**:
  - `coverage.ts`: Validates that no required inventory fields are empty.
  - `glossary-lint.ts`: Validates that no undeclared canonical terms are used.
  - Fence: Strict compliance with `docs/plan/DO-NOT-READ.md` (no git branches other than `v2`, no pre-project git log exploration, no reading from `/Users/peterkloss/Dev/ACMElabs/brain/`).

---

## 3. Manifest & STATE.md Specifications

### 3.1 Manifest Row Specifications (`docs/analysis/manifest/addy.md`)
The 5 files occupy contiguous rows 188 through 192 in `docs/analysis/manifest/addy.md`.

| Manifest Line # | Exact Current Manifest Row | Target Updated Row |
|-----------------|----------------------------|--------------------|
| 188 | `\| skills/git-workflow-and-versioning/SKILL.md \| 14063 \| skill \| [ ] \|` | `\| skills/git-workflow-and-versioning/SKILL.md \| 14063 \| skill \| [x] \|` |
| 189 | `\| skills/documentation-and-adrs/SKILL.md \| 9782 \| skill \| [ ] \|` | `\| skills/documentation-and-adrs/SKILL.md \| 9782 \| skill \| [x] \|` |
| 190 | `\| AGENTS.md \| 5386 \| doc \| [ ] \|` | `\| AGENTS.md \| 5386 \| doc \| [x] \|` |
| 191 | `\| .codex-plugin/plugin.json \| 1119 \| config \| [ ] \|` | `\| .codex-plugin/plugin.json \| 1119 \| config \| [x] \|` |
| 192 | `\| CLAUDE.md \| 4094 \| doc \| [ ] \|` | `\| CLAUDE.md \| 4094 \| doc \| [x] \|` |

**Verification**:
- Sum of bytes across rows 188–192: `14063 + 9782 + 5386 + 1119 + 4094 = 34,444 bytes`.
- Matches assigned bytes in `SCOPE.md` and `STATE.md` line 84.

### 3.2 STATE.md Specifications (`docs/plan/STATE.md`)
- **Current Table Entry** (Line 84):
  ```markdown
  | inv-addy-20 | addy | 5 | 34444 | in-progress | 006 | — |
  ```
- **Target Table Entry Upon Completion**:
  ```markdown
  | inv-addy-20 | addy | 5 | 34444 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-20.md |
  ```
- **Session Format**: `006` (three-digit zero-padded string).
- **Dependencies**: None. `inv-addy-20` is an independent extraction unit within Phase 1 batch 16–20.
- **Metric Counts Impact**:
  - `Manifest rows (addy / matt / rjm)`: `215 / 167 / 1018`
  - `Rows inventoried (addy / matt / rjm)`: Currently recorded as `158 / 0 / 0` in STATE.md line 434 (which was frozen before chunk 2/3 sync). On-disk checked rows in `addy.md` before chunk 3 was 174. When chunk 3 completes, addy total will reach 190 rows inventoried.

---

## 4. File-Naming & Directory Placement Rules

### 4.1 Slugification Algorithm
Inventory filenames are derived from the source path relative to `sources/<pkg>/`:
1. Remove leading `./` or leading dots in directories (`.codex-plugin/` -> `codex-plugin/`).
2. Replace all directory separators `/` with hyphens `-`.
3. Replace all filename dots `.` with hyphens `-`.
4. Convert all uppercase letters to lowercase.
5. Append `.md`.

### 4.2 Derived Deliverable Paths
1. `sources/addy/skills/git-workflow-and-versioning/SKILL.md`  
   -> `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md`
2. `sources/addy/skills/documentation-and-adrs/SKILL.md`  
   -> `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md`
3. `sources/addy/AGENTS.md`  
   -> `docs/analysis/inventory/addy/agents-md.md`
4. `sources/addy/.codex-plugin/plugin.json`  
   -> `docs/analysis/inventory/addy/codex-plugin-plugin-json.md`
5. `sources/addy/CLAUDE.md`  
   -> `docs/analysis/inventory/addy/claude-md.md`
6. Work-unit report:  
   -> `docs/analysis/inventory/addy/_units/inv-addy-20.md`

---

## 5. Deliverable Inventory Entry Specifications

Every inventory entry MUST strictly adhere to the template defined in `docs/plan/templates/inventory-entry.md`. Fields marked **required** cannot be empty; if there is nothing to report, `none` must be written explicitly.

### 5.1 File 1: `skills-git-workflow-and-versioning-skill-md.md`

#### Frontmatter
```yaml
---
package: addy
path: skills/git-workflow-and-versioning/SKILL.md
type: skill
bytes: 14063
unit: inv-addy-20
---
```

#### Mandatory Heading Structure & R3 Verbatim Requirements
- `# skills/git-workflow-and-versioning/SKILL.md`
- `## Purpose — required, verbatim`
  > "Git is your safety net. Treat commits as save points, branches as sandboxes, and history as documentation. With AI agents generating code at high speed, disciplined version control is the mechanism that keeps changes manageable, reviewable, and reversible." — skills/git-workflow-and-versioning/SKILL.md:10
  *(Note: Frontmatter description at line 3: "Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog.")*
- `## Design intent — required`
  Establishes a mandatory engineering protocol for version control when developing with autonomous or semi-autonomous AI coding agents. It counters the hazards of high-speed code generation (unreviewed massive diffs, destructive rollbacks, lost context, leaking secrets) by imposing trunk-based development, small atomic commits (~100 lines), descriptive intent-based commit messages, git worktree isolation for parallel agent executions, the "Save Point" revert pattern, explicit post-modification change summaries ("CHANGES MADE", "THINGS I DIDN'T TOUCH"), strict pre-commit hygiene hooks, semantic versioning contracts, and human-curated changelogs.
- `## Phase — required`
  `addy:Ship` (verified by `CLAUDE.md:26`, `AGENTS.md:45`, `README.md:374`).
- `## Inputs — required`
  - Code changes and work increments across repositories (`skills/git-workflow-and-versioning/SKILL.md:14, 40`)
  - Git staging area via `git diff --staged` (`skills/git-workflow-and-versioning/SKILL.md:217`)
  - Test, lint, and typecheck commands (`npm test`, `npm run lint`, `npx tsc --noEmit`) (`skills/git-workflow-and-versioning/SKILL.md:223-229`)
  - Release specifications, semver increment criteria, and changelog updates (`skills/git-workflow-and-versioning/SKILL.md:274-311`)
- `## Outputs — required`
  - Atomic git commits with standard prefix types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`) (`skills/git-workflow-and-versioning/SKILL.md:50-95`)
  - Short-lived feature branches (`feature/*`, `fix/*`, `chore/*`, `refactor/*`) (`skills/git-workflow-and-versioning/SKILL.md:123-145`)
  - Isolated parallel agent worktrees (`../project-feature-*`) (`skills/git-workflow-and-versioning/SKILL.md:151-171`)
  - Structured change summaries including "THINGS I DIDN'T TOUCH" and "POTENTIAL CONCERNS" (`skills/git-workflow-and-versioning/SKILL.md:195-207`)
  - Annotated release tags (`git tag -a vMAJOR.MINOR.PATCH`) (`skills/git-workflow-and-versioning/SKILL.md:288-295`)
  - Curated consumer-facing `CHANGELOG.md` sections (`Added`, `Fixed`, `Deprecated`) (`skills/git-workflow-and-versioning/SKILL.md:298-311`)
- `## Invokes — required`
  - `skill skills/code-review-and-quality/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:113`
  - `skill skills/api-and-interface-design/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:284`
  - `skill skills/deprecation-and-migration/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311`
  - `skill skills/shipping-and-launch/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311`
- `## Invoked by — required`
  - `doc CLAUDE.md — CLAUDE.md:26`
  - `doc README.md — README.md:43, 273, 374`
  - `doc docs/developer-onboarding.md — docs/developer-onboarding.md:47`
  - `doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:92`
  - `doc docs/opencode-setup.md — docs/opencode-setup.md:126`
  - `doc docs/cursor-setup.md — docs/cursor-setup.md:161`
  - `doc docs/copilot-setup.md — docs/copilot-setup.md:83`
  - `doc docs/getting-started.md — docs/getting-started.md:75, 140`
  - `doc docs/adoption-guide.md — docs/adoption-guide.md:64`
  - `config evals/cases/git-workflow-and-versioning.json — evals/cases/git-workflow-and-versioning.json:2`
  - `external-doc sources/addy-external/git-workflow-and-versioning.md — sources/addy-external/git-workflow-and-versioning.md:1, 5`
- `## Concepts named — required, verbatim`
  - `git-workflow-and-versioning` — skills/git-workflow-and-versioning/SKILL.md:2 — defined here
  - `save points` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
  - `sandboxes` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
  - `Trunk-Based Development` — skills/git-workflow-and-versioning/SKILL.md:18 — defined here
  - `main` — skills/git-workflow-and-versioning/SKILL.md:20 — used here
  - `short-lived feature branches` — skills/git-workflow-and-versioning/SKILL.md:20 — defined here
  - `DORA` — skills/git-workflow-and-versioning/SKILL.md:20 — used here
  - `gitflow` — skills/git-workflow-and-versioning/SKILL.md:28 — used here
  - `long-lived branches` — skills/git-workflow-and-versioning/SKILL.md:28 — used here
  - `Release branches` — skills/git-workflow-and-versioning/SKILL.md:31 — defined here
  - `Feature flags` — skills/git-workflow-and-versioning/SKILL.md:32 — used here
  - `Commit Early, Commit Often` — skills/git-workflow-and-versioning/SKILL.md:34 — defined here
  - `Atomic Commits` — skills/git-workflow-and-versioning/SKILL.md:48 — defined here
  - `Descriptive Messages` — skills/git-workflow-and-versioning/SKILL.md:65 — defined here
  - `Keep Concerns Separate` — skills/git-workflow-and-versioning/SKILL.md:96 — defined here
  - `Size Your Changes` — skills/git-workflow-and-versioning/SKILL.md:111 — defined here
  - `code-review-and-quality` — skills/git-workflow-and-versioning/SKILL.md:113 — used here
  - `Branching Strategy` — skills/git-workflow-and-versioning/SKILL.md:121 — defined here
  - `Feature Branches` — skills/git-workflow-and-versioning/SKILL.md:123 — defined here
  - `Branch Naming` — skills/git-workflow-and-versioning/SKILL.md:138 — defined here
  - `worktrees` — skills/git-workflow-and-versioning/SKILL.md:147 — defined here
  - `The Save Point Pattern` — skills/git-workflow-and-versioning/SKILL.md:173 — defined here
  - `Change Summaries` — skills/git-workflow-and-versioning/SKILL.md:191 — defined here
  - `CHANGES MADE` — skills/git-workflow-and-versioning/SKILL.md:196 — defined here
  - `THINGS I DIDN'T TOUCH` — skills/git-workflow-and-versioning/SKILL.md:200 — defined here
  - `POTENTIAL CONCERNS` — skills/git-workflow-and-versioning/SKILL.md:204 — defined here
  - `Pre-Commit Hygiene` — skills/git-workflow-and-versioning/SKILL.md:211 — defined here
  - `lint-staged` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
  - `husky` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
  - `Handling Generated Files` — skills/git-workflow-and-versioning/SKILL.md:244 — defined here
  - `git bisect` — skills/git-workflow-and-versioning/SKILL.md:254 — used here
  - `Release & Versioning` — skills/git-workflow-and-versioning/SKILL.md:270 — defined here
  - `Semantic Versioning` — skills/git-workflow-and-versioning/SKILL.md:274 — defined here
  - `MAJOR` — skills/git-workflow-and-versioning/SKILL.md:279 — defined here
  - `MINOR` — skills/git-workflow-and-versioning/SKILL.md:280 — defined here
  - `PATCH` — skills/git-workflow-and-versioning/SKILL.md:281 — defined here
  - `Hyrum's Law` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
  - `api-and-interface-design` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
  - `git tag` — skills/git-workflow-and-versioning/SKILL.md:287 — used here
  - `changelog` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
  - `deprecation-and-migration` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
  - `shipping-and-launch` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
  - `Common Rationalizations` — skills/git-workflow-and-versioning/SKILL.md:313 — defined here
  - `Red Flags` — skills/git-workflow-and-versioning/SKILL.md:327 — defined here
  - `Verification` — skills/git-workflow-and-versioning/SKILL.md:340 — defined here
- `## Structure`
  Verbatim section hierarchy (lines 6 to 340).
- `## Scripts — required if type is script or the skill ships scripts`
  `none`
- `## Defects — required`
  - `doc-drift` · `README.md:273` truncates the skill description to "Git hygiene, atomic commits, trunk-based development, and change summaries", omitting semantic versioning, git tagging, and changelog maintenance which form a major third of the skill (`SKILL.md:270-311`).
- `## Observations`
  - Directly advocates git worktrees (`git worktree add`) as the essential isolation mechanism for parallel AI agent swarms.
  - Articulates the "Save Point Pattern" (`git reset --hard HEAD` on failure) as the fundamental error-containment loop for agent execution.
- `## Context cost`
  14,063 bytes (~3,500 tokens).

---

### 5.2 File 2: `skills-documentation-and-adrs-skill-md.md`

#### Frontmatter
```yaml
---
package: addy
path: skills/documentation-and-adrs/SKILL.md
type: skill
bytes: 9782
unit: inv-addy-20
---
```

#### Mandatory Heading Structure & R3 Verbatim Requirements
- `# skills/documentation-and-adrs/SKILL.md`
- `## Purpose — required, verbatim`
  > "Document decisions, not just code. The most valuable documentation captures the *why* — the context, constraints, and trade-offs that led to a decision. Code shows *what* was built; documentation explains *why it was built this way* and *what alternatives were considered*. This context is essential for future humans and agents working in the codebase." — skills/documentation-and-adrs/SKILL.md:10
  *(Note: Frontmatter description at line 3: "Records decisions and documentation. Use when making architectural decisions, changing public APIs, shipping features, or when you need to record context that future engineers and agents will need to understand the codebase.")*
- `## Design intent — required`
  Addresses the persistent failure mode where codebases lose historical decision rationale, forcing future engineers and AI agents to re-litigate decisions or make breaking assumptions. Establishes lightweight, immutable Architecture Decision Records (ADRs) in `docs/decisions/` following standard lifecycles (Proposed -> Accepted -> Superseded/Deprecated), strict rules for inline documentation (commenting *why* not *what*, documenting known gotchas), API interface documentation (JSDoc/TSDoc and OpenAPI), standard README structures, and explicit documentation requirements tailored for AI agent context (`CLAUDE.md`, rules files, specs).
- `## Phase — required`
  `addy:Ship` (verified by `CLAUDE.md:26`, `README.md:377`).
- `## Inputs — required`
  - Significant architectural decisions, framework selections, data model designs, or infrastructure choices (`skills/documentation-and-adrs/SKILL.md:27-35`)
  - Existing repository conventions (`.adr-dir`, `docs/adr/`, MADR templates) (`skills/documentation-and-adrs/SKILL.md:36-45`)
  - Public API definitions and schema changes (`skills/documentation-and-adrs/SKILL.md:154-199`)
  - Shipped features and version releases (`skills/documentation-and-adrs/SKILL.md:231-249`)
- `## Outputs — required`
  - Sequential Architecture Decision Records in `docs/decisions/ADR-NNN: <Title>.md` with sections: Status, Date, Context, Decision, Alternatives Considered, Consequences (`skills/documentation-and-adrs/SKILL.md:46-91`)
  - Inline TSDoc/JSDoc type comments explaining non-obvious intent and known gotchas (`skills/documentation-and-adrs/SKILL.md:108-150`)
  - OpenAPI/Swagger specifications for REST endpoints (`skills/documentation-and-adrs/SKILL.md:176-199`)
  - Standardized project README with Quick Start, Commands, Architecture, and Contributing sections (`skills/documentation-and-adrs/SKILL.md:200-230`)
  - Updated rules files (`CLAUDE.md`, etc.) and human-readable changelog entries (`skills/documentation-and-adrs/SKILL.md:231-258, 288`)
- `## Invokes — required`
  - `file CLAUDE.md — skills/documentation-and-adrs/SKILL.md:254, 288`
- `## Invoked by — required`
  - `doc CLAUDE.md — CLAUDE.md:26`
  - `doc README.md — README.md:46, 276, 377`
  - `doc docs/developer-onboarding.md — docs/developer-onboarding.md:47`
  - `doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:95`
  - `doc docs/opencode-setup.md — docs/opencode-setup.md:129`
  - `doc docs/cursor-setup.md — docs/cursor-setup.md:164`
  - `doc docs/copilot-setup.md — docs/copilot-setup.md:86`
  - `doc docs/getting-started.md — docs/getting-started.md:78, 143`
  - `doc docs/adoption-guide.md — docs/adoption-guide.md:67`
  - `config evals/cases/documentation-and-adrs.json — evals/cases/documentation-and-adrs.json:2`
  - `fixture evals/fixtures/documentation-and-adrs/decision-context.md — evals/fixtures/documentation-and-adrs/decision-context.md:1`
  - `external-doc sources/addy-external/documentation-and-adrs.md — sources/addy-external/documentation-and-adrs.md:1, 5`
- `## Concepts named — required, verbatim`
  - `documentation-and-adrs` — skills/documentation-and-adrs/SKILL.md:2 — defined here
  - `Architecture Decision Records` — skills/documentation-and-adrs/SKILL.md:23 — defined here
  - `ADRs` — skills/documentation-and-adrs/SKILL.md:23 — defined here
  - `MADR` — skills/documentation-and-adrs/SKILL.md:40 — used here
  - `adr-tools` — skills/documentation-and-adrs/SKILL.md:40 — used here
  - `ADR Template` — skills/documentation-and-adrs/SKILL.md:46 — defined here
  - `ADR Lifecycle` — skills/documentation-and-adrs/SKILL.md:93 — defined here
  - `PROPOSED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
  - `ACCEPTED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
  - `SUPERSEDED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
  - `DEPRECATED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
  - `Inline Documentation` — skills/documentation-and-adrs/SKILL.md:102 — defined here
  - `Known Gotchas` — skills/documentation-and-adrs/SKILL.md:137 — defined here
  - `API Documentation` — skills/documentation-and-adrs/SKILL.md:152 — defined here
  - `OpenAPI` — skills/documentation-and-adrs/SKILL.md:176 — used here
  - `Swagger` — skills/documentation-and-adrs/SKILL.md:176 — used here
  - `README Structure` — skills/documentation-and-adrs/SKILL.md:200 — defined here
  - `Changelog Maintenance` — skills/documentation-and-adrs/SKILL.md:231 — defined here
  - `Documentation for Agents` — skills/documentation-and-adrs/SKILL.md:250 — defined here
  - `CLAUDE.md` — skills/documentation-and-adrs/SKILL.md:254 — used here
  - `rules files` — skills/documentation-and-adrs/SKILL.md:254 — defined here
  - `Spec files` — skills/documentation-and-adrs/SKILL.md:255 — used here
  - `Common Rationalizations` — skills/documentation-and-adrs/SKILL.md:259 — defined here
  - `Red Flags` — skills/documentation-and-adrs/SKILL.md:269 — defined here
  - `Verification` — skills/documentation-and-adrs/SKILL.md:279 — defined here
- `## Structure`
  Verbatim section headings (lines 6 to 279).
- `## Scripts — required if type is script or the skill ships scripts`
  `none`
- `## Defects — required`
  `none`
- `## Observations`
  - Explicit rule to match existing project ADR conventions (`.adr-dir`, numbering patterns) before applying the default `docs/decisions/ADR-NNN.md` template (lines 36-45).
  - Explicit section dedicated to writing documentation specifically for AI agents (lines 250-258).
- `## Context cost`
  9,782 bytes (~2,450 tokens).

---

### 5.3 File 3: `agents-md.md`

#### Frontmatter
```yaml
---
package: addy
path: AGENTS.md
type: doc
bytes: 5386
unit: inv-addy-20
---
```

#### Mandatory Heading Structure & R3 Verbatim Requirements
- `# AGENTS.md`
- `## Purpose — required, verbatim`
  > "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository." — AGENTS.md:3
  *(Note: Line 5 explicitly defines scope: "> **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself. It is not meant to be copied into other projects or into a global agent configuration; the reusable assets are the skills in `skills/`, not this file.")*
- `## Design intent — required`
  The root system prompt and agent constitution for the `addyosmani/agent-skills` repository. It provides runtime instructions to coding agents across supported harnesses (Claude Code, Cursor, Copilot, Antigravity, OpenCode). It establishes a skill-driven execution model, maps user intents and lifecycle phases to specific skills, defines strict anti-rationalization defenses against bypassing skills, articulates the separation of concerns across the three repository layers (Skills = how, Personas = who, Slash commands = when), defines multi-persona orchestration constraints (parallel fan-out with merge; personas cannot invoke personas), and governs the creation of new skills.
- `## Phase — required`
  `cross-phase` (system prompt governing agent interactions across all lifecycle phases).
- `## Inputs — required`
  - Developer requests, user prompts, and tasks directed to coding agents (`AGENTS.md:24, 49`)
  - Repository assets under `skills/`, `agents/`, and `.claude/commands/` (`AGENTS.md:18, 74-76`)
  - Open pull requests queried via `gh pr list --state open` (`AGENTS.md:88`)
- `## Outputs — required`
  - Automated routing and invocation of skills via the `skill` tool (`AGENTS.md:13, 52`)
  - Enforced lifecycle stage progressions (Define -> Plan -> Build -> Verify -> Review -> Ship) (`AGENTS.md:40-45`)
  - Subagent spawning and synthesis under parallel fan-out orchestration (`AGENTS.md:80-84`)
- `## Invokes — required`
  - `dir skills/ — AGENTS.md:5, 9, 13, 18, 90`
  - `skill skills/spec-driven-development/SKILL.md — AGENTS.md:26, 40`
  - `skill skills/incremental-implementation/SKILL.md — AGENTS.md:26, 42`
  - `skill skills/test-driven-development/SKILL.md — AGENTS.md:26, 42`
  - `skill skills/planning-and-task-breakdown/SKILL.md — AGENTS.md:27, 41`
  - `skill skills/debugging-and-error-recovery/SKILL.md — AGENTS.md:28, 43`
  - `skill skills/code-review-and-quality/SKILL.md — AGENTS.md:29, 44`
  - `skill skills/code-simplification/SKILL.md — AGENTS.md:30`
  - `skill skills/api-and-interface-design/SKILL.md — AGENTS.md:31`
  - `skill skills/frontend-ui-engineering/SKILL.md — AGENTS.md:32`
  - `skill skills/shipping-and-launch/SKILL.md — AGENTS.md:45`
  - `dir agents/ — AGENTS.md:75, 84`
  - `agent agents/code-reviewer.md — AGENTS.md:80`
  - `agent agents/security-auditor.md — AGENTS.md:80`
  - `agent agents/test-engineer.md — AGENTS.md:80`
  - `dir .claude/commands/ — AGENTS.md:76`
  - `command .claude/commands/ship.md — AGENTS.md:80`
  - `doc docs/agents.md — AGENTS.md:82`
  - `reference references/orchestration-patterns.md — AGENTS.md:82`
  - `doc CONTRIBUTING.md — AGENTS.md:88`
  - `doc docs/skill-anatomy.md — AGENTS.md:88, 92`
- `## Invoked by — required`
  - `doc README.md — README.md:156`
  - `skill skills/context-engineering/SKILL.md — skills/context-engineering/SKILL.md:78`
  - `skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:53, 140, 301`
  - `skill skills/planning-and-task-breakdown/SKILL.md — skills/planning-and-task-breakdown/SKILL.md:162`
  - `command commands/code-simplify.toml — commands/code-simplify.toml:8`
  - `command commands/constraints.toml — commands/constraints.toml:24`
  - `doc CONTRIBUTING.md — CONTRIBUTING.md:71`
  - `doc docs/agents.md — docs/agents.md:97`
  - `doc docs/developer-onboarding.md — docs/developer-onboarding.md:26, 116`
  - `doc docs/antigravity-setup.md — docs/antigravity-setup.md:106, 107`
  - `doc docs/opencode-setup.md — docs/opencode-setup.md:3, 9, 19, 92, 94, 96, 98, 134, 136, 155, 244, 255, 256, 259`
  - `reference references/orchestration-patterns.md — references/orchestration-patterns.md:296, 298`
- `## Concepts named — required, verbatim`
  - `AGENTS.md` — AGENTS.md:1 — defined here
  - `Claude Code` — AGENTS.md:3 — used here
  - `Cursor` — AGENTS.md:3 — used here
  - `Copilot` — AGENTS.md:3 — used here
  - `Antigravity` — AGENTS.md:3 — used here
  - `OpenCode` — AGENTS.md:11 — used here
  - `skill-driven execution model` — AGENTS.md:13 — defined here
  - `skill tool` — AGENTS.md:13 — used here
  - `Core Rules` — AGENTS.md:15 — defined here
  - `Intent → Skill Mapping` — AGENTS.md:22 — defined here
  - `spec-driven-development` — AGENTS.md:26 — used here
  - `incremental-implementation` — AGENTS.md:26 — used here
  - `test-driven-development` — AGENTS.md:26 — used here
  - `planning-and-task-breakdown` — AGENTS.md:27 — used here
  - `debugging-and-error-recovery` — AGENTS.md:28 — used here
  - `code-review-and-quality` — AGENTS.md:29 — used here
  - `code-simplification` — AGENTS.md:30 — used here
  - `api-and-interface-design` — AGENTS.md:31 — used here
  - `frontend-ui-engineering` — AGENTS.md:32 — used here
  - `Lifecycle Mapping` — AGENTS.md:34 — defined here
  - `DEFINE` — AGENTS.md:40 — defined here
  - `PLAN` — AGENTS.md:41 — defined here
  - `BUILD` — AGENTS.md:42 — defined here
  - `VERIFY` — AGENTS.md:43 — defined here
  - `REVIEW` — AGENTS.md:44 — defined here
  - `SHIP` — AGENTS.md:45 — defined here
  - `shipping-and-launch` — AGENTS.md:45 — used here
  - `Execution Model` — AGENTS.md:47 — defined here
  - `Anti-Rationalization` — AGENTS.md:56 — defined here
  - `Skills` — AGENTS.md:74 — defined here
  - `Personas` — AGENTS.md:75 — defined here
  - `Slash commands` — AGENTS.md:76 — defined here
  - `parallel fan-out with a merge step` — AGENTS.md:80 — defined here
  - `code-reviewer` — AGENTS.md:80 — used here
  - `security-auditor` — AGENTS.md:80 — used here
  - `test-engineer` — AGENTS.md:80 — used here
  - `Claude Code interop` — AGENTS.md:84 — defined here
  - `Agent Teams` — AGENTS.md:84 — used here
  - `Creating a New Skill` — AGENTS.md:86 — defined here
  - `skill-anatomy` — AGENTS.md:88 — used here
- `## Structure`
  Verbatim section hierarchy (lines 1 to 86).
- `## Scripts — required if type is script or the skill ships scripts`
  `none`
- `## Defects — required`
  - `cross-file-contradiction` · `docs/antigravity-setup.md:107` states "copy or link AGENTS.md into the root of your workspace", directly contradicting `AGENTS.md:5`, `CONTRIBUTING.md:71`, `docs/developer-onboarding.md:26`, and `docs/opencode-setup.md:3, 92, 136`, which all explicitly warn that the repository root `AGENTS.md` is strictly repository-scoped and must never be copied into consumer workspaces.
  - `doc-drift` · `AGENTS.md:40-45` lifecycle mapping maps `VERIFY` exclusively to `debugging-and-error-recovery`, whereas `CLAUDE.md:24` maps `Verify` to both `browser-testing-with-devtools` and `debugging-and-error-recovery`.
- `## Observations`
  - Codifies the fundamental multi-agent architectural law of the repo: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas."
  - Provides explicit interop notes for Claude Code subagents and Agent Teams.
- `## Context cost`
  5,386 bytes (~1,350 tokens).

---

### 5.4 File 4: `codex-plugin-plugin-json.md`

#### Frontmatter
```yaml
---
package: addy
path: .codex-plugin/plugin.json
type: config
bytes: 1119
unit: inv-addy-20
---
```

#### Mandatory Heading Structure & R3 Verbatim Requirements
- `# .codex-plugin/plugin.json`
- `## Purpose — required, verbatim`
  > "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship." — .codex-plugin/plugin.json:4
- `## Design intent — required`
  Configuration manifest defining the OpenAI Codex plugin packaging for `agent-skills`. It establishes metadata coordinates (author, repository, license, version 0.6.8), binds the skills mount directory (`./skills/`), and defines user interface configurations including display name ("Agent Skills"), category ("Productivity"), agent capabilities ("Interactive", "Read", "Write"), and default suggested interaction prompts.
- `## Phase — required`
  `none` (configuration file).
- `## Inputs — required`
  `none`
- `## Outputs — required`
  `none`
- `## Invokes — required`
  - `dir ./skills/ — .codex-plugin/plugin.json:12`
- `## Invoked by — required`
  - `script scripts/validate-versions.js — scripts/validate-versions.js:10`
  - `script scripts/validate-versions-test.js — scripts/validate-versions-test.js:10`
- `## Concepts named — required, verbatim`
  - `agent-skills` — .codex-plugin/plugin.json:2 — defined here
  - `spec` — .codex-plugin/plugin.json:4, 15 — used here
  - `ship` — .codex-plugin/plugin.json:4, 15 — used here
  - `skills` — .codex-plugin/plugin.json:12 — used here
  - `Agent Skills` — .codex-plugin/plugin.json:14, 16, 26 — defined here
  - `plan` — .codex-plugin/plugin.json:15, 26 — used here
  - `build` — .codex-plugin/plugin.json:15 — used here
  - `test` — .codex-plugin/plugin.json:15 — used here
  - `review` — .codex-plugin/plugin.json:15 — used here
  - `Productivity` — .codex-plugin/plugin.json:18 — defined here
  - `Interactive` — .codex-plugin/plugin.json:20 — defined here
  - `Read` — .codex-plugin/plugin.json:21 — defined here
  - `Write` — .codex-plugin/plugin.json:22 — defined here
- `## Structure`
  `none (JSON configuration file)`
- `## Scripts — required if type is script or the skill ships scripts`
  `none`
- `## Defects — required`
  - `doc-drift` · `.codex-plugin/plugin.json:16` · `longDescription` states "Agent Skills bundles 24 production engineering workflows from Addy Osmani", but the repository contains 25 skills in `skills/` (as validated by `validate-skills.js`).
- `## Observations`
  - Version `0.6.8` is strictly validated by `scripts/validate-versions.js` and `scripts/validate-versions-test.js` against the git release tag and other manifests.
  - Unlike `.claude-plugin/plugin.json`, `.codex-plugin/plugin.json` specifies interface capabilities (`Interactive`, `Read`, `Write`) and default starter prompts.
- `## Context cost`
  1,119 bytes (~280 tokens).

---

### 5.5 File 5: `claude-md.md`

#### Frontmatter
```yaml
---
package: addy
path: CLAUDE.md
type: doc
bytes: 4094
unit: inv-addy-20
---
```

#### Mandatory Heading Structure & R3 Verbatim Requirements
- `# CLAUDE.md`
- `## Purpose — required, verbatim`
  > "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents." — CLAUDE.md:3
  *(Note: Line 5 explicitly defines scope: "> **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself, not other projects. Don't copy it into another project or a global agent configuration; the reusable assets are the skills in `skills/`.")*
- `## Design intent — required`
  The project instruction and configuration file for Claude Code agents working directly on the `addyosmani/agent-skills` repository. It outlines repository structure, defines the authoritative 6-phase lifecycle taxonomy (Define, Plan, Build, Verify, Review, Ship) and assigns skills to them, documents skill authoring conventions (YAML frontmatter, standard section anatomy, supporting file thresholds), defines validation and eval execution commands (`run-evals.js`), and specifies PR contribution boundaries.
- `## Phase — required`
  `cross-phase` (system configuration for Claude Code across all repository development phases).
- `## Inputs — required`
  - Claude Code interactions, slash command invocations, PR workflows (`CLAUDE.md:5, 41-53`)
  - Repository structure across `skills/`, `agents/`, `hooks/`, `.claude/commands/`, `references/`, `evals/`, and `docs/` (`CLAUDE.md:9-17`)
- `## Outputs — required`
  - Enforced conventions for new skills (YAML frontmatter, anatomy, line limits) (`CLAUDE.md:28-36`)
  - Execution of eval test suites (`CLAUDE.md:45`)
  - Upstream PR alignment rules (`CLAUDE.md:47-61`)
- `## Invokes — required`
  - `dir skills/ — CLAUDE.md:5, 10, 30`
  - `dir agents/ — CLAUDE.md:11`
  - `agent agents/code-reviewer.md — CLAUDE.md:11`
  - `agent agents/test-engineer.md — CLAUDE.md:11`
  - `agent agents/security-auditor.md — CLAUDE.md:11`
  - `agent agents/web-performance-auditor.md — CLAUDE.md:11`
  - `dir hooks/ — CLAUDE.md:12`
  - `dir .claude/commands/ — CLAUDE.md:13`
  - `command .claude/commands/spec.md — CLAUDE.md:13`
  - `command .claude/commands/plan.md — CLAUDE.md:13`
  - `command .claude/commands/build.md — CLAUDE.md:13`
  - `command .claude/commands/test.md — CLAUDE.md:13`
  - `command .claude/commands/review.md — CLAUDE.md:13`
  - `command .claude/commands/code-simplify.md — CLAUDE.md:13`
  - `command .claude/commands/ship.md — CLAUDE.md:13`
  - `command .claude/commands/webperf.md — CLAUDE.md:13`
  - `dir references/ — CLAUDE.md:14, 34`
  - `dir evals/ — CLAUDE.md:15`
  - `doc evals/README.md — CLAUDE.md:15`
  - `dir docs/ — CLAUDE.md:16`
  - `skill skills/interview-me/SKILL.md — CLAUDE.md:21`
  - `skill skills/idea-refine/SKILL.md — CLAUDE.md:21`
  - `skill skills/spec-driven-development/SKILL.md — CLAUDE.md:21`
  - `skill skills/planning-and-task-breakdown/SKILL.md — CLAUDE.md:22`
  - `skill skills/incremental-implementation/SKILL.md — CLAUDE.md:23`
  - `skill skills/test-driven-development/SKILL.md — CLAUDE.md:23`
  - `skill skills/context-engineering/SKILL.md — CLAUDE.md:23`
  - `skill skills/source-driven-development/SKILL.md — CLAUDE.md:23`
  - `skill skills/doubt-driven-development/SKILL.md — CLAUDE.md:23`
  - `skill skills/frontend-ui-engineering/SKILL.md — CLAUDE.md:23`
  - `skill skills/api-and-interface-design/SKILL.md — CLAUDE.md:23`
  - `skill skills/browser-testing-with-devtools/SKILL.md — CLAUDE.md:24`
  - `skill skills/debugging-and-error-recovery/SKILL.md — CLAUDE.md:24`
  - `skill skills/code-review-and-quality/SKILL.md — CLAUDE.md:25`
  - `skill skills/code-simplification/SKILL.md — CLAUDE.md:25`
  - `skill skills/security-and-hardening/SKILL.md — CLAUDE.md:25`
  - `skill skills/performance-optimization/SKILL.md — CLAUDE.md:25`
  - `skill skills/git-workflow-and-versioning/SKILL.md — CLAUDE.md:26`
  - `skill skills/ci-cd-and-automation/SKILL.md — CLAUDE.md:26`
  - `skill skills/deprecation-and-migration/SKILL.md — CLAUDE.md:26`
  - `skill skills/documentation-and-adrs/SKILL.md — CLAUDE.md:26`
  - `skill skills/observability-and-instrumentation/SKILL.md — CLAUDE.md:26`
  - `skill skills/shipping-and-launch/SKILL.md — CLAUDE.md:26`
  - `doc CONTRIBUTING.md — CLAUDE.md:39, 56`
  - `doc docs/skill-anatomy.md — CLAUDE.md:39, 57`
  - `script scripts/run-evals.js — CLAUDE.md:45`
- `## Invoked by — required`
  - `doc CONTRIBUTING.md — CONTRIBUTING.md:71`
  - `doc docs/developer-onboarding.md — docs/developer-onboarding.md:26`
  - `doc docs/opencode-setup.md — docs/opencode-setup.md:92`
  - `doc docs/getting-started.md — docs/getting-started.md:34`
  - `doc docs/adoption-guide.md — docs/adoption-guide.md:32`
  - `skill skills/documentation-and-adrs/SKILL.md — skills/documentation-and-adrs/SKILL.md:254, 288`
  - `skill skills/code-simplification/SKILL.md — skills/code-simplification/SKILL.md:49, 328`
  - `skill skills/context-engineering/SKILL.md — skills/context-engineering/SKILL.md:26, 42`
  - `skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:140, 301`
  - `skill skills/planning-and-task-breakdown/SKILL.md — skills/planning-and-task-breakdown/SKILL.md:162`
  - `command commands/constraints.toml — commands/constraints.toml:24`
  - `script scripts/validate-commands.js — scripts/validate-commands.js:16`
  - `script scripts/validate-reference-links.js — scripts/validate-reference-links.js:20`
  - `script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:92`
- `## Concepts named — required, verbatim`
  - `agent-skills` — CLAUDE.md:1 — defined here
  - `production-grade engineering skills` — CLAUDE.md:3 — defined here
  - `Project Structure` — CLAUDE.md:7 — defined here
  - `Skills by Phase` — CLAUDE.md:19 — defined here
  - `Define` — CLAUDE.md:21 — defined here
  - `Plan` — CLAUDE.md:22 — defined here
  - `Build` — CLAUDE.md:23 — defined here
  - `Verify` — CLAUDE.md:24 — defined here
  - `Review` — CLAUDE.md:25 — defined here
  - `Ship` — CLAUDE.md:26 — defined here
  - `interview-me` — CLAUDE.md:21 — used here
  - `idea-refine` — CLAUDE.md:21 — used here
  - `spec-driven-development` — CLAUDE.md:21 — used here
  - `planning-and-task-breakdown` — CLAUDE.md:22 — used here
  - `incremental-implementation` — CLAUDE.md:23 — used here
  - `test-driven-development` — CLAUDE.md:23 — used here
  - `context-engineering` — CLAUDE.md:23 — used here
  - `source-driven-development` — CLAUDE.md:23 — used here
  - `doubt-driven-development` — CLAUDE.md:23 — used here
  - `frontend-ui-engineering` — CLAUDE.md:23 — used here
  - `api-and-interface-design` — CLAUDE.md:23 — used here
  - `browser-testing-with-devtools` — CLAUDE.md:24 — used here
  - `debugging-and-error-recovery` — CLAUDE.md:24 — used here
  - `code-review-and-quality` — CLAUDE.md:25 — used here
  - `code-simplification` — CLAUDE.md:25 — used here
  - `security-and-hardening` — CLAUDE.md:25 — used here
  - `performance-optimization` — CLAUDE.md:25 — used here
  - `git-workflow-and-versioning` — CLAUDE.md:26 — used here
  - `ci-cd-and-automation` — CLAUDE.md:26 — used here
  - `deprecation-and-migration` — CLAUDE.md:26 — used here
  - `documentation-and-adrs` — CLAUDE.md:26 — used here
  - `observability-and-instrumentation` — CLAUDE.md:26 — used here
  - `shipping-and-launch` — CLAUDE.md:26 — used here
  - `Conventions` — CLAUDE.md:28 — defined here
  - `Contributing` — CLAUDE.md:37 — defined here
  - `Commands` — CLAUDE.md:41 — defined here
  - `Pull Requests` — CLAUDE.md:47 — defined here
  - `Boundaries` — CLAUDE.md:54 — defined here
- `## Structure`
  Verbatim section hierarchy (lines 1 to 54).
- `## Scripts — required if type is script or the skill ships scripts`
  `none`
- `## Defects — required`
  - `missing-skill` · `CLAUDE.md:21-26` lists 23 skills across its 6 phases, omitting `using-agent-skills` and `constraint-driven-development` from the `Skills by Phase` taxonomy (the repository contains 25 skills in `skills/`).
- `## Observations`
  - Establishes the authoritative 6-phase lifecycle model for `addy`: Define, Plan, Build, Verify, Review, Ship.
  - Establishes the rule that supporting files should only be created when content exceeds 100 lines (line 35).
- `## Context cost`
  4,094 bytes (~1,020 tokens).

---

## 6. Work-Unit Report Specification (`inv-addy-20.md`)

The work-unit report MUST be written to `docs/analysis/inventory/addy/_units/inv-addy-20.md` following `docs/plan/templates/work-unit-report.md`.

### 6.1 Frontmatter
```yaml
---
unit: inv-addy-20
phase: 1
package: addy
session: 006
subagent_returned: complete
---
```

### 6.2 Structure and Section Headings
- `# Unit inv-addy-20`
- `## Files assigned`
  - `[x]` `sources/addy/skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes)
  - `[x]` `sources/addy/skills/documentation-and-adrs/SKILL.md` (9,782 bytes)
  - `[x]` `sources/addy/AGENTS.md` (5,386 bytes)
  - `[x]` `sources/addy/.codex-plugin/plugin.json` (1,119 bytes)
  - `[x]` `sources/addy/CLAUDE.md` (4,094 bytes)
- `## Outputs produced`
  - `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` (bytes)
  - `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md` (bytes)
  - `docs/analysis/inventory/addy/agents-md.md` (bytes)
  - `docs/analysis/inventory/addy/codex-plugin-plugin-json.md` (bytes)
  - `docs/analysis/inventory/addy/claude-md.md` (bytes)
  - `docs/analysis/inventory/addy/_units/inv-addy-20.md` (bytes)
- `## Scripts executed`
  - `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
  - `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED)
  - `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: All plugin manifests use version 0.6.8.)
  - `sources/addy/scripts/validate-versions-test.js` — `cd sources/addy && bun test ./scripts/validate-versions-test.js` — Exit code: `0` (Output: 1 pass, 0 fail across 1 file)
  - `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js --skill git-workflow-and-versioning` — Exit code: `0` (Output: 136 checks passed — 0 error(s), 0 warning(s) — PASSED)
- `## Coverage self-check`
  - `[x]` Every assigned file has an entry / card / artifact
  - `[x]` Every required field in every output is non-empty (`none` written where nothing to report)
  - `[x]` Every `path:line` cited was confirmed against the file
  - `[x]` Every referenced path was checked with `ls`
  - `[x]` Glossary convention applied (package-prefixed before decision; canonical after)
- `## Cross-unit notes`
  - Lifecycle Phase Allocations: `git-workflow-and-versioning` and `documentation-and-adrs` belong to `addy:Ship` (`CLAUDE.md:26`, `AGENTS.md:45`). `AGENTS.md` and `CLAUDE.md` are cross-phase repository agent configurations. `.codex-plugin/plugin.json` is a package configuration file (`none`).
  - Cross-File Contradiction: `docs/antigravity-setup.md:107` instructs copying `AGENTS.md` into workspace roots, violating `AGENTS.md:5`, `CONTRIBUTING.md:71`, and `docs/developer-onboarding.md:26`.
  - Skill Taxonomy Drift: `CLAUDE.md:21-26` categorizes 23 skills across 6 phases, omitting `using-agent-skills` and `constraint-driven-development`.
  - Plugin Skill Count Drift: `.codex-plugin/plugin.json:16` claims 24 skills, whereas 25 skills exist and are validated.
- `## Blocked or uncertain`
  `none`
- `## Time and size`
  - Tokens of source read: ~8,611 tokens (34,444 bytes across 5 assigned files).
  - Tokens of output written: ~10,500 tokens across 5 inventory entries and 1 unit report.

---

## 7. Quality Gate & Role Handoff Checklist

For the downstream specialist pipeline:
1. **Worker Agent**:
   - Must write all 5 inventory entries to their exact deliverable paths using verbatim quotes with exact line numbers.
   - Must write the unit report to `docs/analysis/inventory/addy/_units/inv-addy-20.md`.
   - Must update `docs/analysis/manifest/addy.md` rows 188–192 to `[x]`.
   - Must update `docs/plan/STATE.md` line 84 to mark `inv-addy-20` `complete` with unit report path.
2. **Reviewer Agent**:
   - Verify non-empty required fields across all 6 files.
   - Verify verbatim line citations match source code lines.
   - Verify exit codes of executed validation scripts.
3. **Challenger Agent**:
   - Challenge potential paraphrasing in `## Purpose — required, verbatim` and `## Concepts named`.
   - Challenge defect classification accuracy.
4. **Forensic Auditor**:
   - Run `bun scripts/synthesis/glossary-lint.ts` (must be clean).
   - Run `bun scripts/synthesis/coverage.ts` (empty required inventory fields must be 0).
   - Confirm zero out-of-scope files touched.
