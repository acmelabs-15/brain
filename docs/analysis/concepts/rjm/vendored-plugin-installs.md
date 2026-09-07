---
package: rjm
name: vendored plugin installs
slug: vendored-plugin-installs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vendored plugin installs

## Definition — verbatim
(used, not defined)

> "vendored plugin installs, where the consumer repo has no such tree and the" — scripts/validation/check_skill_portability.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 7 | used here | Describes deployment environments where plugins run inside consumer repositories lacking upstream directory trees. |

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
defects: doc-drift, orphan

## Design notes
A descriptive phrase in `check_skill_portability.py` docstring referring to consumer repository plugin installations, classified as name-only per D-023.
