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
verified: 2026-09-05 quote-check+coverage
---

# .changeset/domain-modeling-trigger-context-adr.md

## Purpose — required, verbatim
> "domain-modeling: trigger on discussing codebase terminology and on writing or editing a CONTEXT.md or an ADR directly" — .changeset/domain-modeling-trigger-context-adr.md:5

## Design intent — required
Changeset entry recording a patch release for `mattpocock-skills` expanding model-invoked triggers for the `domain-modeling` skill to fire on discussions of codebase terminology and direct creation or editing of `CONTEXT.md` or ADRs. Removes downstream maintenance caveats from the description to clarify the separation of concerns between invoking and invoked skills.

## Phase — required
none

## Inputs — required
Skill trigger requirements and description phrasing in `skills/engineering/domain-modeling/SKILL.md`.

## Outputs — required
Updated trigger phrasing for the `domain-modeling` skill frontmatter description.

## Invokes — required
- skill domain-modeling — .changeset/domain-modeling-trigger-context-adr.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `domain-modeling` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `codebase terminology` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `CONTEXT.md` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `ADR` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here
- `ubiquitous language` — .changeset/domain-modeling-trigger-context-adr.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Codifies an important principle for agent skill authoring: skill descriptions should focus on what the user/conversation is doing rather than placing instructions or caveats about the calling skill's responsibilities into the callee's metadata.

## Context cost
437 bytes, ~100 tokens. Self-contained release note.
