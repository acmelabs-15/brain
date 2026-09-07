---
package: rjm
name: bearer-token
slug: bearer-token
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

# bearer-token

## Definition — verbatim
(used, not defined)

> "(\"bearer-token\", re.compile(r\"\bBearer\s+[A-Za-z0-9._\-+/=~]{8,}\", re.IGNORECASE))," — scripts/redact_secrets.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 51 | defined here | Secret redaction rule regex pattern identifying HTTP Bearer authentication token shapes. |

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
`bearer-token` is a secret redaction token pattern matching HTTP Bearer authentication credentials in agent free-text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
