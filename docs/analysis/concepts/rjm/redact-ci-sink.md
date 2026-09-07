---
package: rjm
name: redact_ci_sink
slug: redact-ci-sink
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# redact_ci_sink

## Definition — verbatim
(used, not defined)

> "def redact_ci_sink(" — scripts/redact_secrets.py:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/gh_retry_helpers.py | 18 | used here | Imported to sanitize CI environment variables and tokens from gh CLI execution logs. |
| scripts/redact_secrets.py | 157 | defines | Defines the sanitization function scrubbing credentials, authorization headers, and token shapes from CI output sinks. |

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
`redact_ci_sink` is a Python sanitization function redacting credentials from CI output streams rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
