---
package: rjm
name: Fail-Safe Pattern Verification
slug: fail-safe-pattern-verification
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fail-Safe Pattern Verification

## Definition — verbatim
> "#### Step 2: Fail-Safe Pattern Verification" — .claude/agents/qa.md:407

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 407 | defines | Step 2 of Pre-PR Quality Gate checking defensive coding patterns for critical execution paths. |
| templates/agents/qa.shared.md | 397 | defines | Shared template definition for verifying defensive coding patterns across critical code paths. |

## Consumes
Source diffs and code implementations in critical failure paths.

## Produces
Defensive coding verification findings with evidence of circuit breakers, fallbacks, or timeouts.

## When applied
Executed as the second step of the pre-PR quality gate.

## Sub-concepts
none

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
The second validation step of the pre-PR gate, requiring QA to inspect critical paths for explicit defensive coding patterns such as error handling, fallback behaviors, input sanitization, and graceful degradation. Without this verification, fragile failure paths could cause catastrophic cascading errors in production.
