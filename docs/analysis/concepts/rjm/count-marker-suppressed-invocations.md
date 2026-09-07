---
package: rjm
name: count_marker_suppressed_invocations
slug: count-marker-suppressed-invocations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# count_marker_suppressed_invocations

## Definition — verbatim
(used, not defined)

> "def count_marker_suppressed_invocations(text: str) -> int:" — scripts/validation/check_skill_md_exec_portability.py:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 163 | defined here | Function counting invocations suppressed by vendor-portability-exec markers for baseline auditing. |

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
defects: other

## Design notes
An internal audit counting function determining suppressed invocation counts rather than an agent lifecycle concept.
