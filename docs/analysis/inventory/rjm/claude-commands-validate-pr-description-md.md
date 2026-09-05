---
package: rjm
path: .claude/commands/validate-pr-description.md
type: command
bytes: 1556
unit: inv-rjm-75
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/validate-pr-description.md, sha256: a77b04b081da3955117fae000dcf4f7db5ce391b2d050bd272e2b50e777ee9f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/validate-pr-description.md

## Purpose — required, verbatim
> "Use when validating a PR title and description for conventional commit format, issue linking keywords, and template compliance before submission" — .claude/commands/validate-pr-description.md:2

## Design intent — required
Provides a targeted pre-submission validation command to ensure pull request titles and descriptions conform to project standards before submission. It validates conventional commit formatting for PR titles, ensures issue linking keywords (`Closes #N`, `Fixes #N`, `Resolves #N`) are present for traceability and automatic closure upon merge, and verifies PR template section completeness. Without this command, malformed PRs risk failing downstream CI gates or losing traceability to their tracking issues.

## Phase — required
rjm:ship

## Inputs — required
- PR title provided by user (.claude/commands/validate-pr-description.md:15).
- PR body text or path to markdown file containing the body (.claude/commands/validate-pr-description.md:16, 48).

## Outputs — required
- Validation findings report with actionable recommendations for any failures (.claude/commands/validate-pr-description.md:53).
- Optional stdout JSON/text results from `.claude/skills/github/scripts/pr/validate_pr_description.py` (.claude/commands/validate-pr-description.md:46-49).

## Invokes — required
- script .claude/skills/github/scripts/pr/validate_pr_description.py — .claude/commands/validate-pr-description.md:43

## Invoked by — required
- command /validate-pr-description — .claude/commands/ship.md:120

## Concepts named — required, verbatim
- `Conventional Commit Title` — .claude/commands/validate-pr-description.md:22 — defined here
- `Issue Linking Keywords` — .claude/commands/validate-pr-description.md:27 — defined here
- `PR Template Compliance` — .claude/commands/validate-pr-description.md:33 — defined here
- `Validation Script` — .claude/commands/validate-pr-description.md:41 — defined here

## Structure
- # Validate PR Description Command — .claude/commands/validate-pr-description.md:11
- ## Context — .claude/commands/validate-pr-description.md:13
- ## Your task — .claude/commands/validate-pr-description.md:18
- ### 1. Conventional Commit Title — .claude/commands/validate-pr-description.md:22
- ### 2. Issue Linking Keywords — .claude/commands/validate-pr-description.md:27
- ### 3. PR Template Compliance — .claude/commands/validate-pr-description.md:33
- ### Validation Script (optional) — .claude/commands/validate-pr-description.md:41

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/github/scripts/pr/validate_pr_description.py:1 — .claude/commands/validate-pr-description.md:35 — lists only Summary, Changes, and Type of Change as required PR template sections, but the underlying validation script also checks and warns on SpecificationReferences (expecting 4 sections).
- other · .claude/commands/validate-pr-description.md:43 — references optional script under .claude/skills/github/, which is within the rjm exclusion boundary for lifecycle tooling.

## Observations
- Invoked by the `/ship` command during pre-submission when `mode=owner` on GitHub or Azure DevOps hosts.
- Defines clear fallback instructions: if the optional Python script is not present, validation proceeds manually against the three explicit criteria.

## Context cost
1556 bytes (approx. 390 tokens).
