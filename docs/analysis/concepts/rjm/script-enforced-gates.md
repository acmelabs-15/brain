---
package: rjm
name: Script-Enforced Gates
slug: script-enforced-gates
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script-Enforced Gates

## Definition — verbatim
> "### Pattern A: Script-Enforced Gates" — .agents/governance/SKILL-PHASE-GATES.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 129 | defined here | Implementation pattern utilizing programmatic checks and exit codes in executable scripts to block workflow execution. |

## Consumes
Programmatic execution parameters, model thoughts, and environment state.

## Produces
Hard program termination (`sys.exit(1)`) on unmet gate conditions.

## When applied
Implemented in skills backed by executable scripts (Python or PowerShell) where deterministic enforcement is mandatory.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A deterministic enforcement pattern where validation scripts inspect preconditions and terminate with a non-zero exit code if conditions are not satisfied. It guarantees that protocol bypasses cannot succeed, at the cost of requiring script modification.
