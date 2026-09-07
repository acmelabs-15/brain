---
package: rjm
name: Raw data flood
slug: raw-data-flood
kind: pattern
package_phase: cross-phase
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

# Raw data flood

## Definition — verbatim
> "| Raw data flood | Store in SQLite, return reference handle, query via BM25 | 98% |" — .claude/skills/analyze/references/context-budget-management.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 15 | defined here | Defines the raw data flood problem and its SQLite/BM25 mitigation delivering 98% context reduction. |

## Consumes
Large raw text files, tool dumps, and unfiltered API payloads.

## Produces
Offloaded SQLite storage and compact reference handles for BM25 retrieval.

## When applied
When an agent encounters large external datasets or search outputs that threaten context capacity.

## Sub-concepts
none

## Part of
three-problems

## Implementation status
defects: missing-path

## Design notes
Raw Data Flood occurs when an agent ingests full file contents, database dumps, or verbose tool outputs directly into its working prompt. In rjm, this problem is solved by externalizing raw text into local SQLite tables and returning concise reference handles, reducing token consumption by up to 98%.
