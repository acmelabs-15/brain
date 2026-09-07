---
package: rjm
name: Silent default for missing signal
slug: silent-default-for-missing-signal
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

# Silent default for missing signal

## Definition — verbatim
> "PR #1965 verdict parser defaulted missing to PASS, 3 fix rounds (FM-10)" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 160 | defined here | Chronicled as an anti-pattern violating FM-10, requiring missing signals to raise or block rather than defaulting to PASS. |

## Consumes
Parser logic, gate aggregations, and missing input data streams.

## Produces
False-positive PASS verdicts, bypassed safety checks, and multi-round bug fixes.

## When applied
Prohibited across all parser implementations, validation gates, and test suites.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An anti-pattern codified in FM-10 where missing signals or unmatched outputs are silently defaulted to PASS rather than failing safe to UNKNOWN or BLOCKING. Originating in PR #1965's verdict parser, it requires all parsers and gates to treat missing signals as blocking failures.
