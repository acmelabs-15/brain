---
package: rjm
name: ruleset_params_baseline.json
slug: ruleset-params-baseline-json
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ruleset_params_baseline.json

## Definition — verbatim
(used, not defined)

> "Compares the values in ruleset_params_baseline.json against the live" — scripts/validation/check_ruleset_params_drift.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ruleset_params_drift.py | 4 | used here | Baseline JSON configuration file recording expected GitHub repository branch ruleset parameters. |

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
defects: exit-code-mismatch, orphan

## Design notes
A JSON configuration file name recording expected repository branch ruleset parameters rather than an agent lifecycle concept.
