---
package: rjm
name: Unattended Execution Requirements
slug: unattended-execution-requirements
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unattended Execution Requirements

## Definition — verbatim
> "### Unattended Execution Requirements" — docs/technical-guardrails.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/technical-guardrails.md | 77 | defined here | Establishes mandatory agent invocation protocols (orchestrator, critic, QA) and merge restrictions for autonomous operation. |

## Consumes
Autonomous task triggers, staged session logs, code changes, and pull request draft artifacts.

## Produces
Enforced invocation transcripts of orchestrator, critic, and QA agents, plus audit trail documentation for "won't fix" decisions.

## When applied
Applied whenever agents operate in autonomous or unattended execution mode without interactive human oversight.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A strict governance checklist and operational protocol enforced when agents run unattended, ensuring orchestrator coordination, pre-merge critic reviews, and post-change QA validations are mechanically executed rather than bypassed to prevent autonomous execution failures.
