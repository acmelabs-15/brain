---
package: rjm
name: Integration point
slug: integration-point
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration point

## Definition — verbatim
> "- **Integration point**: any call that crosses a process, host, or trust boundary. Treat every integration point as a known source of failure." — .claude/skills/software-engineering-library/references/release-it.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 112 | defined here | Identifies Class 2 hooks representing user-facing integration calls where graceful degradation is permitted. |
| .claude/skills/software-engineering-library/references/release-it.md | 16 | defined here | Foundational definition designating any call crossing a process, host, or trust boundary as an integration point. |

## Consumes
Outbound network, process, or IPC requests across boundaries.

## Produces
Defensive call boundaries wrapped with timeouts, circuit breakers, or bounded fallbacks.

## When applied
Applied whenever software or agent components communicate across process, host, or network trust boundaries.

## Sub-concepts
circuit-breaker, timeouts, bulkheads

## Part of
resilience-patterns

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural stability pattern drawn from *Release It!* and embedded into rjm's engineering library and ADR-066. Every interaction that crosses a process, host, or trust boundary is treated as suspect, requiring defensive boundaries such as timeouts, bulkheads, and graceful degradation to prevent cascading failures.
