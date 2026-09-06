---
package: addy
name: total
slug: total
kind: name-only
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

# total

## Definition — verbatim
(used, not defined)
> "+function total(items) {" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch | 12 | defined here | JavaScript function modified in the patch fixture to round price sums. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Function identifier in an evaluation git patch fixture rather than a lifecycle artifact, technique, or gate.
