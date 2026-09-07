---
package: rjm
name: FAIL_ROUTE_MISSED_TARGET
slug: fail-route-missed-target
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FAIL_ROUTE_MISSED_TARGET

## Definition — verbatim
> "return \"FAIL_ROUTE_MISSED_TARGET\"" — scripts/eval/eval-rule-activation.py:1764

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1764 | defined here | Returns failure verdict when a routed positive scenario selected an unrelated skill reference rather than the evaluated target. |
| scripts/eval/README.md | 312 | defined here | Documents FAIL_ROUTE_MISSED_TARGET as an indicator of routing imprecision where positive cells scored on references never opened. |

## Consumes
Two-hop routing responses and scenario positive route mismatch counts (`positive_route_mismatches`).

## Produces
Blocking evaluation failure verdict (exit code 1) withholding certification due to inaccurate reference routing.

## When applied
Triggered during progressive disclosure evaluation when a model selects a different reference than the one under test (`positive_route_mismatches > 0`).

## Sub-concepts
none

## Part of
eval-rule-activation

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
An evaluation gate verdict in rjm that prevents progressive-disclosure skills from passing activation tests when the routing front door mistakenly directs queries to sibling references rather than the intended target reference.
