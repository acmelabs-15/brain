---
package: rjm
name: reliability
slug: reliability
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reliability

## Definition — verbatim
> "description: PR review focused on stability patterns, SLOs, and failure handling at integration points" — .claude/skills/review/references/reliability.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 2 | defined here | Frontmatter declaration of the reliability review task specification. |
| .claude/skills/review/SKILL.md | 29 | used here | Enumerated as one of the 11 Stage-2 canonical review axes evaluated by change risk. |

## Consumes
Pull request diffs, integration point code, and dependency failure handling implementations.

## Produces
Reliability review assessments, 5-aspect stability ratings, structured JSON findings, and PASS/WARN/CRITICAL_FAIL verdicts.

## When applied
Selected during Stage 2 of `/review` when diff touches integration points (network calls, child processes, queues, file watchers, MCP requests, or retry loops).

## Sub-concepts
production-survivability, timeouts-on-outbound-calls, retries, circuit-breakers-and-bulkheads, bounded-queues-and-buffers, slow-responses-and-deadlines, graceful-degradation-and-health

## Part of
review

## Implementation status
defects: missing-path, doc-drift (.claude/skills/review/SKILL.md:48); clean in .claude/skills/review/references/reliability.md

## Design notes
`reliability` is one of rjm's 11 canonical Stage-2 review axes, focusing on integration-point resilience, timeout hygiene, retry bounds, circuit breakers, and graceful degradation to guarantee production survivability under dependency failures.
