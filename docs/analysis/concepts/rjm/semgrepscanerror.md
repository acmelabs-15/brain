---
package: rjm
name: SemgrepScanError
slug: semgrepscanerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SemgrepScanError

## Definition — verbatim
(used, not defined)

> "class SemgrepScanError(Exception):" — scripts/security/run_semgrep.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 57 | defined here | Exception class raised when a Semgrep security scan fails to complete, enforcing fail-closed gate behavior. |

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
`SemgrepScanError` is a Python exception class identifier in Semgrep security scanner tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
