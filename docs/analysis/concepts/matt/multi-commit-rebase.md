---
package: matt
name: multi-commit rebase
slug: multi-commit-rebase
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-commit rebase

## Definition — verbatim
(used, not defined)
> "including every remaining commit in a multi-commit rebase." — external/resolving-merge-conflicts.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 48 | used here | Discussed in FAQ as a high-friction git operation where squashing before rebasing is recommended over multi-step conflict resolution. |

## Consumes
A git branch with multiple divergent commits requiring rebase.

## Produces
A rebased branch, or a recommendation to squash to a single commit before rebasing.

## When applied
When a git rebase involving multiple sequential commits encounters conflicts.

## Sub-concepts
none

## Part of
resolving-merge-conflicts

## Implementation status
defects: orphan, doc-drift

## Design notes
A multi-commit rebase is identified as an operational hazard for coding agents. Because rebasing across multiple commits with repeated conflict resolution easily causes agents to lose track of intermediate state, the recommended pattern is to abort, squash the branch to a single commit, and rebase cleanly once.
