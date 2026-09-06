---
package: matt
name: round template
slug: round-template
kind: template
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/grilling-add-hr-between-questions.md, sha256: bcc1cc80f58662c9d2b40680bced44da7fa273f689a2b7eaf863a0da65790433}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# round template

## Definition — verbatim
(used, not defined)

> "round template" — .changeset/grilling-add-hr-between-questions.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/grilling-add-hr-between-questions.md | 5 | used here | Describes updating question formatting in the grilling skill template. |

## Consumes
Inquiry questions generated during an active grilling round.

## Produces
A structured conversational message formatting each interview question with horizontal rule separation.

## When applied
During interview rounds in grilling sessions to separate consecutive frontier questions.

## Sub-concepts
none

## Part of
grilling

## Implementation status
clean

## Design notes
A markdown formatting structure used by the grilling skill family to cleanly display multiple frontier questions in a single conversational turn. By separating questions with horizontal rules, it prevents questions from visually running together and ensures clear question boundaries.
