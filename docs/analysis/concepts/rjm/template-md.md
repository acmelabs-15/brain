---
package: rjm
name: TEMPLATE.md
slug: template-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TEMPLATE.md

## Definition — verbatim
(used, not defined)

> "Use `.agents/plans/TEMPLATE.md` as the starting point for new plans." — .claude/skills/execution-plans/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 38 | used here | File path specified as the boilerplate starting template for authoring new execution plans. |

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
`TEMPLATE.md` is a file name under `.agents/plans/` specifying the boilerplate template for new execution plans rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
