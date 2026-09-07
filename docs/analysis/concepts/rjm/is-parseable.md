---
package: rjm
name: is_parseable
slug: is-parseable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_copilot_version_pin.py, sha256: 1821fcb43cb7cb32c9d7740b80e25620a2efe62e3688b6f8a94d8f3b2c812350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_parseable

## Definition — verbatim
(used, not defined)

> "def is_parseable(version: str) -> bool:" — scripts/validation/check_copilot_version_pin.py:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 72 | defined here | Predicate checking if a version string conforms to accepted semver format. |

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
A Python helper predicate in `check_copilot_version_pin.py` testing semver regex validity, classified as name-only per D-023.
