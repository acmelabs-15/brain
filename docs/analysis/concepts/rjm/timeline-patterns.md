---
package: rjm
name: Timeline Patterns
slug: timeline-patterns
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timeline Patterns

## Definition — verbatim
> "### Timeline Patterns" — .claude/skills/retrospective/references/frameworks.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 80 | defined here | Section of Execution Trace template summarizing recurring temporal structures and execution rhythms. |

## Consumes
Chronological execution sequence data from the Execution Trace table.

## Produces
Descriptive list of temporal patterns and behavioral cadences across the session.

## When applied
Evaluated after constructing the Execution Trace table during Phase 0 Data Gathering.

## Sub-concepts
none

## Part of
execution-trace

## Implementation status
clean

## Design notes
Timeline Patterns captures higher-order temporal trends observed across an execution trace, such as repeated search-retry cycles or bursty tool calling. Documenting these patterns helps identify systemic workflow dynamics that individual event rows cannot convey.
