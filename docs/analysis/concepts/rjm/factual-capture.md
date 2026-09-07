---
package: rjm
name: Factual capture
slug: factual-capture
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Factual capture

## Definition — verbatim
> "| Factual capture | Approved | \"Meeting rescheduled to Tuesday\" |" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 46 | defined here | Permitted class of memory writes recording objective facts that are approved by default. |

## Consumes
Objective, verifiable user statements or environmental facts.

## Produces
Explicit factual memory records without behavioral modification side effects.

## When applied
Applied during memory persistence when recording concrete external data.

## Sub-concepts
none

## Part of
the-permission-distinction

## Implementation status
clean

## Design notes
A legitimate class of agent memory operations focused strictly on recording verifiable facts (e.g. meeting times, version numbers). Because factual capture does not infer subjective interpersonal rules or modify future agent behavior, it is granted by default under the permission distinction.
