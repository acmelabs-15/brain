---
package: rjm
name: BASE_REF
slug: base-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BASE_REF

## Definition — verbatim
(used, not defined)

> "BASE_REF = \"main\"" — scripts/eval/eval-reviewer-asymmetry.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 53 | defined here | Constant defining the default git base ref ("main") for loading control templates. |

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
defects: doc-drift

## Design notes
A module constant defining the default git branch reference (`main`) used for control templates in `eval-reviewer-asymmetry.py`, classified as name-only per D-023.
