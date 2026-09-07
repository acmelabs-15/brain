---
package: rjm
name: audit trail
slug: audit-trail
kind: artifact
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

# audit trail

## Definition — verbatim
> "3. **Preserve the audit trail.** Every action is logged with its reasoning and" — .claude/skills/security-scan/references/agent-guardrails-template.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 26 | defined here | Mandatory persistent log recording all agent reasoning, decisions, and tool calls under Law 3. |

## Consumes
Agent execution events, prompts, tool inputs, outputs, and reasoning traces.

## Produces
Immutable forensic log records enabling post-incident analysis and compliance verification.

## When applied
Maintained continuously throughout all agent invocations.

## Sub-concepts
none

## Part of
agent-guardrails-template

## Implementation status
clean

## Design notes
A core accountability artifact implementing Law 3 of Agent Safety. By recording every tool call, parameter, and reasoning step immutably, the audit trail enables forensic debugging, ensures accountability, and frees agents from redundantly recounting past decisions in active context.
