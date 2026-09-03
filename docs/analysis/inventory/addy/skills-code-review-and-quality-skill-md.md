---
package: addy
path: skills/code-review-and-quality/SKILL.md
type: skill
bytes: 20555
unit: inv-addy-16
---

# skills/code-review-and-quality/SKILL.md

## Purpose — required, verbatim
> "Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance." — skills/code-review-and-quality/SKILL.md:10

> "**The approval standard:** Approve a change when it definitely improves overall code health, even if it isn't perfect. Perfect code doesn't exist — the goal is continuous improvement. Don't block a change because it isn't exactly how you would have written it. If it improves the codebase and follows the project's conventions, approve it." — skills/code-review-and-quality/SKILL.md:12

> "Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch." — skills/code-review-and-quality/SKILL.md:3

## Design intent — required
Establishes an objective, multi-dimensional quality gate prior to code merge that counters superficial nitpicking, rubber-stamping ("LGTM"), and author-blindness. It enforces review across five concrete axes (correctness, readability, architecture, security, performance) anchored by an explicit "Approval Standard" (approve changes that definitely improve overall codebase health, even if imperfect). It defines actionable change-sizing limits (~100 lines good, ~1000 lines split), a taxonomy of named structural remedies (collapsing branches, typed models, explicit type boundaries, separating orchestration from business logic), severity-labelled findings (Critical, Required/no-prefix, Nit, Optional/Consider, FYI) with lead-with-what-matters ordering, multi-model review workflows, dead code hygiene, dependency discipline (one dependency bump per change, changelog and lockfile diff scrutiny), and presumptive blocker criteria. Without it, reviews become inconsistent, high-risk security/architectural flaws get buried under cosmetic comments, massive unreviewable diffs accumulate, and deferred technical debt ("I'll clean it up later") compounds permanently.

## Phase — required
addy:Review

(Authoritative evidence: `sources/addy/README.md:264, 268` categorizes under `### Review - Quality gates before merge`: `[code-review-and-quality](skills/code-review-and-quality/SKILL.md)`; `README.md:367`: `│   ├── code-review-and-quality/       #   Review`; `CLAUDE.md:25`: `**Review:** ... code-review-and-quality`; `AGENTS.md:44`: `- REVIEW → code-review-and-quality`).

## Inputs — required
- Code change candidate: staged changes, commits, PR diff, or branch to evaluate (`skills/code-review-and-quality/SKILL.md:16, 108-111, 305`)
- Feature specification, design document, or task requirements defining expected behavior (`skills/code-review-and-quality/SKILL.md:30, 148, 227, 311`)
- Test suite and automated test execution results (`skills/code-review-and-quality/SKILL.md:33, 154-162, 198, 341`)
- Verification story provided by author (build status, test pass logs, manual verification notes, UI before/after screenshots) (`skills/code-review-and-quality/SKILL.md:195-203, 340-344, 393`)
- Standing reference checklists:
  - `../../references/security-checklist.md` (`skills/code-review-and-quality/SKILL.md:351`)
  - `../../references/performance-checklist.md` (`skills/code-review-and-quality/SKILL.md:352`)
- Dependency artifacts (for dependency changes/upgrades):
  - `package.json` (`skills/code-review-and-quality/SKILL.md:297`)
  - Lockfile diffs (`skills/code-review-and-quality/SKILL.md:297, 298, 383, 394`)
  - Dependency changelogs and release/migration notes (`skills/code-review-and-quality/SKILL.md:294, 365, 382, 394`)
  - `npm audit` / vulnerability scan output (`skills/code-review-and-quality/SKILL.md:287, 300`)
- User confirmation answers regarding dead code removal (`skills/code-review-and-quality/SKILL.md:237`)

## Outputs — required
- Categorized review findings document with exact file:line references and actionable fix recommendations (`skills/code-review-and-quality/SKILL.md:177-192`):
  - `Critical:` findings (blocks merge: security vulnerability, data loss, broken functionality) (`skills/code-review-and-quality/SKILL.md:184`)
  - `*(no prefix)*` / `Required:` findings (must address before merge) (`skills/code-review-and-quality/SKILL.md:183`)
  - `Nit:` findings (minor, optional: formatting, style preferences) (`skills/code-review-and-quality/SKILL.md:185`)
  - `Optional:` / `Consider:` findings (suggestions worth considering) (`skills/code-review-and-quality/SKILL.md:186`)
  - `FYI` findings (informational only: context for future reference) (`skills/code-review-and-quality/SKILL.md:187`)
- Named structural remedies proposing specific architectural reorganizations (`skills/code-review-and-quality/SKILL.md:88-102`)
- Presumptive blocker evaluations identifying structural degradation or unjustified size inflation (`skills/code-review-and-quality/SKILL.md:396`)
- Dead code inventory list requesting user authorization before deletion (`skills/code-review-and-quality/SKILL.md:231-248`)
- Change sizing recommendations and splitting strategy proposals (`skills/code-review-and-quality/SKILL.md:103-129`)
- Completed Review Checklist (`skills/code-review-and-quality/SKILL.md:304-348`)
- Final review verdict: `Approve — Ready to merge` or `Request changes — Issues must be addressed` (`skills/code-review-and-quality/SKILL.md:345-348`)

## Invokes — required
- skill security-and-hardening — skills/code-review-and-quality/SKILL.md:66
- skill performance-optimization — skills/code-review-and-quality/SKILL.md:79
- reference ../../references/security-checklist.md — skills/code-review-and-quality/SKILL.md:351
- reference ../../references/performance-checklist.md — skills/code-review-and-quality/SKILL.md:352

## Invoked by — required
- command commands/review.toml — commands/review.toml:4
- command commands/code-simplify.toml — commands/code-simplify.toml:21
- command .claude/commands/review.md — .claude/commands/review.md:5
- command .claude/commands/code-simplify.md — .claude/commands/code-simplify.md:22
- command .gemini/commands/review.toml — .gemini/commands/review.toml:4
- command .gemini/commands/code-simplify.toml — .gemini/commands/code-simplify.toml:21
- agent agents/code-reviewer.md — agents/code-reviewer.md:49
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:113
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:225
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:33
- reference references/definition-of-done.md — references/definition-of-done.md:35
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:35
- doc README.md — README.md:56
- doc CLAUDE.md — CLAUDE.md:25
- doc AGENTS.md — AGENTS.md:29
- config evals/cases/code-review-and-quality.json — evals/cases/code-review-and-quality.json:2
- config evals/cases/constraint-driven-development.json — evals/cases/constraint-driven-development.json:29
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:145

## Concepts named — required, verbatim
- `code-review-and-quality` — skills/code-review-and-quality/SKILL.md:2 — defined here
- `Multi-dimensional code review` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `quality gates` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `five axes` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `The approval standard` — skills/code-review-and-quality/SKILL.md:12 — defined here
- `The Five-Axis Review` — skills/code-review-and-quality/SKILL.md:22 — defined here
- `Correctness` — skills/code-review-and-quality/SKILL.md:26 — defined here
- `Readability & Simplicity` — skills/code-review-and-quality/SKILL.md:36 — defined here
- `Architecture` — skills/code-review-and-quality/SKILL.md:51 — defined here
- `Security` — skills/code-review-and-quality/SKILL.md:64 — defined here
- `security-and-hardening` — skills/code-review-and-quality/SKILL.md:66 — used here
- `SQL queries parameterized` — skills/code-review-and-quality/SKILL.md:71 — used here
- `XSS` — skills/code-review-and-quality/SKILL.md:72 — used here
- `Performance` — skills/code-review-and-quality/SKILL.md:77 — defined here
- `performance-optimization` — skills/code-review-and-quality/SKILL.md:79 — used here
- `N+1 query` — skills/code-review-and-quality/SKILL.md:81 — used here
- `Structural Remedies` — skills/code-review-and-quality/SKILL.md:88 — defined here
- `typed model` — skills/code-review-and-quality/SKILL.md:92 — used here
- `explicit dispatcher` — skills/code-review-and-quality/SKILL.md:92 — used here
- `Separate orchestration from business logic` — skills/code-review-and-quality/SKILL.md:94 — defined here
- `canonical helper` — skills/code-review-and-quality/SKILL.md:96 — used here
- `type boundary` — skills/code-review-and-quality/SKILL.md:97 — used here
- `pass-through wrapper` — skills/code-review-and-quality/SKILL.md:98 — used here
- `Change Sizing` — skills/code-review-and-quality/SKILL.md:103 — defined here
- `file size` — skills/code-review-and-quality/SKILL.md:113 — defined here
- `diff size` — skills/code-review-and-quality/SKILL.md:113 — defined here
- `one change` — skills/code-review-and-quality/SKILL.md:115 — defined here
- `Splitting strategies` — skills/code-review-and-quality/SKILL.md:117 — defined here
- `Stack` — skills/code-review-and-quality/SKILL.md:121 — defined here
- `By file group` — skills/code-review-and-quality/SKILL.md:122 — defined here
- `Horizontal` — skills/code-review-and-quality/SKILL.md:123 — defined here
- `Vertical` — skills/code-review-and-quality/SKILL.md:124 — defined here
- `Separate refactoring from feature work` — skills/code-review-and-quality/SKILL.md:128 — defined here
- `Change Descriptions` — skills/code-review-and-quality/SKILL.md:130 — defined here
- `First line` — skills/code-review-and-quality/SKILL.md:134 — defined here
- `Body` — skills/code-review-and-quality/SKILL.md:136 — defined here
- `Anti-patterns` — skills/code-review-and-quality/SKILL.md:138 — defined here
- `Review Process` — skills/code-review-and-quality/SKILL.md:140 — defined here
- `Understand the Context` — skills/code-review-and-quality/SKILL.md:142 — defined here
- `Review the Tests First` — skills/code-review-and-quality/SKILL.md:152 — defined here
- `Review the Implementation` — skills/code-review-and-quality/SKILL.md:164 — defined here
- `Categorize Findings` — skills/code-review-and-quality/SKILL.md:177 — defined here
- `Required` — skills/code-review-and-quality/SKILL.md:183 — defined here
- `Critical:` — skills/code-review-and-quality/SKILL.md:184 — defined here
- `Nit:` — skills/code-review-and-quality/SKILL.md:185 — defined here
- `Optional:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `Consider:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `FYI` — skills/code-review-and-quality/SKILL.md:187 — defined here
- `Lead with what matters` — skills/code-review-and-quality/SKILL.md:191 — defined here
- `Verify the Verification` — skills/code-review-and-quality/SKILL.md:193 — defined here
- `verification story` — skills/code-review-and-quality/SKILL.md:195 — defined here
- `Multi-Model Review Pattern` — skills/code-review-and-quality/SKILL.md:205 — defined here
- `Model A` — skills/code-review-and-quality/SKILL.md:210 — used here
- `Model B` — skills/code-review-and-quality/SKILL.md:213 — used here
- `Dead Code Hygiene` — skills/code-review-and-quality/SKILL.md:231 — defined here
- `Ask before deleting` — skills/code-review-and-quality/SKILL.md:237 — defined here
- `Review Speed` — skills/code-review-and-quality/SKILL.md:249 — defined here
- `one business day` — skills/code-review-and-quality/SKILL.md:253 — defined here
- `Handling Disagreements` — skills/code-review-and-quality/SKILL.md:258 — defined here
- `I'll clean it up later` — skills/code-review-and-quality/SKILL.md:267 — used here
- `Honesty in Review` — skills/code-review-and-quality/SKILL.md:269 — defined here
- `rubber-stamp` — skills/code-review-and-quality/SKILL.md:273 — used here
- `LGTM` — skills/code-review-and-quality/SKILL.md:273 — used here
- `Sycophancy` — skills/code-review-and-quality/SKILL.md:276 — used here
- `Dependency Discipline` — skills/code-review-and-quality/SKILL.md:279 — defined here
- `npm audit` — skills/code-review-and-quality/SKILL.md:287 — used here
- `Prefer standard library and existing utilities over new dependencies` — skills/code-review-and-quality/SKILL.md:290 — defined here
- `Upgrading an existing dependency` — skills/code-review-and-quality/SKILL.md:292 — defined here
- `Semver` — skills/code-review-and-quality/SKILL.md:294 — used here
- `One dependency per change` — skills/code-review-and-quality/SKILL.md:295 — defined here
- `Let the tests decide` — skills/code-review-and-quality/SKILL.md:296 — defined here
- `transitive graph` — skills/code-review-and-quality/SKILL.md:297 — used here
- `lockfile` — skills/code-review-and-quality/SKILL.md:298 — used here
- `supply-chain risk` — skills/code-review-and-quality/SKILL.md:300 — used here
- `The Review Checklist` — skills/code-review-and-quality/SKILL.md:302 — defined here
- `Approve` — skills/code-review-and-quality/SKILL.md:346 — defined here
- `Request changes` — skills/code-review-and-quality/SKILL.md:347 — defined here
- `security-checklist` — skills/code-review-and-quality/SKILL.md:351 — used here
- `performance-checklist` — skills/code-review-and-quality/SKILL.md:352 — used here
- `Common Rationalizations` — skills/code-review-and-quality/SKILL.md:354 — defined here
- `Red Flags` — skills/code-review-and-quality/SKILL.md:368 — defined here
- `Verification` — skills/code-review-and-quality/SKILL.md:385 — defined here
- `Presumptive blockers` — skills/code-review-and-quality/SKILL.md:396 — defined here

## Structure
- `# Code Review and Quality` — line 6
- `## Overview` — line 8
- `## When to Use` — line 14
- `## The Five-Axis Review` — line 22
  - `### 1. Correctness` — line 26
  - `### 2. Readability & Simplicity` — line 36
  - `### 3. Architecture` — line 51
  - `### 4. Security` — line 64
  - `### 5. Performance` — line 77
- `## Structural Remedies` — line 88
- `## Change Sizing` — line 103
- `## Change Descriptions` — line 130
- `## Review Process` — line 140
  - `### Step 1: Understand the Context` — line 142
  - `### Step 2: Review the Tests First` — line 152
  - `### Step 3: Review the Implementation` — line 164
  - `### Step 4: Categorize Findings` — line 177
  - `### Step 5: Verify the Verification` — line 193
- `## Multi-Model Review Pattern` — line 205
- `## Dead Code Hygiene` — line 231
- `## Review Speed` — line 249
- `## Handling Disagreements` — line 258
- `## Honesty in Review` — line 269
- `## Dependency Discipline` — line 279
- `## The Review Checklist` — line 302
- `## See Also` — line 349
- `## Common Rationalizations` — line 354
- `## Red Flags` — line 368
- `## Verification` — line 385

## Scripts — required if type is script or the skill ships scripts
none — type is skill and no scripts are shipped or inlined.

## Defects — required
- `doc-drift` · commands/review.toml:14, .claude/commands/review.md:15, and .gemini/commands/review.toml:14 · Command manifests instruct "Categorize findings as Critical, Important, or Suggestion", contradicting skills/code-review-and-quality/SKILL.md:181-188 which establishes the severity taxonomy as `*(no prefix)*` (Required change), `Critical:`, `Nit:`, `Optional:` / `Consider:`, and `FYI`.
- `doc-drift` · README.md:268 · Catalog entry describes severity labels parenthetically as `(Nit/Optional/FYI)`, omitting `Critical` and `Required` which are the two merge-blocking categories defined in skills/code-review-and-quality/SKILL.md:181-184.
- `doc-drift` · agents/code-reviewer.md:101 · States "Invoke via: /review (single-perspective review) or /ship (parallel fan-out alongside security-auditor and test-engineer)", but commands/review.toml:4, .claude/commands/review.md:5, and .gemini/commands/review.toml:4 directly invoke the `code-review-and-quality` skill rather than delegating to the `code-reviewer` agent persona.
- `doc-drift` · references/orchestration-patterns.md:35 · Describes `/review → code-reviewer (with code-review-and-quality skill) → report`, which contradicts the actual command implementations in commands/review.toml that invoke the skill directly without a persona wrapper.
- `internal-contradiction` · skills/code-review-and-quality/SKILL.md:181-188 vs SKILL.md:228 · Lines 181-188 define required findings as having `*(no prefix)*`, whereas the example prompt in line 228 instructs the agent to "Flag any issues as Critical, Required, Optional, or Nit", using `Required` as an explicit prefix label instead of omitting the prefix.

## Observations
- **High-leverage concept**: "The Approval Standard" (line 12) shifts reviewer posture from stylistic perfectionism to continuous improvement: approve code that definitely improves codebase health, even if imperfect.
- **Named Structural Remedies**: Lines 88-102 provide a concrete vocabulary for refactoring suggestions (e.g., "Collapse duplicate branches", "Make type boundary explicit", "Separate orchestration from business logic", "Delete pass-through wrapper").
- **Anti-sycophancy rule**: "Honesty in Review" (lines 269-278) explicitly warns that sycophancy is an agent failure mode in reviews and forbids rubber-stamping ("LGTM") or softening real bugs into minor concerns.
- **Presumptive blockers heuristic**: Line 396 establishes clear criteria for when architectural issues block merge vs when they are merely advisory.
- **Dependency Discipline**: Lines 279-300 provide unusually rigorous guidance mandating one dependency upgrade per PR, lockfile diff review, changelog analysis over semver trust, and letting tests decide.
- **Multi-Model Review Pattern**: Lines 205-230 specifically outline multi-agent / multi-model workflows (Model A writes, Model B reviews, Model A addresses feedback, Human decides).

## Context cost
- File size: 20,555 bytes (~5,140 tokens).
- Transitive cost when loaded with referenced external checklists:
  - `references/security-checklist.md`: 11,881 bytes (~2,970 tokens)
  - `references/performance-checklist.md`: 13,139 bytes (~3,285 tokens)
  - Total composite context cost: 45,575 bytes (~11,395 tokens).
