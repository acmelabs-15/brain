---
package: rjm
name: Parallel dispatch
slug: parallel-dispatch
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parallel dispatch

## Definition — verbatim
> "Parallel dispatch**: Orchestrator can spawn multiple agents simultaneously for independent concerns" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 44 | defined here | Architectural decision mandating orchestrator capability to spawn multiple specialist agents concurrently for independent concerns. |

## Consumes
Independent task specifications, decomposed prompt requirements, and concurrent agent capacity.

## Produces
Multiple concurrently executing agent processes and independent result streams.

## When applied
Applied when a complex analysis, review, or implementation task has independent concerns that can be evaluated in parallel without serial dependencies.

## Sub-concepts
none

## Part of
parallel-safe-multi-agent-design

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Operationalized in scripts/workflow/parallel.py.

## Design notes
A multi-agent dispatch technique enabling the orchestrator to execute multiple specialist agents concurrently rather than serially. This achieves a 2-4x speedup across independent task streams (such as multi-axis reviews or concurrent file edits) while relying on downstream aggregation strategies to synthesize findings safely.
