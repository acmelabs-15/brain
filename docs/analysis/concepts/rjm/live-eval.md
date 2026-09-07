---
package: rjm
name: live-eval
slug: live-eval
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# live-eval

## Definition — verbatim
> "subparsers.add_parser(\"live-eval\", help=\"Run live eval and activation gate.\")" — scripts/eval/software_engineering_library_activation_ci.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 205 | defined here | Subcommand orchestrating live activation evaluation against scenario fixtures and invoking the gate. |

## Consumes
Rule activation scenarios and CLI arguments.

## Produces
Execution of `eval-rule-activation.py` and `software_engineering_library_activation_gate.py`, returning combined exit code.

## When applied
Invoked in CI workflows to run live evaluation against scenario fixtures.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
A CI execution command in rjm orchestrating live rule evaluation and threshold gating across moved reference fixtures.
