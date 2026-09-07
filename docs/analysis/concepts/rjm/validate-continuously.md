---
package: rjm
name: Validate Continuously
slug: validate-continuously
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validate Continuously

## Definition — verbatim
> "Test after each removal" — .claude/agents/janitor.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 79 | defined here | Fourth step of the execution strategy mandating test execution immediately following each code removal. |

## Consumes
Incremental code deletions and project test commands.

## Produces
Immediate feedback on test suite status following every deletion or simplification step.

## When applied
Executed continuously after each deletion or simplification step before proceeding to subsequent changes.

## Sub-concepts
none

## Part of
execution-strategy

## Implementation status
clean

## Design notes
Requires immediate test execution after every individual removal rather than running tests only after an entire cleanup pass completes. This rapid feedback loop guarantees that any accidental breakages are detected at the exact step they occur, eliminating lengthy debugging sessions across large diffs.
