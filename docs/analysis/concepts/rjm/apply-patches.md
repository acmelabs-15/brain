---
package: rjm
name: apply_patches
slug: apply-patches
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# apply_patches

## Definition — verbatim
> "Apply ``patches`` to ``document`` under a hard edit budget." — scripts/eval/_optimizer_core.py:488

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 487 | defined here | Core patch execution function applying atomic edits sequentially while enforcing anchor uniqueness, budget bounds, and fence protection. |

## Consumes
Source document string, sequence of `Patch` objects, and integer edit budget limit.

## Produces
A modified document string with all valid patches applied sequentially.

## When applied
Called when updating an agent prompt or rule document with proposed modifications during an optimization iteration.

## Sub-concepts
patch, edit-budget, protectedsectionerror, patchshapeerror

## Part of
optimize-artifact

## Implementation status
clean

## Design notes
`apply_patches` executes sequential text modifications against prompt documents within strict safety boundaries. It validates edit budget limits, requires exact single-match line anchors, and prevents modifications within protected slow-update fences, ensuring automated updates cannot corrupt critical instructions.
