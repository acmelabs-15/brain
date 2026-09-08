---
package: rjm
name: frozen_count
slug: frozen-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/model_pin_baseline.json, sha256: 14db300266121c43d1e8a87f9183072d1fca03d6f6d343af53098bca4df79e7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# frozen_count

## Definition — verbatim
(used, not defined)

> "frozen_count" — scripts/validation/model_pin_baseline.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/model_pin_baseline.json | 4 | defines | JSON schema property defining the ceiling count for grandfathered model pins under ADR-080. |

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
A JSON schema configuration key in `model_pin_baseline.json`, classified as name-only per D-023.
