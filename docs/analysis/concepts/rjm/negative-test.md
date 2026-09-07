---
package: rjm
name: Negative test
slug: negative-test
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Negative test

## Definition — verbatim
> "Invalid input produces the language's idiomatic error, asserted" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 41 | defined here | Defined as asserting that invalid input produces the language's idiomatic error. |

## Consumes
Function error specifications, malformed data, and boundary rejection criteria.

## Produces
Test cases explicitly asserting idiomatic exception types, error codes, or failure returns.

## When applied
Required for every function added or modified under the TESTING-RIGOR evidence bar.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A mandatory validation practice asserting that improper or invalid inputs reliably produce explicit, idiomatic error handling rather than unhandled crashes or silent corruptions. It guarantees defensive boundaries across all modified routines.
