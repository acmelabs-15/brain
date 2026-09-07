---
package: rjm
name: manifest-only conflicts
slug: manifest-only-conflicts
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# manifest-only conflicts

## Definition — verbatim
> "shows the current count is **11 manifest-only conflicts** and **2 taste-baseline-only conflicts** out of 24 DIRTY PRs total" — .agents/architecture/ADR-091-post-merge-version-bot.md:20

## Also called — verbatim
> "Manifest-only (version field)" — .agents/architecture/ADR-091-post-merge-version-bot.md:32

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 20 | defines | Identifies empirical merge conflict class where PR branches conflict solely on scalar version integers in plugin.json. |

## Consumes
Concurrent open pull requests each incrementing a shared scalar version field in plugin manifests.

## Produces
Git merge conflicts localized exclusively to `plugin.json` without any semantic code conflicts.

## When applied
Observed during git mergeability evaluation of open PRs against main.

## Sub-concepts
none

## Part of
measured-conflict-classes

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Merge conflict failure mode identified in ADR-091 where disjoint PRs that touch independent code cannot merge concurrently because both modified the scalar version number in `plugin.json`. This class motivated removing manual version bumps from PR branches.
