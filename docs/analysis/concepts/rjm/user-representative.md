---
package: rjm
name: User Representative
slug: user-representative
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User Representative

## Definition — verbatim
> "| **User Representative** | Developer experience | Active agent system user |" — .agents/governance/steering-committee-charter.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 17 | defined here | Defines the committee seat responsible for evaluating developer experience and usability of agent interactions. |

## Consumes
Agent trigger ergonomics, entry criteria simplicity, documentation clarity, and workflow feedback.

## Produces
Developer experience assessments, usability critiques, and voting input.

## When applied
Evaluates all proposed agent interfaces from an end-user developer perspective.

## Sub-concepts
none

## Part of
committee-composition, agent-system-steering-committee

## Implementation status
defects: missing-path, doc-drift

## Design notes
A committee seat filled by an active user of the multi-agent system, ensuring agent interfaces are intuitive, entry criteria can be grasped quickly (<30 seconds), and workflows do not burden developer experience.
