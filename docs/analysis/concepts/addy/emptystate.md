---
package: addy
name: EmptyState
slug: emptystate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# EmptyState

## Definition — verbatim
(used, not defined)
> "  if (tasks.length === 0) return <EmptyState message=\"No tasks yet\" />;" — skills/frontend-ui-engineering/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 86 | used here | JSX component invocation displaying a message when a data list contains zero items |

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
UI component identifier representing an empty collection fallback view in sample code rather than an engineering lifecycle concept.
