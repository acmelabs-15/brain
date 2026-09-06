---
package: addy
name: Rollback owner
slug: rollback-owner
kind: role
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rollback owner

## Definition — verbatim
(used, not defined)
> "- Rollback owner and commands: not documented." — evals/fixtures/shipping-and-launch/launch-status.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/shipping-and-launch/launch-status.md | 9 | references | Assigned individual responsible for executing deployment reversal, noted as not documented |

## Consumes
Validated rollback runbooks, system access permissions, and deployment monitoring telemetry

## Produces
Authoritative execution of deployment rollback commands in the event of production failure

## When applied
Must be explicitly named and briefed prior to deployment initiation and active during rollout

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The designated engineer or lead assigned explicit accountability for executing a rollback if a launch encounters issues; failing to assign and document a rollback owner blocks release authorization in Addy's methodology.
