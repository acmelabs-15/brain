---
package: addy
name: Testing implementation details
slug: testing-implementation-details
kind: pattern
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

# Testing implementation details

## Definition — verbatim
> "| Testing implementation details | Breaks on refactor | Test inputs/outputs |" — references/testing-patterns.md:228

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 228 | defined here | Defined in test anti-patterns table as an anti-pattern that breaks on refactoring |

## Consumes
Internal private methods, component state variables, or implementation mechanics.

## Produces
Fragile test assertions that fail when underlying implementation details change even though user-observable behavior remains correct.

## When applied
When evaluating whether a test case couples to private state or internal mechanics rather than public inputs/outputs.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Testing implementation details is a pervasive testing anti-pattern where tests assert on internal variables, private methods, or execution mechanics rather than observable inputs and outputs. Addy's testing patterns emphasize that tests coupled to implementation break unnecessarily during refactoring, whereas behavioral tests remain valid as long as external contracts hold.
