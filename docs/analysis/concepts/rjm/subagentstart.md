---
package: rjm
name: subagentStart
slug: subagentstart
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# subagentStart

## Definition — verbatim
> "subagentStart" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Listed in verified facts as a native Copilot CLI hook event. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 102 | defined here | Documented in official hook contract reference table of native events. |
| scripts/validation/hook_contracts.py | 39 | used here | Classified under NON_BLOCKING_HOOK_TYPES in hook contract validation. |

## Consumes
Subagent launch parameters, task identifiers, and parent agent context.

## Produces
Audit logging, context injection, or non-blocking tracking of subagent initialization.

## When applied
Fired by the CLI harness whenever a parent agent spawns a delegated child subagent.

## Sub-concepts
none

## Part of
official-hook-contracts, hook_contracts

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`subagentStart` is a lifecycle hook event triggered when a parent agent spawns a subagent task. In rjm's multi-agent system, it provides visibility into delegation hierarchies, logging task delegations and tracking subagent lifecycles without impeding child execution.
