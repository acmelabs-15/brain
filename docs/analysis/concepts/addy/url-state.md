---
package: addy
name: URL state
slug: url-state
kind: technique
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

# URL state

## Definition — verbatim
> "URL state (searchParams)         → Filters, pagination, shareable UI state" — skills/frontend-ui-engineering/SKILL.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 109 | defined here | State tier managing bookmarkable, shareable parameters like search queries and pagination via query parameters |

## Consumes
Navigation parameters, search inputs, pagination indices, filter selections.

## Produces
Synchronized browser URL query parameters (searchParams) enabling shareable links and browser history navigation.

## When applied
When UI state needs to be bookmarkable, shareable via link, or preserved across page refreshes.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Technique for persisting UI state (filters, sort orders, active tabs, pagination) directly in the browser's URL parameters. This ensures pages are shareable, bookmarkable, and properly integrated with browser history.
