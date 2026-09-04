---
package: addy
path: .gemini/commands/spec.toml
type: command
bytes: 911
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/spec.toml

## Purpose — required, verbatim
> "Start spec-driven development — write a structured specification before writing code" — .gemini/commands/spec.toml:1

## Design intent — required
Gemini/Antigravity slash command initiating specification authoring via user interview across objective, core features, tech stack, and boundaries, generating a 6-area spec at `SPEC.md` or a capability map for modular feature decomposition in Phase 0.

## Phase — required
addy:DEFINE

## Inputs — required
- User responses to clarifying questions

## Outputs — required
- `SPEC.md` in project root
- Capability map (when bundled capabilities detected)

## Invokes — required
- skill spec-driven-development — .gemini/commands/spec.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec-driven development` — .gemini/commands/spec.toml:1 — used here
- `spec-driven-development` — .gemini/commands/spec.toml:4 — used here
- `acceptance criteria` — .gemini/commands/spec.toml:8 — used here
- `boundaries` — .gemini/commands/spec.toml:10,12 — defined here
- `capability map` — .gemini/commands/spec.toml:14 — defined here
- `Phase 0` — .gemini/commands/spec.toml:14 — used here
- `SPEC.md` — .gemini/commands/spec.toml:16 — defined here

## Structure
- Clarifying questions 1–4
- Core areas and capability map
- Output path and confirmation

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `commands/spec.toml`.

## Context cost
911 bytes, ~230 tokens. Transitive cost: loads `spec-driven-development` (12163 bytes, ~3040 tokens).
