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
verified: 2026-09-05 quote-check+coverage
---

# skills/git-workflow-and-versioning/SKILL.md

## Purpose — required, verbatim
> "Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, opening or reviewing a pull request (PR), pushing to a remote, or when you need to organize work across multiple parallel streams. Use when cutting a release, choosing a semantic version bump, tagging, or writing a changelog." — skills/git-workflow-and-versioning/SKILL.md:3

## Design intent — required
AI coding agents generate code at high velocity, which easily leads to sprawling, untracked changes, unmanageable merge conflicts, breaking changes disguised as minor updates, and untraceable regressions. This skill solves that coordination breakdown by establishing strict, disciplined version control workflows: trunk-based development with short-lived branches, atomic commits sized at ~100 lines that act as instant save points and bisectable units, structured change summaries enforcing scope discipline, pre-commit quality gates, git worktrees for isolated parallel agent execution, and semantic versioning coupled with curated human-readable changelogs. Without it, agent workflows risk accumulating large uncommitted diffs, conflating refactoring with behavior changes, breaking consumers via unversioned releases, and losing the ability to reliably recover from bad generations or debug regressions via git bisect.

## Phase — required
addy:Ship — grouped under the Ship phase in Addy's taxonomy (cited in `CLAUDE.md:26`, `README.md:371`, and `skills/using-agent-skills/SKILL.md:187`), while functionally operating cross-phase per its triggering rule: "Always. Every code change flows through git." — skills/git-workflow-and-versioning/SKILL.md:14.

## Inputs — required
- Code changes and staged modifications: "Check what you're about to commit" — skills/git-workflow-and-versioning/SKILL.md:216
- Staged diff inspection: `git diff --staged` — skills/git-workflow-and-versioning/SKILL.md:217
- Secret scanning on staged changes: `git diff --staged | grep -i "password\|secret\|api_key\|token"` — skills/git-workflow-and-versioning/SKILL.md:220
- Test suite execution: `npm test` — skills/git-workflow-and-versioning/SKILL.md:223
- Linting suite: `npm run lint` — skills/git-workflow-and-versioning/SKILL.md:226
- Type checking: `npx tsc --noEmit` — skills/git-workflow-and-versioning/SKILL.md:229
- Existing history and commit log: `git log --oneline` — skills/git-workflow-and-versioning/SKILL.md:54
- Git bisect for bug hunting: `git bisect start` — skills/git-workflow-and-versioning/SKILL.md:254
- Git blame for line history: `git blame src/services/task.ts` — skills/git-workflow-and-versioning/SKILL.md:264
- Git log keyword search: `git log --grep="validation" --oneline` — skills/git-workflow-and-versioning/SKILL.md:267
- Project configuration: `package.json` — skills/git-workflow-and-versioning/SKILL.md:235
- Git exclusion rules: `.gitignore` — skills/git-workflow-and-versioning/SKILL.md:248

## Outputs — required
- Git commits: atomic commits with structured messages: "<type>: <short description>" — skills/git-workflow-and-versioning/SKILL.md:83
- Short-lived feature branches: `feature/<short-description>` — skills/git-workflow-and-versioning/SKILL.md:141
- Bug fix branches: `fix/<short-description>` — skills/git-workflow-and-versioning/SKILL.md:142
- Git worktrees for parallel agents: "Create a worktree for a feature branch" — skills/git-workflow-and-versioning/SKILL.md:152
- Structured change summaries: "CHANGES MADE:" — skills/git-workflow-and-versioning/SKILL.md:196
- Undocumented / untouched scope demarcations: "THINGS I DIDN'T TOUCH (intentionally):" — skills/git-workflow-and-versioning/SKILL.md:200
- Risk and concern disclosures: "POTENTIAL CONCERNS:" — skills/git-workflow-and-versioning/SKILL.md:204
- Annotated release tags: `git tag -a v1.4.0 -m "Release 1.4.0"` — skills/git-workflow-and-versioning/SKILL.md:291
- Curated human-readable changelog entries: "Keep a changelog written for humans" — skills/git-workflow-and-versioning/SKILL.md:297

## Invokes — required
- skill code-review-and-quality — skills/git-workflow-and-versioning/SKILL.md:113
- skill api-and-interface-design — skills/git-workflow-and-versioning/SKILL.md:284
- skill deprecation-and-migration — skills/git-workflow-and-versioning/SKILL.md:311
- skill shipping-and-launch — skills/git-workflow-and-versioning/SKILL.md:311

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:37
- skill incremental-implementation — skills/incremental-implementation/SKILL.md:41
- doc README.md — README.md:277
- doc CLAUDE.md — CLAUDE.md:26
- doc docs/adoption-guide.md — docs/adoption-guide.md:51
- doc docs/cursor-setup.md — docs/cursor-setup.md:162

## Concepts named — required, verbatim
- `save points` — skills/git-workflow-and-versioning/SKILL.md:10 — used here
- `sandboxes` — skills/git-workflow-and-versioning/SKILL.md:10 — used here
- `Trunk-Based Development` — skills/git-workflow-and-versioning/SKILL.md:18 — defined here
- `short-lived feature branches` — skills/git-workflow-and-versioning/SKILL.md:20 — defined here
- `Long-lived development branches` — skills/git-workflow-and-versioning/SKILL.md:20 — used here
- `DORA research` — skills/git-workflow-and-versioning/SKILL.md:20 — used here
- `gitflow` — skills/git-workflow-and-versioning/SKILL.md:28 — used here
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
- `Working with Worktrees` — skills/git-workflow-and-versioning/SKILL.md:147 — defined here
- `git worktrees` — skills/git-workflow-and-versioning/SKILL.md:149 — used here
- `The Save Point Pattern` — skills/git-workflow-and-versioning/SKILL.md:173 — defined here
- `Change Summaries` — skills/git-workflow-and-versioning/SKILL.md:191 — defined here
- `CHANGES MADE` — skills/git-workflow-and-versioning/SKILL.md:196 — defined here
- `THINGS I DIDN'T TOUCH` — skills/git-workflow-and-versioning/SKILL.md:200 — defined here
- `POTENTIAL CONCERNS` — skills/git-workflow-and-versioning/SKILL.md:204 — defined here
- `Pre-Commit Hygiene` — skills/git-workflow-and-versioning/SKILL.md:211 — defined here
- `git hooks` — skills/git-workflow-and-versioning/SKILL.md:232 — used here
- `Handling Generated Files` — skills/git-workflow-and-versioning/SKILL.md:244 — defined here
- `Using Git for Debugging` — skills/git-workflow-and-versioning/SKILL.md:250 — defined here
- `git bisect` — skills/git-workflow-and-versioning/SKILL.md:254 — used here
- `git blame` — skills/git-workflow-and-versioning/SKILL.md:264 — used here
- `Release & Versioning` — skills/git-workflow-and-versioning/SKILL.md:270 — defined here
- `Semantic Versioning` — skills/git-workflow-and-versioning/SKILL.md:274 — defined here
- `Hyrum's Law` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `api-and-interface-design` — skills/git-workflow-and-versioning/SKILL.md:284 — used here
- `Tag the release` — skills/git-workflow-and-versioning/SKILL.md:286 — defined here
- `Keep a changelog written for humans` — skills/git-workflow-and-versioning/SKILL.md:297 — defined here
- `changelog` — skills/git-workflow-and-versioning/SKILL.md:299 — used here
- `deprecation-and-migration` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `shipping-and-launch` — skills/git-workflow-and-versioning/SKILL.md:311 — used here
- `Common Rationalizations` — skills/git-workflow-and-versioning/SKILL.md:313 — defined here
- `Red Flags` — skills/git-workflow-and-versioning/SKILL.md:327 — defined here
- `Verification` — skills/git-workflow-and-versioning/SKILL.md:340 — defined here

## Structure
- # Git Workflow and Versioning
- ## Overview
- ## When to Use
- ## Core Principles
- ### Trunk-Based Development (Recommended)
- ### 1. Commit Early, Commit Often
- ### 2. Atomic Commits
- ### 3. Descriptive Messages
- ### 4. Keep Concerns Separate
- ### 5. Size Your Changes
- ## Branching Strategy
- ### Feature Branches
- ### Branch Naming
- ## Working with Worktrees
- ## The Save Point Pattern
- ## Change Summaries
- ## Pre-Commit Hygiene
- ## Handling Generated Files
- ## Using Git for Debugging
- ## Release & Versioning
- ### Semantic Versioning
- ### Tag the release, and let the tag be the source of truth
- ### Keep a changelog written for humans
- ## Common Rationalizations
- ## Red Flags
- ## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — "Process" — external/git-workflow-and-versioning.md:10 — The external doc lists section 03 as "Process", but skills/git-workflow-and-versioning/SKILL.md does not contain a "## Process" section, instead organizing workflows across subsections under Core Principles, Branching Strategy, and Release & Versioning.
- doc-drift — "Rationalizations" — external/git-workflow-and-versioning.md:10 — The external doc labels section 04 as "Rationalizations", whereas skills/git-workflow-and-versioning/SKILL.md:313 titles the section "## Common Rationalizations".
- cross-file-contradiction — "Ship" — skills/using-agent-skills/SKILL.md:187 — CLAUDE.md:26 and using-agent-skills place git-workflow-and-versioning strictly in the "Ship" phase, but the skill itself defines its activation under When to Use as "Always. Every code change flows through git." — skills/git-workflow-and-versioning/SKILL.md:14, operating cross-phase across the entire development lifecycle.

## Observations
- The skill establishes "The Save Point Pattern" — skills/git-workflow-and-versioning/SKILL.md:173, viewing commits as granular checkpoints that enable instantaneous recovery via `git reset --hard HEAD` when an AI agent generates failing or erroneous code.
- Introduces an explicit structured change summary template with "THINGS I DIDN'T TOUCH" — skills/git-workflow-and-versioning/SKILL.md:200 to enforce and demonstrate agent scope discipline and prevent unsolicited refactoring.
- Features explicit guidance for multi-agent concurrency: "Working with Worktrees" — skills/git-workflow-and-versioning/SKILL.md:147 directs using `git worktrees` so parallel agents can operate simultaneously without interfering with each other's working directory or branch state.
- Articulates a strict consumer-facing contract for semantic versioning linked to "Hyrum's Law" — skills/git-workflow-and-versioning/SKILL.md:284, insisting that any observable behavior change relied upon by downstream consumers constitutes a breaking major bump regardless of code diff size.
- Mandates keeping human-curated changelogs grouped by impact and written concurrently with the code change rather than reconstructed at release time.

## Context cost
- File size: 14,063 bytes (~3,515 tokens).
- Dynamic runtime imports: none (no scripts or external reference files loaded into agent context).
- Referenced companion skills (`code-review-and-quality`, `api-and-interface-design`, `deprecation-and-migration`, `shipping-and-launch`): 58,092 bytes (~14,523 tokens) if loaded alongside.
