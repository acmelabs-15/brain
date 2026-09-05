---
package: addy
path: commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/code-simplify.toml, sha256: 640cdd34c26a04cabe6d3ea64ba5aad91bb68b16c8f7619a9e5fae6fe0a37ec8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — commands/code-simplify.toml:1

## Design intent — required
Slash command for automated code simplification and complexity reduction. Directs the agent to review project conventions in AGENTS.md, target recent changes, understand surrounding context, scan for six specific simplification patterns (nesting, long functions, nested ternaries, generic names, duplication, dead code), apply changes incrementally while verifying tests, and revert immediately upon test failure.

## Phase — required
addy:Review

## Inputs — required
Recently changed code or user-specified target scope (commands/code-simplify.toml:9), conventions in `AGENTS.md` (commands/code-simplify.toml:8), and existing test suite.

## Outputs — required
Simplified code with identical runtime behavior, verified by passing test suite and clean git diff (commands/code-simplify.toml:19).

## Invokes — required
- skill code-simplification — commands/code-simplify.toml:4
- doc AGENTS.md — commands/code-simplify.toml:8
- skill code-review-and-quality — commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — commands/code-simplify.toml:4 — used here
- `simplification opportunities` — commands/code-simplify.toml:11 — defined here
- `code-review-and-quality` — commands/code-simplify.toml:21 — used here

## Structure
- description
- prompt

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of VARIANT pair V2 in `docs/analysis/manifest/addy-duplicates.md` (`.gemini/commands/code-simplify.toml` ↔ `commands/code-simplify.toml`, 95% shared). The sole substantive difference is line 8: `commands/code-simplify.toml` points to `AGENTS.md`, whereas `.gemini/commands/code-simplify.toml` points to `GEMINI.md`.

## Context cost
1066 bytes, ~250 tokens.
