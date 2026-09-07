---
package: rjm
name: is_quiet_mode
slug: is-quiet-mode
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/progress/README.md, sha256: 9802ce17f6deea0b8d4eb844414165356de7c337aa7aac09e8d49484f59d8349}
  - {path: scripts/progress/__init__.py, sha256: 34d00be95f2a51fe67662404bed5528cc10e27848f9b98bcd2a0509bf8ea522c}
  - {path: scripts/progress/reporter.py, sha256: 3a09cf686fe7a267467190029851cc0ed3ce5ab9b9f68b573c48a84acb8b2cdb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_quiet_mode

## Definition — verbatim
(used, not defined)

> "def is_quiet_mode() -> bool:" — scripts/progress/reporter.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/progress/__init__.py | 21 | used here | Re-exported in module initialization namespace. |
| scripts/progress/README.md | 96 | used here | Documented as helper checking whether progress output should be suppressed. |
| scripts/progress/reporter.py | 23 | defined here | Checks whether CLAUDE_PROGRESS_QUIET environment variable suppresses progress output. |

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
`is_quiet_mode` is a Python predicate function identifier checking whether terminal progress output is suppressed by environment configuration rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
