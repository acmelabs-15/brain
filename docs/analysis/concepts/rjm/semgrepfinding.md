---
package: rjm
name: SemgrepFinding
slug: semgrepfinding
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

# SemgrepFinding

## Definition — verbatim
(used, not defined)

> "class SemgrepFinding:" — scripts/security/run_semgrep.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 67 | defined here | Dataclass representing a detected Semgrep rule violation with rule ID, file, line, severity, CWE, and OWASP tags. |

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
`SemgrepFinding` is a Python dataclass identifier modeling static security findings in scanner scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
