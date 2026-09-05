---
package: addy
path: commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: commands/code-simplify.toml, sha256: 640cdd34c26a04cabe6d3ea64ba5aad91bb68b16c8f7619a9e5fae6fe0a37ec8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — commands/code-simplify.toml:1

## Design intent — required
Slash command prompt configuring /code-simplify, invoking the code-simplification skill to refactor recently changed or scoped code for improved clarity and lower complexity while strictly preserving functional behavior. Guides the agent to read repository conventions in AGENTS.md, inspect six common code smells (nesting, long functions, nested ternaries, generic names, duplication, dead code), verify tests after each incremental change, and trigger code-review-and-quality on completion.

## Phase — required
addy:Review

## Inputs — required
Recently changed files or user-specified target scope, existing test suites, and AGENTS.md conventions.

## Outputs — required
Refactored, simplified source code with verified test passes and a clean git diff.

## Invokes — required
- skill code-simplification — commands/code-simplify.toml:4
- doc AGENTS.md — commands/code-simplify.toml:8
- skill code-review-and-quality — commands/code-simplify.toml:21

## Invoked by — required
- command code-simplify — CLAUDE.md:13

## Concepts named — required, verbatim
- `code-simplification` — commands/code-simplify.toml:4 — used here
- `code-review-and-quality` — commands/code-simplify.toml:21 — used here

## Structure
- Command description — commands/code-simplify.toml:1
- Skill invocation prompt — commands/code-simplify.toml:3-5
- 6-step simplification procedure — commands/code-simplify.toml:8-19
- Test failure rule and follow-up review — commands/code-simplify.toml:21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant pairing: Forms VARIANT pair V2 (95% shared lines) with `.gemini/commands/code-simplify.toml`. The sole divergence is step 1: this Claude Code version specifies "Read AGENTS.md and study project conventions" — commands/code-simplify.toml:8, whereas the Gemini CLI variant specifies `Read GEMINI.md`.
- Safety rule: "If tests fail after a simplification, revert that change and reconsider." — commands/code-simplify.toml:21.

## Context cost
1066 bytes, ~250 tokens. Lightweight slash command configuration invoking two review skills.
