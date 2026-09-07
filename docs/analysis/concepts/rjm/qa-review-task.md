---
package: rjm
name: QA Review Task
slug: qa-review-task
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA Review Task

## Definition — verbatim
(used, not defined)

> "You are a rigorous QA reviewer. Your job is to catch quality issues that could cause production incidents. Be skeptical and thorough." — .claude/skills/review/references/qa.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 8 | defined here | Top-level document title heading defining prompt instructions and role expectations for QA PR review. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
QA Review Task is a document title heading in .claude/skills/review/references/qa.md rather than an independent lifecycle concept, classified as kind: name-only per D-023.
