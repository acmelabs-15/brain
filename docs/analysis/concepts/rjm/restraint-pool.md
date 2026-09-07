---
package: rjm
name: restraint pool
slug: restraint-pool
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# restraint pool

## Definition — verbatim
(used, not defined)

> "it files the scenario in the restraint pool." — scripts/eval/examples/example-scenarios.json:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/example-scenarios.json | 38 | used here | Explains that negative scenarios with expected_gate skip-rule-not-applicable are routed to the restraint pool. |

## Consumes
Negative test prompt scenarios tagged with skip-rule-not-applicable.

## Produces
Evaluated negative scenario dataset measuring agent silence on unrelated tasks.

## When applied
Applied during behavioral rule and prompt evaluation to measure false-positive activation rates.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The restraint pool partitions negative test cases to measure whether behavioral rules and prompt instructions correctly stay silent when presented with unrelated tasks, preventing over-activation and context bloat.
