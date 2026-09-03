---
package: addy
path: skills/code-simplification/SKILL.md
type: skill
bytes: 13545
unit: inv-addy-18
---

# skills/code-simplification/SKILL.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity." — skills/code-simplification/SKILL.md:3

> "Simplify code by reducing complexity while preserving exact behavior. The goal is not fewer lines — it's code that is easier to read, understand, modify, and debug. Every simplification must pass a simple test: \"Would a new team member understand this faster than the original?\"" — skills/code-simplification/SKILL.md:12

## Design intent — required
Prevents the accumulation of incidental complexity and cognitive debt in functional code by providing a disciplined, behavior-preserving refactoring procedure. It eliminates the frequent failure modes of autonomous agent refactoring—such as rewriting code from scratch, introducing regression bugs in edge cases, altering tests to fit modified code, or producing massive unstructured diffs—by establishing Chesterton's Fence as a gate to comprehension, requiring that all existing tests pass unmodified, mandating incremental atomic changes with immediate test verification, enforcing project-local conventions over external stylistic dogma, and restricting simplification strictly to recently modified code.

## Phase — required
addy:Review

## Inputs — required
- Target source code: recently modified changes or user-designated files/modules — skills/code-simplification/SKILL.md:16-21, 101-103
- Existing test suite (serves as behavior preservation oracle) — skills/code-simplification/SKILL.md:41, 116, 164-167, 323
- Project conventions from `CLAUDE.md` / codebase patterns — skills/code-simplification/SKILL.md:49-57, 328
- Git history / `git blame` (for understanding original context and constraints) — skills/code-simplification/SKILL.md:118, 306

## Outputs — required
- Refactored source code with reduced structural complexity and preserved behavior — skills/code-simplification/SKILL.md:12, 34, 157-169
- Clean, focused git diffs separate from feature or bugfix changes — skills/code-simplification/SKILL.md:159, 181, 327
- Passing verification suite without test modifications — skills/code-simplification/SKILL.md:41, 164-167, 323-332

## Invokes — required
- doc CLAUDE.md — skills/code-simplification/SKILL.md:49, 328
- reference upstream Claude Code Simplifier plugin (https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md) — skills/code-simplification/SKILL.md:8

## Invoked by — required
- command commands/code-simplify.toml — commands/code-simplify.toml:4
- command .claude/commands/code-simplify.md — .claude/commands/code-simplify.md:5
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:34, 137, 157, 184
- reference references/definition-of-done.md — references/definition-of-done.md:35
- doc CLAUDE.md — CLAUDE.md:25
- doc README.md — README.md:35, 269, 368
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:57
- doc docs/cursor-setup.md — docs/cursor-setup.md:160
- doc docs/getting-started.md — docs/getting-started.md:117
- doc docs/adoption-guide.md — docs/adoption-guide.md:91
- doc docs/opencode-setup.md — docs/opencode-setup.md:120
- hook hooks/SIMPLIFY-IGNORE.md — hooks/SIMPLIFY-IGNORE.md:3, 45
- eval evals/cases/code-simplification.json — evals/cases/code-simplification.json:2, 34

## Concepts named — required, verbatim
- `code-simplification` — skills/code-simplification/SKILL.md:2 — defined here
- `Claude Code Simplifier plugin` — skills/code-simplification/SKILL.md:8 — used here
- `Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32 — defined here
- `Follow Project Conventions` — skills/code-simplification/SKILL.md:44 — defined here
- `CLAUDE.md` — skills/code-simplification/SKILL.md:49 — used here
- `Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61 — defined here
- `Maintain Balance` — skills/code-simplification/SKILL.md:92 — defined here
- `over-simplification` — skills/code-simplification/SKILL.md:94 — defined here
- `Scope to What Changed` — skills/code-simplification/SKILL.md:101 — defined here
- `The Simplification Process` — skills/code-simplification/SKILL.md:105 — defined here
- `Chesterton's Fence` — skills/code-simplification/SKILL.md:107 — defined here
- `git blame` — skills/code-simplification/SKILL.md:118 — used here
- `Structural complexity` — skills/code-simplification/SKILL.md:127 — defined here
- `Deep nesting` — skills/code-simplification/SKILL.md:131 — used here
- `guard clauses` — skills/code-simplification/SKILL.md:131 — used here
- `Long functions` — skills/code-simplification/SKILL.md:132 — used here
- `Nested ternaries` — skills/code-simplification/SKILL.md:133 — used here
- `Boolean parameter flags` — skills/code-simplification/SKILL.md:134 — used here
- `Repeated conditionals` — skills/code-simplification/SKILL.md:135 — used here
- `predicate function` — skills/code-simplification/SKILL.md:135 — used here
- `Naming and readability` — skills/code-simplification/SKILL.md:137 — defined here
- `Generic names` — skills/code-simplification/SKILL.md:141 — used here
- `Abbreviated names` — skills/code-simplification/SKILL.md:142 — used here
- `Misleading names` — skills/code-simplification/SKILL.md:143 — used here
- `Redundancy` — skills/code-simplification/SKILL.md:147 — defined here
- `Duplicated logic` — skills/code-simplification/SKILL.md:151 — used here
- `Dead code` — skills/code-simplification/SKILL.md:152 — used here
- `Unnecessary abstractions` — skills/code-simplification/SKILL.md:153 — used here
- `Over-engineered patterns` — skills/code-simplification/SKILL.md:154 — used here
- `Redundant type assertions` — skills/code-simplification/SKILL.md:155 — used here
- `Apply Changes Incrementally` — skills/code-simplification/SKILL.md:157 — defined here
- `The Rule of 500` — skills/code-simplification/SKILL.md:171 — defined here
- `codemods` — skills/code-simplification/SKILL.md:171 — used here
- `AST transforms` — skills/code-simplification/SKILL.md:171 — used here
- `early return` — skills/code-simplification/SKILL.md:249 — used here
- `Prop drilling` — skills/code-simplification/SKILL.md:292 — used here
- `Common Rationalizations` — skills/code-simplification/SKILL.md:297 — defined here
- `Red Flags` — skills/code-simplification/SKILL.md:309 — defined here
- `Verification` — skills/code-simplification/SKILL.md:319 — defined here

## Structure
- `# Code Simplification` — skills/code-simplification/SKILL.md:6
- `## Overview` — skills/code-simplification/SKILL.md:10
- `## When to Use` — skills/code-simplification/SKILL.md:14
- `## The Five Principles` — skills/code-simplification/SKILL.md:30
  - `### 1. Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32
  - `### 2. Follow Project Conventions` — skills/code-simplification/SKILL.md:44
  - `### 3. Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61
  - `### 4. Maintain Balance` — skills/code-simplification/SKILL.md:92
  - `### 5. Scope to What Changed` — skills/code-simplification/SKILL.md:101
- `## The Simplification Process` — skills/code-simplification/SKILL.md:105
  - `### Step 1: Understand Before Touching (Chesterton's Fence)` — skills/code-simplification/SKILL.md:107
  - `### Step 2: Identify Simplification Opportunities` — skills/code-simplification/SKILL.md:123
  - `### Step 3: Apply Changes Incrementally` — skills/code-simplification/SKILL.md:157
  - `### Step 4: Verify the Result` — skills/code-simplification/SKILL.md:173
- `## Language-Specific Guidance` — skills/code-simplification/SKILL.md:187
  - `### TypeScript / JavaScript` — skills/code-simplification/SKILL.md:189
  - `### Python` — skills/code-simplification/SKILL.md:238
  - `### React / JSX` — skills/code-simplification/SKILL.md:273
- `## Common Rationalizations` — skills/code-simplification/SKILL.md:297
- `## Red Flags` — skills/code-simplification/SKILL.md:309
- `## Verification` — skills/code-simplification/SKILL.md:319

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · sources/addy-external/code-simplification.md:5 vs skills/code-simplification/SKILL.md · External documentation page side-card for Review phase lists command `/review` instead of `/code-simplify`, conflicting with the page header badge and repository command definitions.
- doc-drift · skills/using-agent-skills/SKILL.md:137 vs commands/code-simplify.toml:21 and .claude/commands/code-simplify.md:22 · Lifecycle sequencing in `using-agent-skills` lists `code-review-and-quality` prior to `code-simplification`, whereas `/code-simplify` command specifications mandate executing `code-review-and-quality` after simplification.
- cross-file-contradiction · commands/code-simplify.toml:18 vs CLAUDE.md:25, README.md:368, skills/using-agent-skills/SKILL.md:184 · Prior inventory entries for `/code-simplify` commands recorded phase as `addy:Build`, whereas `CLAUDE.md:25`, `README.md:368`, `skills/using-agent-skills/SKILL.md:184`, and `sources/addy-external/code-simplification.md:5` classify `code-simplification` under `addy:Review`.
- script-bug · hooks/simplify-ignore-test.sh:34 · The companion test runner uses relative path `hooks/simplify-ignore.sh` without path normalization or directory anchoring, causing direct invocation from repository root (`bash sources/addy/hooks/simplify-ignore-test.sh`) to fail with exit code 127 unless run with `Cwd: sources/addy`.

## Observations
- Refactoring safety mechanism: Enforces strict behavioral invariance by treating any modification of tests as a red flag (`skills/code-simplification/SKILL.md:311`) and mandating immediate revert if tests fail (`skills/code-simplification/SKILL.md:166`).
- Separation of concerns in PRs: Explicitly instructs that refactoring changes must be submitted separately from features or bug fixes ("A PR that refactors and adds a feature is two PRs — split them", `skills/code-simplification/SKILL.md:159`).
- Threshold for automation: Establishes "The Rule of 500" (`skills/code-simplification/SKILL.md:171`) setting an upper bound of 500 lines for manual refactoring before mandating automated tooling (AST transforms, codemods).
- Companion hook protection: Supported by `hooks/simplify-ignore.sh` which allows developers to protect performance-critical blocks via comments (`/* simplify-ignore-start */`) during automated simplification passes.

## Context cost
13,545 bytes (~3,386 tokens). Loads no external files or reference documents directly when invoked. Transitive invocation via `/code-simplify` with a subsequent `code-review-and-quality` pass loads ~35,166 bytes (~8,792 tokens).
