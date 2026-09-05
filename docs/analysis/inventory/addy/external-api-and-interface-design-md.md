---
package: addy
path: external/api-and-interface-design.md
type: external-doc
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
verified: 2026-09-05 quote-check+coverage
---

# external/api-and-interface-design.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Design intent — required
Web documentation and marketing page published at `skills.addy.ie/skills/api-and-interface-design/` providing the external, human-facing overview of the `api-and-interface-design` skill. It categorizes the skill into the Build phase under the `/build` command, describes the skill's purpose and invocation conditions ("Designing APIs, module boundaries, or public interfaces"), documents CLI installation via `npx skills add`, outlines the six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), links to the canonical GitHub `SKILL.md`, and references related Build phase skills. Without this external page, users and adopters would lack a browsable, indexable web presentation and package discovery portal for the skill outside the raw git repository.

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
- doc api-and-interface-design — README.md:40

## Concepts named — required, verbatim
- `Contract-first design` — external/api-and-interface-design.md:1 — used here
- `One-Version Rule` — external/api-and-interface-design.md:1 — used here
- `REST` — external/api-and-interface-design.md:1 — used here
- `GraphQL` — external/api-and-interface-design.md:1 — used here
- `Build phase` — external/api-and-interface-design.md:5 — used here
- `Overview` — external/api-and-interface-design.md:10 — defined here
- `When to Use` — external/api-and-interface-design.md:10 — defined here
- `Process` — external/api-and-interface-design.md:10 — defined here
- `Rationalizations` — external/api-and-interface-design.md:10 — defined here
- `Red Flags` — external/api-and-interface-design.md:10 — defined here
- `Verification` — external/api-and-interface-design.md:10 — defined here

## Structure
- "api-and-interface-design" — external/api-and-interface-design.md:5
- "Install just this skill" — external/api-and-interface-design.md:5
- "How this skill is structured" — external/api-and-interface-design.md:8
- "Build phase" — external/api-and-interface-design.md:12
- "More in the Build phase" — external/api-and-interface-design.md:12

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/api-and-interface-design.md:1 — external page summary ("Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation" — external/api-and-interface-design.md:1) differs from skill description ("Use when designing APIs, module boundaries, or any public interface" — skills/api-and-interface-design/SKILL.md:3).

## Observations
The external HTML page is rendered by Astro and contains embedded CSS and client-side JavaScript for copy-to-clipboard buttons and intersection observers. It references the open `skills CLI` (`npx skills add addyosmani/agent-skills --skill api-and-interface-design`), shows standard 6-part skill anatomy, and cross-links related Build phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`).

## Context cost
26413 bytes. Approximately 5500 tokens.
