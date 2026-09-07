---
package: rjm
name: Hypothesis-driven debugging
slug: hypothesis-driven-debugging
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hypothesis-driven debugging

## Definition — verbatim
> "When a test fails, form a hypothesis before changing code. Verify the hypothesis. Then fix." — .claude/commands/test.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 124 | defined here | Core principle and debugging methodology requiring developers and agents to formulate and verify hypotheses before modifying code upon test failure. |

## Consumes
Test failure diagnostic output, stack traces, reproduction steps, runtime state inspection.

## Produces
Validated failure hypotheses, targeted regression test cases, and surgical root-cause code fixes.

## When applied
Applied whenever automated test execution fails during `/test` or `/build` workflows.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Hypothesis-driven debugging prevents reactive, trial-and-error code modifications when test failures occur. By enforcing a scientific debugging loop—formulate hypothesis, verify with evidence, then apply fix—it ensures agents and developers deeply understand failure mechanisms, avoiding superficial workarounds that introduce secondary regressions.
