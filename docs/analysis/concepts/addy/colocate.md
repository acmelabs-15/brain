---
package: addy
name: Colocate
slug: colocate
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

# Colocate

## Definition — verbatim
> "Colocate everything related to a component:" — skills/frontend-ui-engineering/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 24 | defined here | Architectural rule mandating that component implementation, tests, stories, hooks, and types reside in the same directory |

## Consumes
Component files, test suites, storybook files, component-specific hooks and types.

## Produces
Modular, self-contained component directories under src/components/<ComponentName>/.

## When applied
When structuring component files and directories in frontend web applications.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Architectural file organization pattern requiring all artifacts associated with a component (implementation, unit tests, Storybook stories, custom hooks, and types) to live together in a single folder. This promotes modularity, simplifies refactoring, and avoids fragmented directory structures.
