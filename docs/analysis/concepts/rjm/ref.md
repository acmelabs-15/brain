---
package: rjm
name: ref
slug: ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/ruleset_params_baseline.json, sha256: 02f34be33d286be3183642951eefeebfeebbdb6490b05ea7c8d45767393b7e91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ref

## Definition — verbatim
(used, not defined)

> "ref" — scripts/validation/ruleset_params_baseline.json:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/ruleset_params_baseline.json | 3 | defined here | Configuration key specifying the target git branch reference for ruleset parameters. |

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
A JSON key in `ruleset_params_baseline.json`, classified as name-only per D-023.
