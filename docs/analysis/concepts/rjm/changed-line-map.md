---
package: rjm
name: changed_line_map
slug: changed-line-map
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

# changed_line_map

## Definition — verbatim
(used, not defined)

> "def changed_line_map(" — scripts/ci/diff_line_scope.py:214

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diff_line_scope.py | 214 | defined here | Function returning added or modified line numbers per file path versus base ref using zero-context git diff. |

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
A utility function extracting touched line sets per file from zero-context git diff output rather than an operational lifecycle concept.
