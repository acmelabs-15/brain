---
package: addy
name: merge conflict
slug: merge-conflict
kind: reference
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

# merge conflict

## Definition — verbatim
(used, not defined)
> "Resolve the merge conflict on this feature branch" — evals/cases/git-workflow-and-versioning.json:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 10 | used here | Eval trigger prompt testing resolution of conflicting branch histories. |

## Consumes
Conflicting edits between a feature branch and target branch that git cannot automatically merge.

## Produces
Resolved file contents with conflict markers removed, leaving the code compilable and verified.

## When applied
When integrating diverged branches during rebasing or merging.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A merge conflict occurs when concurrent changes touch the same lines of code or incompatible structures, serving as a trigger for automated conflict resolution and tree reconciliation workflows.
