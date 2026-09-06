---
package: addy
name: Branching Strategy
slug: branching-strategy
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

# Branching Strategy

## Definition — verbatim
> "## Branching Strategy" — skills/git-workflow-and-versioning/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 121 | defined here | Establishes branch lifecycle, naming rules, and merge policies for feature and bug fix branches. |

## Consumes
Version control repository, team development workflow.

## Produces
Coordinated branching structure supporting parallel feature work while preserving main stability.

## When applied
When organizing git repository workflows across developers and agents.

## Sub-concepts
feature-branches, branch-naming

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
The branching strategy dictates branching from main, keeping branches short-lived (1-3 days), deleting them after merge, and using feature flags rather than branches for incomplete features.
