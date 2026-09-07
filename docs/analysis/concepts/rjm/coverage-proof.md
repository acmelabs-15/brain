---
package: rjm
name: Coverage proof
slug: coverage-proof
kind: gate
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

# Coverage proof

## Definition — verbatim
> "100% block coverage on changed files (see Phase 4)" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 47 | defined here | Defined as achieving 100% block coverage on all changed files as verified during QA Phase 4. |

## Consumes
Code changes and test suite coverage execution data.

## Produces
Verifiable block coverage measurements satisfying automated quality gates.

## When applied
Enforced on changed files prior to PR submission.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A strict verification requirement demanding 100% block coverage on all modified files before PR submission. In rjm, coverage proof prevents partial or cosmetic testing, ensuring all execution branches have demonstrable test backing.
