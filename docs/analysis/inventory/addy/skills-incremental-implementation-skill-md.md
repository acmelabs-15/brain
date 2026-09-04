---
package: addy
path: skills/incremental-implementation/SKILL.md
type: skill
bytes: 9507
unit: inv-addy-38
---

# skills/incremental-implementation/SKILL.md

## Purpose — required, verbatim
> "Build in thin vertical slices — implement one piece, test it, verify it, then expand." — skills/incremental-implementation/SKILL.md:10

## Design intent — required
Incremental implementation provides an execution discipline for multi-file changes that counters the tendency of developers and autonomous agents to write large batches of code at once before verifying. By enforcing thin vertical slices (or contract-first / risk-first slices) where each change is bounded, tested, verified, and committed before proceeding, it prevents compounding errors, maintains continuous buildability/compilability, and ensures rollback-friendly, atomic git progression. Without it, agents and developers generate massive unverified diffs that break environments, obscure root causes of bugs, and cannot be cleanly reverted or reviewed.

## Phase — required
addy:Build

## Inputs — required
- Task breakdown or plan item (e.g. from `planning-and-task-breakdown` or `spec-driven-development`) (`skills/incremental-implementation/SKILL.md:15`, `skills/incremental-implementation/SKILL.md:188`)
- Repository test suite commands (`npm test`, `./gradlew test`, `pytest`, etc.) (`skills/incremental-implementation/SKILL.md:39`, `skills/incremental-implementation/SKILL.md:204`)
- Repository build and type-checking commands (`npx tsc --noEmit`, `mypy`, etc.) (`skills/incremental-implementation/SKILL.md:144`, `skills/incremental-implementation/SKILL.md:205-206`)
- Repository linting commands (`skills/incremental-implementation/SKILL.md:207`)
- Project-wide Definition of Done reference (`skills/incremental-implementation/SKILL.md:249`)
- Explicit task instructions detailing what is in scope and out of scope (`skills/incremental-implementation/SKILL.md:187-197`)

## Outputs — required
- Working code increments delivered in thin vertical slices leaving the system in a compilable, testable state (`skills/incremental-implementation/SKILL.md:10`, `skills/incremental-implementation/SKILL.md:38`)
- Tests covering new functionality (`skills/incremental-implementation/SKILL.md:39`)
- Atomic, descriptive git commits per slice (`skills/incremental-implementation/SKILL.md:41`, `skills/incremental-implementation/SKILL.md:141`)
- Out-of-scope backlog notes ("NOTICED BUT NOT TOUCHING") to prevent scope creep (`skills/incremental-implementation/SKILL.md:129-133`)
- Feature flags for work-in-progress code (`skills/incremental-implementation/SKILL.md:151-160`)
- Rollback migrations for database changes (`skills/incremental-implementation/SKILL.md:180`)

## Invokes — required
- skill git-workflow-and-versioning — skills/incremental-implementation/SKILL.md:41
- skill test-driven-development — skills/incremental-implementation/SKILL.md:201
- reference ../../references/definition-of-done.md — skills/incremental-implementation/SKILL.md:249

## Invoked by — required
- command commands/build.toml — commands/build.toml:4
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:26, AGENTS.md:42
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:24, skills/using-agent-skills/SKILL.md:137, skills/using-agent-skills/SKILL.md:152, skills/using-agent-skills/SKILL.md:174
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:202
- skill skills/deprecation-and-migration/SKILL.md — skills/deprecation-and-migration/SKILL.md:183
- reference references/definition-of-done.md — references/definition-of-done.md:3
- doc docs/getting-started.md — docs/getting-started.md:62, docs/getting-started.md:113, docs/getting-started.md:114
- doc docs/adoption-guide.md — docs/adoption-guide.md:41
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:54, docs/antigravity-setup.md:91
- doc docs/cursor-setup.md — docs/cursor-setup.md:147, docs/cursor-setup.md:157
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:44, docs/gemini-cli-setup.md:55, docs/gemini-cli-setup.md:68
- doc docs/opencode-setup.md — docs/opencode-setup.md:64, docs/opencode-setup.md:69, docs/opencode-setup.md:116, docs/opencode-setup.md:159, docs/opencode-setup.md:170
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:13, docs/windsurf-setup.md:37
- doc README.md — README.md:249, README.md:358
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:127
- config evals/cases/incremental-implementation.json — evals/cases/incremental-implementation.json:2, evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
- `thin vertical slices` — skills/incremental-implementation/SKILL.md:10 — defined here
- `execution discipline` — skills/incremental-implementation/SKILL.md:10 — defined here
- `task breakdown` — skills/incremental-implementation/SKILL.md:15 — used here
- `The Increment Cycle` — skills/incremental-implementation/SKILL.md:21 — defined here
- `Implement` — skills/incremental-implementation/SKILL.md:38 — defined here
- `Test` — skills/incremental-implementation/SKILL.md:39 — defined here
- `Verify` — skills/incremental-implementation/SKILL.md:40 — defined here
- `Commit` — skills/incremental-implementation/SKILL.md:41 — used here
- `atomic commit` — skills/incremental-implementation/SKILL.md:41 — used here
- `Next slice` — skills/incremental-implementation/SKILL.md:42 — defined here
- `Slicing Strategies` — skills/incremental-implementation/SKILL.md:44 — defined here
- `Vertical Slices` — skills/incremental-implementation/SKILL.md:46 — defined here
- `Contract-First Slicing` — skills/incremental-implementation/SKILL.md:66 — defined here
- `API contract` — skills/incremental-implementation/SKILL.md:71 — used here
- `OpenAPI spec` — skills/incremental-implementation/SKILL.md:71 — used here
- `mock data` — skills/incremental-implementation/SKILL.md:73 — used here
- `Risk-First Slicing` — skills/incremental-implementation/SKILL.md:77 — defined here
- `Implementation Rules` — skills/incremental-implementation/SKILL.md:89 — defined here
- `Rule 0: Simplicity First` — skills/incremental-implementation/SKILL.md:91 — defined here
- `SIMPLICITY CHECK` — skills/incremental-implementation/SKILL.md:102 — defined here
- `Generic EventBus with middleware pipeline` — skills/incremental-implementation/SKILL.md:103 — used here
- `Abstract factory pattern` — skills/incremental-implementation/SKILL.md:106 — used here
- `Config-driven form builder` — skills/incremental-implementation/SKILL.md:109 — used here
- `premature abstraction` — skills/incremental-implementation/SKILL.md:113 — used here
- `Rule 0.5: Scope Discipline` — skills/incremental-implementation/SKILL.md:115 — defined here
- `NOTICED BUT NOT TOUCHING` — skills/incremental-implementation/SKILL.md:129 — defined here
- `Rule 1: One Thing at a Time` — skills/incremental-implementation/SKILL.md:135 — defined here
- `Rule 2: Keep It Compilable` — skills/incremental-implementation/SKILL.md:143 — defined here
- `Rule 3: Feature Flags for Incomplete Features` — skills/incremental-implementation/SKILL.md:147 — defined here
- `Rule 4: Safe Defaults` — skills/incremental-implementation/SKILL.md:162 — defined here
- `Rule 5: Rollback-Friendly` — skills/incremental-implementation/SKILL.md:174 — defined here
- `Additive changes` — skills/incremental-implementation/SKILL.md:178 — defined here
- `rollback migrations` — skills/incremental-implementation/SKILL.md:180 — used here
- `Working with Agents` — skills/incremental-implementation/SKILL.md:183 — defined here
- `Increment Checklist` — skills/incremental-implementation/SKILL.md:199 — defined here
- `Discover the Stack First` — skills/incremental-implementation/SKILL.md:201 — used here
- `Common Rationalizations` — skills/incremental-implementation/SKILL.md:213 — defined here
- `Red Flags` — skills/incremental-implementation/SKILL.md:224 — defined here
- `Verification` — skills/incremental-implementation/SKILL.md:237 — defined here
- `Definition of Done` — skills/incremental-implementation/SKILL.md:249 — used here

## Structure
- `# Incremental Implementation` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## The Increment Cycle` (line 21)
- `## Slicing Strategies` (line 44)
  - `### Vertical Slices (Preferred)` (line 46)
  - `### Contract-First Slicing` (line 66)
  - `### Risk-First Slicing` (line 77)
- `## Implementation Rules` (line 89)
  - `### Rule 0: Simplicity First` (line 91)
  - `### Rule 0.5: Scope Discipline` (line 115)
  - `### Rule 1: One Thing at a Time` (line 135)
  - `### Rule 2: Keep It Compilable` (line 143)
  - `### Rule 3: Feature Flags for Incomplete Features` (line 147)
  - `### Rule 4: Safe Defaults` (line 162)
  - `### Rule 5: Rollback-Friendly` (line 174)
- `## Working with Agents` (line 183)
- `## Increment Checklist` (line 199)
- `## Common Rationalizations` (line 213)
- `## Red Flags` (line 224)
- `## Verification` (line 237)
- `## See Also` (line 247)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **NOTICED BUT NOT TOUCHING Protocol:** Section 0.5 (lines 129-134) establishes an exemplary discipline for autonomous coding agents by prescribing an exact reporting syntax for out-of-scope code defects observed during implementation. This prevents runaway scope expansion while capturing technical debt.
- **Anti-Reassurance Rule:** The skill explicitly prohibits re-running verification commands when code has not changed ("Running the same build/test command twice in a row without any intervening code change", lines 211, 222, 235), directly tackling a frequent LLM looping failure mode.
- **Three Slicing Paradigms:** The formalization of Vertical Slices (end-to-end), Contract-First Slicing (parallel frontend/backend), and Risk-First Slicing (uncertainty reduction) provides a versatile model for dividing work units.

## Context cost
9,507 bytes (SKILL.md itself, ~2,377 tokens). Direct references add 34,342 bytes (`git-workflow-and-versioning`: 14,063 bytes, `test-driven-development`: 16,483 bytes, `definition-of-done.md`: 3,798 bytes), bringing total reachable context to 43,849 bytes (~10,962 tokens).
