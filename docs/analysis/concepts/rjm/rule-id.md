---
package: rjm
name: rule_id
slug: rule-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rule_id

## Definition — verbatim
(used, not defined)

> "rule_id" — scripts/eval/examples/example-scenarios.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-scenarios.json | 2 | defined here | Declares the rule identifier in the example evaluation scenario template file. |
| scripts/eval/README.md | 251 | defined here | Documents rule_id as naming the scenario evaluation population and enforcing uniqueness across files. |

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
defects: missing-path, doc-drift, script-bug

## Design notes
rule_id is a JSON schema property name and scenario population identifier rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
