---
package: rjm
name: has_portability_marker
slug: has-portability-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# has_portability_marker

## Definition — verbatim
(used, not defined)

> "def has_portability_marker(text: str) -> bool:" — scripts/validation/check_skill_md_exec_portability.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 96 | defined here | Function checking if text contains an intentional vendor-portability-exec comment marker. |
| scripts/validation/check_skill_md_portability.py | 329 | defined here | Function checking if text contains a vendor-portability opt-out comment marker outside code blocks. |

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
defects: other, doc-drift

## Design notes
A marker detection predicate in validation scripts rather than an agent lifecycle concept.
