---
package: rjm
name: query-complexity-analyzer
slug: query-complexity-analyzer
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# query-complexity-analyzer

## Definition — verbatim
(used, not defined)

> "| `query-complexity-analyzer` | SQL performance risk, N+1, injection vectors |" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 51 | used here | Listed in the static analysis drift detection table as the tool identifying SQL performance risks, N+1 queries, and injection vectors. |

## Consumes
SQL queries, ORM calls, and database interaction logic.

## Produces
Query complexity metrics, performance risk warnings, and injection vector alerts.

## When applied
Applied during build verification or database access layer reviews to catch inefficient or insecure queries.

## Sub-concepts
none

## Part of
drift-detection-via-static-analysis

## Implementation status
clean

## Design notes
A specialized static analysis tool in rjm that inspects database access patterns for algorithmic complexity, unindexed queries, and potential injection vectors.
