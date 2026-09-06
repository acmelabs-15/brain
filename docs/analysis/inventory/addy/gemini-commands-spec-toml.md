---
package: addy
path: .gemini/commands/spec.toml
type: command
bytes: 911
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .gemini/commands/spec.toml:1

## Design intent — required
Initiates the spec-driven development lifecycle phase in Gemini CLI by invoking the `spec-driven-development` skill. Prompts the agent to interview the user on objectives, core features, acceptance criteria, tech stack, and boundaries. For modular or bundled capabilities, it triggers Phase 0 capability mapping before detailed specification. Generates a structured 6-section `SPEC.md` specification file and secures user confirmation before implementation begins.

## Phase — required
addy:Spec

## Inputs — required
- User requirements and clarifying question answers covering objective, core features, acceptance criteria, tech stack, and boundaries — .gemini/commands/spec.toml:7, 8, 9, 10
- Approval for capability map if multi-module — .gemini/commands/spec.toml:14

## Outputs — required
- Capability map for bundled capabilities — .gemini/commands/spec.toml:14
- Structured specification saved as `SPEC.md` in project root — .gemini/commands/spec.toml:16

## Invokes — required
- skill spec-driven-development — .gemini/commands/spec.toml:4

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — .gemini/commands/spec.toml:4 — used here
- `acceptance criteria` — .gemini/commands/spec.toml:8 — used here
- `boundaries` — .gemini/commands/spec.toml:10, 12 — defined here
- `Phase 0` — .gemini/commands/spec.toml:14 — used here
- `capability map` — .gemini/commands/spec.toml:14 — defined here
- `SPEC.md` — .gemini/commands/spec.toml:16 — defined here

## Structure
- "Begin by understanding what the user wants to build" — .gemini/commands/spec.toml:6
- "propose a capability map" — .gemini/commands/spec.toml:14

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `commands/spec.toml` (hash `ef26c247995ff2cd`, 911 bytes). Explicitly introduces `Phase 0` capability mapping for complex or multi-component features to sequence module specification by dependency order.

## Context cost
911 bytes (~230 tokens). If invoked skill is loaded: `spec-driven-development` (17,472 bytes).
