---
package: addy
name: integration tests
slug: integration-tests
kind: technique
package_phase: addy:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# integration tests

## Definition — verbatim
> "provider-adapter integration tests, and one end-to-end assignment scenario." — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/planning-and-task-breakdown/notifications-spec.md | 17 | used here | Specified as a mandatory verification layer testing provider-adapter behavior against third-party contracts. |

## Consumes
Integrated modules, service adapters, network mocks or test environments.

## Produces
Verification results confirming successful cross-boundary interactions and data contract compatibility.

## When applied
During testing and verification phases after unit testing to validate interactions between collaborating components or external adapters.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A core verification technique positioned above unit tests in the test pyramid that validates contracts and data exchanges across module or service boundaries.
