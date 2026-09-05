---
package: addy
path: skills/code-simplification/SKILL.md
type: skill
bytes: 13545
unit: inv-addy-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/code-simplification/SKILL.md

## Purpose — required, verbatim
> "Simplify code by reducing complexity while preserving exact behavior. The goal is not fewer lines — it's code that is easier to read, understand, modify, and debug. Every simplification must pass a simple test: "Would a new team member understand this faster than the original?"" — skills/code-simplification/SKILL.md:12

## Design intent — required
Guides agents and developers through a disciplined, behavior-preserving refactoring process to reduce structural and cognitive complexity in working code without changing external semantics. Built upon five explicit principles (preserve behavior exactly, follow project conventions, prefer clarity over cleverness, maintain balance, scope to what changed), it introduces Chesterton's Fence ("understand before touching"), concrete structural/naming/redundancy pattern recognition, incremental change application with immediate rollback upon test failure, the "Rule of 500" for automated transforms, and multi-language refactoring exemplars. Without this skill, attempts to "simplify" frequently introduce behavioral regressions, break codebase stylistic conventions, remove necessary abstractions, produce dense and unreadable "clever" one-liners, or perform uncontrolled drive-by refactorings across unrelated files.

## Phase — required
addy:Review

## Inputs — required
- Working code and recent changes: "After a feature is working and tests pass" — skills/code-simplification/SKILL.md:16, "recently modified code" — skills/code-simplification/SKILL.md:103
- Project conventions and style guides: "CLAUDE.md / project conventions" — skills/code-simplification/SKILL.md:49
- Test suite: "test suite" — skills/code-simplification/SKILL.md:164
- Git history and context: "git blame" — skills/code-simplification/SKILL.md:118, 306

## Outputs — required
- Simplified source code with preserved behavior: "All inputs, outputs, side effects, error behavior, and edge cases must remain identical." — skills/code-simplification/SKILL.md:34
- Isolated refactoring pull requests: "Submit refactoring changes separately from feature or bug fix changes." — skills/code-simplification/SKILL.md:159
- Clean reviewable git diffs: "Is the diff clean and reviewable?" — skills/code-simplification/SKILL.md:181

## Invokes — required
- doc CLAUDE.md — skills/code-simplification/SKILL.md:49

## Invoked by — required
- command commands/code-simplify.toml — commands/code-simplify.toml:4
- command .claude/commands/code-simplify.md — .claude/commands/code-simplify.md:5
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:34
- reference references/definition-of-done.md — references/definition-of-done.md:35
- doc README.md — README.md:269
- doc CLAUDE.md — CLAUDE.md:25
- doc docs/adoption-guide.md — docs/adoption-guide.md:91

## Concepts named — required, verbatim
- `Claude Code Simplifier plugin` — skills/code-simplification/SKILL.md:8 — used here
- `Five Principles` — skills/code-simplification/SKILL.md:30 — defined here
- `Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32 — defined here
- `Follow Project Conventions` — skills/code-simplification/SKILL.md:44 — defined here
- `CLAUDE.md` — skills/code-simplification/SKILL.md:49, 328 — used here
- `Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61 — defined here
- `Maintain Balance` — skills/code-simplification/SKILL.md:92 — defined here
- `Scope to What Changed` — skills/code-simplification/SKILL.md:101 — defined here
- `Simplification Process` — skills/code-simplification/SKILL.md:105 — defined here
- `Chesterton's Fence` — skills/code-simplification/SKILL.md:107, 109, 306 — defined here
- `Rule of 500` — skills/code-simplification/SKILL.md:171 — defined here

## Structure
- Overview — skills/code-simplification/SKILL.md:10
- When to Use — skills/code-simplification/SKILL.md:14
- The Five Principles — skills/code-simplification/SKILL.md:30
- 1. Preserve Behavior Exactly — skills/code-simplification/SKILL.md:32
- 2. Follow Project Conventions — skills/code-simplification/SKILL.md:44
- 3. Prefer Clarity Over Cleverness — skills/code-simplification/SKILL.md:61
- 4. Maintain Balance — skills/code-simplification/SKILL.md:92
- 5. Scope to What Changed — skills/code-simplification/SKILL.md:101
- The Simplification Process — skills/code-simplification/SKILL.md:105
- Step 1: Understand Before Touching (Chesterton's Fence) — skills/code-simplification/SKILL.md:107
- Step 2: Identify Simplification Opportunities — skills/code-simplification/SKILL.md:123
- Step 3: Apply Changes Incrementally — skills/code-simplification/SKILL.md:157
- Step 4: Verify the Result — skills/code-simplification/SKILL.md:173
- Language-Specific Guidance — skills/code-simplification/SKILL.md:187
- TypeScript / JavaScript — skills/code-simplification/SKILL.md:189
- Python — skills/code-simplification/SKILL.md:238
- React / JSX — skills/code-simplification/SKILL.md:273
- Common Rationalizations — skills/code-simplification/SKILL.md:298
- Red Flags — skills/code-simplification/SKILL.md:309
- Verification — skills/code-simplification/SKILL.md:319

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly credits inspiration from Anthropic's Claude Code Simplifier plugin, generalizing it as an agent-agnostic engineering skill.
- Formulates Chesterton's Fence as an active engineering practice before refactoring: investigating responsibility, callers, edge cases, and git blame history before modifying unfamiliar code.
- Establishes the "Rule of 500": refactorings touching >500 lines must use automated codemods/AST transforms rather than error-prone manual edits.
- Enforces strict isolation: refactoring changes must be separated from functional/feature changes.
- Contains concrete before/after code examples across TypeScript/JavaScript, Python, and React/JSX demonstrating readable replacements for dense ternaries, chained reduces, manual dict/array loops, and nested conditionals.

## Context cost
13545 bytes (~3386 tokens). Loads no external files.
