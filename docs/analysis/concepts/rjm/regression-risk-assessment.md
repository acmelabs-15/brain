---
package: rjm
name: Regression Risk Assessment
slug: regression-risk-assessment
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

# Regression Risk Assessment

## Definition — verbatim
(used, not defined)

> "### Regression Risk Assessment (REQUIRED)" — .claude/skills/review/references/qa.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 192 | defined here | Output schema section heading detailing risk level, affected components, breaking changes, and required testing. |

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
`Regression Risk Assessment` is a required section heading within the QA review task reference defining the reporting structure for regression impact and component risk, classified as `kind: name-only` per D-023.
