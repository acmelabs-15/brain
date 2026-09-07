---
package: rjm
name: LLM as data processor
slug: llm-as-data-processor
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

# LLM as data processor

## Definition — verbatim
> "| LLM as data processor | Generate code that processes data, not read-then-analyze | O(1) vs O(n) context |" — .claude/skills/analyze/references/context-budget-management.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 17 | defined here | Defines the antipattern of using LLMs directly for data filtering rather than writing code. |

## Consumes
Data transformation tasks, bulk string filtering, and tabular aggregations.

## Produces
Executable scripts that process data externally in O(1) context instead of O(n).

## When applied
Encountered whenever an agent faces bulk data manipulation or analysis requirements.

## Sub-concepts
none

## Part of
three-problems

## Implementation status
defects: missing-path

## Design notes
The antipattern of utilizing LLM prompt context to read, filter, and transform raw data. In rjm, agents must operate as code generators rather than data processors: writing small Python or shell scripts that execute externally processes arbitrary volumes of data with O(1) prompt overhead instead of O(n) token consumption.
