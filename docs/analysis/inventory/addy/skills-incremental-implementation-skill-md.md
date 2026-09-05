---
package: addy
path: skills/incremental-implementation/SKILL.md
type: skill
bytes: 9507
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/incremental-implementation/SKILL.md, sha256: 3a3581e7084a0dc85af420afcc91211a159d3dc46f3d81075a4d53c566b70b80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/incremental-implementation/SKILL.md

## Purpose — required, verbatim
> "Build in thin vertical slices — implement one piece, test it, verify it, then expand. Avoid implementing an entire feature in one pass. Each increment should leave the system in a working, testable state. This is the execution discipline that makes large features manageable." — skills/incremental-implementation/SKILL.md:10

## Design intent — required
Establishes execution discipline for multi-file changes and feature implementations, mandating thin vertical slices where each slice implements, tests, verifies, and commits before expanding. It defines specific slicing strategies (Vertical, Contract-First, Risk-First), implementation rules (Simplicity First, Scope Discipline, One Thing at a Time, Keep It Compilable, Feature Flags, Safe Defaults, Rollback-Friendly), rationalizations to reject, and a strict verification checklist.

## Phase — required
addy:Build

## Inputs — required
- Task plan or breakdown from planning phase (skills/incremental-implementation/SKILL.md:15, 188)
- Specification file or contract definitions (skills/incremental-implementation/SKILL.md:71)
- Repository test, build, lint, and typecheck commands (skills/incremental-implementation/SKILL.md:193, 204-207)

## Outputs — required
- Incremental, atomic code changes and test additions per slice (skills/incremental-implementation/SKILL.md:38, 39)
- Independent, descriptive git commits per slice (skills/incremental-implementation/SKILL.md:41, 141, 209)
- Feature-flagged incomplete functionality for safe merging (skills/incremental-implementation/SKILL.md:150-160)
- Rollback-friendly diffs and corresponding migration rollbacks (skills/incremental-implementation/SKILL.md:176-181)

## Invokes — required
- reference ../../references/definition-of-done.md — skills/incremental-implementation/SKILL.md:249
- skill git-workflow-and-versioning — skills/incremental-implementation/SKILL.md:41
- skill test-driven-development — skills/incremental-implementation/SKILL.md:201

## Invoked by — required
- command .claude/commands/build.md — .claude/commands/build.md:5
- command commands/build.toml — commands/build.toml:4
- command .gemini/commands/build.toml — .gemini/commands/build.toml:4
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:202
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:24
- doc README.md — README.md:249
- doc CLAUDE.md — CLAUDE.md:23

## Concepts named — required, verbatim
`vertical slices` — skills/incremental-implementation/SKILL.md:10, 46 — defined here
`The Increment Cycle` — skills/incremental-implementation/SKILL.md:21 — defined here
`git-workflow-and-versioning` — skills/incremental-implementation/SKILL.md:41 — used here
`atomic commit` — skills/incremental-implementation/SKILL.md:41 — used here
`Slicing Strategies` — skills/incremental-implementation/SKILL.md:44 — defined here
`Vertical Slices` — skills/incremental-implementation/SKILL.md:46 — defined here
`Contract-First Slicing` — skills/incremental-implementation/SKILL.md:66 — defined here
`Risk-First Slicing` — skills/incremental-implementation/SKILL.md:77 — defined here
`Implementation Rules` — skills/incremental-implementation/SKILL.md:89 — defined here
`Simplicity First` — skills/incremental-implementation/SKILL.md:91 — defined here
`Scope Discipline` — skills/incremental-implementation/SKILL.md:115 — defined here
`One Thing at a Time` — skills/incremental-implementation/SKILL.md:135 — defined here
`Keep It Compilable` — skills/incremental-implementation/SKILL.md:143 — defined here
`Feature Flags` — skills/incremental-implementation/SKILL.md:147 — defined here
`Safe Defaults` — skills/incremental-implementation/SKILL.md:162 — defined here
`Rollback-Friendly` — skills/incremental-implementation/SKILL.md:174 — defined here
`Increment Checklist` — skills/incremental-implementation/SKILL.md:199 — defined here
`test-driven-development` — skills/incremental-implementation/SKILL.md:201 — used here
`Discover the Stack First` — skills/incremental-implementation/SKILL.md:201 — used here
`Definition of Done` — skills/incremental-implementation/SKILL.md:249 — used here

## Structure
- `## Overview` — skills/incremental-implementation/SKILL.md:8
- `## When to Use` — skills/incremental-implementation/SKILL.md:12
- `## The Increment Cycle` — skills/incremental-implementation/SKILL.md:21
- `## Slicing Strategies` — skills/incremental-implementation/SKILL.md:44
- `### Vertical Slices (Preferred)` — skills/incremental-implementation/SKILL.md:46
- `### Contract-First Slicing` — skills/incremental-implementation/SKILL.md:66
- `### Risk-First Slicing` — skills/incremental-implementation/SKILL.md:77
- `## Implementation Rules` — skills/incremental-implementation/SKILL.md:89
- `### Rule 0: Simplicity First` — skills/incremental-implementation/SKILL.md:91
- `### Rule 0.5: Scope Discipline` — skills/incremental-implementation/SKILL.md:115
- `### Rule 1: One Thing at a Time` — skills/incremental-implementation/SKILL.md:135
- `### Rule 2: Keep It Compilable` — skills/incremental-implementation/SKILL.md:143
- `### Rule 3: Feature Flags for Incomplete Features` — skills/incremental-implementation/SKILL.md:147
- `### Rule 4: Safe Defaults` — skills/incremental-implementation/SKILL.md:162
- `### Rule 5: Rollback-Friendly` — skills/incremental-implementation/SKILL.md:174
- `## Working with Agents` — skills/incremental-implementation/SKILL.md:183
- `## Increment Checklist` — skills/incremental-implementation/SKILL.md:199
- `## Common Rationalizations` — skills/incremental-implementation/SKILL.md:213
- `## Red Flags` — skills/incremental-implementation/SKILL.md:224
- `## Verification` — skills/incremental-implementation/SKILL.md:237
- `## See Also` — skills/incremental-implementation/SKILL.md:247

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains explicit guidance against redundant agent behavior: "Running the same build/test command twice in a row without any intervening code change" — skills/incremental-implementation/SKILL.md:235. Strongly enforces Scope Discipline against opportunistic refactoring.

## Context cost
9507 bytes for SKILL.md. Plus referenced `../../references/definition-of-done.md` (3798 bytes): total 13305 bytes, approximately 3200 tokens.
