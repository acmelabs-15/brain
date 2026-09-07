---
package: rjm
name: Documentation Gate
slug: documentation-gate
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

# Documentation Gate

## Definition — verbatim
> "### 4. Documentation Gate" — .agents/governance/SKILL-PHASE-GATES.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 82 | defined here | Defines the documentation gate requiring intermediate artifacts to be persisted on disk before downstream phases. |

## Consumes
Intermediate artifacts, output files, designated file paths.

## Produces
Confirmed file creation and persisted state for downstream steps.

## When applied
Triggered in multi-step workflows whenever an intermediate artifact must be saved before downstream execution.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A gate requiring intermediate workflow artifacts to be written to disk and verified before downstream tasks execute. This prevents loss of critical intermediate state across long-running or multi-phase workflows.
