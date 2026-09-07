---
package: rjm
name: TOCTOU
slug: toctou
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TOCTOU

## Definition — verbatim
(used, not defined)

> "version probe (TOCTOU), lost its exec bit, or the kernel refused" — scripts/security/run_semgrep.py:466

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 466 | used here | Code comment explaining handling of OSError when a binary is removed or altered between version probe and process execution. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`TOCTOU` (time-of-check to time-of-use) is a concurrency race condition vulnerability concept referenced in code comments rather than an autonomous SDLC lifecycle concept, classified as `kind: name-only` per D-023.
