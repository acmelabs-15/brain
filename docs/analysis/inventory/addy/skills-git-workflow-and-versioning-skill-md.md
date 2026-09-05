---
package: addy
path: skills/git-workflow-and-versioning/SKILL.md
type: skill
bytes: 14063
unit: inv-addy-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/git-workflow-and-versioning/SKILL.md

## Purpose — required, verbatim
> "Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog." — skills/git-workflow-and-versioning/SKILL.md:3

## Design intent — required
Establishes disciplined version control practices for autonomous AI coding agents and human developers operating in fast-paced development environments. Without structured git practices, AI agents produce unmanageable batches of speculative code without intermediate checkpoints, combine formatting, refactoring, and feature work into monolithic commits, introduce merge risks through long-lived divergent branches, and ship breaking changes under minor or patch version bumps without consumer notice. The skill solves these failure modes by enforcing trunk-based development with short-lived feature branches (1-3 days), atomic commits adhering to a standardized commit message taxonomy (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`), change sizing targeting ~100 lines per commit/PR, git worktrees for isolated parallel multi-agent execution, pre-commit hygiene with automated linting/typechecking/test gates, a commit-as-save-point pattern enabling instant rollback via `git reset --hard HEAD`, structured post-change summaries (explicitly cataloging what was deliberately untouched to demonstrate scope discipline), and a strict Semantic Versioning and human-readable changelog contract where git tags serve as the single immutable source of truth for downstream releases. Without it, agent workflows would lack rollback guarantees, bisectability, change provenance, and predictable release versioning.

## Phase — required
addy:Ship

## Inputs — required
- Trigger conditions / Use when: "making any code change" — skills/git-workflow-and-versioning/SKILL.md:3, "committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams" — skills/git-workflow-and-versioning/SKILL.md:3, "cutting a release, choosing a semantic version bump, tagging, or writing a changelog" — skills/git-workflow-and-versioning/SKILL.md:3
- Working tree and staged git diff: "git diff --staged" — skills/git-workflow-and-versioning/SKILL.md:217
- Verification toolchain gates: test runner ("npm test" — skills/git-workflow-and-versioning/SKILL.md:223), linter ("npm run lint" — skills/git-workflow-and-versioning/SKILL.md:226), type checker ("npx tsc --noEmit" — skills/git-workflow-and-versioning/SKILL.md:229)
- Repository history for bisecting and debugging: "git bisect start" — skills/git-workflow-and-versioning/SKILL.md:254, "git blame src/services/task.ts" — skills/git-workflow-and-versioning/SKILL.md:264
- Release metadata: semantic version specification `MAJOR.MINOR.PATCH` — skills/git-workflow-and-versioning/SKILL.md:276

## Outputs — required
- Atomic commits with formatted messages: "<type>: <short description>" — skills/git-workflow-and-versioning/SKILL.md:83
- Short-lived feature branches: `feature/<short-description>`, `fix/<short-description>`, `chore/<short-description>`, `refactor/<short-description>` — skills/git-workflow-and-versioning/SKILL.md:141-144
- Isolated git worktree directories: "git worktree add ../project-feature-a feature/task-creation" — skills/git-workflow-and-versioning/SKILL.md:153
- Rollback side effect restoring working tree to last save point: "git reset --hard HEAD" — skills/git-workflow-and-versioning/SKILL.md:189
- Structured change summary documentation: "CHANGES MADE:" — skills/git-workflow-and-versioning/SKILL.md:196, "THINGS I DIDN'T TOUCH (intentionally):" — skills/git-workflow-and-versioning/SKILL.md:200, "POTENTIAL CONCERNS:" — skills/git-workflow-and-versioning/SKILL.md:204
- Repository exclusion rules: `.gitignore` covering `node_modules/`, `dist/`, `.env`, `.env.local`, `*.pem` — skills/git-workflow-and-versioning/SKILL.md:248
- Immutable release tags: "git tag -a v1.4.0" — skills/git-workflow-and-versioning/SKILL.md:291
- Consumer changelog entries: grouped by `Added / Changed / Fixed / Deprecated / Removed / Security` — skills/git-workflow-and-versioning/SKILL.md:299

## Invokes — required
- skill code-review-and-quality — skills/git-workflow-and-versioning/SKILL.md:113
- skill api-and-interface-design — skills/git-workflow-and-versioning/SKILL.md:284
- skill deprecation-and-migration — skills/git-workflow-and-versioning/SKILL.md:311
- skill shipping-and-launch — skills/git-workflow-and-versioning/SKILL.md:311

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:277,371
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:37,158,187
- skill incremental-implementation — skills/incremental-implementation/SKILL.md:41
- doc docs/adoption-guide.md — docs/adoption-guide.md:51,92
- doc docs/cursor-setup.md — docs/cursor-setup.md:162
- config evals/cases/git-workflow-and-versioning.json — evals/cases/git-workflow-and-versioning.json:2,38
- config evals/cases/security-and-hardening.json — evals/cases/security-and-hardening.json:25
- doc external/git-workflow-and-versioning.md — external/git-workflow-and-versioning.md:10

## Concepts named — required, verbatim
- `git-workflow-and-versioning` — skills/git-workflow-and-versioning/SKILL.md:2 — defined here
- `save points` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
- `sandboxes` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
- `Trunk-Based Development` — skills/git-workflow-and-versioning/SKILL.md:18 — defined here
- `feature branches` — skills/git-workflow-and-versioning/SKILL.md:20 — defined here
- `DORA` — skills/git-workflow-and-versioning/SKILL.md:20 — used here
- `gitflow` — skills/git-workflow-and-versioning/SKILL.md:28 — used here
- `atomic commits` — skills/git-workflow-and-versioning/SKILL.md:28,48 — defined here
- `Release branches` — skills/git-workflow-and-versioning/SKILL.md:31 — defined here
- `Feature flags` — skills/git-workflow-and-versioning/SKILL.md:32 — used here
- `Commit Early, Commit Often` — skills/git-workflow-and-versioning/SKILL.md:34 — defined here
- `Descriptive Messages` — skills/git-workflow-and-versioning/SKILL.md:65 — defined here
- `Types` — skills/git-workflow-and-versioning/SKILL.md:88 — defined here
- `feat` — skills/git-workflow-and-versioning/SKILL.md:89 — defined here
- `fix` — skills/git-workflow-and-versioning/SKILL.md:90 — defined here
- `refactor` — skills/git-workflow-and-versioning/SKILL.md:91 — defined here
- `test` — skills/git-workflow-and-versioning/SKILL.md:92 — defined here
- `docs` — skills/git-workflow-and-versioning/SKILL.md:93 — defined here
- `chore` — skills/git-workflow-and-versioning/SKILL.md:94 — defined here
- `Keep Concerns Separate` — skills/git-workflow-and-versioning/SKILL.md:96 — defined here
- `Size Your Changes` — skills/git-workflow-and-versioning/SKILL.md:111 — defined here
- `code-review-and-quality` — skills/git-workflow-and-versioning/SKILL.md:113 — used here
- `Branching Strategy` — skills/git-workflow-and-versioning/SKILL.md:121 — defined here
- `Feature Branches` — skills/git-workflow-and-versioning/SKILL.md:123 — defined here
- `Branch Naming` — skills/git-workflow-and-versioning/SKILL.md:138 — defined here
- `worktrees` — skills/git-workflow-and-versioning/SKILL.md:147 — defined here
- `Save Point Pattern` — skills/git-workflow-and-versioning/SKILL.md:173 — defined here
- `Change Summaries` — skills/git-workflow-and-versioning/SKILL.md:191 — defined here
- `CHANGES MADE` — skills/git-workflow-and-versioning/SKILL.md:196 — defined here
- `THINGS I DIDN'T TOUCH` — skills/git-workflow-and-versioning/SKILL.md:200 — defined here
- `POTENTIAL CONCERNS` — skills/git-workflow-and-versioning/SKILL.md:204 — defined here
- `Pre-Commit Hygiene` — skills/git-workflow-and-versioning/SKILL.md:211 — defined here
- `git hooks` — skills/git-workflow-and-versioning/SKILL.md:232 — used here
- `lint-staged` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
- `husky` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
- `Handling Generated Files` — skills/git-workflow-and-versioning/SKILL.md:244 — defined here
- `.gitignore` — skills/git-workflow-and-versioning/SKILL.md:248 — used here
- `Using Git for Debugging` — skills/git-workflow-and-versioning/SKILL.md:250 — defined here
- `git bisect` — skills/git-workflow-and-versioning/SKILL.md:254 — used here
- `git blame` — skills/git-workflow-and-versioning/SKILL.md:264 — used here
- `Release & Versioning` — skills/git-workflow-and-versioning/SKILL.md:270 — defined here
- `Semantic Versioning` — skills/git-workflow-and-versioning/SKILL.md:274 — defined here
- `MAJOR.MINOR.PATCH` — skills/git-workflow-and-versioning/SKILL.md:276 — defined here
- `MAJOR` — skills/git-workflow-and-versioning/SKILL.md:279 — defined here
- `MINOR` — skills/git-workflow-and-versioning/SKILL.md:280 — defined here
- `PATCH` — skills/git-workflow-and-versioning/SKILL.md:281 — defined here
- `Hyrum's Law` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `api-and-interface-design` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `changelog` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
- `deprecation-and-migration` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `shipping-and-launch` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `Common Rationalizations` — skills/git-workflow-and-versioning/SKILL.md:313 — defined here
- `Red Flags` — skills/git-workflow-and-versioning/SKILL.md:327 — defined here
- `Verification` — skills/git-workflow-and-versioning/SKILL.md:340 — defined here

## Structure
- "Git Workflow and Versioning" — skills/git-workflow-and-versioning/SKILL.md:6
- "Overview" — skills/git-workflow-and-versioning/SKILL.md:8
- "When to Use" — skills/git-workflow-and-versioning/SKILL.md:12
- "Core Principles" — skills/git-workflow-and-versioning/SKILL.md:16
- "Trunk-Based Development (Recommended)" — skills/git-workflow-and-versioning/SKILL.md:18
- "1. Commit Early, Commit Often" — skills/git-workflow-and-versioning/SKILL.md:34
- "2. Atomic Commits" — skills/git-workflow-and-versioning/SKILL.md:48
- "3. Descriptive Messages" — skills/git-workflow-and-versioning/SKILL.md:65
- "4. Keep Concerns Separate" — skills/git-workflow-and-versioning/SKILL.md:96
- "5. Size Your Changes" — skills/git-workflow-and-versioning/SKILL.md:111
- "Branching Strategy" — skills/git-workflow-and-versioning/SKILL.md:121
- "Feature Branches" — skills/git-workflow-and-versioning/SKILL.md:123
- "Branch Naming" — skills/git-workflow-and-versioning/SKILL.md:138
- "Working with Worktrees" — skills/git-workflow-and-versioning/SKILL.md:147
- "The Save Point Pattern" — skills/git-workflow-and-versioning/SKILL.md:173
- "Change Summaries" — skills/git-workflow-and-versioning/SKILL.md:191
- "Pre-Commit Hygiene" — skills/git-workflow-and-versioning/SKILL.md:211
- "Handling Generated Files" — skills/git-workflow-and-versioning/SKILL.md:244
- "Using Git for Debugging" — skills/git-workflow-and-versioning/SKILL.md:250
- "Release & Versioning" — skills/git-workflow-and-versioning/SKILL.md:270
- "Semantic Versioning" — skills/git-workflow-and-versioning/SKILL.md:274
- "Tag the release, and let the tag be the source of truth" — skills/git-workflow-and-versioning/SKILL.md:286
- "Keep a changelog written for humans" — skills/git-workflow-and-versioning/SKILL.md:297
- "Common Rationalizations" — skills/git-workflow-and-versioning/SKILL.md:313
- "Red Flags" — skills/git-workflow-and-versioning/SKILL.md:327
- "Verification" — skills/git-workflow-and-versioning/SKILL.md:340

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/git-workflow-and-versioning/SKILL.md:14 · When to Use specifies "Always. Every code change flows through git." as a cross-cutting practice across all development phases, whereas README.md:371 and CLAUDE.md:26 categorize it strictly under the "Ship" lifecycle phase.
- doc-drift · skills/git-workflow-and-versioning/SKILL.md:311 · SKILL.md specifies that shipping the actual release is the shipping-and-launch skill's job without defining a slash command binding, while external catalog external/git-workflow-and-versioning.md:12 associates it with slash command /ship despite commands/ship.toml:4 only invoking shipping-and-launch.

## Observations
- Commits as save points: Models commits as incremental save points (`Implement slice → Test → Verify → Commit → Next slice` at skills/git-workflow-and-versioning/SKILL.md:40), enabling instant recovery from speculative AI agent failures via `git reset --hard HEAD` (skills/git-workflow-and-versioning/SKILL.md:189).
- Parallel agent execution via git worktrees: Explicitly documents multi-worktree patterns (`git worktree add ../project-feature-a feature/task-creation` at skills/git-workflow-and-versioning/SKILL.md:153) to isolate concurrent agents without workspace collisions or branch switching overhead.
- Scope discipline via structured summaries: Enforces a structured summary format including `CHANGES MADE:` (line 196), `THINGS I DIDN'T TOUCH (intentionally):` (line 200), and `POTENTIAL CONCERNS:` (line 204), preventing unsolicited agent refactorings.
- Clean separation between commit history and release versioning: Commits track internal development narrative, whereas semantic version bumps and curated human-readable changelogs serve external consumers, anchored on git tags as immutable truth.

## Context cost
14,063 bytes (~3,516 tokens) for this standalone skill file. If following Invokes (`skills/code-review-and-quality/SKILL.md` at 20,555 bytes, `skills/api-and-interface-design/SKILL.md` at 14,884 bytes, `skills/deprecation-and-migration/SKILL.md` at 12,516 bytes, and `skills/shipping-and-launch/SKILL.md` at 10,137 bytes), total loaded context size is 72,155 bytes (~18,039 tokens). In practice, external skills are loaded conditionally rather than eagerly.
