---
package: addy
name: independently green
slug: independently-green
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# independently green

## Definition — verbatim
(used, not defined)
> "Separate atomic commits with clear messages, each independently green" — evals/cases/git-workflow-and-versioning.json:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 36 | used here | Expected eval output requirement that every separate commit compiles and passes all tests on its own. |

## Consumes
A series of proposed commits on a branch or PR.

## Produces
Verification proof that every intermediate commit builds and passes tests successfully.

## When applied
When structuring multi-commit branches or interactive rebases prior to merging into trunk.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
The independently green property ensures that every commit in a repository history leaves the build and test suite passing. This prevents introducing broken intermediate commits that disrupt git bisect or cause breakages when individual commits are cherry-picked or reverted.
