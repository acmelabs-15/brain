---
package: rjm
name: SKIPPED
slug: skipped
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKIPPED

## Definition — verbatim
(used, not defined)

> "Mark all of them `SKIPPED` in the output table, set the FINAL VERDICT to the Stage-1 `CRITICAL_FAIL`, and emit only the Stage-1 findings." — .claude/skills/review/SKILL.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 73 | used here | Status token marking axes not executed due to short-circuit or risk-filtering. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
`SKIPPED` is an axis evaluation status token in the findings table indicating an axis was bypassed rather than an operational lifecycle concept, classified as name-only per D-023.
