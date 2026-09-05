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
verified: 2026-09-04 quote-check+coverage
---

# skills/incremental-implementation/SKILL.md

## Purpose — required, verbatim
> "Build in thin vertical slices — implement one piece, test it, verify it, then expand. Avoid implementing an entire feature in one pass. Each increment should leave the system in a working, testable state. This is the execution discipline that makes large features manageable." — skills/incremental-implementation/SKILL.md:10

## Design intent — required
Establishes the core code-implementation discipline of delivering features via thin, end-to-end vertical slices that preserve system compilability and pass test suites at every step. It formalizes the five-step Increment Cycle (Implement -> Test -> Verify -> Commit -> Next slice), defines three slicing strategies (Vertical, Contract-First, Risk-First), mandates strict simplicity (Rule 0) and scope hygiene (Rule 0.5), requires feature flags for work-in-progress code, and checks completion against the standing Definition of Done.

## Phase — required
addy:Build

## Inputs — required
- Task breakdown or implementation plan (e.g. from `planning-and-task-breakdown` or `/build auto`)
- Existing repository test suite and build tooling (skills/incremental-implementation/SKILL.md:204-207)
- Codebase files under modification

## Outputs — required
- Incremental production code and co-located tests
- Atomic git commits per verified slice (skills/incremental-implementation/SKILL.md:41)
- Feature flag wrappers isolating incomplete changes (skills/incremental-implementation/SKILL.md:148-161)

## Invokes — required
- reference git-workflow-and-versioning — skills/incremental-implementation/SKILL.md:41
- reference test-driven-development — skills/incremental-implementation/SKILL.md:201
- reference ../../references/definition-of-done.md — skills/incremental-implementation/SKILL.md:249

## Invoked by — required
- command commands/build.toml — commands/build.toml:4
- command .claude/commands/build.md — .claude/commands/build.md:5
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:24
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:202
- skill skills/deprecation-and-migration/SKILL.md — skills/deprecation-and-migration/SKILL.md:183
- reference references/definition-of-done.md — references/definition-of-done.md:3

## Concepts named — required, verbatim
- `The Increment Cycle` — skills/incremental-implementation/SKILL.md:21 — defined here
- `Vertical Slices` — skills/incremental-implementation/SKILL.md:46 — defined here
- `Contract-First Slicing` — skills/incremental-implementation/SKILL.md:66 — defined here
- `Risk-First Slicing` — skills/incremental-implementation/SKILL.md:77 — defined here
- `Rule 0: Simplicity First` — skills/incremental-implementation/SKILL.md:91 — defined here
- `Rule 0.5: Scope Discipline` — skills/incremental-implementation/SKILL.md:115 — defined here
- `Rule 1: One Thing at a Time` — skills/incremental-implementation/SKILL.md:135 — defined here
- `Rule 2: Keep It Compilable` — skills/incremental-implementation/SKILL.md:143 — defined here
- `Rule 3: Feature Flags for Incomplete Features` — skills/incremental-implementation/SKILL.md:147 — defined here
- `Rule 4: Safe Defaults` — skills/incremental-implementation/SKILL.md:162 — defined here
- `Rule 5: Rollback-Friendly` — skills/incremental-implementation/SKILL.md:174 — defined here
- `Increment Checklist` — skills/incremental-implementation/SKILL.md:199 — defined here
- `Definition of Done` — skills/incremental-implementation/SKILL.md:249 — used here

## Structure
- `# Incremental Implementation`
- `## Overview`
- `## When to Use`
- `## The Increment Cycle`
- `## Slicing Strategies`
- `### Vertical Slices (Preferred)`
- `### Contract-First Slicing`
- `### Risk-First Slicing`
- `## Implementation Rules`
- `### Rule 0: Simplicity First`
- `### Rule 0.5: Scope Discipline`
- `### Rule 1: One Thing at a Time`
- `### Rule 2: Keep It Compilable`
- `### Rule 3: Feature Flags for Incomplete Features`
- `### Rule 4: Safe Defaults`
- `### Rule 5: Rollback-Friendly`
- `## Working with Agents`
- `## Increment Checklist`
- `## Common Rationalizations`
- `## Red Flags`
- `## Verification`
- `## See Also`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Codifies strict scope boundaries via Rule 0.5 with the explicit "Noticed but not touching" pattern to prevent scope creep during active feature development. Directly pairs with `test-driven-development` and `definition-of-done.md` as the core build-phase execution engine.

## Context cost
9507 bytes (~2,377 tokens). Cross-references `references/definition-of-done.md` (3,405 bytes, ~851 tokens) and sibling skills `git-workflow-and-versioning` and `test-driven-development`.
