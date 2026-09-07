---
package: rjm
name: find_priority_labels
slug: find-priority-labels
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_priority_labels

## Definition — verbatim
(used, not defined)

> "def find_priority_labels(label_names: list[str]) -> list[str]:" — scripts/validation/check_dual_priority_labels.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 56 | defined here | Helper function extracting and sorting priority labels from a label list. |

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
defects: orphan

## Design notes
A Python parsing helper in `check_dual_priority_labels.py` extracting priority labels from label names, classified as name-only per D-023.
