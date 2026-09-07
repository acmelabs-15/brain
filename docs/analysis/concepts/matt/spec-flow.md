---
package: matt
name: spec flow
slug: spec-flow
kind: pattern
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

# spec flow

## Definition — verbatim
> "<code class=\"ah-code-inline\">triage</code> is the on-ramp for work that arrives from outside; the spec flow is the lane for work you originate. They meet at <code class=\"ah-code-inline\">ready-for-agent</code>, not before." — external/triage.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 50 | defined here | Contrasts internally originated specification authoring with external issue triage, noting both lanes meet at ready-for-agent. |

## Consumes
Internal feature ideas, architectural proposals, user requirements, and grilling conversations.

## Produces
Published tracker tickets pre-labeled with `ready-for-agent` containing detailed acceptance criteria and test seams.

## When applied
Used when planning and originating new work internally within the project team.

## Sub-concepts
to-spec, to-tickets

## Part of
the main flow

## Implementation status
clean

## Design notes
The spec flow is the primary internally originated delivery pipeline (`grill-with-docs` → `to-spec` → `to-tickets` → `implement`) in Matt Pocock's system. It produces fully specified, pre-labeled `ready-for-agent` tickets directly, contrasting with `/triage` which serves as the intake filter for external, unvetted work.
