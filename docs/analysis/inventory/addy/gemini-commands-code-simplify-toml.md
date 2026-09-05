---
package: addy
path: .gemini/commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Design intent — required
Guides refactoring of recent code changes to reduce cognitive overhead and structural complexity while maintaining behavior through incremental edits and continuous test verification.

## Phase — required
addy:review

## Inputs — required
Scope of target code (defaulting to recent changes) (.gemini/commands/code-simplify.toml:9), project conventions in `GEMINI.md` (.gemini/commands/code-simplify.toml:8), existing tests and test suite execution (.gemini/commands/code-simplify.toml:10, 18).

## Outputs — required
Refactored source code (.gemini/commands/code-simplify.toml:18), clean test and build verification results (.gemini/commands/code-simplify.toml:19).

## Invokes — required
- skill code-simplification — .gemini/commands/code-simplify.toml:4
- skill code-review-and-quality — .gemini/commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `GEMINI.md` — .gemini/commands/code-simplify.toml:8 — used here
- `guard clauses` — .gemini/commands/code-simplify.toml:12 — used here
- `Dead code` — .gemini/commands/code-simplify.toml:17 — used here
- `code-review-and-quality` — .gemini/commands/code-simplify.toml:21 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · sources/addy/GEMINI.md — .gemini/commands/code-simplify.toml:8: References `GEMINI.md` for project conventions, but no such file exists in `sources/addy/` (variant `commands/code-simplify.toml:8` references `AGENTS.md` instead).

## Observations
Forms variant pair V2 (95% shared lines) with `commands/code-simplify.toml` in `docs/analysis/manifest/addy-duplicates.md`. Differs at line 8 where this copy references `GEMINI.md` while the root command references `AGENTS.md`.

## Context cost
1066 bytes, ~265 tokens.
