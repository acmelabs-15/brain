---
package: rjm
name: Audience Modes
slug: audience-modes
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Audience Modes

## Definition — verbatim
> "Every document has one audience. Ask if unclear." — .claude/agents/explainer.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 57 | defined here | Categorization of documentation target readers into Junior (default, Grade 9 reading level) and Expert modes. |
| templates/agents/explainer.shared.md | 63 | defined here | Categorization of documentation target readers into Junior and Expert modes. |

## Consumes
Target document intent, reader persona, technical complexity requirements.

## Produces
Calibrated prose matching appropriate reading level, jargon thresholds, and explanatory examples.

## When applied
Applied at the start of writing any document (PRD, explainer, onboarding guide, or spec).

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
Audience Modes solves communication misalignment by explicitly constraining technical depth. By defaulting to Junior mode (Grade 9 level, jargon defined on first use, mandatory examples) while reserving Expert mode for dense technical specifications, it prevents documentation from either condescending to experts or bewildering beginners.
