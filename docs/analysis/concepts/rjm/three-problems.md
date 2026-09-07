---
package: rjm
name: Three Problems
slug: three-problems
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Three Problems

## Definition — verbatim
> "## Three Problems" — .claude/skills/analyze/references/context-budget-management.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 11 | defined here | Section defining the three core failure modes of context budget management in LLM agents. |

## Consumes
Context consumption logs and session token telemetry.

## Produces
Tripartite classification of context budget failure modes and their targeted mitigations.

## When applied
Used during agent architecture design and performance auditing to identify token inefficiency.

## Sub-concepts
raw-data-flood, compaction-amnesia, llm-as-data-processor

## Part of
context-budget-management

## Implementation status
defects: missing-path

## Design notes
The Three Problems identify the core architectural vulnerabilities that exhaust LLM agent context: Raw Data Flood, Compaction Amnesia, and treating the LLM as a Data Processor. Categorizing these distinct failure modes provides targeted architectural remediations, enabling sustainable long-running agent workflows.
