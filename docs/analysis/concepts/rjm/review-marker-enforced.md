---
package: rjm
name: REVIEW_MARKER_ENFORCED
slug: review-marker-enforced
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

# REVIEW_MARKER_ENFORCED

## Definition — verbatim
(used, not defined)

> "enforced = os.environ.get(\"REVIEW_MARKER_ENFORCED\", \"\").lower() in (\"1\", \"true\")" — scripts/validation/checks_coverage.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_coverage.py | 67 | used here | Environment variable read to escalate review-marker check from advisory to blocking. |

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
An environment variable name read in `scripts/validation/checks_coverage.py` to control gate enforcement, classified as name-only per D-023.
