---
package: rjm
name: Interview transcript
slug: interview-transcript
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Interview transcript

## Definition — verbatim
> "Audit trail of decisions and rationale" — .claude/skills/requirements-interview/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 38 | defines | Output table row defining the interview transcript artifact located at `.agents/specs/interviews/INTERVIEW-<slug>.md`. |

## Consumes
User responses and recommended defaults during the requirements interview.

## Produces
Durable markdown audit log at `.agents/specs/interviews/INTERVIEW-<slug>.md`.

## When applied
Written upon completing the requirements interview.

## Sub-concepts
none

## Part of
requirements-interview

## Implementation status
clean

## Design notes
An audit trail artifact preserving the dialogue, proposed defaults, user confirmations, and rationale from the requirements interview. It ensures that decision history remains traceable throughout the lifecycle.
