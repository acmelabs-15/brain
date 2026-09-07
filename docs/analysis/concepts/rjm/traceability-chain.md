---
package: rjm
name: Traceability Chain
slug: traceability-chain
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

# Traceability Chain

## Definition — verbatim
> "**Traceability Chain**: `REQ-NNN → DESIGN-NNN → TASK-NNN`" — .agents/AGENT-SYSTEM.md:1100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1100 | defined here | Defined as the canonical 3-tier requirement-to-task linkage pattern (REQ-NNN → DESIGN-NNN → TASK-NNN) validated by the critic. |

## Consumes
EARS requirements (REQ-NNN), system designs (DESIGN-NNN), and task files (TASK-NNN).

## Produces
Validated bidirectional references linking high-level requirements down to executable atomic tasks.

## When applied
> "**Validation**: Every TASK traces to DESIGN, every DESIGN traces to REQ" — .agents/AGENT-SYSTEM.md:1102

## Sub-concepts
none

## Part of
- spec-layer-workflow
- traceability

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
The Traceability Chain defines the mandatory structural lineage governing requirements in rjm. By requiring that every atomic task (TASK-NNN) explicitly references an approved design (DESIGN-NNN), which in turn references a business requirement (REQ-NNN), the system prevents orphan tasks and unverified feature additions, enabling automated pre-PR validation of project scope.
