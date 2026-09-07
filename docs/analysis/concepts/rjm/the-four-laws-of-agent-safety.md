---
package: rjm
name: The Four Laws Of Agent Safety
slug: the-four-laws-of-agent-safety
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

# The Four Laws Of Agent Safety

## Definition — verbatim
> "## The Four Laws Of Agent Safety" — .claude/skills/security-scan/references/agent-guardrails-template.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 18 | defined here | Hierarchical constraint framework establishing four prioritized rules governing autonomous agent actions. |

## Consumes
Proposed agent actions, tool calls, and memory mutations.

## Produces
Deterministic conflict resolution where lower-numbered laws strictly override higher-numbered laws.

## When applied
Evaluated during PR review and runtime execution whenever agent behavior is defined or audited.

## Sub-concepts
law-1, law-2, law-3, law-4

## Part of
agent-guardrails-template

## Implementation status
clean

## Design notes
A hierarchical safety framework adapted from Asimov's laws for autonomous software agents. It establishes strict priority ordering: Law 1 (scope bounding) overrides Law 2 (confirmation tiers), which overrides Law 3 (audit logging), which overrides Law 4 (escalation), preventing agents from rationalizing out-of-scope actions.
