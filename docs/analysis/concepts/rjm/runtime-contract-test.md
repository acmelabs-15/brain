---
package: rjm
name: runtime-contract test
slug: runtime-contract-test
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# runtime-contract test

## Definition — verbatim
> "- **Test the runtime contract.** A runtime-contract test MUST prove that generated hooks resolve their anchored targets correctly and do not depend on caller working directory accidents." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 74 | defined here | Mandates automated tests verifying generated hook command strings execute correctly from arbitrary foreign working directories. |

## Consumes
Generated hook configurations and synthetic foreign directory environments.

## Produces
CI verification evidence proving hook invocation contracts hold across working directories.

## When applied
Executed in pre-push and CI build suites (`test_generate_hooks_runtime_contract.py`).

## Sub-concepts
none

## Part of
prevention-contract

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated test suite requirement in ADR-066 and ADR-071 that executes generated hooks under external, uncredentialed directories. It validates that hook launchers locate target scripts via plugin root macros without depending on repository working directories.
