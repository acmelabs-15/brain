---
package: rjm
name: TYPE_TO_SUBDIR
slug: type-to-subdir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TYPE_TO_SUBDIR

## Definition — verbatim
(used, not defined)

> "TYPE_TO_SUBDIR = {" — scripts/traceability/spec_utils.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 21 | defined here | Mapping table associating specification type prefixes with their respective subdirectory locations under `.agents/specs`. |

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
defects: script-bug, missing-path

## Design notes
A Python dictionary mapping specification types to their storage subdirectories, classified as `name-only` per D-023.
