---
package: rjm
name: Autonomous Execution Mode
slug: autonomous-execution-mode
kind: pattern
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

# Autonomous Execution Mode

## Definition — verbatim
> "#### Autonomous Execution Mode" — docs/technical-guardrails.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/technical-guardrails.md | 150 | defined here | Defines operational triggers and mandatory agent workflows when executing unattended. |

## Consumes
User prompts requesting independent execution such as "Drive this through to completion independently" or "left unattended".

## Produces
Multi-agent execution workflow adhering to unattended requirements and mandatory agent sign-offs.

## When applied
Triggered when user instructions explicitly specify unattended or autonomous completion.

## Sub-concepts
unattended-execution-requirements

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An operational execution pattern for AI agents triggered by prompts indicating autonomous operation, requiring explicit handoff loading, orchestrator coordination, pre-merge critic evaluation, post-change QA verification, and documented decision rationales.
