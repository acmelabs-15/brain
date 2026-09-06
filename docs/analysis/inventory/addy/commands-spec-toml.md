---
package: addy
path: commands/spec.toml
type: command
bytes: 911
unit: inv-addy-4
aliases:
  - .gemini/commands/spec.toml
memo_inputs:
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — commands/spec.toml:1

## Design intent — required
Defines the `/spec` slash command entry point, prompting the agent to invoke the `spec-driven-development` skill. Guides the agent to ask clarifying questions covering objectives, acceptance criteria, tech stack, and boundaries, produce a capability map for complex multi-capability requests in Phase 0, and save a structured `SPEC.md` for user confirmation before coding begins.

## Phase — required
addy:Define

## Inputs — required
- Clarifying interview responses: "The objective and target users" — commands/spec.toml:7, "Core features and acceptance criteria" — commands/spec.toml:8, "Tech stack preferences and constraints" — commands/spec.toml:9, "Known boundaries (what to always do, ask first about, and never do)" — commands/spec.toml:10

## Outputs — required
- Specification document: "Save the spec as SPEC.md in the project root and confirm with the user before proceeding." — commands/spec.toml:16
- Capability map for multi-module requests: "capability map (module ids, dependency direction, build order) per the skill's Phase 0" — commands/spec.toml:14

## Invokes — required
- skill spec-driven-development — commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven development` — commands/spec.toml:1 — used here
- `acceptance criteria` — commands/spec.toml:8 — used here
- `capability map` — commands/spec.toml:14 — defined here
- `Phase 0` — commands/spec.toml:14 — used here
- `SPEC.md` — commands/spec.toml:16 — used here

## Structure
- description — commands/spec.toml:1
- prompt — commands/spec.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `.gemini/commands/spec.toml` (911 bytes, sha256: ef26c247995ff2cd). Satisfies the manifest row for both paths. Addresses Phase 1V verification finding by explicitly recording `Phase 0` (line 14).

## Context cost
911 bytes, approximately 230 tokens.
