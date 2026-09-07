---
package: rjm
name: slack-token
slug: slack-token
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

# slack-token

## Definition — verbatim
(used, not defined)

> "(\"slack-token\", re.compile(r\"\bxox[baprs]-[A-Za-z0-9-]{10,}\b\"))," — scripts/redact_secrets.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/redact_secrets.py | 49 | defined here | Secret redaction rule regex pattern identifying Slack token shapes. |

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
slack-token is a secret redaction token pattern identifier matching Slack authentication tokens rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
