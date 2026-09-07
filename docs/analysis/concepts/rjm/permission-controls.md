---
package: rjm
name: Permission controls
slug: permission-controls
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Permission controls

## Definition — verbatim
> "### Permission controls" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 67 | defined here | Subsection header analyzing documented permission surfaces, scopes, and persistence in Copilot CLI. |

## Consumes
CLI flags, session approvals, user configuration files, and trusted directory settings.

## Produces
Access control verdicts regulating tool execution and external command invocation.

## When applied
Evaluated during tool execution requests and permission approval checks in agent harnesses.

## Sub-concepts
permissionrequest-output-and-failure

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Security controls in rjm governing agent tool invocation, delineating session-scoped CLI flags from user-level persisted configurations and enforcing strict boundaries where repo-committed policies are silent.
