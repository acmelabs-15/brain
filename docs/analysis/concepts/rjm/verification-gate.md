---
package: rjm
name: Verification Gate
slug: verification-gate
kind: gate
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

# Verification Gate

## Definition — verbatim
> "### 2. Verification Gate" — .agents/governance/SKILL-PHASE-GATES.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 36 | defined here | Defines the verification gate requiring confirmation of state and rollback paths before state modification. |

## Consumes
Current system state, expected target state, and rollback plan.

## Produces
State transition verification recorded in model thoughts.

## When applied
Triggered before applying state mutations, modifying repository files, or executing irreversible actions.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A gate requiring confirmation and documentation of current versus expected state, along with an explicit rollback path, before modifying files or system configuration. It protects against unintended side-effects and unrecoverable failures.
