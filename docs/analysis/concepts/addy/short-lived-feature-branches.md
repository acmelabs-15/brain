---
package: addy
name: short-lived feature branches
slug: short-lived-feature-branches
kind: pattern
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

# short-lived feature branches

## Definition — verbatim
> "Work in short-lived feature branches that merge back within 1-3 days." — skills/git-workflow-and-versioning/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 20 | defined here | Recommends working on scoped branches that merge back to main within 1-3 days to minimize divergence. |

## Consumes
Scoped task specifications, main branch baseline.

## Produces
Frequently merged git branches with minimal merge conflicts.

## When applied
When executing feature work under trunk-based development.

## Sub-concepts
feature-branches

## Part of
trunk-based-development, git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Short-lived feature branches restrict branch lifetime to 1-3 days, preventing code drift and massive merge conflicts while keeping main deployable and enabling rapid continuous integration.
