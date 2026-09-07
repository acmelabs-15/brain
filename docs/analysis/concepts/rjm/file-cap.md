---
package: rjm
name: file-cap
slug: file-cap
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# file-cap

## Definition — verbatim
(used, not defined)

> "Sequencing keeps each PR within the atomic-commit and file-cap boundaries in" — .agents/architecture/ADR-064-commands-to-skills-migration.md:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 277 | used here | References file-cap and atomic-commit boundaries in AGENTS.md governing migration PR sequencing. |

## Consumes
Proposed PR change batch and commit decomposition plan.

## Produces
Enforced pull-request boundary restricting modifications to a capped number of files.

## When applied
Applied during PR sequencing and commit generation to adhere to repository file limit boundaries.

## Sub-concepts
none

## Part of
atomic-commits, pr-workflow

## Implementation status
defects: doc-drift

## Design notes
A development policy gate in rjm referenced in ADR-064 that enforces atomic commit boundaries and caps the number of files changed per pull request (specifically the 5-file limit mandated by AGENTS.md). It prevents large tangled diffs and ensures changes remain focused, reviewable, and cleanly revertible.
