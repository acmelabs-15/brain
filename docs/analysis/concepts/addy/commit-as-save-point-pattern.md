---
package: addy
name: commit-as-save-point pattern
slug: commit-as-save-point-pattern
kind: pattern
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

# commit-as-save-point pattern

## Definition — verbatim
(used, not defined)

> "Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/git-workflow-and-versioning.md | 5 | used here | Summarized as a key git practice allowing instantaneous rollback of bad generations. |

## Consumes
Passing tests, clean intermediate working tree state.

## Produces
Frequent, granular commits acting as checkpoints that can be reverted cleanly via git reset.

## When applied
> "Making any code change (always)." — external/git-workflow-and-versioning.md:5

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, orphan

## Design notes
A version control pattern treating git commits as frequent save points throughout execution. If an agent goes down a blind alley or produces broken code, it can cleanly revert to the latest save point without human intervention or manual undoing.
