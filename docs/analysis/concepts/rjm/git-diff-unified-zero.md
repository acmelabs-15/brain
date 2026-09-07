---
package: rjm
name: git_diff_unified_zero
slug: git-diff-unified-zero
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diff_line_scope.py, sha256: 2acbbeda2f56a2d40dde6d3d9499acc048748b1547e9622623ddf65f3c05cc17}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git_diff_unified_zero

## Definition — verbatim
(used, not defined)

> "def git_diff_unified_zero(" — scripts/ci/diff_line_scope.py:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diff_line_scope.py | 180 | defined here | Function executing zero-context git diff without pathspecs to preserve rename detection. |

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
A subprocess execution function running zero-context git diffs rather than an operational lifecycle concept.
