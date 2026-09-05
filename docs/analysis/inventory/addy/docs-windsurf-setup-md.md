---
package: addy
path: docs/windsurf-setup.md
type: doc
bytes: 1471
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/windsurf-setup.md, sha256: 1410af016060047d1a265365f8d98aadd00a58bcfa2a048edec06d61d337cd97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/windsurf-setup.md

## Purpose — required, verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7

(no explicit purpose statement)

## Design intent — required
Documents configuration procedures for using agent skills within the Codeium Windsurf IDE. Solves the challenge of fitting agent workflows into Windsurf's context limits by prescribing a focused `.windsurfrules` configuration limited to 2-3 essential skills (TDD, incremental implementation, code review) and loading specialized skills (such as security hardening or checklist references) on-demand in conversational chat.

## Phase — required
none

## Inputs — required
Agent skills markdown files from `skills/` and `references/`.

## Outputs — required
Project-level `.windsurfrules` configuration file and global rule configuration in Windsurf settings.

## Invokes — required
- skill test-driven-development — docs/windsurf-setup.md:11
- skill incremental-implementation — docs/windsurf-setup.md:13
- skill code-review-and-quality — docs/windsurf-setup.md:15
- skill security-and-hardening — docs/windsurf-setup.md:47
- reference references/security-checklist.md — docs/windsurf-setup.md:48

## Invoked by — required
- doc README.md — README.md:149

## Concepts named — required, verbatim
- `.windsurfrules` — docs/windsurf-setup.md:7 — used here
- `Global Rules` — docs/windsurf-setup.md:20 — used here
- `Recommended Configuration` — docs/windsurf-setup.md:25 — defined here
- `Usage Tips` — docs/windsurf-setup.md:44 — defined here

## Structure
- # Using agent-skills with Windsurf
- ## Setup
- ### Project Rules
- ### Global Rules
- ## Recommended Configuration
- ## Usage Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/windsurf-setup.md:11 — suggests concatenating raw `SKILL.md` files directly into `.windsurfrules` without stripping YAML frontmatter or handling dependencies on root `references/`.

## Observations
Explicitly addresses token budgeting and context limitations in Windsurf, cautioning that only 2-3 essential skills should be persisted in rules, with other skills and checklists pasted ad-hoc into conversation turns.

## Context cost
1,471 bytes (~370 tokens). Loads nothing directly.
