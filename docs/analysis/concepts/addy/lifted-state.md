---
package: addy
name: Lifted state
slug: lifted-state
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

# Lifted state

## Definition — verbatim
> "Lifted state                     → Shared between 2-3 sibling components" — skills/frontend-ui-engineering/SKILL.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 107 | defined here | Second tier in the state management hierarchy where state is hoisted to a common parent of 2-3 siblings |

## Consumes
State shared across closely related sibling components.

## Produces
Common parent state passed down via props to immediate children.

## When applied
When two or three sibling components must coordinate on the same state without needing global stores.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
State architecture technique where state is moved up to the closest common ancestor of sibling components that need to synchronize. It avoids introducing heavy global state solutions for localized multi-component interactions.
