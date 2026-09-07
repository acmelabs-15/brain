---
package: rjm
name: safe_log_str
slug: safe-log-str
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/log_safety.py, sha256: d4696f8fd629359f3749743a18a0aea99e5c83a5d8f56835fbb50f3c14e318a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# safe_log_str

## Definition — verbatim
(used, not defined)

> "def safe_log_str(value: object) -> str:" — scripts/github_core/log_safety.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 35 | used here | Imported and used to sanitize error messages before logging to prevent log forging. |
| scripts/github_core/log_safety.py | 6 | defined here | Utility function stripping CR and LF control characters to defend against CWE-117 log injection. |

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
`safe_log_str` is a Python utility function identifier in `log_safety.py` sanitizing strings against log injection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
