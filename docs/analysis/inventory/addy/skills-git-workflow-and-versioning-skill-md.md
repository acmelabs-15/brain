---
package: addy
path: skills/git-workflow-and-versioning/SKILL.md
type: skill
bytes: 14063
unit: inv-addy-37
---

# skills/git-workflow-and-versioning/SKILL.md

## Purpose — required, verbatim
> "Git is your safety net. Treat commits as save points, branches as sandboxes, and history as documentation. With AI agents generating code at high speed, disciplined version control is the mechanism that keeps changes manageable, reviewable, and reversible." — skills/git-workflow-and-versioning/SKILL.md:10

> "Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog." — skills/git-workflow-and-versioning/SKILL.md:3

> "Always. Every code change flows through git." — skills/git-workflow-and-versioning/SKILL.md:14

## Design intent — required
Establishes a rigorous version control discipline tailored for AI coding agents operating at high velocity. It counters the standard failure modes of autonomous code generation—unreviewed monolithic diffs, destructive rollbacks, context amnesia, credential leaks, and broken consumer contracts—by enforcing trunk-based development, small atomic commits (~100 lines), descriptive intent-oriented messages, git worktree isolation for concurrent agent streams, the Save Point revert loop (`git reset --hard HEAD`), structured change summaries (`CHANGES MADE`, `THINGS I DIDN'T TOUCH`), pre-commit hygiene hooks, Semantic Versioning, and human-curated changelogs.

## Phase — required
addy:Ship

(Authoritative evidence: `sources/addy/README.md:371`: `│   ├── git-workflow-and-versioning/   #   Ship`; `sources/addy/CLAUDE.md:26`: `**Ship:** git-workflow-and-versioning`; `sources/addy/skills/using-agent-skills/SKILL.md:187`: `| Ship | git-workflow-and-versioning |`).

## Inputs — required
- Dirty working tree and incremental code changes (`skills/git-workflow-and-versioning/SKILL.md:14, 40`)
- Staged git changes inspected via `git diff --staged` (`skills/git-workflow-and-versioning/SKILL.md:217`)
- Project verification commands: `npm test`, `npm run lint`, `npx tsc --noEmit` (`skills/git-workflow-and-versioning/SKILL.md:223-229`)
- Git hooks configuration in `package.json` using `lint-staged` and `husky` (`skills/git-workflow-and-versioning/SKILL.md:235`)
- Exclusion patterns specified in `.gitignore` (`skills/git-workflow-and-versioning/SKILL.md:248`)
- Historical commits for bisecting and debugging (`skills/git-workflow-and-versioning/SKILL.md:254-268`)
- Consumer observability impact for semver increment classification (`skills/git-workflow-and-versioning/SKILL.md:276-285`)

## Outputs — required
- Atomic git commits with conventional types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`) (`skills/git-workflow-and-versioning/SKILL.md:88-95`)
- Short-lived feature branches (`feature/*`, `fix/*`, `chore/*`, `refactor/*`) (`skills/git-workflow-and-versioning/SKILL.md:138-145`)
- Isolated parallel agent worktrees (`../project-feature-*`) (`skills/git-workflow-and-versioning/SKILL.md:151-165`)
- Structured change summaries with explicit scope boundaries (`CHANGES MADE`, `THINGS I DIDN'T TOUCH`, `POTENTIAL CONCERNS`) (`skills/git-workflow-and-versioning/SKILL.md:196-207`)
- Configured `.gitignore` covering secrets, build outputs, and dependencies (`skills/git-workflow-and-versioning/SKILL.md:248`)
- Annotated release tags (`git tag -a v1.4.0 -m "Release 1.4.0"`) (`skills/git-workflow-and-versioning/SKILL.md:291-292`)
- Human-curated `CHANGELOG.md` entries grouped by `Added / Changed / Fixed / Deprecated / Removed / Security` (`skills/git-workflow-and-versioning/SKILL.md:299-309`)

## Invokes — required
- skill code-review-and-quality — skills/git-workflow-and-versioning/SKILL.md:113
- skill api-and-interface-design — skills/git-workflow-and-versioning/SKILL.md:284
- skill deprecation-and-migration — skills/git-workflow-and-versioning/SKILL.md:311
- skill shipping-and-launch — skills/git-workflow-and-versioning/SKILL.md:311

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:277, 371
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:37, 158, 187
- skill skills/incremental-implementation/SKILL.md — skills/incremental-implementation/SKILL.md:41
- doc docs/cursor-setup.md — docs/cursor-setup.md:162
- doc docs/adoption-guide.md — docs/adoption-guide.md:51, 92
- config evals/cases/git-workflow-and-versioning.json — evals/cases/git-workflow-and-versioning.json:2, 38
- config evals/cases/security-and-hardening.json — evals/cases/security-and-hardening.json:25
- script scripts/run-evals-test.js — scripts/run-evals-test.js:277, 283

## Concepts named — required, verbatim
- `git-workflow-and-versioning` — skills/git-workflow-and-versioning/SKILL.md:2 — defined here
- `save points` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
- `sandboxes` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
- `history as documentation` — skills/git-workflow-and-versioning/SKILL.md:10 — defined here
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
- `scope discipline` — skills/git-workflow-and-versioning/SKILL.md:209 — defined here
- `Pre-Commit Hygiene` — skills/git-workflow-and-versioning/SKILL.md:211 — defined here
- `lint-staged` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
- `husky` — skills/git-workflow-and-versioning/SKILL.md:235 — used here
- `Handling Generated Files` — skills/git-workflow-and-versioning/SKILL.md:244 — defined here
- `git bisect` — skills/git-workflow-and-versioning/SKILL.md:254 — used here
- `git blame` — skills/git-workflow-and-versioning/SKILL.md:264 — used here
- `Release & Versioning` — skills/git-workflow-and-versioning/SKILL.md:270 — defined here
- `Semantic Versioning` — skills/git-workflow-and-versioning/SKILL.md:274 — defined here
- `MAJOR` — skills/git-workflow-and-versioning/SKILL.md:279 — defined here
- `MINOR` — skills/git-workflow-and-versioning/SKILL.md:280 — defined here
- `PATCH` — skills/git-workflow-and-versioning/SKILL.md:281 — defined here
- `Hyrum's Law` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `api-and-interface-design` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `Tag the release, and let the tag be the source of truth` — skills/git-workflow-and-versioning/SKILL.md:286 — defined here
- `git tag` — skills/git-workflow-and-versioning/SKILL.md:291 — used here
- `Keep a changelog written for humans` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
- `changelog` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
- `deprecation-and-migration` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `shipping-and-launch` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `Common Rationalizations` — skills/git-workflow-and-versioning/SKILL.md:313 — defined here
- `Red Flags` — skills/git-workflow-and-versioning/SKILL.md:327 — defined here
- `Verification` — skills/git-workflow-and-versioning/SKILL.md:340 — defined here

## Structure
- `# Git Workflow and Versioning` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## Core Principles` (line 16)
  - `### Trunk-Based Development (Recommended)` (line 18)
  - `### 1. Commit Early, Commit Often` (line 34)
  - `### 2. Atomic Commits` (line 48)
  - `### 3. Descriptive Messages` (line 65)
  - `### 4. Keep Concerns Separate` (line 96)
  - `### 5. Size Your Changes` (line 111)
- `## Branching Strategy` (line 121)
  - `### Feature Branches` (line 123)
  - `### Branch Naming` (line 138)
- `## Working with Worktrees` (line 147)
- `## The Save Point Pattern` (line 173)
- `## Change Summaries` (line 191)
- `## Pre-Commit Hygiene` (line 211)
- `## Handling Generated Files` (line 244)
- `## Using Git for Debugging` (line 250)
- `## Release & Versioning` (line 270)
  - `### Semantic Versioning` (line 274)
  - `### Tag the release, and let the tag be the source of truth` (line 286)
  - `### Keep a changelog written for humans` (line 297)
- `## Common Rationalizations` (line 313)
- `## Red Flags` (line 327)
- `## Verification` (line 340)

## Scripts — required if type is script or the skill ships scripts
none — type is skill and no scripts are shipped or inlined.

## Defects — required
- `doc-drift` · README.md:277 · Table entry truncates skill scope to "Trunk-based development, atomic commits, change sizing (~100 lines), the commit-as-save-point pattern", omitting releases, semantic versioning, git tagging, and changelogs which comprise lines 270-312 of skills/git-workflow-and-versioning/SKILL.md.
- `missing-path` · skills/git-workflow-and-versioning/SKILL.md:297 · Directs maintaining a human-curated changelog with every release, but the sources/addy repository contains no CHANGELOG.md.
- `orphan` · skills/git-workflow-and-versioning/SKILL.md:1-356 · Not invoked by any slash command in commands/, .claude/commands/, or .gemini/commands/, nor dispatched by any persona in agents/ or AGENTS.md.
- `doc-drift` · CLAUDE.md:26 · Categorizes skill under Ship phase, contradicting skills/git-workflow-and-versioning/SKILL.md:3, 14 which mandates usage for "any code change (always)".

## Observations
- Directly advocates git worktrees (`git worktree add`, lines 147-172) as the fundamental concurrency mechanism for parallel AI agent streams to operate without branch collisions.
- Formalizes the "Save Point Pattern" (`git reset --hard HEAD`, line 189) as the essential revert-and-recover primitive for agent workflows.
- "Change Summaries" pattern (lines 191-210) provides a concrete structure (`CHANGES MADE:`, `THINGS I DIDN'T TOUCH:`, `POTENTIAL CONCERNS:`) to enforce scope discipline and prevent unsolicited code changes.
- Rigorous release contract linking developer commits to consumer expectations via Semantic Versioning (MAJOR/MINOR/PATCH), immutable git tags as source of truth, and human-curated impact-grouped changelogs.

## Context cost
- File size: 14,063 bytes (~3,516 tokens).
- Transitive cost: self-contained skill; when cross-referencing code-review-and-quality (20,555 bytes, ~5,140 tokens), composite cost is 34,618 bytes (~8,655 tokens).
