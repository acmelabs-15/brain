---
package: rjm
name: Agent Selection Matrix
slug: agent-selection-matrix
kind: reference
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

# Agent Selection Matrix

## Definition — verbatim
> "| Task Type | Primary | Secondary | Validator |" — .agents/AGENT-SYSTEM.md:1170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1168 | defined here | Routing heuristic reference matrix mapping structured task types to primary, secondary, and validator agents. |

## Consumes
Categorized task types (e.g. formal specification, new feature, bug fix, refactor, security review).

## Produces
Prescribed triad assignments (Primary, Secondary, Validator) for orchestrating work.

## When applied
> "### Agent Selection Matrix" — .agents/AGENT-SYSTEM.md:1168

## Sub-concepts
none

## Part of
- orchestrator
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
The Agent Selection Matrix serves as rjm's routing lookup table for structured development tasks. By formally assigning a Primary agent, a Secondary specialist, and a Validator (such as critic or QA) to each distinct task classification, it establishes clear role divisions and ensures that validation is never omitted during execution.
