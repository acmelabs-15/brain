---
package: rjm
name: _is_provider_outage
slug: is-provider-outage
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _is_provider_outage

## Definition — verbatim
(used, not defined)

> "def _is_provider_outage(exc: Exception) -> bool:" — scripts/eval/eval-prompt-change.py:708

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 708 | defined here | Helper function that inspects exceptions to identify external model provider outages for neutral skip. |

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
defects: missing-path

## Design notes
An internal error-handling function distinguishing external provider outages from prompt regressions to permit neutral skipping, classified as name-only per D-023.
