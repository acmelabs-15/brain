---
package: addy
name: DAMP Over DRY in Tests
slug: damp-over-dry-in-tests
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DAMP Over DRY in Tests

## Definition — verbatim
> "In production code, DRY (Don't Repeat Yourself) is usually right. In tests, **DAMP (Descriptive And Meaningful Phrases)** is better. A test should read like a specification — each test should tell a complete story without requiring the reader to trace through shared helpers." — skills/test-driven-development/SKILL.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 211 | defined here | Testing guideline preferring self-contained, descriptive test cases over aggressive abstraction and shared test helpers. |

## Consumes
Test scenarios, input fixtures, test descriptions.

## Produces
Self-contained test cases that communicate intent and failure reasons without indirection.

## When applied
When structuring test files and setting up test fixtures and inputs.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test design principle prioritizing readability and localized context over DRY code deduplication, encouraging self-contained tests that read like executable specifications so failures can be diagnosed without navigating through helper hierarchies.
