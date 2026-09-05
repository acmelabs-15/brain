---
package: addy
path: external/api-and-interface-design.md
type: doc
bytes: 26413
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/api-and-interface-design.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:5

## Design intent — required
Provides the published web documentation page for the `api-and-interface-design` skill on `skills.addy.ie`. It presents a human-facing summary, installation instructions via the `skills` CLI, the standardized six-part skill anatomy, and links to the full `SKILL.md` source and related Build-phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`).

## Phase — required
addy:Build

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill api-and-interface-design — external/api-and-interface-design.md:5
- skill incremental-implementation — external/api-and-interface-design.md:12
- skill test-driven-development — external/api-and-interface-design.md:12
- skill context-engineering — external/api-and-interface-design.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `api-and-interface-design` — external/api-and-interface-design.md:5 — defined here
- `Contract-first design` — external/api-and-interface-design.md:5 — defined here
- `Hyrum’s Law` — external/api-and-interface-design.md:5 — defined here
- `One-Version Rule` — external/api-and-interface-design.md:5 — defined here
- `error semantics` — external/api-and-interface-design.md:5 — defined here
- `boundary validation` — external/api-and-interface-design.md:5 — defined here
- `Overview` — external/api-and-interface-design.md:10 — used here
- `When to Use` — external/api-and-interface-design.md:10 — used here
- `Process` — external/api-and-interface-design.md:10 — used here
- `Rationalizations` — external/api-and-interface-design.md:10 — used here
- `Red Flags` — external/api-and-interface-design.md:10 — used here
- `Verification` — external/api-and-interface-design.md:10 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/api-and-interface-design.md:5: External page summary ("Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules.") differs from repo description in `skills/api-and-interface-design/SKILL.md:3`.
- doc-drift · external/api-and-interface-design.md:10: External anatomy lists `03 Process`, but `skills/api-and-interface-design/SKILL.md:20-80` defines `Core Principles`, `REST API Patterns`, and `TypeScript Interface Patterns` without a `Process` section.
- doc-drift · external/api-and-interface-design.md:5: External doc associates `api-and-interface-design` with `Command /build`, but `commands/build.toml:4` only invokes `incremental-implementation` and `test-driven-development`.

## Observations
Web page snapshot from `https://skills.addy.ie/skills/api-and-interface-design/` rendered via Astro. Displays package install commands (`npx skills add addyosmani/agent-skills --skill api-and-interface-design` on line 8) and links back to the GitHub repository source at `skills/api-and-interface-design/SKILL.md` (line 10).

## Context cost
26413 bytes, ~6603 tokens.
