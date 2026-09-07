---
package: rjm
name: TOCTOU
slug: toctou
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
