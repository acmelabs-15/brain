---
package: addy
name: Feature Branches
slug: feature-branches
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

# Feature Branches

## Definition — verbatim
> "### Feature Branches" — skills/git-workflow-and-versioning/SKILL.md:123
> "Keep branches short-lived (merge within 1-3 days) — long-lived branches are hidden costs" — skills/git-workflow-and-versioning/SKILL.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 123 | defined here | Defines dedicated branches for single features that branch from main and merge quickly. |

## Consumes
Main branch HEAD, feature task scope.

## Produces
Isolated, short-lived branch holding one feature's commits.

## When applied
When beginning work on a new feature.

## Sub-concepts
none

## Part of
branching-strategy, git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Feature branches isolate work for a single feature from main, remaining active for only 1-3 days before merging and being deleted, preventing branch proliferation and merge friction.
