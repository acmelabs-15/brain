---
package: rjm
name: Adoption Criteria
slug: adoption-criteria
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Adoption Criteria

## Definition — verbatim
> "### Adoption Criteria" — docs/codeql-rollout-checklist.md:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 322 | defined here | Success criteria checklist measuring team enablement, documentation linkage, and unblocked developer flow. |

## Consumes
Rollout PR documentation links and maintainer operational verification.

## Produces
Verification that repository maintainers understand how to run, inspect, and maintain CodeQL tooling.

## When applied
Evaluated prior to signing off on final CodeQL deployment across engineering teams.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Adoption Criteria ensures that technical rollout of CodeQL is accompanied by operational readiness. By requiring maintainer knowledge of local scanning and SARIF triage, prominent documentation linking, and evidence that unrelated developer PRs remain unblocked, it prevents tooling abandonment.
