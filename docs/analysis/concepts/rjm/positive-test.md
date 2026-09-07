---
package: rjm
name: Positive test
slug: positive-test
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

# Positive test

## Definition — verbatim
> "Valid input produces the expected output" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 40 | defined here | Defined as the baseline testing requirement ensuring valid input produces expected output. |

## Consumes
Function specifications and valid input datasets.

## Produces
Test assertions confirming expected outputs under nominal execution conditions.

## When applied
Applied to every function added or changed as part of Phase 1 testing rigor.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Represents the baseline verification tier where valid inputs are supplied to confirm nominal behavior and expected return values. While necessary, rjm explicitly treats positive testing as insufficient on its own, pairing it with negative and edge tests to prevent happy-path bias.
