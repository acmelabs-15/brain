---
package: rjm
name: Red Flags in an Interview
slug: red-flags-in-an-interview
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Red Flags in an Interview

## Definition — verbatim
> "### Red Flags in an Interview" — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 39 | defined here | Diagnostic checklist identifying signals of ungrounded assumptions and competence boundary overreach. |

## Consumes
User responses, interview dialogue dynamics, and cited rationales during decision branch exploration.

## Produces
Risk flags identifying remembered assumptions, uncalibrated domain shifts, or misplaced ownership.

## When applied
Monitored continuously during requirements interviews whenever answers are proposed or accepted.

## Sub-concepts
none

## Part of
circle-of-competence

## Implementation status
clean

## Design notes
Red Flags in an Interview provides a checklist of behavioral and conversational warning signs—such as uncited confident answers or 'we have always done it this way' justifications—that reveal when interviewees or agents are operating outside their circle of competence, triggering demands for higher verification before confirming requirements.
