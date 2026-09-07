---
package: rjm
name: EXIT_DUAL
slug: exit-dual
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

# EXIT_DUAL

## Definition — verbatim
(used, not defined)

> "EXIT_DUAL = 1" — scripts/validation/check_dual_priority_labels.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 51 | defined here | Exit code constant returned when an issue has conflicting multiple priority labels. |

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
A script exit code constant in `check_dual_priority_labels.py` indicating dual priority label violations, classified as name-only per D-023.
