---
package: rjm
name: Happy-path-only test suite
slug: happy-path-only-test-suite
kind: pattern
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

# Happy-path-only test suite

## Definition — verbatim
> "PR #1756: 20 tests, 24% coverage, bots caught the rest" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 156 | defined here | Chronicled as a QA anti-pattern where nominal-only tests left edge cases exposed until caught by automated review bots. |

## Consumes
Superficial test suites exercising only expected success flows.

## Produces
Hidden defects, low block coverage, and expensive downstream review bot churn.

## When applied
Flagged and blocked during code reviews under TESTING-RIGOR.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An anti-pattern in rjm where test suites exercise only valid nominal workflows, leaving error handlers, type checks, and whitespace handling untested. Chronicled in PR #1756, such suites yield poor coverage and leak defects to CI review bots.
