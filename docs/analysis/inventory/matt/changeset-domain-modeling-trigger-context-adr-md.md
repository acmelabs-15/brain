---
package: matt
path: .changeset/domain-modeling-trigger-context-adr.md
type: doc
bytes: 437
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .changeset/domain-modeling-trigger-context-adr.md

## Purpose — required, verbatim
> "domain-modeling: trigger on discussing codebase terminology and on writing or editing a CONTEXT.md or an ADR directly, replacing the narrower \"pin down domain terminology or a ubiquitous language\" / \"record an architectural decision\" phrasing. Also drops the \"another skill needs to maintain the domain model\" caveat, since that's the invoking skill's job to state explicitly, not this description's." — .changeset/domain-modeling-trigger-context-adr.md:5 (no explicit purpose statement)

## Design intent — required
Documents a patch update to the `domain-modeling` skill description and triggers. Broadens model-invoked activation criteria to fire when discussing codebase terminology or creating/editing `CONTEXT.md` or ADRs directly, replacing narrower phrasing around ubiquitous language. Also strips redundant caveat language that belongs in invoking skills rather than the skill description.

## Phase — required
matt:Design

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `domain-modeling` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `CONTEXT.md` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `ADR` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `ubiquitous language` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here

## Structure
- Changeset package bump header — .changeset/domain-modeling-trigger-context-adr.md:1
- Trigger update summary — .changeset/domain-modeling-trigger-context-adr.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/domain-modeling-trigger-context-adr.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Demonstrates tuning trigger wording toward specific artifact filenames (`CONTEXT.md`, `ADR`) to ensure reliable model auto-invocation.

## Context cost
437 bytes, ~100 tokens.
