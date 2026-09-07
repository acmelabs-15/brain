---
package: rjm
name: PermissionRequest output and failure
slug: permissionrequest-output-and-failure
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

# PermissionRequest output and failure

## Definition — verbatim
> "### PermissionRequest output and failure" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 197 | defined here | Subsection header defining documented JSON output schema, valid behavior values, and exit-code semantics. |

## Consumes
Tool invocation metadata, security policies, and hook execution exit codes.

## Produces
Permission decisions (allow or deny), interruption directives, and reason messages.

## When applied
Triggered whenever an agent harness prompts for user or policy permission before running an action.

## Sub-concepts
none

## Part of
permission-controls

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The contract governing how hooks respond to PermissionRequest events, enforcing binary allow/deny outcomes, proper JSON structure, and appropriate exit-code handling across differing harness architectures.
