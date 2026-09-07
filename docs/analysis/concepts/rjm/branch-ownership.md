---
package: rjm
name: Branch ownership
slug: branch-ownership
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Branch ownership

## Definition — verbatim
> "- **(a) Branch ownership.** Are you on a branch you own (you created it and push to it freely), or are you a contributor pushing commits onto someone else's feature branch? Treat a branch whose open PR lists a different author as not yours." — .claude/commands/ship.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 44 | defined here | Rule distinguishing whether the current session owns the feature branch or is contributing to another user's branch. |

## Consumes
Author identity from git config and pull request author metadata from remote VCS.

## Produces
Classification of the current session as branch owner or external contributor.

## When applied
Evaluated during PR ownership detection in `/ship` to govern force-push and branch mutation permissions.

## Sub-concepts
none

## Part of
pr-ownership-and-existence-detection, mode-detection

## Implementation status
clean

## Design notes
A safety rule in the `/ship` pipeline that establishes whether an agent possesses sole ownership over a working branch. If a branch's open PR lists a different author, the agent treats the branch as shared or contributor-owned, restricting disruptive mutations (such as rebasing or force-pushing) to protect collaborative work.
