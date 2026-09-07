---
package: rjm
name: required_gates
slug: required-gates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/e2e-delivery-fixtures.json, sha256: b4cfa4a94ba048652e53a1e8b9fc021f704c4e43273e9a40ec5723dfc8afd874}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# required_gates

## Definition — verbatim
> "_REQUIRED_GATES: tuple[tuple[str, re.Pattern[str]], ...] = (" — scripts/validation/check_build_gates.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/e2e-delivery-fixtures.json | 14 | defined here | Hidden criteria field defining the list of verification gates an agent plan must invoke. |
| scripts/validation/check_build_gates.py | 38 | defined here | Constant defining the tuple of mandatory exit gate skills required in build.md. |

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
required_gates is a configuration identifier and JSON schema property name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
