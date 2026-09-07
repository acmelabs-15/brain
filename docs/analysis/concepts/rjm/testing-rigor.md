---
package: rjm
name: TESTING-RIGOR
slug: testing-rigor
kind: reference
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

# TESTING-RIGOR

## Definition — verbatim
(used, not defined)

> "`.agents/governance/TESTING-RIGOR.md` is BLOCKING for code changes (its own Status line, TESTING-RIGOR.md:5)." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 36 | used here | Cited as a blocking governance standard for code changes, establishing mandatory test evidence requirements per function. |

## Consumes
Proposed code modifications, new function implementations, and refactored routines.

## Produces
Mandatory testing evidence including positive, negative, edge, error branch, and CLI contract coverage.

## When applied
Enforced as a blocking gate during PR creation and validation for every added or modified function.

## Sub-concepts
positive-test, negative-test, edge-tests, cli-contract, coverage-proof

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`TESTING-RIGOR` establishes a non-negotiable blocking governance standard for testing every function added or modified in rjm. It enforces rigorous coverage of positive, negative, and edge branches to eliminate happy-path complacency, originating from PR #1756 where missing branch tests allowed defects to escape until caught by external review bots.
