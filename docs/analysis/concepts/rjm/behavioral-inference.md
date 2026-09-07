---
package: rjm
name: Behavioral inference
slug: behavioral-inference
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

# Behavioral inference

## Definition — verbatim
> "| Behavioral inference | Requires explicit grant | \"User X responds better to approach Y\" |" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 47 | defined here | Restricted class of memory writes encoding behavioral adaptations that requires an explicit user grant. |

## Consumes
Interpersonal interaction observations and communication dynamics.

## Produces
Rules modifying future agent response styles and behavioral patterns.

## When applied
Governed by strict permission checks whenever an agent attempts to record subjective user preferences or self-modifying rules.

## Sub-concepts
none

## Part of
the-permission-distinction

## Implementation status
clean

## Design notes
A restricted class of memory operations where an agent derives subjective rules about user psychology or communication styles to alter future responses. Because behavioral inferences amount to autonomous self-programming, they require an explicit user grant and an audit trail to prevent unauthorized behavioral drift.
