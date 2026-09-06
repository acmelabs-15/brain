---
package: addy
name: Commit Early, Commit Often
slug: commit-early-commit-often
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Commit Early, Commit Often

## Definition — verbatim
> "### 1. Commit Early, Commit Often" — skills/git-workflow-and-versioning/SKILL.md:34
> "Each successful increment gets its own commit. Don't accumulate large uncommitted changes." — skills/git-workflow-and-versioning/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 34 | defined here | Core principle commanding frequent commits after each verified slice rather than giant uncommitted batches. |

## Consumes
Incremental verified code slices.

## Produces
Granular, frequent git commits preserving incremental progress.

## When applied
Continuously throughout implementation as each slice passes tests and verification.

## Sub-concepts
the-save-point-pattern

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Commit Early, Commit Often commands committing each verified increment immediately rather than accumulating sprawling changes, protecting against catastrophic agent context failure or flawed code generations.
