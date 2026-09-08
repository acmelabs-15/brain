---
package: rjm
name: _as_advisory
slug: as-advisory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_coverage.py, sha256: 1b5a720fe23fc66bb90a5f4646618744fca700376aabaf0f8eb15f8f7deefaea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _as_advisory

## Definition — verbatim
(used, not defined)

> "def _as_advisory(line: str) -> str:" — scripts/validation/checks_coverage.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_coverage.py | 28 | defined here | Function rewriting leading [FAIL] tokens to [WARN] to reflect advisory checks. |

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
defects: script-bug

## Design notes
A Python helper function in `scripts/validation/checks_coverage.py` that downgrades output failure tokens to warnings, classified as name-only per D-023.
