---
package: addy
path: commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: commands/code-simplify.toml, sha256: 640cdd34c26a04cabe6d3ea64ba5aad91bb68b16c8f7619a9e5fae6fe0a37ec8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — commands/code-simplify.toml:1

## Design intent — required
Slash command configuration for `/code-simplify` driving safe code simplification across recently modified code or a specified scope. Checks project conventions in `AGENTS.md`, analyzes callers and edge cases, scans for complexity anti-patterns, applies simplifications incrementally with test verification after each change, and passes results to `code-review-and-quality`.

## Phase — required
addy:Review

## Inputs — required
Target code scope (defaults to recent changes), test suites, project conventions in `AGENTS.md`.

## Outputs — required
Simplified code implementations preserving exact behavior, clean git diff, test run verifications.

## Invokes — required
- skill code-simplification — commands/code-simplify.toml:4
- doc AGENTS.md — commands/code-simplify.toml:8
- skill code-review-and-quality — commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `preserving exact behavior` — commands/code-simplify.toml:6 — used here
- `simplification opportunities` — commands/code-simplify.toml:11 — defined here

## Structure
- description
- prompt (steps 1 through 6, fallback and review)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of duplication ledger VARIANT V2 (95% shared lines with `.gemini/commands/code-simplify.toml`), with divergence card at `docs/analysis/inventory/addy/_divergence/gemini-commands-code-simplify-toml--commands-code-simplify-toml.md`. The sole difference is referencing `AGENTS.md` instead of `GEMINI.md` on step 1.

## Context cost
1066 bytes (~266 tokens).
