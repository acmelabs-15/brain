---
package: rjm
name: _SemgrepExecutableError
slug: semgrepexecutableerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
