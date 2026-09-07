---
package: rjm
name: Non-Functional Testing
slug: non-functional-testing
kind: gate
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

# Non-Functional Testing

## Definition — verbatim
> "You are a performance and reliability engineer. Focus on failure modes, not the happy path. Use measurable criteria, not subjective judgments." — .claude/commands/test.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 56 | defined here | Gate 2 in the `/test` command executed by the analyst agent to validate performance, scalability, reliability, complexity, and maintainability. |

## Consumes
Pull request diff, cyclomatic complexity calculations, async execution paths, caching and database query patterns.

## Produces
Gate verdict (`PASS|WARN|CRITICAL_FAIL`) and structured findings array documenting non-functional defects and bottlenecks.

## When applied
Executed as Gate 2 during `/test` for CODE and MIXED PR types.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Non-Functional Testing ensures that software changes do not compromise system performance, scalability, reliability, or code maintainability. Dispatched to a specialized analyst subagent operating on objective, measurable metrics (such as cyclomatic complexity <= 10 and absence of N+1 queries), it prevents architectural degradation before code reaches production.
