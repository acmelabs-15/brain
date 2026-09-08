---
package: rjm
name: Validation Failure
slug: validation-failure
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validation Failure

## Definition — verbatim
> "### Validation Failure" — templates/agents/qa.shared.md:773

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 773 | defined here | Handoff validation gate prohibiting delegation when any verification checklist item is incomplete. |

## Consumes
Incomplete checklist items, missing test execution results, or unfulfilled report requirements.

## Produces
Handoff block preventing downstream agent delegation, requiring item completion or blocker documentation.

## When applied
Applied during QA handoff validation if any checklist item cannot be completed.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path

## Design notes
A strict handoff gating rule within the QA agent preventing premature or incomplete delegation to the orchestrator, requiring missing items to be completed or explicit blockers documented.
