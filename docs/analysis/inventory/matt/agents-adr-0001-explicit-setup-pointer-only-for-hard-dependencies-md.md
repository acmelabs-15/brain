---
package: matt
path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md
type: agent
bytes: 1154
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md

## Purpose — required, verbatim
> "Engineering skills depend on per-repo config (issue tracker, triage label vocabulary, domain doc layout) seeded by `/setup-matt-pocock-skills`. Some skills cannot meaningfully function without that config: they have to publish to a specific issue tracker or apply a specific label string. Others only use it to sharpen output (vocabulary, ADR awareness) and degrade gracefully without it." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3 (no explicit purpose statement)

## Design intent — required
Establishes the architectural convention dividing skills in the package into hard-dependency and soft-dependency categories relative to `/setup-matt-pocock-skills`. Hard-dependency skills (`to-tickets`, `to-spec`, `triage`) require repository-specific configuration like issue trackers and triage labels to function, so they must carry an explicit setup pointer. Soft-dependency skills (`diagnose`, `tdd`, `improve-codebase-architecture`) degrade gracefully using vague prose pointers without failing, keeping them token-light and avoiding unnecessary setup instructions.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `hard-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `soft-dependency` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:5 — defined here
- `/setup-matt-pocock-skills` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1 — used here
- `to-tickets` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `to-spec` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `triage` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7 — used here
- `diagnose` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `tdd` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here
- `improve-codebase-architecture` — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8 — used here

## Structure
- # Explicit `/setup-matt-pocock-skills` pointer only for hard dependencies — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/engineering/diagnose — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8: References diagnose as a soft-dependency skill, but the repository path is skills/engineering/diagnosing-bugs.
- orphan · .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Defines clear architectural criteria for when to include explicit prerequisite instructions vs allowing graceful degradation. Notes that `/setup-matt-pocock-skills` seeds issue tracker, triage label vocabulary, and domain doc layout (`CONTEXT.md`, ADRs).

## Context cost
1154 bytes, ~250 tokens.
