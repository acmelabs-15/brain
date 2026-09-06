---
package: addy
name: branching
slug: branching
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# branching

## Definition — verbatim
(used, not defined)

> "and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/git-workflow-and-versioning.md | 5 | used here | Mentioned in the skill summary as a fundamental aspect of git workflow practices. |

## Consumes
Trunk repository, active task or issue identifier.

## Produces
Short-lived, single-purpose feature branches branched from and merged into main.

## When applied
> "Making any code change (always)." — external/git-workflow-and-versioning.md:5

## Sub-concepts
feature-branches, trunk-based-development

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, orphan

## Design notes
The practice of creating short-lived, focused branches for atomic units of work, keeping changes isolated while minimizing deviation from trunk and avoiding long-lived branches that accumulate merge conflicts.
