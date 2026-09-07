---
package: rjm
name: structural guard
slug: structural-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# structural guard

## Definition — verbatim
> "failures had exactly that shape at first, because the structural guard was" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 131 | used here | Defensive check inspecting parsed object structures for duplicate score fields. |

## Consumes
Parsed data dictionaries and object trees.

## Produces
Rejections when nested objects contain unexpected duplicate target attributes.

## When applied
Applied to parsed payload trees that have already cleared syntax parsing.

## Sub-concepts
none

## Part of
duplicate-name-guards

## Implementation status
clean

## Design notes
An integrity check operating over parsed syntax trees rather than raw text to verify that nested dictionaries and keys do not contain duplicate score structures.
