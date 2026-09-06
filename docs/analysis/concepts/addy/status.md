---
package: addy
name: status
slug: status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/index.html, sha256: 1e5fbf6fa6ce365eec1ddd0e1a21fc0b7f76a8506fc3119c6059a4d192defc06}
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# status

## Definition — verbatim
(used, not defined)
> "## Status" — skills/documentation-and-adrs/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/browser-testing-with-devtools/index.html | 9 | defines | DOM element id on a live paragraph element displaying request status messages. |
| skills/documentation-and-adrs/SKILL.md | 53 | defines | Section heading in the Architectural Decision Record (ADR) template tracking decision lifecycle state. |

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
status appears as an ADR document section heading and an HTML element ID in an eval fixture rather than an independent lifecycle concept.
