---
package: rjm
name: SECURITY_FLAG
slug: security-flag
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SECURITY_FLAG

## Definition — verbatim
> "a refactor would alter authentication, authorization, secret handling, or input validation. Stop and hand off to security agent." — templates/agents/code-simplifier.shared.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/code-simplifier.shared.md | 125 | used here | Agent failure mode and handoff status triggered when a proposed code refactor impacts sensitive security mechanisms. |

## Consumes
Candidate code refactors intersecting authentication, authorization, secret handling, or input validation logic.

## Produces
Execution halt and mandatory escalation handoff directed to a specialized security agent.

## When applied
Enforced when evaluating prospective code simplifications touching security-critical pathways.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A defensive security guardrail preventing automated code simplifications from accidentally degrading or altering security, authentication, or validation semantics.
