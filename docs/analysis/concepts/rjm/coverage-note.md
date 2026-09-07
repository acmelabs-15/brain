---
package: rjm
name: coverage note
slug: coverage-note
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# coverage note

## Definition — verbatim
> "is unavailable, the gate records a coverage note and continues. It does not" — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 116 | defined here | Defined as an explicit audit record generated when retrieval infrastructure is unavailable or queries return zero results. |

## Consumes
Search query results, tool execution errors, and MCP availability status.

## Produces
Audit trail distinguishing between executed searches with zero results and unexecuted or degraded searches.

## When applied
Whenever retrieval tools degrade or topics return zero prior art during Step 0.5.

## Sub-concepts
none

## Part of
prior-art-constraints, step-0-5

## Implementation status
clean

## Design notes
An explicit audit note recorded in the Prior Art block when a search executes but finds nothing or when infrastructure degrades, preventing silent failures from masquerading as clean compliance.
