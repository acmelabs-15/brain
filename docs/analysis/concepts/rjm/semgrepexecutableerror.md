---
package: rjm
name: _SemgrepExecutableError
slug: semgrepexecutableerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SemgrepExecutableError

## Definition — verbatim
(used, not defined)

> "class _SemgrepExecutableError(RuntimeError):" — scripts/security/run_semgrep.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 124 | defined here | Exception class raised when the pinned Semgrep binary cannot be located or version-verified. |

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
`_SemgrepExecutableError` is an internal Python exception class identifier in security scanning tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
