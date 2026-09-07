---
package: rjm
name: required_docs
slug: required-docs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/e2e-delivery-fixtures.json, sha256: b4cfa4a94ba048652e53a1e8b9fc021f704c4e43273e9a40ec5723dfc8afd874}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# required_docs

## Definition — verbatim
(used, not defined)

> "required_docs" — scripts/eval/examples/e2e-delivery-fixtures.json:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/e2e-delivery-fixtures.json | 13 | defined here | Hidden criteria field defining the list of documentation deliverables expected from an agent. |

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
required_docs is a JSON schema property name for evaluation criteria rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
