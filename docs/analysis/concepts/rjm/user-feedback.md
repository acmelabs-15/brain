---
package: rjm
name: User Feedback
slug: user-feedback
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# User Feedback

## Definition — verbatim
> "**User Feedback:**" — .claude/agents/silent-failure-hunter.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 55 | defined here | Review axis evaluating clarity, actionability, and technical appropriateness of user-facing errors. |
| templates/agents/silent-failure-hunter.shared.md | 65 | defined here | Shared template review axis defining user feedback criteria for error handlers. |

## Consumes
User-facing error messages, alerts, dialogs, and error response payloads.

## Produces
Audit recommendations assessing whether end users receive actionable next steps without being exposed to unhelpful technical jargon.

## When applied
Applied during error handler inspection to verify that errors surfacing to end users are understandable and actionable.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
User Feedback is a code review checklist axis within silent-failure-hunter verifying that user-facing error messages provide clear, actionable explanations and remediation guidance rather than obscure or generic notifications.
