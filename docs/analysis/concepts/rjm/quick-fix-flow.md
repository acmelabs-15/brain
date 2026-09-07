---
package: rjm
name: Quick Fix Flow
slug: quick-fix-flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Fix Flow

## Definition — verbatim
> "For simple, well-defined fixes that can be explained in one sentence." — .agents/AGENT-SYSTEM.md:870

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 868 | defined here | Canonical workflow pattern sequencing orchestrator → implementer → qa for single-file, low-complexity changes. |

## Consumes
Low-complexity change requests (typos, single-file bug fixes, null checks) explainable in a single sentence.

## Produces
Implemented code changes verified by QA and completed without planning overhead.

## When applied
> "**Triage Signal**: Can explain fix in one sentence" — .agents/AGENT-SYSTEM.md:889

## Sub-concepts
none

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Quick Fix Flow is rjm's low-overhead execution path for trivial and obvious fixes. By routing directly from orchestrator to implementer and qa, it bypasses analysis, planning, and design reviews, saving substantial time and context tokens while preserving quality verification gates before task completion.
