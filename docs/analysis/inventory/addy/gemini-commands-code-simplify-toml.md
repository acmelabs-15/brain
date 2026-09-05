---
package: addy
path: .gemini/commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Design intent — required
Defines `/code-simplify` command for Gemini CLI to refactor recently changed code or a specified scope. Focuses on lowering structural complexity (deep nesting, long functions, nested ternaries, dead code) while strictly maintaining behavior through incremental test verification and rollback on failure.

## Phase — required
addy:Build

## Inputs — required
Recently changed code or user-specified target scope (.gemini/commands/code-simplify.toml:6,9); project conventions in `GEMINI.md` (.gemini/commands/code-simplify.toml:8); callers, edge cases, and test suites (.gemini/commands/code-simplify.toml:10).

## Outputs — required
Simplified code changes preserving exact behavior (.gemini/commands/code-simplify.toml:6), verified test and build passes with clean diff (.gemini/commands/code-simplify.toml:19).

## Invokes — required
- skill code-simplification — .gemini/commands/code-simplify.toml:4
- skill code-review-and-quality — .gemini/commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .gemini/commands/code-simplify.toml:4 — used here
- `guard clauses` — .gemini/commands/code-simplify.toml:12 — used here
- `dead code` — .gemini/commands/code-simplify.toml:17 — used here
- `code-review-and-quality` — .gemini/commands/code-simplify.toml:21 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V2 with `commands/code-simplify.toml`. The sole difference is referencing `GEMINI.md` on line 8 instead of `AGENTS.md`.

## Context cost
1066 bytes, ~270 tokens.
