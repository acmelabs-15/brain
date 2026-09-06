---
package: addy
name: Loading and Transitions
slug: loading-and-transitions
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

# Loading and Transitions

## Definition — verbatim
> "## Loading and Transitions" — skills/frontend-ui-engineering/SKILL.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 258 | defined here | Section prescribing perceived performance patterns including skeletons and optimistic updates. |

## Consumes
Asynchronous data fetching states, mutation lifecycle triggers.

## Produces
Smooth, responsive visual feedback during pending network operations.

## When applied
When initiating asynchronous queries or mutations in user interfaces.

## Sub-concepts
skeleton-loading, optimistic-updates

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Loading and Transitions govern user feedback during asynchronous operations, favoring skeleton placeholders over blocking spinners and optimistic UI updates over waiting for server confirmations.
