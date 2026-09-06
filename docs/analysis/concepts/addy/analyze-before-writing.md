---
package: addy
name: Analyze Before Writing
slug: analyze-before-writing
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Analyze Before Writing

## Definition — verbatim
> "### 1. Analyze Before Writing" — agents/test-engineer.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/test-engineer.md | 12 | defines | Section heading defining the pre-test analysis phase requiring developers to understand behavior, identify public APIs, spot edge cases, and check existing patterns. |

## Consumes
Source code under test, public API specifications, and existing test suite conventions.

## Produces
Understanding of interfaces, failure paths, and edge cases prior to test authoring.

## When applied
Applied as the foundational first step before authoring any test case.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Analyze Before Writing ensures that automated tests are designed against actual system behavior and edge cases rather than authored blindly against superficial happy paths.
