---
package: addy
name: Re-renders
slug: re-renders
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Re-renders

## Definition — verbatim
(used, not defined)

> "// BAD: Creates new object on every render, causing children to re-render" — skills/performance-optimization/SKILL.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 269 | defined here | Analyzed as a React component anti-pattern where unstable object or function references trigger unnecessary child renders |

## Consumes
React component tree, state updates, prop references.

## Produces
Stable prop references, memoized components (`React.memo`), and cached expensive computations (`useMemo`).

## When applied
When profiling UI interactions reveals sluggish response times, main-thread blocking, or degraded Interaction to Next Paint (INP).

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Unnecessary re-renders in UI frameworks like React degrade interaction responsiveness by repeatedly recalculating virtual DOM trees when underlying state has not meaningfully changed. Addy provides concrete patterns to stabilize prop references, memoize expensive components, and isolate state changes to improve Interaction to Next Paint (INP).
