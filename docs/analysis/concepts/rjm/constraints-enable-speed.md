---
package: rjm
name: Constraints Enable Speed
slug: constraints-enable-speed
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Constraints Enable Speed

## Definition — verbatim
> "Constraints Enable Speed" — .claude/skills/security-scan/references/agent-guardrails-template.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 34 | defined here | Architectural rationale demonstrating that unambiguous boundaries eliminate per-request self-checking and token overhead. |

## Consumes
Explicit scope boundaries, permission definitions, and validation guardrails.

## Produces
Rapid agent execution without hedging, repetitive deliberation, or redundant self-checking.

## When applied
Applied when designing agent architectures and system prompts to maximize execution velocity while guaranteeing safety.

## Sub-concepts
none

## Part of
agent-guardrails-template

## Implementation status
clean

## Design notes
A core agent design pattern resolving the false dichotomy between safety and speed. By defining crisp, inviolable boundaries upfront, agents avoid wasting tokens and inference cycles on constant self-doubt and defensive hedging, enabling fast autonomous execution within permitted zones.
