---
package: rjm
name: Coverage tool directive
slug: coverage-tool-directive
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coverage tool directive

## Definition — verbatim
> "**Coverage tool directive (A5)**: Before asserting any coverage claim, run the coverage tool against the diff." — .claude/agents/qa.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 81 | defined here | Mandates running the stack-specific coverage tool on the current diff before making any coverage claims. |

## Consumes
Stack-specific coverage tool commands from governance guidelines, implementation diffs.

## Produces
Empirically verified coverage metrics pasted directly into QA validation reports.

## When applied
Enforced whenever code changes are evaluated for test coverage before commit or PR approval.

## Sub-concepts
none

## Part of
test-strategy-reasoning-protocol

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Coverage Tool Directive enforces empirical verification over speculative claims. By requiring agents to execute the designated test coverage tool against code diffs and paste the exact output into reports, it prevents unverified assertions and ensures coverage thresholds are backed by tool output.
