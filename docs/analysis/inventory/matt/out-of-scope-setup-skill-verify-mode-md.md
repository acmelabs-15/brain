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
verified: 2026-09-05 quote-check+coverage
---

# .out-of-scope/setup-skill-verify-mode.md

## Purpose — required, verbatim
> "This project will not add a dedicated verify/check mode (or a separate verify skill) for `setup-matt-pocock-skills`." — .out-of-scope/setup-skill-verify-mode.md:3

## Design intent — required
Documents the design decision rejecting a dedicated verify/check mode or flag for `setup-matt-pocock-skills`. It argues that configuration verification against seed templates is already handled conversationally via prompt instruction ("don't rewrite anything, just check my existing files against the current seed templates and report drift"), and that adding a distinct code path or skill would double maintenance surface area and cause template drift. Without this record, contributors might introduce redundant verification skills or CLI flags that fragment the setup surface area.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `setup-matt-pocock-skills` — .out-of-scope/setup-skill-verify-mode.md:1 — used here
- `seed-template` — .out-of-scope/setup-skill-verify-mode.md:7 — used here

## Structure
- # Verify/Check Mode for `setup-matt-pocock-skills`
- ## Why this is out of scope
- ## Prior requests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Reinforces the package-wide principle of single, prompt-driven skills rather than bifurcated creation/verification modes or command-line flags. Verification is achieved by scoping the conversational prompt of the existing setup skill.

## Context cost
1125 bytes, approximately 270 tokens.
