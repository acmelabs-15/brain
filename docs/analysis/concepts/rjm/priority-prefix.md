---
package: rjm
name: PRIORITY_PREFIX
slug: priority-prefix
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

# PRIORITY_PREFIX

## Definition — verbatim
(used, not defined)

> "PRIORITY_PREFIX = \"priority:\"" — scripts/validation/check_dual_priority_labels.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 45 | defined here | String constant defining the prefix for GitHub issue priority labels. |

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
A Python string constant in `check_dual_priority_labels.py` defining the priority label prefix, classified as name-only per D-023.
