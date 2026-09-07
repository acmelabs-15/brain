---
package: rjm
name: SemgrepScanner
slug: semgrepscanner
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

# SemgrepScanner

## Definition — verbatim
(used, not defined)

> "class SemgrepScanner:" — scripts/security/run_semgrep.py:247

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/run_semgrep.py | 247 | defined here | Main scanner orchestrator class managing binary resolution, git diff filtering, rule execution, and finding reporting. |

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
`SemgrepScanner` is a Python class identifier orchestrating local static security scans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
