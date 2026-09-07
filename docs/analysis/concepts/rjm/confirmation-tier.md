---
package: rjm
name: confirmation tier
slug: confirmation-tier
kind: gate
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

# confirmation tier

## Definition — verbatim
> "2. **Verify before destructive operations.** An explicit confirmation tier" — .claude/skills/security-scan/references/agent-guardrails-template.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 24 | defined here | Explicit verification barrier guarding destructive or irreversible actions under Law 2. |

## Consumes
Destructive action requests (file deletions, database drops, git force-pushes, external mutations).

## Produces
Mandatory pause requiring explicit human approval or verification before execution.

## When applied
Required for any tool or script flagged as destructive or irreversible.

## Sub-concepts
none

## Part of
agent-guardrails-template

## Implementation status
clean

## Design notes
A safety gate implementing Law 2 of Agent Safety. Confirmation tiers insert a mandatory human-in-the-loop approval step before an agent can perform irreversible actions, preventing runaway autonomous agents from inflicting catastrophic environmental damage.
