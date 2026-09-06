---
package: addy
name: Common Assertions
slug: common-assertions
kind: checklist
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

# Common Assertions

## Definition — verbatim
> "## Common Assertions" — references/testing-patterns.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 45 | defined here | Section heading introducing catalog of standard assertion matchers across data types |

## Consumes
Computed test outcomes, expected return values, exceptions, and resolved promises.

## Produces
Precise, idiomatic assertion statements evaluating equality, truthiness, numeric ranges, string patterns, array membership, exceptions, and async resolution.

## When applied
When writing the Assert phase of any unit, integration, or component test.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Common Assertions provides a catalog of idiomatic assertion expressions categorized across data types (equality, truthiness, numbers, strings, collections, errors, and async flows). By standardizing on precise matchers (such as distinguishing strict equality `toBe`, deep equality `toEqual`, and structural/type strictness `toStrictEqual`), it guides agents to avoid overly broad assertions and ensure test rigor.
