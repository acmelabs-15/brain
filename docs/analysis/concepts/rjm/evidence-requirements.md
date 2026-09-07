---
package: rjm
name: Evidence Requirements
slug: evidence-requirements
kind: name-only
package_phase: rjm:review
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

# Evidence Requirements

## Definition — verbatim
(used, not defined)

> "## Evidence Requirements" — .claude/skills/review/references/qa.md:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 255 | defined here | Section heading establishing mandatory verdict, message, PR type, and evidence formatting for QA reviews. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
`Evidence Requirements` is a section heading in the QA review task reference prescribing the standard text output format and evidence payload structure, classified as `kind: name-only` per D-023.
