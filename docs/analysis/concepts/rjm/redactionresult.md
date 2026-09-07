---
package: rjm
name: RedactionResult
slug: redactionresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RedactionResult

## Definition — verbatim
(used, not defined)

> "class RedactionResult:" — scripts/redact_secrets.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 126 | defined here | Frozen dataclass returning redacted text and the tuple of redaction reasons that fired. |

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
`RedactionResult` is a Python dataclass return type encapsulating sanitized text and triggered redaction reasons rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
