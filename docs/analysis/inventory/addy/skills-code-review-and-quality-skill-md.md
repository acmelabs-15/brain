---
package: addy
path: skills/code-review-and-quality/SKILL.md
type: skill
bytes: 20555
unit: inv-addy-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/code-review-and-quality/SKILL.md

## Purpose — required, verbatim
> "Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch." — skills/code-review-and-quality/SKILL.md:3

## Design intent — required
Provides a comprehensive multi-dimensional code review framework evaluating changes across five explicit axes: correctness, readability & simplicity, architecture, security, and performance. It establishes a pragmatic approval standard focused on net improvement to code health rather than perfection, defines actionable structural remedies for architectural debt, enforces disciplined change sizing (~100 lines target) and splitting strategies, establishes a four-tier finding severity taxonomy (Critical, Required, Optional, Nit), articulates speed and honesty norms, and details dependency management and upgrade hygiene.

## Phase — required
addy:Review

## Inputs — required
Code diffs, pull requests, file modifications, spec or task requirements and expected behavior changes (`skills/code-review-and-quality/SKILL.md:30, 147-150`), test suites and test execution verification stories (`skills/code-review-and-quality/SKILL.md:33, 152-163`), project conventions and style guides (`skills/code-review-and-quality/SKILL.md:12, 262`), and dependency changelogs, migration notes, and lockfile diffs (`skills/code-review-and-quality/SKILL.md:294-298`).

## Outputs — required
Categorized review findings with severity labels (`skills/code-review-and-quality/SKILL.md:180-188`), concrete structural remedy proposals (`skills/code-review-and-quality/SKILL.md:88-101`), review verdicts (`Approve` or `Request changes`) (`skills/code-review-and-quality/SKILL.md:345-348`), completed review checklists (`skills/code-review-and-quality/SKILL.md:304-348`), and dead code removal prompts (`skills/code-review-and-quality/SKILL.md:237-247`).

## Invokes — required
- skill security-and-hardening — skills/code-review-and-quality/SKILL.md:66
- skill performance-optimization — skills/code-review-and-quality/SKILL.md:79
- reference references/security-checklist.md — skills/code-review-and-quality/SKILL.md:351
- reference references/performance-checklist.md — skills/code-review-and-quality/SKILL.md:352

## Invoked by — required
- command review — commands/review.toml:4
- command code-simplify — commands/code-simplify.toml:21
- agent code-reviewer — agents/code-reviewer.md:49
- doc CLAUDE.md — CLAUDE.md:25
- doc README.md — README.md:268
- skill git-workflow-and-versioning — skills/git-workflow-and-versioning/SKILL.md:113
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:33
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:10
- reference references/definition-of-done.md — references/definition-of-done.md:35
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:35
- doc docs/adoption-guide.md — docs/adoption-guide.md:42

## Concepts named — required, verbatim
- `approval standard` — skills/code-review-and-quality/SKILL.md:12 — defined here
- `Five-Axis Review` — skills/code-review-and-quality/SKILL.md:22 — defined here
- `Correctness` — skills/code-review-and-quality/SKILL.md:26 — defined here
- `Readability & Simplicity` — skills/code-review-and-quality/SKILL.md:36 — defined here
- `Architecture` — skills/code-review-and-quality/SKILL.md:51 — defined here
- `Security` — skills/code-review-and-quality/SKILL.md:64 — defined here
- `Performance` — skills/code-review-and-quality/SKILL.md:77 — defined here
- `Structural Remedies` — skills/code-review-and-quality/SKILL.md:88 — defined here
- `Change Sizing` — skills/code-review-and-quality/SKILL.md:103 — defined here
- `Stack` — skills/code-review-and-quality/SKILL.md:121 — defined here
- `By file group` — skills/code-review-and-quality/SKILL.md:122 — defined here
- `Horizontal` — skills/code-review-and-quality/SKILL.md:123 — defined here
- `Vertical` — skills/code-review-and-quality/SKILL.md:124 — defined here
- `Change Descriptions` — skills/code-review-and-quality/SKILL.md:130 — defined here
- `Critical` — skills/code-review-and-quality/SKILL.md:184 — defined here
- `Nit` — skills/code-review-and-quality/SKILL.md:185 — defined here
- `Optional` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `Consider` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `FYI` — skills/code-review-and-quality/SKILL.md:187 — defined here
- `Multi-Model Review Pattern` — skills/code-review-and-quality/SKILL.md:205 — defined here
- `Dead Code Hygiene` — skills/code-review-and-quality/SKILL.md:231 — defined here
- `Review Speed` — skills/code-review-and-quality/SKILL.md:249 — defined here
- `Handling Disagreements` — skills/code-review-and-quality/SKILL.md:258 — defined here
- `Honesty in Review` — skills/code-review-and-quality/SKILL.md:269 — defined here
- `Dependency Discipline` — skills/code-review-and-quality/SKILL.md:279 — defined here
- `Review Checklist` — skills/code-review-and-quality/SKILL.md:302 — defined here
- `Red Flags` — skills/code-review-and-quality/SKILL.md:368 — defined here
- `Verification` — skills/code-review-and-quality/SKILL.md:385 — defined here
- `Presumptive blockers` — skills/code-review-and-quality/SKILL.md:396 — defined here

## Structure
- Overview — skills/code-review-and-quality/SKILL.md:8
- When to Use — skills/code-review-and-quality/SKILL.md:14
- The Five-Axis Review — skills/code-review-and-quality/SKILL.md:22
- 1. Correctness — skills/code-review-and-quality/SKILL.md:26
- 2. Readability & Simplicity — skills/code-review-and-quality/SKILL.md:36
- 3. Architecture — skills/code-review-and-quality/SKILL.md:51
- 4. Security — skills/code-review-and-quality/SKILL.md:64
- 5. Performance — skills/code-review-and-quality/SKILL.md:77
- Structural Remedies — skills/code-review-and-quality/SKILL.md:88
- Change Sizing — skills/code-review-and-quality/SKILL.md:103
- Change Descriptions — skills/code-review-and-quality/SKILL.md:130
- Review Process — skills/code-review-and-quality/SKILL.md:140
- Step 1: Understand the Context — skills/code-review-and-quality/SKILL.md:142
- Step 2: Review the Tests First — skills/code-review-and-quality/SKILL.md:152
- Step 3: Review the Implementation — skills/code-review-and-quality/SKILL.md:164
- Step 4: Categorize Findings — skills/code-review-and-quality/SKILL.md:177
- Step 5: Verify the Verification — skills/code-review-and-quality/SKILL.md:193
- Multi-Model Review Pattern — skills/code-review-and-quality/SKILL.md:205
- Dead Code Hygiene — skills/code-review-and-quality/SKILL.md:231
- Review Speed — skills/code-review-and-quality/SKILL.md:249
- Handling Disagreements — skills/code-review-and-quality/SKILL.md:258
- Honesty in Review — skills/code-review-and-quality/SKILL.md:269
- Dependency Discipline — skills/code-review-and-quality/SKILL.md:279
- The Review Checklist — skills/code-review-and-quality/SKILL.md:302
- See Also — skills/code-review-and-quality/SKILL.md:349
- Common Rationalizations — skills/code-review-and-quality/SKILL.md:354
- Red Flags — skills/code-review-and-quality/SKILL.md:368
- Verification — skills/code-review-and-quality/SKILL.md:385

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the Multi-Model Review Pattern (skills/code-review-and-quality/SKILL.md:205-223) where Model A writes code, Model B reviews for correctness and architecture, Model A addresses feedback, and human makes the final call.
- Sets explicit change-sizing thresholds: ~100 lines changed (good), ~300 lines (acceptable), ~1000 lines (too large), distinguishing diff size from file size (~1000 lines total inspection signal) (skills/code-review-and-quality/SKILL.md:107-114).
- Dead code hygiene requires asking before deleting rather than silent removal (skills/code-review-and-quality/SKILL.md:237-239).
- Anti-rationalization on deferred work: "Don't accept \"I'll clean it up later.\"" — skills/code-review-and-quality/SKILL.md:267.

## Context cost
20555 bytes, ~4700 tokens. When following references and companion skills (references/security-checklist.md: 11881 bytes, references/performance-checklist.md: 13139 bytes), total context reaches ~45575 bytes (~10500 tokens).
