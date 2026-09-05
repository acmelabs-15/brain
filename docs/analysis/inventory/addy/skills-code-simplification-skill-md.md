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
verified: 2026-09-05 quote-check+coverage
---

# skills/code-simplification/SKILL.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity." — skills/code-simplification/SKILL.md:3

## Design intent — required
Provides a disciplined, behavior-preserving refactoring skill adapted from the Claude Code Simplifier plugin. Establishes five core principles (Preserve Behavior Exactly, Follow Project Conventions, Prefer Clarity Over Cleverness, Maintain Balance, Scope to What Changed) and a four-step workflow grounded in Chesterton's Fence ("understand before touching"). Catalogues structural, naming, and redundancy signals with concrete remedies across TypeScript, Python, and React, enforces incremental verification, and introduces the Rule of 500 (automating refactorings touching over 500 lines).

## Phase — required
addy:Review

## Inputs — required
Existing codebase source files, accompanying test suites, project conventions in `CLAUDE.md` and neighboring patterns (`skills/code-simplification/SKILL.md:49-57`), git blame and history context for Chesterton's Fence analysis (`skills/code-simplification/SKILL.md:118`), and scope constraints defaulting to recently modified code (`skills/code-simplification/SKILL.md:101-103`).

## Outputs — required
Simplified, behavior-preserving code refactorings, verified passing test runs after each incremental change (`skills/code-simplification/SKILL.md:162-167`), clean git diffs separated from feature additions (`skills/code-simplification/SKILL.md:159, 181`), and dead code removal (`skills/code-simplification/SKILL.md:152, 330`).

## Invokes — required
- doc CLAUDE.md — skills/code-simplification/SKILL.md:49

## Invoked by — required
- command code-simplify — commands/code-simplify.toml:4
- doc CLAUDE.md — CLAUDE.md:25
- doc README.md — README.md:269
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:34
- reference references/definition-of-done.md — references/definition-of-done.md:35
- doc docs/adoption-guide.md — docs/adoption-guide.md:91
- doc docs/getting-started.md — docs/getting-started.md:117
- doc docs/opencode-setup.md — docs/opencode-setup.md:120

## Concepts named — required, verbatim
- `Claude Code Simplifier plugin` — skills/code-simplification/SKILL.md:8 — used here
- `Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32 — defined here
- `Follow Project Conventions` — skills/code-simplification/SKILL.md:44 — defined here
- `Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61 — defined here
- `Maintain Balance` — skills/code-simplification/SKILL.md:92 — defined here
- `Scope to What Changed` — skills/code-simplification/SKILL.md:101 — defined here
- `Chesterton's Fence` — skills/code-simplification/SKILL.md:107 — defined here
- `Identify Simplification Opportunities` — skills/code-simplification/SKILL.md:123 — defined here
- `Rule of 500` — skills/code-simplification/SKILL.md:171 — defined here
- `Verify the Result` — skills/code-simplification/SKILL.md:173 — defined here
- `Common Rationalizations` — skills/code-simplification/SKILL.md:297 — defined here
- `Red Flags` — skills/code-simplification/SKILL.md:309 — defined here
- `Verification` — skills/code-simplification/SKILL.md:319 — defined here

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
- Common Rationalizations — skills/code-simplification/SKILL.md:297
- Red Flags — skills/code-simplification/SKILL.md:309
- Verification — skills/code-simplification/SKILL.md:319

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Direct adaptation: Explicitly adapted from Anthropic's Claude Code Simplifier plugin (`skills/code-simplification/SKILL.md:8`) into a model-agnostic workflow.
- Core comprehension test: "Would a new team member understand this faster than the original?" — skills/code-simplification/SKILL.md:12.
- Strict separation of concerns: "Submit refactoring changes separately from feature or bug fix changes." — skills/code-simplification/SKILL.md:159.
- Automation threshold: The Rule of 500 mandates investments in tooling (codemods, AST transforms) rather than manual edits when touching more than 500 lines (`skills/code-simplification/SKILL.md:171`).

## Context cost
13545 bytes, ~3100 tokens. Standalone skill file; references project conventions in CLAUDE.md.
