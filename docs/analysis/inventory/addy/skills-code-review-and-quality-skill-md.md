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
verified: 2026-09-04 quote-check+coverage
---

# skills/code-review-and-quality/SKILL.md

## Purpose — required, verbatim
> "Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance." — skills/code-review-and-quality/SKILL.md:10

## Design intent — required
Provides a comprehensive, multi-dimensional code review process with explicit quality gates across five defined axes (correctness, readability, architecture, security, performance). It defines clear approval standards ("definitely improves overall code health, even if it isn't perfect"), standardized change-sizing thresholds (~100 lines good, ~1000 lines split) with concrete splitting strategies, actionable structural remedies (rather than vague criticism), severity-labeled comments (Critical, Required, Nit, Optional/Consider, FYI) to prevent miscommunication, and multi-model review workflows. Without this skill, code reviews drift into subjective bikeshedding, lack consistent evaluation criteria across security and architecture, bottleneck delivery due to uncoordinated review SLAs, or fail to catch critical regressions before merge.

## Phase — required
addy:Review

## Inputs — required
- Code changes, pull requests, and diffs: "Before merging any PR or change" — skills/code-review-and-quality/SKILL.md:16, "diff size" — skills/code-review-and-quality/SKILL.md:113
- Task requirements and specifications: "Does it match the spec or task requirements?" — skills/code-review-and-quality/SKILL.md:30
- Test suites and test results: "Does it pass all tests?" — skills/code-review-and-quality/SKILL.md:33, "Review the Tests First" — skills/code-review-and-quality/SKILL.md:152
- Project conventions and style guides: "project conventions" — skills/code-review-and-quality/SKILL.md:40, "Style guides" — skills/code-review-and-quality/SKILL.md:263
- Dependency manifests and lockfiles: "package.json" — skills/code-review-and-quality/SKILL.md:297, "lockfile diff" — skills/code-review-and-quality/SKILL.md:297
- Security guidance reference: `../../references/security-checklist.md` — skills/code-review-and-quality/SKILL.md:351
- Performance guidance reference: `../../references/performance-checklist.md` — skills/code-review-and-quality/SKILL.md:352

## Outputs — required
- Categorized review comments with severity prefixes: "Critical:" — skills/code-review-and-quality/SKILL.md:184, "Nit:" — skills/code-review-and-quality/SKILL.md:185, "Optional:" — skills/code-review-and-quality/SKILL.md:186, "Consider:" — skills/code-review-and-quality/SKILL.md:186, "FYI" — skills/code-review-and-quality/SKILL.md:187
- Named structural remedies: "Structural Remedies" — skills/code-review-and-quality/SKILL.md:88
- Dead code deletion requests: "DEAD CODE IDENTIFIED:" — skills/code-review-and-quality/SKILL.md:242
- Review checklist evaluation: "The Review Checklist" — skills/code-review-and-quality/SKILL.md:302
- Merge verdicts: "Approve" — skills/code-review-and-quality/SKILL.md:346, "Request changes" — skills/code-review-and-quality/SKILL.md:347

## Invokes — required
- skill security-and-hardening — skills/code-review-and-quality/SKILL.md:66
- skill performance-optimization — skills/code-review-and-quality/SKILL.md:79
- reference ../../references/security-checklist.md — skills/code-review-and-quality/SKILL.md:351
- reference ../../references/performance-checklist.md — skills/code-review-and-quality/SKILL.md:352

## Invoked by — required
- command commands/review.toml — commands/review.toml:4
- command .claude/commands/review.md — .claude/commands/review.md:5
- agent agents/code-reviewer.md — agents/code-reviewer.md:49
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:33
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:33
- skill git-workflow-and-versioning — skills/git-workflow-and-versioning/SKILL.md:113
- reference references/definition-of-done.md — references/definition-of-done.md:35
- doc README.md — README.md:268
- doc CLAUDE.md — CLAUDE.md:25

## Concepts named — required, verbatim
- `Five-Axis Review` — skills/code-review-and-quality/SKILL.md:22 — defined here
- `Correctness` — skills/code-review-and-quality/SKILL.md:26 — defined here
- `Readability & Simplicity` — skills/code-review-and-quality/SKILL.md:36 — defined here
- `Architecture` — skills/code-review-and-quality/SKILL.md:51 — defined here
- `Security` — skills/code-review-and-quality/SKILL.md:64 — defined here
- `security-and-hardening` — skills/code-review-and-quality/SKILL.md:66, 300 — used here
- `Performance` — skills/code-review-and-quality/SKILL.md:77 — defined here
- `performance-optimization` — skills/code-review-and-quality/SKILL.md:79 — used here
- `Structural Remedies` — skills/code-review-and-quality/SKILL.md:88 — defined here
- `Change Sizing` — skills/code-review-and-quality/SKILL.md:103 — defined here
- `Stack` — skills/code-review-and-quality/SKILL.md:121 — defined here
- `By file group` — skills/code-review-and-quality/SKILL.md:122 — defined here
- `Horizontal` — skills/code-review-and-quality/SKILL.md:123 — defined here
- `Vertical` — skills/code-review-and-quality/SKILL.md:124 — defined here
- `Change Descriptions` — skills/code-review-and-quality/SKILL.md:130 — defined here
- `Review Process` — skills/code-review-and-quality/SKILL.md:140 — defined here
- `Critical:` — skills/code-review-and-quality/SKILL.md:184 — defined here
- `Nit:` — skills/code-review-and-quality/SKILL.md:185 — defined here
- `Optional:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `Consider:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `FYI` — skills/code-review-and-quality/SKILL.md:187 — defined here
- `Multi-Model Review Pattern` — skills/code-review-and-quality/SKILL.md:205 — defined here
- `Dead Code Hygiene` — skills/code-review-and-quality/SKILL.md:231 — defined here
- `Review Speed` — skills/code-review-and-quality/SKILL.md:249 — defined here
- `Handling Disagreements` — skills/code-review-and-quality/SKILL.md:258 — defined here
- `Honesty in Review` — skills/code-review-and-quality/SKILL.md:269 — defined here
- `Dependency Discipline` — skills/code-review-and-quality/SKILL.md:279 — defined here
- `Review Checklist` — skills/code-review-and-quality/SKILL.md:302 — defined here
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
- Articulates pragmatic approval standard: approve when it definitely improves overall code health, avoiding perfectionism.
- High emphasis on test-first review: inspecting tests before implementation to understand behavior contracts.
- Defines clear change-sizing heuristics (~100 lines changed ideal, ~1000 lines requires splitting) and file-level sizing thresholds (~1000 total lines signal for decomposition).
- Details Multi-Model Review pattern (Model A implements, Model B reviews, Model A addresses, human approves).
- Thorough dependency review protocol: one dependency per PR, changelog inspection over semver reliance, and strict lockfile hygiene.

## Context cost
20555 bytes (~5138 tokens) for this file. Loads references/security-checklist.md (11881 bytes) and references/performance-checklist.md (13139 bytes) if followed, totaling 45575 bytes (~11394 tokens).
