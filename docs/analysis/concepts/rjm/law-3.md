---
package: rjm
name: Law 3
slug: law-3
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

# Law 3

## Definition — verbatim
(used, not defined)

> "reasoning and tool calls (Law 3)? Does it escalate to a human below a confidence" — .claude/skills/security-scan/references/agent-guardrails-template.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 65 | used here | PR review lens question checking whether new agent execution paths log reasoning and tool calls. |

## Consumes
Agent reasoning steps, tool invocations, and execution parameters.

## Produces
Immutable, detailed audit logs capturing operational provenance for forensic analysis.

## When applied
Applied to all autonomous tool invocations and decision points.

## Sub-concepts
audit-trail

## Part of
the-four-laws-of-agent-safety

## Implementation status
clean

## Design notes
The third rule in the Four Laws of Agent Safety ("Preserve the audit trail"). Law 3 requires that every action, tool call, and underlying rationale be logged immutably, ensuring full traceability and relieving the agent from having to waste tokens re-explaining past actions.
