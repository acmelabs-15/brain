---
package: rjm
name: merge-resolver rule
slug: merge-resolver-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge-resolver rule

## Definition — verbatim
> "the merge-resolver rule that resolves a version-only `plugin.json` conflict to one patch above the higher side (issue #2543), re-checked by the same PR-time gate before merge" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 72 | used here | Heuristic resolving version-only `plugin.json` conflicts to one patch above the higher branch. |

## Consumes
Git merge conflicts on `plugin.json` version lines between concurrent PR branches.

## Produces
Automatically or procedurally resolved `plugin.json` with an incremented patch version.

## When applied
Applied when rebasing or merging sibling pull requests that contend on the same plugin version line.

## Sub-concepts
none

## Part of
conflict-resolution

## Implementation status
clean

## Design notes
The merge-resolver rule is a tactical mitigation for pull request serialization caused by monotonic version-bump gates. When two PRs touch plugin files and collide on the same version counter, resolving the conflict to one patch higher than the contending branches avoids endless rebase cycles while preserving monotonicity.
