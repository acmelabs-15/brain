---
package: addy
name: Empty and Error States
slug: empty-and-error-states
kind: pattern
package_phase: addy:Build
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

# Empty and Error States

## Definition — verbatim
> "### Meaningful Empty and Error States" — skills/frontend-ui-engineering/SKILL.md:222
> "// Don't show blank screens" — skills/frontend-ui-engineering/SKILL.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 222 | defined here | Prescribes designing actionable empty and error UI states instead of blank views. |

## Consumes
Container state, collection query results, error boundary status.

## Produces
Explanatory, actionable UI components for zero-data and failure conditions.

## When applied
When collections are empty, search queries return no matches, or network requests fail.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Empty and Error States provide contextual guidance, icons, and clear calls to action (such as 'Create Task' or retry buttons) when data is missing or operations fail, preventing disorienting blank screens.
