---
package: matt
name: state role
slug: state-role
kind: role
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# state role

## Definition — verbatim
> "moving each one through a small state machine of <strong class=\"ah-prose-strong\">triage roles</strong> (a category role and a state role)" — external/triage.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 25 | defined here | Defines the state role as the workflow lifecycle dimension assigned to every triaged issue. |

## Consumes
An issue being evaluated during `/triage`.

## Produces
An assigned state label (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix`).

## When applied
Applied during `/triage` workflow execution.

## Sub-concepts
needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Part of
triage, triage roles

## Implementation status
defects: missing-path

## Design notes
The lifecycle state dimension of Matt Pocock's triage model, enforcing an invariant that every issue carries exactly one state role (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) to govern agent pickup and human review.
