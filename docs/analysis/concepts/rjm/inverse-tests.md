---
package: rjm
name: inverse tests
slug: inverse-tests
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# inverse tests

## Definition — verbatim
> "The critic agent template flags missing inverse tests and generated mirror drift." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 107 | defined here | Defined in confirmation section as a verification requirement enforced by critic and implementer agents. |

## Consumes
Specification criteria, contract definitions, behavioral requirements.

## Produces
Negative test assertions proving that invalid conditions fail and obsolete contracts are no longer accepted.

## When applied
Formulated by implementers before writing code and reviewed by critic agents during pull request evaluation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Negative and inverted test cases that actively assert the rejection of invalid inputs or obsolete behavior. In rjm testing rigor, inverse tests ensure that changes are verified symmetrically, preventing silent regressions and confirmation bias.
