---
package: addy
name: diff
slug: diff
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch, sha256: 35ee3634734174e83b65560960f64de82b7d08d22dd55e1a196f58837cd507d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# diff

## Definition — verbatim
> "diff --git a/git-workflow-and-versioning/app.js b/git-workflow-and-versioning/app.js" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch | 1 | defined here | Git header format identifying the file differences contained within the patch artifact. |

## Consumes
Two versions or states of a source code file.

## Produces
Unified line-by-line textual representation of additions, deletions, and context lines.

## When applied
During version control operations, patch generation, code review, and atomic commit staging.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A foundational software development artifact representing textual changes between repository states, enabling granular code inspection, patch application, and atomic commit creation.
