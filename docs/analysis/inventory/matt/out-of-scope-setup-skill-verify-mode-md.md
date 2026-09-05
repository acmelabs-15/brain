---
package: matt
path: .out-of-scope/setup-skill-verify-mode.md
type: doc
bytes: 1125
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .out-of-scope/setup-skill-verify-mode.md

## Purpose — required, verbatim
> "This project will not add a dedicated verify/check mode (or a separate verify skill) for `setup-matt-pocock-skills`." — .out-of-scope/setup-skill-verify-mode.md:3

## Design intent — required
Documents the rationale against introducing a dedicated verify mode or separate verification skill for `setup-matt-pocock-skills`: verifying agent setup against `docs/agents/*.md` seed templates is handled conversationally within the single prompt-driven setup skill, preventing duplicate code paths and drift between separate setup and verification tooling.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill setup-matt-pocock-skills — .out-of-scope/setup-skill-verify-mode.md:3
- skill /setup-matt-pocock-skills — .out-of-scope/setup-skill-verify-mode.md:9

## Invoked by — required
none

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — .out-of-scope/setup-skill-verify-mode.md:1 — used here
- `docs/agents/*.md` — .out-of-scope/setup-skill-verify-mode.md:7 — used here
- `seed-template` — .out-of-scope/setup-skill-verify-mode.md:7 — used here
- `/setup-matt-pocock-skills` — .out-of-scope/setup-skill-verify-mode.md:9 — used here

## Structure
# Verify/Check Mode for `setup-matt-pocock-skills`
- ## Why this is out of scope — .out-of-scope/setup-skill-verify-mode.md:5
- ## Prior requests — .out-of-scope/setup-skill-verify-mode.md:13

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates prompt-modulated execution: instead of creating dedicated verify subcommands or CLI flags (`--verify`), the skill relies on conversational steering to restrict actions to read-only drift reporting.

## Context cost
1125 bytes (~281 tokens). Scope documentation.
