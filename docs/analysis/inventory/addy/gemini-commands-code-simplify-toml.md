---
package: addy
path: .gemini/commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Design intent — required
Gemini/Antigravity slash command executing behavior-preserving code simplification on recent changes, reading `GEMINI.md` for project conventions, systematically applying structural simplification patterns (guard clauses, function splitting, flattened ternaries, clearer naming, deduplication, dead code pruning), and enforcing incremental test runs with automated rollback on failure.

## Phase — required
addy:BUILD

## Inputs — required
- Target code scope (recent changes default)
- `GEMINI.md` conventions
- Existing test suite

## Outputs — required
- Simplified source code files
- Clean git diff and passing test/build verification

## Invokes — required
- skill code-simplification — .gemini/commands/code-simplify.toml:4
- skill code-review-and-quality — .gemini/commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .gemini/commands/code-simplify.toml:4 — used here
- `GEMINI.md` — .gemini/commands/code-simplify.toml:8 — used here
- `guard clauses` — .gemini/commands/code-simplify.toml:12 — used here
- `Dead code` — .gemini/commands/code-simplify.toml:17 — used here
- `simplification` — .gemini/commands/code-simplify.toml:11,18,21 — used here
- `code-review-and-quality` — .gemini/commands/code-simplify.toml:21 — used here

## Structure
- Steps 1–6 numbered list
- Rollback and review instruction

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
VARIANT pair V2 with `commands/code-simplify.toml` (divergence documented in `_divergence/divergence-commands-code-simplify-toml--gemini-commands-code-simplify-toml.md`).

## Context cost
1066 bytes, ~265 tokens. Transitive cost: loads `code-simplification` (13545 bytes) and optionally `code-review-and-quality` (20555 bytes).
