---
package: addy
path: .gemini/commands/spec.toml
type: command
bytes: 911
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .gemini/commands/spec.toml:1

## Design intent — required
Defines `/spec` command for Gemini CLI to initiate structured specification authoring. It prompts for requirements clarification, decomposes multi-capability projects into capability maps with explicit dependency ordering, and produces an approved `SPEC.md` before coding starts.

## Phase — required
addy:Spec

## Inputs — required
User requirements, responses to clarifying questions covering objective, features, acceptance criteria, stack preferences, and operational boundaries (.gemini/commands/spec.toml:6-10).

## Outputs — required
Structured specification file `SPEC.md` in the project root (.gemini/commands/spec.toml:16); capability map for modular feature bundles (.gemini/commands/spec.toml:14).

## Invokes — required
- skill spec-driven-development — .gemini/commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven-development` — .gemini/commands/spec.toml:4 — used here
- `acceptance criteria` — .gemini/commands/spec.toml:8 — used here
- `boundaries` — .gemini/commands/spec.toml:10 — used here
- `capability map` — .gemini/commands/spec.toml:14 — used here
- `module ids` — .gemini/commands/spec.toml:14 — used here
- `dependency direction` — .gemini/commands/spec.toml:14 — used here
- `build order` — .gemini/commands/spec.toml:14 — used here
- `dependency order` — .gemini/commands/spec.toml:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/spec.toml` (EXACT group 2 in `addy-duplicates.md`, SHA `ef26c247995ff2cd`).

## Context cost
911 bytes, ~230 tokens.
