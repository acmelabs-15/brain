---
package: addy
path: skills/git-workflow-and-versioning/SKILL.md
type: skill
bytes: 14063
unit: inv-addy-20
---

# skills/git-workflow-and-versioning/SKILL.md

## Purpose — required, verbatim
> "Git is your safety net. Treat commits as save points, branches as sandboxes, and history as documentation. With AI agents generating code at high speed, disciplined version control is the mechanism that keeps changes manageable, reviewable, and reversible." — skills/git-workflow-and-versioning/SKILL.md:10

## Design intent — required
Establishes a rigorous version control discipline tailored for AI coding agents operating at high velocity. It counters the standard failure modes of autonomous code generation—unreviewed monolithic diffs, destructive rollbacks, context amnesia, credential leaks, and broken consumer contracts—by enforcing trunk-based development, small atomic commits (~100 lines), descriptive intent-oriented messages, git worktree isolation for concurrent agent streams, the Save Point revert loop (`git reset --hard HEAD`), structured change summaries (`CHANGES MADE`, `THINGS I DIDN'T TOUCH`), pre-commit hygiene hooks, Semantic Versioning, and human-curated changelogs.

## Phase — required
addy:Ship

## Inputs — required
- Dirty working tree and incremental code changes (`skills/git-workflow-and-versioning/SKILL.md:14, 40`)
- Staged git changes inspected via `git diff --staged` (`skills/git-workflow-and-versioning/SKILL.md:217`)
- Project verification commands: `npm test`, `npm run lint`, `npx tsc --noEmit` (`skills/git-workflow-and-versioning/SKILL.md:223-229`)
- Consumer observability impact for semver increment classification (`skills/git-workflow-and-versioning/SKILL.md:276-285`)

## Outputs — required
- Atomic git commits with conventional types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`) (`skills/git-workflow-and-versioning/SKILL.md:88-95`)
- Short-lived feature branches (`feature/*`, `fix/*`, `chore/*`, `refactor/*`) (`skills/git-workflow-and-versioning/SKILL.md:138-145`)
- Isolated parallel agent worktrees (`../project-feature-*`) (`skills/git-workflow-and-versioning/SKILL.md:151-165`)
- Structured change summaries with explicit scope boundaries (`CHANGES MADE`, `THINGS I DIDN'T TOUCH`, `POTENTIAL CONCERNS`) (`skills/git-workflow-and-versioning/SKILL.md:196-207`)
- Annotated release tags (`git tag -a v1.4.0 -m "Release 1.4.0"`) (`skills/git-workflow-and-versioning/SKILL.md:291-292`)
- Human-curated `CHANGELOG.md` entries grouped by `Added / Changed / Fixed / Deprecated / Removed / Security` (`skills/git-workflow-and-versioning/SKILL.md:299-309`)
- Configured `.gitignore` covering secrets, build outputs, and dependencies (`skills/git-workflow-and-versioning/SKILL.md:248`)

## Invokes — required
- skill skills/code-review-and-quality/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:113
- skill skills/api-and-interface-design/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:284
- skill skills/deprecation-and-migration/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/shipping-and-launch/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:43, README.md:273, README.md:374
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:47
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:92
- doc docs/opencode-setup.md — docs/opencode-setup.md:126
- doc docs/cursor-setup.md — docs/cursor-setup.md:161
- doc docs/copilot-setup.md — docs/copilot-setup.md:83
- doc docs/getting-started.md — docs/getting-started.md:75, docs/getting-started.md:140
- doc docs/adoption-guide.md — docs/adoption-guide.md:64
- config evals/cases/git-workflow-and-versioning.json — evals/cases/git-workflow-and-versioning.json:2
- external-doc sources/addy-external/git-workflow-and-versioning.md — sources/addy-external/git-workflow-and-versioning.md:1, sources/addy-external/git-workflow-and-versioning.md:5

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
- `git tag` — skills/git-workflow-and-versioning/SKILL.md:287 — used here
- `changelog` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
- `deprecation-and-migration` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `shipping-and-launch` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `Common Rationalizations` — skills/git-workflow-and-versioning/SKILL.md:313 — defined here
- `Red Flags` — skills/git-workflow-and-versioning/SKILL.md:327 — defined here
- `Verification` — skills/git-workflow-and-versioning/SKILL.md:340 — defined here

## Structure
- Git Workflow and Versioning (line 6)
- Overview (line 8)
- When to Use (line 12)
- Core Principles (line 16)
  - Trunk-Based Development (Recommended) (line 18)
  - 1. Commit Early, Commit Often (line 34)
  - 2. Atomic Commits (line 48)
  - 3. Descriptive Messages (line 65)
  - 4. Keep Concerns Separate (line 96)
  - 5. Size Your Changes (line 111)
- Branching Strategy (line 121)
  - Feature Branches (line 123)
  - Branch Naming (line 138)
- Working with Worktrees (line 147)
- The Save Point Pattern (line 173)
- Change Summaries (line 191)
- Pre-Commit Hygiene (line 211)
- Handling Generated Files (line 244)
- Using Git for Debugging (line 250)
- Release & Versioning (line 270)
  - Semantic Versioning (line 274)
  - Tag the release, and let the tag be the source of truth (line 286)
  - Keep a changelog written for humans (line 297)
- Common Rationalizations (line 313)
- Red Flags (line 327)
- Verification (line 340)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · README.md:273 truncates the skill description to "Git hygiene, atomic commits, trunk-based development, and change summaries", omitting semantic versioning, immutable git release tagging, and changelog maintenance which form a major third of the skill (`SKILL.md:270-312`).
- missing-path · skills/git-workflow-and-versioning/SKILL.md:297 directs maintaining a human-curated `CHANGELOG.md` with every release, but the `sources/addy` repository itself contains no `CHANGELOG.md`.
- orphan · skills/git-workflow-and-versioning/SKILL.md:1-356 is not invoked by any slash command in `.claude/commands/` or `.claude-plugin/plugin.json`, nor mapped in `AGENTS.md:26-32` or `AGENTS.md:40-45`.

## Observations
- Directly advocates git worktrees (`git worktree add`, lines 147-172) as the fundamental concurrency mechanism for parallel AI agent streams to operate without branch collisions.
- Formalizes the "Save Point Pattern" (`git reset --hard HEAD`, line 189) as the essential revert-and-recover primitive for agent workflows.
- All 11 illustrative shell/git workflows (atomic commits, `git log --oneline`, staged secret grep filter, worktree addition/removal, `git bisect`, annotated tagging) and lint-staged JSON configurations were executed and validated in an ephemeral git sandbox via `verify-inv-addy-20.ts` with 100% exit code 0.

## Context cost
14,063 bytes (~3,500 tokens).
