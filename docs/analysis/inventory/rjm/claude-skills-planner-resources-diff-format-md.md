---
package: rjm
path: .claude/skills/planner/resources/diff-format.md
type: skill
bytes: 8051
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/resources/diff-format.md, sha256: d94ccdc2bd44f4e5965666c7806a566fc694215a262406436ea07a5c75efb0db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/resources/diff-format.md

## Purpose — required, verbatim
> "This document is the authoritative specification for code changes in implementation plans." — .claude/skills/planner/resources/diff-format.md:3

## Design intent — required
Specifies the standard unified diff format for code modifications in implementation plans. It eliminates fragile line-number references and inline location directives (such as "insert at line 42") by utilizing unchanged context lines as authoritative anchors that survive line drift across sequential milestones. It establishes a two-layer location strategy (prose scope hints plus context diffs) and mandates that comments inside diff additions explain technical rationale (WHY) rather than redundant code narration (WHAT).

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill temporal-contamination.md — .claude/skills/planner/resources/diff-format.md:104

## Invoked by — required
- skill resources/diff-format.md — .claude/skills/planner/SKILL.md:275

## Concepts named — required, verbatim
- `Unified Diff Format for Plan Code Changes` — .claude/skills/planner/resources/diff-format.md:1 — defined here
- `Two-Layer Location Strategy` — .claude/skills/planner/resources/diff-format.md:37 — defined here
- `Prose Scope Hints` — .claude/skills/planner/resources/diff-format.md:44 — defined here
- `Function Context in @@ Line` — .claude/skills/planner/resources/diff-format.md:79 — defined here
- `Context Lines` — .claude/skills/planner/resources/diff-format.md:89 — defined here
- `Comment Placement` — .claude/skills/planner/resources/diff-format.md:97 — defined here
- `Location Directives: Forbidden` — .claude/skills/planner/resources/diff-format.md:141 — defined here
- `diff_format_decision` — .claude/skills/planner/resources/diff-format.md:175 — defined here
- `Validation Checklist` — .claude/skills/planner/resources/diff-format.md:193 — defined here

## Structure
# Unified Diff Format for Plan Code Changes — .claude/skills/planner/resources/diff-format.md:1
## Purpose — .claude/skills/planner/resources/diff-format.md:5
## Anatomy — .claude/skills/planner/resources/diff-format.md:9
## Components — .claude/skills/planner/resources/diff-format.md:26
## Two-Layer Location Strategy — .claude/skills/planner/resources/diff-format.md:37
### Layer 1: Prose Scope Hints — .claude/skills/planner/resources/diff-format.md:44
### Layer 2: Function Context in @@ Line — .claude/skills/planner/resources/diff-format.md:79
## Why Context Lines Matter — .claude/skills/planner/resources/diff-format.md:89
## Comment Placement — .claude/skills/planner/resources/diff-format.md:97
## Location Directives: Forbidden — .claude/skills/planner/resources/diff-format.md:141
## When to Use Diff Format — .claude/skills/planner/resources/diff-format.md:173
## Validation Checklist — .claude/skills/planner/resources/diff-format.md:193

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/resources/diff-format.md:106 · References non-existent agents `@agent-technical-writer` and `@agent-developer`.

## Observations
Defines a boundary test for when to use diffs vs prose: branching logic, multiple insertions, deletions, or replacements require diff format; pure assignments or getters can use prose descriptions. Categorizes component authority: file path is authoritative, line numbers are approximate, function context is a scope hint, and context lines are authoritative anchors.

## Context cost
8051 bytes, approximately 2000 tokens.
