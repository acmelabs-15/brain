---
package: addy
name: React/Component Testing
slug: react-component-testing
kind: technique
package_phase: addy:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# React/Component Testing

## Definition — verbatim
> "## React/Component Testing" — references/testing-patterns.md:125

## Also called — verbatim
> "// Find elements by accessible role/label (not test IDs)" — references/testing-patterns.md:135

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 125 | defined here | Section heading introducing user-centric component testing via React Testing Library |

## Consumes
UI components, props, user event triggers, and accessibility DOM queries.

## Produces
Automated component tests querying elements by accessible roles and labels rather than brittle implementation attributes.

## When applied
When testing frontend UI components in React and related component libraries.

## Sub-concepts
none

## Part of
testing-patterns-reference-javascript-typescript

## Implementation status
clean

## Design notes
React/Component Testing emphasizes testing UI components from the end-user perspective using React Testing Library. It mandates querying DOM elements by accessible roles and labels (`findByRole`, `getByRole`) rather than artificial test IDs or internal component state, ensuring tests simultaneously verify accessibility semantics and remain resilient across visual or markup refactorings.
